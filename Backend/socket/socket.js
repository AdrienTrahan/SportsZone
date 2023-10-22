
module.exports = function (server, mongodb, queries){
    let modules = {};
    const credentials = require('../credentials/registration')(mongodb);
    let io = require('socket.io')(server);
    io.set('origins', 'http://localhost:8100');
    io.on("connection", (socket) => {
        let userInfo = {};
        let roomId = "";
        let convoId = "";
        socket.on("joinRoom", async ({room, token}) => {
            try{
                let roomAccess = await queries.hasRoomAccess(token.split("-")[0], room);
                if ((await credentials.verify(token)) && roomAccess.access){
                    userInfo = await credentials.getUserInfo(token.split("-")[0]);
                    socket.join(room);
                    roomId = room;
                    convoId = roomAccess.id;
                    socket.emit("joined", "true");;
                }
            }catch(err){
            }
        })
        socket.on("sendMessage", async (data) => {
            if (data.text != undefined){
                id = await queries.sendMessage(convoId, "text", data.text + "", userInfo);
                if (!id){return}
                io.to(roomId).emit("receiveMessage", {convo: convoId, type: "text", id: id, userInfo: userInfo, data: data.text})
            }else if (data.media != undefined){
                id = await queries.sendMessage(convoId, "media", data.media + "", userInfo);
                if (!id){return}
                io.to(roomId).emit("receiveMessage", {convo: convoId, type: "media", id: id, userInfo: userInfo, data: data.media})
            }
            
        })
        socket.on("getMessages", async (data) => {
            console.log(data);
            let fullMessages = await queries.getMessages(convoId, data.index);
            if (fullMessages && fullMessages.length > 0){
                socket.emit("bulkMessages", fullMessages);
            }else{
                socket.emit("bulkMessages", "end");
            }
            
        });
    })
    return modules;
}