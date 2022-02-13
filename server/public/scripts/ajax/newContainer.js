function addContainer(e) {
    e.preventDefault();

    // name is the only thing about the container that the user can control
    const name = e.target['name-input'].value;

    // input verification
    if (!name) {
        alert('Containers must have names.');
        return;
    }

    // console.log(name); // Note for prod

    const options = {
        method: "POST",
        url: '/containers',
        data: {
            // compact object structure
            name,
        }
    }

    $.ajax(options)
        .then(response => {
            // getContainers runs getNotes when it is finished
            getContainers(); // get.js
            e.target.reset(); // reset the form
        })
        .catch(err => {
            console.error('Error with newContainer', err);
        })
}