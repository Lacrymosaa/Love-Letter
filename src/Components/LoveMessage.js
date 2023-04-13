import React, { useState, useEffect } from 'react';

const LoveMessage = ({ message }) => {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i === message.length) {
        setShowHeart(true);
        clearInterval(intervalId);
      } else {
        setDisplayedMessage((prevMessage) => prevMessage + message.charAt(i));
        i++;
      }
    }, 200);
    return () => clearInterval(intervalId);
  }, [message]);

  return (
    <div className="love-message-container">
      <h1 className="love-message">{displayedMessage}</h1>
    </div>
  );
};

export default LoveMessage;
