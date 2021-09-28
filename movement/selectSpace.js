// this part is a crying shame
function select() {
    pieces.addEventListener("click", () => {
        //console.log("click");
        //console.log(event.x, event.y);
        let el = fields[getRow(event.y)][getRow(event.x)]
        //console.log(el);
        //console.log(el.piece);
        if (el.piece.colour == turn) {
            options = getOptions(el);
            fillSlot(firstSlot, el);

            //console.log(options);
            //console.log(firstSlot);
        } else if (options.includes(el)) {
            fillSlot(secondSlot, el)
            let first = fields[firstSlot.y][firstSlot.x];
            let second = fields[secondSlot.y][secondSlot.x];
            liftPiece(first);
            putPiece(second, firstSlot);
            placePiece(first);
            placePiece(second);
            options = [];
            saveMove();
            clearSlot(firstSlot);
            clearSlot(secondSlot);
            if (inCheck(second.piece.colour) || repetition()) {
                console.log("IN CHECK");
                
                undo();
            } else {
                turn = changeColour(turn);
            }
            //console.log(secondSlot);
            //console.log(firstSlot);
        } else {
            options = [];
            clearSlot(firstSlot);
            clearSlot(secondSlot);
        }
    })
}
function getRow(num) {
    for (i = 0; i <= 10; i++) {
        let row = 50 * i;
        if (num < row) {
            return i - 1
        }
    }
}
select()