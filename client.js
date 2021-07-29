const net = require('net');
const { IP, PORT } = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('successfully connected to the server');
    conn.write('Name: DLM');
  });

  conn.on('data', (data) => {
    //console.log('server says: ', data);
    conn.write(data);
  });

  return conn;
};



module.exports = { connect };