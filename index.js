import express from 'express';
import dotenv from 'dotenv';

import routerLogs from './src/routes/logsRoutes.js';

dotenv.config();

const app = express();

const port = process.env.port

app.use(routerLogs);
app.get('/accueil', (req, res) => res.send("Bienvenue !"))
app.get('/*', (req, res) => res.status(404).send("Page Introuvable"))


app.listen(port, () => 
    console.log(`Le serveur est en écoute sur le serveur ${port}`)
)