// subjective/subjectiveEngine.js

import { subjectiveData } from './subjectiveData.js';

export function renderSubjective(topic, container) {
  if (!subjectiveData[topic]) {
    container.innerHTML = '<p>No subjective questions available for this topic.</p>';
    return;
  }

  const questions = subjectiveData[topic];
  let current = 0;
  let score = 0;

  function loadQuestion() {
    const q = questions[current];
    container.innerHTML = `
      <div class="subjective-box">
        <p><strong>Q${current + 1}:</strong> ${q.question}</p>
        <textarea id="userAnswer" rows="3" placeholder="Write your answer here..."></textarea><br>
        <button id="submitBtn">Submit</button>
      </div>
    `;

    document.getElementById('submitBtn').onclick = () => {
      const userAns = document.getElementById('userAnswer').value.trim().toLowerCase();
      const correctAns = q.answer.toLowerCase();

      // basic match check (ignores casing/extra spacing)
      if (userAns.includes(correctAns) || correctAns.includes(userAns)) {
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
