
 // ============================================================
 // Mathematics for Junior — MCQ BANK PART 03
 // Topic: Mathematics| 15 Questions
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
    id: "Math041",
    question: "৩, ৫, ৭, ৯, ১১ — ধারাটির পরের সংখ্যা কত?",
    options: ["১২", "১৫", "১৩", "১৪"],
    answer: 2,
    explanation: "প্রতিবার ২ করে সংখ্যা বাড়ছে। তাই ১১ + ২ = ১৩।",
    example: "৩, ৫, ৭, ৯, ১১, ১৩ — এখানে প্রতিটি সংখ্যা আগের সংখ্যার চেয়ে ২ বেশি।"
  },
  {
    id: "Math042",
    question: "২০, ১৮, ১৬, ১৪, ১২ — পরের সংখ্যা কত?",
    options: ["১০", "১১", "৯", "৮"],
    answer: 0,
    explanation: "প্রতিবার ২ করে সংখ্যা কমছে। তাই ১২ − ২ = ১০।",
    example: "২০, ১৮, ১৬, ১৪, ১২, ১০ — এখানে প্রতিটি সংখ্যা আগের সংখ্যার চেয়ে ২ কম।"
  },
  {
    id: "Math043",
    question: "২ থেকে ২০ পর্যন্ত জোড় সংখ্যা কয়টি?",
    options: ["৯টি", "১১টি", "১২টি", "১০টি"],
    answer: 3,
    explanation: "জোড় সংখ্যাগুলো হলো ২, ৪, ৬, ৮, ১০, ১২, ১৪, ১৬, ১৮ ও ২০। মোট ১০টি।",
    example: "২ থেকে ১০ পর্যন্ত জোড় সংখ্যা হলো ২, ৪, ৬, ৮ ও ১০। মোট ৫টি।"
  },
  {
    id: "Math044",
    question: "১ থেকে ২০ পর্যন্ত বিজোড় সংখ্যা কয়টি?",
    options: ["৮টি", "১০টি", "১২টি", "৯টি"],
    answer: 1,
    explanation: "বিজোড় সংখ্যাগুলো হলো ১, ৩, ৫, ৭, ৯, ১১, ১৩, ১৫, ১৭ ও ১৯। মোট ১০টি।",
    example: "১ থেকে ৯ পর্যন্ত বিজোড় সংখ্যা হলো ১, ৩, ৫, ৭ ও ৯। মোট ৫টি।"
  },
  {
    id: "Math045",
    question: "৩৪৮ সংখ্যাটিতে ৪-এর স্থানমান কত?",
    options: ["৪", "৪০০", "৪০", "৩০০"],
    answer: 2,
    explanation: "৩৪৮ সংখ্যাটিতে ৪ দশকের ঘরে আছে। তাই এর স্থানমান ৪ × ১০ = ৪০।",
    example: "২৫৬ সংখ্যাটিতে ৫ দশকের ঘরে আছে। তাই ৫-এর স্থানমান ৫০।"
  },
  {
    id: "Math046",
    question: "৫,৪২৬ সংখ্যাটিতে ৫-এর স্থানমান কত?",
    options: ["৫০০", "৫,০০০", "৫০", "৫"],
    answer: 1,
    explanation: "৫,৪২৬ সংখ্যাটিতে ৫ হাজারের ঘরে আছে। তাই এর স্থানমান ৫ × ১,০০০ = ৫,০০০।",
    example: "৩,২৫০ সংখ্যাটিতে ৩ হাজারের ঘরে আছে। তাই ৩-এর স্থানমান ৩,০০০।"
  },
  {
    id: "Math047",
    question: "৭,৩০৫ সংখ্যাটির Expanded Form কী?",
    options: [
      "৭,০০০ + ৩০ + ৫",
      "৭০০ + ৩০০ + ৫",
      "৭,০০০ + ৩০০ + ৫০",
      "৭,০০০ + ৩০০ + ৫"
    ],
    answer: 3,
    explanation: "৭,৩০৫ সংখ্যাটিতে ৭ হাজার, ৩ শতক, ০ দশক ও ৫ একক রয়েছে। তাই Expanded Form হলো ৭,০০০ + ৩০০ + ৫।",
    example: "৪,২৬৮-এর Expanded Form হলো ৪,০০০ + ২০০ + ৬০ + ৮।"
  },
  {
    id: "Math048",
    question: "৬,০০০ + ৪০০ + ২০ + ৭ = কোন সংখ্যা?",
    options: ["৬,৪২৭", "৬,৪৭২", "৬,৪০৭", "৬,২৭৪"],
    answer: 0,
    explanation: "৬,০০০ + ৪০০ = ৬,৪০০। এরপর ২০ ও ৭ যোগ করলে হয় ৬,৪২৭।",
    example: "৩,০০০ + ৫০০ + ৪০ + ২ = ৩,৫৪২।"
  },
  {
    id: "Math049",
    question: "৯৯৯-এর পরের পূর্ণসংখ্যা কত?",
    options: ["৯৯৮", "১,০০১", "১,০০০", "৯৯০"],
    answer: 2,
    explanation: "কোনো সংখ্যার পরের পূর্ণসংখ্যা পেতে ১ যোগ করতে হয়। তাই ৯৯৯ + ১ = ১,০০০।",
    example: "৪৯৯-এর পরের পূর্ণসংখ্যা হলো ৫০০।"
  },
  {
    id: "Math050",
    question: "১,০০০-এর ঠিক আগের পূর্ণসংখ্যা কত?",
    options: ["৯৯০", "৯৯৯", "১,০০১", "৯৯৮"],
    answer: 1,
    explanation: "কোনো সংখ্যার আগের পূর্ণসংখ্যা পেতে ১ বিয়োগ করতে হয়। তাই ১,০০০ − ১ = ৯৯৯।",
    example: "৩০০-এর আগের পূর্ণসংখ্যা হলো ২৯৯।"
  },
  {
    id: "Math051",
    question: "৩, ৬, ৯, ১২, ১৫ — প্রথম ৫টি পদের যোগফল কত?",
    options: ["৪০", "৫০", "৩৫", "৪৫"],
    answer: 3,
    explanation: "৩ + ৬ + ৯ + ১২ + ১৫ = ৪৫।",
    example: "২ + ৪ + ৬ + ৮ = ২০।"
  },
  {
    id: "Math052",
    question: "৫, ১০, ১৫, ২০, ২৫ — পরের দুটি সংখ্যা কত?",
    options: ["৩০ ও ৩৫", "৩৫ ও ৪০", "২৮ ও ৩৩", "৩০ ও ৪০"],
    answer: 0,
    explanation: "প্রতিবার ৫ করে সংখ্যা বাড়ছে। তাই ২৫ + ৫ = ৩০ এবং ৩০ + ৫ = ৩৫।",
    example: "২, ৪, ৬, ৮ ধারাটির পরের দুটি সংখ্যা হলো ১০ ও ১২।"
  },
  {
    id: "Math053",
    question: "২ × ১০ + ৫ = কত?",
    options: ["২০", "২৫", "৩০", "১৫"],
    answer: 1,
    explanation: "প্রথমে গুণ করতে হয়। ২ × ১০ = ২০। এরপর ২০ + ৫ = ২৫।",
    example: "৩ × ৪ + ২ = ১২ + ২ = ১৪।"
  },
  {
    id: "Math054",
    question: "৪ × (৬ + ২) = কত?",
    options: ["২৬", "৩০", "৩২", "৩৬"],
    answer: 2,
    explanation: "প্রথমে বন্ধনীর কাজ করতে হয়। ৬ + ২ = ৮। এরপর ৪ × ৮ = ৩২।",
    example: "২ × (৩ + ৪) = ২ × ৭ = ১৪।"
  },
  {
    id: "Math055",
    question: "(২০ − ৮) ÷ ৩ = কত?",
    options: ["৬", "৩", "৫", "৪"],
    answer: 3,
    explanation: "প্রথমে বন্ধনীর কাজ করতে হয়। ২০ − ৮ = ১২। এরপর ১২ ÷ ৩ = ৪।",
    example: "(১৮ − ৬) ÷ ২ = ১২ ÷ ২ = ৬।"
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
