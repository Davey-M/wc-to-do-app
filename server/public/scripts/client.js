$(main)

// runs when the DOM is fully loaded
function main() {
    // get container and get notes will always be run together
    getContainers();

    $('#form-new-note').on('submit', addNote); // submitNote.js

    $('#form-new-container').on('submit', addContainer); // newContainer.js

    window.addEventListener('mousemove', moveDummyNote); // cardMovement.js

    $('main').on('mousedown', '.note', startMove); // cardMovement.js

    $('main').on('mouseup', '.container', endMove); // cardMovement.js

    $(document).on('mouseup', cancelMove); // cardMovement.js

    // change container background color
    $('main').on('mouseenter', '.container', setBackground); // cardMovement.js
    $('main').on('mouseleave', '.container', removeBackground); // cardMovement.js

    // delete listeners - delete.js
    $('main').on('click', '.btn-note-delete', deleteNote); // delete.js
    $('main').on('click', '.btn-container-delete', deleteContainer); // delete.js

    // update completed status
    $('main').on('click', '.btn-note-complete', changeCompleted); // submitNote.js
}