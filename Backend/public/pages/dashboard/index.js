let teamDropdownToggled, playerDropdownToggled = false;

function brand(){
    window.location = "../";
}
function logoutClicked(){
    eraseCookie("token");
    window.location = "../"
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


function selectSection(index){
    selectedControl = index;
    let page = ["events", "members", "messages"]
    let iframe = document.getElementsByClassName("iframe-loader")[0];
    iframe.src = "/" + page[selectedControl]
    document.getElementsByClassName("selected-segment")[0].classList.remove("selected-segment");
    document.getElementsByClassName("segment-option")[selectedControl].classList.add("selected-segment");
    for (var i = 0; i < document.getElementsByClassName("bar-popup").length; i++){
        document.getElementsByClassName("bar-popup")[i].classList.add("bar-popup-hidden")
    }
    if (selectedTeam == -1 || selectedPlayer == -1){return}
    let playerId = userInfo.playersInfo[selectedPlayer].id ?? "0";
    if (window.location.pathname.replace("dashboard", "").split("/").filter(x => x!="").length > 0){
        window.history.replaceState({}, "", `../../../../dashboard/${playerId}/${userInfo.playersInfo[selectedPlayer].teams[selectedTeam]}/${index}`);
    }else{
        window.history.replaceState({}, "", `${playerId}/${userInfo.playersInfo[selectedPlayer].teams[selectedTeam]}/${index}`);
    }
}
window.addEventListener('message', (message)=> {
    if (message.data.type == "resize"){
        document.getElementById("content-iframe").style.height = message.data.size + 'px';
    }
})
document.getElementById("content-iframe").addEventListener("load", () => {
    try{
        loadContent(userInfo.playersInfo[selectedPlayer].id ?? "0", userInfo.playersInfo[selectedPlayer].teams[selectedTeam]);
    }catch{}
})

document.body.addEventListener("scroll", (scroll) => {
    if (isInViewport(document.getElementById("content-loader"))){
        window.frames["content-iframe"].contentWindow?.reachedEnd();
    }
    for (var i = 0; i < document.getElementsByClassName("member-popup-panel").length; i++){
        document.getElementsByClassName("member-popup-panel")[i].style.top = Math.max(window.frames["content-iframe"].getBoundingClientRect().top, 70) + "px";
    }
})
async function openRightEventsPanel(playerId, teamId, selectedId){
    for (var i = 0; i < document.getElementsByClassName("bar-popup").length; i++){
        document.getElementsByClassName("bar-popup")[i].classList.add("bar-popup-hidden")
    }

}
async function openRightMembersPanel(playerId, teamId, selectedId){
    for (var i = 0; i < document.getElementsByClassName("bar-popup").length; i++){
        document.getElementsByClassName("bar-popup")[i].classList.add("bar-popup-hidden")
    }
    let object = {playerId: playerId, id: teamId, player: selectedId.id};
    if (playerId == 0){
        delete object["playerId"]
    }
    let data = await fetch("/api/getPlayerInformation?" + serialize(object), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth': getCookie("token")
        }
    });
    let info = await data.json()
    let rightPanelSomething = false;
    document.getElementsByClassName("profile-image-presentation")[0].src = info.image;
    document.getElementsByClassName("profile-user-title")[0].innerText = info.first + " " + info.last;
    document.getElementsByClassName("profile-user-subtitle")[0].innerText = info.p_first ? info.p_first + " " + info.p_last : "coach";
    document.getElementsByClassName("popup-information-panel")[0].innerHTML = "";
    if (info.sex){
        document.getElementsByClassName("popup-information-panel")[0].insertAdjacentHTML('beforeend', `<tr><td class="question">Genre</td><td class="answer">${info.sex}</td></tr>`);
        rightPanelSomething = true
    }
    if (info.age){
        document.getElementsByClassName("popup-information-panel")[0].insertAdjacentHTML('beforeend', `<tr><td class="question">Age</td><td class="answer">${info.age}</td></tr>`);
        rightPanelSomething = true
    }
    document.getElementById("members-panel-right").classList.remove("bar-popup-hidden")
    if (!rightPanelSomething){
        document.getElementsByClassName("information-container")[0].classList.add("hidden-tile")
        document.getElementsByClassName("presentation-responsive-separator")[0].classList.add("hidden-tile")
    }else{
        document.getElementsByClassName("information-container")[0].classList.remove("hidden-tile")
        document.getElementsByClassName("presentation-responsive-separator")[0].classList.remove("hidden-tile")
    }
}