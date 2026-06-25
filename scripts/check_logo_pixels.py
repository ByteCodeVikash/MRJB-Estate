from PIL import Image

img = Image.open("extracted_pdf_assets/processed_page_1_img_15.png")
w, h = img.size

black_pixels = 0
white_pixels = 0
other_pixels = 0

for y in range(h):
    for x in range(w):
        r, g, b = img.getpixel((x, y))
        if r < 30 and g < 30 and b < 30:
            black_pixels += 1
        elif r > 220 and g > 220 and b > 220:
            white_pixels += 1
        else:
            other_pixels += 1

print(f"Total pixels: {w * h}")
print(f"Black pixels (RGB < 30): {black_pixels} ({black_pixels / (w*h) * 100:.1f}%)")
print(f"White pixels (RGB > 220): {white_pixels} ({white_pixels / (w*h) * 100:.1f}%)")
print(f"Other pixels: {other_pixels} ({other_pixels / (w*h) * 100:.1f}%)")

# Let's inspect the top, middle, and bottom rows
print("\nTop row (y=0) pixel samples:")
for x in range(0, w, w // 10):
    print(f"({x},0): {img.getpixel((x, 0))}", end=" ")
print()

print("\nMiddle row (y=h//2) pixel samples:")
for x in range(0, w, w // 10):
    print(f"({x},h//2): {img.getpixel((x, h//2))}", end=" ")
print()

print("\nBottom row (y=h-1) pixel samples:")
for x in range(0, w, w // 10):
    print(f"({x},h-1): {img.getpixel((x, h-1))}", end=" ")
print()
