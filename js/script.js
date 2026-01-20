// Emergency Questions
const questions = [
  { q: "What is the patient's name?", field: "name" },
  { q: "What is the patient's age?", field: "age" },
  { q: "What symptoms are present?", field: "symptoms" },
  { q: "Any known allergies?", field: "allergies" },
  { q: "Emergency contact number?", field: "contact" }
];

let currentQuestion = 0;

// Display first question
document.getElementById("question").innerText = questions[0].q;

// Speech Recognition Setup
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-IN";
recognition.interimResults = false;

// Start Listening
function startListening() {
  recognition.start();
}

// Handle Voice Result
recognition.onresult = (event) => {
  const spokenText = event.results[0][0].transcript;

  document.getElementById("heard").innerText = spokenText;

  const field = questions[currentQuestion].field;
  document.getElementById(field).value = spokenText;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    document.getElementById("question").innerText =
      questions[currentQuestion].q;
  } else {
    document.getElementById("question").innerText =
      "All emergency questions completed.";
  }
};

// TEMP Submit (Member 2 will replace backend logic)
function submitForm() {
  const data = {
    name: name.value,
    age: age.value,
    symptoms: symptoms.value,
    allergies: allergies.value,
    contact: contact.value
  };

  console.log("Emergency Data:", data);
  document.getElementById("status").innerText =
    "Emergency data captured successfully.";
}
