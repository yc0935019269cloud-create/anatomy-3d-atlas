import * as T from 'three';
// Explicit teaching geometry for structures that the source model does not contain.
// Never presented as tractography, dissection data or measured anatomy.
const EYE={x:30.55,y:-49.3,z:63.3,r:12.4};
// Point on the back of the left globe, for nerves that enter the sclera.
const onGlobe=(x,y)=>[x,y,+(EYE.z-Math.sqrt(Math.max(0,EYE.r**2-(x-EYE.x)**2-(y-EYE.y)**2))).toFixed(2)];
export function createSchematics(){const result=[];
 const mat=(color,opacity=1)=>new T.MeshStandardMaterial({color,roughness:.5,metalness:.03,transparent:opacity<1,opacity});
 function tube(id,pts,radius,color,category,themes,tags=[],closed=false){const curve=new T.CatmullRomCurve3(pts.map(p=>new T.Vector3(...p)),closed);const mesh=new T.Mesh(new T.TubeGeometry(curve,Math.max(24,pts.length*10),radius,8,closed),mat(color));mesh.name=id;mesh.userData={category,themes,tags:[id,...tags],schematic:true,baseColor:color};result.push(mesh);return mesh;}
 function ball(id,pos,r,color,themes,category='reflex-guide'){const m=new T.Mesh(new T.SphereGeometry(r,20,14),mat(color));m.position.set(...pos);m.name=id;m.userData={category,themes,tags:[id],schematic:true,baseColor:color};result.push(m);return m;}
 for(const s of [1,-1]){const side=s>0?'.l':'.r';const R=pts=>pts.map(([x,y,z])=>[s*x,y,z]);
  // Optic radiation (same illustrative paths as the brain atlas).
  for(let i=0;i<5;i++){
   tube('guide:meyer'+side+i,R([[19,-28,-13],[27+i*.5,-30,4],[35+i,-33,13],[40+i,-34,-12],[34+i,-32,-47],[12+i*.8,-28,-79]]),1.05,0xff70cf,'path-guide','qv',['guide:radiation']);
   tube('guide:baum'+side+i,R([[19,-28,-13],[28+i,-17,-22],[34+i,-3,-39],[28+i,-6,-61],[10+i*.8,-17,-79]]),1.05,0x39f5cf,'path-guide','v',['guide:radiation']);
  }
  // Intrinsic eye muscles as rings.
  for(const [id,r,z,col] of [['ciliary',5.9,69,0x8dc7f3],['sphincter',2.1,74,0xe9b882]]){const pts=[];for(let i=0;i<40;i++){const a=i/40*Math.PI*2;pts.push([s*31+r*Math.cos(a),-49+r*Math.sin(a),z]);}tube('guide:'+id+side,pts,.45,col,'reflex-guide','g',[],true);}
  // V1 branches missing from the source model.
  tube('guide:lacrimal-n'+side,R([[16.6,-42.4,23.2],[20,-41.5,30],[26,-39.5,40],[33,-38.2,50],[38.5,-37.8,58],[41.5,-37.4,64]]),.55,0xff9ad5,'orbit-guide','o');
  tube('guide:nasociliary'+side,R([[14,-42.6,17.9],[15.8,-41.6,27],[16.3,-40.8,33.9],[17.8,-38.8,42],[15.5,-38.5,50],[13,-37.5,58],[12,-37,63]]),.55,0xffe36b,'orbit-guide','og');
  // Ciliary ganglion, its three roots, short and long ciliary nerves.
  const G=[22.4,-43,40.5];ball('guide:ganglion'+side,R([G])[0],1.35,0x7fc4f0,'g');
  tube('guide:root-para'+side,R([[24.1,-49.1,42.3],[23.6,-46.5,41.6],G]),.42,0x6fb6ff,'reflex-guide','g');
  tube('guide:root-sens'+side,R([[17.3,-40,38],[19.8,-40.8,39.4],G]),.38,0xffe36b,'reflex-guide','g');
  tube('guide:root-symp'+side,R([[13.8,-39.7,34.2],[17.5,-42,37.6],G]),.34,0xff6b6b,'reflex-guide','g');
  [[-2.6,1.8],[-1,2.8],[1.2,2.2],[2.2,-.6],[-2.2,-1.8]].forEach(([dx,dy],i)=>{const end=onGlobe(28.3+dx,-46.2+dy);tube('guide:short-ciliary'+side+i,R([G,[24.2+dx*.3,-44+dy*.3,45.5],end]),.28,0x9fd8ff,'reflex-guide','g');});
  [[23.6,-42.2],[22.4,-44]].forEach(([x,y],i)=>tube('guide:long-ciliary'+side+i,R([[17.8,-38.8,42],[20.6,-40.4,47],onGlobe(x,y)]),.28,0xffc36b,'reflex-guide','g'));
  ball('guide:pretectal'+side,R([[4.2,-25.5,-12]])[0],1.6,0xf38b5f,'g');
  // Dural sheath of the optic nerve: from the optic canal to where it fuses with the sclera behind the optic disc.
  const sheath=tube('guide:on-sheath'+side,R([[10.6,-35.9,28.7],[15.6,-39.3,36.2],[20.3,-42,41.5],[25,-44.6,46.8],[27.3,-45.7,51.4]]),1.75,0xb8a6dc,'dura-guide','qv');sheath.material.transparent=true;sheath.material.opacity=.42;sheath.material.depthWrite=false;sheath.userData.fixedOpacity=.42;
  const sinus=new T.Mesh(new T.SphereGeometry(1,24,16),mat(0x57c8ff,.38));sinus.scale.set(7,8,9);sinus.position.set(s*23,-73,59);sinus.name='guide:maxsinus'+side;sinus.userData={category:'sinus-guide',themes:'qo',tags:['guide:maxsinus'+side],schematic:true,baseColor:0x57c8ff,fixedOpacity:.38};result.push(sinus);
 }
 tube('guide:transsphenoidal',[[0,-62,96],[0,-58,72],[0,-51,46],[0,-46,31],[0,-43,20]],.8,0x6fe39a,'path-guide','c');
 return result;
}
// Ora serrata: follow the anterior rim of the source retina mesh.
export function createOra(retina){const a=retina.geometry.attributes.position,side=retina.name.endsWith('.r')?'.r':'.l';let maxZ=-Infinity,cx=0,cy=0,n=0;
 for(let i=0;i<a.count;i++)maxZ=Math.max(maxZ,a.getZ(i));
 const rim=[];for(let i=0;i<a.count;i++)if(a.getZ(i)>maxZ-.7){rim.push([a.getX(i),a.getY(i),a.getZ(i)]);cx+=a.getX(i);cy+=a.getY(i);n++;}
 cx/=n;cy/=n;const bins=Array.from({length:36},()=>[0,0,0,0]);
 for(const [x,y,z] of rim){const b=bins[Math.floor(((Math.atan2(y-cy,x-cx)+Math.PI)/(2*Math.PI))*36)%36];b[0]+=x;b[1]+=y;b[2]+=z;b[3]++;}
 const pts=bins.filter(b=>b[3]).map(b=>new T.Vector3(b[0]/b[3],b[1]/b[3],b[2]/b[3]));
 const mesh=new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts,true),120,.42,8,true),new T.MeshStandardMaterial({color:0xffc83d,roughness:.4}));
 mesh.name='guide:ora'+side;mesh.userData={category:'eye-guide',themes:'qvgk',tags:['guide:ora'+side],schematic:true,baseColor:0xffc83d};return mesh;}
