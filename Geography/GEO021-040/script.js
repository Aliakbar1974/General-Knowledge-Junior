
 // ============================================================
 // GENERAL KNOWLEDGE Junior — MCQ BANK PART 02
 // Topic: Geography | 20 Questions
 // Learning Mode + Exam Mode | 15 Seconds per Question
 // Sound Engine + Facebook Return + Result Screen
 // ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122124470115435742&set=a.122102731923435742";


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
    id: "GEO021",
    question: "নিরক্ষরেখা পৃথিবীর কত ডিগ্রি অক্ষাংশে অবস্থিত?",
    options: ["০°", "২৩.৫° উত্তর", "৬৬.৫° দক্ষিণ", "৯০°"],
    answer: 0,
    explanation: "নিরক্ষরেখা পৃথিবীর ০° অক্ষাংশে অবস্থিত। এটি পৃথিবীকে উত্তর ও দক্ষিণ গোলার্ধে সমান দুই ভাগে বিভক্ত করেছে।",
    example: "নিরক্ষরেখার উত্তর দিকে উত্তর অক্ষাংশ এবং দক্ষিণ দিকে দক্ষিণ অক্ষাংশ গণনা করা হয়।"
  },
  {
    id: "GEO022",
    question: "পৃথিবীর উত্তরতম ও দক্ষিণতম বিন্দুকে কী বলা হয়?",
    options: ["ক্রান্তিবিন্দু", "মেরু", "নিরক্ষরেখা", "মধ্যরেখা"],
    answer: 1,
    explanation: "পৃথিবীর উত্তরতম ও দক্ষিণতম বিন্দুকে যথাক্রমে উত্তর মেরু ও দক্ষিণ মেরু বলা হয়। এই দুই বিন্দু পৃথিবীর ঘূর্ণন অক্ষের দুই প্রান্তে অবস্থিত।",
    example: "উত্তর মেরু আর্কটিক অঞ্চলে এবং দক্ষিণ মেরু অ্যান্টার্কটিকা মহাদেশে অবস্থিত।"
  },
  {
    id: "GEO023",
    question: "উত্তর মেরু কোন গোলার্ধে অবস্থিত?",
    options: ["দক্ষিণ গোলার্ধ", "পূর্ব গোলার্ধ", "উত্তর গোলার্ধ", "পশ্চিম গোলার্ধ"],
    answer: 2,
    explanation: "উত্তর মেরু নিরক্ষরেখার উত্তরে অবস্থিত বলে এটি উত্তর গোলার্ধের অন্তর্ভুক্ত। এটি পৃথিবীর ৯০° উত্তর অক্ষাংশে অবস্থিত।",
    example: "কানাডা, রাশিয়া ও গ্রিনল্যান্ডের উত্তরাঞ্চল উত্তর মেরুর কাছাকাছি অবস্থিত।"
  },
  {
    id: "GEO024",
    question: "দক্ষিণ মেরু কোন মহাদেশে অবস্থিত?",
    options: ["এশিয়া", "আফ্রিকা", "ইউরোপ", "অ্যান্টার্কটিকা"],
    answer: 3,
    explanation: "দক্ষিণ মেরু অ্যান্টার্কটিকা মহাদেশে অবস্থিত। এটি পৃথিবীর সর্বদক্ষিণের ভৌগোলিক বিন্দু এবং বরফে আবৃত একটি অঞ্চল।",
    example: "অ্যান্টার্কটিকা পৃথিবীর শীতলতম মহাদেশ।"
  },
  {
    id: "GEO025",
    question: "পৃথিবীর সবচেয়ে বড় দ্বীপ কোনটি?",
    options: ["গ্রিনল্যান্ড", "নিউগিনি", "বোর্নিও", "মাদাগাস্কার"],
    answer: 0,
    explanation: "গ্রিনল্যান্ড পৃথিবীর বৃহত্তম দ্বীপ। অস্ট্রেলিয়াকে মহাদেশ হিসেবে গণ্য করা হয়, তাই দ্বীপের তালিকায় গ্রিনল্যান্ড সবচেয়ে বড়।",
    example: "গ্রিনল্যান্ড উত্তর আটলান্টিক ও আর্কটিক মহাসাগরের মধ্যে অবস্থিত।"
  },
  {
    id: "GEO026",
    question: "সাহারা মরুভূমি কোন মহাদেশে অবস্থিত?",
    options: ["এশিয়া", "আফ্রিকা", "অস্ট্রেলিয়া", "দক্ষিণ আমেরিকা"],
    answer: 1,
    explanation: "সাহারা মরুভূমি উত্তর আফ্রিকায় অবস্থিত। এটি পৃথিবীর বৃহত্তম উষ্ণ মরুভূমি।",
    example: "আলজেরিয়া, মিশর, লিবিয়া ও সুদান সাহারা অঞ্চলের অন্তর্ভুক্ত দেশ।"
  },
  {
    id: "GEO027",
    question: "আমাজন নদী প্রধানত কোন মহাদেশে প্রবাহিত?",
    options: ["আফ্রিকা", "এশিয়া", "দক্ষিণ আমেরিকা", "উত্তর আমেরিকা"],
    answer: 2,
    explanation: "আমাজন নদী দক্ষিণ আমেরিকায় অবস্থিত। এটি পানিপ্রবাহের পরিমাণের দিক থেকে পৃথিবীর বৃহত্তম নদী।",
    example: "আমাজন নদী পেরু থেকে উৎপন্ন হয়ে ব্রাজিলের মধ্য দিয়ে আটলান্টিক মহাসাগরে পতিত হয়েছে।"
  },
  {
    id: "GEO028",
    question: "নীলনদ কোন মহাদেশে অবস্থিত?",
    options: ["ইউরোপ", "এশিয়া", "দক্ষিণ আমেরিকা", "আফ্রিকা"],
    answer: 3,
    explanation: "নীলনদ আফ্রিকা মহাদেশে অবস্থিত। এটি আফ্রিকার অন্যতম প্রধান নদী এবং ঐতিহাসিকভাবে মিশরের সভ্যতা বিকাশে গুরুত্বপূর্ণ ভূমিকা রেখেছে।",
    example: "নীলনদ মিশরের মধ্য দিয়ে প্রবাহিত হয়ে ভূমধ্যসাগরে পতিত হয়েছে।"
  },
  {
    id: "GEO029",
    question: "আল্পস পর্বতমালা কোন মহাদেশে অবস্থিত?",
    options: ["ইউরোপ", "এশিয়া", "আফ্রিকা", "উত্তর আমেরিকা"],
    answer: 0,
    explanation: "আল্পস পর্বতমালা ইউরোপের মধ্য ও দক্ষিণাঞ্চলে বিস্তৃত। এটি ইউরোপের অন্যতম প্রধান পর্বতশ্রেণি।",
    example: "সুইজারল্যান্ড, ফ্রান্স, ইতালি ও অস্ট্রিয়ার মধ্য দিয়ে আল্পস পর্বতমালা বিস্তৃত।"
  },
  {
    id: "GEO030",
    question: "হিমালয় কোন মহাদেশে অবস্থিত?",
    options: ["আফ্রিকা", "এশিয়া", "ইউরোপ", "দক্ষিণ আমেরিকা"],
    answer: 1,
    explanation: "হিমালয় পর্বতমালা এশিয়া মহাদেশে অবস্থিত। পৃথিবীর সর্বোচ্চ পর্বতশৃঙ্গ মাউন্ট এভারেস্ট এই পর্বতমালায় অবস্থিত।",
    example: "নেপাল, ভারত, ভুটান, চীন ও পাকিস্তানের বিভিন্ন অঞ্চলে হিমালয় বিস্তৃত।"
  },
  {
    id: "GEO031",
    question: "রকি পর্বতমালা কোন মহাদেশে অবস্থিত?",
    options: ["দক্ষিণ আমেরিকা", "ইউরোপ", "উত্তর আমেরিকা", "আফ্রিকা"],
    answer: 2,
    explanation: "রকি পর্বতমালা উত্তর আমেরিকার পশ্চিমাঞ্চলে বিস্তৃত। এটি কানাডা থেকে যুক্তরাষ্ট্রের বিভিন্ন অঞ্চল পর্যন্ত প্রসারিত।",
    example: "কানাডার ব্রিটিশ কলাম্বিয়া ও যুক্তরাষ্ট্রের কলোরাডো রকি পর্বতমালার অংশ।"
  },
  {
    id: "GEO032",
    question: "আন্দিজ পর্বতমালা কোন মহাদেশে অবস্থিত?",
    options: ["এশিয়া", "আফ্রিকা", "উত্তর আমেরিকা", "দক্ষিণ আমেরিকা"],
    answer: 3,
    explanation: "আন্দিজ পর্বতমালা দক্ষিণ আমেরিকার পশ্চিম উপকূল বরাবর বিস্তৃত। এটি পৃথিবীর দীর্ঘতম মহাদেশীয় পর্বতমালা।",
    example: "চিলি, পেরু, বলিভিয়া ও আর্জেন্টিনায় আন্দিজ পর্বতমালা বিস্তৃত।"
  },
  {
    id: "GEO033",
    question: "আটলান্টিক মহাসাগর কোন দুটি মহাদেশের মাঝখানে বিস্তৃত?",
    options: ["ইউরোপ ও উত্তর আমেরিকা", "এশিয়া ও আফ্রিকা", "আফ্রিকা ও অস্ট্রেলিয়া", "এশিয়া ও উত্তর আমেরিকা"],
    answer: 0,
    explanation: "আটলান্টিক মহাসাগর প্রধানত ইউরোপ ও আফ্রিকার পশ্চিমে এবং উত্তর ও দক্ষিণ আমেরিকার পূর্বে অবস্থিত। প্রদত্ত বিকল্পগুলোর মধ্যে ইউরোপ ও উত্তর আমেরিকা সঠিক।",
    example: "আটলান্টিক মহাসাগর ইউরোপ ও উত্তর আমেরিকার মধ্যে গুরুত্বপূর্ণ নৌপথ তৈরি করেছে।"
  },
  {
    id: "GEO034",
    question: "ভারত মহাসাগর কোন মহাদেশের নাম অনুসারে নামকরণ করা হয়েছে?",
    options: ["আফ্রিকা", "এশিয়া", "ইউরোপ", "অস্ট্রেলিয়া"],
    answer: 1,
    explanation: "ভারত মহাসাগরের নাম ভারত দেশের নাম অনুসারে রাখা হয়েছে। ভারত এশিয়া মহাদেশে অবস্থিত।",
    example: "ভারত মহাসাগরের উত্তরে ভারতীয় উপমহাদেশ অবস্থিত।"
  },
  {
    id: "GEO035",
    question: "প্রশান্ত মহাসাগর পৃথিবীর সবচেয়ে বড় মহাসাগর—এটি কোন ধরনের জলভাগ?",
    options: ["উপসাগর", "সাগর", "মহাসাগর", "হ্রদ"],
    answer: 2,
    explanation: "প্রশান্ত মহাসাগর পৃথিবীর বৃহত্তম ও গভীরতম মহাসাগর। এটি পৃথিবীর মোট পৃষ্ঠের একটি বিশাল অংশজুড়ে বিস্তৃত।",
    example: "প্রশান্ত মহাসাগরে মারিয়ানা খাত অবস্থিত, যা পৃথিবীর গভীরতম পরিচিত সমুদ্রতলীয় স্থান।"
  },
  {
    id: "GEO036",
    question: "যে ভূমিভাগ চারদিকে পানি দ্বারা বেষ্টিত তাকে কী বলে?",
    options: ["উপদ্বীপ", "প্রণালি", "যোজক", "দ্বীপ"],
    answer: 3,
    explanation: "যে ভূমিভাগ চারদিকে পানি দ্বারা বেষ্টিত থাকে তাকে দ্বীপ বলে। দ্বীপ মহাসাগর, সাগর, নদী বা হ্রদের মধ্যে থাকতে পারে।",
    example: "বাংলাদেশের সেন্ট মার্টিন একটি দ্বীপ।"
  },
  {
    id: "GEO037",
    question: "যে ভূমিভাগ তিন দিকে পানি দ্বারা বেষ্টিত তাকে কী বলে?",
    options: ["উপদ্বীপ", "দ্বীপ", "প্রণালি", "উপসাগর"],
    answer: 0,
    explanation: "যে ভূমিভাগ তিন দিকে পানি দ্বারা বেষ্টিত এবং এক দিকে মূল ভূখণ্ডের সঙ্গে যুক্ত থাকে তাকে উপদ্বীপ বলে।",
    example: "ভারতীয় উপদ্বীপ একটি উল্লেখযোগ্য উপদ্বীপ।"
  },
  {
    id: "GEO038",
    question: "দুটি বড় জলভাগকে সংযোগকারী সরু জলপথকে কী বলে?",
    options: ["উপসাগর", "প্রণালি", "উপদ্বীপ", "দ্বীপ"],
    answer: 1,
    explanation: "দুটি বৃহৎ জলভাগকে সংযুক্তকারী সরু জলপথকে প্রণালি বলে। এটি সাধারণত দুটি স্থলভাগের মাঝখানে অবস্থিত।",
    example: "জিব্রাল্টার প্রণালি আটলান্টিক মহাসাগর ও ভূমধ্যসাগরকে সংযুক্ত করেছে।"
  },
  {
    id: "GEO039",
    question: "দুটি জলভাগকে আলাদা করে এমন সরু ভূমিভাগকে কী বলে?",
    options: ["দ্বীপ", "উপদ্বীপ", "যোজক বা স্থলযোজক (Isthmus)", "প্রণালি"],
    answer: 2,
    explanation: "দুটি জলভাগকে পৃথক করে এবং দুটি বৃহত্তর স্থলভাগকে সংযুক্ত করে এমন সরু ভূমিভাগকে যোজক বা স্থলযোজক (Isthmus) বলে।",
    example: "পানামা যোজক উত্তর ও দক্ষিণ আমেরিকাকে সংযুক্ত করেছে এবং আটলান্টিক ও প্রশান্ত মহাসাগরকে পৃথক করেছে।"
  },
  {
    id: "GEO040",
    question: "সমুদ্রের পানি থেকে স্থলভাগের দিকে প্রবেশ করা বড় জলভাগকে কী বলা হয়?",
    options: ["প্রণালি", "দ্বীপ", "যোজক", "উপসাগর"],
    answer: 3,
    explanation: "সমুদ্রের পানি স্থলভাগের ভেতরে প্রবেশ করে যে বিস্তৃত জলভাগ তৈরি করে তাকে উপসাগর বলে। উপসাগর সাধারণত সমুদ্রের তুলনায় ছোট হয়।",
    example: "বঙ্গোপসাগর ভারত মহাসাগরের উত্তর-পূর্ব অংশে অবস্থিত।"
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
