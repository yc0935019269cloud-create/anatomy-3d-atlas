import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {MeshoptDecoder} from 'meshoptimizer';
import {Vector3,Matrix4} from 'three';
import fs from 'node:fs';
await MeshoptDecoder.ready;
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.decoder':MeshoptDecoder});
const doc=await io.read('assets/skeleton.glb');
const nodes=doc.getRoot().listNodes();
const boneNames=['Ethmoid bone','Frontal bone','Inferior nasal concha bone','Lacrimal bone','Mandible','Maxilla','Nasal bone','Occipital bone','Palatine bone','Parietal bone','Sphenoid bone','Temporal bone','Vomer','Zygomatic bone'];
const selected=nodes.filter(n=>boneNames.includes(n.getName().replace(/\.[lr]$/,''))||/^(Upper|Lower) /.test(n.getName()));
const meshes=[]; const vector=new Vector3();
function worldPoints(n){const m=new Matrix4().fromArray(n.getWorldMatrix());return n.getMesh().listPrimitives().map(p=>{const a=p.getAttribute('POSITION'),positions=[];for(let i=0;i<a.getCount();i++){vector.fromArray(a.getElement(i,[])).applyMatrix4(m);positions.push(vector.x*1000,(vector.y-1.60)*1000,vector.z*1000);}return {positions,indices:Array.from(p.getIndices()?.getArray()||[]),flip:m.determinant()<0};});}
for(const n of selected){const geom=n.getMesh()?n:n.listChildren().find(c=>!c.getName()&&c.getMesh());if(!geom)continue;for(const p of worldPoints(geom)){if(p.flip)for(let i=0;i<p.indices.length;i+=3)[p.indices[i+1],p.indices[i+2]]=[p.indices[i+2],p.indices[i+1]];meshes.push({name:n.getName(),positions:Buffer.from(new Float32Array(p.positions).buffer).toString('base64'),indices:Buffer.from(new Uint32Array(p.indices).buffer).toString('base64')});}}
const anchors={};
for(const n of nodes.filter(n=>n.getName().endsWith('.t')&&n.getWorldTranslation()[1]>1.49)){
 const l=n.listChildren().find(c=>c.getMesh());if(!l)continue;
 const t=n.getWorldTranslation();const ref=new Vector3(t[0]*1000,(t[1]-1.6)*1000,t[2]*1000);const pts=worldPoints(l).flatMap(p=>p.positions);let best=-1,tip;
 for(let i=0;i<pts.length;i+=3){vector.fromArray(pts,i);let d=vector.distanceToSquared(ref);if(d>best){best=d;tip=vector.toArray();}}
 anchors[n.getName().replace(/\.t$/,'')]=tip;
}
fs.writeFileSync('assets/skull-data.js','window.SKULL_DATA='+JSON.stringify({meshes,anchors})+';');
fs.writeFileSync('assets/anchors.json',JSON.stringify(anchors,null,2));
console.log('Extracted',meshes.length,'meshes;',Object.keys(anchors).length,'source landmark tips');
