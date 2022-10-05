const answerBtn = document.querySelector(".answerBtn");
const result = document.querySelector(".result");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");


const quizSubmit = (event) => {
    const questionNum = document.getElementById("questionNum").value;
    const answerNum = document.getElementById("answerNum").value;
    const machine = Math.floor(Math.random() * questionNum)+1;
    
    if (
    questionNum <= 0 ||
    answerNum <= 0 ||
    questionNum < answerNum
    ) {
    return;
    }
    p1.innerText = `you chose :${answerNum} , the machine chose:${machine}`;
    if (answerNum != machine) {
        p2.innerText = "You lost!";
    } else {
        p2.innerText = "You won!";
    }
    result.classList.remove("hidden");
};

answerBtn.addEventListener("click", quizSubmit);
