console.log('pawn test', 1);
let tBoard2 = setGameBoard(9, 10);
let correctresult2 = [
    tBoard2[5][4],
]
if (JSON.stringify(movePawn(tBoard2, tBoard2[6][4])) == JSON.stringify(correctresult2)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('pawn test', 2);
let tBoard3 = movePiece(tBoard2, 4, 6, 4, 4); // moved pawn to other side of river
correctresult2 = [
    tBoard2[3][4],
    tBoard2[4][5],
    tBoard2[4][3],
]
if (JSON.stringify(movePawn(tBoard3, tBoard2[4][4])) == JSON.stringify(correctresult2)) {
    console.log('   PASS');
} else {
    console.warn('   FAIL');
}

console.log('chariot test', 1);
// chariot is your standard chess rook
correctresult2 = [
    tBoard2[8][0],
    tBoard2[7][0],
]
if (JSON.stringify(moveChariot(tBoard3, tBoard2[0][9])) == JSON.stringify(correctresult2)) {
    console.log('   PASS');
} else {
    console.log(moveChariot(tBoard3, tBoard2[0][9]));
    console.warn('   FAIL');
}