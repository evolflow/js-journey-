let button = document.getElementById("btn");
let box = document.getElementById("box");

button.addEventListener("click", function() {
    box.classList.toggle("show");

    if (box.classList.contains("show")) {
        button.textContent = "Close box";
    } else {
        button.textContent = "Open box";
    }
});

    box.addEventListener("mouseover", function() {
        box.style.background = "orange";
    });

    box.addEventListener("mouseout", function() {
        box.style.background = "lightblue";
    
});

let colorButton = document.getElementById("colorBtn");

colorButton.addEventListener("click", function() {
    box.style.background = "green";
});