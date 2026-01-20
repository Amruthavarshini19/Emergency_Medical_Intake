// Reference to Firestore
const db = firebase.firestore();

// HTML container where cases will appear
const casesDiv = document.getElementById("cases");

// Fetch emergency cases from Firestore
db.collection("emergency_cases")
  .orderBy("timestamp", "desc") // latest cases first
  .onSnapshot((snapshot) => {
    casesDiv.innerHTML = ""; // clear old data

    if (snapshot.empty) {
      casesDiv.innerHTML = "<p>No emergency cases yet.</p>";
      return;
    }

    snapshot.forEach((doc) => {
      const data = doc.data();

      const caseCard = document.createElement("div");
      caseCard.style.border = "1px solid #ddd";
      caseCard.style.padding = "15px";
      caseCard.style.marginBottom = "15px";
      caseCard.style.borderRadius = "8px";
      caseCard.style.background = "#f9f9f9";

      caseCard.innerHTML = `
        <h3>🧑 Patient: ${data.name || "N/A"}</h3>
        <p><b>Age:</b> ${data.age || "N/A"}</p>

        <p><b>Symptoms:</b><br>${data.symptoms || "N/A"}</p>

        <p><b>Allergies:</b><br>${data.allergies || "None"}</p>

        <p><b>Emergency Contact:</b> ${data.contact || "N/A"}</p>

        <p style="font-size:12px; color:gray;">
          🕒 Reported at: 
          ${data.timestamp
            ? data.timestamp.toDate().toLocaleString()
            : "Just now"}
        </p>
      `;

      casesDiv.appendChild(caseCard);
    });
  });
