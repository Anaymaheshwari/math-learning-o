// utils/speech.js
export function startVoiceInput(callback) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-IN';
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    callback(transcript);
  };

  recognition.onerror = (event) => {
    alert("Error: " + event.error);
  };

  recognition.start();
}
