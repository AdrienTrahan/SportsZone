let events = [];
let playerId, teamId = [];
var weekdays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
let next = 0;
function updateSize(){
  window.parent.postMessage({type: "resize", size: document.body.scrollHeight})
}
parent.window.addEventListener('resize', () => {
  updateSize();
});

async function loadContent(player, team){
  next = 0;
  [playerId, teamId] = [player, team]
  let object = {playerId: player, id: team, nextEvent: "0"};
  if (player == 0){
    delete object["playerId"]
  }
  let eventsResponse = await fetch("/api/getNextEvents?" + serialize(object), {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'auth': getCookie("token")
    }
  })
  let loadedEvents = await eventsResponse.json();
  events = loadedEvents
  loadEventsTable();
}

function loadEventsTable(){
  document.getElementsByClassName("events-table-body")[0].innerHTML = "";
  for (var i = 0; i < events.length; i++){
    let row = document.getElementsByClassName("events-table-body")[0].insertRow(-1)
    let nameCell = row.insertCell(0);
    nameCell.innerHTML = `<h4 class="table-name-cell">${events[i].name}<span class="opponent-span">${events[i].adversary ? " contre " + events[i].adversary : ""}</span></h4>`
    let dateCell = row.insertCell(1);
    let date = new Date(events[i].month + 1 + "-" + events[i].date + "-" + events[i].year)
    let dateString = weekdays[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()]
    dateCell.innerHTML = `<h4 class="table-date-cell">${dateString}</h4>`
    let presenceCell = row.insertCell(2);
    row.classList.add("clickable-dark")
    let positionString = [...events[i].places].map((x) => x.name).join(", ");
    presenceCell.innerHTML = `<h4 class="table-place-cell">${positionString}</h4>`
    let index = i;
    row.addEventListener("click", () => selectedUserAt(index));
  }
  updateSize();
}
addResizeListener(document.getElementsByClassName("change-observer")[0], () => {
  updateSize();
});

async function reachedEnd(){
  next = events.length;
  let object = {playerId: playerId, id: teamId, nextEvent: next + ""};
  if (playerId == 0){
    delete object["playerId"]
  }
  let eventsResponse = await fetch("/api/getNextEvents?" + serialize(object), {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'auth': getCookie("token")
    }
  })
  let loadedEvents = await eventsResponse.json();
  for (var i = 0; i < loadedEvents.length; i++){
    events.push(loadedEvents[i]);
  }
  loadEventsTable();
}

function selectedUserAt(index){
  parent.openRightEventsPanel(playerId, teamId, events[index]);
}