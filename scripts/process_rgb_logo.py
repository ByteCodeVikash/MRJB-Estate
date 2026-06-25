import os
from PIL import Image, ImageChops

def trim_whitespace(img):
    bg = Image.new(img.mode, img.size, (0, 0, 0)) # black background
    diff = ImageChops.difference(img, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return img.crop(bbox)
    return img

def make_transparent_smooth(img, threshold=15):
    img = img.convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        r, g, b, a = item
        brightness = max(r, g, b)
        if brightness < threshold:
            new_data.append((r, g, b, 0))
        else:
            # Scale alpha based on brightness to prevent jagged edges
            new_alpha = min(255, int(brightness * (255 / (255 - threshold))))
            new_data.append((r, g, b, new_alpha))
            
    img.putdata(new_data)
    return img

path = "extracted_pdf_assets/rgb/img_15_rgb.png"
if os.path.exists(path):
    img = Image.open(path)
    print(f"Original Size: {img.size}, Mode: {img.mode}")
    
    # 1. Trim black borders
    cropped = trim_whitespace(img)
    print(f"Cropped Size: {cropped.size}")
    
    # Save cropped RGB
    cropped.save("extracted_pdf_assets/rgb/logo_color_cropped.png")
    
    # 2. Make background transparent
    trans = make_transparent_smooth(cropped)
    trans.save("extracted_pdf_assets/rgb/logo_color_transparent.png")
    print("Saved logo_color_transparent.png")
else:
    print("img_15_rgb.png not found")
