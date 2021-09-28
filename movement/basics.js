// this entire page is a confusing mess, but it works
function eats(x, y) {
    if (x < 0 || x > 8 || y < 0 || y > 9) {
        return 0    //doesn't exist  can't move here
    }
    var el = changeIntoElement(x, y);
    if (el.piece.colour == turn) {
        return 0    //same colour piece  can't move here
    } else if (el.piece.colour == "none") {
        return 1    //empty space
    } else {
        return 2    //eats
    }
}
function moveOneSpot(x, y) {
    var temp = eats(x, y);
    if (temp != 0) {
        var el = changeIntoElement(x, y);
        return el
    } else {
        return null
    }
}
function moveContiniusly(x, y, dirX, dirY) {
    var move = [];
    var newX = Number(x) + dirX;
    var newY = Number(y) + dirY;
    var temp = eats(newX, newY);
    while (temp != 0) {
        move.push(changeIntoElement(newX, newY));
        if (temp == 2) {
            return move
        }
        newX = Number(newX) + dirX;
        newY = Number(newY) + dirY;
        temp = eats(newX, newY);
    }
    return move
}
function movesThroughSpot(x, y) {
    return eats(x, y) == 1
}
function inFort(x, y) {
    if (x >= 3 && x <= 5) {
        if (turn == "red") {
            return y >= 7
        } else {
            return y <= 2
        }
    } else {
        return false
    }
}
function moveInFort(x, y, dirX, dirY) {
    var x = x + dirX;
    var y = y + dirY;
    if (eats(x, y) != 0 && inFort(x, y)) {
        return changeIntoElement(x, y)
    } else {
        return null
    }
}