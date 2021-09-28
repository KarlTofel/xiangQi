function moveMinister(el) {
    var NW = moveDiagonalyTwice(el.x, el.y, -1, -1, el.side);
    var NE = moveDiagonalyTwice(el.x, el.y, 1, -1, el.side);
    var SW = moveDiagonalyTwice(el.x, el.y, -1, 1, el.side);
    var SE = moveDiagonalyTwice(el.x, el.y, 1, 1, el.side);
    return [NW, NE, SW, SE]
}
function moveDiagonalyTwice(x, y, dirX, dirY, side) {
    if (movesThroughSpot(Number(x) + dirX, Number(y) + dirY)) {
        var el = changeIntoElement(Number(x) + 2 * dirX, Number(y) +  2 * dirY);
        if (eats(el.x, el.y) != 0 && el.side == side) {
            return el
        }
    }
}