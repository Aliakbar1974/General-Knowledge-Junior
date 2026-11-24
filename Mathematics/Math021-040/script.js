
 // ============================================================
 // Mathematics for Junior — MCQ BANK PART 02
 // Topic: Mathematics| 20 Questions
 // Learning Mode + Exam Mode | 15 Seconds per Question
 // Sound Engine + Facebook Return + Result Screen
 // ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122127009423435742&set=a.122102731923435742";


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
    id: "Math০২১",
    question: "৮ × ৬ = কত?",
    options: ["৪২", "৫৪", "৪৮", "৫৬"],
    answer: 2,
    explanation: "৮-কে ৬ দিয়ে গুণ করলে ৪৮ হয়।",
    example: "৮ × ৬ = ৮ + ৮ + ৮ + ৮ + ৮ + ৮ = ৪৮।"
  },
  {
    id: "Math০২২",
    question: "৭২ ÷ ৮ = কত?",
    options: ["৯", "৮", "৭", "৬"],
    answer: 0,
    explanation: "৭২-কে ৮ দিয়ে ভাগ করলে ভাগফল ৯ হয়।",
    example: "৭২ ÷ ৮ = ৯, কারণ ৮ × ৯ = ৭২।"
  },
  {
    id: "Math০২৩",
    question: "৩৫ + ২৮ = কত?",
    options: ["৫৩", "৬৫", "৬২", "৬৩"],
    answer: 3,
    explanation: "৩৫-এর সঙ্গে ২৮ যোগ করলে যোগফল ৬৩ হয়।",
    example: "৩৫ + ২৮ = ৩৫ + ২০ + ৮ = ৬৩।"
  },
  {
    id: "Math০২৪",
    question: "৯০ − ৪৬ = কত?",
    options: ["৪৬", "৪৪", "৪২", "৫৪"],
    answer: 1,
    explanation: "৯০ থেকে ৪৬ বিয়োগ করলে অবশিষ্ট থাকে ৪৪।",
    example: "৯০ − ৪৬ = ৯০ − ৪০ − ৬ = ৪৪।"
  },
  {
    id: "Math০২৫",
    question: "৯ × ৭ = কত?",
    options: ["৫৪", "৬৩", "৭২", "৫৬"],
    answer: 1,
    explanation: "৯-কে ৭ দিয়ে গুণ করলে ৬৩ হয়।",
    example: "৯ × ৭ = ৬৩।"
  },
  {
    id: "Math০২৬",
    question: "৮১ ÷ ৯ = কত?",
    options: ["৮", "৭", "৯", "৬"],
    answer: 2,
    explanation: "৮১-কে ৯ দিয়ে ভাগ করলে ভাগফল ৯ হয়।",
    example: "৮১ ÷ ৯ = ৯, কারণ ৯ × ৯ = ৮১।"
  },
  {
    id: "Math০২৭",
    question: "৪৭ + ৩৬ = কত?",
    options: ["৮৩", "৭৩", "৮১", "৮৫"],
    answer: 0,
    explanation: "৪৭-এর সঙ্গে ৩৬ যোগ করলে যোগফল ৮৩ হয়।",
    example: "৪৭ + ৩৬ = ৪৭ + ৩০ + ৬ = ৮৩।"
  },
  {
    id: "Math০২৮",
    question: "১০০ − ৫৮ = কত?",
    options: ["৪৮", "৪৬", "৪২", "৫২"],
    answer: 2,
    explanation: "১০০ থেকে ৫৮ বিয়োগ করলে অবশিষ্ট থাকে ৪২।",
    example: "১০০ − ৫৮ = ১০০ − ৫০ − ৮ = ৪২।"
  },
  {
    id: "Math০২৯",
    question: "১২ × ৪ = কত?",
    options: ["৪৪", "৪৬", "৪৮", "৫২"],
    answer: 2,
    explanation: "১২-কে ৪ দিয়ে গুণ করলে ৪৮ হয়।",
    example: "১২ × ৪ = ১২ + ১২ + ১২ + ১২ = ৪৮।"
  },
  {
    id: "Math০৩০",
    question: "৯৬ ÷ ১২ = কত?",
    options: ["৬", "৮", "৯", "৭"],
    answer: 1,
    explanation: "৯৬-কে ১২ দিয়ে ভাগ করলে ভাগফল ৮ হয়।",
    example: "৯৬ ÷ ১২ = ৮, কারণ ১২ × ৮ = ৯৬।"
  },
  {
    id: "Math০৩১",
    question: "১৫ + ২৭ + ৮ = কত?",
    options: ["৫০", "৪৮", "৫২", "৫৫"],
    answer: 0,
    explanation: "তিনটি সংখ্যা যোগ করলে যোগফল ৫০ হয়।",
    example: "১৫ + ২৭ = ৪২ এবং ৪২ + ৮ = ৫০।"
  },
  {
    id: "Math০৩২",
    question: "৮০ − ২৫ − ১৫ = কত?",
    options: ["৫০", "৪৫", "৩০", "৪০"],
    answer: 3,
    explanation: "৮০ থেকে প্রথমে ২৫ এবং পরে ১৫ বিয়োগ করলে ৪০ থাকে।",
    example: "৮০ − ২৫ = ৫৫ এবং ৫৫ − ১৫ = ৪০।"
  },
  {
    id: "Math০৩৩",
    question: "৭ × ৮ + ৪ = কত?",
    options: ["৫৬", "৬০", "৬৪", "৫২"],
    answer: 1,
    explanation: "যোগের আগে গুণ করতে হয়। তাই ৭ × ৮ = ৫৬, এরপর ৪ যোগ করলে ৬০ হয়।",
    example: "৭ × ৮ + ৪ = ৫৬ + ৪ = ৬০।"
  },
  {
    id: "Math০৩৪",
    question: "৫০ ÷ ৫ + ৬ = কত?",
    options: ["১৪", "১৫", "১৬", "১২"],
    answer: 2,
    explanation: "যোগের আগে ভাগ করতে হয়। ৫০ ÷ ৫ = ১০, এরপর ৬ যোগ করলে ১৬ হয়।",
    example: "৫০ ÷ ৫ + ৬ = ১০ + ৬ = ১৬।"
  },
  {
    id: "Math০৩৫",
    question: "২৫ × ৩ = কত?",
    options: ["৭০", "৬৫", "৮০", "৭৫"],
    answer: 3,
    explanation: "২৫-কে ৩ দিয়ে গুণ করলে ৭৫ হয়।",
    example: "২৫ × ৩ = ২৫ + ২৫ + ২৫ = ৭৫।"
  },
  {
    id: "Math০৩৬",
    question: "১৪৪ ÷ ১২ = কত?",
    options: ["১২", "১৪", "১০", "১৬"],
    answer: 0,
    explanation: "১৪৪-কে ১২ দিয়ে ভাগ করলে ভাগফল ১২ হয়।",
    example: "১৪৪ ÷ ১২ = ১২, কারণ ১২ × ১২ = ১৪৪।"
  },
  {
    id: "Math০৩৭",
    question: "একটি সংখ্যার সঙ্গে ১৮ যোগ করলে ৪৫ হয়। সংখ্যাটি কত?",
    options: ["২৫", "২৭", "২৮", "৩০"],
    answer: 1,
    explanation: "যোগফল থেকে যোগ করা সংখ্যা বিয়োগ করলে মূল সংখ্যা পাওয়া যায়।",
    example: "৪৫ − ১৮ = ২৭। যাচাই: ২৭ + ১৮ = ৪৫।"
  },
  {
    id: "Math০৩৮",
    question: "একটি সংখ্যা থেকে ২৩ বিয়োগ করলে ১৭ হয়। সংখ্যাটি কত?",
    options: ["৩৮", "৩৯", "৪০", "৪২"],
    answer: 2,
    explanation: "বিয়োগফল ও বিয়োগক একসঙ্গে যোগ করলে মূল সংখ্যাটি পাওয়া যায়।",
    example: "১৭ + ২৩ = ৪০। যাচাই: ৪০ − ২৩ = ১৭।"
  },
  {
    id: "Math০৩৯",
    question: "একটি সংখ্যাকে ৫ দিয়ে গুণ করলে ৪০ হয়। সংখ্যাটি কত?",
    options: ["৬", "৭", "৯", "৮"],
    answer: 3,
    explanation: "গুণফলকে গুণক দিয়ে ভাগ করলে মূল সংখ্যাটি পাওয়া যায়।",
    example: "৪০ ÷ ৫ = ৮। যাচাই: ৮ × ৫ = ৪০।"
  },
  {
    id: "Math০৪০",
    question: "৬০টি আম ৬ জন শিশুর মধ্যে সমানভাবে ভাগ করলে প্রত্যেকে কয়টি আম পাবে?",
    options: ["১০টি", "১২টি", "৮টি", "১৫টি"],
    answer: 0,
    explanation: "মোট আমের সংখ্যা শিশুর সংখ্যা দিয়ে ভাগ করলে প্রত্যেকের প্রাপ্য আমের সংখ্যা পাওয়া যায়।",
    example: "৬০ ÷ ৬ = ১০। তাই প্রত্যেকে ১০টি আম পাবে।"
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
