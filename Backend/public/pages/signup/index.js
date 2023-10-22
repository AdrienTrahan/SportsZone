function brand(){
    window.location = "../";
}
function login(){
    window.location = "../login";
}
async function signup(){
    document.getElementById("error").style.display = "none";
    let errors = document.getElementsByClassName("errorBox");
    for (var i = 0; i < errors.length; i++){
        errors[i].classList.remove("errorBox");
    }
    let roles = ["parent", "coach"];
    let role = roles.indexOf(document.getElementById("roles").value);

    if (document.getElementById("first").value.replace(/\s/g, '') == ""){
        document.getElementById("first").classList.add("errorBox");
        document.getElementById("error").innerText = "First name must be a non empty string";
        document.getElementById("error").style.display = "block";
        return;
    }

    if (document.getElementById("last").value.replace(/\s/g, '') == ""){
        document.getElementById("last").classList.add("errorBox");
        document.getElementById("error").innerText = "Last name must be a non empty string";
        document.getElementById("error").style.display = "block";
        return;
    }

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("email").value)){
        document.getElementById("email").classList.add("errorBox");
        document.getElementById("error").innerText = "Provided email is invalid";
        document.getElementById("error").style.display = "block";
        return;
    }

    if (document.getElementById("password").value.length < 6){
        document.getElementById("password").classList.add("errorBox");
        document.getElementById("error").innerText = "Password must contain at least 6 characters";
        document.getElementById("error").style.display = "block";
        return;
    }
    if (document.getElementById("password").value != document.getElementById("confirm").value){
        document.getElementById("confirm").classList.add("errorBox");
        document.getElementById("error").innerText = "Password and confirmation must match";
        document.getElementById("error").style.display = "block";
        return;
    }
    if (role == -1){
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerText = "You must choose a role, you will later on be able to change your role";
        document.getElementById("roles").classList.add("errorBox");
        return
    };
    
    let result = await send("http://127.0.0.1:3000/api/signup", {
        first: document.getElementById("first").value,
        last: document.getElementById("last").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        role: roles.indexOf(document.getElementById("roles").value)
    });
    try{
        result = JSON.parse(result);
        if (result.error){
            throw result.error;
        }
        if (result.token){
            loginWithToken(result.token)
        }
    }catch(error){
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerText = error;
    }
}
function loginWithToken(token){
    setCookie("token", token, 365);
}
async function send(url, object){
    return new Promise((resolve) => {
        const Http = new XMLHttpRequest();
        const urlPath = url + "?" + serialize(object);
        Http.open("GET", urlPath);
        Http.send();

        Http.onreadystatechange = (e) => {
            if (Http.readyState == 4 && Http.status == 200){
                resolve((Http.responseText));
            }
        }
    })
}
function serialize(obj){
    var str = "";
    for (var key in obj) {
        if (str != "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}