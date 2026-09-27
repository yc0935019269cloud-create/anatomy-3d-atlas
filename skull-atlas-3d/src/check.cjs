const {chromium}=require('playwright');
const fs=require('fs');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'chrome',args:['--allow-file-access-from-files']});
 const page=await browser.newPage({viewport:{width:1440,height:1050},deviceScaleFactor:1});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('file:///E:/NEWTEST/skull-atlas-3d/index.html');await page.waitForFunction(()=>window.atlas);await page.waitForTimeout(1000);
 fs.mkdirSync('verification',{recursive:true});
 console.log(await page.evaluate(()=>({labels:atlas.labels.length,meshes:atlas.meshes.length,bounds:atlas.meshes.map(m=>({name:m.name,vertices:m.geometry.attributes.position.count}))})));
 for(const v of ['f','l','b','i']){await page.locator(`[data-view="${v}"]`).click();await page.waitForTimeout(400);await page.screenshot({path:`verification/${v}.png`});}
 await browser.close();console.log({errors});
})();
