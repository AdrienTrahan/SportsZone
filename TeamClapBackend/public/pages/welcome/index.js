document.body.addEventListener('scroll', function(event) {
    if (event.target.scrollTop >= 100){
        document.body.classList.add("sticky-navbar");
    }else{
        document.body.classList.remove("sticky-navbar");
    }
});
function login(){
    window.location = "./login"
}
function dashboard(){
    window.location = "./dashboard"
}
function signup(){
    window.location = "./signup"
}
function brand(){
    window.location = "../";
}

