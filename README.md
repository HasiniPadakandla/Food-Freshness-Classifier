<<<<<<< HEAD
# 🍃 Food Freshness Scanner

A camera-based AI web application that checks food freshness using a pretrained computer vision model.

## Features
- Camera-based food scanning
- Image upload API using FastAPI
- Real-time freshness prediction
- Confidence score for predictions
- Clean, restaurant-style UI

## Tech Stack
- Python
- FastAPI
- Hugging Face Transformers
- Vision Transformer (ViT)
- HTML, CSS, JavaScript

## Model & Dataset
- Model: google/vit-base-patch16-224 (pretrained)
- Dataset: Food Freshness Dataset (Kaggle)
- The dataset is used for testing and future fine-tuning.
- The current version uses a pretrained model for fast inference.

## How It Works
1. User opens the web app
2. Captures food image using camera
3. Image is sent to FastAPI backend
4. Vision model analyzes the image
5. App returns freshness label and confidence

## Run Locally

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
=======

>>>>>>> 748de6367bd4845c39b73832b8c9d807df957191
