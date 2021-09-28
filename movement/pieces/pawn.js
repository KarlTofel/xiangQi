function movePawn(board, spot) {
    // pawn can only move forward
    // pawn can move left and right once it gets to the other side of the river
    let dir = -1;    
    if (spot.piece.colour == black) {
        // for black forward is y: +1
        dir = 1;
    }
    if (spot.piece.colour == spot.side) {
        return [moveOneSpot(board, spot.x, spot.y, 0, dir)]
    } else {
        return [
            moveOneSpot(board, spot.x, spot.y, 0, dir),
            moveOneSpot(board, spot.x, spot.y, 1, 0),
            moveOneSpot(board, spot.x, spot.y, -1, 0),
        ]
    }
}