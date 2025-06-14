// Deutsche Städte/Kreise Codes
const stadtCodes = [
  'B', 'M', 'HH', 'K', 'F', 'S', 'D', 'DO', 'E', 'L', 'DD', 'H', 'N', 'DU', 'BO',
  'W', 'MS', 'MG', 'KR', 'AC', 'BN', 'OB', 'HL', 'OS', 'BS', 'KS', 'ER', 'WU',
  'UL', 'PF', 'HD', 'HN', 'RT', 'TU', 'RV', 'FN', 'VS', 'LB', 'GP', 'AA'
];

// Lustige Kennzeichen-Kombinationen
const funnyPlates = [
  { city: 'B', letters: 'AD', numbers: '42', joke: 'Berlin ist immer schlecht drauf! 😄' },
  { city: 'M', letters: 'UH', numbers: '123', joke: 'München macht UH-Laute! 🐄' },
  { city: 'HH', letters: 'MM', numbers: '69', joke: 'Hamburg ist lecker! 😋' },
  { city: 'K', letters: 'LO', numbers: '666', joke: 'Köln ist verrückt! 😈' },
  { city: 'F', letters: 'U', numbers: '2', joke: 'Frankfurt sagt es direkt! 😏' },
  { city: 'S', letters: 'OS', numbers: '911', joke: 'Stuttgart ruft um Hilfe! 🚨' },
  { city: 'DO', letters: 'OF', numbers: '420', joke: 'Dortmund ist entspannt! 😎' },
  { city: 'E', letters: 'GG', numbers: '1337', joke: 'Essen für Gamer! 🎮' },
  { city: 'B', letters: 'LA', numbers: '1', joke: 'Berlin bläht auf! 💨' },
  { city: 'M', letters: 'EH', numbers: '777', joke: 'München fragt nach! 🤔' },
  { city: 'HH', letters: 'EY', numbers: '123', joke: 'Hamburg grüßt! 👋' },
  { city: 'K', letters: 'AC', numbers: '30', joke: 'Köln ist kalt! ❄️' },
  { city: 'F', letters: 'FF', numbers: '404', joke: 'Frankfurt nicht gefunden! 🔍' },
  { city: 'S', letters: 'UP', numbers: '1', joke: 'Stuttgart macht hoch! 🚀' },
  { city: 'D', letters: 'ER', numbers: '1', joke: 'Düsseldorf ist der Erste! 🏆' }
];

// Kennzeichen HTML erstellen
function createKennzeichenHTML(city, letters, numbers) {
  return `
    <div class="kennzeichen">
      <div class="eu-stripe">
        <div class="stars">★★★<br>★★★<br>★★★<br>★★★</div>
        <div class="d">D</div>
      </div>
      <div class="content">
        ${city} ${letters} ${numbers}
      </div>
    </div>
  `;
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
  
  // Form Submit Handler
  document.getElementById('config-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const city = document.getElementById('stadtcode').value;
    const letters = document.getElementById('buchstaben').value.toUpperCase();
    const numbers = document.getElementById('zahlen').value;
    
    // Validierung
    if (!city || !letters || !numbers) {
      document.getElementById('resultat').innerHTML = '<p style="color: red;">Bitte alle Felder ausfüllen!</p>';
      return;
    }
    
    if (!/^[A-Z]{1,2}$/.test(letters)) {
      document.getElementById('resultat').innerHTML = '<p style="color: red;">Buchstaben müssen 1-2 Zeichen A-Z sein!</p>';
      return;
    }
    
    if (!/^[0-9]{1,4}$/.test(numbers)) {
      document.getElementById('resultat').innerHTML = '<p style="color: red;">Zahlen müssen 1-4 Ziffern sein!</p>';
      return;
    }
    
    // Kennzeichen erstellen
    const kennzeichenHTML = createKennzeichenHTML(city, letters, numbers);
    document.getElementById('resultat').innerHTML = kennzeichenHTML;
  });

  // Funny Button Handler
  document.getElementById('funny-btn').addEventListener('click', function() {
    const randomPlate = funnyPlates[Math.floor(Math.random() * funnyPlates.length)];
    
    const kennzeichenHTML = createKennzeichenHTML(
      randomPlate.city, 
      randomPlate.letters, 
      randomPlate.numbers
    );
    
    document.getElementById('resultat').innerHTML = `
      <div class="funny-result">
        ${kennzeichenHTML}
        <div class="joke-text">${randomPlate.joke}</div>
      </div>
    `;
  });

  // Input Validierung - Buchstaben
  document.getElementById('buchstaben').addEventListener('input', function(e) {
    e.target.value = e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
  });

  // Input Validierung - Zahlen
  document.getElementById('zahlen').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  });

});
