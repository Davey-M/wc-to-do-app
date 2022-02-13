let moving = false;

// once a note is clicked the dummy note will only appear after the user holds the mouse button for the pause time 
let pauseTime;
let pauseLength = 100;

function moveDummyNote(e) {
    
    // the dummy note sticks to the cursor
    // when a note is moved the note is made invisible and the dummy note is made visible so it looks like the note is being dragged
    $('#dummy-note').css('left', e.x);
    $('#dummy-note').css('top', e.y);

    // the dummy note should only be visible when the cursor begins to move
    // this fixes issues with notes flashing when their buttons are clicked
    // the moving note is set to be invisible when the dummy note is visible
    if (moving && Date.now() - pauseTime > pauseLength) {
        moving.css('opacity', 0);
        $('#dummy-note').css('opacity', 1);
    }
}

// this function runs then the user clicks on a card
function startMove(e) {
    e.preventDefault();

    pauseTime = Date.now();

    // dummy note is what the user sees when dragging the note around on the page
    $('#dummy-note > p').text($(this).children()[0].textContent);

    // if the note is complete the dummy note should show as completed
    let noteCompleted = $(this).data().completed;
    if (noteCompleted) {
        $('#dummy-note').attr('class', 'note completed');
        $('#dummy-completed').text('Undo Complete');
    }

    // $('#dummy-note').css('opacity', 1);

    // set the global status of the moving variable to the note that we clicked on
    moving = $(this);
}

// this function runs when the note that we are dragging is set in a container
function endMove(e) {
    // check to see if we are moving a note or if we have just clicked on a container
    if (moving) {
        e.preventDefault();

        // console.log($(this));
        // console.log(moving);

        // get all the necessary data to update the note in the database
        // all we need to do to change the notes state is to update its container in the database
        // we also need to update the notes completed status because thats how the put route is set up
        let noteId = moving.data().id;
        let noteContainer = moving.data().container;
        let noteCompleted = moving.data().completed;
        let containerId = $(this).data().id;

        // console.log({ noteContainer, containerId })

        // remove the hovering color from the container
        if ($(this).attr('class') === 'container hovering') {
            $(this).attr('class', 'container');
        }

        // if note is placed in the same container it left there is no need to send it to the database
        if (noteContainer === containerId) return;

        // updateNote is in put.js
        updateNote({ 
            id: noteId, 
            completed: noteCompleted, 
            container: containerId 
        });
    }
}

// this function runs when a user releases a note anywhere on the screen
// this is done so that if the user does not put a note in a container it will snap back to its original place
function cancelMove(e) {

    // if a note was moving make it visible again
    if (moving) {
        moving.css('opacity', 1);
    }
    
    // reset the movement state
    moving = false;

    // reset the dummy note after making it invisible
    $('#dummy-note').css('opacity', 0);
    $('#dummy-note').attr('class', 'note');
    $('#dummy-completed').text('Complete');
}

// set the background of the container only if there is a note currently in moving state
function setBackground() {
    if (moving) {
        $(this).attr('class', 'container hovering');
    }
}

// remove the container background when the mouse moves off of it
function removeBackground() {
    $(this).attr('class', 'container');
}