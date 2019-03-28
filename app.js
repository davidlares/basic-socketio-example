const http = require('http').createServer(server) // plain NodeJs Server
const fs = require('fs')
const io = require('socket.io')(http) // Server instance required

// initial counter
let connections = 0

// plain NodeJS server
function server(req,res){
  fs.readFile('index.html', (err,data) => {
    if(err) {
      res.writeHead('500',{'Content-type': 'text/html'})
      return res.end('Internal server error')
    } else {
      res.writeHead('200',{'Content-type': 'text/html'})
      return res.end(data,'utf-8')
    }
  })
}

// running server
http.listen(3000, () => console.log('Server running'))
// establishing connection
io.on('connection', socket => {
  // emmiting message
  socket.emit('hello',{message:'Hello, Socket'})
  socket.broadcast.emit('hello',{message:'Hello, Socket'})
  // receiving from client
  socket.on('response', data => console.log(data));
  // once a user is added to the room -> increase by 1
  connections++
  // displaying user connection
  socket.emit('connected-user', {connections})
  socket.broadcast.emit('connected-user', {connections})
  // socket disconnection
  socket.on('disconnect', () => {
    connections--
    socket.broadcast.emit('connected-user', {connections})
  })
})
