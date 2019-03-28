## Socket.IO cycle

  1. Main events: `connection` and `disconnect`, this helps setting the bidi connections socket
  2. Events: create own events for custom functionality, using the `emit()` function
  3. `emit()`: like the methods says, this emits a message (`broadcast`) to all the connected clients
  4. `broadcast.emit()` -> this executes the `emit()` function
  5. This applies to `server` and `clients` working logic
