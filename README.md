# davidSocketIO

This repo is a single demo for counting "active users" (actually browser tabs) on a static HTML file. This project is a Web server on plain NodeJS and Socket.io package for handling websockets

## Sockets

  Is a simple communication protocol that creates a permanent server/client communication with a low latency.

  The websockets commnications are bidi and also event oriented (usually used for messages), is very used on messaging platforms, multiplayer games and collab apps.

## SocketIO

  This is in my opinion the best and simple approach of socket usage for simple demos. This works very well on Full Duplex communications and got a pretty good fallback integration with old browsers

  Please refer to the `socket.md` file for the common lifecycle of the library

## Nodemon (development)

  This package helps avoid starting and closing the server anytime changes occurs in development. Actually is not a project dependency but it could be a good approach of usage in local environments.

## Run

  Assuming you have the Node environment perfectly installed (with the nodemon) just run the `npm start`, and start opening tabs on `localhost:3000`

## Credits
  - [David Lares](https://twitter.com/davidlares3)

## Licence

  - [MIT](https://opensource.org/licenses/MIT)
