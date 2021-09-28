function changeColour(colour) {
    if (colour == "black") {
        return "red"
    } else {
        return "black"
    }
}
function setSide(y) {
    if (y < 5) {
        return "black"
    } else {
        return "red"
    }
}
function changeIntoElement(x, y) {
    // this is bad practice, as it is using a global variable (also very badly named)
    return fields[y][x]
}