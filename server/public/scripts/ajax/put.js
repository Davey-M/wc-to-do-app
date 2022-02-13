function updateNote({ id, completed, container }) {

    let noteId = Number(id);
    let containerId = Number(container)

    // console.log({
    //     noteId,
    //     containerId,
    //     completed,
    // });

    const options = {
        method: 'PUT',
        url: `/notes/${noteId}`,
        data: {
            id: containerId,
            completed: completed,
        }
    }

    $.ajax(options)
        .then(response => {
            getContainers();
        })
        .catch(err => {
            console.error(err);
        })
}