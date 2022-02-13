// get containers from server
function getContainers() {
    
    let options = {
        method: 'GET',
        url: '/containers',
    }

    $.ajax(options)
        .then(response => {
            // console.log(response.rows);
            renderContainers(response.rows);
            getNotes();
        })
}

function renderContainers(containers) {

    $('#inner-container-container').empty();

    for (let container of containers) {

        let { name, id } = container;

        $('#inner-container-container').append(`
            <div class="container" data-id="${id}" >
                <h1>${name}</h1>
                <button class="btn-container-delete" >Delete</button>
                <div class="note-container" id="con-${id}">

                </div>
            </div>
        `)
    }
}

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
    // console.log(notes);

    $('#staging-notes').empty();

    for (let note of notes) {

        let { container, text, completed, id } = note;

        if ($(`#con-${container}`).length > 0) {
            $(`#con-${container}`).append(`
                <div class="note ${completed ? 'completed' : ''}" data-id="${id}" data-container="${container}" data-completed="${completed}">
                    <p>${text}</p>
                    <div class="note-buttons">
                        ${completed ? 
                            '<button class="btn-note-complete" >Undo Complete</button>'
                            :
                            '<button class="btn-note-complete" >Complete</button>'
                        }
                        <button class="btn-note-delete" >Delete</button>
                    </div>
                </div>
            `);
        } else {
            $(`#staging-notes`).append(`
                <div class="note ${completed ? 'completed' : ''}" data-id="${id}" data-container="0" data-completed="${completed}">
                    <p>${text}</p>
                    <div class="note-buttons">
                        ${completed ? 
                            '<button class="btn-note-complete" >Undo Complete</button>'
                            :
                            '<button class="btn-note-complete" >Complete</button>'
                        }
                        <button class="btn-note-delete" >Delete</button>
                    </div>
                </div>
            `);
        }
    }
}