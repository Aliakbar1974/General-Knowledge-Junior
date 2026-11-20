
 // ============================================================
 // Mathematics for Junior — MCQ BANK PART 01
 // Topic: Mathematics| 20 Questions
 // Learning Mode + Exam Mode | 15 Seconds per Question
 // Sound Engine + Facebook Return + Result Screen
 // ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122126514855435742&set=a.122102731923435742";


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
    id: "Math001",
    question: "2 + 3 = কত?",
    options: ["৪", "৬", "৫", "৭"],
    answer: 2,
    explanation: "২ + ৩ = ৫।",
    example: "২টি আমের সঙ্গে ৩টি আম যোগ করলে মোট ৫টি আম হয়।"
  },
  {
    id: "Math002",
    question: "7 − 4 = কত?",
    options: ["৩", "২", "৪", "৫"],
    answer: 0,
    explanation: "৭ থেকে ৪ বিয়োগ করলে ৩ থাকে।",
    example: "৭টি কলম থেকে ৪টি সরিয়ে নিলে ৩টি কলম থাকে।"
  },
  {
    id: "Math003",
    question: "3 + 5 = কত?",
    options: ["৭", "৯", "৬", "৮"],
    answer: 3,
    explanation: "৩ + ৫ = ৮।",
    example: "৩টি ফুলের সঙ্গে ৫টি ফুল যোগ করলে মোট ৮টি ফুল হয়।"
  },
  {
    id: "Math004",
    question: "9 − 2 = কত?",
    options: ["৬", "৭", "৮", "৫"],
    answer: 1,
    explanation: "৯ থেকে ২ বিয়োগ করলে ৭ থাকে।",
    example: "৯টি বল থেকে ২টি সরিয়ে নিলে ৭টি বল থাকে।"
  },
  {
    id: "Math005",
    question: "4 × 2 = কত?",
    options: ["৬", "৮", "১০", "১২"],
    answer: 1,
    explanation: "৪ × ২ = ৪ + ৪ = ৮।",
    example: "প্রতি প্যাকেটে ৪টি করে বিস্কুট থাকলে ২ প্যাকেটে ৮টি বিস্কুট হবে।"
  },
  {
    id: "Math006",
    question: "10 ÷ 2 = কত?",
    options: ["৪", "৬", "৩", "৫"],
    answer: 3,
    explanation: "১০ ÷ ২ = ৫।",
    example: "১০টি চকলেট ২ জনের মধ্যে সমান ভাগ করলে প্রত্যেকে ৫টি পাবে।"
  },
  {
    id: "Math007",
    question: "6 + 7 = কত?",
    options: ["১৩", "১২", "১৪", "১৫"],
    answer: 0,
    explanation: "৬ + ৭ = ১৩।",
    example: "৬টি বইয়ের সঙ্গে ৭টি বই যোগ করলে মোট ১৩টি বই হয়।"
  },
  {
    id: "Math008",
    question: "15 − 6 = কত?",
    options: ["৮", "১০", "৯", "৭"],
    answer: 2,
    explanation: "১৫ থেকে ৬ বিয়োগ করলে ৯ থাকে।",
    example: "১৫টি পেন্সিল থেকে ৬টি দিলে ৯টি পেন্সিল অবশিষ্ট থাকে।"
  },
  {
    id: "Math009",
    question: "3 × 4 = কত?",
    options: ["১০", "১১", "১৪", "১২"],
    answer: 3,
    explanation: "৩ × ৪ = ৩ + ৩ + ৩ + ৩ = ১২।",
    example: "প্রতি ঝুড়িতে ৩টি করে আম থাকলে ৪টি ঝুড়িতে ১২টি আম হবে।"
  },
  {
    id: "Math010",
    question: "20 ÷ 5 = কত?",
    options: ["৫", "৪", "৩", "৬"],
    answer: 1,
    explanation: "২০ ÷ ৫ = ৪।",
    example: "২০টি ফুল ৫টি তোড়ায় সমানভাবে ভাগ করলে প্রতিটি তোড়ায় ৪টি ফুল থাকবে।"
  },
  {
    id: "Math011",
    question: "8 + 9 = কত?",
    options: ["১৬", "১৮", "১৭", "১৯"],
    answer: 2,
    explanation: "৮ + ৯ = ১৭।",
    example: "৮টি পাখির সঙ্গে ৯টি পাখি যোগ হলে মোট ১৭টি পাখি হয়।"
  },
  {
    id: "Math012",
    question: "18 − 9 = কত?",
    options: ["৮", "১০", "১১", "৯"],
    answer: 3,
    explanation: "১৮ থেকে ৯ বিয়োগ করলে ৯ থাকে।",
    example: "১৮টি লজেন্স থেকে ৯টি খেলে ৯টি লজেন্স থাকে।"
  },
  {
    id: "Math013",
    question: "5 × 5 = কত?",
    options: ["২৫", "২০", "৩০", "১৫"],
    answer: 0,
    explanation: "৫ × ৫ = ২৫।",
    example: "প্রতি সারিতে ৫টি করে গাছ থাকলে ৫টি সারিতে ২৫টি গাছ হবে।"
  },
  {
    id: "Math014",
    question: "24 ÷ 6 = কত?",
    options: ["৩", "৪", "৫", "৬"],
    answer: 1,
    explanation: "২৪ ÷ ৬ = ৪।",
    example: "২৪টি কলা ৬ জনের মধ্যে সমান ভাগ করলে প্রত্যেকে ৪টি পাবে।"
  },
  {
    id: "Math015",
    question: "12 + 15 = কত?",
    options: ["২৫", "২৬", "২৮", "২৭"],
    answer: 3,
    explanation: "১২ + ১৫ = ২৭।",
    example: "১২ টাকা ও ১৫ টাকা একসঙ্গে হলে মোট ২৭ টাকা হয়।"
  },
  {
    id: "Math016",
    question: "30 − 12 = কত?",
    options: ["১৭", "১৯", "১৮", "২০"],
    answer: 2,
    explanation: "৩০ থেকে ১২ বিয়োগ করলে ১৮ থাকে।",
    example: "৩০টি খাতা থেকে ১২টি দিলে ১৮টি খাতা অবশিষ্ট থাকে।"
  },
  {
    id: "Math017",
    question: "6 × 7 = কত?",
    options: ["৪২", "৩৬", "৪৮", "৪০"],
    answer: 0,
    explanation: "৬ × ৭ = ৪২।",
    example: "প্রতি বাক্সে ৬টি করে বল থাকলে ৭টি বাক্সে ৪২টি বল হবে।"
  },
  {
    id: "Math018",
    question: "36 ÷ 4 = কত?",
    options: ["৮", "১০", "৯", "১২"],
    answer: 2,
    explanation: "৩৬ ÷ ৪ = ৯।",
    example: "৩৬টি চকলেট ৪ জনের মধ্যে সমান ভাগ করলে প্রত্যেকে ৯টি পাবে।"
  },
  {
    id: "Math019",
    question: "25 + 16 = কত?",
    options: ["৩৯", "৪০", "৪২", "৪১"],
    answer: 3,
    explanation: "২৫ + ১৬ = ৪১।",
    example: "২৫টি আমের সঙ্গে ১৬টি আম যোগ করলে মোট ৪১টি আম হয়।"
  },
  {
    id: "Math020",
    question: "50 − 27 = কত?",
    options: ["২২", "২৩", "২৪", "২৫"],
    answer: 1,
    explanation: "৫০ থেকে ২৭ বিয়োগ করলে ২৩ থাকে।",
    example: "৫০ টাকা থেকে ২৭ টাকা খরচ করলে ২৩ টাকা অবশিষ্ট থাকে।"
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
