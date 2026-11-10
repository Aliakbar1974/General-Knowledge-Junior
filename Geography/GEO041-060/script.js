
 // ============================================================
 // GENERAL KNOWLEDGE Junior — MCQ BANK PART 03
 // Topic: Geography | 20 Questions
 // Learning Mode + Exam Mode | 15 Seconds per Question
 // Sound Engine + Facebook Return + Result Screen
 // ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo?fbid=122125141119435742&set=a.122102731923435742";


// ============================================================
// SOUND ENGINE
// ============================================================

const sounds = {
    start: new Audio("Sounds/Start.wav"),
    correct: new Audio("Sounds/Correct.wav"),
    wrong: new Audio("Sounds/Wrong.wav"),
    tryAgain: new Audio("Sounds/TryAgain.wav"),
    success: new Audio("Sounds/Success.wav"),
    victory: new Audio("Sounds/Victory.wav"),
    complete: new Audio("Sounds/Complete.wav")
};

function playSound(soundName) {
    const sound = sounds[soundName];
    if (!sound) return;

    sound.currentTime = 0;

    sound.play().catch(error => {
        console.log("Sound could not play:", error);
    });
}


// ============================================================
// QUIZ DATA
// explanation এবং example আলাদা রাখা হয়েছে
// answer index: 0=A, 1=B, 2=C, 3=D
// ============================================================



const quizData = [

  {
    id: "GEO041",
    question: "মিসর কোন মহাদেশে অবস্থিত?",
    options: ["এশিয়া", "ইউরোপ", "আফ্রিকা", "দক্ষিণ আমেরিকা"],
    answer: 2,
    explanation: "মিসর প্রধানত আফ্রিকা মহাদেশের উত্তর-পূর্ব অংশে অবস্থিত। দেশটির সিনাই উপদ্বীপের একটি অংশ এশিয়া মহাদেশে পড়েছে।",
    example: "কায়রো আফ্রিকা মহাদেশে অবস্থিত মিসরের রাজধানী।"
  },
  {
    id: "GEO042",
    question: "জাপান কোন মহাদেশে অবস্থিত?",
    options: ["এশিয়া", "ইউরোপ", "আফ্রিকা", "অস্ট্রেলিয়া"],
    answer: 0,
    explanation: "জাপান পূর্ব এশিয়ায় অবস্থিত একটি দ্বীপরাষ্ট্র। এটি প্রশান্ত মহাসাগরের পশ্চিমাংশে অবস্থিত।",
    example: "টোকিও জাপানের রাজধানী এবং এশিয়ার অন্যতম গুরুত্বপূর্ণ মহানগর।"
  },
  {
    id: "GEO043",
    question: "ব্রাজিল কোন মহাদেশে অবস্থিত?",
    options: ["উত্তর আমেরিকা", "আফ্রিকা", "এশিয়া", "দক্ষিণ আমেরিকা"],
    answer: 3,
    explanation: "ব্রাজিল দক্ষিণ আমেরিকা মহাদেশের বৃহত্তম দেশ। আয়তনের দিক থেকে এটি পৃথিবীর পঞ্চম বৃহত্তম দেশ।",
    example: "আমাজন বনভূমির একটি বিশাল অংশ ব্রাজিলে অবস্থিত।"
  },
  {
    id: "GEO044",
    question: "কানাডা কোন মহাদেশে অবস্থিত?",
    options: ["ইউরোপ", "উত্তর আমেরিকা", "দক্ষিণ আমেরিকা", "এশিয়া"],
    answer: 1,
    explanation: "কানাডা উত্তর আমেরিকা মহাদেশের উত্তরাংশে অবস্থিত। আয়তনের দিক থেকে এটি পৃথিবীর দ্বিতীয় বৃহত্তম দেশ।",
    example: "অটোয়া কানাডার রাজধানী।"
  },
  {
    id: "GEO045",
    question: "অস্ট্রেলিয়া কোন মহাদেশের সঙ্গে একই নাম বহন করে?",
    options: ["এশিয়া", "আফ্রিকা", "অস্ট্রেলিয়া", "ইউরোপ"],
    answer: 2,
    explanation: "অস্ট্রেলিয়া একটি দেশ এবং একই সঙ্গে একটি মহাদেশের নাম। দেশটি অস্ট্রেলিয়া মহাদেশের প্রধান ভূখণ্ডজুড়ে অবস্থিত।",
    example: "অস্ট্রেলিয়ার রাজধানী ক্যানবেরা।"
  },
  {
    id: "GEO046",
    question: "ফ্রান্সের রাজধানী কী?",
    options: ["লন্ডন", "রোম", "বার্লিন", "প্যারিস"],
    answer: 3,
    explanation: "প্যারিস ফ্রান্সের রাজধানী। এটি দেশটির বৃহত্তম শহর এবং বিশ্ববিখ্যাত সাংস্কৃতিক ও পর্যটনকেন্দ্র।",
    example: "আইফেল টাওয়ার প্যারিস শহরে অবস্থিত।"
  },
  {
    id: "GEO047",
    question: "যুক্তরাজ্যের রাজধানী কী?",
    options: ["লন্ডন", "এডিনবরা", "কার্ডিফ", "বেলফাস্ট"],
    answer: 0,
    explanation: "লন্ডন যুক্তরাজ্যের রাজধানী। এটি ইংল্যান্ডের রাজধানীও এবং বিশ্বের অন্যতম গুরুত্বপূর্ণ অর্থনৈতিক ও সাংস্কৃতিক শহর।",
    example: "বিগ বেন ও বাকিংহাম প্যালেস লন্ডনের বিখ্যাত স্থাপনা।"
  },
  {
    id: "GEO048",
    question: "যুক্তরাষ্ট্রের রাজধানী কী?",
    options: ["নিউইয়র্ক", "ওয়াশিংটন ডিসি", "লস অ্যাঞ্জেলেস", "শিকাগো"],
    answer: 1,
    explanation: "ওয়াশিংটন ডিসি যুক্তরাষ্ট্রের রাজধানী। এটি দেশটির ফেডারেল সরকারের প্রধান কার্যালয়গুলোর অবস্থানস্থল।",
    example: "হোয়াইট হাউস ওয়াশিংটন ডিসিতে অবস্থিত।"
  },
  {
    id: "GEO049",
    question: "জাপানের রাজধানী কী?",
    options: ["ওসাকা", "কিয়োটো", "টোকিও", "হিরোশিমা"],
    answer: 2,
    explanation: "টোকিও জাপানের রাজধানী। এটি বিশ্বের অন্যতম বৃহৎ ও জনবহুল মহানগর এলাকা।",
    example: "টোকিওতে জাপানের জাতীয় সংসদ ভবন অবস্থিত।"
  },
  {
    id: "GEO050",
    question: "অস্ট্রেলিয়ার রাজধানী কী?",
    options: ["সিডনি", "মেলবোর্ন", "পার্থ", "ক্যানবেরা"],
    answer: 3,
    explanation: "ক্যানবেরা অস্ট্রেলিয়ার রাজধানী। এটি সিডনি ও মেলবোর্নের মাঝামাঝি অঞ্চলে অবস্থিত একটি পরিকল্পিত শহর।",
    example: "অস্ট্রেলিয়ার পার্লামেন্ট হাউস ক্যানবেরায় অবস্থিত।"
  },
  {
    id: "GEO051",
    question: "ভারতের রাজধানী কী?",
    options: ["নয়াদিল্লি", "মুম্বাই", "কলকাতা", "চেন্নাই"],
    answer: 0,
    explanation: "নয়াদিল্লি ভারতের রাজধানী। এটি দিল্লির জাতীয় রাজধানী অঞ্চলের অন্তর্ভুক্ত।",
    example: "ভারতের রাষ্ট্রপতি ভবন নয়াদিল্লিতে অবস্থিত।"
  },
  {
    id: "GEO052",
    question: "চীনের রাজধানী কী?",
    options: ["সাংহাই", "বেইজিং", "গুয়াংজু", "শেনজেন"],
    answer: 1,
    explanation: "বেইজিং চীনের রাজধানী। এটি দেশটির রাজনৈতিক, প্রশাসনিক ও সাংস্কৃতিক কেন্দ্রগুলোর অন্যতম।",
    example: "চীনের বিখ্যাত নিষিদ্ধ নগরী বেইজিংয়ে অবস্থিত।"
  },
  {
    id: "GEO053",
    question: "ব্রাজিলের রাজধানী কী?",
    options: ["রিও ডি জেনেইরো", "সাও পাওলো", "ব্রাসিলিয়া", "সালভাদর"],
    answer: 2,
    explanation: "ব্রাসিলিয়া ব্রাজিলের রাজধানী। পরিকল্পিত এই শহরটি ১৯৬০ সালে দেশটির রাজধানী হিসেবে প্রতিষ্ঠিত হয়।",
    example: "ব্রাসিলিয়া শহরটি আধুনিক স্থাপত্যের জন্য পরিচিত।"
  },
  {
    id: "GEO054",
    question: "মিসরের রাজধানী কী?",
    options: ["আলেকজান্দ্রিয়া", "লুক্সর", "গিজা", "কায়রো"],
    answer: 3,
    explanation: "কায়রো মিসরের রাজধানী এবং দেশটির বৃহত্তম শহর। এটি আফ্রিকার অন্যতম জনবহুল মহানগর।",
    example: "গিজার বিখ্যাত পিরামিড কায়রোর কাছাকাছি অবস্থিত।"
  },
  {
    id: "GEO055",
    question: "কোন দেশকে তার আকৃতির কারণে “Boot-shaped country” বলা হয়?",
    options: ["ইতালি", "ফ্রান্স", "স্পেন", "গ্রিস"],
    answer: 0,
    explanation: "ইতালির মানচিত্রের আকৃতি অনেকটা বুট বা জুতার মতো। এ কারণে ইতালিকে Boot-shaped country বলা হয়।",
    example: "ইতালির দক্ষিণ-পূর্ব দিকে প্রসারিত অংশটি বুটের অগ্রভাগের মতো দেখায়।"
  },
  {
    id: "GEO056",
    question: "কোন দেশের জাতীয় পতাকায় ম্যাপল পাতার প্রতীক রয়েছে?",
    options: ["যুক্তরাষ্ট্র", "কানাডা", "যুক্তরাজ্য", "অস্ট্রেলিয়া"],
    answer: 1,
    explanation: "কানাডার জাতীয় পতাকার মাঝখানে লাল রঙের ১১-কোণবিশিষ্ট ম্যাপল পাতার প্রতীক রয়েছে। এটি কানাডার জাতীয় পরিচয়ের গুরুত্বপূর্ণ প্রতীক।",
    example: "কানাডার জাতীয় পতাকায় সাদা পটভূমির দুই পাশে লাল রঙের দুটি উল্লম্ব অংশ রয়েছে।"
  },
  {
    id: "GEO057",
    question: "গ্রেট ওয়াল কোন দেশে অবস্থিত?",
    options: ["জাপান", "ভারত", "চীন", "মঙ্গোলিয়া"],
    answer: 2,
    explanation: "গ্রেট ওয়াল বা চীনের মহাপ্রাচীর চীনে অবস্থিত। এটি বিভিন্ন ঐতিহাসিক সময়ে নির্মিত ও সম্প্রসারিত প্রতিরক্ষা প্রাচীরের সমষ্টি।",
    example: "চীনের মহাপ্রাচীর ইউনেস্কোর বিশ্ব ঐতিহ্যবাহী স্থানের অন্তর্ভুক্ত।"
  },
  {
    id: "GEO058",
    question: "আইফেল টাওয়ার কোন দেশে অবস্থিত?",
    options: ["ইতালি", "জার্মানি", "স্পেন", "ফ্রান্স"],
    answer: 3,
    explanation: "আইফেল টাওয়ার ফ্রান্সের রাজধানী প্যারিসে অবস্থিত। এটি ১৮৮৯ সালে নির্মিত হয় এবং ফ্রান্সের অন্যতম পরিচিত স্থাপনা।",
    example: "প্রকৌশলী গুস্তাভ আইফেলের প্রতিষ্ঠানের তত্ত্বাবধানে আইফেল টাওয়ার নির্মিত হয়েছিল।"
  },
  {
    id: "GEO059",
    question: "স্ট্যাচু অব লিবার্টি কোন দেশে অবস্থিত?",
    options: ["যুক্তরাষ্ট্র", "কানাডা", "যুক্তরাজ্য", "ফ্রান্স"],
    answer: 0,
    explanation: "স্ট্যাচু অব লিবার্টি যুক্তরাষ্ট্রের নিউইয়র্ক হারবারে লিবার্টি আইল্যান্ডে অবস্থিত। এটি স্বাধীনতা ও গণতন্ত্রের প্রতীক হিসেবে পরিচিত।",
    example: "ফ্রান্স যুক্তরাষ্ট্রকে বন্ধুত্বের নিদর্শন হিসেবে এই ভাস্কর্য উপহার দিয়েছিল।"
  },
  {
    id: "GEO060",
    question: "পিরামিড অব গিজা কোন দেশে অবস্থিত?",
    options: ["মেক্সিকো", "মিসর", "সুদান", "ইরাক"],
    answer: 1,
    explanation: "পিরামিড অব গিজা মিসরে অবস্থিত। এগুলো প্রাচীন মিসরীয় সভ্যতার গুরুত্বপূর্ণ স্থাপত্য নিদর্শন।",
    example: "গিজার গ্রেট পিরামিড ফারাও খুফুর সমাধি হিসেবে নির্মিত হয়েছিল বলে পরিচিত।"
  }
];


// ============================================================
// GLOBAL VARIABLES
// ============================================================

let currentQuestion = 0;
let score = 0;
let selectedMode = "";
let timer;
let timeLeft = 15;
let answered = false;


// ============================================================
// DOM ELEMENTS
// ============================================================

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionNumber = document.getElementById("question-number");
const totalQuestions = document.getElementById("total-questions");

const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const feedbackElement = document.getElementById("feedback");
const correctMessage = document.getElementById("correct-message");
const wrongMessage = document.getElementById("wrong-message");
const exampleText = document.getElementById("example-text");

const scoreElement = document.getElementById("score");
const percentageElement = document.getElementById("percentage");
const resultMessage = document.getElementById("result-message");

const statusElement = document.getElementById("status");
const socialMessage = document.querySelector(".social-message");


// ============================================================
// INITIAL SETUP
// ============================================================

if (totalQuestions) {
    totalQuestions.textContent = quizData.length;
}

if (quizScreen) quizScreen.style.display = "none";
if (resultScreen) resultScreen.style.display = "none";
if (feedbackElement) feedbackElement.style.display = "none";


// ============================================================
// SHOW FEEDBACK — explanation এবং example আলাদাভাবে
// ============================================================

function showFeedbackContent(q) {
    if (!exampleText) return;

    // পুরোনো কনটেন্ট মুছে ফেলুন
    exampleText.replaceChildren();

    const explanationLabel = document.createElement("strong");
    explanationLabel.textContent = "ব্যাখ্যা: ";

    const explanationText = document.createTextNode(
        q.explanation || "কোনো ব্যাখ্যা দেওয়া হয়নি।"
    );

    const exampleLabel = document.createElement("strong");
    exampleLabel.textContent = "উদাহরণ: ";

    const exampleValue = document.createTextNode(
        q.example || "কোনো উদাহরণ দেওয়া হয়নি।"
    );

    exampleText.appendChild(explanationLabel);
    exampleText.appendChild(explanationText);
    exampleText.appendChild(document.createElement("br"));
    exampleText.appendChild(document.createElement("br"));
    exampleText.appendChild(exampleLabel);
    exampleText.appendChild(exampleValue);
}


// ============================================================
// START QUIZ
// ============================================================

function startQuiz(mode) {
    selectedMode = mode;
    currentQuestion = 0;
    score = 0;
    answered = false;

    clearInterval(timer);

    if (startScreen) startScreen.style.display = "none";
    if (resultScreen) resultScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "block";
    if (statusElement) statusElement.textContent = "";

    playSound("start");
    showQuestion();
}


// ============================================================
// SHOW QUESTION
// ============================================================

function showQuestion() {
    clearInterval(timer);
    answered = false;

    const q = quizData[currentQuestion];

    if (!q) {
        showResult();
        return;
    }

    if (questionNumber) {
        questionNumber.textContent = currentQuestion + 1;
    }

    if (totalQuestions) {
        totalQuestions.textContent = quizData.length;
    }

    if (progressBar) {
        progressBar.style.width =
            ((currentQuestion + 1) / quizData.length) * 100 + "%";
    }

    if (questionElement) {
        questionElement.textContent = q.question;
    }

    if (optionsElement) {
        optionsElement.innerHTML = "";
    }

    if (feedbackElement) feedbackElement.style.display = "none";
    if (correctMessage) correctMessage.textContent = "";
    if (wrongMessage) wrongMessage.textContent = "";

    if (exampleText) {
        exampleText.replaceChildren();
    }

    const oldButton = document.getElementById("next-question-btn");
    if (oldButton) oldButton.remove();

    q.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "answer-option";
        button.type = "button";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const optionText = document.createElement("span");
        optionText.className = "option-text";
        optionText.textContent = option;

        button.appendChild(letter);
        button.appendChild(optionText);

        button.addEventListener("click", function () {
            selectAnswer(index, button);
        });

        if (optionsElement) {
            optionsElement.appendChild(button);
        }
    });

    if (selectedMode === "exam") {
        timeLeft = 15;
        updateTimer();

        timer = setInterval(() => {
            timeLeft--;
            updateTimer();

            if (timeLeft <= 0) {
                clearInterval(timer);
                timeUp();
            }
        }, 1000);
    } else if (timerElement) {
        timerElement.textContent = "∞";
        timerElement.classList.remove("timer-danger");
    }
}


// ============================================================
// TIMER DISPLAY
// ============================================================

function updateTimer() {
    if (!timerElement) return;

    timerElement.textContent = timeLeft;

    if (timeLeft <= 5) {
        timerElement.classList.add("timer-danger");
    } else {
        timerElement.classList.remove("timer-danger");
    }
}


// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(selectedIndex, clickedButton) {
    if (answered) return;

    answered = true;
    clearInterval(timer);

    const q = quizData[currentQuestion];

    const buttons = optionsElement
        ? optionsElement.querySelectorAll(".answer-option")
        : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === q.answer) {
        score++;

        if (clickedButton) {
            clickedButton.classList.add("correct");
        }

        playSound("correct");

        if (correctMessage) {
            correctMessage.textContent = "✓ সঠিক উত্তর!";
        }

        if (wrongMessage) {
            wrongMessage.textContent = "";
        }
    } else {
        if (clickedButton) {
            clickedButton.classList.add("wrong");
        }

        if (buttons[q.answer]) {
            buttons[q.answer].classList.add("correct");
        }

        playSound("wrong");

        if (wrongMessage) {
            wrongMessage.textContent = "✗ ভুল উত্তর!";
        }

        if (correctMessage) {
            correctMessage.textContent =
                "সঠিক উত্তর: " + q.options[q.answer];
        }
    }

    // Learning Mode-এ সঠিক উত্তরেও ব্যাখ্যা দেখাবে।
    // Exam Mode-এ উত্তর দেওয়ার পর ব্যাখ্যা দেখাবে।
    if (
        selectedMode === "learning" ||
        selectedMode === "exam"
    ) {
        if (feedbackElement) {
            feedbackElement.style.display = "block";
        }

        showFeedbackContent(q);
    }

    showNextButton();
}


// ============================================================
// TIME UP
// ============================================================

function timeUp() {
    if (answered) return;

    answered = true;
    clearInterval(timer);

    const q = quizData[currentQuestion];

    const buttons = optionsElement
        ? optionsElement.querySelectorAll(".answer-option")
        : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (buttons[q.answer]) {
        buttons[q.answer].classList.add("correct");
    }

    playSound("tryAgain");

    if (wrongMessage) {
        wrongMessage.textContent = "⏰ সময় শেষ!";
    }

    if (correctMessage) {
        correctMessage.textContent =
            "সঠিক উত্তর: " + q.options[q.answer];
    }

    if (feedbackElement) {
        feedbackElement.style.display = "block";
    }

    showFeedbackContent(q);
    showNextButton();
}


// ============================================================
// NEXT QUESTION BUTTON
// ============================================================

function showNextButton() {
    const oldButton = document.getElementById("next-question-btn");

    if (oldButton) oldButton.remove();

    const nextButton = document.createElement("button");

    nextButton.id = "next-question-btn";
    nextButton.className = "next-question-btn";
    nextButton.type = "button";

    if (currentQuestion < quizData.length - 1) {
        nextButton.textContent = "পরবর্তী প্রশ্ন →";
        nextButton.addEventListener("click", nextQuestion);
    } else {
        nextButton.textContent = "ফলাফল দেখো 🎉";
        nextButton.addEventListener("click", showResult);
    }

    if (quizScreen) {
        quizScreen.appendChild(nextButton);
    }
}


// ============================================================
// NEXT QUESTION
// ============================================================

function nextQuestion() {
    clearInterval(timer);
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}


// ============================================================
// SHOW RESULT
// ============================================================

function showResult() {
    clearInterval(timer);

    if (quizScreen) quizScreen.style.display = "none";
    if (resultScreen) resultScreen.style.display = "block";

    const nextButton = document.getElementById("next-question-btn");
    if (nextButton) nextButton.remove();

    const percentage = Math.round((score / quizData.length) * 100);

    if (scoreElement) {
        scoreElement.textContent = `${score} / ${quizData.length}`;
    }

    if (percentageElement) {
        percentageElement.textContent = `${percentage}%`;
    }

    if (resultMessage) {
        if (percentage >= 90) {
            resultMessage.textContent =
                "🏆 অসাধারণ! তোমার প্রস্তুতি খুবই ভালো।";
            playSound("victory");
        } else if (percentage >= 75) {
            resultMessage.textContent =
                "🌟 খুব ভালো! আরও একটু অনুশীলন করলে আরও ভালো করবে।";
            playSound("success");
        } else if (percentage >= 50) {
            resultMessage.textContent =
                "👍 ভালো চেষ্টা! নিয়মিত অনুশীলন চালিয়ে যাও।";
            playSound("complete");
        } else {
            resultMessage.textContent =
                "📚 আরও অনুশীলন করতে হবে। পরবর্তী কুইজে আরও ভালো করবে।";
            playSound("tryAgain");
        }
    }

    if (socialMessage) {
        socialMessage.style.display = "block";
    }
}


// ============================================================
// RETURN TO FACEBOOK
// ============================================================

function returnToFacebook() {
    if (
        FACEBOOK_POST_URL &&
        FACEBOOK_POST_URL !== "PASTE_YOUR_FACEBOOK_POST_URL_HERE"
    ) {
        window.location.href = FACEBOOK_POST_URL;
    } else {
        alert(
            "Facebook post link এখনো যোগ করা হয়নি।\n\n" +
            "script.js-এর FACEBOOK_POST_URL-এ " +
            "আপনার Facebook post link বসান।"
        );
    }
}


// ============================================================
// PLAY AGAIN
// ============================================================

function reloadQuiz() {
    clearInterval(timer);

    currentQuestion = 0;
    score = 0;
    answered = false;
    selectedMode = "";

    if (resultScreen) resultScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "none";
    if (startScreen) startScreen.style.display = "block";

    if (statusElement) statusElement.textContent = "";
    if (socialMessage) socialMessage.style.display = "none";

    const nextButton = document.getElementById("next-question-btn");
    if (nextButton) nextButton.remove();

    if (progressBar) progressBar.style.width = "0%";

    if (timerElement) {
        timerElement.textContent = "15";
        timerElement.classList.remove("timer-danger");
    }

    if (feedbackElement) feedbackElement.style.display = "none";
    if (correctMessage) correctMessage.textContent = "";
    if (wrongMessage) wrongMessage.textContent = "";
    if (exampleText) exampleText.replaceChildren();

    playSound("start");
}


// ============================================================
// ANSWER DISTRIBUTION AND DATA VALIDATION
// ============================================================

(function checkAnswerDistribution() {
    const distribution = [0, 0, 0, 0];
    const questionIds = new Set();
    let hasErrors = false;

    quizData.forEach(q => {
        if (questionIds.has(q.id)) {
            console.error("Duplicate question ID:", q.id);
            hasErrors = true;
        }
        questionIds.add(q.id);

        if (!Array.isArray(q.options) || q.options.length !== 4) {
            console.error(
                "Question must have exactly four options:",
                q.id
            );
            hasErrors = true;
            return;
        }

        if (
            !Number.isInteger(q.answer) ||
            q.answer < 0 ||
            q.answer >= q.options.length
        ) {
            console.error("Invalid answer index:", q.id);
            hasErrors = true;
        } else {
            distribution[q.answer]++;
        }

        if (!q.explanation || !q.example) {
            console.error(
                "Missing explanation or example:",
                q.id
            );
            hasErrors = true;
        }
    });

    console.log(
        "Answer Distribution:",
        `A=${distribution[0]},`,
        `B=${distribution[1]},`,
        `C=${distribution[2]},`,
        `D=${distribution[3]}`
    );

    console.log("Total Questions:", quizData.length);

    if (distribution.some(count => count < 3)) {
        console.warn(
            "Warning: One or more answer positions have fewer than 3 correct answers."
        );
    }

    if (!hasErrors) {
        console.log("Quiz data validation completed without detected errors.");
    }
})();
