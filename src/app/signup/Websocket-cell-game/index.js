const http = require("http");
const websocketServer = require("websocket").server
const httpServer = http.createServer();
httpServer.listen(9090, () => console.log("listening on 9090"));

const clients ={};

const wsServer = new websocketServer({
    "httpServer": httpServer
})
wsServer.on("request", request => {
    const connection = request.accept(null, request.origin);
    connection.on("open", ()=> console.log("opened!"));
    connection.on("close", ()=> console.log("closed!"));
    connection.on("message", message =>{
       const result = JSON.parse(message.utf8Data)

        console.log(result)
    });

const clientId = guid();
clients[clientId]={
     "connection": connection
    }

    const payLoad = {
        "method": "connect",
        "clientId": clientId
    }

    connection.send(JSON.stringify(payLoad))

})

function S4(){
    return (((1+Math.random())*0x10000)|0).toString(16).substring
}

const guid = () => (S4() + S4() + "-" + S4() + "-4" + S4().substring)