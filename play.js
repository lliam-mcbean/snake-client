const { connect } = require('./client.js');
const { setupInput } = require('./input.js');

// connect to server
console.log("connecting...");
connect();

// handle user input
const conn = connect();
setupInput(conn);