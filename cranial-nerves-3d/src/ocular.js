import * as T from 'three';
// Ocular blood supply that the source model lacks, drawn as explicit schematics (dashed labels).
// Built at load time from the source eye and rectus muscle meshes so the paths follow the model.
// Frame: mm, +X anatomical left, +Y superior, +Z anterior. Left eye; the right eye is mirrored.
const ART=0xff5a5a,VEIN=0x5f86f0;
export function createOcularVessels(meshes){const out=[];
 const mat=c=>new T.MeshStandardMaterial({color:c,roughness:.45,metalness:.03});
 function tube(id,pts,r,color,tags=[],closed=false){if(pts.length<2)return;const curve=new T.CatmullRomCurve3(pts.map(p=>p.isVector3?p.clone():new T.Vector3(...p)),closed);const m=new T.Mesh(new T.TubeGeometry(curve,Math.max(32,pts.length*14),r,8,closed),mat(color));m.name=id;m.userData={category:'vessel-guide',themes:'e',tags:[id,...tags],schematic:true,baseColor:color};out.push(m);}
 for(const [sfx,s] of [['.l',1],['.r',-1]]){
  const get=n=>meshes.find(m=>m.name===n+sfx);const sclera=get('Sclera'),iris=get('Iris');if(!sclera||!iris)continue;
  const verts=m=>{const a=m.geometry.attributes.position,v=[];for(let i=0;i<a.count;i++)v.push(new T.Vector3().fromBufferAttribute(a,i));return v;};
  const mean=v=>v.reduce((a,b)=>a.add(b),new T.Vector3()).divideScalar(v.length);
  // Eye frame from the source sclera (centre, radius) and iris (optical axis centre).
  const sv=verts(sclera),C=mean(sv),R=sv.reduce((a,v)=>a+v.distanceTo(C),0)/sv.length,ax=mean(verts(iris));
  const lat=new T.Vector3(s,0,0),up=new T.Vector3(0,1,0),fwd=new T.Vector3(0,0,1);
  const onSphere=(r,theta,phi)=>C.clone().addScaledVector(fwd,-Math.cos(theta)*r).addScaledVector(lat,Math.sin(theta)*Math.cos(phi)*r).addScaledVector(up,Math.sin(theta)*Math.sin(phi)*r); // theta from posterior pole; phi 0 = lateral, 90° = superior
  const ring=(c,r,z,n=48)=>Array.from({length:n},(_,i)=>{const a=i/n*Math.PI*2;return new T.Vector3(c.x+r*Math.cos(a),c.y+r*Math.sin(a),z);});
  const pol=(c,r,a,z)=>new T.Vector3(c.x+s*r*Math.cos(a),c.y+r*Math.sin(a),z); // a in degrees-free radians, 0 = lateral
  const S=p=>new T.Vector3(s*p[0],p[1],p[2]);
  // 1) Major arterial circle (ciliary body, at the iris root) and minor arterial circle (iris collarette).
  const MAC={r:6.25,z:ax.z-2.1},mic={r:3.1,z:ax.z+.5};
  tube('guide:mac'+sfx,ring(ax,MAC.r,MAC.z),.32,0xff3d6e,[],true);
  tube('guide:mic'+sfx,ring(ax,mic.r,mic.z),.22,0xff97a8,[],true);
  // 2) Muscular branches → anterior ciliary arteries (2 per rectus, 1 for lateral rectus = 7) → limbus → major circle.
  const OA=S([17.6,-40,44.5]);
  for(const [muscle,n,phi] of [['Superior rectus muscle',2,90],['Medial rectus muscle',2,180],['Inferior rectus muscle',2,270],['Lateral rectus muscle',1,0]]){const m=get(muscle);if(!m)continue;const v=verts(m),zmax=Math.max(...v.map(p=>p.z)),ins=mean(v.filter(p=>p.z>zmax-1.5)),zmid=(zmax+Math.min(...v.map(p=>p.z)))/2,belly=mean(v.filter(p=>Math.abs(p.z-zmid)<1.5));
   tube('guide:muscular-'+muscle[0]+phi+sfx,[OA,OA.clone().lerp(belly,.55).add(new T.Vector3(0,.8,0)),belly],.28,ART);
   for(let k=0;k<n;k++){const off=n===1?0:(k?.35:-.35),a=phi*Math.PI/180+off;const limbus=pol(ax,6.6,a,ax.z-1.2),circle=pol(ax,MAC.r,a,MAC.z);
    const side=new T.Vector3(-Math.sin(a)*s,Math.cos(a),0).multiplyScalar(n===1?0:(k?1.2:-1.2));
    tube('guide:aca-'+muscle[0]+k+sfx,[belly.clone().add(side),ins.clone().add(side).addScaledVector(fwd,.4),limbus,circle],.2,ART);}}
  // 3) Long posterior ciliary arteries inside the eye: medial and lateral horizontal meridians, suprachoroidal, to the major circle.
  for(const phi of [0,Math.PI]){const pts=[];for(let t=.33;t<=1.95;t+=.18)pts.push(onSphere(R-.7,t,phi));pts.push(pol(ax,MAC.r,phi,MAC.z));tube('guide:lpca-in-'+(phi?'m':'t')+sfx,pts,.26,0xff7a5a);}
  // 4) Short posterior ciliary arteries: from where the source vessels stop, fanning onto the sclera around the optic nerve; circle of Zinn-Haller.
  const disc=S([28.3,-46.2,0]);const discOn=(dx,dy)=>{const x=disc.x+dx,y=disc.y+dy;return new T.Vector3(x,y,C.z-Math.sqrt(Math.max(0,R*R-(x-C.x)**2-(y-C.y)**2)));};
  const zh=Array.from({length:40},(_,i)=>{const a=i/40*Math.PI*2;return discOn(2.3*Math.cos(a),2.3*Math.sin(a));});tube('guide:zinn'+sfx,zh,.2,0xff9f43,[],true);
  [[25,-42.2,42.4],[23.8,-42.2,42.4]].forEach((e,j)=>{for(let k=0;k<4;k++){const a=(j*4+k)/8*Math.PI*2+.3,end=discOn(3.4*Math.cos(a),3.4*Math.sin(a));tube('guide:spca-ext'+j+k+sfx,[S(e),S(e).lerp(end,.55).add(new T.Vector3(0,0,-.5)),end],.17,ART);}});
  // 5) Central retinal vein: disc → alongside the optic nerve → leaves the nerve ~1 cm behind the globe → superior ophthalmic vein.
  tube('guide:crv'+sfx,[discOn(.6,-.3),S([27.2,-46.9,49.5]),S([25.6,-46.3,46.6]),S([24.2,-45.6,44.2]),S([23.4,-41.5,43.2]),S([21.2,-37.6,42.1])],.3,VEIN);
  // 6) Vortex veins: four quadrants, leaving the sclera just behind the equator → superior / inferior ophthalmic veins.
  for(const [q,phi,to] of [['st',45,[25.2,-34,52]],['sn',135,[19,-35.5,50]],['it',-45,[22,-52,49]],['in',-135,[18.5,-50,50]]]){const p=phi*Math.PI/180,exit=onSphere(R+.2,1.33,p),out1=onSphere(R+3.5,1.2,p);tube('guide:vortex-'+q+sfx,[exit,out1,S(to)],.3,VEIN);}
  // 7) Terminal branches of the ophthalmic artery at the front of the orbit.
  const OAend=S([12.7,-41.3,53.9]),med=S([14,-47,75.5]);
  tube('guide:dorsal-nasal'+sfx,[OAend,S([12,-38,68]),S([10,-34,79]),S([7.5,-31,86])],.24,ART);
  tube('guide:med-palp'+sfx,[OAend,S([13.2,-44,65]),med],.24,ART);
  const upper=[S([14,-41.5,77]),S([22,-38.6,80.3]),S([31,-38,81.4]),S([40,-39.5,79.5]),S([44.5,-43,76])],lower=[S([14,-54,77]),S([22,-57.2,79.6]),S([31,-58,80.3]),S([40,-57,78.8]),S([44.5,-53,76])];
  tube('guide:arcade-up'+sfx,[med,...upper],.2,ART);tube('guide:arcade-lo'+sfx,[med,...lower],.2,ART);
  tube('guide:lat-palp'+sfx,[S([42.3,-39.9,64.6]),S([44.5,-44,71]),S([45,-48,75.5]),S([44.5,-53,76])],.22,ART);
  if(sfx==='.l')out.frame={centre:C.toArray(),radius:+R.toFixed(2),axis:ax.toArray()};}
 return out;}
