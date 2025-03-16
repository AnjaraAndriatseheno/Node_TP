import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './chat.css'; 

const socket = io('http://localhost:9000'); 

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (msgData) => {
      setMessages((prev) => [...prev, msgData]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const msgData = { text: message, timestamp: new Date().toISOString() };
      socket.emit('message', msgData); 
      setMessages([...messages, msgData]); 
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <h2>Chat en temps réel</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>Utilisateur :</strong> {msg.text}
            <div className="timestamp">{new Date(msg.timestamp).toLocaleTimeString()}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Écris un message..."
        />
        <button onClick={sendMessage}>Envoyer</button>
      </div>
    </div>
  );
};

export default Chat;
