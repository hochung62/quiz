const quiz = [
  { question: "종이컵은 종이로 만들어졌으니 종이로 분리배출해야 한다.", answer: false },
  { question: "플라스틱 용기 안에 음식물이 남아 있어도 그대로 분리배출해도 된다.", answer: false },
  { question: "페트병은 라벨을 제거한 뒤 압착해서 버리는 것이 좋다.", answer: true },
  { question: "유리병은 병뚜껑을 분리하고 버리는 것이 바람직하다.", answer: true },
  { question: "깨진 유리도 유리병과 같이 배출해도 된다.", answer: false }
];

let current = 0;
let score = 0;

function showQuestion() {
  const questionBox = document.getElementById("question");
  const resultBox = document.getElementById("feedback");
  questionBox.textContent = quiz[current].question;
  resultBox.textContent = ""; // 피드백 초기화
}

function answer(userAnswer) {
  const isCorrect = userAnswer === quiz[current].answer;
  const resultBox = document.getElementById("feedback");

  if (isCorrect) {
    score++;
    resultBox.textContent = "✅ 정답입니다!";
    resultBox.style.color = "green";
  } else {
    resultBox.textContent = "❌ 오답입니다!";
    resultBox.style.color = "red";
  }

  // 1초 후 다음 문제 또는 결과
  setTimeout(() => {
    current++;
    if (current < quiz.length) {
      showQuestion();
    } else {
      document.getElementById("quiz-box").classList.add("hidden");
      document.getElementById("result-box").classList.remove("hidden");
      document.getElementById("result").textContent = `당신의 점수는 ${score} / ${quiz.length}점입니다!`;
    }
  }, 1000);
}

function restart() {
  current = 0;
  score = 0;
  document.getElementById("quiz-box").classList.remove("hidden");
  document.getElementById("result-box").classList.add("hidden");
  showQuestion();
}

window.onload = showQuestion;
