Blog image placement guide

Each article expects three images. Upload your final images into `/public/assets/blog-images/` using the exact filenames listed in `manifest.json`.

Naming convention
- {slug}-1.webp  -> first in-article image
- {slug}-2.webp  -> second in-article image
- {slug}-3.webp  -> third in-article image

Why this matters
- The renderer uses shorthand `// IMAGE` markers and maps them sequentially to these filenames.
- If a `.webp` file is missing, the renderer will try common alternatives (`.jpg`, `.jpeg`, `.png`, `.svg`) and finally show a fallback SVG.

Example
- For the post `do-your-karma-leave-the-rest`, upload:
  - `do-your-karma-leave-the-rest-1.webp`
  - `do-your-karma-leave-the-rest-2.webp`
  - `do-your-karma-leave-the-rest-3.webp`

Files created by the dev assistant
- `manifest.json` — machine-readable mapping of expected filenames.
- `README.md` — human-friendly instructions.
- `{slug}-{n}.svg` placeholders — visual placeholders that contain the exact `.webp` name to upload.

Next steps you can take
- Upload your final `.webp` images with those filenames.
- If you'd like, I can convert the existing SVG placeholders into valid `.webp` binaries for immediate visual polish (I can do that now if you want).