const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const timeoff = quiz_box.querySelector("header .time_text");

const option_list = document.querySelector(".option_list");

start_btn.onclick = () => {
  getElementsByClassName = info_box;
  info_box.add("activeInfo");
};

exit_btn.onclick = () => {
  info_box.classlist.remove("activeInfo");
};

continue_btn.onclick = () => {
  info_box.classlist.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuestions(0);
  queCounter(1);
  startTimer(15);
  startTimerLine(0);
};

let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const next_btn = quiz_box.querySelector("next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons.quit");

restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz");
  result_box.classList.remove("activeResult");
  let que_count = 0;
  let que_numb = 1;
  let timeValue = 15;
  let widthValue = 0;
  let userScore = 0;
  showQuestions(que_count);
  queCounter(que_numb);
  clearInterval(counter);
  startTimer(timeValue);
  clearInterval(counterLine);
  startTimerLine(widthValue);
  next_btn.getElementsByClassName.display = "none";
  timeoff.textContent = "Time Off";
};

quit_quiz.onclick = () => {
  window.location.reload();
};

next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeoff.textContent = "Time left";
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    console.log("questions completed");
    showResultBox();
  }
};

function showQuestions(index) {
  const que_text = document.querySelector(".que_text");
  let que_tag =
    "<span>" +
    questions[index].numb +
    "." +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option">' +
    questions[index].options[0] +
    "<span></span><div>" +
    'div class="option">' +
    questions[index].options[1] +
    "<span></span><div>" +
    'div class="option">' +
    questions[index].options[2] +
    "<span></span><div>" +
    'div class="option">' +
    questions[index].options[3] +
    "<span></span><div>";
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option_list.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  let allOptions = option_list.children.length;
  if (userAns == correctAns) {
    userScore += 1;
    console.log(userScore);
    answer.classList.add("correct");
    console.log("Answer is Correct");
    answer.insertAdjacentHTML("beforeend", tickIcon);
  } else {
    answer.classList.add("incorrect");
    console.log("Answer is Wrong");
    answer.insertAdjacentHTML("beforeend", crossIcon);

    for (let i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correctAns) {
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classlist.add("disabled");
  }
  next_btn.style.display = "block";
}

function showResultBox() {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 3) {
    let scoreTag =
      "<span> and congrats! YOu got <p>" +
      userScore +
      "</p> out of <p>" +
      quiestions.length +
      "</p><span>";
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 1) {
    let scoreTag =
      "<span> and Nice! YOu got <p>" +
      userScore +
      "</p> out of <p>" +
      quiestions.length +
      "</p><span>";
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag =
      "<span> and Sorry! YOu got <p>" +
      userScore +
      "</p> out of <p>" +
      quiestions.length +
      "</p><span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time < 0) {
      clearInterval(counter);
      timeCount.textContent = "00";
      timeoff.textContent = "Time Off";
      let correctAns = questions[que_count].answer;
      let allOptions = option_list.children.length;

      for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correctAns) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
        }
      }
      for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classlist.add("disabled");
      }
      next_btn.style.display = "block";
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1;
    timeLine.style.width = time + "px";
    if (time > 549) {
      clearInterval(counterLine);
    }
  }
}

// console.log(userAns);

// function queCounter(index){}
// const bottom_ques_counter = quiz_box.querySelector(".total_que");
// let totalQuesCountTag = '<span><p>' + que_count + '</p>of<p>' +questions.length + '</p>Questions</span>';

//   {
//     numb: 1,
//     question: "where is the capital of Finland?",
//     answer:"Helsinki"
//     options: ["Berlin", "Helsinki", "Paris"]
//   }
//   {
//     numb: 2,
//     question: "which city is located in Italy?",
//     answer:"Rome"
//     options: ["Tulos", "Monaco", "Rome"]
//   }
//   {
//     numb: 3,
//     question: "which country is not a neighbor of Russia?",
//     answer:"India"
//     options: ["India", "Ukraine", "Iran"]
//   }
//   {
//   numb: 4,
//   question: "which country is an island?",
//   answer:"Iceland"
//   options: ["Iceland", "Hungary", "Romania"]
//   }
//   {
// numb: 5,
//     question: "which country is more populated?",
//     answer:"Germany"
//     options: ["Norway", "Belgium", "Germany"]
//   }

// let que_count = 0;

// function showQuestions(index){
//   const que_test = document.querySelector(".que_text");
//   const option_list = document.querySelector(".option_list");
//   let que_tag = '<span>' +questions[index].question + '</span>';
//   let option_tag = '<div class="option"> + questions[index].options[1] +
//   '<span></span></div>';
// que_text.innerHTML = que_tag;
// option_list.innerHTML = option_tag;
// }
