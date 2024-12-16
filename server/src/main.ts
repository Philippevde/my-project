import type { RequestHandler } from "express";

// Définir la fonction sayWelcome
const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to Wild Series !");
};

// Charger les variables d'environnement depuis le fichier .env
import "dotenv/config";

// Vérifier la connexion à la base de données
// Note: Ceci est optionnel et peut être supprimé si la connexion à la base de données
// n'est pas nécessaire au démarrage de l'application
import "../database/checkConnection";

// Importer l'application Express depuis ./app
import app from "./app";

// Ajouter la route GET /
app.get("/", sayWelcome);

// Obtenir le port à partir des variables d'environnement
const port = process.env.APP_PORT || 3310;

// Démarrer le serveur et écouter sur le port spécifié
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
