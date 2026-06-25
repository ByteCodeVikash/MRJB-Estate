import os
from PIL import Image, ImageChops

def trim_whitespace(img):
    if img.mode == 'RGBA':
        alpha = img.split()[-1]
        bbox = alpha.getbbox()
        if bbox:
            return img.crop(bbox)
    
    bg = Image.new(img.mode, img.size, img.getpixel((0,0)))
    diff = ImageChops.difference(img, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return img.crop(bbox)
    return img

output_dir = "extracted_pdf_assets"
files = sorted(os.listdir(output_dir))
images = [f for f in files if f.startswith("page_1_img_") and not f.startswith("processed_")]

print(f"Processing all {len(images)} images...")
for img_name in images:
    path = os.path.join(output_dir, img_name)
    try:
        img = Image.open(path)
        orig_mode = img.mode
        orig_size = img.size
        
        if img.mode == "CMYK":
            img = img.convert("RGB")
        elif img.mode in ("P", "L"):
            img = img.convert("RGBA")
            
        cropped = trim_whitespace(img)
        cropped_size = cropped.size
        
        # Save if cropped size is smaller or if it was converted
        out_name = f"cropped_{img_name}"
        out_path = os.path.join(output_dir, out_name)
        cropped.save(out_path)
        print(f"{img_name}: {orig_mode} {orig_size} -> cropped to {cropped_size} saved as {out_name}")
    except Exception as e:
        print(f"Error processing {img_name}: {e}")
