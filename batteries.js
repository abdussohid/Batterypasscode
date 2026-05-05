const BATTERIES = [
  {
    id: 'bat-001',
    bpan: 'DE042 B3GMMDED 4C2230047',
    bmi: { countryCode: 'IN', countryName: 'India', manufacturerId: '042' },
    bds: { capacity: '75 kWh', chemistry: 'LFP', chemistryFull: 'Lithium Iron Phosphate', voltage: '400 V', origin: 'Germany', extinguisherClass: 'Class D' },
    bi:  { manufactureDate: '22 March 2024', factoryCode: '3', serialNo: '0047' }
  },
  {
    id: 'bat-002',
    bpan: 'JP115 A9FNNJPC 4G0850123',
    bmi: { countryCode: 'IN', countryName: 'India', manufacturerId: '115' },
    bds: { capacity: '50 kWh', chemistry: 'NMC', chemistryFull: 'Nickel Manganese Cobalt', voltage: '330 V', origin: 'Japan', extinguisherClass: 'Class C' },
    bi:  { manufactureDate: '08 July 2024', factoryCode: '5', serialNo: '0123' }
  },
  {
    id: 'bat-003',
    bpan: 'CN237 A2HBBCNC 3K3020891',
    bmi: { countryCode: 'IN', countryName: 'India', manufacturerId: '237' },
    bds: { capacity: '20 kWh', chemistry: 'LCO', chemistryFull: 'Lithium Cobalt Oxide', voltage: '220 V', origin: 'China', extinguisherClass: 'Class C' },
    bi:  { manufactureDate: '30 November 2023', factoryCode: '2', serialNo: '0891' }
  },
  {
    id: 'bat-004',
    bpan: 'US309 C1PPPUSD 5A1570012',
    bmi: { countryCode: 'IN', countryName: 'India', manufacturerId: '309' },
    bds: { capacity: '100 kWh', chemistry: 'NCA', chemistryFull: 'Nickel Cobalt Aluminium', voltage: '800 V', origin: 'United States', extinguisherClass: 'Class D' },
    bi:  { manufactureDate: '15 January 2025', factoryCode: '7', serialNo: '0012' }
  },
  {
    id: 'bat-005',
    bpan: 'KR088 B6FQQKRC 4I1310355',
    bmi: { countryCode: 'IN', countryName: 'India', manufacturerId: '088' },
    bds: { capacity: '60 kWh', chemistry: 'NMC', chemistryFull: 'Nickel Manganese Cobalt', voltage: '480 V', origin: 'South Korea', extinguisherClass: 'Class C' },
    bi:  { manufactureDate: '19 September 2024', factoryCode: '1', serialNo: '0355' }
  },
  {
    id: 'bat-006',
    bpan: 'KR088 B6FQQKRC 4I1310356',
    bmi: { countryCode: 'IN', countryName: 'India', manufacturerId: '089' },
    bds: { capacity: '60 kWh', chemistry: 'NMC', chemistryFull: 'Nickel Manganese Cobalt', voltage: '480 V', origin: 'South Korea', extinguisherClass: 'Class C' },
    bi:  { manufactureDate: '19 September 2024', factoryCode: '1', serialNo: '0355' }
  },
];

function renderIndex() {
  document.querySelector('.index-sub').textContent =
    `${BATTERIES.length} registered units — select one to view full details.`;

  document.querySelector('.battery-grid').innerHTML = BATTERIES.map(bat => `
    <a class="battery-card" href="${bat.id}.html">
      <p class="card-bpan">${bat.bpan}</p>
      <p class="card-meta">${bat.bds.chemistry} &middot; ${bat.bds.capacity} &middot; ${bat.bds.voltage} &middot; ${bat.bmi.countryName}</p>
      <span class="card-arrow">›</span>
    </a>
  `).join('');
}

function renderBattery(id) {
  const bat = BATTERIES.find(b => b.id === id);
  if (!bat) {
    document.body.innerHTML = '<p style="padding:2rem;font-family:sans-serif">Battery not found.</p>';
    return;
  }

  document.title = `${bat.bpan} — Battery Passcode`;

  document.body.innerHTML = `
    <header class="topbar">
      <a class="topbar-mark" href="index.html">Battery Passcode</a>
    </header>
    <main class="page">
      <p class="bpan-label">Battery Pack Aadhaar Number</p>
      <p class="bpan-number">${bat.bpan}</p>

      <div class="section">
        <p class="section-title">BMI — Battery Manufacturer Identifier</p>
        <div class="field-row">
          <span class="field-label">Country Code</span>
          <span class="field-value">${bat.bmi.countryCode} (${bat.bmi.countryName})</span>
        </div>
        <div class="field-row">
          <span class="field-label">Manufacturer ID</span>
          <span class="field-value">${bat.bmi.manufacturerId}</span>
        </div>
      </div>

      <div class="section">
        <p class="section-title">BDS — Battery Descriptor Section</p>
        <div class="field-row">
          <span class="field-label">Capacity</span>
          <span class="field-value">${bat.bds.capacity}</span>
        </div>
        <div class="field-row">
          <span class="field-label">Chemistry</span>
          <span class="field-value">${bat.bds.chemistry} (${bat.bds.chemistryFull})</span>
        </div>
        <div class="field-row">
          <span class="field-label">Nominal Voltage</span>
          <span class="field-value">${bat.bds.voltage}</span>
        </div>
        <div class="field-row">
          <span class="field-label">Cell Origin</span>
          <span class="field-value">${bat.bds.origin}</span>
        </div>
        <div class="field-row">
          <span class="field-label">Extinguisher Class</span>
          <span class="field-value">${bat.bds.extinguisherClass}</span>
        </div>
      </div>

      <div class="section">
        <p class="section-title">BI — Battery Identifier</p>
        <div class="field-row">
          <span class="field-label">Date of Manufacture</span>
          <span class="field-value">${bat.bi.manufactureDate}</span>
        </div>
        <div class="field-row">
          <span class="field-label">Factory Code</span>
          <span class="field-value">${bat.bi.factoryCode}</span>
        </div>
        <div class="field-row">
          <span class="field-label">Serial No.</span>
          <span class="field-value">${bat.bi.serialNo}</span>
        </div>
      </div>
    </main>
  `;
}
