const quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？",
    answers: [
      'スーパーファミコン',
      'プレイステーション',
      'ニンテンドウスイッチ',
      'ニンテンドウDS'
    ],
    correct: 'ニンテンドウDS'
  }, {
    question: "次の野菜の名前うち1つは日本語ではありません。それはどれでしょうか？",
    answers: [
      'しいたけ',
      'れんこん',
      'オクラ',
      'ダイコン'
    ],
    correct: 'オクラ'
  }, {
    question: "ギリシャでは日本語の「たべるな」という言葉が通じます。現地での意味は何でしょうか？",
    answers: [
      '日本語と同じ',
      'デザート',
      '学校給食',
      '大衆食堂'
    ],
    correct: '大衆食堂'
  }, {
    question: "たい焼きは、元々は鯛の形ではありませんでした。どんな形をしていたでしょうか？",
    answers: [
      'ウサギ',
      'カメ',
      'ヒヨコ',
      '人形'
    ],
    correct: 'カメ'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
      window.alert('正解!');
      score++;
    } else {
      window.alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quizLength) {
      setupQuiz();
    } else {
      window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です');
    }
};

let handleIndex = 0;

while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
