$(main)

// runs when the DOM is fully loaded
function main() {
    getNotes();
}

// GLOBAL VARIABLE DECLARATIONS ------------------------------------------------
const containers = [];
// GLOBAL VARIABLE DECLARATIONS ------------------------------------------------

// get notes from server
function getNotes() {

    let options = {
        method: 'GET',
        url: '/notes',
    }

    $.ajax(options)
        .then(response => {
            // notes need to be rendered after being received from the server
            renderNotes(response.rows);
        })
        .catch(err => {
            console.error(err);
        })
}

function renderNotes(notes) {
    console.log(notes);

    // used for validation when trying to add containers later
    for (let container of containers) {
        $(`#con-${container}`).empty();
    }

    // loop through the notes
    for (let note of notes) {
        // destructuring
        let { container, text, completed } = note;

        // spaces break the ids. no notes will be added if there are spaces in the containers id
        let containerId = container.split(' ').join('-');

        // create a container if one does not already exist on the dom
        if (!containers.includes(containerId)) {
            containers.push(containerId);
            // the note-container id in this block breaks with spaces in the containerId
            $('#inner-container-container').append(`
                <div class="container">
                    <h1>${container}</h1>
                    <div class="note-container" id="con-${containerId}">

                    </div>
                </div>
            `)
        }

        // load the note into the dom
        $(`#con-${containerId}`).append(`
            <div class="note">
                <p>${text}</p>
                <label for="completed">Complete</label>
                <input type="checkbox" name="completed" ${completed ? 'checked' : ''}>
            </div>
        `)
    }
}