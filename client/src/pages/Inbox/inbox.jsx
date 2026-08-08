import React, { useState, useEffect } from 'react';
import './Inbox.css'; // Import the updated styles

const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    // Simulating fetching messages from an API or local data
    const fetchMessages = async () => {
      const data = [
        { id: 1, subject: 'Welcome to Freejboard', sender: 'Admin', date: '2024-12-27', content: 'Thank you for joining Freejboard! We are glad to have you.' },
        { id: 2, subject: 'New Job Posting', sender: 'Freelancer', date: '2024-12-26', content: 'A new job posting is available for you to apply.' },
        { id: 3, subject: 'Account Update', sender: 'Support', date: '2024-12-25', content: 'Your account settings have been updated successfully.' },
      ];
      setMessages(data);
    };
    fetchMessages();
  }, []);

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };

  const handleBackToList = () => {
    setSelectedMessage(null);
  };

  return (
    <div className="inbox">
      <h1>Inbox</h1>

      {/* If no message is selected, show the list */}
      {!selectedMessage ? (
        <div className="messages-list">
          {messages.map((message) => (
            <div
              key={message.id}
              className="message-item"
              onClick={() => handleSelectMessage(message)}
            >
              <div className="message-summary">
                <span className="message-subject">{message.subject}</span>
                <span className="message-sender">{message.sender}</span>
                <span className="message-date">{message.date}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="message-details">
          <button className="back-button" onClick={handleBackToList}>
            &larr; Back to Inbox
          </button>
          <h2>{selectedMessage.subject}</h2>
          <p><strong>From:</strong> {selectedMessage.sender}</p>
          <p><strong>Date:</strong> {selectedMessage.date}</p>
          <div className="message-content">
            <p><strong>Content:</strong></p>
            <p>{selectedMessage.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inbox;
