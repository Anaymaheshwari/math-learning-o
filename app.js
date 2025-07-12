/* app.js */
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

const topicModules = {
  exponents,
  percentage,
  algebra,
  factorisation,
  inequalities,
  geometry,
  linearEquations,
  rationalNumbers,
  polynomials,
  dataHandling
};

const topicSelect = document.getElementById('topicSelect');
const inputSection = document.getElementById('inputSection');
const outputSection = document.getElementById('outputSection');

topicSelect.addEventListener('change', async (e) => {
  const selected = e.target.value;
  inputSection.innerHTML = '';
  outputSection.innerHTML = '';

  if (selected && topicModules[selected]) {
    const module = topicModules[selected];
    if (typeof module.renderUI === 'function') {
      module.renderUI(inputSection, outputSection);
    } else {
      outputSection.innerHTML = '<p>No UI available for this topic yet.</p>';
    }
  }
});
