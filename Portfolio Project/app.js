const text = document.querySelectorAll(".thePaths");

for (let index = 0; index < text.length; index++) {
    console.log(`text number ${index} length is ${text[index].getTotalLength()}`);
    
}

const lastWord = document.querySelector("#seventeenth");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () =>{
    animation.style = "transition: all 1s ease; opacity: 0; pointer-events: none;";
})