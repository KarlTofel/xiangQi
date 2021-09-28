console.log('Genrate board test', 1);
let tBoard = generateEmptyBoard(1, 2);
let correctresult = [
    [
        boardSpot(0, 0, black),
    ],
    [
        boardSpot(0, 1, red),
    ],
]
if (JSON.stringify(tBoard) == JSON.stringify(correctresult)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('Place piece test', 1);
correctresult = [
    [
        boardSpot(0, 0, black, black, 'test'),
    ],
    [
        boardSpot(0, 1, red),
    ],
]
setPiece(tBoard[0][0], 'test');
if (JSON.stringify(tBoard) == JSON.stringify(correctresult)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('Move piece test');
movePiece(tBoard, 0, 0, 0, 1);
correctresult = [
    [
        boardSpot(0, 0, black),
    ],
    [
        boardSpot(0, 1, red, black, 'test'),
    ],
]
if (JSON.stringify(tBoard) == JSON.stringify(correctresult)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
    console.log(tBoard[0][0].piece);
    console.log(tBoard[1][0].piece);

    console.log(correctresult[0][0].piece);
    console.log(correctresult[1][0].piece);
}

console.log('can Move test', 1);
// cheking if it can move into a coordinate that's off board
if (!canMove(tBoard, 0, 1, 0, 3)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('can Move test', 2);
// checking if it can move into negative coordinate
if (!canMove(tBoard, 0, 1, -1, 0)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('can Move test', 3);
// cheking if it can move onto the board
if (canMove(tBoard, 0, 1, 0, 0)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('can Move test', 4);
// cheking if it can move onto the space of another piece of the same colour
tBoard = [
    [
        boardSpot(0, 0, black, black, 'test'),
    ],
    [
        boardSpot(0, 1, red, black, 'tst'),
    ],
]
if (!canMove(tBoard, 0, 1, 0, 0)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('can Move test', 5);
// cheking if it can move onto the space of another piece of a different colour
tBoard = [
    [
        boardSpot(0, 0, black, black, 'test'),
    ],
    [
        boardSpot(0, 1, red, red, 'tst'),
    ],
]
if (canMove(tBoard, 0, 1, 0, 0)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('continous movement test', 1);
// cheking if it can generate the correct set of available moves for moving straight to the end of board
tBoard = generateEmptyBoard(5, 6);
setPiece(tBoard[5][2], 'test')
correctresult = [
    boardSpot(2, 4, red),
    boardSpot(2, 3, red),
    boardSpot(2, 2, black),
    boardSpot(2, 1, black),
    boardSpot(2, 0, black),
]
if (JSON.stringify(moveContiniusly(tBoard, 2, 5, 0, -1)) == JSON.stringify(correctresult)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('continous movement test', 2);
// cheking if it can generate the correct set of available moves for moving straight until it encounters an enemy piece and no further
setPiece(tBoard[1][2], 'test');
correctresult = [
    boardSpot(2, 4, red),
    boardSpot(2, 3, red),
    boardSpot(2, 2, black),
    boardSpot(2, 1, black, black, 'test'),
]
if (JSON.stringify(moveContiniusly(tBoard, 2, 5, 0, -1)) == JSON.stringify(correctresult)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('continous movement test', 3);
// cheking if it can generate the correct set of available moves for moving straight until it encounters a piece of it's colour
tBoard[1][2].piece.colour = red;
correctresult = [
    boardSpot(2, 4, red),
    boardSpot(2, 3, red),
    boardSpot(2, 2, black),
]
if (JSON.stringify(moveContiniusly(tBoard, 2, 5, 0, -1)) == JSON.stringify(correctresult)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('in fort test', 1);
// cheking if it can tell when it's within a 9 spot large fort at the ceter of the x axis and at the top and bottom of the y
tBoard = generateEmptyBoard(9, 10); // a standard xiangqi playing board
if (inFort(tBoard, black, 3, 0) && inFort(tBoard, black, 4, 1) && inFort(tBoard, black, 5, 2)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('in fort test', 2);
// cheking for red
if (inFort(tBoard, red, 3, 9) && inFort(tBoard, red, 4, 8) && inFort(tBoard, red, 5, 7)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('in fort test', 3);
// cheking if it is outside of red fort
if (!inFort(tBoard, red, 4, 1)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('in fort test', 3);
// cheking if it is outside of red fort (it is in black fort)
if (!inFort(tBoard, red, 4, 1)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('in fort test', 4);
// cheking if it is outside of red fort (it is left of it)
if (!inFort(tBoard, red, 0, 8)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('move in fort test', 1);
// can piece move inside the fort one spot to the right (+1 to x, +0 to y)
setPiece(tBoard[7][5], 'test'); // top left of red fort
correctresult = null;
if (moveInFort(tBoard, 5, 7, 1, 0) == correctresult) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('move in fort test', 2);
// can piece move inside the fort one spot up (+0 to x, -1 to y)
if (moveInFort(tBoard, 5, 7, 0, -1) == correctresult) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('move in fort test', 3);
// can piece move inside the fort one spot to the left (-1 to x, +0 to y)
correctresult = tBoard[7][4];
if (moveInFort(tBoard, 5, 7, -1, 0) == correctresult) {
    console.log('   PASS');
} else {
    console.log(moveInFort(tBoard, 5, 7, -1, 0));
    console.warn('   FAIL');
}
