import os
import fitz

pdf_path = "Kunj Bihari Enclave Phase-1 New Brochure.pdf"
output_dir = "extracted_pdf_assets/rgb"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)

# Let's extract image 15 (which is the color logo candidate)
# The image index is 15 in page 1
page = doc[0]
image_list = page.get_images(full=True)

print(f"Page 1 images: {len(image_list)}")

for idx, img_info in enumerate(image_list):
    xref = img_info[0]
    pix = fitz.Pixmap(doc, xref)
    
    # If it is CMYK, convert to RGB
    if pix.colorspace.n == 4: # CMYK
        print(f"Image {idx} (xref {xref}) is CMYK. Converting to RGB...")
        pix_rgb = fitz.Pixmap(fitz.csRGB, pix)
        pix_rgb.save(os.path.join(output_dir, f"img_{idx}_rgb.png"))
        pix_rgb = None
    else:
        print(f"Image {idx} (xref {xref}) is already RGB/Gray. Saving...")
        pix.save(os.path.join(output_dir, f"img_{idx}_rgb.png"))
    
    pix = None

print("Done extracting images as RGB PNGs.")
