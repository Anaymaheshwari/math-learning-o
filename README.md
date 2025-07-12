# 📚 Math Learning-o App

**Math Learning-o** is a web-based educational app built to help students in middle school and high school master key math concepts. It supports step-by-step logic solving, interactive quizzes (MCQs & subjective), and visual learning tools like graphs and pictographs.

---

## 🔧 Folder Structure

math-learning-o/
│
├── index.html # Main HTML file (UI layout)
├── style.css # CSS file for styling
├── app.js # JavaScript for UI logic
│
├── topics/ # Topic-specific logic files
│ ├── exponents.js
│ ├── percentage.js
│ ├── algebra.js
│ ├── factorisation.js
│ ├── inequalities.js
│ ├── geometry.js
│ ├── linearEquations.js
│ ├── rationalNumbers.js
│ ├── polynomials.js
│ ├── dataHandling.js
│ ├── decimals.js
│ ├── area.js
│ ├── perimeter.js
│ ├── interest.js
│ ├── volume.js
│ └── squaresCubesRoots.js
│
├── mcq/
│ ├── mcqData.js # All topic-wise MCQs stored here
│ └── mcqEngine.js # Logic to handle MCQ quiz mode
│
├── subjective/
│ ├── subjectiveData.js # All topic-wise subjective Qs
│ └── subjectiveEngine.js # Logic to handle subjective quiz mode
│
├── utils/
│ ├── solver.js # General math utilities (GCD, LCM, etc.)
│ └── ocr.js # (optional) OCR logic for image-based input
│
├── assets/
│ ├── images/ # Topic illustrations or screenshots
│ └── sounds/ # (optional) Audio for correct/wrong answers
│
└── README.md # This documentation file

---

## ✅ Features

- 💡 **Step-by-step math logic** for over 15 topics
- 🎯 **Topic-wise MCQ quizzes** with score tracking
- ✍️ **Subjective mode** with math reasoning answers
- 📊 **Data Handling visuals**: bar graph, pie chart, pictograph, line graph, tally marks
- 👨‍👩‍👧‍👦 **Age problems, word problems**, and story-based logic
- 🎓 Covers:
  - Exponents, Algebraic Expressions, Factorisation
  - Linear Equations (with age problems)
  - Percentages, Rational Numbers, Polynomials
  - Decimals, Area, Perimeter, Volume, Interest
  - Geometry (coordinate and basic)
  - Data Handling (graphs, charts)
  - Inequalities, Squares, Cubes, Roots

---

## 🚀 Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/math-learning-o.git
cd math-learning-o
