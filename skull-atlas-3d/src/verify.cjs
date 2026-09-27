const {chromium}=require('playwright');
const fs=require('node:fs');
const assert=require('node:assert/strict');
(async()=>{
const browser=await chromium.launch({channel:'chrome',headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1000},offline:true});
const page=await context.newPage();const errors=[],checks=[];const requests=[];
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});page.on('request',r=>{if(/^https?:/.test(r.url()))requests.push(r.url());});
await page.goto('file:///E:/NEWTEST/skull-atlas-3d/index.html');await page.waitForFunction(()=>window.atlas);await page.waitForTimeout(400);
const model=await page.evaluate(()=>({count:atlas.labels.length,ids:new Set(atlas.labels.map(l=>l.id)).size,meshes:atlas.meshes.length,vertices:atlas.meshes.reduce((n,m)=>n+m.geometry.attributes.position.count,0)}));
assert.equal(model.count,49);assert.equal(model.ids,49);assert.equal(model.meshes,50);assert.equal(model.vertices,79682);checks.push('49 unique entries; 50 meshes; 79682 vertices');
for(const [view,count] of Object.entries({f:19,l:14,b:18,i:14})){
 await page.locator(`[data-view="${view}"]`).click();await page.waitForTimeout(250);
 assert.equal(await page.locator('.structure').count(),count);assert.equal(await page.locator('.label:visible').count(),count);
 await page.screenshot({path:`verification/${view}.png`});
 const overlaps=await page.evaluate(()=>{const r=[...document.querySelectorAll('.label')].filter(e=>e.offsetWidth).map(e=>e.getBoundingClientRect());let n=0;for(let i=0;i<r.length;i++)for(let j=i+1;j<r.length;j++)if(r[i].left<r[j].right&&r[i].right>r[j].left&&r[i].top<r[j].bottom&&r[i].bottom>r[j].top)n++;return n;});assert.equal(overlaps,0);
 checks.push(`${view}: ${count} labels present, visible and non-overlapping`);
}
await page.locator('#hide').click();assert.equal(await page.locator('.label .zh').count(),0);assert.equal(await page.locator('.label .en').count(),0);assert.ok(!(await page.locator('#structure-list').innerText()).includes('Foramen'));assert.ok(!(await page.locator('#detail').innerText()).includes('篩板'));
await page.locator('.structure').first().click();assert.ok((await page.locator('#detail').innerText()).includes('名稱已隱藏'));await page.locator('#reference').click();assert.equal(await page.locator('#reference-dialog').evaluate(e=>e.open),false);checks.push('Hide masks canvas labels, list and detail; photo answers stay closed');
await page.screenshot({path:'verification/hidden.png'});await page.locator('#show').click();assert.equal(await page.locator('.label .zh').count(),14);checks.push('Show restores all active-view names');
await page.locator('#search').fill('Mental foramen');assert.equal(await page.locator('.structure').count(),1);await page.locator('.structure').click();assert.equal(await page.evaluate(()=>atlas.state.current),'f');assert.equal(await page.evaluate(()=>atlas.state.selected),'mental');checks.push('Cross-view English search switches to front and selects mental foramen');
await page.locator('#search').fill('篩板');assert.equal(await page.locator('.structure').count(),1);await page.locator('.structure').click();assert.equal(await page.evaluate(()=>atlas.state.current),'i');checks.push('Chinese search finds cribriform plate');
await page.locator('#language').selectOption('en');assert.equal(await page.locator('.label .zh').count(),0);await page.locator('#language').selectOption('zh');assert.equal(await page.locator('.label .en').count(),0);await page.locator('#language').selectOption('both');checks.push('Both language-only modes work');
await page.locator('[data-view="f"]').click();await page.locator('#jaw').uncheck();assert.equal(await page.evaluate(()=>atlas.meshes.find(m=>m.name==='Mandible').visible),false);await page.locator('#jaw').check();
await page.locator('#colors').check();await page.locator('#xray').check();assert.equal(await page.evaluate(()=>atlas.meshes[0].material.opacity),.35);await page.locator('#xray').uncheck();await page.locator('#colors').uncheck();
const before=await page.evaluate(()=>atlas.camera.position.toArray());const box=await page.locator('#canvas').boundingBox();await page.mouse.move(box.x+box.width*.5,box.y+box.height*.5);await page.mouse.down();await page.mouse.move(box.x+box.width*.6,box.y+box.height*.6,{steps:12});await page.mouse.up();await page.waitForTimeout(300);const after=await page.evaluate(()=>atlas.camera.position.toArray());assert.notDeepEqual(before,after);await page.mouse.wheel(0,-200);await page.waitForTimeout(300);assert.ok(await page.evaluate(()=>atlas.camera.zoom>1));checks.push('Drag rotation, wheel zoom, jaw, color and transparency controls');
await page.locator('#reset').click();assert.equal(await page.evaluate(()=>atlas.camera.zoom),1);
await page.locator('#reference').click();await page.waitForFunction(()=>document.getElementById('reference-img').naturalWidth>0);assert.equal(await page.locator('#reference-dialog').evaluate(e=>e.open),true);await page.locator('[data-close="reference-dialog"]').click();checks.push('Local reference photo opens offline');
await page.setViewportSize({width:390,height:844});await page.locator('[data-view="f"]').click();await page.waitForTimeout(400);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));assert.equal(await page.locator('.label:visible').count(),19);await page.screenshot({path:'verification/mobile.png',fullPage:true});checks.push('390px mobile: no horizontal overflow; 19 visible labels');
assert.equal(requests.length,0);assert.deepEqual(errors,[]);checks.push('No runtime/console errors or HTTP requests in offline mode');
const report={testedAt:new Date().toISOString(),model,checks,errors,requests};fs.writeFileSync('verification/report.json',JSON.stringify(report,null,2));await browser.close();console.log(JSON.stringify(report,null,2));
})().catch(e=>{console.error(e);process.exit(1)});
