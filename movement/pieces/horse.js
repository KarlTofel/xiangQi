function moveHorse(el) {
    return moveForwardAndDiagonaly(el.x, el.y, 1).concat(moveForwardAndDiagonaly(el.x, el.y, -1))
}
function moveForwardAndDiagonaly(x, y, dir) {
    var moves = [];
    if (movesThroughSpot(x + dir, y)) {
        var newX = x + 2 * dir;
        if (eats(newX, y - 1) != 0) {
            moves.push(changeIntoElement(newX, y - 1));
        }
        if (eats(newX, y + 1) != 0) {
            moves.push(changeIntoElement(newX, y + 1));
        }
    }
    if (movesThroughSpot(x, y + dir)) {
        var y = y + 2 * dir;
        if (eats(x - 1, y) != 0) {
            moves.push(changeIntoElement(x - 1, y));
        }
        if (eats(x + 1, y) != 0) {
            moves.push(changeIntoElement(x + 1, y));
        }
    }
    return moves
}