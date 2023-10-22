let members = [];
var weekdays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
let next = 0;
let playerId, teamId = [];
function updateSize(){
  window.parent.postMessage({type: "resize", size: document.body.scrollHeight})
}
parent.window.addEventListener('resize', () => {
  updateSize();
});

async function loadContent(player, team){
  next = 0;
  [playerId, teamId] = [player, team]
    let object = {playerId: player, id: team, nextPlayer: "0"};
    if (player == 0){
      delete object["playerId"]
    }
    let membersResponse = await fetch("/api/getNextPlayers?" + serialize(object), {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'auth': getCookie("token")
      }
    })
    let loadedMembers = await membersResponse.json();
    members = loadedMembers
    loadMembersTable();
}

function loadMembersTable(){
  document.getElementsByClassName("members-table-body")[0].innerHTML = "";
  for (var i = 0; i < members.length; i++){
    let row = document.getElementsByClassName("members-table-body")[0].insertRow(-1)
    let index = i;
    let nameCell = row.insertCell(0);
    nameCell.innerHTML = `<img class="profile-icon-cell" src="${members[i].image}"><h4 class="table-name-cell">${members[i].first} ${members[i].last} ${members[i].role ? "(coach)" : ""}</h4>`
    nameCell.addEventListener("click", () => selectedUserAt(index));
  }
  updateSize();
}
addResizeListener(document.getElementsByClassName("change-observer")[0], () => {
  updateSize();
});

async function reachedEnd(){
  next = members.length;
  let object = {playerId: playerId, id: teamId, nextPlayer: next + ""};
  if (playerId == 0){
    delete object["playerId"]
  }
  let membersResponse = await fetch("/api/getNextPlayers?" + serialize(object), {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'auth': getCookie("token")
    }
  })
  let loadedMembers = await membersResponse.json();
  for (var i = 0; i < loadedMembers.length; i++){
    members.push(loadedMembers[i]);
  }
  loadMembersTable();
}
function selectedUserAt(index){
  parent.openRightMembersPanel(playerId, teamId, members[index]);
}