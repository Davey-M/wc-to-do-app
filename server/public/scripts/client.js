$(main)

// runs when the DOM is fully loaded
function main() {
    // get container and get notes will always be run together
    getContainers();

    $('#form-new-note').on('submit', addNote); // submitNote.js

    $('#form-new-container').on('submit', addContainer); // newContainer.js

    window.addEventListener('mousemove', moveDummyNote); // cardMovement.js

    $('main').on('mousedown', '.note', startMove); // cardMovement.js

    $(document).on('mouseup', '.container', endMove); // cardMovement.js
}