const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        method: ['GET','POST']
    }
});


io.on('connection', (socket) => {
    socket.emit('me', socket.id);

    socket.on('disconnect', () =>{
        socket.broadcast.emit("Call ended!");
    })

    socket.on("calluser", ({userToCall, signalData, from, name}) => {
        io.to(userToCall).emit("calluser", {signal: signalData, from, name});
    })

    socket.on("answercall", (data) => {
        io.to(data.to).emit('callaccepted', data.signal);
    })
});


app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Server is running!");
})

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
