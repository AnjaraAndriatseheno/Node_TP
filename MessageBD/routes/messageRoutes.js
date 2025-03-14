import express from 'express'
import Message from '../models/message.js'

const router = express.Router()

// Route pour récupérer tous les messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find()
    res.json(messages)
  } catch (error) {
    res.status(500).json({ message: 'Erreur de récupération des messages' })
  }
})

// Route pour supprimer tous les messages
router.delete('/messages', async (req, res) => {
  try {
    await Message.deleteMany();
    res.status(200).json({ message: 'Tous les messages ont été supprimés' })
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression des messages' })
  }
})

export default router
