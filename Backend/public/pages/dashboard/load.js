
let userInfo = {}
let [selectedPlayer, selectedTeam] = [0, 0];
let loaded = false;
let selectedControl = 0;
window.addEventListener("load", () => {loaded = true})
let userInformation = {}
if (!getCookie("token")){
    window.location = "/login"
}else{
    (async () => {
        const response = await fetch("/api/getUserDesktopInformation", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth': getCookie("token")
            }
        });
        try{
            let responseJSON = await response.json()
            if (responseJSON){
                userInfo = responseJSON;
                if (userInfo.playersInfo.length == 0){
                    selectedPlayer = -1
                }
                if (userInfo.teams.length == 0){
                    selectedTeam = -1
                }
                let selectionInfo = window.location.pathname.replace("dashboard", "").split("/").filter(x => x!="");
                if (selectionInfo.length >= 2){
                    let playerIndex = userInfo.playersInfo.findIndex(p => p.id == selectionInfo[0]);
                    if (playerIndex == -1 && selectionInfo[0] == "0"){
                        playerIndex = userInfo.playersInfo.findIndex(p => p.isCoach);
                    }
                    if (playerIndex != -1){
                        selectedPlayer = playerIndex    
                    }
                    if (selectedPlayer != -1){
                        let teamIndex = userInfo.playersInfo[selectedPlayer].teams.indexOf(selectionInfo[1]);
                        if (teamIndex != -1){
                            selectedTeam = teamIndex
                        }
                    }
                }else{
                    if (userInfo.playersInfo[selectedPlayer] != undefined){
                        if (selectedTeam == -1 && userInfo.playersInfo[selectedPlayer].teams.length != 0){
                            selectedTeam = 0;
                        }
                    }
                }
                if (loaded){
                    createPlayerTeamDropdown()
                    updateUserSelection()
                }else{
                    window.addEventListener("load", createPlayerTeamDropdown)
                    window.addEventListener("load", updateUserSelection)
                }
            }
        }catch(error){
            console.log(error);
        }
    })()
}

function createPlayerTeamDropdown(){
    document.getElementById("playerDropDownButton").childNodes[0].textContent = getPlayerNameAt(selectedPlayer)
    document.getElementById("teamDropDownButton").childNodes[0].textContent = getTeamNameAtPlayer(selectedPlayer, selectedTeam)
    let playercontent = document.querySelectorAll(".player-dropdown-content")[0];
    playercontent.innerHTML = "";
    let teamcontent = document.querySelectorAll(".team-dropdown-content")[0];
    teamcontent.innerHTML = "";

    for (var i = 0; i < userInfo.playersInfo.length; i++){
        if (i != selectedPlayer){
            let item = document.createElement("div");
            item.innerText = getPlayerNameAt(i);
            item.classList.add("clickable-dark")
            item.classList.add("selectable-dropdown-item")
            let j = i;
            item.addEventListener("click", () => {
                let oldplayer = selectedPlayer;
                selectedPlayer = j;
                let index;
                if (selectedTeam != -1){
                    index = userInfo.playersInfo[selectedPlayer].teams.indexOf(userInfo.playersInfo[oldplayer].teams[selectedTeam]);
                }else{
                    index = -1
                }
                if (index != -1){
                    selectedTeam = index
                }else if (userInfo.playersInfo[selectedPlayer].teams.length > 0){
                    selectedTeam = 0
                }else{
                    selectedTeam = -1
                }
                createPlayerTeamDropdown()
                updateUserSelection()
            })
            playercontent.appendChild(item)
        }
    }
    for (var i = 0; i < userInfo.playersInfo[selectedPlayer]?.teams.length; i++){
        if (i != selectedTeam){
            let item = document.createElement("div");
            item.innerText = getTeamNameAtPlayer(selectedPlayer, i);
            item.classList.add("clickable-dark")
            item.classList.add("selectable-dropdown-item")
            let j = i;
            item.addEventListener("click", () => {
                selectedTeam = j;
                createPlayerTeamDropdown()
                updateUserSelection()
            })
            teamcontent.appendChild(item)
        }
    }
}

function getPlayerNameAt(index){
    if (index == -1){
        return "Aucun joueur"
    }else if (userInfo.playersInfo[index].isCoach){
        return "Coach"
    }else{
        return userInfo.playersInfo[index].first + " " + userInfo.playersInfo[index].last
    }
}
function getTeamNameAtPlayer(player, team){
    if (team == -1){
        return "Aucune équipe"
    }
    return userInfo.teamsInfo.filter(x => x.id == userInfo.playersInfo[player].teams[team])[0].name + " - " + userInfo.teamsInfo.filter(x => x.id == userInfo.playersInfo[player].teams[team])[0].category
}
function getTeamImageAtPlayer(player, team){
    if (team == -1){
        return "/cdn/assets/sportempty.png"
    }
    return userInfo.teamsInfo.filter(x => x.id == userInfo.playersInfo[player].teams[team])[0].image
}

function getPlayerImageAt(index){
    if (index == -1 || userInfo.playersInfo[index].isCoach){
        return "/cdn/assets/emptyProfile.png"
    }else{
        return userInfo.playersInfo[index].image
    }
}
function updateUserSelection(){
    selectedSection = parseInt(window.location.pathname.replace("dashboard", "").split("/").filter(x => x!="")[2] ?? "0");
    if (selectedTeam == -1 || selectedPlayer == -1){return}
    let playerId = userInfo.playersInfo[selectedPlayer].id ?? "0";
    if (window.location.pathname.replace("dashboard", "").split("/").filter(x => x!="").length > 0){
        window.history.replaceState({}, "", `../../../../dashboard/${playerId}/${userInfo.playersInfo[selectedPlayer].teams[selectedTeam]}/${selectedSection}`);
    }else{
        window.history.replaceState({}, "", `${playerId}/${userInfo.playersInfo[selectedPlayer].teams[selectedTeam]}/${selectedSection}`);
    }
    document.getElementsByClassName("team-name-title")[0].innerText = "" + getTeamNameAtPlayer(selectedPlayer, selectedTeam);
    document.getElementsByClassName("team-image-icon")[0].src = getTeamImageAtPlayer(selectedPlayer, selectedTeam)
    selectSection(selectedSection);

}
function loadContent(player, team){
    try{
        window.frames["content-iframe"].contentWindow.loadContent(player, team);
    }catch{

    }
}
