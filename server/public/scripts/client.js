$(main)

// runs when the DOM is fully loaded
function main() {
    // get container and get notes will always be run together
    getContainers();

    $('#form-new-note').on('submit', addNote);

    $('#form-new-container').on('submit', addContainer);
}

// GLOBAL VARIABLE DECLARATIONS ------------------------------------------------
// GLOBAL VARIABLE DECLARATIONS ------------------------------------------------