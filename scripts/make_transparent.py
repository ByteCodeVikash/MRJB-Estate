import os
from PIL import Image

def make_transparent_threshold(img_path, out_path, threshold=25):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # item is (r, g, b, a)
        r, g, b, a = item
        # If it's close to black, make it transparent
        if r < threshold and g < threshold and b < threshold:
            new_data.append((r, g, b, 0))
        else:
            new_data.append((r, g, b, a))
            
    img.putdata(new_data)
    img.save(out_path, "PNG")
    print(f"Saved thresholded transparent image to {out_path}")

def make_transparent_smooth(img_path, out_path, threshold=15):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        r, g, b, a = item
        brightness = max(r, g, b)
        if brightness < threshold:
            new_data.append((r, g, b, 0))
        else:
            # Scale alpha based on brightness to prevent jagged edges
            # For pixels above threshold, we transition alpha from 0 to 255
            # We can also keep the original colors
            new_alpha = min(255, int(brightness * (255 / (255 - threshold))))
            new_data.append((r, g, b, new_alpha))
            
    img.putdata(new_data)
    img.save(out_path, "PNG")
    print(f"Saved smooth transparent image to {out_path}")

# Apply to processed candidates
os.makedirs("extracted_pdf_assets/transparent", exist_ok=True)

# Color logo
make_transparent_smooth(
    "extracted_pdf_assets/processed_page_1_img_15.png",
    "extracted_pdf_assets/transparent/logo_color.png"
)

# B&W logo
make_transparent_smooth(
    "extracted_pdf_assets/processed_page_1_img_14.png",
    "extracted_pdf_assets/transparent/logo_bw.png"
)

# Let's crop logo_bw since it's quite tall (340x735) and might have extra black space at the bottom
bw_img = Image.open("extracted_pdf_assets/transparent/logo_bw.png")
# Find bounding box of non-transparent pixels
alpha = bw_img.split()[-1]
bbox = alpha.getbbox()
if bbox:
    cropped_bw = bw_img.crop(bbox)
    cropped_bw.save("extracted_pdf_assets/transparent/logo_bw_cropped.png")
    print(f"Cropped logo_bw to {cropped_bw.size} and saved to logo_bw_cropped.png")
