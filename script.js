const stadtcodeEl = document.getElementById("stadtcode");
const resultatEl = document.getElementById("resultat");

const stadtcodes = ["B", "M", "HH", "S", "K", "F", "AA", "AC", "BIT", "DON", "ES", "ER", "GÖ", "UL"];

// Lustige Kennzeichen-Kombinationen mit Wortspielen
const funnyKennzeichen = [
  // Klassische deutsche/englische Wortspiele
  { code: "B", letters: "AD", numbers: "42", joke: "B-AD 42 - Bad luck! Pech gehabt!" },
  { code: "B", letters: "EE", numbers: "1", joke: "B-EE 1 - Bee Number One! 🐝" },
  { code: "B", letters: "UY", numbers: "1", joke: "B-UY 1 - Buy one, get one free!" },
  { code: "B", letters: "IG", numbers: "1", joke: "B-IG 1 - Big Number One!" },
  { code: "B", letters: "ET", numbers: "100", joke: "B-ET 100 - Wette 100%!" },
  { code: "B", letters: "Y", numbers: "2", joke: "B-Y 2 - Bye bye!" },
  { code: "B", letters: "RO", numbers: "123", joke: "B-RO 123 - Bro, echt jetzt?" },
  
  { code: "M", letters: "EH", numbers: "123", joke: "M-EH 123 - Meh... 🤷‍♂️" },
  { code: "M", letters: "OO", numbers: "0", joke: "M-OO 0 - Moo! Kuh-l! 🐄" },
  { code: "M", letters: "E", numbers: "2", joke: "M-E 2 - Me too!" },
  { code: "M", letters: "AD", numbers: "1", joke: "M-AD 1 - Mad as hell!" },
  { code: "M", letters: "Y", numbers: "1", joke: "M-Y 1 - My number one!" },
  { code: "M", letters: "OM", numbers: "1", joke: "M-OM 1 - Mama ist die Beste!" },
  { code: "M", letters: "IX", numbers: "6", joke: "M-IX 6 - Mix it up!" },
  
  { code: "HH", letters: "MM", numbers: "69", joke: "HH-MM 69 - Hmmm... 🤔" },
  { code: "HH", letters: "I", numbers: "5", joke: "HH-I 5 - Hi Five! ✋" },
  { code: "HH", letters: "A", numbers: "1", joke: "HH-A 1 - Haha, Nummer 1!" },
  { code: "HH", letters: "OT", numbers: "1", joke: "HH-OT 1 - Hot stuff!" },
  
  { code: "S", letters: "OS", numbers: "911", joke: "S-OS 911 - SOS! Hilfe!" },
  { code: "S", letters: "EE", numbers: "4", joke: "S-EE 4 - See you later!" },
  { code: "S", letters: "O", numbers: "1337", joke: "S-O 1337 - So elite!" },
  { code: "S", letters: "AD", numbers: "1", joke: "S-AD 1 - Sad but true!" },
  { code: "S", letters: "UN", numbers: "1", joke: "S-UN 1 - Sonne scheint!" },
  { code: "S", letters: "LY", numbers: "1", joke: "S-LY 1 - Sly like a fox!" },
  { code: "S", letters: "KY", numbers: "1", joke: "S-KY 1 - Sky is the limit!" },
  { code: "S", letters: "EX", numbers: "1", joke: "S-EX 1 - Sexy Beast!" },
  
  { code: "K", letters: "O", numbers: "1337", joke: "K-O 1337 - Knockout Elite!" },
  { code: "K", letters: "OO", numbers: "11", joke: "K-OO 11 - Cool Elf!" },
  { code: "K", letters: "ID", numbers: "1", joke: "K-ID 1 - Kid Nummer 1!" },
  { code: "K", letters: "EY", numbers: "1", joke: "K-EY 1 - Key to success!" },
  { code: "K", letters: "ISS", numbers: "1", joke: "K-ISS 1 - Kiss me!" },
  
  { code: "F", letters: "UN", numbers: "4", joke: "F-UN 4 - Fun for all!" },
  { code: "F", letters: "LY", numbers: "747", joke: "F-LY 747 - Fly like Boeing!" },
  { code: "F", letters: "AT", numbers: "1", joke: "F-AT 1 - Fat chance!" },
  { code: "F", letters: "IT", numbers: "1", joke: "F-IT 1 - Fit wie ein Turnschuh!" },
  { code: "F", letters: "IX", numbers: "1", joke: "F-IX 1 - Fix it!" },
  { code: "F", letters: "EW", numbers: "1", joke: "F-EW 1 - Few and proud!" },
  
  { code: "AA", letters: "H", numbers: "1", joke: "AA-H 1 - Ahhh, nummer eins!" },
  { code: "AA", letters: "A", numbers: "123", joke: "AA-A 123 - Triple A Rating!" },
  { code: "AA", letters: "L", numbers: "1", joke: "AA-L 1 - All in one!" },
  
  { code: "AC", letters: "DC", numbers: "220", joke: "AC-DC 220 - Highway to Hell! ⚡" },
  { code: "AC", letters: "E", numbers: "1", joke: "AC-E 1 - Ace of Spades! ♠️" },
  { code: "AC", letters: "ID", numbers: "1", joke: "AC-ID 1 - Acid House!" },
  
  { code: "BIT", letters: "E", numbers: "8", joke: "BIT-E 8 - Byte Eight!" },
  { code: "BIT", letters: "CH", numbers: "3", joke: "BIT-CH 3 - Coding Queen!" },
  
  { code: "DON", letters: "T", numbers: "404", joke: "DON-T 404 - Not Found!" },
  { code: "DON", letters: "E", numbers: "99", joke: "DON-E 99 - Done and Done!" },
  
  { code: "ES", letters: "S", numbers: "3", joke: "ES-S 3 - Ess drei mal!" },
  { code: "ER", letters: "R", numbers: "0", joke: "ER-R 0 - Error Zero!" },
  { code: "GÖ", letters: "D", numbers: "7", joke: "GÖ-D 7 - God Seven!" },
  { code: "UL", letters: "OL", numbers: "2", joke: "UL-OL 2 - Ultra LOL!" },
  
  // Mehr kreative Wortspiele
  { code: "B", letters: "FF", numbers: "1", joke: "B-FF 1 - Best Friends Forever!" },
  { code: "B", letters: "RB", numbers: "Q", joke: "B-RB Q - Barbecue Time! 🔥" },
  { code: "B", letters: "OB", numbers: "1", joke: "B-OB 1 - Bob der Baumeister!" },
  { code: "B", letters: "UG", numbers: "404", joke: "B-UG 404 - Bug not found!" },
  { code: "B", letters: "AN", numbers: "1", joke: "B-AN 1 - Banane! 🍌" },
  { code: "B", letters: "AT", numbers: "1", joke: "B-AT 1 - Batman! 🦇" },
  { code: "B", letters: "OX", numbers: "1", joke: "B-OX 1 - Box Champion!" },
  { code: "B", letters: "US", numbers: "1", joke: "B-US 1 - Bus fahren!" },
  
  { code: "M", letters: "AN", numbers: "1", joke: "M-AN 1 - Mann oh Mann!" },
  { code: "M", letters: "AX", numbers: "1", joke: "M-AX 1 - Maximum Power!" },
  { code: "M", letters: "IN", numbers: "1", joke: "M-IN 1 - Mini Cooper!" },
  { code: "M", letters: "AP", numbers: "1", joke: "M-AP 1 - Map my route!" },
  { code: "M", letters: "AT", numbers: "1", joke: "M-AT 1 - Mathematik!" },
  { code: "M", letters: "UG", numbers: "1", joke: "M-UG 1 - Mug shot!" },
  { code: "M", letters: "UD", numbers: "1", joke: "M-UD 1 - Muddy Waters!" },
  
  { code: "HH", letters: "UG", numbers: "1", joke: "HH-UG 1 - Hug me tight!" },
  { code: "HH", letters: "AM", numbers: "1", joke: "HH-AM 1 - Hamburg calling!" },
  { code: "HH", letters: "EY", numbers: "1", joke: "HH-EY 1 - Hey there!" },
  { code: "HH", letters: "IT", numbers: "1", joke: "HH-IT 1 - Hit the road!" },
  
  { code: "S", letters: "IT", numbers: "1", joke: "S-IT 1 - Sit down please!" },
  { code: "S", letters: "ET", numbers: "1", joke: "S-ET 1 - Set and ready!" },
  { code: "S", letters: "IP", numbers: "1", joke: "S-IP 1 - Sip some tea!" },
  { code: "S", letters: "IR", numbers: "1", joke: "S-IR 1 - Sir, yes sir!" },
  { code: "S", letters: "HY", numbers: "1", joke: "S-HY 1 - Shy but sweet!" },
  { code: "S", letters: "PY", numbers: "007", joke: "S-PY 007 - Bond, James Bond!" },
  { code: "S", letters: "PA", numbers: "1", joke: "S-PA 1 - Spa day!" },
  { code: "S", letters: "IN", numbers: "1", joke: "S-IN 1 - Sin City!" },
  { code: "S", letters: "IK", numbers: "1", joke: "S-IK 1 - Sicher ist sicher!" },
  
  { code: "K", letters: "AT", numbers: "1", joke: "K-AT 1 - Katze! 🐱" },
  { code: "K", letters: "AR", numbers: "1", joke: "K-AR 1 - Car racing!" },
  { code: "K", letters: "IT", numbers: "1", joke: "K-IT 1 - Kit Kat!" },
  { code: "K", letters: "IN", numbers: "1", joke: "K-IN 1 - King of the road!" },
  { code: "K", letters: "UP", numbers: "1", joke: "K-UP 1 - Cup of coffee!" },
  { code: "K", letters: "US", numbers: "1", joke: "K-US 1 - Kuss mich! 💋" },
  
  { code: "F", letters: "OX", numbers: "1", joke: "F-OX 1 - Foxy Lady! 🦊" },
  { code: "F", letters: "AR", numbers: "1", joke: "F-AR 1 - Far out, man!" },
  { code: "F", letters: "ED", numbers: "1", joke: "F-ED 1 - Fed up!" },
  { code: "F", letters: "AN", numbers: "1", joke: "F-AN 1 - Fan-tastisch!" },
  { code: "F", letters: "AB", numbers: "1", joke: "F-AB 1 - Fabelhaft!" },
  { code: "F", letters: "OG", numbers: "1", joke: "F-OG 1 - Foggy day!" },
  { code: "F", letters: "EE", numbers: "1", joke: "F-EE 1 - Fee zahlen!" },
  
  // Mehr Stadtcodes mit Wortspielen
  { code: "AA", letters: "RT", numbers: "1", joke: "AA-RT 1 - Art for art's sake!" },
  { code: "AA", letters: "LL", numbers: "1", joke: "AA-LL 1 - All you need!" },
  { code: "AA", letters: "GE", numbers: "1", joke: "AA-GE 1 - Age like wine!" },
  { code: "AA", letters: "DD", numbers: "1", joke: "AA-DD 1 - Add some spice!" },
  { code: "AA", letters: "SK", numbers: "1", joke: "AA-SK 1 - Ask me anything!" },
  
  { code: "AC", letters: "TI", numbers: "ON", joke: "AC-TI ON - Action! 🎬" },
  { code: "AC", letters: "HE", numbers: "1", joke: "AC-HE 1 - Ache in my heart!" },
  
  // Zahlenspiele
  { code: "B", letters: "E", numbers: "4", joke: "B-E 4 - Before you go!" },
  { code: "M", letters: "E", numbers: "2", joke: "M-E 2 - Me too!" },
  { code: "S", letters: "E", numbers: "7", joke: "S-E 7 - Seven deadly sins!" },
  { code: "F", letters: "O", numbers: "4", joke: "F-O 4 - Four you!" },
  { code: "K", letters: "N", numbers: "8", joke: "K-N 8 - Create something!" },
  { code: "B", letters: "G", numbers: "1", joke: "B-G 1 - Big Number One!" },
  
  // Internet/Gaming Referenzen
  { code: "F", letters: "TW", numbers: "1", joke: "F-TW 1 - For The Win!" },
  { code: "LOL", letters: "1", numbers: "1", joke: "LOL-1 1 - Laugh Out Loud!" },
  { code: "OMG", letters: "1", numbers: "1", joke: "OMG-1 1 - Oh My God!" },
  { code: "WTF", letters: "1", numbers: "1", joke: "WTF-1 1 - What The...!" },
  { code: "BRB", letters: "1", numbers: "1", joke: "BRB-1 1 - Be Right Back!" },
  { code: "AFK", letters: "1", numbers: "1", joke: "AFK-1 1 - Away From Keyboard!" },
  
  // Food & Drinks
  { code: "B", letters: "EER", numbers: "1", joke: "B-EER 1 - Beer o'clock! 🍺" },
  { code: "W", letters: "INE", numbers: "1", joke: "W-INE 1 - Wine time! 🍷" },
  { code: "T", letters: "EA", numbers: "1", joke: "T-EA 1 - Tea time! ☕" },
  { code: "C", letters: "AKE", numbers: "1", joke: "C-AKE 1 - Let them eat cake! 🎂" },
  { code: "P", letters: "IZZ", numbers: "A", joke: "P-IZZ A - Pizza time! 🍕" },
  
  // Emotionen
  { code: "H", letters: "APY", numbers: "1", joke: "H-APY 1 - Happy go lucky! 😊" },
  { code: "S", letters: "AD", numbers: "1", joke: "S-AD 1 - Sad but true! 😢" },
  { code: "M", letters: "AD", numbers: "1", joke: "M-AD 1 - Mad as a hatter! 😠" },
  { code: "L", letters: "OVE", numbers: "1", joke: "L-OVE 1 - Love is all! ❤️" },
  { code: "H", letters: "ATE", numbers: "1", joke: "H-ATE 1 - Hate is heavy!" },
  
  // Tiere
  { code: "D", letters: "OG", numbers: "1", joke: "D-OG 1 - Dog is man's best friend! 🐕" },
  { code: "C", letters: "AT", numbers: "1", joke: "C-AT 1 - Cat lady! 🐱" },
  { code: "F", letters: "ISH", numbers: "1", joke: "F-ISH 1 - Fish and chips! 🐟" },
  { code: "B", letters: "IRD", numbers: "1", joke: "B-IRD 1 - Bird is the word! 🐦" },
  { code: "P", letters: "IG", numbers: "1", joke: "P-IG 1 - Pig in a poke! 🐷" },
  
  // Farben
  { code: "R", letters: "ED", numbers: "1", joke: "R-ED 1 - Red hot! 🔴" },
  { code: "B", letters: "LU", numbers: "1", joke: "B-LU 1 - Blue Monday! 🔵" },
  { code: "G", letters: "RN", numbers: "1", joke: "G-RN 1 - Green peace! 🟢" },
  { code: "Y", letters: "EL", numbers: "1", joke: "Y-EL 1 - Yellow submarine! 🟡" },
  
  // Deutsche Wortspiele
  { code: "B", letters: "IER", numbers: "1", joke: "B-IER 1 - Bier her! 🍺" },
  { code: "W", letters: "URS", numbers: "T", joke: "W-URS T - Wurst case scenario! 🌭" },
  { code: "B", letters: "ROT", numbers: "1", joke: "B-ROT 1 - Brot und Butter! 🍞" },
  { code: "K", letters: "ASE", numbers: "1", joke: "K-ASE 1 - Käse! 🧀" },
  { code: "F", letters: "ISH", numbers: "1", joke: "F-ISH 1 - Fisch! 🐟" },
  { code: "H", letters: "UND", numbers: "1", joke: "H-UND 1 - Hund! 🐕" },
  { code: "K", letters: "ATZ", numbers: "1", joke: "K-ATZ 1 - Katze! 🐱" },
  { code: "A", letters: "UTO", numbers: "1", joke: "A-UTO 1 - Auto fahren! 🚗" }
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
    resultatEl.innerHTML = '<div style="color: red; font-weight: bold;">Ungültiges Format!</div>';
    return;
  }

  resultatEl.innerHTML = `
    <div class="kennzeichen">
      <div class="eu-stripe">
        <div class="stars">★★★<br>★★★<br>★★★<br>★★★</div>
        <div class="d">D</div>
      </div>
      <div class="content">${stadt} ${buchstaben} ${zahlen}</div>
    </div>
  `;
});

// Funny Kennzeichen Generator
document.getElementById("funny-btn").addEventListener("click", () => {
  const randomFunny = funnyKennzeichen[Math.floor(Math.random() * funnyKennzeichen.length)];
  
  resultatEl.className = "funny-result";
  resultatEl.innerHTML = `
    <div>
      <div class="kennzeichen">
        <div class="eu-stripe">
          <div class="stars">★★★<br>★★★<br>★★★<br>★★★</div>
          <div class="d">D</div>
        </div>
        <div class="content">${randomFunny.code} ${randomFunny.letters} ${randomFunny.numbers}</div>
      </div>
      <div class="joke-text">${randomFunny.joke}</div>
    </div>
  `;
});
