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

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(9000, () =>{
    console.log(`Serveur en écoute sur le port ${port}`)
})

