function undoButton() {
    var undoButton = document.createElement("button");
    undoButton.addEventListener("click", () => {
        undo();
        turn = changeColour(turn);
    })
    undoButton.innerHTML = "UNDO";
    document.body.appendChild(undoButton);
}
undoButton();