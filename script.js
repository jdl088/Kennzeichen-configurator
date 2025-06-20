// script.js - Optimierte Version

    // 1) Alle gültigen Landkreis-/Stadtkürzel
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

    // 2) DOM-Referenzen - korrigierte ID-Namen
    const elements = {
      stadt: document.getElementById('stadtcode'),
      buchstaben: document.getElementById('buchstaben'),
      zahlen: document.getElementById('zahlen'),
      form: document.getElementById('config-form'),
      btnCreate: document.getElementById('create-btn'),
      btnComplete: document.getElementById('complete-btn'),
      btnFunny: document.getElementById('funny-btn'), // Korrigiert: funny-btn statt zufall-btn
      img: document.getElementById('kennzeichen-img')
    };

    // 3) Validierungsfunktionen - optimiert und vereinfacht
    function validateField(field, pattern, errorMsg) {
      const value = field.value.trim().toUpperCase();
      field.value = value;
      
      let isValid = false;
      if (field === elements.stadt) {
        isValid = validCodes.includes(value);
      } else {
        isValid = pattern.test(value);
      }
      
      if (isValid) {
        field.setCustomValidity('');
        field.style.borderColor = '#28a745';
      } else {
        field.setCustomValidity(errorMsg);
        field.style.borderColor = '#dc3545';
      }
      
      return isValid;
    }

    // Spezifische Validierungsfunktionen
    const validateStadtcode = () => validateField(elements.stadt, null, 'Ungültiger Stadtcode!');
    const validateBuchstaben = () => validateField(elements.buchstaben, /^[A-ZÄÖÜ]{1,2}$/, '1–2 Buchstaben A–Z, Ä, Ö, Ü');
    const validateZahlen = () => validateField(elements.zahlen, /^[1-9][0-9]{0,3}$/, '1–4 Ziffern (nicht mit 0 beginnend)');

    // 4) Kennzeichen-Generator - optimiert
    function generateKennzeichen() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Canvas-Dimensionen
      canvas.width = 520;
      canvas.height = 110;
      
      // Hintergrund
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Schwarzer Rahmen
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;
      ctx.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
      
      // EU-Balken
      ctx.fillStyle = '#003d82';
      ctx.fillRect(2, 2, 45, canvas.height - 4);
      
      // EU-Sterne (vereinfacht)
      ctx.fillStyle = '#ffdd00';
      const centerX = 24, centerY = 35, radius = 14;
      for (let i = 0; i < 12; i++) {
        const angle = (i * 30 - 90) * Math.PI / 180;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * Math.PI);
        ctx.fill();
      }
      
      // "D" für Deutschland
      ctx.fillStyle = 'white';
      ctx.font = 'bold 18px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('D', 24, 85);
      
      // Kennzeichen-Text
      ctx.fillStyle = 'black';
      ctx.font = 'bold 36px monospace';
      ctx.textAlign = 'left';
      
      let x = 60;
      const spacing = 8;
      
      // Stadtcode
      ctx.fillText(elements.stadt.value, x, 65);
      x += ctx.measureText(elements.stadt.value).width + spacing;
      
      // Bindestrich
      ctx.fillText('-', x, 65);
      x += ctx.measureText('-').width + spacing;
      
      // Buchstaben
      ctx.fillText(elements.buchstaben.value, x, 65);
      x += ctx.measureText(elements.buchstaben.value).width + spacing * 2;
      
      // Zahlen
      ctx.fillText(elements.zahlen.value, x, 65);
      
      // Bild setzen und anzeigen
      elements.img.src = canvas.toDataURL();
      elements.img.style.display = 'block';
      elements.img.alt = `Kennzeichen ${elements.stadt.value}-${elements.buchstaben.value} ${elements.zahlen.value}`;
    }

    // 5) Zufallsgenerator - optimiert
    function generateRandomLetter() {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return letters[Math.floor(Math.random() * letters.length)];
    }

    function generateRandomNumber() {
      return Math.floor(Math.random() * 9999) + 1; // 1-9999
    }

    function generateRandomCode() {
      return validCodes[Math.floor(Math.random() * validCodes.length)];
    }

    // 6) Event-Handler - optimiert
    function handleSubmit(e) {
      e.preventDefault();
      
      // Alle Felder validieren
      const isValid = [
        validateStadtcode(),
        validateBuchstaben(), 
        validateZahlen()
      ].every(Boolean);
      
      if (isValid) {
        generateKennzeichen();
      } else {
        elements.form.reportValidity();
      }
    }

    function handleRandomGeneration() {
      // Zufällige Werte setzen
      elements.stadt.value = generateRandomCode();
      elements.buchstaben.value = generateRandomLetter() + (Math.random() > 0.5 ? generateRandomLetter() : '');
      elements.zahlen.value = generateRandomNumber().toString();
      
      // Validieren und anzeigen
      validateStadtcode();
      validateBuchstaben();
      validateZahlen();
      generateKennzeichen();
      
      // Visuelles Feedback
      elements.img.classList.add('funny-result');
      setTimeout(() => elements.img.classList.remove('funny-result'), 1000);
    }

    // Intelligente Vervollständigung
    function handleCompletion() {
      let hasChanged = false;
      
      // Stadt vervollständigen wenn leer
      if (!elements.stadt.value.trim()) {
        elements.stadt.value = generateRandomCode();
        validateStadtcode();
        hasChanged = true;
      }
      
      // Buchstaben vervollständigen wenn leer
      if (!elements.buchstaben.value.trim()) {
        // 70% Chance für 2 Buchstaben, 30% für 1 Buchstabe
        const numLetters = Math.random() > 0.3 ? 2 : 1;
        elements.buchstaben.value = generateRandomLetter() + 
          (numLetters === 2 ? generateRandomLetter() : '');
        validateBuchstaben();
        hasChanged = true;
      }
      
      // Zahlen vervollständigen wenn leer
      if (!elements.zahlen.value.trim()) {
        // Realistische Verteilung: kürzere Zahlen häufiger
        const rand = Math.random();
        let number;
        if (rand < 0.4) {
          number = Math.floor(Math.random() * 99) + 1; // 1-99 (40%)
        } else if (rand < 0.7) {
          number = Math.floor(Math.random() * 900) + 100; // 100-999 (30%)
        } else {
          number = Math.floor(Math.random() * 9000) + 1000; // 1000-9999 (30%)
        }
        elements.zahlen.value = number.toString();
        validateZahlen();
        hasChanged = true;
      }
      
      if (hasChanged) {
        // Prüfen ob alle Felder jetzt valide sind
        const allValid = [validateStadtcode(), validateBuchstaben(), validateZahlen()].every(Boolean);
        if (allValid) {
          generateKennzeichen();
          
          // Visuelles Feedback für Vervollständigung
          elements.img.classList.add('complete-result');
          setTimeout(() => elements.img.classList.remove('complete-result'), 800);
        }
      } else {
        // Alle Felder waren bereits ausgefüllt - Feedback geben
        const allValid = [validateStadtcode(), validateBuchstaben(), validateZahlen()].every(Boolean);
        if (allValid && !elements.img.src) {
          generateKennzeichen();
        }
      }
    }

    // 7) Event-Listener registrieren
    elements.stadt.addEventListener('input', validateStadtcode);
    elements.buchstaben.addEventListener('input', validateBuchstaben);
    elements.zahlen.addEventListener('input', validateZahlen);
    elements.form.addEventListener('submit', handleSubmit);
    elements.btnComplete.addEventListener('click', handleCompletion);
    elements.btnFunny.addEventListener('click', handleRandomGeneration); // Korrigiert!

    // 8) Initialisierung beim Laden
    document.addEventListener('DOMContentLoaded', () => {
      // Initiale Validierung falls Felder bereits gefüllt sind
      if (elements.stadt.value) validateStadtcode();
      if (elements.buchstaben.value) validateBuchstaben();
      if (elements.zahlen.value) validateZahlen();
      
      // Kennzeichen generieren falls alle Felder valide sind
      if (elements.stadt.value && elements.buchstaben.value && elements.zahlen.value) {
        const allValid = [validateStadtcode(), validateBuchstaben(), validateZahlen()].every(Boolean);
        if (allValid) {
          generateKennzeichen();
        }
      }
    });
