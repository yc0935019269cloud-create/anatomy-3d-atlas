import fs from 'node:fs';
import crypto from 'node:crypto';
import {Document,NodeIO} from '@gltf-transform/core';
const raw=fs.readFileSync('assets/brain-data.js','utf8').slice('window.BRAIN_DATA='.length,-1),data=JSON.parse(raw);
const decode=(s,T)=>new T(Uint8Array.from(Buffer.from(s,'base64')).buffer);
const doc=new Document(),scene=doc.createScene('Brain, eyes, nerves and cerebral circulation'),buffer=doc.createBuffer();
const colors={cortex:[.80,.67,.71,1],cerebellum:[.74,.68,.69,1],stem:[.72,.74,.79,1],deep:[.64,.71,.76,1],artery:[.87,.43,.43,1],nerve:[.95,.82,.55,1],eye:[.65,.8,.85,1],bone:[.86,.81,.69,1]};
const mats=Object.fromEntries(Object.entries(colors).map(([name,color])=>[name,doc.createMaterial(name).setBaseColorFactor(color).setRoughnessFactor(.7).setMetallicFactor(0).setDoubleSided(true)]));
for(const m of data.meshes){const a=decode(m.positions,Float32Array);for(let i=0;i<a.length;i++)a[i]/=1000;const primitive=doc.createPrimitive().setAttribute('POSITION',doc.createAccessor().setType('VEC3').setArray(a).setBuffer(buffer)).setIndices(doc.createAccessor().setType('SCALAR').setArray(decode(m.indices,Uint32Array)).setBuffer(buffer)).setMaterial(mats[m.category]);scene.addChild(doc.createNode(m.name).setMesh(doc.createMesh(m.name).addPrimitive(primitive)));}
doc.getRoot().getAsset().copyright='Z-Anatomy (Gauthier Kervyn, Marcin Zielinski), BodyParts3D (DBCLS), brain surfaces by Anderson Winkler / Brainder. Derived subset CC BY-SA 4.0. See ATTRIBUTION.md.';
await new NodeIO().write('assets/brain.glb',doc);
fs.copyFileSync('node_modules/three/LICENSE','assets/THREE-LICENSE.txt');
const source=JSON.parse(fs.readFileSync('assets/model-source.json','utf8'));
const provenance={date:'2026-09-27',source,meshes:data.meshes.length,vertices:data.meshes.reduce((n,m)=>n+decode(m.positions,Float32Array).length/3,0),geometryLicense:'CC-BY-SA-4.0',unitsGLB:'metres',schematicGeometry:'Generated separately in src/schematic.js, not included in source GLB',lecture:'User-supplied 13-page PDF; original rights retained',sha256:{}};
for(const p of ['assets/brain.glb','assets/原始講義.pdf','assets/landmarks.json'])provenance.sha256[p]=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
fs.writeFileSync('assets/provenance.json',JSON.stringify(provenance,null,2));console.log({meshes:provenance.meshes,vertices:provenance.vertices,glbMB:(fs.statSync('assets/brain.glb').size/1e6).toFixed(2)});
