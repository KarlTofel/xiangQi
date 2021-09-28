const red = 'red';
const black = 'black';
const none = 'none';

const xy = (x, y) => {
    return {
        x,
        y,
    }
}

const pieceCharacters = {
    // in xiangqi pieces on the different sides have a different characters, despite having the same rules
    // this three arrays will mainly be used in the visual part
    black: [
        "卒",
        "象",
        "砲",
        "士",
        "將",
        "車",
        "馬",
        none,
    ],
    red: [
        "兵",
        "相",
        "炮",
        "仕",
        "帥",
        "俥",
        "傌",
        none,
    ],
    names: [
        "pawn",
        "minister",
        "cannon",
        "guard",
        "governor",
        "chariot",
        "horse",
        none,
    ],
}

// this class is one spot on the gaming board (includes what the piece is if any, the colour of the piece, which half of the board it is)
const boardSpot = (x, y, colour = none, name = none) => {
    function whichSide(y) {
        if (y < 5) {
            return black;
        } else {
            return red;
        }
    }
    return {
        x,
        y,
        side: whichSide(y),
        piece: {
            colour,
            name,
        },
    }
}