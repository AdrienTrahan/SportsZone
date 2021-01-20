function send(){
    let first = document.getElementsByClassName("passwordInput")[0].value;
    let second = document.getElementsByClassName("passwordInput")[1].value;
    if (first != second){return}
    var currentUrl = new URL(window.location.href);
    let url = `http://127.0.0.1:3000/api/resetPassword?user=${currentUrl.searchParams.get("user")}&confirmation=${currentUrl.searchParams.get("confirmation")}&password=${first}`;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}