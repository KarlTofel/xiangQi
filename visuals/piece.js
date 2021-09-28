function placePiece(el, pieceCharacters) {
    const name = getCharacter(el.piece.name, el.piece.colour, pieceCharacters)
    if (name == "none") {
        removePiece(el);
    } else {
        upper.beginPath();
        upper.arc(el.x * 50 + 25, el.y * 50 + 25, 20, 0, 2 * Math.PI);
        upper.strokeStyle = '#003300';
        upper.fillStyle = "white";
        upper.fill();
        upper.font = "20px Arial";
        upper.fillStyle = el.piece.colour;
        upper.fillText(name, el.x * 50 + 15, el.y * 50 + 32);
        upper.stroke();
    }
}
function removePiece(start) {
    upper.beginPath();
    upper.clearRect(start.x * 50, start.y * 50, 50, 50);
}
function getCharacter(name, colour, pieceCharacters) {
    const matchingName = pieceCharacters.names.indexOf(name);
    if (colour == black) {
        return pieceCharacters.black[matchingName];
    } else {
        return pieceCharacters.red[matchingName];
    }
}
function displayStart(arr, pieceCharacters) {
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 9; j++) {
            placePiece(arr[i][j], pieceCharacters);
        }
    }
}