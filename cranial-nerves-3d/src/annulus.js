import * as T from 'three';
// Teaching correction at the orbital apex (applied at load time; the packed source data stay untouched).
// In the source model the common tendinous ring is only ~5 mm across, so CN IV, the frontal nerve (V1 trunk)
// and the superior ophthalmic vein run through its wall and look as if they pass inside it.
// 1) widen the ring 1.5× within its own plane; 2) move those three structures, only near the ring plane,
// to the superior (outside) part of the superior orbital fissure with a smooth cosine falloff; nudge CN VI inside.
const OUTSIDE={'Trochlear nerve (IV)':[7.5,1],'Ophthalmic nerve':[7,4],'Superior ophthalmic vein':[6.5,6.5]}; // [superior, lateral] mm from ring centre
// CN VI sits in the ring wall in the source; bring it into the inferolateral part of the opening.
const MOVE={...OUTSIDE,'Abducens nerve (VI)':[-1.6,.8]};
export const INSIDE=['Oculomotor nerve (III)','Abducens nerve (VI)','Optic nerve (II)','Ophthalmic artery'];
const FALLOFF=12;
function frame(ring,side){const a=ring.geometry.attributes.position,pts=[],c=new T.Vector3();for(let i=0;i<a.count;i++){const v=new T.Vector3().fromBufferAttribute(a,i);pts.push(v);c.add(v);}c.divideScalar(pts.length);
 // Plane normal = smallest-variance direction (power iteration on the inverse is overkill; use cross of two spread axes).
 let far=pts.reduce((b,p)=>p.distanceTo(c)>b.distanceTo(c)?p:b),e1=far.clone().sub(c).normalize(),e2=new T.Vector3();
 for(const p of pts){const q=p.clone().sub(c);q.addScaledVector(e1,-q.dot(e1));if(q.length()>e2.length())e2=q;}e2.normalize();const n=new T.Vector3().crossVectors(e1,e2).normalize();
 const inPlane=v=>v.clone().addScaledVector(n,-v.dot(n)).normalize();return {c,n,up:inPlane(new T.Vector3(0,1,0)),lat:inPlane(new T.Vector3(side,0,0))};}
function crossing(mesh,f){const a=mesh.geometry.attributes.position,sum=new T.Vector3();let k=0;for(let i=0;i<a.count;i++){const v=new T.Vector3().fromBufferAttribute(a,i),d=v.clone().sub(f.c);if(Math.abs(d.dot(f.n))<1&&d.length()<25){sum.add(v);k++;}}return k?sum.divideScalar(k):null;}
export function correctAnnulus(meshes){const report={};
 for(const [sfx,side] of [['.l',1],['.r',-1]]){const ring=meshes.find(m=>m.name==='Common tendinous ring'+sfx);if(!ring)continue;const f=frame(ring,side);
  const a=ring.geometry.attributes.position;for(let i=0;i<a.count;i++){const v=new T.Vector3().fromBufferAttribute(a,i),d=v.clone().sub(f.c),h=d.dot(f.n);const p=d.addScaledVector(f.n,-h).multiplyScalar(1.5);v.copy(f.c).add(p).addScaledVector(f.n,h);a.setXYZ(i,v.x,v.y,v.z);}a.needsUpdate=true;ring.geometry.computeVertexNormals();ring.geometry.computeBoundingSphere();
  for(const [base,[up,lat]] of Object.entries(MOVE)){const m=meshes.find(x=>x.name===base+sfx);if(!m)continue;const p0=crossing(m,f);if(!p0)continue;
   const target=f.c.clone().addScaledVector(f.up,up).addScaledVector(f.lat,lat),shift=target.sub(p0);shift.addScaledVector(f.n,-shift.dot(f.n));
   const b=m.geometry.attributes.position;for(let i=0;i<b.count;i++){const v=new T.Vector3().fromBufferAttribute(b,i),d=v.clone().sub(f.c),h=d.dot(f.n);if(Math.abs(h)>=FALLOFF||d.length()>40)continue;const w=.5*(1+Math.cos(Math.PI*h/FALLOFF));v.addScaledVector(shift,w);b.setXYZ(i,v.x,v.y,v.z);}
   b.needsUpdate=true;m.geometry.computeVertexNormals();m.geometry.computeBoundingSphere();m.userData.corrected=true;}
  report[sfx]=classify(meshes,f,ring);
  // Ring frame for the apex view; normal points anteriorly (towards the eye).
  const n=f.n.z<0?f.n.clone().negate():f.n.clone();report[sfx].frame={centre:f.c.toArray(),normal:n.toArray()};}
 return report;}
// Where each structure crosses the ring plane: inside the opening, in the wall, or outside.
function classify(meshes,f,ring){const a=ring.geometry.attributes.position;let inner=Infinity,outer=0;for(let i=0;i<a.count;i++){const r=new T.Vector3().fromBufferAttribute(a,i).sub(f.c).projectOnPlane(f.n).length();inner=Math.min(inner,r);outer=Math.max(outer,r);}
 const out={ring:{inner:+inner.toFixed(1),outer:+outer.toFixed(1)}},sfx=ring.name.slice(-2);
 for(const base of [...Object.keys(OUTSIDE),...INSIDE]){const m=meshes.find(x=>x.name===base+sfx);const p=m&&crossing(m,f);if(!p)continue;const r=p.sub(f.c).projectOnPlane(f.n).length();out[base]={r:+r.toFixed(1),where:r<inner?'inside':r<=outer?'wall':'outside'};}
 return out;}
