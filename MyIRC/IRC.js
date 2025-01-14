const net = require('net');

const clients = [];
const utilisateurs = [];

function broadcast(message, sender) {
  clients.forEach((client) => {
    if (client !== sender) {
      client.write(message + '\n\r');
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
          utilisateurs.push(username);
          socket.write(`Bienvenue, ${username} ! Vous pouvez maintenant chatter.\n\r`);
          broadcast(`${username} a rejoint le chat.`, socket);
          
        } 
        else {
            if(message=="/list"){
              var i=1;
             // Utilisateurs en ligne :
              utilisateurs.forEach((user)=>{

                socket.write(`# ${i} ${user}\n\r`);
                i++;

              })
                
                
                
              }else{
                
                broadcast(`${username}: ${message}`, socket);
              }
        }
      }
    }
  });
function deconnexion(){
    socket.on('end', () => {
        if (username) {
          clients.splice(clients.indexOf(socket), 1);
          utilisateurs.splice(utilisateurs.indexOf(username), 1);
          broadcast(`${username} est parti.`, socket);
        }
      });

}


  socket.on('error', (err) => {
    console.error(`Erreur : ${err.message}`);
    if (username) {
        clients.splice(clients.indexOf(socket), 1);
        utilisateurs.splice(utilisateurs.indexOf(username), 1);
        broadcast(`${username} est parti.`, socket);
      }
  });
});

server.listen(6667, () => {
  console.log('Serveur IRC démarré sur le port 6667.');
});
