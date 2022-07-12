
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener("click", function() {

    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;

    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener("click", function() {
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener("dblclick", function() {
        toDoContainer.removeChild(paragraph);
    });

});

document.addEventListener("keypress", function(e) {

    // If enter button is pressed and the target is the inputField
    if(e.key === "Enter" && e.target.id === "inputField") {

        e.preventDefault();
        var paragraph = document.createElement("p");
        paragraph.classList.add("paragraph-styling");
        paragraph.innerText = inputField.value;
    
        toDoContainer.appendChild(paragraph);
        inputField.value = "";
    
        paragraph.addEventListener("click", function() {
            paragraph.style.textDecoration = "line-through";
        });
    
        paragraph.addEventListener("dblclick", function() {
            toDoContainer.removeChild(paragraph);
        });
    }

});