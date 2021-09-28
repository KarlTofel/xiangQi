function moveChariot(board, spot) {
    console.log(moveContiniusly(board, spot.x, spot.y, 1, 0));
    var a = moveContiniusly(board, spot.x, spot.y, 1, 0).concat(moveContiniusly(board, spot.x, spot.y, -1, 0));
    var b = moveContiniusly(board, spot.x, spot.y, 0, 1).concat(moveContiniusly(board, spot.x, spot.y, 0, -1));
    var c = a.concat(b);
    return c
}