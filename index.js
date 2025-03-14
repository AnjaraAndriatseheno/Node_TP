import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
import connectDB from './src/db/db.js'
import router from './src/routes/logsRoutes.js'
import { Server as SocketIO } from 'socket.io'

dotenv.config()

const app = express()

const server = http.createServer(app)

const io = new SocketIO(server)

connectDB()

app.use(express.json())

app.use(router)

io.on('connection', (socket) => {
  console.log('Un utilisateur est connecté')

  // Lorsqu'un message est envoyé depuis le frontend
  socket.on('message', async (msgData) => {
    try {
      const message = new Message(msgData)
      await message.save()

      // Émettre le message à tous les utilisateurs connectés
      io.emit('message', msgData)
    } catch (error) {
      console.log('Erreur lors de l\'enregistrement du message', error)
    }
  })

  // Lorsqu'un utilisateur se déconnecte
  socket.on('disconnect', () => {
    console.log('Un utilisateur s\'est déconnecté')
  })
})

const port = process.env.PORT 
server.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`)
})
