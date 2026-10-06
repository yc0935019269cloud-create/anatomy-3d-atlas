import * as T from 'three';
// Ocular and orbital circulation that the source model lacks, drawn as explicit schematics (dashed labels),
// built at load time from the source eye and rectus meshes so the paths follow the model.
// Also one teaching correction: the source draws the retinal branches of the central retinal artery on the
// outer surface of the globe; they are moved onto the inner surface of the retina (nerve-fibre layer).
// Frame: mm, +X anatomical left, +Y superior, +Z anterior. Left eye; the right eye is mirrored.
const ART=0xff5a5a,VEIN=0x5f86f0;
export function createOcularVessels(meshes){const out=[];
 const mat=(c,o=1)=>new T.MeshStandardMaterial({color:c,roughness:.45,metalness:.03,transparent:o<1,opacity:o,depthWrite:o>=1,side:T.DoubleSide});
 const tag=(m,id,themes,category,color,extra={})=>{m.name=id;m.userData={category,themes,tags:[id],schematic:true,baseColor:color,...extra};out.push(m);return m;};
 function tube(id,pts,r,color,themes,closed=false,category='vessel-guide'){if(pts.length<2)return;const curve=new T.CatmullRomCurve3(pts.map(p=>p.isVector3?p.clone():new T.Vector3(...p)),closed);return tag(new T.Mesh(new T.TubeGeometry(curve,Math.max(32,pts.length*14),r,8,closed),mat(color)),id,themes,category,color);}
 function patch(id,centre,normal,r,color,themes,o=1,inner=0){const m=new T.Mesh(new T.RingGeometry(inner,r,40),mat(color,o));m.position.copy(centre);m.lookAt(centre.clone().add(normal));return tag(m,id,themes,'eye-guide',color,o<1?{fixedOpacity:o}:{});}
 function ball(id,pos,r,color,themes,o=1,category='vessel-guide'){const m=new T.Mesh(new T.SphereGeometry(r,20,14),mat(color,o));m.position.copy(pos);return tag(m,id,themes,category,color,o<1?{fixedOpacity:o}:{});}
 const report={};
 for(const [sfx,s] of [['.l',1],['.r',-1]]){
  const get=n=>meshes.find(m=>m.name===n+sfx);const sclera=get('Sclera'),iris=get('Iris'),retina=get('Retina');if(!sclera||!iris||!retina)continue;
  const verts=m=>{const a=m.geometry.attributes.position,v=[];for(let i=0;i<a.count;i++)v.push(new T.Vector3().fromBufferAttribute(a,i));return v;};
  const mean=v=>v.reduce((a,b)=>a.add(b),new T.Vector3()).divideScalar(v.length);
  // Eye frame from the source sclera (centre, radius), retina (radius) and iris (optical axis centre).
  // Centre from the sclera bounding box (vertex means are biased towards the denser front); radii as medians.
  const sv=verts(sclera),C=new T.Box3().setFromPoints(sv).getCenter(new T.Vector3()),median=a=>a.sort((x,y)=>x-y)[a.length>>1],R=median(sv.map(v=>v.distanceTo(C))),ax=mean(verts(iris));
  // The retina is a ~1 mm shell: Rr = its inner surface (posterior), Ro = outer surface.
  const pct=(a,q)=>a.sort((x,y)=>x-y)[Math.floor(a.length*q)],post=v=>v.filter(p=>p.z<C.z-3).map(p=>p.distanceTo(C)),Rr=pct(post(verts(retina)),.1),Ro=pct(post(verts(retina)),.9),Rs=pct(post(sv),.1);
  const lat=new T.Vector3(s,0,0),up=new T.Vector3(0,1,0),fwd=new T.Vector3(0,0,1);
  const onSphere=(r,theta,phi)=>C.clone().addScaledVector(fwd,-Math.cos(theta)*r).addScaledVector(lat,Math.sin(theta)*Math.cos(phi)*r).addScaledVector(up,Math.sin(theta)*Math.sin(phi)*r); // theta from posterior pole; phi 0 = temporal, 90° = superior
  const ring=(c,r,z,n=48)=>Array.from({length:n},(_,i)=>{const a=i/n*Math.PI*2;return new T.Vector3(c.x+r*Math.cos(a),c.y+r*Math.sin(a),z);});
  const pol=(c,r,a,z)=>new T.Vector3(c.x+s*r*Math.cos(a),c.y+r*Math.sin(a),z);
  const S=p=>new T.Vector3(s*p[0],p[1],p[2]);
  const dir=v=>v.clone().sub(C).normalize(),at=(d,r)=>C.clone().addScaledVector(d,r);
  const slerp=(a,b,t)=>a.clone().lerp(b,t).normalize();
  // ── Teaching correction: retinal branches of the CRA onto the inner retina ──
  const cra=get('Central retinal artery');if(cra){const a=cra.geometry.attributes.position,v=new T.Vector3();for(let i=0;i<a.count;i++){v.fromBufferAttribute(a,i);const d=v.distanceTo(C);const w=Math.min(1,Math.max(0,(R+1.6-d)/.8));if(!w||v.z<C.z-R*1.05)continue;const target=Rr-.3;v.copy(at(dir(v),d+(target-d)*w));a.setXYZ(i,v.x,v.y,v.z);}a.needsUpdate=true;cra.geometry.computeVertexNormals();cra.geometry.computeBoundingSphere();cra.userData.corrected=true;}
  // ── Fundus landmarks ──
  const discDir=dir(S([28.0,-47.0,51.5])),foveaDir=new T.Vector3(s*.06,-.03,-1).normalize();
  patch('guide:disc'+sfx,at(discDir,Rr-.25),discDir.clone().negate(),.95,0xf6d48a,'u');
  patch('guide:cup'+sfx,at(discDir,Rr-.32),discDir.clone().negate(),.3,0xfff6e0,'u');
  patch('guide:fundus-macula'+sfx,at(foveaDir,Rr-.22),foveaDir.clone().negate(),1.55,0x8f3a22,'u',.75);
  patch('guide:fundus-fovea'+sfx,at(foveaDir,Rr-.28),foveaDir.clone().negate(),.32,0x4a160c,'u');
  patch('guide:lamina'+sfx,at(discDir,R-.4),discDir.clone().negate(),.9,0xc9c1b2,'u',1,.15);
  // Cilioretinal artery: from the temporal disc margin towards the macula (present in ~20% of eyes).
  const cil=[];for(let t=0;t<=1.0001;t+=.1)cil.push(at(slerp(slerp(discDir,foveaDir,.12),slerp(discDir,foveaDir,.8),t),Rr-.38));tube('guide:cilioretinal'+sfx,cil,.16,0xff9f43,'u');
  // Hyaloid (Cloquet's) canal: optic disc → back of the lens.
  const lens=get('Lens');const lensBack=lens?new T.Vector3(...[ax.x,ax.y,Math.min(...verts(lens).map(p=>p.z))]):at(fwd,4);
  const hy=tube('guide:hyaloid'+sfx,[at(discDir,Rr-.8),at(discDir,Rr-.8).lerp(lensBack,.35).add(new T.Vector3(0,.6,0)),at(discDir,Rr-.8).lerp(lensBack,.7).add(new T.Vector3(0,.3,0)),lensBack],.7,0xcfe8f5,'u');hy.material.transparent=true;hy.material.opacity=.4;hy.material.depthWrite=false;hy.userData.fixedOpacity=.4;
  // Choroid: vascular layer between retina and sclera (posterior uvea), from the optic disc to the ora serrata.
  const ch=new T.Mesh(new T.SphereGeometry((Ro+Rs)/2,48,32,0,Math.PI*2,0,Math.PI*.68),mat(0x9a2f2f,.3));ch.rotation.x=-Math.PI/2;ch.position.copy(C);tag(ch,'guide:choroid'+sfx,'ku','eye-guide',0x9a2f2f,{fixedOpacity:.3});
  // ── Anterior segment ──
  const MAC={r:6.25,z:ax.z-2.1},mic={r:3.1,z:ax.z+.5};
  tube('guide:mac'+sfx,ring(ax,MAC.r,MAC.z),.32,0xff3d6e,'k',true);
  tube('guide:mic'+sfx,ring(ax,mic.r,mic.z),.22,0xff97a8,'k',true);
  tube('guide:schlemm'+sfx,ring(ax,6.95,ax.z-.6),.3,0x4f7cff,'k',true);
  tube('guide:episcleral'+sfx,ring(ax,7.8,ax.z-2),.14,0xff8fb0,'k',true);
  tube('guide:plicata'+sfx,ring(ax,6.6,ax.z-2.9),.24,0xb38cf0,'k',true);
  tube('guide:plana'+sfx,ring(ax,7.6,ax.z-4),.24,0x7fd0c0,'k',true);
  // Muscular branches → anterior ciliary arteries (2 per rectus, 1 for lateral rectus = 7) → limbus → major circle; anterior ciliary veins back.
  const OA=S([17.6,-40,44.5]);
  for(const [muscle,n,phi] of [['Superior rectus muscle',2,90],['Medial rectus muscle',2,180],['Inferior rectus muscle',2,270],['Lateral rectus muscle',1,0]]){const m=get(muscle);if(!m)continue;const v=verts(m),zmax=Math.max(...v.map(p=>p.z)),ins=mean(v.filter(p=>p.z>zmax-1.5)),zmid=(zmax+Math.min(...v.map(p=>p.z)))/2,belly=mean(v.filter(p=>Math.abs(p.z-zmid)<1.5));
   tube('guide:muscular-'+muscle[0]+phi+sfx,[OA,OA.clone().lerp(belly,.55).add(new T.Vector3(0,.8,0)),belly],.28,ART,'ke');
   for(let k=0;k<n;k++){const off=n===1?0:(k?.35:-.35),a=phi*Math.PI/180+off;const limbus=pol(ax,6.6,a,ax.z-1.2),circle=pol(ax,MAC.r,a,MAC.z);
    const side=new T.Vector3(-Math.sin(a)*s,Math.cos(a),0).multiplyScalar(n===1?0:(k?1.2:-1.2));
    tube('guide:aca-'+muscle[0]+k+sfx,[belly.clone().add(side),ins.clone().add(side).addScaledVector(fwd,.4),limbus,circle],.2,ART,'k');}
   const a=phi*Math.PI/180+.18,sideV=new T.Vector3(-Math.sin(a)*s,Math.cos(a),0).multiplyScalar(.7);
   tube('guide:acv-'+muscle[0]+sfx,[pol(ax,6.95,a,ax.z-.6),pol(ax,7.7,a,ax.z-2.2),ins.clone().add(sideV).addScaledVector(fwd,.2),belly.clone().add(sideV)],.2,VEIN,'k');}
  // Long posterior ciliary arteries inside the eye: medial and lateral horizontal meridians, suprachoroidal, to the major circle.
  for(const phi of [0,Math.PI]){const pts=[];for(let t=.33;t<=1.95;t+=.18)pts.push(onSphere(R-.7,t,phi));pts.push(pol(ax,MAC.r,phi,MAC.z));tube('guide:lpca-in-'+(phi?'m':'t')+sfx,pts,.26,0xff7a5a,'k');}
  // Short posterior ciliary arteries: from where the source vessels stop, fanning onto the sclera around the optic nerve; circle of Zinn–Haller.
  const discOn=(dx,dy)=>{const p=at(discDir,R);const x=p.x+dx,y=p.y+dy;return new T.Vector3(x,y,C.z-Math.sqrt(Math.max(0,R*R-(x-C.x)**2-(y-C.y)**2)));};
  tube('guide:zinn'+sfx,Array.from({length:40},(_,i)=>{const a=i/40*Math.PI*2;return discOn(2.3*Math.cos(a),2.3*Math.sin(a));}),.2,0xff9f43,'ku',true);
  [[25,-42.2,42.4],[23.8,-42.2,42.4]].forEach((e,j)=>{for(let k=0;k<4;k++){const a=(j*4+k)/8*Math.PI*2+.3,end=discOn(3.4*Math.cos(a),3.4*Math.sin(a));tube('guide:spca-ext'+j+k+sfx,[S(e),S(e).lerp(end,.55).add(new T.Vector3(0,0,-.5)),end],.17,ART,'k');}});
  // Central retinal vein: disc → alongside the optic nerve → leaves the nerve ~1 cm behind the globe → superior ophthalmic vein.
  tube('guide:crv'+sfx,[at(discDir,Rr-.3),discOn(.6,-.3),S([27.2,-46.9,49.5]),S([25.6,-46.3,46.6]),S([24.2,-45.6,44.2]),S([23.4,-41.5,43.2]),S([21.2,-37.6,42.1])],.3,VEIN,'ku');
  // Vortex veins: four quadrants, leaving the sclera just behind the equator → superior / inferior ophthalmic veins.
  for(const [q,phi,to] of [['st',45,[25.2,-34,52]],['sn',135,[19,-35.5,50]],['it',-45,[22,-52,49]],['in',-135,[18.5,-50,50]]]){const p=phi*Math.PI/180;tube('guide:vortex-'+q+sfx,[onSphere(R+.2,1.33,p),onSphere(R+3.5,1.2,p),S(to)],.3,VEIN,'k');}
  // ── Orbital branches and veins (theme e) ──
  const OAend=S([12.7,-41.3,53.9]),med=S([14,-47,75.5]);
  tube('guide:dorsal-nasal'+sfx,[OAend,S([12,-38,68]),S([10,-34,79]),S([7.5,-31,86])],.24,ART,'e');
  tube('guide:med-palp'+sfx,[OAend,S([13.2,-44,65]),med],.24,ART,'e');
  tube('guide:arcade-up'+sfx,[med,S([14,-41.5,77]),S([22,-38.6,80.3]),S([31,-38,81.4]),S([40,-39.5,79.5]),S([44.5,-43,76])],.2,ART,'e');
  tube('guide:arcade-lo'+sfx,[med,S([14,-54,77]),S([22,-57.2,79.6]),S([31,-58,80.3]),S([40,-57,78.8]),S([44.5,-53,76])],.2,ART,'e');
  tube('guide:lat-palp'+sfx,[S([42.3,-39.9,64.6]),S([44.5,-44,71]),S([45,-48,75.5]),S([44.5,-53,76])],.22,ART,'e');
  tube('guide:ant-meningeal'+sfx,[S([8,-43,60]),S([6,-37,63]),S([4,-28,66]),S([3,-14,68])],.22,ART,'e');
  tube('guide:zygomatic-br'+sfx,[S([38.5,-35.6,56.1]),S([44,-42,58]),S([48,-48,60]),S([51,-54,63])],.2,ART,'e');
  tube('guide:supratrochlear-v'+sfx,[S([11,-14,87]),S([12,-24,86]),S([13,-33,83]),S([13.8,-37,80])],.3,VEIN,'e');
  tube('guide:nasal-dorsum-v'+sfx,[S([7,-33,86]),S([10,-36,82]),S([13.8,-37,80])],.26,VEIN,'e');
  tube('guide:lacrimal-v'+sfx,[S([41.5,-36.5,64]),S([35,-34.5,60]),S([28,-34,56]),S([25.3,-33.8,55.1])],.28,VEIN,'e');
  tube('guide:infraorbital-v'+sfx,[S([28,-77,75]),S([27,-72,64]),S([25,-65,52]),S([27,-62,40]),S([33,-70,22])],.3,VEIN,'e');
  tube('guide:iov-pterygoid'+sfx,[S([17,-52,32]),S([24,-58,30]),S([32,-68,22])],.28,VEIN,'e');
  for(let k=0;k<6;k++)ball('guide:pterygoid'+k+sfx,S([31+3*Math.cos(k),-72-2.5*Math.sin(k*1.7),18+2*Math.sin(k)]),1.6,VEIN,'e',.55);
  if(sfx==='.l')report.frame={centre:C.toArray(),radius:+R.toFixed(2),retina:+Rr.toFixed(2),axis:ax.toArray(),disc:at(discDir,Rr-.25).toArray(),fovea:at(foveaDir,Rr-.22).toArray()};}
 // Danger triangle of the face (bridge of the nose to the corners of the mouth).
 const tri=[new T.Vector3(0,-40,99),new T.Vector3(19,-102,82),new T.Vector3(-19,-102,82)];tube('guide:danger',[...tri],.45,0xff4d4d,'e',true);
 out.report=report;return out;}

// Brain-base and neck vessels missing from the source (same illustrative paths as the brain atlas; carotid sinus marker).
export function createBrainVessels(){const out=[];
 for(const s of [1,-1]){const side=s>0?'.l':'.r',R=pts=>pts.map(([x,y,z])=>new T.Vector3(s*x,y,z));
  for(const [id,pts,r] of [['acha',[[13,-34,23],[14,-34,12],[16,-33,0],[20,-31,-13],[23,-24,-20]],.65],['heubner',[[5,-29,27],[8,-29,30],[12,-26,25],[13,-19,19]],.55],['lateral-orbitofrontal',[[30,-31,24],[38,-26,30],[43,-22,44]],.65],['ascending-frontal',[[37,-28,21],[48,-12,22],[50,2,25],[45,21,19]],.65],['labyrinthine',[[16,-60,-8],[25,-58,-4],[34,-57,-1]],.5],['psa',[[10,-73,-27],[7,-84,-31],[6,-100,-34]],.6],['posterior-choroidal',[[17,-31,-18],[13,-21,-23],[11,-12,-15],[17,-14,-5]],.5]]){
   const curve=new T.CatmullRomCurve3(R(pts)),m=new T.Mesh(new T.TubeGeometry(curve,64,r,8,false),new T.MeshStandardMaterial({color:0xbc95eb,roughness:.5}));m.name='guide:'+id+side;m.userData={category:'brainvessel-guide',themes:'b',tags:[m.name],schematic:true,baseColor:0xbc95eb};out.push(m);}
  const sinus=new T.Mesh(new T.SphereGeometry(3.6,24,16),new T.MeshStandardMaterial({color:0xff7b9c,roughness:.5,transparent:true,opacity:.55,depthWrite:false}));sinus.scale.set(1,1.6,1);sinus.position.set(s*31.6,-149,.2);sinus.name='guide:carotid-sinus'+side;sinus.userData={category:'brainvessel-guide',themes:'w',tags:[sinus.name],schematic:true,baseColor:0xff7b9c,fixedOpacity:.55};out.push(sinus);}
 return out;}
