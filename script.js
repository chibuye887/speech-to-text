// Check if browser supports Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  console.log("Speech Recognition is supported!");

  const recognition = new SpeechRecognition();
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");
  const textOutput = document.getElementById("textOutput");

  // Settings for recognition
  recognition.continuous = true; // Keeps the recognition running
  recognition.lang = "en-US";   // Language for recognition

  // When recognition starts
  recognition.onstart = () => {
    console.log("Voice recognition started.");
    startBtn.disabled = true;
    stopBtn.disabled = false;
  };

  // Capture speech and add it to the textarea
  recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    textOutput.value += transcript + " ";
  };

  // When recognition stops
  recognition.onend = () => {
    console.log("Voice recognition stopped.");
    startBtn.disabled = false;
    stopBtn.disabled = true;
  };

  // Start recognition
  startBtn.addEventListener("click", () => {
    recognition.start();
  });

  // Stop recognition
  stopBtn.addEventListener("click", () => {
    recognition.stop();
  });

} else {
  alert("Speech Recognition is not supported in this browser. Please use Google Chrome or Edge.");
}
