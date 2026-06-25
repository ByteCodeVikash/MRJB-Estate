import os
from PIL import Image, ImageChops

def trim_whitespace(img):
    # If the image has an alpha channel, use it to find the bounding box
    if img.mode == 'RGBA':
        alpha = img.split()[-1]
        bbox = alpha.getbbox()
        if bbox:
            return img.crop(bbox)
    
    # Otherwise, convert to grayscale and invert to find bounding box of non-white
    bg = Image.new(img.mode, img.size, img.getpixel((0,0)))
    diff = ImageChops.difference(img, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return img.crop(bbox)
    return img

def process_image(filename):
    path = os.path.join("extracted_pdf_assets", filename)
    if not os.path.exists(path):
        print(f"File {path} does not exist.")
        return
    
    print(f"\nProcessing {filename}:")
    img = Image.open(path)
    print(f"Original Mode: {img.mode}, Size: {img.size}")
    
    # Convert CMYK to RGB
    if img.mode == "CMYK":
        img = img.convert("RGB")
        print("Converted CMYK to RGB")
    elif img.mode == "P" or img.mode == "L":
        img = img.convert("RGBA")
        print("Converted Palette/Grayscale to RGBA")
        
    # Trim whitespace
    cropped_img = trim_whitespace(img)
    print(f"Cropped Size: {cropped_img.size}")
    
    # Save the cropped image
    out_name = f"processed_{os.path.splitext(filename)[0]}.png"
    out_path = os.path.join("extracted_pdf_assets", out_name)
    cropped_img.save(out_path, "PNG")
    print(f"Saved processed image to {out_path}")

# Process the candidates identified by the subagent
process_image("page_1_img_8.png")
process_image("page_1_img_9.jpeg")
process_image("page_1_img_14.png")
process_image("page_1_img_15.jpeg")
