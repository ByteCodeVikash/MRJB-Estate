import os
import fitz
from PIL import Image

pdf_path = "Kunj Bihari Enclave Phase-1 New Brochure.pdf"
output_dir = "extracted_pdf_assets/transparent_smask"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
page = doc[0]
image_list = page.get_images(full=True)

print(f"Total images on Page 1: {len(image_list)}")

for idx, img_info in enumerate(image_list):
    xref = img_info[0]
    base_image = doc.extract_image(xref)
    smask_xref = base_image.get("smask", 0)
    
    print(f"\nImage index {idx}: xref={xref}, smask_xref={smask_xref}")
    
    pix_color = fitz.Pixmap(doc, xref)
    
    # Check components
    n = pix_color.colorspace.n if pix_color.colorspace else 1
    
    if n == 4: # CMYK
        print("Converting CMYK to RGB...")
        pix_color_rgb = fitz.Pixmap(fitz.csRGB, pix_color)
        mode = "RGB"
    elif n == 3: # RGB
        pix_color_rgb = pix_color
        mode = "RGB"
    elif n == 1: # Gray
        pix_color_rgb = pix_color
        mode = "L"
    else:
        pix_color_rgb = pix_color
        mode = "RGB"
        
    try:
        color_img = Image.frombytes(mode, [pix_color_rgb.width, pix_color_rgb.height], pix_color_rgb.samples)
        
        if smask_xref > 0:
            pix_smask = fitz.Pixmap(doc, smask_xref)
            smask_mode = "L" if pix_smask.colorspace.n == 1 else "RGB"
            smask_img = Image.frombytes(smask_mode, [pix_smask.width, pix_smask.height], pix_smask.samples)
            if smask_mode != "L":
                smask_img = smask_img.convert("L")
            
            # Combine
            combined_img = color_img.convert("RGBA")
            combined_img.putalpha(smask_img)
            
            # Trim
            alpha = combined_img.split()[-1]
            bbox = alpha.getbbox()
            if bbox:
                cropped_img = combined_img.crop(bbox)
            else:
                cropped_img = combined_img
                
            out_path = os.path.join(output_dir, f"img_{idx}_xref_{xref}_combined.png")
            cropped_img.save(out_path, "PNG")
            print(f"Saved combined and cropped transparent image to {out_path} (Size: {cropped_img.size})")
        else:
            out_path = os.path.join(output_dir, f"img_{idx}_xref_{xref}_standard.png")
            color_img.save(out_path, "PNG")
            print(f"Saved standard image to {out_path} (Size: {color_img.size})")
    except Exception as e:
        print(f"Error processing image {idx}: {e}")
