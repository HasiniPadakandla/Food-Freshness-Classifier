const video = document.getElementById("camera");
const canvas = document.getElementById("canvas");
const resultBox = document.getElementById("result");
const tipsBox = document.getElementById("tips");
const scanLine = document.querySelector(".scan-line");

function scrollToScanner() {
  document.getElementById("scanner").scrollIntoView({ behavior: "smooth" });
}

function openCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => video.srcObject = stream)
    .catch(() => alert("Camera access required"));
}

async function capture() {
  scanLine.style.display = "block";

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0);

  const blob = await new Promise(resolve =>
    canvas.toBlob(resolve, "image/jpeg")
  );

  const formData = new FormData();
  formData.append("file", blob);

  resultBox.className = "result";
  resultBox.innerText = "Analyzing freshness...";
  resultBox.classList.remove("hidden");
  tipsBox.classList.add("hidden");

  const res = await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    body: formData
  });

  const data = await res.json();

  scanLine.style.display = "none";

  let cls = "okay";
  let tips = "";

  if (data.prediction === "Fresh") {
    cls = "fresh";
    tips = "✅ Safe to eat. Store properly and consume soon for best nutrition.";
  } else if (data.prediction === "Avoid") {
    cls = "avoid";
    tips = "⚠️ Avoid consuming. Discard safely to prevent foodborne illness.";
  } else {
    tips = "⚠️ Consume with caution. Check smell and texture before eating.";
  }

  resultBox.className = `result ${cls}`;
  resultBox.innerText = `${data.prediction} • Confidence ${data.confidence}`;

  tipsBox.innerText = tips;
  tipsBox.classList.remove("hidden");
}