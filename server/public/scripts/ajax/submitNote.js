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