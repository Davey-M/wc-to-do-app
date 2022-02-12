function addContainer(e) {
    e.preventDefault();

    const name = e.target['name-input'].value;

    if (!name) {
        alert('Containers must have names.');
        return;
    }

    console.log(name);

    const options = {
        method: "POST",
        url: '/containers',
        data: {
            name,
        }
    }

    $.ajax(options)
        .then(response => {
            getContainers();
            e.target.reset();
        })
        .catch(err => {
            console.error('Error with newContainer', err);
        })
}