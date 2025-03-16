import express from 'express'
import { Server } from 'socket.io'
import http from 'http'
import path from 'path'
import { fileURLToPath } from 'url';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(app);
const io = new Server(server)

io.on('connection', (socket) => {
    console.log('Utilisateur connecté:', socket.id);
  
    socket.on('message', (msg) => {
      console.log('Message reçu:', msg);
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.listen({port}, () =>{
    console.log(`Serveur en écoute sur le port ${port}`)
})

