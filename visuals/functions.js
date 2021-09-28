function createField() {
    board = document.createElement("canvas");
    board.height = 520;
    board.width = 470;
    bottom = board.getContext("2d");
    document.body.appendChild(board);
    drawHorizontals();
    drawVerticals();
    createRiver();
    createFort(25);
    createFort(375);
    markLines();

    pieces = document.createElement("canvas");
    pieces.height = 500;
    pieces.width = 450;
    upper = pieces.getContext("2d");
    document.body.appendChild(pieces);
}
function drawLine(start, end) {
    bottom.beginPath();
    bottom.moveTo(start.x, start.y);
    bottom.lineTo(end.x, end.y);
    bottom.stroke();
}
function drawHorizontals() {
    for (i = 25; i < 500; i = i + 50) {
        drawLine({ x: 25, y: i }, { x: 425, y: i });
    }
}
function drawVerticals() {
    for (i = 25; i < 450; i = i + 50) {
        drawLine({ x: i, y: 25 }, { x: i, y: 475 });
    }
}
function createRiver() {
    bottom.beginPath();
    bottom.clearRect(26, 226, 398, 48);
    bottom.stroke();
}
function createFort(y) {
    drawLine({ x: 175, y: y }, { x: 275, y: Number(y) + 100 });
    drawLine({ x: 175, y: Number(y) + 100 }, { x: 275, y: y });
}
function markLines() {
    markHorizontals();
    markVerticals();
}
function markHorizontals() {
    let x = 20;
    for (i = 0; i < 9; i++) {
        writeText(i, x, 515);
        x = x + 50;
    }
}
function markVerticals() {
    let y = 29;
    for (i = 0; i < 10; i++) {
        writeText(i, 457, y);
        y = y + 50;
    }
}
function writeText(text, x, y) {
    bottom.font = "15px Times";
    bottom.strokeText(text, x, y);
}