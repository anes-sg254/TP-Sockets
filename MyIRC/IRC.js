const net = require('net');


const clients = [];


function broadcast(message, sender) {
  clients.forEach((client) => {
    if (client !== sender) {
      client.write(message+'\n'+'\r');
    }
  });
}

const server = net.createServer((socket) => {
  socket.write('Bienvenue sur le serveur IRC !\n\r');
  socket.write('Veuillez entrer votre pseudo : ');

  let username = null;
  let buffer = ''; 
  socket.on('data', (data) => {
    buffer += data.toString(); 

    
    if (buffer.includes('\n')) {
      const lines = buffer.split('\n');
      buffer = lines.pop(); 

      for (const line of lines) {
        const message = line.trim();

        
        if (!username) {
          username = message;
          clients.push(socket);
          socket.write(`Bienvenue, ${username} ! Vous pouvez maintenant chatter.\n\r`);
          broadcast(`${username} a rejoint le chat.`, socket);
        } else {
          
          broadcast(`${username}: ${message}`, socket);
        }
      }
    }
  });

  socket.on('end', () => {
    if (username) {
      clients.splice(clients.indexOf(socket), 1);
      broadcast(`${username} a quitté le chat.\n`, socket);
    }
  });


  socket.on('error', (err) => {
    console.error(`Erreur : ${err.message}`);
  });
});

server.listen(6667, () => {
  console.log('Serveur IRC démarré sur le port 6667.');
});
