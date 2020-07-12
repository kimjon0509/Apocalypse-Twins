const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 3001;

if (port == null || port == "") {
  port = 8000;
}

// const index = require("./routes/index");

const app = express();
// app.use(index);

const server = http.createServer(app);

const io = socketIo(server);
let player = [];

//iterate through rooms and see num of users

// if there is an empty room put them in that room

io.on("connection", (socket) => {
  console.log("New client connected");
  // socket.playerArr = player;
  socket.on('join', (room) => {
    console.log('joined:',room);

    io.in(room).clients((err, clients) => {
      if (clients.length <= 1) {
        console.log('client length:',clients.length);
        socket.join(room, () => {
          console.log('connected to',room);
          io.in(room).clients((err, clients) => {
          io.sockets.in(room).emit("new user", {players: clients})
          console.log('client num', clients)
          })
          socket.emit('room connected', {playerId:socket.id, room});
        });
      } else {
        socket.emit('room full', {message: 'room is full'})
      }
    })
  })

  socket.on('game', (scene, roomNum) => {
    io.sockets.in(roomNum).emit('game', scene)
    console.log('server scene')
  });

  socket.on('rune selected', (selected, roomNum) => {
    console.log(selected);
    // console.log(io.sockets)
    console.log('room rune selected:', roomNum)
    io.sockets.in(roomNum).emit('rune selected', selected)
  });

  // socket.on('timer', (message, roomNum) => {
  //   io.sockets.in(roomNum).emit('timer', message)
  // })

  socket.on('scene', (message, roomNum) => {
    io.sockets.in(roomNum).emit('scene', message)
  })

  socket.on('puzzle to choices', (message, roomNum) => {
    io.sockets.in(roomNum).emit('puzzle to choices', message)
  })

  socket.on('input box class', (message, roomNum) => {
    io.sockets.in(roomNum).emit('input box class', message)
  })

  socket.on('show', (message, roomNum) => {
    io.sockets.in(roomNum).emit('show', message)
  })

  socket.on('show best path', (message, roomNum) => {
    console.log(io.sockets)
    console.log('show best path', message, roomNum)
    io.sockets.in(roomNum).emit('show best path', message)
  })

  socket.on('room list', (message) => {
    io.emit('room list', message)
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    const index = player.indexOf(socket.id);
    player.splice(index, 1);

  });


});


server.listen(port, () => console.log(`Listening on port ${port}`));