import os
from PIL import Image

path = "extracted_pdf_assets/transparent_smask/img_15_xref_611_combined.png"
if not os.path.exists(path):
    # Try index 9 as well
    path = "extracted_pdf_assets/transparent_smask/img_9_xref_611_combined.png"

if os.path.exists(path):
    img = Image.open(path)
    print(f"Loaded logo: {path}")
    print(f"Mode: {img.mode}, Size: {img.size}")
    
    # Analyze alpha values
    w, h = img.size
    alpha_distribution = {0: 0, 255: 0, "other": 0}
    
    for y in range(h):
        for x in range(w):
            r, g, b, a = img.getpixel((x, y))
            if a == 0:
                alpha_distribution[0] += 1
            elif a == 255:
                alpha_distribution[255] += 1
                # Check what colors are solid
                if alpha_distribution[255] < 10:
                    print(f"Solid pixel at ({x},{y}): RGB=({r},{g},{b})")
            else:
                alpha_distribution["other"] += 1
                if alpha_distribution["other"] < 5:
                    print(f"Semi-transparent pixel at ({x},{y}): RGB=({r},{g},{b}), Alpha={a}")
                    
    total = w * h
    print(f"\nAlpha channel distribution:")
    print(f"Fully transparent (alpha=0): {alpha_distribution[0]} ({alpha_distribution[0]/total*100:.1f}%)")
    print(f"Fully opaque (alpha=255): {alpha_distribution[255]} ({alpha_distribution[255]/total*100:.1f}%)")
    print(f"Semi-transparent: {alpha_distribution['other']} ({alpha_distribution['other']/total*100:.1f}%)")
else:
    print("Combined logo not found.")
