import os
import fitz  # PyMuPDF

pdf_path = "Kunj Bihari Enclave Phase-1 New Brochure.pdf"
output_dir = "extracted_pdf_assets"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Total pages: {len(doc)}")

# Save first 3 pages as PNG images
for page_num in range(min(3, len(doc))):
    page = doc[page_num]
    pix = page.get_pixmap(dpi=150)
    output_path = os.path.join(output_dir, f"page_{page_num + 1}.png")
    pix.save(output_path)
    print(f"Saved {output_path}")

# Extract all images from page 1
page1 = doc[0]
image_list = page1.get_images(full=True)
print(f"Page 1 has {len(image_list)} images")

for img_idx, img_info in enumerate(image_list):
    xref = img_info[0]
    base_image = doc.extract_image(xref)
    image_bytes = base_image["image"]
    image_ext = base_image["ext"]
    img_name = f"page_1_img_{img_idx}.{image_ext}"
    output_path = os.path.join(output_dir, img_name)
    with open(output_path, "wb") as f:
        f.write(image_bytes)
    print(f"Extracted image {img_name}")
