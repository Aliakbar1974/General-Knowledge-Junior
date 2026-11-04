
 // ============================================================
 // GENERAL KNOWLEDGE Junior — MCQ BANK PART 01
 // Topic: Geography | 20 Questions
 // Learning Mode + Exam Mode | 15 Seconds per Question
 // Sound Engine + Facebook Return + Result Screen
 // ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122122741965435742&set=a.122102731923435742";


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
    id: "001",
    question: "আমরা কোন গ্রহে বাস করি?",
    options: ["মঙ্গল", "পৃথিবী", "শুক্র", "বৃহস্পতি"],
    answer: 1,
    explanation: "পৃথিবী হলো আমাদের বাসযোগ্য গ্রহ।",
    example: "মানুষ, প্রাণী ও উদ্ভিদ পৃথিবীতে বসবাস করে।"
  },
  {
    id: "002",
    question: "পৃথিবীর একমাত্র প্রাকৃতিক উপগ্রহ কোনটি?",
    options: ["সূর্য", "মঙ্গল", "চাঁদ", "শুক্র"],
    answer: 2,
    explanation: "চাঁদ পৃথিবীর একমাত্র প্রাকৃতিক উপগ্রহ।",
    example: "রাতে আকাশে আমরা চাঁদ দেখতে পাই।"
  },
  {
    id: "003",
    question: "পৃথিবীর আকৃতি কেমন?",
    options: ["প্রায় গোলাকার", "সম্পূর্ণ সমতল", "চৌকো", "ত্রিভুজাকার"],
    answer: 0,
    explanation: "পৃথিবী প্রায় গোলাকার, তবে মেরু অঞ্চলে কিছুটা চাপা।",
    example: "মহাকাশ থেকে পৃথিবীকে গোলাকার দেখায়।"
  },
  {
    id: "004",
    question: "সূর্য কোন দিক থেকে উদিত হয়?",
    options: ["পশ্চিম", "উত্তর", "দক্ষিণ", "পূর্ব"],
    answer: 3,
    explanation: "পৃথিবীর ঘূর্ণনের কারণে সূর্যকে পূর্ব দিকে উঠতে দেখা যায়।",
    example: "সকালে পূর্ব আকাশে সূর্য দেখা যায়।"
  },
  {
    id: "005",
    question: "পৃথিবীর সবচেয়ে বড় মহাদেশ কোনটি?",
    options: ["আফ্রিকা", "এশিয়া", "ইউরোপ", "অস্ট্রেলিয়া"],
    answer: 1,
    explanation: "আয়তনের দিক থেকে এশিয়া পৃথিবীর সবচেয়ে বড় মহাদেশ।",
    example: "বাংলাদেশ এশিয়া মহাদেশে অবস্থিত।"
  },
  {
    id: "006",
    question: "পৃথিবীতে মোট কয়টি মহাদেশ রয়েছে?",
    options: ["পাঁচটি", "ছয়টি", "সাতটি", "আটটি"],
    answer: 2,
    explanation: "সাধারণভাবে পৃথিবীতে সাতটি মহাদেশ ধরা হয়।",
    example: "এশিয়া, আফ্রিকা ও ইউরোপ হলো তিনটি মহাদেশ।"
  },
  {
    id: "007",
    question: "পৃথিবীর সবচেয়ে বড় মহাসাগর কোনটি?",
    options: ["প্রশান্ত মহাসাগর", "ভারত মহাসাগর", "আটলান্টিক মহাসাগর", "উত্তর মহাসাগর"],
    answer: 0,
    explanation: "প্রশান্ত মহাসাগর পৃথিবীর সবচেয়ে বড় ও গভীর মহাসাগর।",
    example: "প্রশান্ত মহাসাগর এশিয়া ও আমেরিকার মাঝখানে বিস্তৃত।"
  },
  {
    id: "008",
    question: "বাংলাদেশের দক্ষিণে কোন জলভাগ অবস্থিত?",
    options: ["আরব সাগর", "লোহিত সাগর", "ভূমধ্যসাগর", "বঙ্গোপসাগর"],
    answer: 3,
    explanation: "বাংলাদেশের দক্ষিণে বঙ্গোপসাগর অবস্থিত।",
    example: "কক্সবাজারের সমুদ্রসৈকত বঙ্গোপসাগরের তীরে।"
  },
  {
    id: "009",
    question: "পৃথিবীর সবচেয়ে বড় উষ্ণ মরুভূমি কোনটি?",
    options: ["গোবি", "সাহারা", "কালাহারি", "থর"],
    answer: 1,
    explanation: "সাহারা পৃথিবীর সবচেয়ে বড় উষ্ণ মরুভূমি।",
    example: "সাহারা মরুভূমি আফ্রিকা মহাদেশে অবস্থিত।"
  },
  {
    id: "010",
    question: "পৃথিবীর সর্বোচ্চ পর্বতশৃঙ্গ কোনটি?",
    options: ["কে-টু", "কাঞ্চনজঙ্ঘা", "মাউন্ট এভারেস্ট", "মাকালু"],
    answer: 2,
    explanation: "সমুদ্রপৃষ্ঠ থেকে উচ্চতার হিসাবে মাউন্ট এভারেস্ট পৃথিবীর সর্বোচ্চ শৃঙ্গ।",
    example: "মাউন্ট এভারেস্ট হিমালয় পর্বতমালায় অবস্থিত।"
  },
  {
    id: "011",
    question: "পৃথিবীর বৃহত্তম দেশ কোনটি?",
    options: ["রাশিয়া", "কানাডা", "চীন", "যুক্তরাষ্ট্র"],
    answer: 0,
    explanation: "আয়তনের দিক থেকে রাশিয়া পৃথিবীর বৃহত্তম দেশ।",
    example: "রাশিয়া ইউরোপ ও এশিয়া—দুই মহাদেশে বিস্তৃত।"
  },
  {
    id: "012",
    question: "বাংলাদেশের রাজধানীর নাম কী?",
    options: ["চট্টগ্রাম", "রাজশাহী", "খুলনা", "ঢাকা"],
    answer: 3,
    explanation: "ঢাকা বাংলাদেশের রাজধানী ও প্রধান প্রশাসনিক কেন্দ্র।",
    example: "বাংলাদেশের জাতীয় সংসদ ভবন ঢাকায় অবস্থিত।"
  },
  {
    id: "013",
    question: "পৃথিবীর বায়ুমণ্ডলে সবচেয়ে বেশি কোন গ্যাস রয়েছে?",
    options: ["অক্সিজেন", "নাইট্রোজেন", "কার্বন ডাই-অক্সাইড", "হাইড্রোজেন"],
    answer: 1,
    explanation: "বায়ুমণ্ডলের প্রায় ৭৮ শতাংশ নাইট্রোজেন।",
    example: "আমরা যে বাতাসে শ্বাস নিই, তাতে নাইট্রোজেন রয়েছে।"
  },
  {
    id: "014",
    question: "মানচিত্রে সাধারণত উত্তর দিক কোন পাশে দেখানো হয়?",
    options: ["নিচে", "ডানে", "উপরে", "বামে"],
    answer: 2,
    explanation: "প্রচলিত মানচিত্রে উত্তর দিক সাধারণত উপরের দিকে থাকে।",
    example: "মানচিত্রের দিক নির্ণয়ের চিহ্ন দেখে উত্তর চেনা যায়।"
  },
  {
    id: "015",
    question: "পৃথিবীর সবচেয়ে শীতল মহাদেশ কোনটি?",
    options: ["অ্যান্টার্কটিকা", "ইউরোপ", "এশিয়া", "উত্তর আমেরিকা"],
    answer: 0,
    explanation: "অ্যান্টার্কটিকা পৃথিবীর সবচেয়ে শীতল মহাদেশ।",
    example: "অ্যান্টার্কটিকার অধিকাংশ অঞ্চল বরফে ঢাকা।"
  },
  {
    id: "016",
    question: "দিন ও রাত হওয়ার প্রধান কারণ কী?",
    options: ["সূর্যের চারদিকে পৃথিবীর ঘূর্ণন", "চাঁদের আলো", "পৃথিবীর নিজ অক্ষে আবর্তন", "মেঘের চলাচল"],
    answer: 2,
    explanation: "পৃথিবী নিজ অক্ষে ঘোরে বলে পর্যায়ক্রমে দিন ও রাত হয়।",
    example: "পৃথিবীর যে অংশ সূর্যের দিকে থাকে সেখানে দিন হয়।"
  },
  {
    id: "017",
    question: "পৃথিবীর বৃহত্তম দ্বীপ কোনটি?",
    options: ["মাদাগাস্কার", "গ্রিনল্যান্ড", "শ্রীলঙ্কা", "বোর্নিও"],
    answer: 1,
    explanation: "অস্ট্রেলিয়াকে মহাদেশ হিসেবে গণ্য করলে গ্রিনল্যান্ড পৃথিবীর বৃহত্তম দ্বীপ।",
    example: "গ্রিনল্যান্ড উত্তর আটলান্টিক ও আর্কটিক অঞ্চলে অবস্থিত।"
  },
  {
    id: "018",
    question: "নিরক্ষরেখা পৃথিবীকে কোন দুই ভাগে ভাগ করে?",
    options: ["পূর্ব ও পশ্চিম", "স্থল ও জল", "গ্রীষ্ম ও শীত", "উত্তর ও দক্ষিণ"],
    answer: 3,
    explanation: "নিরক্ষরেখা পৃথিবীকে উত্তর গোলার্ধ ও দক্ষিণ গোলার্ধে ভাগ করে।",
    example: "বাংলাদেশ নিরক্ষরেখার উত্তরে অবস্থিত।"
  },
  {
    id: "019",
    question: "পৃথিবীর কোন স্তরে আমরা বসবাস করি?",
    options: ["ভূত্বক", "বহিঃকেন্দ্র", "অন্তঃকেন্দ্র", "ম্যান্টল"],
    answer: 0,
    explanation: "পৃথিবীর সবচেয়ে বাইরের কঠিন স্তর হলো ভূত্বক।",
    example: "পর্বত, সমভূমি ও সমুদ্রতল ভূত্বকের অংশ।"
  },
  {
    id: "020",
    question: "কোন মহাদেশকে দ্বীপ মহাদেশ বলা হয়?",
    options: ["আফ্রিকা", "ইউরোপ", "অস্ট্রেলিয়া", "দক্ষিণ আমেরিকা"],
    answer: 2,
    explanation: "অস্ট্রেলিয়া এককভাবে একটি মহাদেশ এবং চারদিকে জলভাগ দ্বারা বেষ্টিত।",
    example: "অস্ট্রেলিয়ার চারদিকে ভারত ও প্রশান্ত মহাসাগরের জলভাগ রয়েছে।"
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
