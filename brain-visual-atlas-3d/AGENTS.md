# Continuation instructions

Project: brain-visual-atlas-3d, separate from skull-atlas-3d. Do not change the previous skull project.
Read README.md and ATTRIBUTION.md first. User wants a directly usable offline HTML with all source lecture information and global hide/show labels. Maintain Traditional Chinese and English names.

Sources: supplied 13-page image-only PDF. Seventy learning entries in src/labels.js. Six themes. Preserve original page order and all 13 images. Do not invent mappings for specimen numbers 1–18 or figure no.6 without an authoritative key.

Geometry: 244 Z-Anatomy meshes, 570762 vertices; assets/brain-data.js and brain.glb are independent local subset assets. src/schematic.js adds explicit illustrative white matter and missing small structures. Keep mesh/guide/schematic/reference distinctions. Gennari line is not a surface mesh. Do not relabel inferred positions as measured landmarks.

Build: npm run build; npm run assets; npm test. package.json type module. src/verify.cjs verifies actual standalone file in Chrome offline at desktop/mobile sizes. Tests include every theme and global name hiding; reference/notes must not leak answers while hidden. Update assets/verification.json with actual results.

Deliverable: 腦與視覺路徑3D.html (all JS,CSS,geometry and images embedded). No server/CDN required. Source entry index.html uses local assets. Don't require source Startup.blend for normal use/build; only raw re-export requires it. Keep attribution and provenance with any derived data.

Interaction: TrackballControls uses staticMoving=true (no inertia), recreated per camera preset. Keep screen-relative dragging and fixed label slots while rotating. Leader halos + hover/selection highlighting are intentional. Run node src/verify-interaction.cjs for all six camera frames, no drift, stable label slots and highlighted line checks.
