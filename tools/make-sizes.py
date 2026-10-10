#!/usr/bin/env python3
"""Genera versiones livianas de las imágenes de uploads/product/ para carga rápida.

Uso:  python3 tools/make-sizes.py        (necesita Pillow: pip3 install pillow)

- Deja los archivos originales tal cual (son los que se ven al hacer clic para ampliar).
- Crea uploads/product/w/<nombre>-640.webp y -1200.webp (y -1800 si el original mide más de 2400 px).
- Escribe uploads/product/sizes.json con el ancho y alto de cada imagen.
- Vuelve a correr solo lo que cambió. Pillow no copia datos EXIF, así que las versiones no llevan ubicación GPS.
"""
import json, os, sys
from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
SRC = os.path.join(ROOT, "uploads", "product")
OUT = os.path.join(SRC, "w")
os.makedirs(OUT, exist_ok=True)

manifest, made = {}, 0
for f in sorted(os.listdir(SRC)):
    if not f.lower().endswith(".webp"):
        continue
    base = f[:-5]
    path = os.path.join(SRC, f)
    im = Image.open(path)
    W, H = im.size
    widths = [w for w in (640, 1200) if w < W]
    if W > 2400:
        widths.append(1800)
    manifest[f] = {"w": W, "h": H, "v": widths}
    for w in widths:
        dst = os.path.join(OUT, f"{base}-{w}.webp")
        if os.path.exists(dst) and os.path.getmtime(dst) >= os.path.getmtime(path):
            continue
        h = round(H * w / W)
        im.convert("RGB").resize((w, h), Image.LANCZOS).save(dst, quality=88 if w >= 1200 else 84, method=6)
        made += 1

# borrar variantes de imágenes que ya no existen
for f in os.listdir(OUT):
    stem = f.rsplit("-", 1)[0] + ".webp"
    if stem not in manifest:
        os.remove(os.path.join(OUT, f))

with open(os.path.join(SRC, "sizes.json"), "w") as fh:
    json.dump(manifest, fh, indent=0)
print(f"{len(manifest)} imágenes · {made} versiones nuevas")
