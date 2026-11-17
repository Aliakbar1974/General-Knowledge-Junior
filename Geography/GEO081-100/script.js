
 // ============================================================
 // GENERAL KNOWLEDGE Junior — MCQ BANK PART 05
 // Topic: Geography | 20 Questions
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
    id: "GEO081",
    question: "পৃথিবীর সবচেয়ে বাইরের কঠিন স্তরকে কী বলা হয়?",
    options: ["ম্যান্টল", "ভূত্বক (Crust)", "কেন্দ্রমণ্ডল", "অ্যাস্থেনোস্ফিয়ার"],
    answer: 1,
    explanation: "পৃথিবীর সবচেয়ে বাইরের কঠিন ও শিলাময় স্তরকে ভূত্বক বা Crust বলা হয়। মহাদেশ ও মহাসাগরের তলদেশ এই স্তরের অংশ।",
    example: "পর্বত, সমভূমি ও সমুদ্রতল পৃথিবীর ভূত্বকের অংশ।"
  },
  {
    id: "GEO082",
    question: "পৃথিবীর প্রধান তিনটি অভ্যন্তরীণ স্তরের নাম কী?",
    options: [
      "ভূত্বক, বায়ুমণ্ডল ও জলমণ্ডল",
      "ভূত্বক, মেঘমণ্ডল ও কেন্দ্রমণ্ডল",
      "ম্যান্টল, বায়ুমণ্ডল ও কেন্দ্রমণ্ডল",
      "ভূত্বক, ম্যান্টল ও কেন্দ্রমণ্ডল"
    ],
    answer: 3,
    explanation: "পৃথিবীর অভ্যন্তরীণ গঠন প্রধানত তিনটি স্তরে বিভক্ত—ভূত্বক (Crust), ম্যান্টল (Mantle) এবং কেন্দ্রমণ্ডল (Core)।",
    example: "ভূত্বকের নিচে ম্যান্টল এবং পৃথিবীর সবচেয়ে ভেতরে কেন্দ্রমণ্ডল অবস্থিত।"
  },
  {
    id: "GEO083",
    question: "ভূমিকম্পের উৎপত্তিস্থলের ঠিক ওপরের ভূ-পৃষ্ঠের স্থানকে কী বলা হয়?",
    options: ["উপকেন্দ্র (Epicentre)", "কেন্দ্রমণ্ডল", "ম্যান্টল", "ভূত্বক"],
    answer: 0,
    explanation: "ভূগর্ভে যে স্থানে ভূমিকম্পের উৎপত্তি হয় তাকে ভূমিকম্পের কেন্দ্র বা Focus (Hypocentre) বলে। সেই স্থানের ঠিক ওপরের ভূ-পৃষ্ঠের বিন্দুকে উপকেন্দ্র বা Epicentre বলা হয়।",
    example: "ভূমিকম্পের উপকেন্দ্রের কাছাকাছি এলাকায় সাধারণত কম্পন বেশি অনুভূত হতে পারে।"
  },
  {
    id: "GEO084",
    question: "আগ্নেয়গিরি থেকে ভূ-পৃষ্ঠে বের হওয়া গলিত শিলাকে কী বলা হয়?",
    options: ["ম্যাগমা", "পলি", "লাভা", "গ্রানাইট"],
    answer: 2,
    explanation: "ভূগর্ভের গলিত শিলাকে ম্যাগমা (Magma) বলা হয়। এই ম্যাগমা আগ্নেয়গিরির মাধ্যমে ভূ-পৃষ্ঠে বের হলে তাকে লাভা (Lava) বলা হয়।",
    example: "আগ্নেয়গিরির অগ্ন্যুৎপাতের সময় লাভা ভূ-পৃষ্ঠে প্রবাহিত হতে পারে।"
  },
  {
    id: "GEO085",
    question: "পৃথিবীর বায়ুমণ্ডলের সবচেয়ে নিচের স্তর কোনটি?",
    options: ["স্ট্র্যাটোস্ফিয়ার", "ট্রপোস্ফিয়ার", "মেসোস্ফিয়ার", "থার্মোস্ফিয়ার"],
    answer: 1,
    explanation: "ট্রপোস্ফিয়ার (Troposphere) হলো পৃথিবীর বায়ুমণ্ডলের সবচেয়ে নিচের স্তর। আবহাওয়ার অধিকাংশ ঘটনা এই স্তরেই ঘটে।",
    example: "বৃষ্টি, মেঘ, ঝড় ও বজ্রপাত সাধারণত ট্রপোস্ফিয়ারে সংঘটিত হয়।"
  },
  {
    id: "GEO086",
    question: "যে প্রক্রিয়ায় তরল পানি জলীয়বাষ্পে পরিণত হয়ে বায়ুমণ্ডলে মিশে যায় তাকে কী বলে?",
    options: ["ঘনীভবন", "বৃষ্টিপাত", "প্রবাহ", "বাষ্পীভবন"],
    answer: 3,
    explanation: "সূর্যের তাপের প্রভাবে নদী, সমুদ্র, হ্রদ ও অন্যান্য জলাশয়ের পানি তরল অবস্থা থেকে জলীয়বাষ্পে পরিণত হয়ে বায়ুমণ্ডলে মিশে যাওয়ার প্রক্রিয়াকে বাষ্পীভবন (Evaporation) বলে।",
    example: "সূর্যের তাপে পুকুরের পানি ধীরে ধীরে বাষ্পীভূত হয়।"
  },
  {
    id: "GEO087",
    question: "জলীয়বাষ্প ঠান্ডা হয়ে পানির ক্ষুদ্র কণায় পরিণত হওয়ার প্রক্রিয়াকে কী বলে?",
    options: ["বাষ্পীভবন", "বৃষ্টিপাত", "ঘনীভবন", "অনুপ্রবেশ"],
    answer: 2,
    explanation: "জলীয়বাষ্প ঠান্ডা হয়ে ক্ষুদ্র পানির কণায় পরিণত হওয়ার প্রক্রিয়াকে ঘনীভবন (Condensation) বলে। বায়ুমণ্ডলে মেঘ গঠনের ক্ষেত্রে এই প্রক্রিয়া গুরুত্বপূর্ণ।",
    example: "ঠান্ডা পানির গ্লাসের বাইরের পৃষ্ঠে পানির ফোঁটা জমা ঘনীভবনের একটি পরিচিত উদাহরণ।"
  },
  {
    id: "GEO088",
    question: "মেঘ থেকে বৃষ্টি, তুষার বা শিলারূপে পানি পৃথিবীর পৃষ্ঠে নেমে আসার প্রক্রিয়াকে কী বলে?",
    options: ["বৃষ্টিপাত (Precipitation)", "বাষ্পীভবন", "ঘনীভবন", "প্রস্বেদন"],
    answer: 0,
    explanation: "মেঘ থেকে বৃষ্টি, তুষার বা শিলাবৃষ্টির মাধ্যমে পানি পৃথিবীর পৃষ্ঠে নেমে আসার প্রক্রিয়াকে বৃষ্টিপাত বা Precipitation বলে।",
    example: "বর্ষাকালে বাংলাদেশে প্রচুর বৃষ্টিপাত হয়।"
  },
  {
    id: "GEO089",
    question: "নদীর পানি সাধারণত কোন দিকে প্রবাহিত হয়?",
    options: [
      "নিম্নভূমি থেকে উচ্চভূমির দিকে",
      "দক্ষিণ থেকে উত্তরের দিকে",
      "পশ্চিম থেকে পূর্বের দিকে",
      "উচ্চভূমি থেকে নিম্নভূমির দিকে"
    ],
    answer: 3,
    explanation: "মাধ্যাকর্ষণ শক্তির প্রভাবে নদীর পানি সাধারণত উচ্চভূমি থেকে নিম্নভূমির দিকে প্রবাহিত হয়। তবে নদীর গতিপথ সব সময় উত্তর, দক্ষিণ, পূর্ব বা পশ্চিমমুখী হয় না।",
    example: "বাংলাদেশের অধিকাংশ বড় নদী উজান থেকে ভাটির দিকে প্রবাহিত হয়ে বঙ্গোপসাগরে পতিত হয়েছে।"
  },
  {
    id: "GEO090",
    question: "নদী যখন তার মোহনায় পলি জমা করে নতুন ভূমি তৈরি করে, সেই ভূমিকে কী বলা হয়?",
    options: ["মালভূমি", "ব-দ্বীপ (Delta)", "মরুভূমি", "হিমবাহ"],
    answer: 1,
    explanation: "নদী মোহনায় প্রবাহের গতি কমে গেলে পলি সঞ্চিত হয়ে যে নতুন ভূমি গঠন করে তাকে ব-দ্বীপ বা Delta বলে। সাধারণত নদী সাগর, সমুদ্র বা হ্রদে পতিত হওয়ার সময় ব-দ্বীপ গঠিত হতে পারে।",
    example: "গঙ্গা-ব্রহ্মপুত্র-মেঘনা নদীব্যবস্থার পলি দিয়ে গঠিত হয়েছে বিশ্বের বৃহত্তম ব-দ্বীপ।"
  },
  {
    id: "GEO091",
    question: "পৃথিবীর আহ্নিক গতির ফলে কোন প্রাকৃতিক ঘটনা ঘটে?",
    options: ["ঋতু পরিবর্তন", "জোয়ার-ভাটা", "দিন ও রাতের আবর্তন", "বছরের দৈর্ঘ্য নির্ধারণ"],
    answer: 2,
    explanation: "পৃথিবী নিজ অক্ষের ওপর পশ্চিম থেকে পূর্ব দিকে আবর্তন করে। এই আবর্তন বা আহ্নিক গতির ফলে পৃথিবীর বিভিন্ন স্থানে পর্যায়ক্রমে দিন ও রাত হয়।",
    example: "বাংলাদেশে যখন দিন থাকে, পৃথিবীর বিপরীত পাশে অনেক স্থানে তখন রাত থাকে।"
  },
  {
    id: "GEO092",
    question: "পৃথিবীর বার্ষিক গতি ও অক্ষের হেলানো অবস্থানের সম্মিলিত প্রভাবে প্রধানত কোন পরিবর্তন ঘটে?",
    options: ["ঋতু পরিবর্তন", "দিন ও রাতের আবর্তন", "জোয়ার-ভাটা", "ভূমিকম্প"],
    answer: 0,
    explanation: "পৃথিবীর অক্ষ কক্ষপথের লম্বের সঙ্গে প্রায় ২৩.৪° কোণে হেলে আছে। এই হেলানো অবস্থান বজায় রেখে পৃথিবী সূর্যকে প্রদক্ষিণ করার ফলে বছরের বিভিন্ন সময়ে পৃথিবীর বিভিন্ন স্থানে সূর্যালোকের প্রাপ্তি ও দিনের দৈর্ঘ্যে পরিবর্তন ঘটে। এর ফলেই ঋতু পরিবর্তন হয়।",
    example: "বাংলাদেশে গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত ও বসন্ত—এই ছয়টি ঋতু দেখা যায়।"
  },
  {
    id: "GEO093",
    question: "অক্ষাংশ ও দ্রাঘিমাংশের মধ্যে প্রধান পার্থক্য কী?",
    options: [
      "অক্ষাংশ সময় এবং দ্রাঘিমাংশ বৃষ্টিপাত নির্ধারণ করে",
      "অক্ষাংশ নিরক্ষরেখা থেকে উত্তর বা দক্ষিণের কৌণিক দূরত্ব এবং দ্রাঘিমাংশ প্রধান মধ্যরেখা থেকে পূর্ব বা পশ্চিমের কৌণিক দূরত্ব নির্দেশ করে",
      "অক্ষাংশ সমুদ্রের গভীরতা এবং দ্রাঘিমাংশ পাহাড়ের উচ্চতা নির্দেশ করে",
      "অক্ষাংশ ও দ্রাঘিমাংশ একই বিষয়"
    ],
    answer: 1,
    explanation: "অক্ষাংশ নিরক্ষরেখা থেকে কোনো স্থানের উত্তর বা দক্ষিণের কৌণিক দূরত্ব নির্দেশ করে। অন্যদিকে, দ্রাঘিমাংশ প্রধান মধ্যরেখা থেকে কোনো স্থানের পূর্ব বা পশ্চিমের কৌণিক দূরত্ব নির্দেশ করে।",
    example: "ঢাকার অবস্থান প্রায় ২৩.৮° উত্তর অক্ষাংশ ও ৯০.৪° পূর্ব দ্রাঘিমাংশে।"
  },
  {
    id: "GEO094",
    question: "প্রধান মধ্যরেখা বা Prime Meridian কত ডিগ্রি দ্রাঘিমাংশে অবস্থিত?",
    options: ["৯০° পূর্ব", "১৮০°", "০°", "৯০° পশ্চিম"],
    answer: 2,
    explanation: "প্রধান মধ্যরেখা বা Prime Meridian হলো ০° দ্রাঘিমারেখা। এটি পৃথিবীর পূর্ব ও পশ্চিম দ্রাঘিমাংশ পরিমাপের ভিত্তি হিসেবে ব্যবহৃত হয়।",
    example: "০° দ্রাঘিমারেখা থেকে পূর্ব দিকে পূর্ব দ্রাঘিমা এবং পশ্চিম দিকে পশ্চিম দ্রাঘিমা গণনা করা হয়।"
  },
  {
    id: "GEO095",
    question: "প্রধান মধ্যরেখা কোন বিখ্যাত স্থানের মধ্য দিয়ে গেছে?",
    options: ["নিউইয়র্ক", "টোকিও", "ঢাকা", "গ্রিনিচ"],
    answer: 3,
    explanation: "প্রধান মধ্যরেখা যুক্তরাজ্যের লন্ডনের কাছে অবস্থিত গ্রিনিচের (Greenwich) রয়্যাল অবজারভেটরির মধ্য দিয়ে গেছে। এ কারণে একে গ্রিনিচ মধ্যরেখাও বলা হয়।",
    example: "গ্রিনিচ মধ্যরেখাকে ভিত্তি করে ঐতিহাসিকভাবে গ্রিনিচ মান সময় (GMT) নির্ধারণ করা হয়েছে।"
  },
  {
    id: "GEO096",
    question: "কর্কটক্রান্তি রেখা কত ডিগ্রি উত্তর অক্ষাংশে অবস্থিত?",
    options: ["২৩.৫° উত্তর", "২৩.৫° দক্ষিণ", "৬৬.৫° উত্তর", "০°"],
    answer: 0,
    explanation: "কর্কটক্রান্তি রেখা (Tropic of Cancer) নিরক্ষরেখার প্রায় ২৩.৫° উত্তরে অবস্থিত। এর অক্ষাংশ বর্তমানে প্রায় ২৩°২৬′ উত্তর।",
    example: "কর্কটক্রান্তি রেখা বাংলাদেশের মধ্যভাগের ওপর দিয়ে অতিক্রম করেছে।"
  },
  {
    id: "GEO097",
    question: "মকরক্রান্তি রেখা কত ডিগ্রি দক্ষিণ অক্ষাংশে অবস্থিত?",
    options: ["২৩.৫° উত্তর", "২৩.৫° দক্ষিণ", "৬৬.৫° দক্ষিণ", "০°"],
    answer: 1,
    explanation: "মকরক্রান্তি রেখা (Tropic of Capricorn) নিরক্ষরেখার প্রায় ২৩.৫° দক্ষিণে অবস্থিত। এর অক্ষাংশ বর্তমানে প্রায় ২৩°২৬′ দক্ষিণ।",
    example: "অস্ট্রেলিয়ার মধ্যভাগের কাছ দিয়ে মকরক্রান্তি রেখা অতিক্রম করেছে।"
  },
  {
    id: "GEO098",
    question: "উত্তর মেরুবৃত্ত কত ডিগ্রি উত্তর অক্ষাংশে অবস্থিত?",
    options: ["২৩.৫° উত্তর", "৯০° উত্তর", "৬৬.৫° দক্ষিণ", "৬৬.৫° উত্তর"],
    answer: 3,
    explanation: "উত্তর মেরুবৃত্ত বা Arctic Circle বর্তমানে প্রায় ৬৬.৫° উত্তর অক্ষাংশে অবস্থিত। এর অক্ষাংশ প্রায় ৬৬°৩৪′ উত্তর। এর অবস্থান পৃথিবীর অক্ষের হেলানো অবস্থানের সঙ্গে সম্পর্কিত।",
    example: "উত্তর মেরুবৃত্তের উত্তরের কিছু অঞ্চলে গ্রীষ্মকালে মধ্যরাতেও সূর্য দেখা যায়।"
  },
  {
    id: "GEO099",
    question: "দক্ষিণ মেরুবৃত্ত কত ডিগ্রি দক্ষিণ অক্ষাংশে অবস্থিত?",
    options: ["৬৬.৫° উত্তর", "২৩.৫° দক্ষিণ", "৬৬.৫° দক্ষিণ", "৯০° দক্ষিণ"],
    answer: 2,
    explanation: "দক্ষিণ মেরুবৃত্ত বা Antarctic Circle বর্তমানে প্রায় ৬৬.৫° দক্ষিণ অক্ষাংশে অবস্থিত। এর অক্ষাংশ প্রায় ৬৬°৩৪′ দক্ষিণ।",
    example: "দক্ষিণ মেরুবৃত্তের দক্ষিণে অবস্থিত অ্যান্টার্কটিকার কিছু অঞ্চলে গ্রীষ্মকালে দীর্ঘ সময় সূর্য অস্ত যায় না।"
  },
  {
    id: "GEO100",
    question: "দুটি স্থানের মধ্যে স্থানীয় সময়ের পার্থক্য নির্ধারণে কোন ভৌগোলিক ধারণাটি বিশেষভাবে গুরুত্বপূর্ণ?",
    options: ["দ্রাঘিমাংশ", "অক্ষাংশ", "উচ্চতা", "ভূমির ঢাল"],
    answer: 0,
    explanation: "দ্রাঘিমাংশের পার্থক্যের কারণে বিভিন্ন স্থানের স্থানীয় সময়ের পার্থক্য হয়। পৃথিবী প্রায় ২৪ ঘণ্টায় ৩৬০° আবর্তন করে। তাই প্রতি ১৫° দ্রাঘিমাংশের পার্থক্যে প্রায় ১ ঘণ্টা এবং প্রতি ১° দ্রাঘিমাংশের পার্থক্যে প্রায় ৪ মিনিট সময়ের পার্থক্য হয়।",
    example: "বাংলাদেশের মান সময় (BST) UTC বা সমন্বিত বিশ্ব সময়ের চেয়ে ৬ ঘণ্টা এগিয়ে।"
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
