// mcq/mcqEngine.js

import { mcqData } from './mcqData.js';

export function renderMCQ(topic, container) {
  if (!mcqData[topic]) {
    container.innerHTML = '<p>No MCQs available for this topic yet.</p>';
    return;
  }

  const questions = mcqData[topic];
  let current = 0;
  let score = 0;

  function loadQuestion() {
    const q = questions[current];
    container.innerHTML = `
      <div class="mcq-box">
        <p><strong>Q${current + 1}:</strong> ${q.question}</p>
        ${q.options.map((opt, i) => `
          <label><input type="radio" name="option" value="${opt}" /> ${opt}</label><br>`).join('')}
        <button id="submitBtn">Submit</button>
      </div>
    `;

    document.getElementById('submitBtn').onclick = () => {
      const selected = document.querySelector('input[name="option"]:checked');
      if (!selected) return alert("Please select an option");

      if (selected.value === q.answer) {
        score++;
      }

      current++;
      if (current < questions.length) {
        loadQuestion();
      } else {
        container.innerHTML = `<h3>Your Score: ${score}/${questions.length}</h3>`;
      }
    };
  }

  loadQuestion();
}
