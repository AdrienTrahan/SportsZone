let teamDropdownToggled, playerDropdownToggled = false;

function brand(){
    window.location = "../";
}
function logoutClicked(){
    eraseCookie("token");
    window.location = "../"
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
function toggleTeamDropDown(sender){
    if (teamDropdownToggled){
        sender.parentNode.classList.remove("team-dropdown-toggled")
        teamDropdownToggled = false
    }else{
        untoggleAll()
        sender.parentNode.classList.add("team-dropdown-toggled")
        teamDropdownToggled = true
    }
}
function togglePlayerDropDown(sender){
    if (playerDropdownToggled){
        sender.parentNode.classList.remove("player-dropdown-toggled")
        playerDropdownToggled = false
    }else{
        untoggleAll()
        sender.parentNode.classList.add("player-dropdown-toggled")
        playerDropdownToggled = true
    }
}
function untoggleAll(){
    if (teamDropdownToggled){
        toggleTeamDropDown(document.querySelectorAll(".team-dropdown")[0])
    }else if (playerDropdownToggled){
        togglePlayerDropDown(document.querySelectorAll(".player-dropdown")[0])
    }
}
window.addEventListener('click', function(e) {
    if (teamDropdownToggled){
        if (!outsideClick(e, document.querySelectorAll(".team-dropdown-wrapper")[0])) {
            toggleTeamDropDown(document.querySelectorAll(".team-dropdown")[0])
        }
    }else if (playerDropdownToggled){
        if (!outsideClick(e, document.querySelectorAll(".player-dropdown-wrapper")[0])) {
            togglePlayerDropDown(document.querySelectorAll(".player-dropdown")[0])
        }
    }
});