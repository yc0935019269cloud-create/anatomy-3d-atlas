# Continuation instructions

Project: brain-visual-atlas-3d, separate from skull-atlas-3d. Do not change the previous skull project.
Read README.md and ATTRIBUTION.md first. User wants a directly usable offline HTML with all source lecture information and global hide/show labels. Maintain Traditional Chinese and English names.

Sources: supplied 13-page image-only PDF. Seventy learning entries in src/labels.js. Six themes. Preserve original page order and all 13 images. Do not invent mappings for specimen numbers 1–18 or figure no.6 without an authoritative key.

Geometry: 244 Z-Anatomy meshes, 570762 vertices; assets/brain-data.js and brain.glb are independent local subset assets. src/schematic.js adds explicit illustrative white matter and missing small structures. Keep mesh/guide/schematic/reference distinctions. Gennari line is not a surface mesh. Do not relabel inferred positions as measured landmarks.

Build: npm run build; npm run assets; npm test. package.json type module. src/verify.cjs verifies actual standalone file in Chrome offline at desktop/mobile sizes. Tests include every theme and global name hiding; reference/notes must not leak answers while hidden. Update assets/verification.json with actual results.

Deliverable: 腦與視覺路徑3D.html (all JS,CSS,geometry and images embedded). No server/CDN required. Source entry index.html uses local assets. Don't require source Startup.blend for normal use/build; only raw re-export requires it. Keep attribution and provenance with any derived data.

Interaction: TrackballControls uses staticMoving=true (no inertia), recreated per camera preset. Keep screen-relative dragging and fixed label slots while rotating. Leader halos + hover/selection highlighting are intentional. Run node src/verify-interaction.cjs for all six camera frames, no drift, stable label slots and highlighted line checks.

2026-09-28: Medial view highlights the actual calcarine mesh in gold and includes an explicitly schematic Gennari cortical section plus original page 12. V1/Gennari region anchors follow source meshes. Selection preserves label slots. Both atlas canvas/SVG share a positioning box; skull now has brain-style halo/focus leaders.

2026-09-28 視放射辨識度：保留既有路徑座標，線束半徑由 0.48 提升至 1.05 mm（視覺強調，非量測尺寸），使用亮青／亮粉與自發光材質。新增顏色圖例和「視放射特寫」：隱藏腦外層、切至上面觀、對準後方線束並放大；重設視角可還原。保留正常深度遮擋，沒有將深部線束強制畫在所有表面之上。
