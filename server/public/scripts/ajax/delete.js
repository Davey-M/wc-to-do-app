function deleteNote() {
    let id = $(this).closest('.note').data().id;

    console.log(id);

    let userResponse = confirm('This note will be permanently deleted.');
    if (userResponse === false) {
        return;
    }

    const options = {
        method: 'DELETE',
        url: `/notes/${id}`,
    }

    $.ajax(options)
        .then(response => {
            getContainers();
        })
        .catch(err => {
            console.error(err);
        })
}