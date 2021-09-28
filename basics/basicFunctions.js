function changeColour(colour) {
    if (colour == black) {
        return red;
    } else {
        return black;
    }
}
function getBoardSpot(board, x, y) {
    return board[y][x]
}