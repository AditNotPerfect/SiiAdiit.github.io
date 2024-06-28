


const quizData = [{
    question: "Sifat Adit kaya gimana nih?",
    a: "Kocak",
    b: "Sabar",
    c: "Pendiem",
    d: "Gajelas",
    correct: "d",
},
{
    question: "Adit suka cewek dari?",
    a: "Fisik",
    b: "Atittude",
    c: "Gaya",
    d: "Tobrut",
    correct: "b",
},
{
    question: "Minuman Favorit Adit?",
    a: "Kopi",
    b: "Susu",
    c: "Kawa kawa",
    d: "Air mineral",
    correct: "d",
},
{
    question: "Adit tidak suka sikap cewek. kecuali?",
    a: "Friendly",
    b: "Bawell",
    c: "Petakilan",
    d: "Berkata kasar",
    correct: "b",
},
{
    question: "Adit itu orangnya?",
    a: "Bodoh",
    b: "Jahat",
    c: "Ga asik",
    d: "Tidak diketahui",
    correct: "d",
}
];




const quiz =document.getElementById("quiz");
const countQuestion = document.getElementById("count-question");
const tottleNumberOfQuestion =document.getElementById("tol-num-que");
const questionNumber =document.getElementById("question-number");
const questionTitle = document.getElementById("question");
const answerLable =document.querySelectorAll(".answer-lable");
const nextQuestionbtn=document.getElementById("next-question-btn");
const allInputs =document.querySelectorAll("input[type='radio']");
const submitequiz = document.getElementById("submite");
const resultEl =document.getElementById("result");
const scoreEl =document.getElementById("score");

let currentQtn=0;
let answerd = 0;


const loadQuiz = ()=>{
    countQuestion.innerHTML=`${currentQtn +1}`;
    tottleNumberOfQuestion.innerHTML= quizData.length;
    questionNumber.innerHTML=`${currentQtn + 1}`;
    questionTitle.innerHTML=quizData[currentQtn].question;
    answerLable[0].innerHTML=quizData[currentQtn].a;
    answerLable[1].innerHTML=quizData[currentQtn].b;
    answerLable[2].innerHTML=quizData[currentQtn].c;
    answerLable[3].innerHTML=quizData[currentQtn].d;

    reset();

    if(currentQtn ==quizData.length-1){
        nextQuestionbtn.style.display="none";
        submitequiz.style.display="block";
    }

}
const reset =()=>{
    allInputs.forEach((allInputs)=>{
        allInputs.checked=false;
    })
}

nextQuestionbtn.addEventListener("click",()=>{
    let answer =getSelected();
    if(answer){
        if(answer===quizData[currentQtn].correct){
            answerd++;
        }
        currentQtn++;
        if(currentQtn<quizData.length){
            loadQuiz();
        }
    }
});

submitequiz.addEventListener("click", ()=>{
    let answer =getSelected();
    if(answer === quizData[currentQtn].correct){
        answerd++;
    };
    currentQtn++;
    if(getSelected()){
        quiz.style.display="none";
        resultEl.style.display="block";
        scoreEl.innerHTML=`Jawaban yang benar ${answerd} / ${quizData.length}`;
    }
})

const getSelected =()=>{
    let answer;
    allInputs.forEach((allInputs)=>{
        if(allInputs.checked){
          answer = allInputs.value;  
        }
    });
    return answer;
} 
loadQuiz();