//내코드
// const answerBtn = document.querySelector(".answerBtn");
// const result = document.querySelector(".result");
// const p1 = document.querySelector("#p1");
// const p2 = document.querySelector("#p2");

// const quizSubmit = () => {
//     const questionNum = document.getElementById("questionNum").value;
//     const answerNum = document.getElementById("answerNum").value;
//     const machine = Math.floor(Math.random() * questionNum) + 1;

//     if (questionNum <= 0 || answerNum <= 0 || questionNum < answerNum) {
//         return;
//     }
//     p1.innerText = `you chose :${answerNum} , the machine chose: ${machine}.`;
//     if (answerNum != machine) {
//         p2.innerText = "You lost!";
//     } else {
//         p2.innerText = "You won!";
//     }
//     result.classList.remove("hidden");
// };

// answerBtn.addEventListener("click", quizSubmit);

//노마드 코드
const guessForm = document.getElementById("js-guess");
const result = document.getElementById("js-result");
const maxNumber = document.getElementById("maxNumber");

function handleGuessSubmit(e) {
    e.preventDefault();
    const guessInput = guessForm.querySelector("input");
    if (guessInput.value === "" && maxNumber === "") {
        return;
    }
    const max = maxNumber.value;
    const random = Math.ceil(Math.random() * max);
    const userGuess = parseInt(guessInput.value, 10);
    const resultSpan = result.querySelector("span");
    resultSpan.innerHTML = `
        You chose: ${userGuess},
        the machine chose: ${random}.<br />
        <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
    `;
}

guessForm.addEventListener("submit", handleGuessSubmit);