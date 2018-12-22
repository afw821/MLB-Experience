

const registerUser = function (e) {
    e.preventDefault();
    const username = $('.reg-username').val().trim().toLowerCase();
    const password = $('.reg-password').val().trim().toLowerCase();
    
    $.post('/api/user', {username: username, password: password})
    .then(function(data){
       const DATA = JSON.stringify(data);
        console.log(JSON.parse(DATA));
    }).catch(function(err){
        console.log(err);
    });
}
$('.register').on('click', registerUser);


const loginUser = function (e) {
    e.preventDefault();
    const username = $('.login-username').val().trim().toLowerCase();
    const password = $('.login-password').val().trim().toLowerCase();

    $.post('/api/session', { username: username, password: password})
    .then(function(data){
        // const DATA = JSON.stringify(data);

        console.log(data);
        if(data[0]._id){
            sessionStorage.setItem('token', data[0]._id)
            window.location.href = "/search";
        }else{
            alert('Incoreect Username or Password');
        }
    })
} 
$('.login').on('click', loginUser); 

const logoutUser = function (e) {
    window.location.href = "/login";
}
$('.logout').on('click', logoutUser);