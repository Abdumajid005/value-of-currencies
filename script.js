

const API_URL = 'https://cbu.uz/uz/arkhiv-kursov-valyut/json/';
const currencyTable = document.getElementById('currency-table');


const currencyCountry = {
  AED: 'ae',
  AFN: 'af',
  ALL: 'al',
  AMD: 'am',
  ANG: 'an',
  AOA: 'ao',
  ARS: 'ar',
  AUD: 'au',
  AWG: 'aw',
  AZN: 'az',
  BAM: 'ba',
  BBD: 'bb',
  BDT: 'bd',
  BGN: 'bg',
  BHD: 'bh',
  BIF: 'bi',
  BMD: 'bm',
  BND: 'bn',
  BOB: 'bo',
  BRL: 'br',
  BSD: 'bs',
  BTN: 'bt',
  BWP: 'bw',
  BYN: 'by',
  BZD: 'bz',
  CAD: 'ca',
  CDF: 'cd',
  CHF: 'ch',
  CLP: 'cl',
  CNY: 'cn',
  COP: 'co',
  CRC: 'cr',
  CUP: 'cu',
  CVE: 'cv',
  CZK: 'cz',
  DJF: 'dj',
  DKK: 'dk',
  DOP: 'do',
  DZD: 'dz',
  EGP: 'eg',
  ERN: 'er',
  ETB: 'et',
  EUR: 'eu',
  FJD: 'fj',
  FKP: 'fk',
  FOK: 'fo',
  GBP: 'gb',
  GEL: 'ge',
  GGP: 'gg',
  GHS: 'gh',
  GIP: 'gi',
  GMD: 'gm',
  GNF: 'gn',
  GTQ: 'gt',
  GYD: 'gy',
  HKD: 'hk',
  HNL: 'hn',
  HRK: 'hr',
  HTG: 'ht',
  HUF: 'hu',
  IDR: 'id',
  ILS: 'il',
  IMP: 'im',
  INR: 'in',
  IQD: 'iq',
  IRR: 'ir',
  ISK: 'is',
  JEP: 'je',
  JMD: 'jm',
  JOD: 'jo',
  JPY: 'jp',
  KES: 'ke',
  KGS: 'kg',
  KHR: 'kh',
  KID: 'ki',
  KMF: 'km',
  KRW: 'kr',
  KWD: 'kw',
  KYD: 'ky',
  KZT: 'kz',
  LAK: 'la',
  LBP: 'lb',
  LKR: 'lk',
  LRD: 'lr',
  LSL: 'ls',
  LYD: 'ly',
  MAD: 'ma',
  MDL: 'md',
  MGA: 'mg',
  MKD: 'mk',
  MMK: 'mm',
  MNT: 'mn',
  MOP: 'mo',
  MRU: 'mr',
  MUR: 'mu',
  MVR: 'mv',
  MWK: 'mw',
  MXN: 'mx',
  MYR: 'my',
  MZN: 'mz',
  NAD: 'na',
  NGN: 'ng',
  NIO: 'ni',
  NOK: 'no',
  NPR: 'np',
  NZD: 'nz',
  OMR: 'om',
  PAB: 'pa',
  PEN: 'pe',
  PGK: 'pg',
  PHP: 'ph',
  PKR: 'pk',
  PLN: 'pl',
  PYG: 'py',
  QAR: 'qa',
  RON: 'ro',
  RSD: 'rs',
  RUB: 'ru',
  RWF: 'rw',
  SAR: 'sa',
  SBD: 'sb',
  SCR: 'sc',
  SDG: 'sd',
  SEK: 'se',
  SGD: 'sg',
  SHP: 'sh',
  SLE: 'sl',
  SOS: 'so',
  SRD: 'sr',
  SSP: 'ss',
  STN: 'st',
  SYP: 'sy',
  SZL: 'sz',
  THB: 'th',
  TJS: 'tj',
  TMT: 'tm',
  TND: 'tn',
  TOP: 'to',
  TRY: 'tr',
  TTD: 'tt',
  TVD: 'tv',
  TWD: 'tw',
  TZS: 'tz',
  UAH: 'ua',
  UGX: 'ug',
  USD: 'us',
  UYU: 'uy',
  UZS: 'uz',
  VES: 've',
  VND: 'vn',
  VUV: 'vu',
  WST: 'ws',
  XAF: 'cm',
  XCD: 'ag',
  XDR: 'intl',
  XOF: 'bj',
  XPF: 'pf',
  YER: 'ye',
  ZAR: 'za',
  ZMW: 'zm',
  ZWL: 'zw'
};

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const tableBody = document.createElement('tbody');

    data.forEach(currency => {
      const row = document.createElement('tr');

      const codeCell = document.createElement('td');


      const countryCode = currencyCountry[currency.Ccy];
      if (countryCode) {
        const flagIcon = document.createElement('span');
        flagIcon.className = `fi fi-${countryCode}`;
        codeCell.appendChild(flagIcon);
        codeCell.appendChild(document.createTextNode(`${currency.Ccy}`))
      } else {
        codeCell.textContent = currency.Ccy
      }


      const nameENCell = document.createElement('td');
      nameENCell.textContent = currency.CcyNm_EN;

      const nameRUCell = document.createElement('td');
      nameRUCell.textContent = currency.CcyNm_RU;

      const nameUZCell = document.createElement('td');
      nameUZCell.textContent = currency.CcyNm_UZ;

      const dataCell = document.createElement('td');
      dataCell.textContent = currency.Date;

      const diffCell = document.createElement('td');
      const diffValue = parseFloat(currency.Diff);
      diffCell.textContent = currency.Diff;
      if (diffValue > 0) {
        diffCell.classList.add('currency-positive');
        diffCell.textContent += ' ↑';
      } else if (diffValue < 0) {
        diffCell.classList.add('currency-negative');
        diffCell.textContent += ' ↓';
      }

      const rateCell = document.createElement('td');
      rateCell.textContent = currency.Rate;

      row.appendChild(codeCell);
      row.appendChild(nameENCell);
      row.appendChild(nameRUCell);
      row.appendChild(nameUZCell);
      row.appendChild(dataCell);
      row.appendChild(diffCell);
      row.appendChild(rateCell);


      tableBody.appendChild(row);
    });

    currencyTable.appendChild(tableBody);
  })
  .catch(error => {
    console.error('Ma\'lumotlarni olishda xatolik:', error);
  });

