let moving = false;

function moveDummyNote(e) {
    // this function is called in client.js
    $('#dummy-note').css('left', e.x);
    $('#dummy-note').css('top', e.y);
}

function startMove(e) {
    e.preventDefault();

    $('#dummy-note > p').text($(this).children()[0].textContent);
    $(this).css('opacity', 0);

    $('#dummy-note').css('opacity', 1);

    moving = $(this);
}

function endMove(e) {
    if (moving) {
        e.preventDefault();

        console.log($(this));
        console.log(moving);
        $(this).attr('class', 'container');
    }
}

function cancelMove(e) {

    if (moving) {
        moving.css('opacity', 1);
    }
    
    moving = false;

    $('#dummy-note').css('opacity', 0);
}

function setBackground() {
    if (moving) {
        $(this).attr('class', 'container hovering');
    }
}

function removeBackground() {
    $(this).attr('class', 'container');
}