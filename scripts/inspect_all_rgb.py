import os
from PIL import Image

rgb_dir = "extracted_pdf_assets/rgb"
files = sorted([f for f in os.listdir(rgb_dir) if f.startswith("img_") and f.endswith(".png")])

print(f"Inspecting {len(files)} files in {rgb_dir}...")
for f in files:
    path = os.path.join(rgb_dir, f)
    try:
        img = Image.open(path)
        # Find max brightness
        extrema = img.getextrema()
        print(f"{f}: Mode={img.mode}, Size={img.size}, Extrema={extrema}")
    except Exception as e:
        print(f"Error {f}: {e}")
