function fillSlot(slot, el) {
    slot.x = el.x;
    slot.y = el.y;
    slot.side = el.side;
    slot.piece.colour = el.piece.colour;
    slot.piece.char = el.piece.char;
}
function clearSlot(slot) {
    slot.x = null;
    slot.y = null;
    slot.side = null;
    slot.piece.colour = null;
    slot.piece.char = null;
}
function liftPiece(el) {
    el.piece.colour = "none";
    el.piece.char = "none";
}
function putPiece(el, slot) {
    el.piece.colour = slot.piece.colour;
    el.piece.char = slot.piece.char;
}
function saveMove() {
    var a = { x: null, y: null, side: null, piece: { colour: null, char: null } };
    var b = { x: null, y: null, side: null, piece: { colour: null, char: null } };
    fillSlot(a, firstSlot);
    fillSlot(b, secondSlot);
    savedMoves.push([a, b]);
}
function undo() {
    var move = savedMoves[savedMoves.length - 1];
    var first = fields[move[0].y][move[0].x];
    var second = fields[move[1].y][move[1].x];
    putPiece(first, move[0]);
    putPiece(second, move[1]);
    savedMoves.pop();
    placePiece(first);
    placePiece(second);
    clearSlot(firstSlot);
    clearSlot(secondSlot);
}