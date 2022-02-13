function moveDummyNote(e) {
    // this function is called in client.js
    $('#dummy-note').css('left', e.x);
    $('#dummy-note').css('top', e.y);
}