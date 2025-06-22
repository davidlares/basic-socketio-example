## davidSocketIO

This repo is a single demo for counting "active users" (actually browser tabs) on a static HTML file. This project is a Web server on plain NodeJS and the Socket.io package for handling websockets

## Sockets

  It is a simple communication protocol that creates a permanent server/client communication with low latency.

  The websockets communications are bidi and also event-oriented (usually used for messages), and are widely used on messaging platforms, multiplayer games, and collab apps.

## SocketIO

  This is, in my opinion, the best and simplest approach to socket usage for simple demos. This works very well on Full Duplex communications and has a pretty good fallback integration with old browsers

  Please refer to the `socket.md` file for the common lifecycle of the library

## Nodemon (development)

  This package helps avoid starting and closing the server anytime changes occur in development. Actually is not a project dependency, but it could be a good approach for usage in local environments.

  Installation: `npm install -g nodemon`

## Run

  Assuming you have the Node environment perfectly installed (with the nodemon), just run the `npm start`, and start opening tabs on `localhost:3000`

  The npm start command runs the following script `nodemon -e html app.js`

## Credits
[David Lares S](https://davidlares.com)

## License
[MIT](https://opensource.org/licenses/MIT)
