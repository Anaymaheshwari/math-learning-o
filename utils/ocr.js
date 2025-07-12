// utils/ocr.js
export function extractTextFromImage(file, callback) {
  Tesseract.recognize(file, 'eng', {
    logger: m => console.log(m)
  }).then(({ data: { text } }) => {
    callback(text);
  });
}
