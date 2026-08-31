/**
 * RedMarks Enterprises — Local Predefined FAQ Dataset & Matching Engine (STEP 10b)
 * Answers top business inquiries instantly on the client without API network calls.
 * All text is pulled strictly from confirmed site content (index.html, pricing.csv).
 */

(function (window) {
  'use strict';

  const REDMARKS_FAQ = [
    {
      id: 'services_list',
      question: 'What services do you offer?',
      keywords: ['services', 'offer', 'provide', 'what do you do', 'service list', 'solutions', 'capabilities'],
      answer: `**RedMarks Enterprises offers 8 core commercial & industrial HVAC and refrigeration services:**

1. **Industrial Refrigeration**: Heavy-duty cooling plant setup, compressor overhauling, gas charging.
2. **Cold Room Systems**: Custom modular walk-in cold rooms with micro-processor temperature monitoring.
3. **VRF Systems**: Variable Refrigerant Flow/VRV multi-zone HVAC setup & inverter compressor servicing.
4. **Industrial AC**: Ductable splits, package ACs, and centralized Air Handling Units (AHU).
5. **Chillers**: Air-cooled & water-cooled liquid chiller troubleshooting, descaling, and pump repair.
6. **Freezer Plants**: Ultra-low temperature blast freezers and commercial deep freezer units.
7. **AMC & Preventive Maintenance**: Structured Annual Maintenance Contracts to minimize downtime.
8. **Repair & Breakdown Services**: Emergency diagnostics, electrical fault repairs, and fast leak fixes.`
    },
    {
      id: 'amc_services',
      question: 'Do you provide AMC / annual maintenance?',
      keywords: ['amc', 'annual maintenance', 'maintenance contract', 'preventive maintenance', 'servicing contract', 'regular service'],
      answer: `**Yes!** We provide structured Annual Maintenance Contracts (AMC) tailored for industrial cooling plants, cold rooms, chillers, VRF systems, and commercial ACs across Delhi NCR to maximize operational uptime and prevent costly breakdowns.`
    },
    {
      id: 'service_area',
      question: 'Which areas do you service?',
      keywords: ['area', 'areas', 'location', 'locations', 'delhi ncr', 'noida', 'gurgaon', 'ghaziabad', 'faridabad', 'where do you work', 'coverage', 'region'],
      answer: `We service the entire **Delhi NCR** region, including Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. Our engineering team dispatches directly for turnkey installations, AMC servicing, and emergency breakdown visits.`
    },
    {
      id: 'contact_info',
      question: 'How can I contact you / what is your number?',
      keywords: ['contact', 'number', 'phone', 'whatsapp', 'call', 'reach', 'email', 'mobile', 'telephone'],
      answer: `**You can reach RedMarks Enterprises directly through:**

• **Primary (Sales & Service)**: [+91 9958009729](tel:+919958009729) (WhatsApp & Call)
• **Secondary Support**: [+91 9425835884](tel:+919425835884)
• **Email Inquiry**: redmarksdelhi@gmail.com`
    },
    {
      id: 'business_location',
      question: 'Where are you located?',
      keywords: ['where are you located', 'address', 'office', 'location', 'noida', 'sector 63', 'coordinates', 'google map', 'map'],
      answer: `**RedMarks Enterprises is located at:**
202 1st Floor, Shri Apartment,Kh No-480/1 Near New Rana Public School, Mundka Delhi-110041
*(Coordinates: 28.684278, 77.031653)*

[🗺️ Open Location in Google Maps ↗](https://www.google.com/maps?q=28.68427815253237,77.03165296272628)`
    },
    {
      id: 'industrial_refrigeration',
      question: 'Do you handle industrial refrigeration?',
      keywords: ['industrial refrigeration', 'industrial cooling', 'cooling plant', 'compressor overhauling', 'gas charging'],
      answer: `**Yes!** We specialize in heavy-duty industrial cooling plant installation, compressor overhauling, gas charging, and thermal efficiency optimization across Delhi NCR.`
    },
    {
      id: 'cold_rooms',
      question: 'Do you service cold rooms / cold storage?',
      keywords: ['cold room', 'cold storage', 'walk-in cold room', 'chilled room', 'modular cold room', 'humidity control'],
      answer: `**Yes!** We design, install, and repair custom modular walk-in cold room systems equipped with controlled humidity and micro-processor temperature monitoring.`
    },
    {
      id: 'chillers',
      question: 'Do you work on chillers?',
      keywords: ['chiller', 'chillers', 'liquid chiller', 'air-cooled chiller', 'water-cooled chiller', 'condenser descaling'],
      answer: `**Yes!** We service both air-cooled and water-cooled liquid chillers, providing expert troubleshooting, condenser descaling, refrigerant recovery, and pumping system repair.`
    },
    {
      id: 'vrf_systems',
      question: 'Do you handle VRF systems?',
      keywords: ['vrf', 'vrv', 'variable refrigerant', 'inverter compressor', 'multi-zone ac'],
      answer: `**Yes!** We provide advanced Variable Refrigerant Flow (VRF/VRV) HVAC setup, multi-zone indoor unit balancing, inverter compressor servicing, and preventative AMC coverage.`
    },
    {
      id: 'industrial_ac',
      question: 'Do you service industrial AC?',
      keywords: ['industrial ac', 'ductable ac', 'package ac', 'ahu', 'air handling unit', 'central ac'],
      answer: `**Yes!** We service high-capacity ductable splits, package AC units, and centralized Air Handling Units (AHU) for industrial plants, offices, and commercial facilities.`
    },
    {
      id: 'freezer_plants',
      question: 'Do you handle freezer plants?',
      keywords: ['freezer plant', 'freezer plants', 'blast freezer', 'iqf', 'deep freezer', 'ultra-low temperature'],
      answer: `**Yes!** We service ultra-low temperature blast freezers, IQF units, and commercial deep freezer plants engineered for food processing and industrial cold storage.`
    },
    {
      id: 'repair_breakdown',
      question: 'What if my system breaks down / repair services?',
      keywords: ['repair', 'breakdown', 'emergency', 'broken', 'not working', 'fix', 'fault', 'leak', 'diagnostic'],
      answer: `**We provide rapid emergency diagnostic visits across Delhi NCR.** Our technicians resolve electrical faults, fan motor failures, compressor breakdowns, and immediate refrigerant gas leaks.`
    },
    {
      id: 'pricing_cost',
      question: 'How much does it cost / what are your prices?',
      keywords: ['price', 'pricing', 'cost', 'charge', 'rate', 'fee', 'how much', 'quote', 'inspection fee'],
      answer: `**Transparent Pricing Structure:**
• **Inspection & Diagnostic Visit**: ₹499 (Credited toward total bill upon approval)
• **Refrigerant Gas Charging**: ₹2,500 per circuit
• **Compressor Replacement**: ₹8,500 (Base labor + piping)
• **Electrical Control Panel Repair**: ₹1,800
• **Condenser Coil Descaling**: ₹3,200
• **Emergency Gas Leak Repair**: ₹1,500

*Note: Turnkey industrial installations, cold rooms, and customized AMCs are quoted following a site inspection.*`
    }
  ];

  // Quick reply options to show in initial chatbot greeting
  const QUICK_REPLIES = [
    { label: '🛠️ Our Services', question: 'What services do you offer?' },
    { label: '🛡️ AMC Maintenance', question: 'Do you provide AMC / annual maintenance?' },
    { label: '📍 Service Areas', question: 'Which areas do you service?' },
    { label: '🗺️ Office Location', question: 'Where are you located?' },
    { label: '💰 Service Pricing', question: 'How much does it cost / what are your prices?' }
  ];

  /**
   * Performs client-side keyword and token matching against local FAQ dataset.
   * @param {string} userQuery
   * @returns {object|null} FAQ item match or null if no confident match.
   */
  function findLocalFAQMatch(userQuery) {
    if (!userQuery || typeof userQuery !== 'string') return null;

    const normalized = userQuery.toLowerCase().trim();
    if (!normalized) return null;

    let bestMatch = null;
    let maxScore = 0;

    for (const item of REDMARKS_FAQ) {
      // 1. Exact match on question
      if (normalized === item.question.toLowerCase().trim()) {
        return item;
      }

      let currentScore = 0;

      // 2. Keyword phrase search
      for (const kw of item.keywords) {
        const kwLower = kw.toLowerCase();
        if (normalized === kwLower) {
          // Exact keyword match gets high weight
          currentScore += 10;
        } else if (normalized.includes(kwLower)) {
          // Substring match weighted by length of keyword
          currentScore += Math.max(3, kwLower.length);
        }
      }

      // Check if user query tokens overlap with keywords
      const tokens = normalized.split(/\s+/);
      for (const token of tokens) {
        if (token.length < 3) continue; // Skip short stop words like "do", "in", "is"
        for (const kw of item.keywords) {
          if (kw.toLowerCase().includes(token)) {
            currentScore += 1;
          }
        }
      }

      if (currentScore > maxScore && currentScore >= 3) {
        maxScore = currentScore;
        bestMatch = item;
      }
    }

    return bestMatch;
  }

  // Export to window
  window.RedMarksFAQEngine = {
    FAQ_DATA: REDMARKS_FAQ,
    QUICK_REPLIES: QUICK_REPLIES,
    findMatch: findLocalFAQMatch
  };
})(window);
