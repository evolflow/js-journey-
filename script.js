let colors = [
  "#ff6b6b",
  "#6bc5ff",
  "#6bff95",
  "#ffd86b",
  "#c96bff"
];

let phrases = [
    "Consistency beats talent",
    "Small steps every day",
    "Don't give up",
    "Progress takes time"
];

let button = document.getElementById("btn");
let text = document.getElementById("text");

button.onclick = function(){
    let random = Math.floor(Math.random() * phrases.length);
    text.innerText = phrases[random];
    text.classList.remove("show");

    setTimeout(function(){
        text.classList.add("show");
    },10);
    
    let randomColor = Math.floor(Math.random() * colors.length);

    document.body.style.background = colors[randomColor];
};

