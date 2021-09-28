function moveGovernor(el) {
    var N = moveInFort(el.x, el.y, 0, -1);
    var S = moveInFort(el.x, el.y, 0, 1);
    var E = moveInFort(el.x, el.y, 1, 0);
    var W = moveInFort(el.x, el.y, -1, 0);
    return [N, E, S, W]
}