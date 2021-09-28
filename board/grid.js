// this is how the starting position of the board should look like: https://i.brainking.com/rules/xiangqi/01.gif
function generateInitalBoard() {
    const yAxis = new Array(10).fill([])
    const board = yAxis.map((element, y) => {
        const xAxis = new Array(9).fill(null);
        return xAxis.map((el, x) => {
            return boardSpot(x, y);
        })
    })
    // this has now created an array where { x: 5, y: 0 } is array[0][5]

    return setGameBoard(board);
    // with this we have changed the spot.piece properties and put them into starting position
}

function setGameBoard(board) {
    const placedPieces = board;
    setFirstRow(placedPieces[0]);
    setFirstRow(placedPieces[9]);
    setThirdRow(placedPieces[2]);
    setThirdRow(placedPieces[7]);
    setFourthRow(placedPieces[3]);
    setFourthRow(placedPieces[6]);
    return placedPieces;
}
function setPiece(field, name) {
    field.piece.colour = field.side;
    field.piece.name = name;
}
function setPair(row, number, name) {
    // settting the field in pairs, as the position of pieces on the two sides is mirrored
    var paired = 8 - number;
    setPiece(row[number], name);
    setPiece(row[paired], name);
}
function setFirstRow(row) {
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