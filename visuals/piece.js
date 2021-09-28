function placePiece(el) {
    const char = getCharacter(el.piece.char, el.piece.colour)
    if (char == "") {
        removePiece(el);
    } else {
        upper.beginPath();
        upper.arc(el.x * 50 + 25, el.y * 50 + 25, 20, 0, 2 * Math.PI);
        upper.strokeStyle = '#003300';
        upper.fillStyle = "white";
        upper.fill();
        upper.font = "20px Arial";
        upper.fillStyle = el.piece.colour;
        upper.fillText(char, el.x * 50 + 15, el.y * 50 + 32);
        upper.stroke();
    }
}
function removePiece(start) {
    upper.beginPath();
    upper.clearRect(start.x * 50, start.y * 50, 50, 50);
}
function getCharacter(name, colour) {
    // i remember not being able to come up with better code for this at the time
    if (name == "pawn") {
        if (colour == "red") {
            return "兵"
        } else {
            return "卒"
        }
    } else if (name == "minister") {
        if (colour == "red") {
            return "相"
        } else {
            return "象"
        }
    } else if (name == "cannon") {
        if (colour == "red") {
            return "炮"
        } else {
            return "砲"
        }
    } else if (name == "guard") {
        if (colour == "red") {
            return "仕"
        } else {
            return "士"
        }
    } else if (name == "governor") {
        if (colour == "red") {
            return "帥"
        } else {
            return "將"
        }
    } else if (name == "chariot") {
        if (colour == "red") {
            return "俥"
        } else {
            return "車"
        }
    } else if (name == "horse") {
        if (colour == "red") {
            return "傌"
        } else {
            return "馬"
        }
    } else {
        return ""
    }
}
function displayStart(arr) {
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 9; j++) {
            placePiece(arr[i][j]);
        }
    }
}