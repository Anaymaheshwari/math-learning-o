// utils/logicEngine.js

import { logicModules } from '../app.js';

export function solveQuestion(topic, userInput) {
  const logic = logicModules[topic];

  if (!logic) return "No logic found for this topic.";

  try {
    // ✅ If there's a solve() function, use it
    if (typeof logic.solve === 'function') {
      console.log(`[✔] ${topic}.solve() called with input:`, userInput);
      return logic.solve(userInput);
    }

    // ✅ Fallback: try to use any other function in the module
    const logicFunc = Object.values(logic).find(fn => typeof fn === 'function');
    if (logicFunc) {
      console.log(`[✔] Using fallback function for ${topic}`);
      return logicFunc(userInput);
    }

    return "No valid solving function found in this topic.";
  } catch (err) {
    return "⚠️ Error solving the question: " + err.message;
  }
}
