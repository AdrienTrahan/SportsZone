
function brand(){
    window.location = "../";
}
function signup(){
    window.location = "../signup";
}
async function login(){
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("email").value)){
        document.getElementById("email").classList.add("errorBox");
        document.getElementById("error").innerText = "Provided email is invalid";
        document.getElementById("error").style.display = "block";
        return;
    }
    let result = await send("http://127.0.0.1:3000/api/login", {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    });
    try{
        result = JSON.parse(result);
        if (result.error){
            throw result.error;
        }
        if (result.token){
            loginWithToken(result.token);
        }
    }catch(error){
        console.log(error);
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerText = error;
    }
}

function loginWithToken(token){
    setCookie("token", token, 365);
    window.location = "/dashboard"
}
async function send(url, object){
    return new Promise((resolve) => {
        let token = getCookie("token");
        
        const Http = new XMLHttpRequest();
        const urlPath = url + "?" + serialize(object);
        Http.open("GET", urlPath);
        if (token){
            Http.setRequestHeader("Auth", token)
        }
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

