if (getCookie("token")){
    for (var i = 0; i < document.getElementsByClassName("dashboard-button").length; i++){
        document.getElementsByClassName("dashboard-button")[i].style.display = "block"
    }
    for (var i = 0; i < document.getElementsByClassName("registration-button").length; i++){
        document.getElementsByClassName("registration-button")[i].style.display = "none"
    }
}else{
    for (var i = 0; i < document.getElementsByClassName("dashboard-button").length; i++){
        document.getElementsByClassName("dashboard-button")[i].style.display = "none"
    }
    for (var i = 0; i < document.getElementsByClassName("registration-button").length; i++){
        document.getElementsByClassName("registration-button")[i].style.display = "block"
    }
}