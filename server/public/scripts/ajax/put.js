function updateNote({ id, completed, container }) {

    // both should already be in number format but this adds another level of protection
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
            // id in this case refers to the id of the notes container
            id: containerId,
            completed: completed,
        }
    }

    $.ajax(options)
        .then(response => {
            // getContainers runs getNotes when it is finished
            getContainers(); // get.js
        })
        .catch(err => {
            console.error(err);
        })
}