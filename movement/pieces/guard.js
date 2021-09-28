function moveGuard(el) {
    var SE = moveInFort(el.x, el.y, 1, 1);
    var SW = moveInFort(el.x, el.y, 1, -1);
    var NE = moveInFort(el.x, el.y, -1, 1);
    var NW = moveInFort(el.x, el.y, -1, -1);
    return [NW, NE, SE, SW]
}