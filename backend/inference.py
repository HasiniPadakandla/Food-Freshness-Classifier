import torch
from PIL import Image
from transformers import AutoImageProcessor, AutoModelForImageClassification

MODEL_NAME = "google/vit-base-patch16-224"

processor = AutoImageProcessor.from_pretrained(MODEL_NAME)
model = AutoModelForImageClassification.from_pretrained(MODEL_NAME)
model.eval()

def predict_image(image: Image.Image):
    inputs = processor(images=image, return_tensors="pt")

    with torch.no_grad():
        outputs = model(**inputs)
        probs = torch.softmax(outputs.logits, dim=1)

    confidence, pred = torch.max(probs, dim=1)
    confidence = confidence.item()

    # Simple freshness heuristic (demo-friendly)
    if confidence > 0.75:
        label = "Fresh"
    elif confidence > 0.4:
        label = "Okay"
    else:
        label = "Avoid"

    return {
        "prediction": label,
        "confidence": round(confidence, 3)
    }