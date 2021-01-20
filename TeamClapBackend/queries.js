const multer = require('multer');
const ObjectID = require('mongodb').ObjectID;
const sha256 = require("sha256");
const {errors, errorify} = require('./errors/errors');
String.prototype.errorify = errorify;
const sharp = require("sharp");
const fs = require("fs");
const { ObjectId } = require('mongodb');
const maxPlayerLoad = 20;
const maxEventLoad = 20;
const maxPresenceLoad = 20;
const maxMessagesLoad = 20;
const roleLimits = 3;
const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
function capitalizeFirst(string){
    return string.toUpperCase().charAt(0) + string.toLowerCase().slice(1);
}
let serverAddress = "http://127.0.0.1:3000/";
let picturePath = serverAddress + "cdn/assets/sportempty.png";
let profilPicturePath = serverAddress + "cdn/assets/emptyProfile.png";

const teamPictureStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './cdn/teams');
    },
    filename: function(req, file, cb) {
        cb(null, sha256(new Date().getTime() + "&" + req.query.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/gi,'') + "&" + req.headers.auth.split("-")[0].replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/gi,'')) + req.query.extension);
    }
});
const teamProfilePictureUpload = multer({
    storage: teamPictureStorage
}).single("image");

const fileMessageStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        const path = './cdn/messages/' + req.query.id;
        if (!fs.existsSync(path)){
            fs.mkdirSync(path);
        }
        cb(null, path);
    },
    filename: function(req, file, cb) {
        cb(null, sha256(new Date().getTime() + "") + req.query.extension);
    }
});
const fileMessageUpload = multer({
    storage: fileMessageStorage,
    limits: {fileSize: 1024 * 1024 * 20}
}).single("image");

const profilePictureStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './cdn/profile');
    },
    filename: function(req, file, cb) {
        cb(null, sha256(new Date().getTime() + "&" + req.query.first.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/gi,'') + "&" + req.query.last.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/gi,'') + "&" + req.headers.auth.split("-")[0].replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/gi,'')) + req.query.extension);
    }
});
const profilePictureUpload = multer({
    storage: profilePictureStorage,
}).single("image");


module.exports = function (mongodb, mail){
    const credentials = require('./credentials/registration')(mongodb);
    let modules = {};
    modules.getPlayers = async function (req, res){
        try{
            if (!req.headers.auth){res.send(errors["992"].errorify()); return;};
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let results = await mongodb.collection("credentials").find({_id: new ObjectID(req.headers.auth.split("-")[0])}).project({_id: 0, players: 1}).toArray();
            let players = [];
            for (var j = 0; j < results.length; j++){
                for (var i = 0; i < results[j].players.length; i++){
                    let player = results[j].players[i];
                    player = await modules.getPlayerInformation(player);
                    if (player == undefined){res.send(errors["433"].errorify()); return}
                    let playerInfo = {
                        id: player._id,
                        first: player.first,
                        last: player.last,
                        image: player.image,
                        teams: player.teams
                    };
                    players.push(playerInfo);
                }
            }
            res.send(players);
        }catch{}
    }
    modules.getHostedTeams = async function (req, res){
        try{
            if (!req.headers.auth){res.send(errors["992"].errorify()); return;};
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let results = await mongodb.collection("credentials").find({_id: new ObjectID(req.headers.auth.split("-")[0])}).project({_id: 0, hostedTeams: 1}).toArray();
            let teams = [];
            for (var j = 0; j < results.length; j++){
                for (var i = 0; i < results[j].hostedTeams.length; i++){
                    let team = results[j].hostedTeams[i];
                    team = await modules.getTeamInformation(team);
                    if (team == undefined){res.send(errors["433"].errorify()); return}
                    let teamInfo = {
                        id: team._id,
                        name: team.name,
                        city: team.city,
                        category: team.category,
                        image: team.image
                    }
                    teams.push(teamInfo);
                }
            }

            res.send(teams);
        }catch{
        }
    }
    modules.getGlobalTeams = async function (req, res){
        try{
            if (!req.headers.auth){res.send(errors["992"].errorify()); return;};
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let results = await mongodb.collection("credentials").find({_id: new ObjectID(req.headers.auth.split("-")[0])}).project({_id: 0, teams: 1}).toArray();
            let teams = [];
            for (var j = 0; j < results.length; j++){
                for (var i = 0; i < results[j].teams.length; i++){
                    let team = results[j].teams[i];
                    team = await modules.getTeamInformation(team);
                    if (team == undefined){res.send(errors["433"].errorify()); return}
                    let teamInfo = {
                        id: team._id,
                        name: team.name,
                        city: team.city,
                        category: team.category,
                        image: team.image
                    }
                    teams.push(teamInfo);
                }
            }
            res.send(teams);
        }catch{
        }
    }
    modules.getTeams = async function (req, res){
        try{
            if (!(req.headers.auth && req.query.playerId)){res.send(errors["992"].errorify()); return;};
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let parent = req.headers.auth.split("-")[0];
            let results = await mongodb.collection("players").find({_id: new ObjectID(req.query.playerId), parent: parent}).project({_id: 0, teams: 1}).toArray();
            let teams = [];
            for (var j = 0; j < results.length; j++){
                for (var i = 0; i < results[j].teams.length; i++){
                    let team = results[j].teams[i];
                    team = await modules.getTeamInformation(team);
                    if (team == undefined){res.send(errors["433"].errorify()); return}
                    let teamInfo = {
                        id: team._id,
                        name: team.name,
                        city: team.city,
                        category: team.category,
                        image: team.image
                    }
                    teams.push(teamInfo);
                }
            }
            res.send(teams);
        }catch{
        }
    }
    modules.getTeamInformation = async function (id){
        try{
            if (id == undefined){return}
            let results = await mongodb.collection("teams").find({_id: new ObjectID(id)}).project().toArray();
            return results[0];
        }catch{}
    }
    modules.getUserInformationQuery = async function (req, res){
        try{
            if (!req.headers.auth){res.send(errors["992"].errorify()); return;};
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let userId = req.headers.auth.split("-")[0];
        
            let result = await mongodb.collection("credentials").find({_id: new ObjectID(userId)}).project().toArray();
            if (result.length == 0){res.send(errors["933"].errorify()); return;}
            let userdata = {
                id: result[0]._id,
                first: result[0].first,
                last: result[0].last,
                availableRoles: result[0].availableRoles
            }
            res.send(userdata);
        }catch{}
    }
    modules.createTeam = async function (req, res){
        try{
            if (!(req.query.name && req.query.city != undefined && req.query.category != undefined)){res.send(errors["792"].errorify()); return;}
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;};
            let teamPhotoPath = await new Promise((resolve) => {
                if (req.query.defaultPicture == "false"){
                    teamProfilePictureUpload(req, res, async (err) =>{
                        if (err || req.file == undefined){
                            resolve("error");
                        }else{
                            await await new Promise((resolve) => {sharp(req.file.path).resize(250).jpeg({quality: 50}).toBuffer((err, buffer) => {
                                fs.writeFile(req.file.path, buffer, function(e) {
                                    resolve();
                                });
                            });});
                            resolve(serverAddress + req.file.path);
                        }
                    })
                }else{
                    resolve(picturePath);
                }
            })
            if (teamPhotoPath == "error"){res.send(errors["433"].errorify()); return;}
            let userId = req.headers.auth.split("-")[0];
            let teamInfo = {
                _id : new ObjectID(),
                name: req.query.name,
                city: req.query.city,
                category: req.query.category,
                image: teamPhotoPath,
                players: [],
                coaches: [
                    {
                        access: userId
                    }
                ],
                events: [],
                owner: userId,
                invitecode: Math.floor((Math.random() * 100000000)) + "",
                pendinglist: []
            }
            let id = req.headers.auth.split("-")[0];
            let teamResult = await mongodb.collection("teams").insertOne(teamInfo);
            if (teamResult.ops[0] == undefined){res.send(errors["433"].errorify()); return;};
            let result = await mongodb.collection("credentials").updateOne({"_id": new ObjectID(id)}, {$push: {hostedTeams: teamResult.ops[0]._id + ""}});
            if (result.modifiedCount == 0){res.send(errors["433"].errorify()); return;}
            teamInfo.id = teamInfo._id;
            delete teamInfo._id;
            res.send(teamInfo);
        }catch{};
    }
    modules.hasTeamAccess = async function (token, id){
        try{
            if (!(token && id)){return 0;};
            let userId = token.split("-")[0];
            let ownerAccess = await mongodb.collection("teams").find({_id: new ObjectId(id), owner: userId}).project({_id: 1}).toArray();
            if (ownerAccess.length > 0){
                return 3;
            }
            let coachAccess = await mongodb.collection("teams").find({_id: new ObjectId(id), coaches: {access: userId}}).project({_id: 1}).toArray();
            if (coachAccess.length > 0){
                return 2;
            }
            let playerAccess = await mongodb.collection("teams").find({_id: new ObjectId(id), players: {access: userId}}).project({_id: 1}).toArray();
            return playerAccess.length > 0 ? 1 : 0;
        }catch(error){
            return 0;
        };
    }
    modules.joinTeam = async function (req, res){
        try{
            if (!(req.query.teamId && req.query.invitecode && req.query.playerId && req.headers.auth)){ res.send(errors["792"].errorify()); return};
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let parentId = req.headers.auth.split("-")[0];
            let teamExists = await mongodb.collection("teams").find({_id: new ObjectId(req.query.teamId), invitecode: req.query.invitecode}).project({_id: 1}).toArray();
            if (teamExists.length == 0){ res.send(errors["882"].errorify()); return};
            await mongodb.collection("players").updateOne({_id: new ObjectId(req.query.playerId), parent: parentId}, {$addToSet: {teams: req.query.teamId}});
            await mongodb.collection("credentials").updateOne({_id: new ObjectId(parentId)}, {$addToSet: {teams: req.query.teamId}});
            await mongodb.collection("teams").updateOne({_id: new ObjectId(req.query.teamId)}, {$addToSet: {players: {
                access: req.query.playerId
            }}});
            req.query = {playerId: req.query.playerId, token: req.headers.auth, id: req.query.teamId};
            modules.getGeneralTeamInfo(req,res);
        }catch{
            res.send("error");
        }
    }
    modules.getGeneralTeamInfo = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access == 0){res.send(errors["871"].errorify()); return;};
            if (!req.query.nextEvent){
                req.query.nextEvent = 0;
            }
            if (typeof req.query.nextEvent != "number"){
                req.query.nextEvent = parseInt(req.query.nextEvent);
            }
            if (!req.query.nextPastEvent){
                req.query.nextPastEvent = 0;
            }
            if (typeof req.query.nextPastEvent != "number"){
                req.query.nextPastEvent = parseInt(req.query.nextPastEvent);
            }
            if (!(req.query.nextPlayer)){
                req.query.nextPlayer = 0;
            }
            if (typeof req.query.nextPlayer != "number"){
                req.query.nextPlayer = parseInt(req.query.nextPlayer);
            }
            let teamResult = await mongodb.collection("teams").aggregate([{ $match: {_id: new ObjectId(req.query.id)}},
                { $project: { participants: { $concatArrays: [ "$players", "$coaches"]  } , events: "$events",
                _id: 1,
                name: 1,
                category: 1,
                city: 1,
                invitecode: 1,
                image: 1} },
                { 
                    $project: {
                        events: {
                            $slice: [
                                {
                                    $filter: {
                                        input: '$events',
                                        as: 'item',
                                        cond: {
                                            $and: [
                                                {$gte: ['$$item.timestamp', new Date().getTime()]},
                                            ]
                                        }
                                    }
                                },
                                req.query.nextEvent,
                                maxEventLoad
                            ]
                        },
                        pastEvents: {
                            $filter: {
                                input: '$events',
                                as: 'item',
                                cond: {
                                    $and: [
                                        {$lt: ['$$item.timestamp', new Date().getTime()]},
                                    ]
                                }
                            }
                        },
                        participants: {
                            $slice: [
                                "$participants",
                                req.query.nextPlayer,
                                maxPlayerLoad
                            ]
                        },
                        _id: 1,
                        name: 1,
                        category: 1,
                        city: 1,
                        invitecode: 1,
                        image: 1
                    }
                },{ 
                    $project: {
                        events: 1,
                        pastEvents: {
                            $cond: {
                                if: {
                                    $gt: [{$min: [{$subtract: [{$size: "$pastEvents"}, req.query.nextPastEvent]}, maxEventLoad]}, 0]
                                },
                                then: {
                                    $slice: [
                                        "$pastEvents",
                                        {$max: [{$multiply: [{$size: "$pastEvents"}, -1]}, -req.query.nextPastEvent - maxEventLoad]},
                                        {$min: [{$subtract: [{$size: "$pastEvents"}, req.query.nextPastEvent]}, maxEventLoad]}
                                    ]
                                },
                                else: []
                            }
                        },
                        participants: 1,
                        _id: 1,
                        name: 1,
                        category: 1,
                        city: 1,
                        invitecode: 1,
                        image: 1
                    }
                }
            ]).toArray();
            if (teamResult.length == 0){res.send(errors["564"].errorify()); return;}
            let playerChunk = await modules.getPlayerChunk(teamResult[0].participants);
            let eventChunk = await modules.getEventChunk(teamResult[0].events, req.query.playerId || req.headers.auth);
            let pastEventChunk = await modules.getEventChunk(teamResult[0].pastEvents, req.query.playerId || req.headers.auth);
            if (access > 1){
                for (var i = 0; i < eventChunk.length; i++){
                    eventChunk[i].owner = true;
                }
                
            }
            let teamInfo = {
                id: teamResult[0]._id,
                name: teamResult[0].name,
                category: teamResult[0].category,
                city: teamResult[0].city,
                events: eventChunk,
                players: playerChunk,
                nextPlayer: maxPlayerLoad,
                nextEvent: maxEventLoad,
                access: access,
                invitecode: access > 1 ? teamResult[0].invitecode : undefined,
                image: teamResult[0].image,
                pastEvents: pastEventChunk,
                nextPastEvent: maxEventLoad,
            };
            res.send(teamInfo);
        }catch(error){
        }
    }
    modules.getPlayerChunk = async function (queryPlayers, getParent, email){
        try{
            let players = queryPlayers;
            let playersInformation = [];
            for (const player of players){
                if (player.access == undefined && typeof player != "string" && player.id == undefined){return [];}
                let playerInfoResult = await modules.getPlayerInformation(player.access || player.id || player);
                if (playerInfoResult){
                    let playerInfo = {
                        id: playerInfoResult._id,
                        first: playerInfoResult.first,
                        last: playerInfoResult.last,
                        image: playerInfoResult.image
                    }
                    if (getParent){
                        let parentInfo = await mongodb.collection("credentials").find({_id: new ObjectId(playerInfoResult.parent)}).project({first: 1, last: 1, _id: 1, email: 1}).toArray();
                        if (parentInfo.length > 0){
                            playerInfo.p_first = capitalizeFirst(parentInfo[0].first);
                            playerInfo.p_last = capitalizeFirst(parentInfo[0].last);
                            playerInfo.p_id = parentInfo[0]._id;
                            if (email){
                                playerInfo.email = parentInfo[0].email;
                            }
                        }
                    }
                    if (player.late){
                        playerInfo.late = player.late
                    }
                    playersInformation.push(playerInfo);
                }else{
                    let userInfo = await modules.getUserInformation(player.access || player.id || player);
                    userInfo = {
                        id: userInfo._id,
                        first: userInfo.first,
                        last: userInfo.last,
                        image: profilPicturePath,
                        email: userInfo.email,
                        role: true
                    }
                    if (player.late){
                        userInfo.late = player.late
                    }
                    playersInformation.push(userInfo);
                }
            }
            return playersInformation;
        }catch(err){
            ;
            return [];
        }
    }
    modules.getEventChunk = async function (queryEvents, id){
        try{
            let userId = id.split("-")[0];
            let events = queryEvents;
            let eventsInformation = [];
            for (const event of events){
                if (event.event == undefined){return [];}
                let eventInfo = await modules.getEventInfo(event.event);
                let presence = "MAYBE";
                let late = 0;
                if (eventInfo[0].present.map((x) => x.id).includes(userId)){
                    presence = "YES";
                    let index = eventInfo[0].present.map((x) => x.id).indexOf(userId);
                    late = (eventInfo[0].present[index].late);
                }else if (eventInfo[0].absent.map((x) => x.id).includes(userId)){
                    presence = "NO";
                }
                
                let maybe = await mongodb.collection("teams").aggregate([
                    { $match: {_id: new ObjectId(eventInfo[0].team)}},
                    {
                       $project: {
                          item: 1,
                          participants: {$sum: [{$size: "$players"}, {$size: "$coaches"}]}
                       }
                    }
                ]).toArray();
                if (maybe.length < 1 || !maybe[0].participants){res.send(errors["433"].errorify()); return;};
                eventInfo = {
                    id: eventInfo[0]._id,
                    year: eventInfo[0].year,
                    month: eventInfo[0].month,
                    date: eventInfo[0].date,
                    startTime: eventInfo[0].startTime,
                    endTime: eventInfo[0].endTime,
                    name: eventInfo[0].name,
                    places: eventInfo[0].places,
                    timestamp: eventInfo[0].timestamp,
                    presence: presence,
                    presenceRatio: [eventInfo[0].present.length, maybe[0].participants - eventInfo[0].absent.length - eventInfo[0].present.length, eventInfo[0].absent.length],
                    team: eventInfo[0].team,
                    late: late,
                    adversary: eventInfo[0].adversary,
                    specifications: eventInfo[0].specs
                };
                eventsInformation.push(eventInfo);
            }
            return eventsInformation;
        }catch(err){
            
            ;
            return [];
        }
    }
    modules.getNextPlayers = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.nextPlayer)){res.send(errors["792"].errorify()); return;}
            if (typeof req.query.nextPlayer != "number"){
                req.query.nextPlayer = parseInt(req.query.nextPlayer);
            }
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access == 0){res.send(errors["871"].errorify()); return;};
            let teamResult = await mongodb.collection("teams").aggregate([{$match: {_id: new ObjectId(req.query.id)}},
                { $project: { participants: { $concatArrays: [ "$players", "$coaches"]  }} },
                { 
                    $project: {
                        participants: {
                            $slice: [
                                "$participants",
                                req.query.nextPlayer,
                                maxPlayerLoad
                            ]
                        }
                    }
                }
            ]).toArray();
            if (teamResult.length == 0){res.send(errors["564"].errorify()); return;}
            let playerChunk = await modules.getPlayerChunk(teamResult[0].participants);
            res.send(playerChunk);
        }catch{}
    }
    modules.createEvent = async function (req, res){
        try{
            if (!(req.query.dates && req.query.name && req.query.places && req.query.specs)){res.send(errors["792"].errorify()); return;}
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access < 2){res.send(errors["871"].errorify()); return;};
            let events = [];
            req.query.dates = JSON.parse(req.query.dates);
            req.query.places = JSON.parse(req.query.places);
            for (var i = 0; i < req.query.dates.length; i++){
                let date = new Date(req.query.dates[i][0]);
                let time = [Math.floor(req.query.dates[i][2] / 60), req.query.dates[i][2] % 60];
                date.setHours(time[0], time[1]);
                if (typeof req.query.dates[i][0] != "string" || typeof req.query.dates[i][1] != "number" || typeof req.query.dates[i][2] != "number"){throw undefined;}
                let eventInfo = {
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    date: date.getDate(),
                    startTime: req.query.dates[i][1],
                    endTime: req.query.dates[i][2],
                    name: req.query.name,
                    team: req.query.id,
                    timestamp: date.getTime(),
                    places: req.query.places,
                    present: [],
                    absent: [],
                    specs: JSON.parse(req.query.specs),
                };
                if (req.query.adversary){
                    eventInfo.adversary = req.query.adversary;
                }
                let eventResult = await mongodb.collection("events").insertOne(eventInfo);
                events.push({
                    event: eventResult.insertedId.toHexString() + "",
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    date: date.getDate(),
                    startTime: req.query.dates[i][1],
                    endTime: req.query.dates[i][2],
                    timestamp: date.getTime()
                })
            }
            if (!Array.isArray(req.query.dates)){res.send(errors["792"].errorify()); return;}
            let result = await mongodb.collection("teams").updateOne({_id: new ObjectId(req.query.id)}, {$push: {events: {$each: events, $sort: {year: 1, month: 1, date: 1, startTime: 1}}}});
            if (result.modifiedCount == 0){res.send(errors["433"].errorify()); return;}
            for (var i = 0; i < events.length; i++){
                events[i].name = req.query.name;
            }
            modules.notifyEventCreated(req.query.id, events, req.query.places);
            res.send(events);
        }catch(error){
            ;
        }
    }
    modules.getNextPastEvents = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access < 1){res.send(errors["871"].errorify()); return;};
            if (!req.query.nextPastEvent){
                req.query.nextPastEvent = 0;
            }
            if (typeof req.query.nextPastEvent != "number"){
                req.query.nextPastEvent = parseInt(req.query.nextPastEvent);
            }
            let result = await mongodb.collection("teams").aggregate([{ $match: {_id: new ObjectId(req.query.id)}},
                { 
                    $project: {
                        events: {
                            $filter: {
                                input: '$events',
                                as: 'item',
                                cond: {
                                    $and: [
                                        {$lt: ['$$item.timestamp', new Date().getTime()]},
                                    ]
                                }
                            }
                        }
                    }
                },
                {   
                    $project: {
                        events: {
                            $cond: {
                                if: {
                                    $gt: [{$min: [{$subtract: [{$size: "$events"}, req.query.nextPastEvent]}, maxEventLoad]}, 0]
                                },
                                then: {
                                    $slice: [
                                        "$events",
                                        {$max: [{$multiply: [{$size: "$events"}, -1]}, -req.query.nextPastEvent - maxEventLoad]},
                                        {$min: [{$subtract: [{$size: "$events"}, req.query.nextPastEvent]}, maxEventLoad]}
                                    ]
                                },
                                else: []
                            }
                            
                        }
                    }

                }
            ]).toArray();
            if (result.length == 0){res.send(errors["564"].errorify()); return;}
            let events = [];
            for (var i = 0; i < result[0].events.length; i++){
                let eventInfoResult = await modules.getEventInfo(result[0].events[i].event);
                if (eventInfoResult.length > 0){
                    let presence = "MAYBE";
                    let late = 0;
                    if (eventInfoResult[0].present.map((x) => x.id).includes((req.query.playerId || req.headers.auth).split("-")[0])){
                        let index = eventInfoResult[0].present.map((x) => x.id).indexOf((req.query.playerId || req.headers.auth).split("-")[0]);
                        late = eventInfoResult[0].present[index].late;
                        presence = "YES";
                    }else if (eventInfoResult[0].absent.map((x) => x.id).includes((req.query.playerId || req.headers.auth).split("-")[0])){
                        presence = "NO";
                    }
                    let maybe = await mongodb.collection("teams").aggregate([
                        { $match: {_id: new ObjectId(eventInfoResult[0].team)}},
                        {
                           $project: {
                              item: 1,
                              participants: {$sum: [{$size: "$players"}, {$size: "$coaches"}]}
                           }
                        }
                    ]).toArray();
                    if (maybe.length < 1 || !maybe[0].participants){res.send(errors["433"].errorify()); return;};
                    let eventInfo = {
                        id: eventInfoResult[0]._id,
                        year: eventInfoResult[0].year,
                        month: eventInfoResult[0].month,
                        date: eventInfoResult[0].date,
                        startTime: eventInfoResult[0].startTime,
                        endTime: eventInfoResult[0].endTime,
                        name: eventInfoResult[0].name,
                        places: eventInfoResult[0].places,
                        presence: presence,
                        timestamp: eventInfoResult[0].timestamp,
                        presenceRatio: [eventInfoResult[0].present.length, maybe[0].participants - eventInfoResult[0].absent.length - eventInfoResult[0].present.length, eventInfoResult[0].absent.length],
                        team: eventInfoResult[0].team,
                        late: late,
                        adversary: eventInfoResult[0].adversary,
                        specifications: eventInfoResult[0].specs,
                    };
                    if (access > 1){
                        eventInfo.owner = true;
                    }
                    events.push(eventInfo);
                }
            }
            res.send(events);
        }catch(error){
        }
    }
    modules.getNextEvents = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access < 1){res.send(errors["871"].errorify()); return;};
            if (!req.query.nextEvent){
                req.query.nextEvent = 0;
            }
            if (typeof req.query.nextEvent != "number"){
                req.query.nextEvent = parseInt(req.query.nextEvent);
            }
            let result = await mongodb.collection("teams").aggregate([{ $match: {_id: new ObjectId(req.query.id)}},
                { 
                    $project: {
                        events: {
                            $slice: [
                                {
                                    $filter: {
                                        input: '$events',
                                        as: 'item',
                                        cond: {
                                            $and: [
                                                {$gte: ['$$item.timestamp', new Date().getTime()]},
                                            ]
                                        }
                                    }
                                },
                                req.query.nextEvent,
                                maxEventLoad
                            ]
                        }
                    }
                }
            ]).toArray();
            if (result.length == 0){res.send(errors["564"].errorify()); return;}
            let events = [];
            for (var i = 0; i < result[0].events.length; i++){
                let eventInfoResult = await modules.getEventInfo(result[0].events[i].event);
                if (eventInfoResult.length > 0){
                    let presence = "MAYBE";
                    let late = 0;
                    if (eventInfoResult[0].present.map((x) => x.id).includes((req.query.playerId || req.headers.auth).split("-")[0])){
                        let index = eventInfoResult[0].present.map((x) => x.id).indexOf((req.query.playerId || req.headers.auth).split("-")[0]);
                        late = eventInfoResult[0].present[index].late;
                        presence = "YES";
                    }else if (eventInfoResult[0].absent.map((x) => x.id).includes((req.query.playerId || req.headers.auth).split("-")[0])){
                        presence = "NO";
                    }
                    let maybe = await mongodb.collection("teams").aggregate([
                        { $match: {_id: new ObjectId(eventInfoResult[0].team)}},
                        {
                           $project: {
                              item: 1,
                              participants: {$sum: [{$size: "$players"}, {$size: "$coaches"}]}
                           }
                        }
                    ]).toArray();
                    if (maybe.length < 1 || !maybe[0].participants){res.send(errors["433"].errorify()); return;};
                    let eventInfo = {
                        id: eventInfoResult[0]._id,
                        year: eventInfoResult[0].year,
                        month: eventInfoResult[0].month,
                        date: eventInfoResult[0].date,
                        startTime: eventInfoResult[0].startTime,
                        endTime: eventInfoResult[0].endTime,
                        name: eventInfoResult[0].name,
                        places: eventInfoResult[0].places,
                        presence: presence,
                        presenceRatio: [eventInfoResult[0].present.length, maybe[0].participants - eventInfoResult[0].absent.length - eventInfoResult[0].present.length, eventInfoResult[0].absent.length],
                        team: eventInfoResult[0].team,
                        late: late,
                        adversary: eventInfoResult[0].adversary,
                        specifications: eventInfoResult[0].specs,
                    };
                    if (access > 1){
                        eventInfo.owner = true;
                    }
                    events.push(eventInfo);
                }
            }
            res.send(events);
        }catch(error){
            ;
        }
    }
    modules.getEventInfo = async function (eventId){
        try{
            let result = await mongodb.collection("events").find({_id: new ObjectId(eventId)}).project().toArray();
            return result;
        }catch{
        }
    }
    modules.changePresence = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (typeof req.query.late == "string"){
                req.query.late = parseInt(req.query.late);
            }
            if (!(req.query.presence && req.query.event) || typeof req.query.presence == "number" || req.query.presence >= 3 || (typeof req.query.late != "number" && req.query.late != undefined)){res.send(errors["792"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(await modules.ownsEvent(req.query.id, req.query.event))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access == 0){res.send(errors["871"].errorify()); return;};
            if (req.query.presence == 0){
                await mongodb.collection("events").updateOne({_id: new ObjectId(req.query.event)}, {$pull: {present: {id: (req.query.playerId || req.headers.auth).split("-")[0]}}});
                await mongodb.collection("events").updateOne({_id: new ObjectId(req.query.event)}, {$addToSet: {present: {id: (req.query.playerId || req.headers.auth).split("-")[0], late: req.query.late ? req.query.late : 0}}});
                await mongodb.collection("events").updateOne({_id: new ObjectId(req.query.event)}, {$pull: {absent: {id: (req.query.playerId || req.headers.auth).split("-")[0]}}});
            }else if (req.query.presence == 1){
                await mongodb.collection("events").updateOne({_id: new ObjectId(req.query.event)}, {$pull: {present: {id:(req.query.playerId || req.headers.auth).split("-")[0]}}});
                await mongodb.collection("events").updateOne({_id: new ObjectId(req.query.event)}, {$pull: {absent: {id: (req.query.playerId || req.headers.auth).split("-")[0]}}});
            }else if (req.query.presence == 2){
                await mongodb.collection("events").updateOne({_id: new ObjectId(req.query.event)}, {$pull: {present: {id: (req.query.playerId || req.headers.auth).split("-")[0]}}});
                await mongodb.collection("events").updateOne({_id: new ObjectId(req.query.event)}, {$pull: {absent: {id: (req.query.playerId || req.headers.auth).split("-")[0]}}});
                await mongodb.collection("events").updateOne({_id: new ObjectId(req.query.event)}, {$addToSet: {absent: {id: (req.query.playerId || req.headers.auth).split("-")[0]}}});
            }
            
            res.send({presence: req.query.presence, late: req.query.late ? req.query.late: 0});
        }catch(err){
            ;
        }
    }
    modules.changeLate = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.late && req.query.event) || typeof req.query.late == "number"){res.send(errors["792"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(await modules.ownsEvent(req.query.id, req.query.event))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access == 0){res.send(errors["871"].errorify()); return;};
            if (req.query.presence == 0){
                await mongodb.collection("events").updateOne({_id: new ObjectId(req.query.event)}, {$addToSet: {present: (req.query.playerId || req.headers.auth).split("-")[0]}});
                await mongodb.collection("events").updateOne({_id: new ObjectId(req.query.event)}, {$pull: {absent: (req.query.playerId || req.headers.auth).split("-")[0]}});
            }else if (req.query.presence == 1){
                await mongodb.collection("events").updateOne({_id: new ObjectId(req.query.event)}, {$pull: {present: (req.query.playerId || req.headers.auth).split("-")[0]}});
                await mongodb.collection("events").updateOne({_id: new ObjectId(req.query.event)}, {$pull: {absent: (req.query.playerId || req.headers.auth).split("-")[0]}});
            }else if (req.query.presence == 2){
                await mongodb.collection("events").updateOne({_id: new ObjectId(req.query.event)}, {$pull: {present: (req.query.playerId || req.headers.auth).split("-")[0]}});
                await mongodb.collection("events").updateOne({_id: new ObjectId(req.query.event)}, {$addToSet: {absent: (req.query.playerId || req.headers.auth).split("-")[0]}});
            }
            
            res.send({presence: req.query.presence});
        }catch(err){
            ;
        }
    }
    modules.ownsPlayer = async function (playerId, token){
        try{
            if (playerId){
                let result = await mongodb.collection("players").find({_id: new ObjectId(playerId), parent: token.split("-")[0]}).project({}).toArray();
                return result.length > 0;
            }else{
                return true;
            }
        }catch{}
    }
    modules.ownsEvent = async function (teamId, eventId){
        try{
            if (teamId && eventId){
                let result = await mongodb.collection("events").find({_id: new ObjectId(eventId), team: teamId}).project({}).toArray();
                return result.length > 0;
            }else{
                return true;
            }
        }catch{}
    }
    modules.getUpcommingEvents = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let teamsResult = await mongodb.collection("players").find({_id: new ObjectId(req.query.playerId)}).project({teams: 1}).toArray();
            if (teamsResult.length == 0){res.send(errors["433"].errorify()); return}
            let teams = [];
            let accessLevel = [];
            for (var i = 0; i < teamsResult[0].teams.length; i++){
                let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, teamsResult[0].teams[i]);
                if (access == 0){res.send(errors["871"].errorify()); return;};
                teams.push(new ObjectId(teamsResult[0].teams[i]));
                accessLevel.push(access);
            }
            if (!req.query.nextEvent){
                req.query.nextEvent = 0;
            }
            if (typeof req.query.nextEvent != "number"){
                req.query.nextEvent = parseInt(req.query.nextEvent);
            }
            let events = await mongodb.collection("teams").aggregate([{ $match: {_id: {$in: teams}}},
                {
                    "$group": {
                        "_id": 0,
                        "events": { "$push": "$events" }
                    }
                },
                {
                    "$project": {
                        "events": {
                            "$reduce": {
                                "input": "$events",
                                "initialValue": [],
                                "in": { "$setUnion": ["$$value", "$$this"] }
                            }
                        }
                    }
                },{
                    $project: {
                        events: {
                            $slice: [
                                {
                                    $filter: {
                                        input: '$events',
                                        as: 'item',
                                        cond: {
                                            $and: [
                                                {$gte: ['$$item.timestamp', new Date().getTime()]},
                                            ]
                                        }
                                    }
                                },
                                req.query.nextEvent,
                                maxEventLoad
                            ]
                        }
                    }
                }
            ]).toArray();
            let compare = function (a, b){
                if (a.timestamp > b.timestamp) return 1;
                if (b.timestamp > a.timestamp) return -1;
                return 0;
            }
            events[0].events.sort(compare);
            let eventChunk = await modules.getEventChunk(events[0].events, req.query.playerId || req.headers.auth);
            let stringified = teams.map((x) => x.toHexString());
            for (var i = 0; i < eventChunk.length; i++){
                let index = stringified.indexOf(eventChunk[i].team);
                if (accessLevel[index] > 1){
                    eventChunk[i].owner = true;
                }
            }
            res.send(eventChunk);
        }catch(error){
            ;
        }
    }
    modules.deleteEvents = async function (req, res){
        try{
            req.query.events = JSON.parse(req.query.events);
            if (!Array.isArray(req.query.events)){res.send(errors["792"].errorify()); return;}
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access < 2){res.send(errors["871"].errorify()); return;};
            let eventsInfo = [];
            for (const event of req.query.events){
                if (typeof event == "string"){
                    eventsInfo.push((await modules.getEventInfo(event))[0]);
                    modules.deleteEvent(event, req.query.id);
                }
            }
            if (eventsInfo.length > 0){
                modules.notifyEventDeleted(req.query.id, eventsInfo);
            }
            res.send("done")
        }catch{
    
        }
    }
    modules.deleteEvent = async function (eventId, teamId){
        try{
            if (!await modules.ownsEvent(teamId, eventId)){return;}
            await mongodb.collection("events").deleteOne({_id: new ObjectId(eventId), team: teamId});
            await mongodb.collection("teams").updateOne({_id: new ObjectId(teamId)}, {$pull: {events: {event: eventId}}});
        }catch(error){
            ;
        }
    }
    modules.modifyEvent = async function (req, res){
        try{
            if (!(req.query.dates && req.query.name && req.query.places && req.query.specs)){res.send(errors["792"].errorify()); return;}
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access < 2){res.send(errors["871"].errorify()); return;};
            let events = [];
            req.query.dates = JSON.parse(req.query.dates);
            req.query.places = JSON.parse(req.query.places);
            let originalEvent = await mongodb.collection("events").find({_id: new ObjectId(req.query.eventId)}).project({present: 1, absent: 1, date: 1, month: 1, places: 1, name: 1}).toArray();
            if (!originalEvent[0]){
                originalEvent = [{present: [], absent: []}]
            }
            for (var i = 0; i < req.query.dates.length; i++){
                let date = new Date(req.query.dates[i][0]);
                let time = [Math.floor(req.query.dates[i][2] / 60), req.query.dates[i][2] % 60];
                date.setHours(time[0], time[1]);
                if (typeof req.query.dates[i][0] != "string" || typeof req.query.dates[i][1] != "number" || typeof req.query.dates[i][2] != "number"){throw undefined;}
                let obj = {
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    date: date.getDate(),
                    startTime: req.query.dates[i][1],
                    endTime: req.query.dates[i][2],
                    name: req.query.name,
                    team: req.query.id,
                    timestamp: date.getTime(),
                    places: req.query.places,
                    present: originalEvent[0].present,
                    absent: originalEvent[0].absent,
                    specs: JSON.parse(req.query.specs)
                };
                if (req.query.adversary){
                    obj.adversary = req.query.adversary;
                }
                let eventResult = await mongodb.collection("events").insertOne(obj);
                events.push({
                    event: eventResult.insertedId.toHexString() + "",
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    date: date.getDate(),
                    startTime: req.query.dates[i][1],
                    endTime: req.query.dates[i][2],
                    timestamp: date.getTime()
                })
            }
            if (!Array.isArray(req.query.dates)){res.send(errors["792"].errorify()); return;}
            let result = await mongodb.collection("teams").updateOne({_id: new ObjectId(req.query.id)}, {$push: {events: {$each: events, $sort: {year: 1, month: 1, date: 1, startTime: 1}}}});
            if (result.modifiedCount == 0){res.send(errors["433"].errorify()); return;}
            for (var i = 0; i < events.length; i++){
                events[i].name = req.query.name;
            }
            modules.deleteEvent(req.query.eventId, req.query.id);
            res.send(events);
            if (originalEvent[0] && req.query.notify == "true"){
                modules.notifyEventModified(req.query.id, originalEvent[0], events, req.query.places)
            }
        }catch(error){
            ;
        }
    }
    modules.getPresence = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(await modules.ownsEvent(req.query.id, req.query.eventId))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access < 1){res.send(errors["871"].errorify()); return;};
            if (!req.query.nextPresence){
                req.query.nextPresence = 0;
            }
            if (typeof req.query.nextPresence != "number"){
                req.query.nextPresence = parseInt(req.query.nextPresence);
            }
            let presence = await mongodb.collection("events").find({_id: new ObjectId(req.query.eventId)}).project({present: {$slice: [req.query.nextPresence, maxPresenceLoad]}}).toArray();
            if (presence.length == 0){res.send(errors["433"].errors()); return;}
            let players = await modules.getPlayerChunk(presence[0].present);
            res.send(players);
        }catch{
    
        }
    }
    modules.getAbsence = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(await modules.ownsEvent(req.query.id, req.query.eventId))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access < 1){res.send(errors["871"].errorify()); return;};
            if (!req.query.nextAbsence){
                req.query.nextAbsence = 0;
            }
            if (typeof req.query.nextAbsence != "number"){
                req.query.nextAbsence = parseInt(req.query.nextAbsence);
            }
            let presence = await mongodb.collection("events").find({_id: new ObjectId(req.query.eventId)}).project({absent: {$slice: [req.query.nextAbsence, maxPresenceLoad]}}).toArray();
            if (presence.length == 0){res.send(errors["433"].errors()); return;}
            let players = await modules.getPlayerChunk(presence[0].absent);
            res.send(players);
        }catch{
    
        }
    }
    modules.getMaybe = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(await modules.ownsEvent(req.query.id, req.query.eventId))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access < 1){res.send(errors["871"].errorify()); return;};
            if (!req.query.nextMaybe){
                req.query.nextMaybe = 0;
            }
            if (typeof req.query.nextMaybe != "number"){
                req.query.nextMaybe = parseInt(req.query.nextMaybe);
            }
            let event = await mongodb.collection("events").find({_id: new ObjectId(req.query.eventId)}).project({absent: {$slice: [req.query.nextAbsence, maxPresenceLoad]}}).toArray();
            if (event.length == 0){res.send(errors["433"].errors()); return;}
            let notMaybe = [];
            for (var i = 0; i < event[0].present.length; i++){
                notMaybe.push({access: event[0].present[i].id});
            }
            for (var i = 0; i < event[0].absent.length; i++){
                notMaybe.push({access: event[0].absent[i].id});
            }
            let result = await mongodb.collection("teams").aggregate([{ $match: {_id: new ObjectId(req.query.id)}}, 
                { $project: { maybe: { $concatArrays: [ "$players", "$coaches"]  } } },
                {
                    $project : {
                        maybe : { $filter : { input : "$maybe", as : "item", cond : {$not: { $in : ["$$item" , notMaybe] } }} }
                    }
                },
                {
                    $project: {
                        maybe: {
                            $slice: [
                                "$maybe",
                                req.query.nextMaybe,
                                maxPresenceLoad
                            ]
                        },
                    }
                }
            ]).toArray();
            if (result.length == 0){res.send(errors["433"].errors()); return;}
            let maybe = await modules.getPlayerChunk(result[0].maybe);
            res.send(maybe);
        }catch(error){
            ;
        }
    }
    modules.getPlayerInformationQuery = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth)) && (req.query.playerId)){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access < 1){res.send(errors["871"].errorify()); return;};
            let playerInfo = await mongodb.collection("players").find({_id: new ObjectId(req.query.player), teams: {$in: [req.query.id]}}).project().toArray();
            let info = {};
            if (playerInfo.length == 0){
                let parentInfo = await mongodb.collection("credentials").find({_id: new ObjectId(req.query.player), $or: [{teams: {$in: [req.query.id]}}, {hostedTeams: {$in: [req.query.id]}}]}).project().toArray();
                if (parentInfo.length == 0){res.send(errors["433"].errorify()); return};
                info = {
                    role: "parent",
                    first: capitalizeFirst(parentInfo[0].first),
                    last: capitalizeFirst(parentInfo[0].last),
                    image: profilPicturePath,
                    contacts: parentInfo[0].publicInfo
                }
            }else{
                let parentInfo = await mongodb.collection("credentials").find({_id: new ObjectId(playerInfo[0].parent), teams: {$in: [req.query.id]}}).project({publicInfo: 1, first: 1, last: 1}).toArray();
                if (parentInfo.length == 0){res.send(errors["433"].errorify()); return};
                info = {
                    role: "player",
                    first: playerInfo[0].first,
                    last: playerInfo[0].last,
                    image: playerInfo[0].image,
                    p_first: capitalizeFirst(parentInfo[0].first),
                    p_last: capitalizeFirst(parentInfo[0].last),
                    contacts: parentInfo[0].publicInfo,
                    playerContacts: playerInfo[0].contacts,
                    sex: playerInfo[0].sex,
                    age: playerInfo[0].age,
                }
                if (playerInfo[0].position && playerInfo[0].position[req.query.id]){
                    info.position = playerInfo[0].position[req.query.id];
                }
                if (playerInfo[0].shirtnumber && playerInfo[0].shirtnumber[req.query.id]){
                    info.shirtnumber = playerInfo[0].shirtnumber[req.query.id];
                }
            }
            if (!Array.isArray(info.contacts)){
                info.contacts = []
            }
            if (!Array.isArray(info.playerContacts)){
                info.playerContacts = []
            }
            res.send(info);
    
            
        }catch(error){
        }
    }
    modules.getAllRecipients = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access == 0){res.send(errors["871"].errorify()); return;};
            let teamResult = await mongodb.collection("teams").aggregate([{$match: {_id: new ObjectId(req.query.id)}},
                { $project: { participants: { $concatArrays: [ "$players", "$coaches"]  }} }
            ]).toArray();
            if (teamResult.length == 0){res.send(errors["564"].errorify()); return;}
            let playerChunk = await modules.getPlayerChunk(teamResult[0].participants, true);
            res.send(playerChunk);
        }catch{}
    }
    modules.createConversation = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth)) && (req.query.playerId)){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access < 1){res.send(errors["871"].errorify()); return;};
            let recipients = JSON.parse(req.query.recipients);
            let verifiableRecipients = recipients.map((x) => new ObjectId(x));
            let allowedToJoin = await mongodb.collection("credentials").aggregate([
                {$match: {
                    _id: {$in: verifiableRecipients},
                    $or: [
                        {teams: req.query.id},
                        {hostedTeams: req.query.id},
                    ]
                }},
                {$project: {_id: 1}}
            ]).toArray();
            if (allowedToJoin.length != verifiableRecipients.length){req.send(errors["433"].errorify()); return}
    
            let participants = JSON.parse(JSON.stringify(recipients));
            participants.push(req.headers.auth.split("-")[0]);
            participants.sort();
            let verifiableParticipants = participants.map((x) => new ObjectId(x));
            let mixExists = await mongodb.collection("conversations").find({participants: participants}).project().toArray();
            if (mixExists.length > 0){
                await mongodb.collection("credentials").updateMany ({_id: {$in: verifiableParticipants}, conversations: {$elemMatch: {id: {$eq: mixExists[0]._id.toHexString() + ""}}}}, {$addToSet: {"conversations.$.teams": req.query.id}});
                res.send({exists: true, id: mixExists[0]._id.toHexString() + ""}); 
                return;
            }
            let conversation = await mongodb.collection("conversations").insertOne({participants: participants, owner: req.headers.auth.split("-")[0], messages: []});
            await mongodb.collection("conversations").updateOne({_id: conversation.insertedId}, {$set: {socketRoom: sha256(conversation.insertedId.toHexString() + "" + Math.random() + new Date().getTime())}})
            await mongodb.collection("credentials").updateMany({_id: {$in: verifiableParticipants}}, {$addToSet: {conversations: {id: conversation.insertedId.toHexString() + "", teams: [req.query.id]}}});
            res.send({exists: false, id: conversation.insertedId.toHexString() + ""});
        }catch(error){
            ;
        }
    }
    modules.getConversations = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            let conversationsResult = await mongodb.collection("credentials").aggregate([{$match: {_id: new ObjectId(req.headers.auth.split("-")[0])}},
                {
                    $project: {
                        conversations: {
                            $filter: {
                                input: "$conversations",
                                as: "conversation",
                                cond: { $in: [ req.query.id, "$$conversation.teams" ] }
                            }
                        }
                    }
                }
            ]).toArray();
            let conversationsInfo = await modules.getConversationChunk(conversationsResult[0].conversations);
            let conversations = [];
            for (var i = 0; i < conversationsInfo.length; i++){
                let convo = {id: conversationsInfo[i]._id, participants: [], lastMessage: conversationsInfo[i].lastText, lastDate: conversationsInfo[i].lastDate};
                if (conversationsInfo[i].title){
                    convo.title = conversationsInfo[i].title;
                }
                for (var j = 0; j < Math.min(conversationsInfo[i].participants.length, 5); j++){
                    if (conversationsInfo[i].participants[j] == req.headers.auth.split("-")[0]){
                        conversationsInfo[i].participants.splice(j, 1);
                        j--;
                    }else if (conversationsInfo[i].participants[j]){
                        let user = await modules.getUserInformation(conversationsInfo[i].participants[j]);
                        if (user){
                            convo.participants.push({
                                first: user.first,
                                last: user.last,
                                id: user.id
                            });
                        }
                    }
                }
                conversations.push(convo);
            }
            res.send(conversations);
        }catch{
            
        }
        
    }
    modules.getConversationChunk = async function (ids){
        try{
            let conversations = [];
            for (var i = 0; i < ids.length; i++){
                let result = await modules.getConversationInfo(ids[i].id);
                if (result){
                    conversations.push(result)
                }
            } 
            return conversations;
        }catch{
    
        }
    }
    modules.getConversationInfo = async function (id){
        try{
            let information = await mongodb.collection("conversations").find({_id: new ObjectId(id)}).project().toArray();
            if (information[0]){
                return information[0]
            }
            return;
        }catch{
    
        }
    }
    modules.getConversation = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.convoId)){res.send(errors["792"].errorify()); return;}
            let convoInfo = await modules.getConversationInfo(req.query.convoId);
            if (convoInfo.length == 0){res.send(errors["433"].errorify()); return}
            if (!convoInfo.participants.includes(req.headers.auth.split("-")[0])){res.send(errors["993"].errorify()); return;};
            let convo = {id: convoInfo._id, title: convoInfo.title, owner: convoInfo.owner, socket: convoInfo.socketRoom, participants: [], lastMessage: convoInfo.lastText};
            for (var j = 0; j < Math.min(convoInfo.participants.length, 5); j++){
                if (convoInfo.participants[j] == req.headers.auth.split("-")[0]){
                    convoInfo.participants.splice(j, 1);
                    j--;
                }else if (convoInfo.participants[j]){
                    let user = await modules.getUserInformation(convoInfo.participants[j]);
                    if (user){
                        convo.participants.push({
                            first: user.first,
                            last: user.last
                        });
                    }
                }
            }
            res.send(convo);
        }catch(error){
        }
    }
    modules.changeRoom = async function (room){
        try{
            let roomId = await mongodb.collection("conversations").find({socketRoom: room}).project().toArray();
            if (roomId.length > 0){
                await mongodb.collection("conversations").updateOne({socketRoom: room}, {$set: {socketRoom: sha256(roomId[0]._id.toHexString() + "" + Math.random() + new Date().getTime())}});
            }
        }catch{}
    }
    modules.hasRoomAccess = async function(id, room){
        try{
            let result = ((await mongodb.collection("conversations").find({socketRoom: room, participants: id}).project({_id: 1}).toArray()));
            if (result.length == 0){
                return {access: false};
            }
            return {access: true, id: result[0]._id}
        }catch{}
    }
    modules.generateNewInviteCode = async function(req, res){
        try {
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access < 2){res.send(errors["993"].errorify()); return;}
            let code = Math.floor((Math.random() * 100000000)) + "";
            await mongodb.collection("teams").updateOne({_id: new ObjectID(req.query.id)}, {$set: {invitecode: code}})
            res.send({code: code});
        }catch{}
    }
    modules.joinPending = async function(req, res){
        try {
            if (!(req.query.teamId && req.query.invitecode && req.headers.auth)){ res.send(errors["792"].errorify()); return};
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let teamExists = await mongodb.collection("teams").find({_id: new ObjectId(req.query.teamId), invitecode: req.query.invitecode}).project({_id: 1}).toArray();
            if (teamExists.length == 0){ res.send(errors["882"].errorify()); return};
            await mongodb.collection("teams").updateOne({_id: new ObjectId(req.query.teamId)}, {$addToSet: {pendinglist: {
                access: req.headers.auth.split("-")[0]
            }}});
    
            res.send("done");
        }catch(err){
            ;
        }
    }
    modules.getPendingList = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.headers.auth, req.query.id);
            if (access <= 2){res.send(errors["871"].errorify()); return;};
            let results = await mongodb.collection("teams").find({_id: new ObjectID(req.query.id)}).project({pendinglist: 1}).toArray();
            if (results.length == 0){res.send(errors["871"].errorify()); return;}
            let coaches = await modules.getPlayerChunk(results[0].pendinglist, false);
            res.send(coaches);
        }catch(error){
            ;
        }
    }
    modules.acceptCoachFromPendingList = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id) || !(req.query.coach)){res.send(errors["792"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.headers.auth, req.query.id);
            if (access <= 2){res.send(errors["871"].errorify()); return;};
            let results = await mongodb.collection("teams").updateOne({_id: new ObjectID(req.query.id)}, {$pull: {"pendinglist": {access: req.query.coach}}, $addToSet: {coaches: {access: req.query.coach}}});
            if (results.modifiedCount != 0){
                await mongodb.collection("credentials").updateOne({_id: new ObjectID(req.query.coach)}, {$addToSet: {hostedTeams: req.query.id}});
            }
            res.send("done");
        }catch(error){
            ;
        }
    }
    modules.refuseCoachFromPendingList = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id) || !(req.query.coach)){res.send(errors["792"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.headers.auth, req.query.id);
            if (access <= 2){res.send(errors["871"].errorify()); return;};
            let results = await mongodb.collection("teams").updateOne({_id: new ObjectID(req.query.id)}, {$pull: {"pendinglist": {access: req.query.coach}}});
            res.send("done");
        }catch(error){
            ;
        }
    }
    modules.excludeParticipant = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.headers.auth, req.query.id);
            if (access < 3 && req.headers.auth.split("-")[0] != req.query.participant){res.send(errors["871"].errorify()); return;};
            await modules.removeParticipant(req.query.id, req.query.participant, req.query.role);
            res.send("done");
        }catch(error){
            ;
        }
    }
    modules.quitTeam = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id)){res.send(errors["792"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access == 3){res.send(errors["873"].errorify()); return;};
            if (req.query.playerId){
                await modules.removeParticipant(req.query.id, req.query.playerId, false);
            }else{
                await modules.removeParticipant(req.query.id, req.headers.auth.split("-")[0], true)
            }
            res.send("done");
        }catch{}
    }
    modules.removeParticipant = async function(id, participant, role){
        try{
            await mongodb.collection("teams").updateOne({_id: new ObjectID(id)}, {$pull: {"players": {access: participant}, "coaches": {access: participant}}});
            let events = await mongodb.collection("teams").find({_id: new ObjectID(id)}).project({events: 1, _id: 0}).toArray();
            if (events.length != 0){
                await mongodb.collection("events").updateMany({_id: {$in: events[0].events.map(x => new ObjectID(x.event))}}, {$pull: {"present": participant, "absent": participant}});
            }
            if (role == "true" || (role != "false" && role)){
                await mongodb.collection("credentials").updateOne({_id: new ObjectID(participant)}, {$pull: {hostedTeams: id}});
            }else{
                let playerInfo = await mongodb.collection("players").findOneAndUpdate({_id: new ObjectID(participant)}, {$pull: {teams: id}});
                let parent = playerInfo.value.parent;
                let players = await mongodb.collection("credentials").findOneAndUpdate({_id: new ObjectID(parent)}, {$pull: {teams: id}});
                let playersWithTeam = await mongodb.collection("players").find({_id: {$in: players.value.players.map(x => new ObjectId(x))}, teams: id}).project().toArray();
                if (playersWithTeam.length != 0){
                    await mongodb.collection("credentials").findOneAndUpdate({_id: new ObjectID(parent)}, {$addToSet: {teams: id}});
                }
            }
        }catch{
    
        }
        
    }
    modules.sendFile = async function (req, res){
        try{
            if (!(req.query.extension && req.query.id != undefined && req.query.convoId != undefined)){res.send(errors["792"].errorify()); return;}
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;};
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.query.playerId || req.headers.auth, req.query.id);
            if (access < 1){res.send(errors["993"].errorify()); return;}
            let convoAccess = await mongodb.collection("conversations").find({_id: new ObjectID(req.query.convoId), participants: req.headers.auth.split("-")[0]}).project().toArray();
            if (convoAccess.length == 0){res.send(errors["993"].errorify()); return;}
            let filePath = await new Promise((resolve) => {
                fileMessageUpload(req, res, async (err) =>{
                    if (err || req.file == undefined){
                        resolve("error");
                    }else{
                        if (([".jpg", ".jpeg", ".png"]).includes(req.query.extension)){
                            await new Promise((resolve) => {sharp(req.file.path).resize(1000).jpeg({quality: 75}).toBuffer((err, buffer) => {
                                fs.writeFile(req.file.path, buffer, function(e) {
                                    resolve();
                                });
                            });});
                        }
                        resolve(serverAddress + req.file.path);
                    }
                })
            })
            if (filePath == "error"){res.send(errors["465"].errorify()); return;}
            res.send({path: filePath});
        }catch(err){
        };
    }
    modules.createPlayer = async function (req, res){
        try{
            if (!(req.query.first && req.query.last)){res.send(errors["792"].errorify()); return;}
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;};
            let profilePhotoPath = await new Promise((resolve) => {
                if (req.query.defaultPicture == "false"){
                    profilePictureUpload(req, res, async (err) =>{
                        if (err || req.file == undefined){
                            resolve("error");
                        }else{
                            await await new Promise((resolve) => {sharp(req.file.path).resize(250).jpeg({quality: 50}).toBuffer((err, buffer) => {
                                fs.writeFile(req.file.path, buffer, function(e) {
                                    resolve();
                                });
                            });});
                            resolve(serverAddress + req.file.path);
                        }
                    })
                }else{
                    resolve(profilPicturePath);
                }
            })
            let id = req.headers.auth.split("-")[0];
            let playerInfo = {
                _id : new ObjectID(),
                first: req.query.first,
                last: req.query.last,
                image: profilePhotoPath,
                teams: [],
                parent: id,
                contacts: [],
                sex: req.query.sex,
                age: req.query.age,

            }
            let playerResult = await mongodb.collection("players").insertOne(playerInfo);
            if (playerResult.ops[0] == undefined){res.send(errors["433"].errorify()); return;};
            let result = await mongodb.collection("credentials").updateOne({"_id": new ObjectID(id)}, {$push: {players: playerResult.ops[0]._id + ""}});
            if (result.modifiedCount == 0){res.send(errors["433"].errorify()); return;}
            playerInfo.id = playerInfo._id;
            delete playerInfo._id;
            res.send(playerInfo);
        }catch{};
    }
    modules.getPlayerInformation = async function (id){
        try{
            if (id == undefined){return}
            let results = await mongodb.collection("players").find({_id: new ObjectID(id)}).project().toArray();
            return results[0];
        }catch{}
    }
    modules.getUserInformation = async function (id){
        try{
            if (id == undefined){return}
            let results = await mongodb.collection("credentials").find({_id: new ObjectID(id)}).project().toArray();
            results[0].first = results[0].first.charAt(0) + results[0].first.slice(1).toLowerCase();
            results[0].last = results[0].last.charAt(0) + results[0].last.slice(1).toLowerCase();
            return results[0];
    
        }catch{}
    }
    modules.chooseRole = async function(req, res){
        try{
            if ((req.query.role == undefined) || (typeof req.query.role == "number") || req.query.role >= roleLimits){res.send(errors["792"].errorify()); return;}
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;};
            let userId = req.headers.auth.split("-")[0] + "";
            await mongodb.collection("credentials").updateOne({_id: new ObjectID(userId)}, {$addToSet: {availableRoles: req.query.role}});
            res.send(JSON.stringify({data: req.query.role}));
        }catch(err){
        };
    }
    modules.savePublicInfo = async function (req, res){
        try{
            if (!req.query.contacts){res.send(errors["792"].errorify()); return;}
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;};
            req.query.contacts = JSON.parse(req.query.contacts);
            let result = await mongodb.collection("credentials").updateOne({_id: new ObjectId(req.headers.auth.split("-")[0])}, {$set: {publicInfo: req.query.contacts}});
            res.send(result.matchedCount ? "done": errors["433"].errorify());
        }catch(error){
        }
    }
    modules.getPublicInfo = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;};
            let result = await mongodb.collection("credentials").find({_id: new ObjectId(req.headers.auth.split("-")[0])}).project({publicInfo: 1, _id: 0}).toArray();
            res.send(result[0].publicInfo);
        }catch(error){
        }
    }
    modules.sendMessage = async function (convo, type, data, user){
        try{
            if (user && convo && data && type){
                let insertionId = await mongodb.collection("messages").insertOne({type: type, data: data, user: user, convo: convo.toHexString()});
                if (insertionId.insertedCount > 0 && insertionId.insertedId){
                    await mongodb.collection("conversations").updateOne({_id: convo}, {$push: {messages: {$each: [insertionId.insertedId.toHexString()], $position: 0}}, $set: {lastText: type == "text" ? data : "media", lastDate: new Date().getTime()}})
                    return convo.toHexString() + "";
                }
            }
            return false;
        }catch{
    
        }
    }
    modules.getMessages = async function (convo, index){
        try{
        let recentMessages = await mongodb.collection("conversations").aggregate([{$match: {_id: convo}}, {
            $project: {
            messages: {
                $slice: [
                    "$messages",
                    index,
                    maxMessagesLoad
                ]
            },
            }}]).toArray();
            if (recentMessages.length == 0){
                return [];
            }
            let fullMessages = [];
            for (var i = 0; i < recentMessages[0].messages.length; i++){
                let message = await modules.getMessage(recentMessages[0].messages[i] + "");
                if (message){
                    message.userInfo = message.user;
                    delete message.user;
                    fullMessages.push(message);
                }
            }
            return fullMessages;
        }catch(err){
        return [];
        }
    }
    modules.getMessage = async function (id){
        try{
            let messageInfo = await mongodb.collection("messages").find({_id: new ObjectID(id)}).project().toArray();
            if (messageInfo.length == 0){return}
            messageInfo[0].id = messageInfo[0]._id;
            delete messageInfo[0]._id;
            return messageInfo[0];
        }catch{
        }
    }
    modules.resetEmail = async function (req, res){
        try{
            if (!req.query.email){res.send(errors["792"].errorify()); return;}
            let emailResetCode = sha256(Math.random() + "code");
            let result = await mongodb.collection("credentials").findOneAndUpdate({email: req.query.email.toUpperCase()}, {$set: {passwordReset: emailResetCode}});
            if (result.value == null || result.value == undefined){res.send(errors["787"].errorify()); return;};
            let url = serverAddress + `api/confirmEmail?user=${result.value._id.toHexString()}&confirmation=${emailResetCode}`;
            mail.sendEmail("reset", [req.query.email], {confirmationUrl: url, firstName: result.value.first.charAt(0).toUpperCase() + result.value.first.slice(1).toLowerCase()});
            res.send("done")
        }catch(error){
        }
    }
    modules.confirmEmail = async function (req, res){
        try{
            if (!(req.query.user && req.query.confirmation)){res.send(errors["792"].errorify()); return}
            let found = await mongodb.collection("credentials").find({_id: new ObjectId(req.query.user), passwordReset: req.query.confirmation}).project({_id: 1}).toArray();
            if (found.length == 0){res.send(errors["374"].errorify())}
            res.redirect(serverAddress + `passwordReset?user=${req.query.user}&confirmation=${req.query.confirmation}`);
        }catch{}
    }
    modules.resetPassword = async function (req, res){
        try{
            if (!(req.query.user && req.query.confirmation && req.query.password)){res.send(errors["792"].errorify()); return}
            let found = await mongodb.collection("credentials").find({_id: new ObjectId(req.query.user), passwordReset: req.query.confirmation}).project({_id: 1, salt: 1}).toArray();
            if (found.length == 0){res.send(errors["374"].errorify())}
            let password = sha256(req.query.password + "" + found[0].salt);
            let result = await mongodb.collection("credentials").updateOne({_id: new ObjectID(req.query.user)}, {$set: {password: password, passwordReset: sha256(Math.random() + "random")}});
            res.send("done");
        }catch{}
    }
    modules.notifyEventCreated = async function (id, events, places){
        let users = await mongodb.collection("teams").aggregate([
            { $match: {_id: new ObjectId(id)}}, 
            { $project: { maybe: { $concatArrays: [ "$players", "$coaches"]  }, teamName:  "$name", teamCategory: "$category" } }]).toArray();
            
        let info = await modules.getPlayerChunk(users[0].maybe, true, true);
        if (events.length == 1){
            globalName = "New event: " + events[0].name + " on " + months[events[0].month] + " " + events[0].date;
        }else{
            globalName = events.length + " new events: " + events[0].name;
        }
        let eventsName = [];
        events.sort((a, b) => {return a.timestamp - b.timestamp});
        let placeString = "";
        for (var i = 0; i < places.length; i++){
            placeString += " - " + places[i].name;
        }
        let eventsString = "";
        for (var j = 0; j < events.length; j++){
            eventsName.push(months[events[j].month] + " " + events[j].date + placeString + "<br>");
        }
        eventsName.map(x => {eventsString += x});
        for (var i = 0; i < info.length; i++){
            let firstName = "";
            if (info[i].p_first){
                firstName = info[i].p_first;
            }else if (info[i].first){
                firstName = info[i].first;
            }
            if (events.length > 1){
                
                mail.sendEmail("new_events", [info[i].email], {eventsLength: events.length, eventsString: eventsString, firstName: firstName, globalName: globalName, teamName: users[0].teamName + " " + users[0].teamCategory})
            }else if (events.length == 1){
                mail.sendEmail("new_event", [info[i].email], {eventsString: eventsString, firstName: firstName, globalName: globalName, teamName: users[0].teamName + " " + users[0].teamCategory})
            }
        }
    }
    modules.notifyEventModified = async function (id, event, events, places){
        let users = await mongodb.collection("teams").aggregate([
            { $match: {_id: new ObjectId(id)}}, 
            { $project: { maybe: { $concatArrays: [ "$players", "$coaches"]  }, teamName:  "$name", teamCategory: "$category" } }]).toArray();
            
        let info = await modules.getPlayerChunk(users[0].maybe, true, true);
        globalName = "Modified event: " + event.name + " on " + months[event.month] + " " + event.date;
        let eventsName = [];
        events.sort((a, b) => {return a.timestamp - b.timestamp});
        let firstEventPlace = "";
        for (var i = 0; i < event.places.length; i++){
            firstEventPlace += " - " + event.places[i].name;
        }
        let eventString = months[event.month] + " " + event.date + firstEventPlace;
        let placeString = "";
        for (var i = 0; i < places.length; i++){
            placeString += " - " + places[i].name;
        }

        let eventsString = "";
        for (var j = 0; j < events.length; j++){
            eventsName.push(months[events[j].month] + " " + events[j].date + placeString + "<br>");
        }
        eventsName.map(x => {eventsString += x});
        for (var i = 0; i < info.length; i++){
            let firstName = "";
            if (info[i].p_first){
                firstName = info[i].p_first;
            }else if (info[i].first){
                firstName = info[i].first;
            }
            if (events.length > 1){
                mail.sendEmail("modified_events", [info[i].email], {eventsString: eventsString, firstName: firstName, globalName: globalName, teamName: users[0].teamName + " " + users[0].teamCategory, originalEvent: eventString})
            }else if (events.length == 1){
                mail.sendEmail("modified_event", [info[i].email], {eventsString: eventsString, firstName: firstName, globalName: globalName, teamName: users[0].teamName + " " + users[0].teamCategory, originalEvent: eventString})
            }
        }
    }
    modules.notifyEventDeleted = async function (id, events){
        let users = await mongodb.collection("teams").aggregate([
            { $match: {_id: new ObjectId(id)}}, 
            { $project: { maybe: { $concatArrays: [ "$players", "$coaches"]  }, teamName:  "$name", teamCategory: "$category" } }]).toArray();
            
        let info = await modules.getPlayerChunk(users[0].maybe, true, true);
        let globalName = "";
        if (events.length == 1){
            globalName = "Deleted event: " + events[0].name + " on " + months[events[0].month] + " " + events[0].date;
        }else{
            globalName = events.length + " deleted events at " + users[0].teamName + " " + users[0].teamCategory;
        }
        let eventsName = [];
        events.sort((a, b) => {return a.timestamp - b.timestamp});

        let eventsString = "";
        for (var j = 0; j < events.length; j++){
            let placeString = "";
            for (var i = 0; i < events[i].places.length; i++){
                placeString += " - " + events[i].places[j].name;
            }
            eventsName.push(months[events[j].month] + " " + events[j].date + placeString + "<br>");
        }
        eventsName.map(x => {eventsString += x});
        for (var i = 0; i < info.length; i++){
            let firstName = "";
            if (info[i].p_first){
                firstName = info[i].p_first;
            }else if (info[i].first){
                firstName = info[i].first;
            }
            if (events.length > 1){
                mail.sendEmail("deleted_events", [info[i].email], {deletedLength: events.length, eventsString: eventsString, firstName: firstName, globalName: globalName, teamName: users[0].teamName + " " + users[0].teamCategory})
            }else if (events.length == 1){
                mail.sendEmail("deleted_event", [info[i].email], {eventsString: eventsString, firstName: firstName, globalName: globalName, teamName: users[0].teamName + " " + users[0].teamCategory})
            }
        }
    }
    modules.loadBulkMessages = async function (req, res){
        try{
            if (!(req.query.room && req.headers.auth && req.query.index != undefined )){ res.send(errors["792"].errorify()); return};
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let roomAccess = await modules.hasRoomAccess(req.headers.auth.split("-")[0], req.query.room);
            if ((!await credentials.verify(req.headers.auth)) && roomAccess.access){res.send(errors["871"].errorify());return;}
            req.query.index = parseInt(req.query.index);
            let fullMessages = await modules.getMessages(roomAccess.id, req.query.index);
            res.send(fullMessages);
        }catch{
            
        }
    }
    modules.saveTeamInfo = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(req.query.id && req.query.name)){res.send(errors["792"].errorify()); return;}
            let access = await modules.hasTeamAccess(req.headers.auth, req.query.id);
            if (access < 2){res.send(errors["871"].errorify()); return;};
            let teamProfilePhotoPath = await new Promise((resolve) => {
                if (req.query.extension){
                    if (req.query.defaultPicture == "false"){
                        teamProfilePictureUpload(req, res, async (err) =>{
                            if (err || req.file == undefined){
                                resolve("error");
                            }else{
                                await await new Promise((resolve) => {sharp(req.file.path).resize(250).jpeg({quality: 50}).toBuffer((err, buffer) => {
                                    fs.writeFile(req.file.path, buffer, function(e) {
                                        resolve();
                                    });
                                });});
                                resolve(serverAddress + req.file.path);
                            }
                        })
                    }else{
                        resolve(picturePath);
                    }
                }else{
                    resolve("no");
                }
            });
            let obj = {name: req.query.name, category: req.query.category, city: req.query.city};

            if (teamProfilePhotoPath != "no"){
                obj.image = teamProfilePhotoPath;
            }
            let results = await mongodb.collection("teams").updateOne({_id: new ObjectID(req.query.id)}, {$set: obj});
            if (results.matchedCount == 0){res.send(errors["871"].errorify()); return;}
            res.send("done");
        }catch(error){
        }
    }
    modules.savePlayerInfo = async function (req, res){
        try{
            if (!(req.query.playerId && req.query.first && req.query.last && req.query.contacts && req.query.id)){res.send(errors["792"].errorify());return}
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let profilePhotoPath = await new Promise((resolve) => {
                if (req.query.extension){
                    if (req.query.defaultPicture == "false"){
                        profilePictureUpload(req, res, async (err) =>{
                            if (err || req.file == undefined){
                                resolve("error");
                            }else{
                                await await new Promise((resolve) => {sharp(req.file.path).resize(250).jpeg({quality: 50}).toBuffer((err, buffer) => {
                                    fs.writeFile(req.file.path, buffer, function(e) {
                                        resolve();
                                    });
                                });});
                                resolve(serverAddress + req.file.path);
                            }
                        })
                    }else{
                        resolve(profilPicturePath);
                    }
                }else{
                    resolve("no");
                }
            });
            let obj = {contacts: JSON.parse(req.query.contacts)};
            if (profilePhotoPath != "no"){
                obj.image = profilePhotoPath;
            }
            if (req.query.first){
                obj.first = req.query.first;
            }
            if (req.query.last){
                obj.last = req.query.last;
            }
            if (req.query.age){
                obj.age = req.query.age;
            }
            if (req.query.sex){
                obj.sex = req.query.sex;
            }

            if (req.query.shirtnumber){
                let shirtObj = {};
                shirtObj[req.query.id] = req.query.shirtnumber;
                obj.shirtnumber = shirtObj;
            }
            if (req.query.position){
                let posObj = {};
                posObj[req.query.id] = req.query.position;
                obj.position = posObj;
            }
            await mongodb.collection("players").updateOne({_id: new ObjectID(req.query.playerId)}, {$set: obj});
            res.send("done");
        }catch(error){
        }
    }
    modules.getAccountInfo = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let result = await mongodb.collection("credentials").find({_id: new ObjectId(req.headers.auth.split("-")[0])}).project({first: 1, last: 1, email: 1}).toArray();
            if (result.length == 0){res.send(errors["433"].errorify()); return}
            res.send(result[0]);
        }catch{}
    }
    modules.setAccountInfo = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let modified = {};
            if (req.query.firstname != undefined){
                modified.first = req.query.firstname.toUpperCase();
            }
            if (req.query.lastname != undefined){
                modified.last = req.query.lastname.toUpperCase();
            }
            if (req.query.email != undefined){
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.query.email))) {res.send(errors["983"].errorify()); return};
                modified.email = req.query.email.toUpperCase();
            }
            await mongodb.collection("credentials").updateOne({_id: new ObjectId(req.headers.auth.split("-")[0])}, {$set: modified});
            res.send("done");
        }catch{}
    }
    modules.modifyPassword = async function (req, res){
        try{
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let salt = await mongodb.collection("credentials").find({_id: new ObjectId(req.headers.auth.split("-")[0])}).project({salt: 1}).toArray();
            if (salt.length == 0){res.send(errors["433"].errorify()); return};
            let newPassword = sha256(req.query.new + "" + salt[0].salt);
            let oldPassword = sha256(req.query.old + "" + salt[0].salt);
            let result = await mongodb.collection("credentials").updateOne({_id: new ObjectID(req.headers.auth.split("-")[0]), password: oldPassword}, {$set: {password: newPassword}});
            if (result.matchedCount == 0){res.send(errors["433"].errorify());return}
            res.send("done");
        }catch{}
    }
    modules.getPlayerPublicInfo = async function (req, res){
        try{
            if (!(req.query.playerId)){res.send(errors["792"].errorify()); return;}
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            if (!(await modules.ownsPlayer(req.query.playerId, req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let result = await mongodb.collection("players").find({_id: new ObjectId(req.query.playerId)}).project({contacts: 1, age: 1, sex: 1, position: 1, shirtnumber: 1}).toArray();
            if (result.length == 0){res.send(errors["433"].errorify()); return}
            res.send(result[0]);
        }catch{
        }
    }
    modules.changeTitle = async function (req, res){
        try{
            if (!(req.headers.auth && req.query.id && req.query.convoId && req.query.title)){res.send(errors["792"].errorify()); return};
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            await mongodb.collection("conversations").updateOne({_id: new ObjectID(req.query.convoId), participants: {$in: [req.headers.auth.split("-")[0]]}}, {$set: {title: req.query.title}});
            res.send("done");
        }catch{

        }
    }
    modules.getParticipantsList = async function (req, res){
        try{
            if (!(req.headers.auth && req.query.id && req.query.convoId)){res.send(errors["792"].errorify()); return};
            if (!(await credentials.verify(req.headers.auth))){res.send(errors["993"].errorify()); return;}
            let result = await mongodb.collection("conversations").find({_id: new ObjectID(req.query.convoId), participants: {$in: [req.headers.auth.split("-")[0]]}}).project({participants: 1}).toArray();
            if (result.length == 0){res.send(errors["433"].errorify()); return}
            let participants = [];
            for (var j = 0; j < result[0].participants.length; j++){
                let user = await modules.getUserInformation(result[0].participants[j]);
                if (user){
                    participants.push({
                        first: user.first,
                        last: user.last,
                        id: user._id
                    });
                }
            }
            res.send(participants);
        }catch{

        }
    }
    return modules;
};