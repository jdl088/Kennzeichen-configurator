const stadtcodeEl = document.getElementById("stadtcode");
const resultatEl = document.getElementById("resultat");

const stadtcodes = ["B", "M", "HH", "S", "K", "F", "AA", "AC", "BIT", "DON", "ES", "ER", "GÖ", "UL"];

stadtcodes.forEach(code => {
  const opt = document.createElement("option");
  opt.value = code;
  opt.textContent = code;
  stadtcodeEl.appendChild(opt);
});

document.getElementById("config-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const stadt = stadtcodeEl.value;
  const buchstaben = document.getElementById("buchstaben").value.toUpperCase();
  const zahlen = document.getElementById("zahlen").value;

  if (!/^[A-Z]{1,2}$/.test(buchstaben) || !/^\d{1,4}$/.test(zahlen)) {
    resultatEl.textContent = "Ungültiges Format!";
    return;
  }

  resultatEl.textContent = `${stadt} ${buchstaben} ${zahlen}`;
});