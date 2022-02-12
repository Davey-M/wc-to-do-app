$(main)

// runs when the DOM is fully loaded
function main() {
    getNotes();
}

// GLOBAL VARIABLE DECLARATIONS ------------------------------------------------
const containers = [];
// GLOBAL VARIABLE DECLARATIONS ------------------------------------------------

function getNotes() {

    let options = {
        method: 'GET',
        url: '/notes',
    }

    $.ajax(options)
        .then(response => {
            renderNotes(response.rows);
        })
        .catch(err => {
            console.error(err);
        })
}

function renderNotes(notes) {
    console.log(notes);

    for (let container of containers) {
        $(`#con-${container}`).empty();
    }

    for (let note of notes) {
        let { container, text, completed } = note;

        let containerId = container.split(' ').join('-');

        if (!containers.includes(containerId)) {
            containers.push(containerId);
            $('#inner-container-container').append(`
                <div class="container">
                    <h1>${container}</h1>
                    <div class="note-container" id="con-${containerId}">

                    </div>
                </div>
            `)
        }

        $(`#con-${containerId}`).append(`
            <div class="note">
                <p>${text}</p>
                <label for="completed">Complete</label>
                <input type="checkbox" name="completed" ${completed ? 'checked' : ''}>
            </div>
        `)
    }
}