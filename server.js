const net = require("net");

// Port de la socket pour le serveur
const PORT = 5001;

// Création du serveur
const server = net.createServer((socket) => {
  console.log("--- Client connecté.");

  // Écouter les requêtes du client
  socket.on("data", (data) => {
    try {
      // Parse les données reçues comme JSON
      const request = JSON.parse(data);

      if (request.request === "echo") {
        
        const response = request.params.text;
        socket.write(`Echo : ${response}`);
      } else {
  
        socket.write("Erreur : type de requête non supporté.");
      }
    } catch (error) {
      
      socket.write("Erreur : données reçues non valides.");
    }
  });

  socket.on("end", () => {
    console.log("--- Client déconnecté.");
  });
});

// Démarre le serveur sur le port 5001
server.listen(PORT, () => {
  console.log(`Serveur RPC en écoute sur le port ${PORT}`);
});
