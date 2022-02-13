function addNote(e) {
    e.preventDefault();

    // text is the only initial value needed
    // all notes start with completed === false and container === 0
    const text = e.target['note-creator'].value;

    // verify inputs
    if (!text) {
        alert('Cannot add blank note.');
        return;
    }

    // console.log(text); // test

    const options = {
        method: 'POST',
        url: '/notes',
        data: {
            text,
        }
    }

    $.ajax(options)
        .then(response => {
            // getContainers run getNotes when it is done
            getContainers(); // get.js
            e.target.reset(); // reset form
        })
        .catch(err => {
            console.error('Error with addNote', err);
        })
}

function changeCompleted() {
    // get all the values for updating
    let completed = $(this).closest('.note').data().completed;
    let id = $(this).closest('.note').data().id;
    let container = $(this).closest('.note').data().container;

    // switch completed bool to opposite
    let newCompleted = !completed;

    // console.log({
    //     id,
    //     completed: newCompleted,
    //     container, 
    // });

    // updateNote is in put.js
    updateNote({
        id,
        completed: newCompleted,
        container, 
    })
}