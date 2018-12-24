

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
        console.log('id');
        console.log('login data' + data._id);
        if(data._id){
            sessionStorage.setItem('token', data._id)
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