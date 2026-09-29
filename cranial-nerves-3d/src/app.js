import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {labels,groups,themeOrder} from './labels.js';
import {createSchematics,createOra} from './schematic.js';
import {notesHTML} from './notes.js';
import {correctAnnulus} from './annulus.js';
const $=id=>document.getElementById(id);
// Camera directions (from target to camera). Frame: +X left, +Y superior, +Z anterior.
const cameras={top:{dir:[0,1,-.02],up:[0,0,1],text:'上面觀 · 前方在上 · 左側在畫面左方'},bottom:{dir:[0,-1,-.02],up:[0,0,1],text:'底面觀 · 前方在上 · 左側在畫面右方'},front:{dir:[0,.12,1],up:[0,1,0],text:'前面觀 · 左側在畫面右方'},left:{dir:[1,0,0],up:[0,1,0],text:'左側觀 · 前方在畫面左方'},medial:{dir:[-1,0,0],up:[0,1,0],text:'由正中面看左半邊 · 前方在畫面右方'},oblique:{dir:[.62,.55,.56],up:[0,1,0],text:'立體斜視 · 可自由拖曳旋轉'}};
const frames={q:{target:[4,-38,2],zoom:1.3},f:{target:[0,-58,8],zoom:1.3},n:{target:[0,-60,2],zoom:1.9},o:{target:[20,-42,50],zoom:2.9},c:{target:[0,-46,20],zoom:3.6},g:{target:[14,-40,22],zoom:2.3},v:{target:[0,-28,-12],zoom:1.2}};
const typeNames={mesh:'原模型構造',guide:'原模型上的位置／通道',schematic:'示意（原模型沒有）',reference:'皮質內層次（無 3D 網格）'};
// Cranial nerve colours, reused by the legend.
export const nerveColors=[['I',/^Olfactory/,0xf4e38e],['II',/^Optic (nerve|chiasm|tract)/,0xffd35c],['III',/^Oculomotor/,0x5fa8ff],['IV',/^Trochlear nerve/,0xc58bff],['V1',/^Ophthalmic nerve/,0xffe36b],['V2',/^(Maxillary nerve|Meningeal branch of maxillary)/,0xffa94d],['V',/(Trigeminal|root of trigeminal)/,0xffc04d],['V3',/(mandibular nerve|Inferior alveolar|Lingual nerve|Buccal nerve|Mental nerve|mylohyoid)/,0xff7d3d],['VI',/^Abducens/,0x3fe0b0],['VII',/^Facial nerve/,0xff78a8],['VIII',/^(Vestibul|Cochlear)/,0xa3e070],['IX',/^Glossopharyngeal/,0x74d3ff],['X',/^Vagus/,0x98a8ff],['XI',/^Accessory nerve/,0xd9a4ff],['XII',/^Hypoglossal nerve/,0x57e3e0]];
let apexMode=false,apexPlane=new T.Plane(),planesBy={bone:[],brain:[],nerve:[],other:[]},hoverId=null,current='q',names=true,selected=null,language='both',renderer,scene,camera,controls,meshes=[],active=[],width=0,height=0,dirty=true,labelSlots=null;
const project=new T.Vector3();
// Three section planes. keep 'low' keeps coordinates below the slider value, 'high' keeps those above.
// Frame: x = anatomical left (+), y = superior (+), z = anterior (+).
const AXES={y:{index:1,name:'水平',low:'保留下方',high:'保留上方',start:-30},z:{index:2,name:'冠狀',low:'保留後方',high:'保留前方',start:20},x:{index:0,name:'矢狀',low:'保留右側',high:'保留左側',start:0}};
const cuts=Object.fromEntries(Object.keys(AXES).map(a=>[a,{keep:a==='x'?'high':'low',plane:new T.Plane()}]));
const SCOPES={bone:'骨',brain:'腦',nerve:'神經',other:'其他'};
// Which scope checkbox a mesh obeys.
function scopeOf(m){const c=m?.userData.category;return c==='bone'||c==='tooth'?'bone':['cortex','cerebellum','stem','deep','dura','dura-guide','path-guide'].includes(c)?'brain':['nerve','nucleus','orbit-guide','reflex-guide'].includes(c)?'nerve':'other';}
function sectionPlanes(){const by=Object.fromEntries(Object.keys(SCOPES).map(k=>[k,apexMode?[apexPlane]:[]]));for(const [a,c] of Object.entries(cuts)){if(!$('cut-'+a).checked)continue;const v=+$('cut-'+a+'-v').value,n=new T.Vector3();n.setComponent(AXES[a].index,c.keep==='low'?-1:1);c.plane.set(n,c.keep==='low'?v:-v);for(const k of Object.keys(SCOPES))if($('cut-'+a+'-'+k).checked)by[k].push(c.plane);}return by;}
function syncCutUI(){const parts=[];for(const [a,c] of Object.entries(cuts)){const on=$('cut-'+a).checked,v=$('cut-'+a+'-v').value;$('cut-'+a+'-o').textContent=v+' mm';$('cut-'+a+'-flip').textContent=AXES[a][c.keep];const on2=Object.keys(SCOPES).filter(k=>$('cut-'+a+'-'+k).checked);if(on)parts.push(AXES[a].name+' '+v+(on2.length===4?'':on2.length?'（'+on2.map(k=>SCOPES[k]).join('')+'）':'（未選）'));}if(apexMode)parts.unshift('眶尖斜切面');$('section-summary').textContent=parts.join('・')||'關';}
function presetCuts(g){for(const a of Object.keys(AXES)){const p=g.cuts[a];$('cut-'+a).checked=!!p;$('cut-'+a+'-v').value=p?p[0]:AXES[a].start;for(const k of Object.keys(SCOPES))$('cut-'+a+'-'+k).checked=p?(p[1]||k==='bone'):(a!=='y'||k==='bone');cuts[a].keep=a==='x'?'high':'low';}}
function decode(s,Ctor){return new Ctor(Uint8Array.from(atob(s),c=>c.charCodeAt(0)).buffer);}
function matches(m,l){return l.models.some(p=>m.name.startsWith(p)||(m.userData.tags||[]).some(t=>t.startsWith(p)));}
const isLower=n=>n==='Mandible'||n.startsWith('Lower ');
// Cranial nerve number of a nerve mesh (V1–V3 count as their own pair).
const cnCode=n=>{for(const [cn,re] of nerveColors)if(re.test(n))return cn;return null;};
function colorFor(item){const c=item.category,n=item.name;
 if(c==='nerve'){for(const [,re,col] of nerveColors)if(re.test(n))return col;return 0xf1d28c;}
 return c==='cortex'?0xcbaab5:c==='cerebellum'?0xbdadb0:c==='stem'?0xb7bcc9:c==='artery'?0xe06a6a:c==='bone'?0xdccfb0:c==='tooth'?0xf2e8d2:c==='sinus'?0x5cc4ec:c==='dura'?0xb8a6dc:c==='vein'?0x6f8ff0:c==='nucleus'?0xffa860:
  c==='orbit'?(/muscle|Levator/.test(n)?0xc8706c:/tendinous/.test(n)?0xf2ead2:/gland/.test(n)?0xe7b6da:0x7fd3ea):
  c==='eye'?(n.startsWith('Sclera')?0xdce5e3:n.startsWith('Retina')?0xb4bfdd:n.startsWith('Iris')?0x7b9db2:n.startsWith('Lens')?0xa9d7e9:n.startsWith('Cornea')?0xcfe8f0:0x9fc6d8):
  n.includes('geniculate')?0xe8c180:n.includes('hypophysis')?0xc29acb:n.includes('ventricle')?0x8cbacd:0xa4b5c1;}
async function initialize(){
 const compressed=Uint8Array.from(atob(window.CRANIAL_GZIP),c=>c.charCodeAt(0));const data=await new Response(new Blob([compressed]).stream().pipeThrough(new DecompressionStream('gzip'))).json();
 renderer=new T.WebGLRenderer({canvas:$('canvas'),antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.localClippingEnabled=true;renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
 scene=new T.Scene();camera=new T.OrthographicCamera(-180,180,130,-130,.1,2400);scene.add(new T.HemisphereLight(0xececff,0x463e4b,2));for(const [pos,col,intensity] of [[[180,260,280],0xffece6,2.3],[[-180,40,-200],0xb5cdef,1.4],[[0,-220,60],0xfad3cc,1.3]]){const light=new T.DirectionalLight(col,intensity);light.position.set(...pos);scene.add(light);}
 for(const item of data.meshes){const g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(decode(item.positions,Float32Array),3));g.setIndex(new T.BufferAttribute(decode(item.indices,Uint32Array),1));g.computeVertexNormals();const col=colorFor(item);const m=new T.Mesh(g,new T.MeshStandardMaterial({color:col,roughness:item.category==='bone'||item.category==='tooth'?.82:.62,side:T.DoubleSide}));m.name=item.name;m.userData={category:item.category,baseColor:col,schematic:false};meshes.push(m);scene.add(m);}
 const annulus=correctAnnulus(meshes);
 const schematic=createSchematics();for(const r of meshes.filter(m=>/^Retina\.[lr]$/.test(m.name)))schematic.push(createOra(r));meshes.push(...schematic);scene.add(...schematic);scene.updateMatrixWorld(true);
 for(const l of labels){l.matches=meshes.filter(m=>matches(m,l));l.point=new T.Vector3(...l.position);if(l.snap){const left=l.matches.filter(m=>/\.l\d*$/.test(m.name)),pool=left.length?left:l.matches;let dist=Infinity;const v=new T.Vector3();for(const m of pool){const a=m.geometry.attributes.position;for(let i=0;i<a.count;i++){v.fromBufferAttribute(a,i).applyMatrix4(m.matrixWorld);const d=v.distanceToSquared(new T.Vector3(...l.position));if(d<dist){dist=d;l.anchorMesh=m;l.localAnchor=new T.Vector3().fromBufferAttribute(a,i);}}}if(l.anchorMesh)l.point.copy(l.localAnchor).applyMatrix4(l.anchorMesh.matrixWorld);}}
 $('total').textContent=labels.length;buildLegend();
 setGroup('q');new ResizeObserver(resize).observe($('stage'));resize();$('loading').hidden=true;renderer.setAnimationLoop(()=>{controls.update();if(dirty){renderer.render(scene,camera);drawLabels();dirty=false;}});
 window.atlas={labels,groups,meshes,scene,get camera(){return camera;},get controls(){return controls;},annulus,setGroup,select:choose,setCamera,focusOn:id=>focusOn(labels.find(l=>l.id===id)),get state(){return {current,names,selected,active:active.length};}};
}
function buildLegend(){$('legend').replaceChildren();for(const [cn,,col] of nerveColors){const s=document.createElement('span');s.innerHTML=`<i style="background:#${col.toString(16).padStart(6,'0')}"></i>${cn}`;$('legend').append(s);}}
// Same drag feel as the skull atlas: orbit around camera.up with light damping. Rebuilt whenever camera.up changes.
function makeControls(target){controls?.dispose();controls=new OrbitControls(camera,$('canvas'));controls.enableDamping=true;controls.dampingFactor=.1;controls.minZoom=.45;controls.maxZoom=9;controls.target.copy(target);
 controls.addEventListener('change',()=>dirty=true);controls.addEventListener('start',()=>{$('canvas').classList.add('dragging');$('orientation').textContent='自由視角 · 指線可穿透表面，旋轉時留意前後關係';});controls.addEventListener('end',()=>$('canvas').classList.remove('dragging'));controls.update();}
function setCamera(which,frame=frames[current]){
 const c=cameras[which],target=new T.Vector3(...frame.target),dir=new T.Vector3(...c.dir).normalize();camera.up.set(...c.up);camera.position.copy(target).addScaledVector(dir,700);camera.zoom=frame.zoom;camera.lookAt(target);camera.updateProjectionMatrix();
 makeControls(target);labelSlots=null;$('camera-view').value=which;$('orientation').textContent=c.text;dirty=true;
}
function setGroup(id){current=id;selected=null;apexMode=false;$('apex-view').hidden=id!=='o';const g=groups[id];$('view-title').textContent=g.title;$('view-note').textContent=g.subtitle;$('flow').textContent=names?g.flow:'名稱與說明已隱藏 · 保留項目編號供自測';
 $('bone').value=g.bone;$('cortex').value=g.cortex;presetCuts(g);$('jaw').checked=id==='q';$('right').checked=id!=='g';$('cerebellum').checked=id==='n';$('guides').checked=true;$('search').value='';$('legend').hidden=!'fnoc'.includes(id);
 setCamera(g.camera);document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===id));updateModel();renderList();rebuildLabels();showDetail();}
function updateModel(){const groupLabels=labels.filter(l=>l.groups.includes(current)),sel=labels.find(l=>l.id===selected),bone=+$('bone').value,cortex=+$('cortex').value;const needed=new Set(groupLabels.flatMap(l=>l.matches));if(sel)sel.matches.forEach(m=>needed.add(m));
 $('bone-value').textContent=Math.round(bone*100)+'%';$('cortex-value').textContent=Math.round(cortex*100)+'%';$('nerve-dim-value').textContent=+$('nerve-dim').value?Math.round($('nerve-dim').value*100)+'%':'隱藏';syncCutUI();planesBy=sectionPlanes();
 // Selecting a nerve (or a foramen) emphasises those cranial nerves; the others fade to the「其他神經」opacity (0 = hidden).
 const isolate=sel&&current!=='v'?new Set(sel.matches.filter(m=>m.userData.category==='nerve').map(m=>cnCode(m.name)).filter(Boolean)):null;
 if(isolate?.has('V'))['V1','V2','V3'].forEach(c=>isolate.add(c));if(isolate&&['V1','V2','V3'].some(c=>isolate.has(c)))isolate.add('V');
 for(const m of meshes){const cat=m.userData.category,n=m.name,belongs=needed.has(m),highlight=sel?.matches.includes(m),th=current;let visible=belongs,opacity=1;
  if(cat==='bone'||cat==='tooth'){visible=bone>0&&(!isLower(n)||$('jaw').checked);opacity=bone;if(highlight&&bone<.3){visible=true;opacity=.45;}}
  else if(cat==='sinus'){visible=belongs||'qocf'.includes(th);opacity=belongs?.8:.45;}
  else if(cat==='cortex'){visible=cortex>0||highlight;opacity=highlight?Math.max(cortex,.75):cortex;}
  else if(cat==='cerebellum'){visible=$('cerebellum').checked;opacity=th==='n'?.5:.25;}
  else if(cat==='stem'){visible=belongs||'nqgvc'.includes(th);opacity=belongs?.9:th==='n'?.85:th==='g'?.35:.22;}
  else if(cat==='deep'){visible=belongs||('vg'.includes(th)&&/^Thalamus/.test(n));opacity=belongs?.85:.14;}
  else if(cat==='nerve'){visible=belongs||('fnoc'.includes(th)&&!(/^Optic tract/.test(n)&&th!=='n'))||(th==='g'&&/^(Oculomotor|Optic|Ophthalmic)/.test(n))||(th==='v'&&/^Optic/.test(n));opacity=belongs||'fnoc'.includes(th)?1:.45;if(isolate?.size){const on=isolate.has(cnCode(n)),dim=+$('nerve-dim').value;visible=on||dim>0;opacity=on?1:dim;}}
  else if(cat==='nucleus'){visible=belongs||'gn'.includes(th);opacity=belongs?1:.6;}
  else if(cat==='eye'){visible=th!=='n';opacity=n.startsWith('Sclera')?.13:n.startsWith('Retina')?.3:n.startsWith('Lens')?.6:n.startsWith('Cornea')?.18:n.startsWith('Vitreous')?0:.85;if(opacity===0&&!belongs)visible=false;}
  else if(cat==='orbit'){visible=belongs||'ocf'.includes(th);opacity=belongs?1:th==='o'||th==='f'?.95:.35;}
  else if(cat==='artery'){visible=belongs||('cf'.includes(th)&&/^(Internal carotid|Ophthalmic|Middle meningeal)/.test(n))||(th==='n'&&/^(Basilar|Vertebral|Internal carotid)/.test(n));opacity=belongs?1:.6;}
  else if(cat==='vein'){visible=belongs||'cof'.includes(th);opacity=/^Cavernous/.test(n)?(th==='c'?.55:.4):.8;}
  else if(cat==='dura'){visible=belongs&&(th==='q'||highlight);opacity=.32;}
  else if(m.userData.schematic){visible=belongs||(m.userData.themes||'').includes(th);opacity=m.userData.fixedOpacity??1;}
  if(apexMode&&(cat==='sinus'||cat==='sinus-guide'||cat==='bone'||cat==='tooth'))visible=false;
  if(m.userData.schematic&&!$('guides').checked)visible=false;
  if(!$('right').checked&&/\.r\d*$/.test(n))visible=false;
  if(highlight&&visible)opacity=Math.max(opacity,cat==='bone'||cat==='cortex'||cat==='vein'||cat==='sinus'||cat==='dura'?opacity:.8);
  const mat=m.material;m.visible=visible;mat.opacity=opacity;mat.transparent=opacity<.999;mat.depthWrite=opacity>.7;const pl=planesBy[scopeOf(m)];mat.clippingPlanes=pl.length?pl:null;mat.needsUpdate=true;
  mat.emissive.setHex(highlight?0x6a4b20:0);mat.emissiveIntensity=highlight?.7:0;if(cat==='path-guide'){mat.emissive.setHex(m.userData.baseColor);mat.emissiveIntensity=highlight?.9:.5;}if(cat==='nerve'&&(highlight||(isolate?.size&&isolate.has(cnCode(n))))){mat.emissive.setHex(m.userData.baseColor);mat.emissiveIntensity=.85;m.renderOrder=3;}
  m.renderOrder=cat==='nerve'&&isolate?.size&&isolate.has(cnCode(n))?3:opacity<.5?2:0;
 }
 dirty=true;
}
function search(l){return (l.zh+' '+l.en+' '+(l.quiz?'小考 '+l.quiz:'')).toLowerCase();}
function relevant(){const q=$('search').value.trim().toLowerCase();return q?labels.filter(l=>search(l).includes(q)):labels.filter(l=>l.groups.includes(current));}
function renderList(){const ls=relevant();$('count').textContent=ls.length+' 項';$('list-title').textContent=$('search').value?'跨主題搜尋結果':'本主題構造';$('structure-list').replaceChildren();for(const l of ls){const b=document.createElement('button');b.className='structure'+(selected===l.id?' selected':'');b.dataset.id=l.id;b.innerHTML=`<span class="num">${String(l.number).padStart(2,'0')}</span><div><strong>${names?l.zh:'項目 '+l.number}</strong><small>${names?l.en:'名稱已隱藏'}</small></div><span class="hint">${l.quiz?'考 '+l.quiz:l.representation==='schematic'?'示意':''}</span>`;b.onclick=()=>choose(l);$('structure-list').append(b);}if(!ls.length)$('structure-list').innerHTML='<p class="empty">沒有符合的構造。</p>';}
function choose(l){if(typeof l==='string')l=labels.find(x=>x.id===l);if(!l)return;if(!l.groups.includes(current)){const q=$('search').value;setGroup(l.groups[0]);$('search').value=q;}selected=l.id;if(l.representation==='schematic')$('guides').checked=true;updateModel();renderList();rebuildLabels();showDetail(l);}
function showDetail(l){const d=$('detail');d.querySelector('.detail-number').textContent=l?String(l.number).padStart(2,'0'):'◎';d.querySelector('h3').innerHTML=l?(names?`${l.zh}<small>${l.en}</small>`:`項目 ${l.number} · 名稱已隱藏`):(names?'點選構造，追蹤神經穿過哪個孔。':'名稱已全部隱藏');
 d.querySelector('p').textContent=l?(names?l.note:'可旋轉與點選編號。按「顯示所有名稱」揭曉名稱與說明。'):(names?'實線標籤是原模型構造或原模型上的位置；虛線是原模型沒有而另畫的示意。指線可穿透表面。':'模型標籤、側欄、流程文字及說明同步遮蔽。');
 $('detail-meta').replaceChildren();if(!l)return;const badge=document.createElement('span');badge.textContent=typeNames[l.representation]+(l.quiz?' · 小考第 '+l.quiz+' 題':'');$('detail-meta').append(badge);const zoom=document.createElement('button');zoom.textContent='🔍 放大到這裡';zoom.onclick=()=>focusOn(l);$('detail-meta').append(zoom);if(!names)return;
 const jump=(prefix,id)=>{const t=labels.find(x=>x.id===id);if(!t)return;const b=document.createElement('button');b.textContent=prefix+t.zh+' →';b.onclick=()=>choose(t);$('detail-meta').append(b);};
 for(const id of l.via)jump('穿過：',id);for(const t of labels.filter(x=>x.via.includes(l.id)))jump('通過：',t.id);}
// Recentre the trackball on a structure without changing the viewing direction.
function focusOn(l){const target=l.point.clone(),shift=new T.Vector3().subVectors(target,controls.target);camera.position.add(shift);controls.target.copy(target);camera.zoom=Math.min(9,Math.max(camera.zoom*1.8,4.5));camera.updateProjectionMatrix();controls.update();dirty=true;}
function labelHTML(l){const no=`<b>${String(l.number).padStart(2,'0')}</b>`;return !names?no:`${no}<div>${language!=='en'?`<div class="zh">${l.zh}</div>`:''}${language!=='zh'?`<div class="en">${l.en}</div>`:''}</div>`;}
function focusLeader(id){hoverId=id;$('leaders').classList.toggle('has-focus',!!id);for(const o of active){const focus=o.l.id===id;o.group.classList.toggle('focused',focus);o.el.classList.toggle('traced',focus);o.dot.setAttribute('r',focus?5:3.6);if(focus)$('leaders').append(o.group);}dirty=true;}
function rebuildLabels(){const ls=labels.filter(l=>l.groups.includes(current));$('labels').replaceChildren();$('leaders').replaceChildren();const svg=name=>document.createElementNS('http://www.w3.org/2000/svg',name);
 active=ls.map(l=>{const el=document.createElement('button');el.className='label '+(l.representation==='schematic'||l.representation==='reference'?'guide':'')+(selected===l.id?' selected':'');el.dataset.id=l.id;el.innerHTML=labelHTML(l);el.setAttribute('aria-label',names?l.zh:'項目 '+l.number);el.onclick=()=>choose(l);el.onpointerenter=()=>focusLeader(l.id);el.onpointerleave=()=>focusLeader(selected);el.onfocus=()=>focusLeader(l.id);el.onblur=()=>focusLeader(selected);$('labels').append(el);
  const group=svg('g'),halo=svg('line'),line=svg('line'),dot=svg('circle');group.dataset.id=l.id;halo.classList.add('leader-halo');line.classList.add('leader-main');line.classList.toggle('guide',l.representation==='schematic'||l.representation==='reference');dot.setAttribute('r',3.6);group.append(halo,line,dot);$('leaders').append(group);return {l,el,group,halo,line,dot};});focusLeader(selected);resize();}
function resize(){const mobile=innerWidth<=700;const rows=Math.ceil(active.length/2);$('stage').style.minHeight=mobile?Math.max(480,rows*51+46)+'px':Math.max(460,rows*44+40)+'px';const r=$('stage').getBoundingClientRect();width=r.width;height=r.height;$('leaders').setAttribute('viewBox',`0 0 ${width} ${height}`);if(!renderer)return;renderer.setSize(width,height,false);const half=width<500?height*.57:140;camera.left=-half*width/height;camera.right=half*width/height;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();dirty=true;}
function drawLabels(){if(!width||!camera)return;camera.updateMatrixWorld();
 const entries=active.map(o=>{if(o.l.anchorMesh)o.l.point.copy(o.l.localAnchor).applyMatrix4(o.l.anchorMesh.matrixWorld);project.copy(o.l.point).project(camera);return {...o,x:(project.x+1)*width/2,y:(1-project.y)*height/2,z:project.z};});
 // Fixed slots while rotating, so names do not jump across the screen.
 if(!labelSlots){const sorted=[...entries].sort((a,b)=>a.x-b.x),mid=Math.ceil(sorted.length/2);labelSlots=[sorted.slice(0,mid),sorted.slice(mid)].map(a=>a.sort((a,b)=>a.y-b.y).map(o=>o.l.id));}
 const byId=new Map(entries.map(o=>[o.l.id,o]));
 for(let side=0;side<2;side++){const arr=labelSlots[side].map(id=>byId.get(id)).filter(Boolean);const sizes=arr.map(o=>o.el.offsetHeight||34),total=sizes.reduce((a,b)=>a+b,0)+8*(arr.length-1);let y=Math.max(8,(height-total)/2);
  for(let i=0;i<arr.length;i++){const o=arr[i],w=o.el.offsetWidth,x=side?width-w-5:5;o.el.style.transform=`translate(${x}px,${y}px)`;const onscreen=o.z>-1&&o.z<1&&o.x>=0&&o.x<=width&&o.y>=0&&o.y<=height;const cutAway=planesBy[scopeOf(o.l.anchorMesh||o.l.matches[0])].some(p=>p.distanceToPoint(o.l.point)<-2);o.group.style.display=onscreen&&!cutAway&&(!selected||o.l.id===selected||o.l.id===hoverId)?'':'none';o.el.classList.toggle('muted',(!!selected&&o.l.id!==selected)||cutAway);o.el.classList.toggle('offscreen',!onscreen);
   for(const line of [o.halo,o.line]){line.setAttribute('x1',side?x:x+w);line.setAttribute('y1',y+sizes[i]/2);line.setAttribute('x2',o.x);line.setAttribute('y2',o.y);}o.dot.setAttribute('cx',o.x);o.dot.setAttribute('cy',o.y);y+=sizes[i]+8;}}
}
function toggleNames(show){names=show;document.body.classList.toggle('hidden-names',!show);$('hide').setAttribute('aria-pressed',!show);$('show').setAttribute('aria-pressed',show);if(!show){$('notes-dialog').close();$('source-dialog').close();}$('flow').textContent=show?groups[current].flow:'名稱與說明已隱藏 · 保留項目編號供自測';renderList();rebuildLabels();showDetail(labels.find(l=>l.id===selected));}
function showNotes(){if(!names){$('detail').querySelector('p').textContent='重點整理含答案，請先顯示所有名稱。';return;}$('notes-content').innerHTML=notesHTML;$('notes-content').querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{$('notes-dialog').close();choose(b.dataset.go);});$('notes-dialog').showModal();}
$('views').innerHTML=themeOrder.map((id,i)=>`<button data-view="${id}">${String(i+1).padStart(2,'0')}　${groups[id].title}</button>`).join('');
$('hide').onclick=()=>toggleNames(false);$('show').onclick=()=>toggleNames(true);$('views').onclick=e=>{const b=e.target.closest('[data-view]');if(b)setGroup(b.dataset.view);};$('search').oninput=renderList;$('reset').onclick=()=>setGroup(current);$('camera-view').onchange=()=>setCamera($('camera-view').value);
for(const id of ['bone','cortex','nerve-dim','cut-y-v','cut-z-v','cut-x-v'])$(id).oninput=updateModel;for(const id of ['jaw','right','cerebellum','guides','cut-y','cut-z','cut-x',...['y','z','x'].flatMap(a=>Object.keys(SCOPES).map(k=>`cut-${a}-${k}`))])$(id).onchange=updateModel;
for(const a of Object.keys(AXES)){$('cut-'+a+'-flip').onclick=()=>{cuts[a].keep=cuts[a].keep==='low'?'high':'low';$('cut-'+a).checked=true;updateModel();};$('cut-'+a+'-v').addEventListener('input',()=>{if(!$('cut-'+a).checked){$('cut-'+a).checked=true;updateModel();}});}
$('language').onchange=()=>{language=$('language').value;rebuildLabels();};$('clear').onclick=()=>{selected=null;updateModel();renderList();rebuildLabels();showDetail();};// Look straight at the common tendinous ring, cutting away everything in front of its plane.
function apexView(){const f=window.atlas.annulus['.l'].frame,c=new T.Vector3(...f.centre),n=new T.Vector3(...f.normal);apexMode=true;apexPlane.set(n.clone().negate(),n.dot(c)+1.5);
 for(const a of Object.keys(AXES))$('cut-'+a).checked=false;$('bone').value=0;$('cortex').value=0;
 camera.position.copy(c).addScaledVector(n,700);camera.up.set(0,1,0);camera.zoom=9;camera.updateProjectionMatrix();camera.lookAt(c);makeControls(c);labelSlots=null;
 $('orientation').textContent='沿眶軸從前方看眶尖 · 切面平行於共同腱環 · 上方在上';choose('annulus');}
$('apex-view').onclick=apexView;
$('source-button').onclick=()=>$('source-dialog').showModal();$('notes-button').onclick=showNotes;document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>$(b.dataset.close).close());
initialize().catch(e=>{$('loading').textContent='模型載入失敗：'+e.message+'。請使用新版 Chrome 或 Edge 開啟。';console.error(e);});
