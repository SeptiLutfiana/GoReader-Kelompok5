from flask import Flask, request, jsonify, send_file
from dotenv import load_dotenv
import numpy as np
from preprocessing import preprocessing
import pytesseract 
import cv2
import os
from PIL import Image

app = Flask(__name__)

app.config['DEBUG'] = os.environ.get('FLASK_DEBUG', False)

@app.route('/', methods=['GET'])
def home():
    return "yes"

@app.route('/read', methods=['GET'])
def read():
    # Directly specify the image path
    image_path = "E:\\KULIAH\\SEM 6\\PEMOGRAMAN FRAMEWORK\\GoReader-Kelompok5\\OCR\\Images\\Meteran2.jpg"
    
    # Ensure the file exists and has correct permissions
    if not os.path.isfile(image_path):
        return jsonify({"error": "File not found"}), 404
    
    try:
        # Read the image using OpenCV
        image = cv2.imdecode(np.fromfile(image_path, np.uint8), cv2.IMREAD_UNCHANGED)
        
        if image is None:
            return jsonify({"error": "Failed to read image"}), 400

        # Preprocess the image
        ready = preprocessing(image)
        
        # Set the path to the Tesseract executable
        pytesseract.pytesseract.tesseract_cmd = r"C:\\Program Files\\Tesseract-OCR\\tesseract.exe"
        
        # Perform OCR on the processed image
        text = pytesseract.image_to_string(ready)
        
        return jsonify({"text": text})
    
    except pytesseract.TesseractError as e:
        return jsonify({"error": f"Tesseract error: {str(e)}"}), 500
    except Exception as e:
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)
