# Continuation instructions

Project: brain-visual-atlas-3d, separate from skull-atlas-3d. Do not change the previous skull project.
Read README.md and ATTRIBUTION.md first. User wants a directly usable offline HTML with all source lecture information and global hide/show labels. Maintain Traditional Chinese and English names.

Sources: supplied 13-page image-only PDF. Seventy learning entries in src/labels.js. Six themes. Preserve original page order and all 13 images. Do not invent mappings for specimen numbers 1–18 or figure no.6 without an authoritative key.

Geometry: 244 Z-Anatomy meshes, 570762 vertices; assets/brain-data.js and brain.glb are independent local subset assets. src/schematic.js adds explicit illustrative white matter and missing small structures. Keep mesh/guide/schematic/reference distinctions. Gennari line is not a surface mesh. Do not relabel inferred positions as measured landmarks.

Build: npm run build; npm run assets; npm test. package.json type module. src/verify.cjs verifies actual standalone file in Chrome offline at desktop/mobile sizes. Tests include every theme and global name hiding; reference/notes must not leak answers while hidden. Update assets/verification.json with actual results.

Deliverable: 腦與視覺路徑3D.html (all JS,CSS,geometry and images embedded). No server/CDN required. Source entry index.html uses local assets. Don't require source Startup.blend for normal use/build; only raw re-export requires it. Keep attribution and provenance with any derived data.

Interaction (2026-09-29, user preference): OrbitControls with enableDamping, dampingFactor .1, same as skull-atlas-3d; recreated per camera preset so camera.up is honoured. Tests wait until the camera settles. Keep screen-relative dragging and fixed label slots while rotating. Leader halos + hover/selection highlighting are intentional. Run node src/verify-interaction.cjs for all six camera frames, no drift, stable label slots and highlighted line checks.

2026-09-28: Combined public repo also includes skull; user explicitly authorized editing both. Preserve medial-guide layered schematic and PDF12 shortcut. Calcarine gold is applied to source mesh only; Gennari remains reference, not a surface structure. Preserve label slots across selection/language rebuilds; reset when changing theme/camera. Keep canvas absolute and SVG viewBox synchronized.

2026-09-28 視放射辨識度：保留既有路徑座標，線束半徑由 0.48 提升至 1.05 mm（視覺強調，非量測尺寸），使用亮青／亮粉與自發光材質。新增顏色圖例和「視放射特寫」：隱藏腦外層、切至上面觀、對準後方線束並放大；重設視角可還原。保留正常深度遮擋，沒有將深部線束強制畫在所有表面之上。

2026-09-28 修正視放射指空：optic-radiation、meyer、baum 的提示端點吸附到左側實際示意線束頂點，包含 .l0 等編號網格；不再使用懸空的代表座標。特寫依目前可見線束的包圍球及畫布比例計算縮放，保留旋轉與邊緣空間。使用者手動放大後仍可能超出畫面，可再按特寫重新取景。
