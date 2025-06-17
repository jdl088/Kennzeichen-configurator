// script.js

// 1) Alle gültigen Landkreis-/Stadtkürzel aus Deiner Liste:
const validCodes = [
  'A','AA','AB','ABG','ABI','AC','AE','AH','AIB','AIC','AK','ALF','ALZ','AM','AN','ANA','ANG',
  'ANK','AÖ','AP','APD','ARN','ART','AS','ASL','ASZ','AT','AU','AUR','AW','AZ','AZE','B','BA',
  'BAD','BAR','BB','BBG','BBL','BC','BCH','BD','BE','BED','BER','BF','BGD','BGL','BH','BI',
  'BID','BIN','BIR','BIT','BIW','BK','BKS','BL','BLB','BLK','BM','BN','BNA','BO','BÖ','BOG',
  'BOH','BOR','BOT','BP','BRA','BRB','BRG','BRK','BRL','BRV','BS','BSB','BSK','BT','BTF','BÜD',
  'BUL','BÜR','BÜS','BÜZ','BW','BWL','BYL','BZ','C','CA','CAS','CB','CE','CHA','CLP','CLZ',
  'CO','COC','COE','CR','CUX','CW','D','DA','DAH','DAN','DAU','DBR','DD','DE','DEG','DEL','DGF',
  'DH','DI','DIL','DIN','DIZ','DKB','DL','DLG','DM','DN','DO','DON','DU','DUD','DÜW','DW','DZ',
  'E','EA','EB','EBE','EBN','EBS','ECK','ED','EE','EF','EG','EH','EI','EIC','EIL','EIN','EIS',
  'EL','EM','EMD','EMS','EN','ER','ERB','ERH','ERK','ERZ','ES','ESB','ESW','EU','EW','F','FB',
  'FD','FDB','FDS','FEU','FF','FFB','FG','FI','FKB','FL','FLÖ','FN','FO','FOR','FR','FRG','FRI',
  'FRW','FS','FT','FTL','FÜ','FÜS','FW','FZ','G','GA','GAN','GAP','GC','GD','GDB','GE','GEL',
  'GEO','GER','GF','GG','GHA','GHC','GI','GK','GL','GLA','GM','GMN','GN','GNT','GÖ','GOA','GOH',
  'GP','GR','GRA','GRH','GRI','GRM','GRZ','GS','GT','GTH','GÜ','GUB','GUN','GV','GVM','GW','GZ',
  'H','HA','HAB','HAL','HAM','HAS','HB','HBN','HBS','HC','HCH','HD','HDH','HDL','HE','HEB','HEF',
  'HEI','HEL','HER','HET','HF','HG','HGN','HGW','HH','HHM','HI','HIG','HIP','HK','HL','HM','HMÜ',
  'HN','HO','HOG','HOH','HOL','HOM','HOR','HÖS','HOT','HP','HR','HRO','HS','HSK','HST','HU','HV',
  'HVL','HWI','HX','HY','HZ','IGB','IK','IL','ILL','IN','IZ','J','JE','JL','JÜL','K','KA','KB',
  'KC','KE','KEH','KEL','KEM','KF','KG','KH','KI','KIB','KK','KL','KLE','KLZ','KM','KN','KO','KÖN',
  'KÖT','KÖZ','KR','KRU','KS','KT','KU','KÜN','KUS','KW','KY','KYF','L','LA','LAN','LAU','LB',
  'LBS','LBZ','LC','LD','LDK','LDS','LEO','LER','LEV','LF','LG','LH','LI','LIB','LIF','LIP','LL',
  'LM','LN','LÖ','LÖB','LOS','LP','LR','LRO','LSA','LSN','LSZ','LU','LÜN','LUP','LWL','M','MA',
  'MAB','MAI','MAK','MAL','MB','MC','MD','ME','MED','MEG','MEI','MEK','MEL','MER','MET','MG','MGH',
  'MGN','MH','MHL','MI','MIL','MK','MKK','ML','MM','MN','MO','MOD','MOL','MON','MOS','MQ','MR',
  'MS','MSE','MSH','MSP','MST','MTK','MTL','MUC','MÜ','MÜB','MÜL','MÜR','MVL','MW','MY','MYK',
  'MZ','MZG','N','NAB','NAI','NAU','NB','ND','NDH','NE','NEA','NEB','NEC','NEN','NES','NEU','NEW',
  'NF','NH','NI','NK','NL','NM','NMB','NMS','NÖ','NOH','NOL','NOM','NOR','NP','NR','NRW','NT','NU',
  'NVP','NW','NWM','NY','NZ','OA','OAL','OB','OBB','OBG','OC','OCH','OD','OE','OF','OG','OH','OHA',
  'ÖHR','OHV','OHZ','OK','OL','OP','OPR','OS','OSL','OTW','OVI','OVL','OVP','OZ','P','PA','PAF',
  'PAN','PAR','PB','PCH','PE','PEG','PF','PI','PIR','PL','PLÖ','PM','PN','PR','PRÜ','PS','PW','PZ',
  'QFT','QLB','R','RA','RC','RD','RDG','RE','REG','REH','REI','RG','RH','RI','RID','RIE','RL','RM',
  'RN','RO','ROD','ROF','ROK','ROL','ROS','ROT','ROW','RP','RPL','RS','RSL','RT','RU','RÜD','RÜG',
  'RV','RW','RZ','S','SAB','SAD','SAL','SAN','SAW','SÄK','SB','SBG','SBK','SC','SCZ','SDH','SDL',
  'SDT','SE','SEB','SEE','SEF','SEL','SFB','SFT','SG','SGH','SH','SHA','SHG','SHK','SHL','SI','SIG',
  'SIH','SIM','SK','SL','SLE','SLF','SLG','SLK','SLN','SLS','SLÜ','SLZ','SM','SMÜ','SN','SO','SOB',
  'SOG','SOK','SÖM','SON','SP','SPB','SPN','SR','SRB','SRO','ST','STA','STB','STD','STE','STL','STO',
  'SU','SUL','SÜW','SW','SWA','SY','SZ','SZB','TBB','TDO','TE','TET','TF','TG','THL','THW','TIR',
  'TO','TÖL','TP','TR','TS','TT','TÜ','TUT','UE','UEM','UFF','UH','UL','UM','UN','USI','ÜB','V',
  'VAI','VB','VEC','VER','VG','VIB','VIE','VIT','VK','VOH','VR','VS','W','WA','WAF','WAK','WAN',
  'WAR','WAT','WB','WBS','WDA','WE','WEL','WEN','WER','WES','WF','WG','WHV','WI','WIL','WIN','WIS',
  'WIT','WIV','WIZ','WK','WL','WLG','WM','WMS','WN','WND','WO','WOB','WOH','WOL','WOR','WOS','WR',
  'WRN','WS','WSF','WST','WSW','WT','WTL','WTM','WÜ','WUG','WÜM','WUN','WUR','WW','WZ','WZL','X',
  'Y','Z','ZE','ZEL','ZI','ZIG','ZP','ZR','ZW','ZZ'
];

// 2) Referenzen zu den Eingabefeldern
const feldStadt      = document.getElementById('stadtcode');
const feldBuchstaben = document.getElementById('buchstaben');
const feldZahlen     = document.getElementById('zahlen');
const form           = document.getElementById('config-form');
// Konsistente Benennung:
const btnZufall = document.getElementById('zufall-btn');
const btnCreate = document.getElementById('create-btn');
const ausgabe   = document.getElementById('resultat');
const img       = document.getElementById('kennzeichen-img');

// 3) Validierungsfunktionen
function validateStadtcode() {
  const w = feldStadt.value.trim().toUpperCase();
  feldStadt.value = w;
  if (validCodes.includes(w)) {
    feldStadt.setCustomValidity('');
    feldStadt.style.borderColor = 'green';
  } else {
    feldStadt.setCustomValidity('Diese Stadt gibt es nicht!');
    feldStadt.style.borderColor = 'red';
    feldStadt.reportValidity();
  }
}
function validateBuchstaben() {
  const w = feldBuchstaben.value.trim().toUpperCase();
  feldBuchstaben.value = w;
  if (/^[A-ZÄÖÜ]{1,2}$/.test(w)) {
    feldBuchstaben.setCustomValidity('');
    feldBuchstaben.style.borderColor = 'green';
  } else {
    feldBuchstaben.setCustomValidity('1–2 Buchstaben A–Z');
    feldBuchstaben.style.borderColor = 'red';
  }
}
function validateZahlen() {
  const w = feldZahlen.value.trim();
  feldZahlen.value = w;
  if (/^[0-9]{1,4}$/.test(w)) {
    feldZahlen.setCustomValidity('');
    feldZahlen.style.borderColor = 'green';
  } else {
    feldZahlen.setCustomValidity('1–4 Ziffern');
    feldZahlen.style.borderColor = 'red';
  }
}

// 4) Kennzeichen-Vorschau erzeugen
function generateKennzeichen() {
  const code = `${feldStadt.value}-${feldBuchstaben.value} ${feldZahlen.value}`;
  ausgabe.textContent = code;
  
  // Canvas-basierte Kennzeichen-Visualisierung
  const canvas = document.createElement('canvas');
  canvas.width = 520;
  canvas.height = 110;
  const ctx = canvas.getContext('2d');
  
  // Weißer Hintergrund
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 520, 110);
  
  // Schwarzer Rand
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, 518, 108);
  
  // Blauer EU-Balken links
  ctx.fillStyle = '#003d82';
  ctx.fillRect(1, 1, 45, 108);
  
  // EU-Sterne (vereinfacht als Punkte)
  ctx.fillStyle = 'yellow';
  for(let i = 0; i < 12; i++) {
    const angle = (i * 30) * Math.PI / 180;
    const x = 23 + Math.cos(angle) * 12;
    const y = 35 + Math.sin(angle) * 12;
    ctx.beginPath();
    ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
    ctx.fill();
  }
  
  // "D" für Deutschland
  ctx.fillStyle = 'white';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('D', 23, 85);
  
  // Kennzeichen-Text
  ctx.fillStyle = 'black';
  ctx.font = 'bold 32px Arial';
  ctx.textAlign = 'left';
  
  // Stadtcode
  ctx.fillText(feldStadt.value, 60, 60);
  
  // Bindestrich und Buchstaben
  const stadtWidth = ctx.measureText(feldStadt.value).width;
  ctx.fillText('-' + feldBuchstaben.value, 60 + stadtWidth + 5, 60);
  
  // Zahlen
  const buchstabenWidth = ctx.measureText('-' + feldBuchstaben.value).width;
  ctx.fillText(feldZahlen.value, 60 + stadtWidth + buchstabenWidth + 20, 60);
  
  // Bild setzen
  img.src = canvas.toDataURL();
  img.style.display = 'block';
}

// 5) Event-Listener
feldStadt.addEventListener('input', validateStadtcode);
feldBuchstaben.addEventListener('input', validateBuchstaben);
feldZahlen.addEventListener('input', validateZahlen);

form.addEventListener('submit', e => {
  validateStadtcode(); validateBuchstaben(); validateZahlen();
  if (!form.checkValidity()) {
    e.preventDefault();
    form.reportValidity();
    return;
  }
  e.preventDefault();
  generateKennzeichen();
});

// Zufallskennzeichen - konsistente Benennung
btnZufall.addEventListener('click', () => {
  feldStadt.value      = validCodes[Math.floor(Math.random() * validCodes.length)];
  feldBuchstaben.value = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  feldZahlen.value     = String(Math.floor(Math.random() * 9000) + 1);
  validateStadtcode(); validateBuchstaben(); validateZahlen();
  generateKennzeichen();
});

// 6) Bei Laden: prüfen, ob Felder schon Werte haben
window.addEventListener('DOMContentLoaded', () => {
  validateStadtcode(); validateBuchstaben(); validateZahlen();
  if (feldStadt.value && feldBuchstaben.value && feldZahlen.value 
      && form.checkValidity()) {
    generateKennzeichen();
  }
});
