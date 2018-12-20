

const registerUser = function (e) {
    e.preventDefault();
    const username = $('.reg-username').val().trim().toLowerCase();
    const password = $().val().trim().toLowerCase();

    $.post('/api/user', {username: username, password: password})
    .then(function(data){
        console.log(data);
    }).catch(function(err){
        console.log(err);
        alert('There was an error registering, please try again');
    });
}
$().on('click', registerUser);


const loginUser = function (e) {
    e.preventDefault();
    const username = $().val().trim().toLowerCase();
    const password = $().val().trim().toLowerCase();

    $.post('/api/session', {username: username, password: password})
    .then(function(data){
        console.log(data);
        if(data[0]._id){
            sessionStorage.setItem('token', data[0]._id)
            window.location.href = "/search";
        }
    })
} 
$().on('click', loginUser); 