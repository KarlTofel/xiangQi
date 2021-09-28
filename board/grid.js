function generateRow(data) {
    var row = [];
    for (i = 0; i < 9; i++) {
        // should have been done with with an established class: const spotOnField = (x, y, side, piece, colour, character) => { return { x, y,  side, piece, colour, character } }
        row.push({x: i, y: data, side: setSide(data), piece: {colour: "none", char: "none"}});
    }
    // should have been: row.map(function(element, index) { spotOnField(index, data, 'none', 'none') } )
    return row
}
function generateFields() {
    var field = [];
    for (j = 0; j < 10; j++) {
        field.push(generateRow(j));
    }
    return field
}

// should not have been using global variables
var fields = generateFields();

function setGameBoard() {
    setFirstRow(fields[0]);
    setFirstRow(fields[9]);
    setThirdRow(fields[2]);
    setThirdRow(fields[7]);
    setFourthRow(fields[3]);
    setFourthRow(fields[6]);
}
function setPiece(field, char) {
    field.piece.colour = field.side;
    field.piece.char = char;
}
function setPair(row, number, char) {
    // settting the field in pairs, as the position of pieces on the two sides is mirrored
    var paired = 8 - number;
    setPiece(row[number], char);
    setPiece(row[paired], char);
}
function setFirstRow(row) {
    // char is a badly named property (name would be better)
    setPair(row, 0, "chariot");
    setPair(row, 1, "horse");
    setPair(row, 2, "minister");
    setPair(row, 3, "guard");
    setPiece(row[4], "governor");
}
function setThirdRow(row) {
    setPair(row, 1, "cannon");
}
function setFourthRow(row) {
    setPair(row, 0, "pawn");
    setPair(row, 2, "pawn");
    setPiece(row[4], "pawn")
}
setGameBoard();