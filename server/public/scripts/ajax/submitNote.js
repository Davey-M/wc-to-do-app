function addNote(e) {
    e.preventDefault();

    const text = e.target['note-creator'].value;

    if (!text) {
        alert('Cannot add blank note.');
        return;
    }

    console.log(text);

    const options = {
        method: 'POST',
        url: '/notes',
        data: {
            text,
        }
    }

    $.ajax(options)
        .then(response => {
            getContainers();
            e.target.reset();
        })
        .catch(err => {
            console.error('Error with addNote', err);
        })
}

function changeCompleted() {
    let completed = $(this).closest('.note').data().completed;
    let id = $(this).closest('.note').data().id;
    let container = $(this).closest('.note').data().container;

    let newCompleted = !completed;

    // console.log({
    //     id,
    //     completed: newCompleted,
    //     container, 
    // });

    updateNote({
        id,
        completed: newCompleted,
        container, 
    })
}