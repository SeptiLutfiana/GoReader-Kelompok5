import cv2
import numpy as np
import imutils
import pytesseract as tsr

def preprocessing(image):
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    
    # Menentukan ROI (Region of Interest) dalam bentuk kotak pembatas (x, y, w, h)
    ROI = (150, 190, 220, 50)
    
    # Memotong ROI dari gambar asli
    x, y, w, h = ROI
    ROI_image = image[y:y+h, x:x+w]
    
    # Convert to grayscale
    gray = cv2.cvtColor(ROI_image, cv2.COLOR_RGB2GRAY)
    
    # Apply GaussianBlur to reduce noise
    blur = cv2.GaussianBlur(gray, (1, 1), 0)
    
    # Apply adaptive thresholding
    thresh = cv2.adaptiveThreshold(blur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 11, 1)
    
    # Melakukan prapemrosesan untuk pengenalan teks pada ROI
    gray = cv2.cvtColor(ROI_image, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (1, 1), 0)  # Mengurangi noise dengan GaussianBlur
    thresh = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]
    dist = cv2.distanceTransform(thresh, cv2.DIST_L2, 5)
    dist = cv2.normalize(dist, dist, 0, 1.0, cv2.NORM_MINMAX)
    dist = (dist * 255).astype('uint8')
    dist = cv2.threshold(dist, 0, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]

    # Define kernel for dilation
    kernel = cv2.getStructuringElement(cv2.MORPH_CROSS, (1, 1))
    dilation = cv2.dilate(thresh, kernel, iterations=1)
    opening = cv2.morphologyEx(dist, cv2.MORPH_OPEN, kernel)

    # Find contours
    cnts = cv2.findContours(opening.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)

    nums = []
    for c in cnts:
        (x, y, w, h) = cv2.boundingRect(c)
        if w >= 15 and h > 20:
            nums.append(c)

    if nums:
        nums = np.vstack([nums[i] for i in range(0, len(nums))])
        null = cv2.convexHull(nums)

        mask = np.zeros(dilation.shape[:2], dtype='uint8')
        cv2.drawContours(mask, [null], -1, 255, -1)
        mask = cv2.dilate(mask, None, iterations=2)

        final = cv2.bitwise_and(opening, opening, mask=mask)

        # Menggunakan Tesseract OCR
        config = "--psm 6"
        text = tsr.image_to_string(final, config=config)
        return text
    
    return ""

