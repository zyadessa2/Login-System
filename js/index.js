let logInSec = document.getElementById('logIn')
let signUpSec = document.getElementById('signUp')

let emailLogin = document.getElementById('emailLogin');
let passwordLogin = document.getElementById('passwordLogin');
let btnLogIn = document.getElementById('btnLogIn');
let switchLogIn = document.getElementById('switchLogIn');

let nameSignUp = document.getElementById('nameSignUp');
let emailSignUp = document.getElementById('emailSignUp');
let passwordSignUp = document.getElementById('passwordSignUp');
let btnSignUp = document.getElementById('btnSignUp');
let switchSignUp = document.getElementById('switchSignUp');

let warning = document.getElementById('warning')

let btnLogout = document.getElementById('btnLogout')

let crudPage = document.getElementById('crudPage')

let users = [];

if(localStorage.getItem("users") != null){
    users = JSON.parse(localStorage.getItem('users'));
}

function switchLog(){
    logInSec.classList.replace("d-block" , "d-none");
    signUpSec.classList.replace("d-none" , "d-block");
}
function switchSign(){
    signUpSec.classList.replace("d-block" , "d-none");
    logInSec.classList.replace("d-none" , "d-block");
}
function gocrud(){
    logInSec.classList.replace("d-block" , "d-none");
    crudPage.classList.replace("d-none" , "d-block");
}
function logout(){
    logInSec.classList.replace("d-none" , "d-block");
    crudPage.classList.replace("d-block" , "d-none");
}


function addUser(){
    let user = {
        name:nameSignUp.value,
        email:emailSignUp.value,
        password:passwordSignUp.value,
    }
    users.push(user);
    console.log(users);
    localStorage.setItem('users' , JSON.stringify(users));
    clear();
}


function loginSearch(){
    let userLogin = {
        email:emailLogin.value,
        password:passwordLogin.value,
    }

    for(let i = 0 ; i<users.length ; i++){
        if(userLogin.email == users[i].email && userLogin.password == users[i].password){
            console.log('hello');
            gocrud()
            warning.classList.replace("d-block" , "d-none");
            
        } else {
            console.log('eror');
            warning.classList.replace("d-none" , "d-block");
        }
    } 
    
}


function clear(){
    nameSignUp.value = ""
    emailSignUp.value = ""
    passwordSignUp.value = ""
}