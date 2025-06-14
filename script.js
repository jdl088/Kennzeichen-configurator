body {
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #eee;
  margin: 0;
  padding: 1rem;
}

main {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
}

input, select, button {
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
}

#funny-btn {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s;
}

#funny-btn:hover {
  transform: scale(1.05);
}

#resultat {
  margin-top: 1rem;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* EU-Kennzeichen Styles */
.kennzeichen {
  background: white;
  border: 3px solid #000;
  border-radius: 8px;
  display: flex;
  font-family: 'Arial Black', Arial, sans-serif;
  font-weight: 900;
  font-size: 2rem;
  color: #000;
  height: 80px;
  min-width: 300px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  margin: 10px 0;
}

.kennzeichen .eu-stripe {
  background: #003d82;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.kennzeichen .eu-stripe .stars {
  color: #ffff00;
  font-size: 0.8rem;
  line-height: 0.7;
  margin-bottom: 2px;
}

.kennzeichen .eu-stripe .d {
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

.kennzeichen .content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  letter-spacing: 3px;
}

/* Funny Button Animation */
.funny-result .kennzeichen {
  animation: bounce 0.5s;
}

.joke-text {
  margin-top: 10px;
  font-size: 1rem;
  font-style: italic;
  color: #666;
  font-family: sans-serif;
  font-weight: normal;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}
