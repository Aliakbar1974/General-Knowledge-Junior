
 // ============================================================
 // GENERAL KNOWLEDGE Junior — MCQ BANK PART 04
 // Topic: Geography | 20 Questions
 // Learning Mode + Exam Mode | 15 Seconds per Question
 // Sound Engine + Facebook Return + Result Screen
 // ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122126043183435742&set=a.122102731923435742";


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
    id: 61,
    question: "বাংলাদেশের উত্তর দিকে কোন দেশ অবস্থিত?",
    options: ["ভারত", "মিয়ানমার", "নেপাল", "ভুটান"],
    answer: 0,
    explanation: "ভারত বাংলাদেশের উত্তরে অবস্থিত। পশ্চিমবঙ্গ, আসাম ও মেঘালয়সহ ভারতের কয়েকটি রাজ্য বাংলাদেশের উত্তর সীমান্তের সঙ্গে যুক্ত।",
    example: "বাংলাদেশের উত্তর দিকে ভারতের অবস্থান।"
  },
  {
    id: 62,
    question: "বাংলাদেশের পূর্ব ও দক্ষিণ-পূর্ব দিকে কোন দুটি দেশের অবস্থান রয়েছে?",
    options: ["নেপাল ও ভুটান", "ভারত ও মিয়ানমার", "ভারত ও চীন", "মিয়ানমার ও থাইল্যান্ড"],
    answer: 1,
    explanation: "ভারত বাংলাদেশের পূর্ব ও উত্তর-পূর্ব দিকে এবং মিয়ানমার দক্ষিণ-পূর্ব দিকে অবস্থিত। এই দুটি দেশ বাংলাদেশের পূর্ব ও দক্ষিণ-পূর্ব সীমান্তের সঙ্গে যুক্ত।",
    example: "বাংলাদেশের দক্ষিণ-পূর্ব সীমান্ত মিয়ানমারের সঙ্গে যুক্ত।"
  },
  {
    id: 63,
    question: "বাংলাদেশের পশ্চিম দিকে কোন দেশ অবস্থিত?",
    options: ["মিয়ানমার", "নেপাল", "ভারত", "ভুটান"],
    answer: 2,
    explanation: "ভারত বাংলাদেশের পশ্চিম দিকে অবস্থিত। ভারতের পশ্চিমবঙ্গ রাজ্যের সঙ্গে বাংলাদেশের দীর্ঘ সীমান্ত রয়েছে।",
    example: "পশ্চিমবঙ্গ ভারতের একটি রাজ্য, যা বাংলাদেশের পশ্চিম সীমান্তের সঙ্গে যুক্ত।"
  },
  {
    id: 64,
    question: "বাংলাদেশের দক্ষিণে কী অবস্থিত?",
    options: ["হিমালয় পর্বতমালা", "ভারত মহাসাগর", "আরব সাগর", "বঙ্গোপসাগর"],
    answer: 3,
    explanation: "বাংলাদেশের দক্ষিণে বঙ্গোপসাগর অবস্থিত। এটি ভারত মহাসাগরের উত্তর-পূর্ব অংশের একটি গুরুত্বপূর্ণ সাগর।",
    example: "বাংলাদেশের দক্ষিণাঞ্চলের উপকূল বঙ্গোপসাগরের তীরে অবস্থিত।"
  },
  {
    id: 65,
    question: "বাংলাদেশের দীর্ঘতম প্রাকৃতিক সমুদ্রসৈকত হিসেবে কোন স্থানটি পরিচিত?",
    options: ["কক্সবাজার", "কুয়াকাটা", "পতেঙ্গা", "সেন্ট মার্টিন দ্বীপ"],
    answer: 0,
    explanation: "কক্সবাজার তার দীর্ঘ প্রাকৃতিক বালুকাময় সমুদ্রসৈকতের জন্য বিখ্যাত। এটি বাংলাদেশের দীর্ঘতম প্রাকৃতিক সমুদ্রসৈকত হিসেবে বহুল পরিচিত এবং অন্যতম প্রধান পর্যটন আকর্ষণ।",
    example: "প্রতি বছর অসংখ্য পর্যটক কক্সবাজার সমুদ্রসৈকত ভ্রমণ করেন।"
  },
  {
    id: 66,
    question: "বাংলাদেশের একমাত্র প্রবাল দ্বীপের নাম কী?",
    options: ["নিঝুম দ্বীপ", "সেন্ট মার্টিন দ্বীপ", "ভোলা দ্বীপ", "সন্দ্বীপ"],
    answer: 1,
    explanation: "সেন্ট মার্টিন দ্বীপ বঙ্গোপসাগরে বাংলাদেশের দক্ষিণ প্রান্তের কাছে অবস্থিত। এটি বাংলাদেশের একমাত্র প্রবাল দ্বীপ হিসেবে পরিচিত।",
    example: "সেন্ট মার্টিন দ্বীপ তার প্রবাল ও সামুদ্রিক জীববৈচিত্র্যের জন্য পরিচিত।"
  },
  {
    id: 67,
    question: "সুন্দরবন কোন ধরনের বন?",
    options: ["ক্রান্তীয় চিরহরিৎ বন", "পত্রঝরা বন", "ম্যানগ্রোভ বন", "সরলবর্গীয় বন"],
    answer: 2,
    explanation: "সুন্দরবন একটি ম্যানগ্রোভ বন। জোয়ার-ভাটা ও লবণাক্ত পানির প্রভাবযুক্ত উপকূলীয় পরিবেশে এই ধরনের বন গড়ে ওঠে।",
    example: "সুন্দরবন রয়েল বেঙ্গল টাইগারের অন্যতম প্রধান আবাসস্থল।"
  },
  {
    id: 68,
    question: "বাংলাদেশ ছাড়াও সুন্দরবন কোন দেশে বিস্তৃত?",
    options: ["নেপাল", "মিয়ানমার", "শ্রীলঙ্কা", "ভারত"],
    answer: 3,
    explanation: "সুন্দরবন বাংলাদেশের দক্ষিণ-পশ্চিমাঞ্চল এবং ভারতের পশ্চিমবঙ্গ রাজ্যের বিস্তীর্ণ উপকূলীয় অঞ্চলে অবস্থিত।",
    example: "বাংলাদেশ ও ভারত—উভয় দেশেই সুন্দরবনের বিস্তৃতি রয়েছে।"
  },
  {
    id: 69,
    question: "গোয়ালন্দের কাছে পদ্মার সঙ্গে কোন নদীর মিলন ঘটে?",
    options: ["যমুনা", "মেঘনা", "তিস্তা", "কর্ণফুলী"],
    answer: 0,
    explanation: "রাজবাড়ী জেলার গোয়ালন্দের কাছে যমুনা নদী পদ্মার সঙ্গে মিলিত হয়েছে। পরে পদ্মার প্রবাহ মেঘনা নদী ব্যবস্থার সঙ্গে যুক্ত হয়।",
    example: "পদ্মা ও যমুনার মিলন বাংলাদেশের নদীব্যবস্থার একটি গুরুত্বপূর্ণ বৈশিষ্ট্য।"
  },
  {
    id: 70,
    question: "বাংলাদেশে যমুনা কোন প্রধান নদীর মূল প্রবাহের নাম?",
    options: ["গঙ্গা", "ব্রহ্মপুত্র", "মেঘনা", "তিস্তা"],
    answer: 1,
    explanation: "বাংলাদেশে ব্রহ্মপুত্র নদের প্রধান প্রবাহ যমুনা নামে পরিচিত। এটি ভারত থেকে বাংলাদেশে প্রবেশ করে দক্ষিণ দিকে প্রবাহিত হয়েছে।",
    example: "ব্রহ্মপুত্র নদ বাংলাদেশে যমুনা নামে প্রবাহিত হয়েছে।"
  },
  {
    id: 71,
    question: "মেঘনা নদী কোন দেশের অন্যতম প্রধান নদী?",
    options: ["ভারত", "নেপাল", "বাংলাদেশ", "ভুটান"],
    answer: 2,
    explanation: "মেঘনা বাংলাদেশের অন্যতম প্রধান নদী। এটি দেশের মধ্য ও দক্ষিণাঞ্চলের মধ্য দিয়ে প্রবাহিত হয়ে বঙ্গোপসাগরে পতিত হয়েছে।",
    example: "বাংলাদেশের কৃষি, যোগাযোগ ও অর্থনীতিতে মেঘনা নদীর গুরুত্বপূর্ণ ভূমিকা রয়েছে।"
  },
  {
    id: 72,
    question: "কাপ্তাই হ্রদ বাংলাদেশের কোন জেলায় অবস্থিত?",
    options: ["বান্দরবান", "খাগড়াছড়ি", "কক্সবাজার", "রাঙামাটি"],
    answer: 3,
    explanation: "কাপ্তাই হ্রদ চট্টগ্রাম পার্বত্য অঞ্চলের রাঙামাটি জেলায় অবস্থিত। কর্ণফুলী নদীর ওপর বাঁধ নির্মাণের ফলে এই হ্রদের সৃষ্টি হয়েছে।",
    example: "রাঙামাটির কাপ্তাই হ্রদ একটি জনপ্রিয় পর্যটনকেন্দ্র।"
  },
  {
    id: 73,
    question: "পার্বত্য চট্টগ্রাম বাংলাদেশের কোন অংশে অবস্থিত?",
    options: ["দক্ষিণ-পূর্ব অংশে", "উত্তর-পশ্চিম অংশে", "দক্ষিণ-পশ্চিম অংশে", "উত্তর-পূর্ব অংশে"],
    answer: 0,
    explanation: "পার্বত্য চট্টগ্রাম বাংলাদেশের দক্ষিণ-পূর্ব অংশে অবস্থিত। এই অঞ্চলের সীমান্ত ভারতের ও মিয়ানমারের সঙ্গে যুক্ত।",
    example: "রাঙামাটি, খাগড়াছড়ি ও বান্দরবান দক্ষিণ-পূর্ব বাংলাদেশের পার্বত্য জেলা।"
  },
  {
    id: 74,
    question: "বাংলাদেশের সবচেয়ে বেশি পাহাড়ি এলাকা কোন অঞ্চলে দেখা যায়?",
    options: ["রাজশাহী অঞ্চলে", "চট্টগ্রাম অঞ্চলে", "খুলনা অঞ্চলে", "বরিশাল অঞ্চলে"],
    answer: 1,
    explanation: "বাংলাদেশের সবচেয়ে বেশি পাহাড়ি এলাকা দক্ষিণ-পূর্বাঞ্চলের চট্টগ্রাম অঞ্চলে অবস্থিত। বিশেষ করে চট্টগ্রাম পার্বত্য অঞ্চলে পাহাড়ের বিস্তৃতি বেশি।",
    example: "বান্দরবানের পাহাড়গুলো চট্টগ্রাম পার্বত্য অঞ্চলের অন্তর্ভুক্ত।"
  },
  {
    id: 75,
    question: "চট্টগ্রাম পার্বত্য অঞ্চলের প্রধান তিনটি জেলার নাম কী?",
    options: [
      "কক্সবাজার, চট্টগ্রাম ও ফেনী",
      "সিলেট, সুনামগঞ্জ ও হবিগঞ্জ",
      "রাঙামাটি, খাগড়াছড়ি ও বান্দরবান",
      "রাঙামাটি, চট্টগ্রাম ও কুমিল্লা"
    ],
    answer: 2,
    explanation: "চট্টগ্রাম পার্বত্য অঞ্চল তিনটি জেলা নিয়ে গঠিত। জেলাগুলো হলো রাঙামাটি, খাগড়াছড়ি ও বান্দরবান।",
    example: "বান্দরবান চট্টগ্রাম পার্বত্য অঞ্চলের তিনটি জেলার একটি।"
  },
  {
    id: 76,
    question: "বাংলাদেশের হাওর অঞ্চল প্রধানত কোন অংশে বেশি দেখা যায়?",
    options: ["দক্ষিণ-পশ্চিম অংশে", "মধ্যাঞ্চলে", "দক্ষিণ-পূর্ব অংশে", "উত্তর-পূর্ব অংশে"],
    answer: 3,
    explanation: "বাংলাদেশের উত্তর-পূর্বাঞ্চলে হাওর বেশি দেখা যায়। বিশেষ করে সুনামগঞ্জ, সিলেট, হবিগঞ্জ, কিশোরগঞ্জ ও নেত্রকোনা জেলায় হাওরের বিস্তৃতি রয়েছে।",
    example: "সুনামগঞ্জ বাংলাদেশের হাওরসমৃদ্ধ জেলাগুলোর মধ্যে অন্যতম।"
  },
  {
    id: 77,
    question: "বাংলাদেশের সবচেয়ে বড় ম্যানগ্রোভ বন কোনটি?",
    options: ["সুন্দরবন", "মধুপুর বন", "লাউয়াছড়া বন", "ভাওয়াল বন"],
    answer: 0,
    explanation: "সুন্দরবন বাংলাদেশের সবচেয়ে বড় ম্যানগ্রোভ বন। এটি বিশ্বের বৃহত্তম একটানা ম্যানগ্রোভ বন হিসেবেও পরিচিত।",
    example: "সুন্দরবন ইউনেস্কো ঘোষিত বিশ্ব ঐতিহ্যবাহী স্থানের অন্তর্ভুক্ত।"
  },
  {
    id: 78,
    question: "কক্সবাজার কোন ধরনের ভূ-প্রাকৃতিক বৈশিষ্ট্যের জন্য বিশেষভাবে বিখ্যাত?",
    options: ["উঁচু পাহাড়", "দীর্ঘ প্রাকৃতিক বালুকাময় সমুদ্রসৈকত", "বৃহৎ ম্যানগ্রোভ বন", "বিস্তীর্ণ হাওর"],
    answer: 1,
    explanation: "কক্সবাজার বঙ্গোপসাগরের তীরে অবস্থিত দীর্ঘ প্রাকৃতিক বালুকাময় সমুদ্রসৈকতের জন্য বিশেষভাবে বিখ্যাত।",
    example: "কক্সবাজার বাংলাদেশের অন্যতম জনপ্রিয় উপকূলীয় পর্যটনকেন্দ্র।"
  },
  {
    id: 79,
    question: "বাংলাদেশের কোন অঞ্চল চা চাষের জন্য বিশেষভাবে পরিচিত?",
    options: ["বরিশাল অঞ্চল", "রাজশাহী অঞ্চল", "সিলেট অঞ্চল", "রংপুর অঞ্চল"],
    answer: 2,
    explanation: "সিলেট অঞ্চল চা চাষের জন্য বিশেষভাবে পরিচিত। সিলেট ও মৌলভীবাজার জেলায় প্রচুর চা-বাগান রয়েছে।",
    example: "মৌলভীবাজারের শ্রীমঙ্গল চা-বাগানের জন্য বিখ্যাত।"
  },
  {
    id: 80,
    question: "মধুপুর গড় বাংলাদেশের কোন ধরনের ভূ-প্রাকৃতিক অঞ্চল?",
    options: ["নতুন প্লাবনভূমি", "উপকূলীয় সমভূমি", "জোয়ার-ভাটার সমভূমি", "প্লাইস্টোসিন সোপান"],
    answer: 3,
    explanation: "মধুপুর গড় একটি প্লাইস্টোসিন যুগের সোপানভূমি। এর মাটি সাধারণত লালচে-বাদামি এবং আশপাশের প্লাবনভূমির তুলনায় উঁচু।",
    example: "মধুপুর গড় বাংলাদেশের মধ্যাঞ্চলের একটি গুরুত্বপূর্ণ ভূ-প্রাকৃতিক অঞ্চল।"
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
