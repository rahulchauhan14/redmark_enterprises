/* ==========================================================================
   RedMarks Enterprises — Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Dynamic Footer Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Fetch & Render pricing.csv Table
  loadPricingTable();

  // 3. Clickable Service Cards (Direct WhatsApp Inquiry)
  setupServiceCardClicks();
});

/**
 * Loads pricing.csv dynamically and populates the pricing section.
 */
function loadPricingTable() {
  const container = document.getElementById('pricing-table');
  if (!container) return;

  fetch('pricing.csv')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.text();
    })
    .then(csvText => {
      const lines = csvText.trim().split('\n').filter(line => line.trim().length > 0);
      if (lines.length < 2) {
        container.innerHTML = '<p>No service pricing data available.</p>';
        return;
      }

      const headers = lines[0].split(',').map(h => h.trim());
      const rows = lines.slice(1).map(line => line.split(',').map(c => c.trim()));

      let tableHtml = '<table class="pricing-table"><thead><tr>';
      headers.forEach(h => {
        tableHtml += `<th>${escapeHtml(h)}</th>`;
      });
      tableHtml += '<th>Action</th></tr></thead><tbody>';

      rows.forEach(cols => {
        if (cols.length >= 2) {
          const serviceCode = cols[0] || '';
          const serviceName = cols[1] || '';
          const priceEst = cols[2] || 'Get Custom Quote';

          tableHtml += '<tr>';
          tableHtml += `<td><strong>${escapeHtml(serviceCode)}</strong></td>`;
          tableHtml += `<td>${escapeHtml(serviceName)}</td>`;
          tableHtml += `<td><span class="price-tag-quote">${escapeHtml(priceEst)}</span></td>`;
          
          const waMsg = encodeURIComponent(`Hello, I'd like to enquire about pricing for ${serviceName} (${serviceCode}).`);
          const waUrl = `https://wa.me/919958009729?text=${waMsg}`;
          
          tableHtml += `<td><a href="${waUrl}" target="_blank" rel="noopener" class="btn-sm btn-wa">💬 Inquire</a></td>`;
          tableHtml += '</tr>';
        }
      });

      tableHtml += '</tbody></table>';
      container.innerHTML = tableHtml;
    })
    .catch(err => {
      console.warn('pricing.csv load notice:', err.message);
      container.innerHTML = `
        <div style="padding: 16px; text-align: center;">
          <p style="margin-bottom: 8px; color: var(--text-muted);">
            <em>Notice: Unable to fetch pricing.csv directly (common when opening HTML files via local <code>file://</code> URL).</em>
          </p>
          <a href="https://wa.me/919958009729?text=Hello%20RedMarks%20Enterprises%2C%20please%20send%20me%20your%20service%20pricing%20catalog." target="_blank" rel="noopener" class="button button-whatsapp button-sm">
            💬 Request Full Price Catalog on WhatsApp
          </a>
        </div>
      `;
    });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Attaches click and keyboard handlers to service cards to launch a direct WhatsApp inquiry.
 */
function setupServiceCardClicks() {
  const cards = document.querySelectorAll('.clickable-service-card');

  cards.forEach(card => {
    const handleActivate = () => {
      const serviceName = card.getAttribute('data-service') || 'HVAC / Refrigeration Services';
      const msg = encodeURIComponent(`Hello RedMarks Enterprises, I would like to enquire about ${serviceName}.`);
      window.open(`https://wa.me/919958009729?text=${msg}`, '_blank', 'noopener');
    };

    card.addEventListener('click', handleActivate);
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleActivate();
      }
    });
  });
}

