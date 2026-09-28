import * as T from 'three';
// Explicit teaching geometry, never labelled as tractography or atlas segmentation.
export function createSchematics(){const result=[];
 function tube(id,pts,radius,color,category='guide',tags=[]){const curve=new T.CatmullRomCurve3(pts.map(p=>new T.Vector3(...p)));const mesh=new T.Mesh(new T.TubeGeometry(curve,64,radius,8,false),new T.MeshStandardMaterial({color,roughness:.55,metalness:.04}));mesh.name=id;mesh.userData={category,tags:[id,...tags],schematic:true,baseColor:color,center:curve.getPoint(.5).toArray()};result.push(mesh);return mesh;}
 function ball(id,pos,r,color){const m=new T.Mesh(new T.SphereGeometry(r,16,12),new T.MeshStandardMaterial({color}));m.position.set(...pos);m.name=id;m.userData={category:'reflex-guide',tags:[id],schematic:true,baseColor:color,center:pos};result.push(m);}
 for(const s of [-1,1]){const side=s>0?'.l':'.r';const reflect=pts=>pts.map(([x,y,z])=>[s*x,y,z]);
  for(let i=0;i<5;i++){
   tube('guide:meyer'+side+i,reflect([[19,-28,-13],[27+i*.5,-30,4],[35+i,-33,13],[40+i,-34,-12],[34+i,-32,-47],[12+i*.8,-28,-79]]),1.05,0xff70cf,'path-guide',['guide:radiation','guide:meyer']);
   tube('guide:baum'+side+i,reflect([[19,-28,-13],[28+i,-17,-22],[34+i,-3,-39],[28+i,-6,-61],[10+i*.8,-17,-79]]),1.05,0x39f5cf,'path-guide',['guide:radiation','guide:baum']);
  }
  const vascular=[['acha',[[13,-34,23],[14,-34,12],[16,-33,0],[20,-31,-13],[23,-24,-20]],.65],['heubner',[[5,-29,27],[8,-29,30],[12,-26,25],[13,-19,19]],.55],['lateral-orbitofrontal',[[30,-31,24],[38,-26,30],[43,-22,44]],.65],['ascending-frontal',[[37,-28,21],[48,-12,22],[50,2,25],[45,21,19]],.65],['labyrinthine',[[16,-60,-8],[25,-58,-4],[34,-57,-1]],.5],['psa',[[10,-73,-27],[7,-84,-31],[6,-100,-34]],.6],['posterior-choroidal',[[17,-31,-18],[13,-21,-23],[11,-12,-15],[17,-14,-5]],.5]];
  for(const [id,pts,r] of vascular)tube('guide:'+id+side,reflect(pts),r,0xbc95eb,'artery-guide');
  const white=[['anterior-limb',[[11,-6,25],[12,-10,17],[13,-12,11]]],['genu',[[13,-12,14],[13,-13,10],[15,-14,7]]],['posterior-limb',[[15,-14,7],[17,-15,0],[21,-16,-9]]],['sublenticular',[[17,-25,6],[23,-25,0],[30,-25,-7]]],['retrolenticular',[[22,-16,-10],[26,-13,-18],[29,-14,-24]]]];
  for(const [id,pts] of white)tube('guide:'+id+side,reflect(pts),1.1,0xe7d8a4,'deep-guide',['guide:internal-capsule']);
  for(let i=0;i<5;i++)tube('guide:corona'+side+i,reflect([[12+i*7,36,-10+i*4],[16+i*2,12,1+i*2],[16,-10,5]]),.5,0xc5c8e5,'deep-guide',['guide:corona']);
  tube('guide:corticospinal'+side,reflect([[34,32,-7],[23,12,-1],[17,-14,0],[8,-39,-2],[5,-65,-11]]),.9,0x67c5ed,'deep-guide');
  tube('guide:corticobulbar'+side,reflect([[46,9,0],[25,-1,8],[13,-13,11],[4,-36,-6]]),.75,0xdb9acc,'deep-guide');
  ball('guide:ganglion'+side,[s*30,-49,49],1.35,0x7fc4f0);
  for(const [id,r,z,col] of [['ciliary',5.9,69,0x8dc7f3],['sphincter',2.1,74,0xe9b882]]){const pts=[];for(let i=0;i<=40;i++){let a=i/40*Math.PI*2;pts.push([s*31+r*Math.cos(a),-49+r*Math.sin(a),z]);}tube('guide:'+id+side,pts,.45,col,'reflex-guide');}
 }
 return result;
}
