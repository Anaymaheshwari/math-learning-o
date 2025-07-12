// app.js

import * as area from './topics/area.js';
import * as exponents from './topics/exponents.js';
import * as percentage from './topics/percentage.js';
import * as algebra from './topics/algebra.js';
import * as factorisation from './topics/factorisation.js';
import * as inequalities from './topics/inequalities.js';
import * as geometry from './topics/geometry.js';
import * as linearEquations from './topics/linearEquations.js';
import * as rationalNumbers from './topics/rationalNumbers.js';
import * as polynomials from './topics/polynomials.js';
import * as dataHandling from './topics/dataHandling.js';
import * as perimeter from './topics/perimeter.js';
import * as volumeAndSurfaceArea from './topics/volumeAndSurfaceArea.js';
import * as squaresCubesRoots from './topics/squaresCubesRoots.js';
import * as simpleInterest from './topics/simpleInterest.js';
import * as compoundInterest from './topics/compoundInterest.js';
import * as decimals from './topics/decimals.js';
import * as integers from './topics/integers.js';
import * as arithmeticOperations from './topics/arithmeticOperations.js';
import * as probability from './topics/probability.js';

import { renderMCQ } from './mcq/mcqEngine.js';
import { renderSubjective } from './subjective/subjectiveEngine.js';
import { solveQuestion } from './utils/logicEngine.js';
import { extractTextFromImage } from './utils/ocr.js';

export const logicModules = {
  area,
  exponents,
  percentage,
  algebra,
  factorisation,
  inequalities,
  geometry,
  linearEquations,
  rationalNumbers,
  polynomials,
  dataHandling,
  perimeter,
  volumeAndSurfaceArea,
  squaresCubesRoots,
  simpleInterest,
  compoundInterest,
  decimals,
  integers,
  arithmeticOperations,
  probability
};

const container = document.getElementById("quizContainer");

window.loadMCQ = function () {
  const topic = document.getElementById("topicSelector").value;
  if (!topic) return alert("Please select a topic");
  renderMCQ(topic, container);
};

window.loadSubjective = function () {
  const topic = document.getElementById("topicSelector").value;
  if (!topic) return alert("Please select a topic");
  renderSubjective(topic, container);
};

window.solveLogic = function () {
  const topic = document.getElementById("topicSelector").value;
  const input = document.getElementById("logicInput").value.trim();
  if (!topic || !input) return alert("Please select a topic and type a question.");

  const result = solveQuestion(topic, input);
  container.innerHTML = `<h3>Solution:</h3><p>${result}</p>`;
};

window.handleImage = async function () {
  const imageInput = document.getElementById("imageInput");
  if (!imageInput.files.length) return alert("Please upload an image.");

  const file = imageInput.files[0];
  const extractedText = await extractTextFromImage(file);
  document.getElementById("logicInput").value = extractedText;
};

window.handleVoice = function () {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-IN";

  recognition.onresult = function (event) {
    const spokenText = event.results[0][0].transcript;
    document.getElementById("logicInput").value = spokenText;
  };

  recognition.onerror = function (event) {
    alert("Voice input failed: " + event.error);
  };

  recognition.start();
};
