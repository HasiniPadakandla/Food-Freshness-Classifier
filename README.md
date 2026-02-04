# 🍃 Food Freshness Scanner

A camera-based AI web application that analyzes food images and predicts freshness in real time.  
The system combines a modern computer vision model with a clean, user-friendly interface to help users make safer food choices.

---

## ✨ Overview

Food quality assessment is often subjective and error-prone.  
This project demonstrates how **pretrained vision models** can be integrated into a **full-stack web application** to provide instant freshness insights using only a camera or image upload.

The application is designed with a **restaurant / health-tech style UI** and exposes a REST API for image-based inference.

---

## 🚀 Features

- 📷 Camera-based food scanning (browser)
- 🧠 AI-powered image analysis
- ⚡ Real-time freshness prediction
- 📊 Confidence score with each prediction
- 🌿 Clean, minimal, restaurant-style UI
- 🔌 REST API built with FastAPI

---

## 🧠 Model & Dataset

### Model
- Vision Transformer (ViT)
- Pretrained model: `google/vit-base-patch16-224` (Hugging Face)

The model is used **as-is for inference** to ensure fast performance and reliability without long training times.

### Dataset
- Food Freshness Dataset (Kaggle)
- Used for:
  - Testing
  - Validation
  - Future fine-tuning (planned)

> ⚠️ Note: The current version uses a pretrained vision model.  
> The architecture is modular and supports fine-tuning in future versions.

---

## 🛠️ Tech Stack

### Backend
- Python
- FastAPI
- Hugging Face Transformers
- PyTorch
- Pillow

### Frontend
- HTML
- CSS
- JavaScript
- Browser Camera API

---

## 🧩 How It Works

1. User opens the web application
2. Food image is captured using the camera (or uploaded)
3. Image is sent to the FastAPI backend
4. Vision Transformer analyzes the image
5. Backend returns:
   - Freshness label
   - Confidence score
6. Result is displayed instantly on the UI

---

## ▶️ Running the Project Locally

### 1️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
