const sentences = [
    "Do not do it in big January dog house camp don't you dare to scare me new cat death lonely Wolf I'm",
    "World crushed to you our life matters the most black white yellow brown red we are the same as always",
    "Big me is on riot in rage no good public service government is failing me so much love pissed life is worse",
    "I love every thing every one no enemies no problem in psychology they say patriarchy racism fascism islamism",
    "I'm not wrong I'm right I know how to go forward how to look up not side wise march to parliament the system femboy",
    "hello world"
];
let startTime = 0;
let finished = false;

const text = document.getElementById("text");
const input = document.getElementById("input");
const enterBtn = document.getElementById("enterBtn");
const restartBtn = document.getElementById("restartBtn");
const result = document.getElementById("result");

const randomIndex = Math.floor(Math.random()* sentences.length);
const randomSentence = sentences[randomIndex];


for (let i =0; i < randomSentence.length; i++) {
    const span = document.createElement("span");
    span.textContent = randomSentence[i];
    text.appendChild(span);

}

input.focus();

input.addEventListener("input", function() {
  
    if (finished === true) {
        return;
    }

    if (startTime === 0) {
        startTime = Date.now();
    }

    for (let i = 0; i < input.value.length; i++) {
        if (input.value[i] === randomSentence[i]) {
           text.children[i].style.color ="green";
        } else {
            text.children[i].style.color ="red";
        }
    }

    for (let i = input.value.length; i < randomSentence.length; i++) {
        text.children[i].style.color ="";
        
    }

    if (input.value.length === randomSentence.length){
        const endTime = Date.now();
        const timeTaken = endTime - startTime;

        const words = input.value.split(" ").length;
        const minutes = timeTaken / 60000;
        const wpm = words / minutes;

        let correct = 0;
        for (let i =0; i < randomSentence.length; i++){
            if (randomSentence[i] === input.value[i]) {
                correct = correct + 1;
            }
        }
        const accuracy = correct / randomSentence.length * 100;

        result.textContent = `${Math.round(wpm)} WPM ${Math.round(accuracy)}% accuracy`;

        finished = true;
        input.disabled = true;
    }

});

restartBtn.addEventListener("click", function(){
    input.value = "";
    location.reload();
});
