const net = require("net");

const PORT = 5001;

// Connexion au serveur
const client = net.createConnection(PORT, "localhost", () => {
  console.log("--- Connecté au serveur.");
  const request = JSON.stringify({
    request: "echo",
    params: {
      text: "Ceci est un test.",
    },
  });
  // Requête pour appeler le serveur avec votre nom.
  client.write(request);
});

// Réception des réponses du serveur RPC
client.on("data", (data) => {
  const response = data.toString();

  console.log(response);
  client.end(); // Terminer la connexion après la réponse
});

client.on("end", () => {
  console.log("--- Déconnecté du serveur.");
});