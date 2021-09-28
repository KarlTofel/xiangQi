// there is a whole lot of: if (turueStatement) { return true } else { return false }; I no longer do this

function getOptions(el) {
    // this function returns an array of every valid option into which the selected piece can move
    if (el.piece.char == "cannon") {
        return moveCannon(el)
    }
    if (el.piece.char == "chariot") {
        return moveChariot(el)
    }
    if (el.piece.char == "governor") {
        return moveGovernor(el)
    }
    if (el.piece.char == "guard") {
        return moveGuard(el)
    }
    if (el.piece.char == "horse") {
        return moveHorse(el)
    }
    if (el.piece.char == "minister") {
        return moveMinister(el)
    }
    if (el.piece.char == "pawn") {
        return movePawn(el)
    } else {
        console.warn("UNKNOWN PIECE   :    " + el)
    }
}
function inCheck(colour) {
    var governor = locateGovernor(colour);
    if (governor == "illegal") {
        console.log("!");
        return true
    } else if (isPawn(governor)) {
        console.log("!");
        return true
    } else if (axisIllegals(governor, 1) || axisIllegals(governor, -1)) {
        console.log("!");
        return true
    } else {
        return checkForHorse(governor)
    }
}
function locateGovernor(colour) {
    // since the governor can only move inside the fort, it only searches for him in 9 spots
    var y = findFort(colour);
    var x = [3, 4, 5];
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            var search = changeIntoElement(x[j], y[i]);
            if (search.piece.char == "governor") {
                return search
            }
        }
    }
    console.warn("GOVERNOR NOT FOUND");
    return "illegal"
}
function findFort(colour) {
    if (colour == "red") {
        return [7, 8, 9]
    } else {
        return [2, 1, 0]
    }
}
function isPawn(el) {
    if (eats(el.x + 1, el.y) == 2) {
        var temp = changeIntoElement(el.x + 1, el.y)
        if (temp.piece.char = "pawn") {
            console.log("!");
            return true
        }
    } else if (eats(el.x - 1, el.y) == 2) {
        var temp = changeIntoElement(el.x - 1, el.y)
        if (temp.piece.char = "pawn") {
            console.log("!");
            return true
        }
    } else {
        var dir = -1;
        if (el.piece.colour == "red") {
            dir = -1;
        }
        if (eats(el.x, el.y + dir) == 2) {
            var temp = changeIntoElement(el.x, el.y + dir)
            if (temp.piece.char = "pawn") {
                console.log("!");
                return true
            }
        }
    }
    return false
}
function axisIllegals(el, dir) {
    //checks if there it sees the oposing governor, or if there is a chariot or cannon

    // in xiangQi the governor is in check if it can see the other governor, and the cannon jumps over the first piece in it's way (the chariot is a rook)
    var a = el.y + dir;
    while (movesThroughSpot(el.x, a)) {
        a = a + dir;
    }
    if (a > 0 || a < 9) {
        if (eats(el.x, a) == 2) {
            var threat = changeIntoElement(el.x, a).piece.char;
            // is the governor staring directly at a governor or a chariot
            if (threat == "governor" || threat == "chariot") {
                console.log("!");
                return true
            }
        }
        a = a + dir;
        while (movesThroughSpot(el.x, a)) {
            a = a + dir;
        }
        if (a > 0 || a < 9) {
            if (eats(el.x, a) == 2) {
                var threat = changeIntoElement(el.x, a).piece.char;
                if (threat == "cannon") {
                    console.log("!");
                    return true
                }
            }
        }
    }
    var a = el.x + dir;
    while (movesThroughSpot(el.x, el.y)) {
        a = a + dir;
    }
    if (a > 0 || a < 9) {
        if (eats(a, el.y) == 2) {
            var threat = changeIntoElement(a, el.y).piece.char;
            if (threat == "chariot") {
                console.log("!");
                return true
            }
        }
        a = a + dir;
        while (movesThroughSpot(a, el.y)) {
            a = a + dir;
        }
        if (a > 0 || a < 9) {
            if (eats(a, el.y) == 2) {
                var threat = changeIntoElement(a, el.y).piece.char;
                if (threat == "cannon") {
                    console.log("!");
                    return true
                }
            }
        }
    }
    return false
}
function checkForHorse(el) {
    var threats = moveHorse(el);
    var i = threats.length;
    while (i > 0) {
        i--;
        var check = threats[i];
        if (check.piece.char == "horse" && check.piece.colour != turn) {
            console.log(check.piece);

            console.log("!");
            return true
        }
    }
    return false
}
function repetition() {
    // basiacaly checks if moves have been reapeted too many times
    // this was honestly just a bad interpretation of rules on my part
    if (savedMoves.length >= 9) {
        var a = savedMoves.length - 1;
        var b = a - 4;
        var first = equateData(savedMoves[a][0], savedMoves[b][0]);
        var second = equateData(savedMoves[a][1], savedMoves[b][1]);
        if (first && second) {
            console.log("!!!!!!!!!");
            var c = a - 8;
            var third = equateData(savedMoves[a][0], savedMoves[c][0]);
            var fourth = equateData(savedMoves[a][1], savedMoves[b][1]);
            if (third && fourth) {
                console.log("REPEATED THE MOVE TOO MMANY TIMES");
                return true
            }
        }
    }
    return false
}
function equateData(el1, el2) {
    return el1.x == el2.x && el1.y == el2.y && el1.piece.char == el2.piece.char && el1.piece.colour == el2.piece.colour
}