function movePawn(el) {
    var dir = -1;    
    if (el.piece.colour == "black") {
        dir = 1;
    }
    if (el.piece.colour == el.side) {        
        return [moveOneSpot(el.x, el.y + dir)]
    } else {
        return [
            moveOneSpot(el.x, el.y + dir),
            moveOneSpot(el.x + 1, el.y),
            moveOneSpot(el.x - 1, el.y)
        ]
    }
}