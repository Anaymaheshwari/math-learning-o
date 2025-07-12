//Logic code for Data Handling will go here
// topics/dataHandling.js

// PIE CHART (generate angle + simple pie with segments)
function generatePieChart(data) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let output = "";
  data.forEach(item => {
    const angle = ((item.value / total) * 360).toFixed(2);
    const blocks = '◼️'.repeat(Math.round((item.value / total) * 20)); // Max 20 blocks
    output += `${item.label.padEnd(10)}: ${blocks} ${angle}°\n`;
  });
  return output.trim();
}

// BAR GRAPH (single dataset)
function generateBarGraph(data) {
  return data.map(item => `${item.label.padEnd(10)}: ${'█'.repeat(item.value)} (${item.value})`).join("\n");
}

// DOUBLE BAR GRAPH (two datasets side by side)
function generateDoubleBarGraph(labels, data1, data2) {
  let output = "";
  for (let i = 0; i < labels.length; i++) {
    const bar1 = '█'.repeat(data1[i]);
    const bar2 = '░'.repeat(data2[i]);
    output += `${labels[i].padEnd(10)}: ${bar1} (${data1[i]}) | ${bar2} (${data2[i]})\n`;
  }
  return output.trim();
}

// LINE GRAPH: show coordinates only
function generateLineGraph(data) {
  return data.map((y, x) => `(${x}, ${y})`).join(" → ");
}

// PICTOGRAPH
function generatePictograph(data, symbol = '🍎', scale = 1) {
  return data.map(item => {
    const count = Math.floor(item.value / scale);
    return `${item.label.padEnd(10)}: ${symbol.repeat(count)} (${item.value})`;
  }).join("\n");
}

// TALLY MARKS
function generateTallyMarks(data) {
  return data.map(item => {
    const full = Math.floor(item.value / 5);
    const rest = item.value % 5;
    const tallies = '||||̵ '.repeat(full) + '|'.repeat(rest);
    return `${item.label.padEnd(10)}: ${tallies} (${item.value})`;
  }).join("\n");
}

// SUBJECTIVE ANALYSIS on bar graph
function interpretBarGraph(data, question) {
  if (question.includes("highest")) {
    const max = data.reduce((a, b) => a.value > b.value ? a : b);
    return `The highest is "${max.label}" with value ${max.value}.`;
  } else if (question.includes("lowest")) {
    const min = data.reduce((a, b) => a.value < b.value ? a : b);
    return `The lowest is "${min.label}" with value ${min.value}.`;
  } else if (question.includes("difference")) {
    const sorted = data.slice().sort((a, b) => b.value - a.value);
    return `Difference between top two: ${sorted[0].value - sorted[1].value}.`;
  } else {
    return "Can answer questions like 'highest', 'lowest', or 'difference'.";
  }
}

export {
  generatePieChart,
  generateBarGraph,
  generateDoubleBarGraph,
  generateLineGraph,
  generatePictograph,
  generateTallyMarks,
  interpretBarGraph
};
