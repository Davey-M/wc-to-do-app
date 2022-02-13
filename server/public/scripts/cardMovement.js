let moving = false;

function moveDummyNote(e) {
    // this function is called in client.js
    $('#dummy-note').css('left', e.x);
    $('#dummy-note').css('top', e.y);

    if (moving) {
        moving.css('opacity', 0);
        $('#dummy-note').css('opacity', 1);
    }
}

function startMove(e) {
    e.preventDefault();

    $('#dummy-note > p').text($(this).children()[0].textContent);
    // $(this).css('opacity', 0);

    let noteCompleted = $(this).data().completed;
    if (noteCompleted) {
        $('#dummy-note').attr('class', 'note completed');
        $('#dummy-completed').text('Undo Complete');
    }

    // $('#dummy-note').css('opacity', 1);

    moving = $(this);
}

function endMove(e) {
    if (moving) {
        e.preventDefault();

        // console.log($(this));
        // console.log(moving);

        let noteId = moving.data().id;
        let noteContainer = moving.data().container;
        let noteCompleted = moving.data().completed;
        let containerId = $(this).data().id;

        // console.log({ noteContainer, containerId })

        if ($(this).attr('class') === 'container hovering') {
            $(this).attr('class', 'container');
        }

        if (noteContainer === containerId) return;

        // let options = {
        //     method: 'PUT',
        //     url: `/notes/${noteId}`,
        //     data: {
        //         id: containerId,
        //     }
        // }

        // $.ajax(options)
        //     .then(response => {
        //         getContainers();
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     })

        updateNote({ 
            id: noteId, 
            completed: noteCompleted, 
            container: containerId 
        });
    }
}

function cancelMove(e) {

    if (moving) {
        moving.css('opacity', 1);
    }
    
    moving = false;

    $('#dummy-note').css('opacity', 0);
    $('#dummy-note').attr('class', 'note');
    $('#dummy-completed').text('Complete');
}

function setBackground() {
    if (moving) {
        $(this).attr('class', 'container hovering');
    }
}

function removeBackground() {
    $(this).attr('class', 'container');
}