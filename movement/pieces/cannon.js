function moveCannon(el) {
    return positionCannon(el.x, el.y, 1).concat(positionCannon(el.x, el.y, -1))
}
function positionCannon(x, y, dir) {
    var move = [];
    var a = x + dir;
    while (movesThroughSpot(a, y)) {
        move.push(changeIntoElement(a, y));
        a = a + dir;
    }
    if (a > 0 || a < 8) {
        a = a + dir;
        while (movesThroughSpot(a, y)) {
            a = a + dir;
        }
        if (eats(a, y) == 2) {
            move.push(changeIntoElement(a, y));
        }
    }
    var b = y + dir;
    while (movesThroughSpot(x, b)) {
        move.push(changeIntoElement(x, b));
        b = b + dir;
    }
    if (b > 0 || b < 9) {
        b = b + dir;
        while (movesThroughSpot(x, b)) {
            b = b + dir;
        }
        if (eats(x, b) == 2) {
            move.push(changeIntoElement(x, b));
        }
    }
    return move
}