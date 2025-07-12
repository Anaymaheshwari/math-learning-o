// utils/logicEngine.js
import { logicModules } from '../app.js';

export function solveQuestion(topic, userInput) {
  const logic = logicModules[topic];
  if (!logic) return "No logic found for this topic.";

  try {
    // Try the `solve()` method first
    if (typeof logic.solve === 'function') {
      return logic.solve(userInput);
    }

    // Else try the first exported function
    const logicFunc = Object.values(logic).find(fn => typeof fn === 'function');
    if (logicFunc) {
      return logicFunc(userInput);
    }

    return "No valid function available in logic module.";
  } catch (err) {
    return "Error solving the question: " + err.message;
  }
}
