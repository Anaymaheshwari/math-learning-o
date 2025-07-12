// app.js
import { renderMCQ } from './mcq/mcqEngine.js';
import { renderSubjective } from './subjective/subjectiveEngine.js';
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
import * as area from './topics/area.js';
import * as perimeter from './topics/perimeter.js';
import * as volumeAndSurfaceArea from './topics/volumeAndSurfaceArea.js';
import * as squaresCubesRoots from './topics/squaresCubesRoots.js';
import * as simpleInterest from './topics/simpleInterest.js';
import * as compoundInterest from './topics/compoundInterest.js';
import * as decimals from './topics/decimals.js';
import * as integers from './topics/integers.js';
import * as arithmeticOperations from './topics/arithmeticOperations.js';
import * as probability from './topics/probability.js';

import { solveQuestion } from './utils/logicEngine.js';

export const logicModules = {
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
  area,
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

window.solveLogic = function () {
  const topic = document.getElementById("topicSelector").value;
  const input = document.getElementById("logicInput").value.trim();

  if (!topic || !input) return alert("Please select a topic and type a question.");

  const result = solveQuestion(topic, input);
  container.innerHTML = `<h3>Solution:</h3><p>${result}</p>`;
};

import { renderMCQ } from './mcq/mcqEngine.js';
import { renderSubjective } from './subjective/subjectiveEngine.js';

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

import { extractTextFromImage } from './utils/ocr.js';

window.extractImageText = async function () {
  // OCR logic here
};

