import os
from PIL import Image

output_dir = "extracted_pdf_assets"
trans_smask_dir = os.path.join(output_dir, "transparent_smask")
html_content = """<!DOCTYPE html>
<html>
<head>
    <title>Smask Combined Logo Assets</title>
    <style>
        body { font-family: sans-serif; background: #1e1e24; color: #fff; margin: 20px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
        .card { background: #0B2E59; border: 1px solid #1c4b82; padding: 15px; border-radius: 8px; text-align: center; }
        .card img { max-width: 100%; max-height: 200px; object-fit: contain; }
        .info { margin-top: 10px; font-size: 14px; color: #cbd5e1; }
        h1 { border-bottom: 2px solid #D4AF37; padding-bottom: 10px; margin-top: 40px; color: #D4AF37; }
    </style>
</head>
<body>
    <h1>Smask Combined Logos (On Dark Blue Background)</h1>
    <div class="grid">
"""

files = sorted(os.listdir(trans_smask_dir))
for p in files:
    if "combined" in p:
        img_path = os.path.join(trans_smask_dir, p)
        try:
            with Image.open(img_path) as img:
                w, h = img.size
        except Exception:
            w, h = 0, 0
        size = os.path.getsize(img_path)
        html_content += f"""
            <div class="card">
                <img src="transparent_smask/{p}" alt="{p}">
                <div class="info">
                    <strong>transparent_smask/{p}</strong><br>
                    Dimensions: {w}x{h}<br>
                    Size: {size / 1024:.1f} KB
                </div>
            </div>
        """

html_content += """
    </div>
</body>
</html>
"""

with open(os.path.join(output_dir, "index.html"), "w") as f:
    f.write(html_content)
print("Catalog index.html updated with smask-combined logos.")
