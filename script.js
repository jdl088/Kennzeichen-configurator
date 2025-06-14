const stadtcodeEl = document.getElementById("stadtcode");
const resultatEl = document.getElementById("resultat");
const kennzeichenImg = document.getElementById("kennzeichen-img");

const stadtcodes = ["A", "AA", "AB", "AC", "AE", "AH", "AIB", "AK", "AM", "AN", "ANA", "ANG", "ANK", "A\u00d6", "AP", "ARN", "ART", "AS", "ASL", "ASZ", "AT", "AU", "AUR", "AW", "AZ", "AZE", "B", "BA", "BAD", "BAR", "BB", "BBG", "BC", "BGL", "BI", "BIR", "BIT", "BK", "BL", "BLB", "BM", "BN", "BO", "BOR", "BOT", "BRA", "BRB", "BS", "BT", "B\u00dcD", "BUL", "BUZ", "BZ", "C", "CA", "CB", "CE", "CLP", "CO", "COC", "CUX", "CW", "D", "DA", "DAH", "DAN", "DAU", "DBR", "DD", "DE", "DEL", "DGF", "DH", "DL", "DLG", "DM", "DN", "DO", "DON", "DU", "D\u00dcW", "DW", "DZ", "E", "EA", "EBE", "EF", "EG", "EI", "EIC", "EIL", "EL", "EM", "EMS", "EN", "ER", "ERB", "ES", "ESW", "EU", "F", "FB", "FD", "FDS", "FF", "FFB", "FG", "FL", "FN", "FO", "FR", "FRG", "FS", "FT", "F\u00dc", "FW", "G", "GA", "GAP", "GE", "GEL", "GEO", "GER", "GF", "GG", "GGT", "GHA", "GI", "GL", "GM", "GN", "G\u00d6", "GP", "GR", "GS", "GT", "GTH", "G\u00dc", "GZ", "H", "HA", "HAL", "HAM", "HAS", "HB", "HBN", "HD", "HDH", "HE", "HEB", "HEF", "HEI", "HEL", "HER", "HF", "HG", "HH", "HI", "HL", "HM", "HN", "HO", "HOG", "HOL", "HOM", "HOR", "HP", "HR", "HS", "HSK", "HU", "HVL", "HWI", "HX", "HY", "IGB", "IK", "IN", "IZ", "J", "JE", "JL", "K", "KA", "KB", "KC", "KE", "KIB", "KI", "KLE", "KL", "K\u00d6N", "KR", "KS", "KT", "K\u00dcN", "KUS", "KW", "KYF", "L", "LA", "LAN", "LB", "LD", "LDK", "LDS", "LER", "LEV", "LG", "LI", "LIF", "LIP", "LL", "LM", "LN", "LOS", "LP", "LR", "LSA", "LSN", "LU", "L\u00dcN", "LWL", "M", "MA", "MAIN", "MB", "MD", "ME", "MEI", "MEK", "MER", "MG", "MH", "MI", "MIL", "MK", "ML", "MN", "MO", "MOD", "MOS", "MSE", "MSP", "MST", "MTK", "MTL", "M\u00dc", "MYK", "MZ", "N", "NAI", "ND", "NE", "NEA", "NEW", "NF", "NH", "NI", "NL", "NM", "NMS", "N\u00d6", "NOH", "NOM", "NOR", "NP", "NR", "NU", "NVP", "NW", "NWM", "NY", "OA", "OB", "OBG", "OD", "OE", "OF", "OG", "OH", "OHV", "OL", "OPR", "OS", "OSL", "OVP", "P", "PA", "PAN", "PB", "PCH", "PE", "PF", "PI", "PIR", "PL", "PL\u00d6", "PM", "PR", "PS", "QLB", "R", "RA", "RC", "RD", "RE", "REG", "RH", "RO", "ROW", "RS", "RT", "RU", "RV", "RW", "RZ", "S", "SA", "SAD", "SAL", "SANK", "SB", "SC", "SDL", "SDT", "SE", "SEE", "SG", "SHA", "SHG", "SHK", "SHL", "SI", "SIG", "SIM", "SK", "SL", "SLE", "SLF", "SM", "SN", "SO", "S\u00d6M", "SOK", "SP", "SPN", "SR", "ST", "STA", "STD", "SU", "S\u00dcW", "SW", "SZ", "TBB", "TDO", "TF", "THL", "TIR", "TO", "T\u00d6L", "TR", "TS", "T\u00dc", "UE", "UEM", "UL", "UM", "UN", "USI", "V", "VB", "VEC", "VER", "VG", "VIE", "VK", "VS", "W", "WAF", "WAK", "WB", "WE", "WEN", "WER", "WF", "WHV", "WI", "WIL", "WIS", "WL", "WM", "WN", "WOB", "WOH", "WOL", "WOR", "WR", "WSF", "WST", "WT", "WTM", "W\u00dc", "WUN", "WUR", "WW", "Z", "ZE", "ZI", "ZW"];

stadtcodes.forEach(code => {
  const opt = document.createElement("option");
  opt.value = code;
  opt.textContent = code;
  stadtcodeEl.appendChild(opt);
});

function generiereKennzeichen(code, buchstaben, zahlen) {
  return `${code} ${buchstaben} ${zahlen}`;
}

function updateKennzeichen(kennzeichen) {
  resultatEl.textContent = kennzeichen;
  kennzeichenImg.src = `https://dummyimage.com/500x100/ffffff/000000&text=${encodeURIComponent(kennzeichen)}`;
}

document.getElementById("config-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const stadt = stadtcodeEl.value;
  const buchstaben = document.getElementById("buchstaben").value.toUpperCase();
  const zahlen = document.getElementById("zahlen").value;

  if (!/^[A-Z]{1,2}$/.test(buchstaben) || !/^\d{1,4}$/.test(zahlen)) {
    resultatEl.textContent = "Ungültiges Format!";
    return;
  }

  const kennzeichen = generiereKennzeichen(stadt, buchstaben, zahlen);
  updateKennzeichen(kennzeichen);
});

document.getElementById("zufall-button").addEventListener("click", () => {
  const code = stadtcodes[Math.floor(Math.random() * stadtcodes.length)];
  const buchstaben = String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
                     (Math.random() > 0.5 ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) : "");
  const zahlen = Math.floor(1 + Math.random() * 9999).toString();
  const kennzeichen = generiereKennzeichen(code, buchstaben, zahlen);
  updateKennzeichen(kennzeichen);
});
