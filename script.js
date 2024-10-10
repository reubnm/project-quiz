const questions = [
  {
    question: "Which of these animals is native to New Zealand?",
    options: [
      "Kangaroo",
      "Kiwi bird",
      "Koala",
      "Emu"
    ],
    answer: "Kiwi bird"
  },
  {
    question: "What is the capital city of New Zealand?",
    options: [
      "Auckland",
      "Wellington",
      "Christchurch",
      "Hamilton"
    ],
    answer: "Wellington"
  },
  {
    question: "What is the name of the indigenous people of New Zealand?",
    options: [
      "Maori",
      "Aborigines",
      "Inuit",
      "Sami"
    ],
    answer: "Maori"
  },
  {
    question: "Which of these films was primarily shot in New Zealand?",
    options: [
      "Harry Potter series",
      "Lord of the Rings trilogy",
      "Pirates of the Caribbean",
      "Star Wars series"
    ],
    answer: "Lord of the Rings trilogy"
  },
  {
    question: "What is the highest mountain in New Zealand?",
    options: [
      "Mount Cook (Aoraki)",
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount McKinley"
    ],
    answer: "Mount Cook (Aoraki)"
  },
  {
    question: "Which city in New Zealand is known as the 'City of Sails'?",
    options: [
      "Auckland",
      "Wellington",
      "Dunedin",
      "Queenstown"
    ],
    answer: "Auckland"
  },
  {
    question: "What is the official national sport of New Zealand?",
    options: [
      "Cricket",
      "Rugby Union",
      "Soccer",
      "Netball"
    ],
    answer: "Rugby Union"
  },
  {
    question: "Which sea lies to the west of New Zealand?",
    options: [
      "Tasman Sea",
      "Coral Sea",
      "South China Sea",
      "Arafura Sea"
    ],
    answer: "Tasman Sea"
  },
  {
    question: "What is the traditional Maori greeting called?",
    options: [
      "Haka",
      "Hongi",
      "Powhiri",
      "Waka"
    ],
    answer: "Hongi"
  },
  {
    question: "Which New Zealand town is famous for its geothermal activity and Maori culture?",
    options: [
      "Rotorua",
      "Christchurch",
      "Hamilton",
      "Napier"
    ],
    answer: "Rotorua"
  }
];

// Add your code underneath this comment.

const element = document.getElementById("question");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
let count = 0

const select = document.getElementById("submit");
 
select.addEventListener('click', function () {
count++ 

answer1.innerText = questions[count].options[0];

answer2.innerText = questions[count].options[1];

answer3.innerText = questions[count].options[2];

answer4.innerText = questions[count].options[3];

element.innerText = questions[count].question }) 


// Get references to all four answer buttons and the submit button
let button1 = document.getElementById('answer1');
let button2 = document.getElementById('answer2');
let button3 = document.getElementById('answer3');
let button4 = document.getElementById('answer4');
let submitButton = document.getElementById('submit');

// Variable to hold the selected answer
let selectedAnswer = null;

// Function to handle answer selection
function selectFirstAnswer(answer) {
    selectedAnswer = answer; // Set the selected answer

    // Set background color for all buttons
    [button1, button2, button3, button4].forEach(button => {
        button.style.backgroundColor = button === answer ? 'lightblue' : ''; // Highlight selected
    });
}

// Add onClick handlers for each answer button
button1.onclick = () => selectFirstAnswer(button1);
button2.onclick = () => selectFirstAnswer(button2);
button3.onclick = () => selectFirstAnswer(button3);
button4.onclick = () => selectFirstAnswer(button4);

// Function to handle submission
function submitAnswer() {
    if (selectedAnswer === null) {
        alert('Please select an answer before submitting.'); // Alert if no answer selected
    } else {
        alert(`You selected: ${selectedAnswer.textContent}`); // Alert the selected answer
    }
}

submitButton.onclick = submitAnswer;
