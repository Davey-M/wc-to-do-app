function deleteNote() {
    let id = $(this).closest('.note').data().id;

    console.log(id);

    // make sure the user didn't accidentally click the button
    // let userResponse = confirm('This note will be permanently deleted.');
    // if (userResponse === false) {
    //     return;
    // }

    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this note!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            // send delete request to database
            const options = {
                method: 'DELETE',
                url: `/notes/${id}`,
            }

            $.ajax(options)
                .then(response => {
                    // getContainers runs getNotes when it is finished
                    getContainers(); // get.js
                })
                .catch(err => {
                    console.error(err);
                })

        } else {
          return;
        }
      });
}

function deleteContainer() {
    let id = $(this).closest('.container').data().id;

    console.log(id);

    // make sure the user didn't accidentally click the button
    // let userResponse = confirm('This container will be permanently deleted.');
    // if (userResponse === false) {
    //     return;
    // }

    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this container!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {

            const options = {
                method: 'DELETE',
                url: `/containers/${id}`,
            }
        
            $.ajax(options)
                .then(response => {
                    getContainers(); // get.js
                })
                .catch(err => {
                    console.error(err);
                })

        } else {
          return;
        }
    });
}