from PIL import Image

orig = Image.open("extracted_pdf_assets/processed_page_1_img_15.png")
trans = Image.open("extracted_pdf_assets/transparent/logo_color.png")

# Let's check some pixels that were transparent in trans
w, h = orig.size
transparent_pixels = 0
kept_pixels = 0

for y in range(h):
    for x in range(w):
        r_orig, g_orig, b_orig = orig.getpixel((x, y))
        r_t, g_t, b_t, a_t = trans.getpixel((x, y))
        
        if a_t == 0:
            transparent_pixels += 1
        else:
            kept_pixels += 1
            # Print a few kept pixel colors to understand the logo colors
            if kept_pixels < 20:
                print(f"Kept pixel at ({x},{y}): Orig RGB=({r_orig},{g_orig},{b_orig}), Trans RGBA=({r_t},{g_t},{b_t},{a_t})")

print(f"Total transparent pixels: {transparent_pixels}")
print(f"Total kept pixels: {kept_pixels}")
