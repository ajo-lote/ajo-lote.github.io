# dianabecerra.design

Sitio bilingüe (EN/ES) publicado con GitHub Pages desde la rama `main`.

## Cómo editar
- Textos: `src/content.mjs` (inglés y español en el mismo archivo).
- Estilos y marca (Papel, Tinta, Bugambilia, Cempasúchil, Newsreader, Archivo): `src/site.css`.
- Proyectos de marca: `src/brand-projects.json` y traducciones en `src/brand-es.mjs`.
- Después de editar: `node src/build.mjs` (sin dependencias, Node 18+). Genera `en/`, `es/`, `assets/`, `sitemap.xml`.
- Imágenes de casos de producto: `uploads/product/` (el comando lista los nombres que faltan).
- Experimentos del Lab: cada uno vive en su carpeta, por ejemplo `lab/art-library/`.

Vista local: `python3 -m http.server 8000` y abre http://localhost:8000
