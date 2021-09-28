function moveChariot(el) {
    var a = moveContiniusly(el.x, el.y, 1, 0).concat(moveContiniusly(el.x, el.y, -1, 0));
    var b = moveContiniusly(el.x, el.y, 0, 1).concat(moveContiniusly(el.x, el.y, 0, -1));
    var c = a.concat(b);
    return c
}