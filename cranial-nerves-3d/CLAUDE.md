# Continuation instructions

Project: cranial-nerves-3d — combined skull + cranial nerves + orbit + brain atlas. Separate from skull-atlas-3d and brain-visual-atlas-3d; do not change those when working here unless asked.

Goal: see nerves and bones together, i.e. which foramen each nerve passes through, plus the quiz items (optic papilla, dura, Meyer's loop, ora serrata, Gennari, calcarine, chiasm, nasolacrimal duct, maxillary sinus, sphenoid sinus) and the user's orbit/cavernous/ciliary-ganglion/visual-pathway notes. Traditional Chinese + English names; global hide/show names must hide answers everywhere (labels, list, flow, detail, jump buttons, notes dialog).

Geometry: one extraction (src/export_combined.py) from Z-Anatomy Startup.blend, frame identical to brain-visual-atlas-3d (mm, +X left, +Y up = blender z−1.64 m, +Z anterior). 388 meshes, 649,198 vertices. assets/cranial-data.js is gitignored; assets/cranial-packed.js (gzip base64) is committed so building needs no Blender.

Representation rules: mesh / guide (position on source mesh, foramen, cavity) / schematic (drawn; dashed label) / reference (Gennari). Do not relabel schematic or estimated positions as measured. Foramen anchors: source leader tips where they exist; SOF, jugular, IAM from nerve convergence at bone; cribriform and carotid canal approximate. Model matching uses startsWith on object names.

Themes: q quiz, f foramina (horizontal bone cut), n 12 CN, o orbit (bone cut −33), c cavernous (coronal section on all meshes, axis z), g ciliary ganglion, v visual pathway. Keep every label anchor on screen at 1440×1100 and no overlaps at 1440 and 390 widths.

Build/test: node build.mjs; node src/verify.cjs (offline Chromium, writes assets/verification.json). Uses /opt/pw-browsers/chromium when present, else Chrome channel.
