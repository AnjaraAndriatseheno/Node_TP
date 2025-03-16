import mongoose from 'mongoose'

// le schéma pour un message
const messageSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// modèle pour le message
const Message = mongoose.model('Message', messageSchema)

export default Message
