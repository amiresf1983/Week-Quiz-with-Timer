// function queCounter(index){}
// const bottom_ques_counter = quiz_box.querySelector(".total_que");
// let totalQuesCountTag = '<span><p>' + que_count + '</p>of<p>' +questions.length + '</p>Questions</span>';

let questions = [
  {
    numb: 1,
    question: "where is the capital of Finland?",
    answer:"Helsinki"
    options: [
      "Berlin",
      "Helsinki",
      "Paris"
    ]
  },
  {
    numb: 2,
    question: "which city is located in Italy?",
    answer:"Rome"
    options: [
      "Tulos", 
      "Monaco", 
      "Rome"
    ]
  
  },
  {
    numb: 3,
    question: "which country is not a neighbor of Russia?",
    answer:"India"
    options: ["India", "Ukraine", "Iran"]
  },
  {
  numb: 4,
  question: "which country is an island?",
  answer:"Iceland"
  options: ["Iceland", "Hungary", "Romania"]
  },
  {
numb: 5,
    question: "which country is more populated?",
    answer:"Germany"
    options: ["Norway", "Belgium", "Germany"]
  },
];

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