// this entire page is a confusing mess, but it works
function inFort(board, colour, x, y) {
    // governors and guards can only move inside the fort
    const middlepoint = (board[0].length - 1) / 2
    if (x >= middlepoint - 1 && x <= middlepoint + 1) {
        if (colour == black) {
            return y <= 2;
        } else {
            return y >= board.length - 3;
        }
    } else {
        return false
    }
}
function moveInFort(board, x, y, dirX, dirY) {
    const newX = x + dirX;
    const newY = y + dirY;
    if (inFort(board, board[x][y].piece.colour, newX, newY) && canMove(board, x, y, newX, newY)) {
        return board[newY][newX];
    } else {
        return null;
    }
}

function movePiece(board, oldX, oldY, newX, newY) {
    const b = board;
    const piece = b[oldY][oldX].piece;
    const newSpot = b[newY][newX].piece;
    newSpot.name = piece.name;
    newSpot.colour = piece.colour;
    piece.name = none;
    piece.colour = none;
    return b;
}

function canMove(board, oldX, oldY, newX, newY) {
    return newX >= 0 && newX <= board[0].length && newY >= 0 && newY <= board.length &&
        board[oldY][oldX].piece.colour != board[newY][newX].piece.colour;
}

function moveOneSpot(board, x, y, dirX, dirY) {
    const newX = x + dirX;
    const newY = y + dirY;
    if (canMove(board, x, y, newX, newY)) {
        return board[newY][newX];
    } else {
        return null;
    }
}

function moveContiniusly(board, x, y, dirX, dirY) {
    const validPositions = new Array;
    let newX = Number(x) + Number(dirX);
    let newY = Number(y) + Number(dirY);
    while (canMove(board, x, y, newX, newY)) {
        const valid = board[newY][newX];
        validPositions.push(board[newY][newX]);
        newX += dirX;
        newY += dirY;
        if (valid.piece.colour != none) {
            return validPositions;
            // stops looping through spots once it has eaten a piece
        }
    }
    return validPositions;
}