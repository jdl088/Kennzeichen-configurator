const stadtcodeEl = document.getElementById("stadtcode");
const resultatEl = document.getElementById("resultat");
const funnyBtn = document.getElementById("funny-btn");

const stadtcodes = ["B", "M", "HH", "S", "K", "F", "AA", "AC", "BIT", "DON", "ES", "ER", "GÖ", "UL"];

// Lustige Kennzeichen-Kombinationen mit Wortspielen
const funnyKennzeichen = [
  // Deutsche Wortspiele
  { code: "B", letters: "AD", numbers: "42", joke: "B-AD 42 - Bad luck!" },
  { code: "M", letters: "EH", numbers: "123", joke: "M-EH 123 - Meh... 🤷‍♂️" },
  { code: "HH", letters: "MM", numbers: "69", joke: "HH-MM 69 - Hmmm... 🤔" },
  { code: "S", letters: "OS", numbers: "911", joke: "S-OS 911 - SOS! Hilfe!" },
  { code: "K", letters: "O", numbers: "1337", joke: "K-O 1337 - Knockout Elite!" },
  { code: "F", letters: "UN", numbers: "4", joke: "F-UN 4 - Fun for all!" },
  { code: "AA", letters: "H", numbers: "1", joke: "AA-H 1 - Ahhh, nummer eins!" },
  { code: "AC", letters: "DC", numbers: "220", joke: "AC-DC 220 - Highway to Hell!" },
  { code: "BIT", letters: "E", numbers: "8", joke: "BIT-E 8 - Byte Eight!" },
  { code: "DON", letters: "T", numbers: "404", joke: "DON-T 404 - Not Found!" },
  { code: "ES", letters: "S", numbers: "3", joke: "ES-S 3 - Ess drei mal!" },
  { code: "ER", letters: "R", numbers: "0", joke: "ER-R 0 - Error Zero!" },
  { code: "GÖ", letters: "D", numbers: "7", joke: "GÖ-D 7 - Göd Seven!" },
  { code: "UL", letters: "OL", numbers: "2", joke: "UL-OL 2 - Ultra LOL!" },
  
  // Weitere lustige Kombinationen
  { code: "B", letters: "EE", numbers: "1", joke: "B-EE 1 - Bee Number One! 🐝" },
  { code: "M", letters: "OO", numbers: "0", joke: "M-OO 0 - Moo! Kuh-l! 🐄" },
  { code: "HH", letters: "I", numbers: "5", joke: "HH-I 5 - Hi Five! ✋" },
  { code: "S", letters: "EE", numbers: "4", joke: "S-EE 4 - See you later!" },
  { code: "K", letters: "OO", numbers: "11", joke: "K-OO 11 - Cool Elf!" },
  { code: "F", letters: "LY", numbers: "747", joke: "F-LY 747 - Fly like Boeing!" },
  { code: "AA", letters: "A", numbers: "123", joke: "AA-A 123 - Triple A Rating!" },
  { code: "AC", letters: "E", numbers: "1", joke: "AC-E 1 - Ace of Spades!" },
  { code: "BIT", letters: "CH", numbers: "3", joke: "BIT-CH 3 - Bit*h Please!" },
  { code: "DON", letters: "E", numbers: "99", joke: "DON-E 99 - Done and Done!" }
];

// Stadtcodes zum Select hinzufügen
stadtcodes.forEach(code => {
  const opt = document.createElement("option");
  opt.value = code;
  opt.textContent = code;
  stadtcodeEl.appendChild(opt);
});

// Normaler Kennzeichen-Generator
document.getElementById("config-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const stadt = stadtcodeEl.value;
  const buchstaben = document.getElementById("buchstaben").value.toUpperCase();
  const zahlen = document.getElementById("zahlen").value;

  if (!/^[A-Z]{1,2}$/.test(buchstaben) || !/^\d{1,4}$/.test(zahlen)) {
    resultatEl.className = "";
    resultatEl.textContent = "Ungültiges Format!";
    return;
  }

  resultatEl.className = "";
  resultatEl.textContent = `${stadt} ${buchstaben} ${zahlen}`;
});

// Funny Kennzeichen Generator
funnyBtn.addEventListener("click", () => {
  const randomFunny = funnyKennzeichen[Math.floor(Math.random() * funnyKennzeichen.length)];
  
  resultatEl.className = "funny-result";
  resultatEl.innerHTML = `
    <div>
      <div style="font-size: 1.4rem; margin-bottom: 0.5rem;">
        ${randomFunny.code} ${randomFunny.letters} ${randomFunny.numbers}
      </div>
      <div style="font-size: 1rem; font-style: italic;">
        ${randomFunny.joke}
      </div>
    </div>
  `;
});
