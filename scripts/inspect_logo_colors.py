from PIL import Image

path = "extracted_pdf_assets/processed_page_1_img_14.png"
img = Image.open(path)
print(f"Mode: {img.mode}, Size: {img.size}")

colors = img.getcolors(maxcolors=1000000)
if colors:
    sorted_colors = sorted(colors, key=lambda x: x[0], reverse=True)
    print("Top 10 most common colors:")
    for count, color in sorted_colors[:10]:
        print(f"Color: {color}, Count: {count}")
else:
    print("Too many colors to list directly.")
