/**
 * RedMarks Enterprises — Grounded FAQ Chatbot Widget (STEP 10 & 10b)
 * Features local instant FAQ matching (zero API cost/latency) before falling back to Gemini proxy.
 */

(function () {
  'use strict';

  function initChatWidget() {
    if (document.getElementById('chat-trigger')) return;

    // Retrieve quick reply items if available from engine
    const quickReplies = (window.RedMarksFAQEngine && window.RedMarksFAQEngine.QUICK_REPLIES) ? window.RedMarksFAQEngine.QUICK_REPLIES : [
      { label: '🛠️ Our Services', question: 'What services do you offer?' },
      { label: '🛡️ AMC Maintenance', question: 'Do you provide AMC / annual maintenance?' },
      { label: '📍 Service Areas', question: 'Which areas do you service?' },
      { label: '🗺️ Office Location', question: 'Where are you located?' },
      { label: '💰 Service Pricing', question: 'How much does it cost / what are your prices?' }
    ];

    const quickPillHTML = quickReplies.map(qr => 
      `<button type="button" class="chat-quick-btn" data-question="${escapeHTML(qr.question)}">${escapeHTML(qr.label)}</button>`
    ).join('');

    const widgetHTML = `
      <!-- Chat Trigger Floating Button (Fixed Bottom-Right) -->
      <button id="chat-trigger" class="chat-trigger-btn" aria-label="Open RedMarks FAQ Assistant" title="Ask RedMarks FAQ Assistant">
        <span class="chat-trigger-icon">🎧</span>
        <span class="chat-trigger-text">Ask AI</span>
        <span class="chat-unread-badge" aria-hidden="true">1</span>
      </button>

      <!-- Chat Dialog Panel (Fixed Bottom-Right) -->
      <div id="chat-panel" class="chat-panel-container" role="dialog" aria-label="RedMarks FAQ Assistant" aria-hidden="true" hidden>
        <!-- Header -->
        <div class="chat-header">
          <div class="chat-header-info">
            <div class="chat-avatar">❄️</div>
            <div>
              <h3 class="chat-title">RedMarks FAQ Assistant</h3>
              <p class="chat-status"><span class="status-dot"></span> Grounded AI • Delhi NCR</p>
            </div>
          </div>
          <button id="chat-close-btn" class="chat-close-btn" aria-label="Close Chat Window">✖</button>
        </div>

        <!-- Message History Body -->
        <div id="chat-messages" class="chat-messages-body" aria-live="polite">
          <!-- Default Bot Greeting with Quick Replies -->
          <div class="chat-msg bot-msg">
            <div class="msg-content">
              Hello! 👋 I am the RedMarks FAQ Assistant. Ask me anything about our Industrial Refrigeration, Cold Rooms, Chillers, VRF Systems, or AMC services across Delhi NCR!
            </div>
            <div class="chat-quick-replies">
              ${quickPillHTML}
            </div>
            <div class="msg-quick-actions">
              <a href="https://wa.me/919958009729" target="_blank" rel="noopener" class="chat-action-btn wa-action">💬 WhatsApp (+91 9958009729)</a>
              <a href="tel:+919958009729" class="chat-action-btn call-action">📞 Call (+91 9958009729)</a>
            </div>
          </div>
        </div>

        <!-- Footer Input Form -->
        <form id="chat-form" class="chat-input-form">
          <input 
            type="text" 
            id="chat-input" 
            class="chat-input-field" 
            placeholder="Type your question (e.g. Cold Room AMC...)" 
            autocomplete="off" 
            required 
            aria-label="Type your message"
          />
          <button type="submit" id="chat-send-btn" class="chat-send-btn" aria-label="Send Message">
            <span>Send</span> ➔
          </button>
        </form>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);

    bindEvents();
  }

  function bindEvents() {
    const trigger = document.getElementById('chat-trigger');
    const panel = document.getElementById('chat-panel');
    const closeBtn = document.getElementById('chat-close-btn');
    const form = document.getElementById('chat-form');
    const input = document.getElementById('chat-input');
    const messagesContainer = document.getElementById('chat-messages');
    const badge = trigger.querySelector('.chat-unread-badge');

    // Toggle Chat Panel
    function toggleChat(show) {
      const isVisible = show !== undefined ? show : panel.hidden;
      if (isVisible) {
        panel.hidden = false;
        panel.setAttribute('aria-hidden', 'false');
        panel.classList.add('chat-open');
        trigger.classList.add('chat-active');
        if (badge) badge.style.display = 'none';
        input.focus();
      } else {
        panel.hidden = true;
        panel.setAttribute('aria-hidden', 'true');
        panel.classList.remove('chat-open');
        trigger.classList.remove('chat-active');
        trigger.focus();
      }
    }

    trigger.addEventListener('click', () => toggleChat());
    closeBtn.addEventListener('click', () => toggleChat(false));

    // Keyboard navigation: Escape key closes chat
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !panel.hidden) {
        toggleChat(false);
      }
    });

    // Handle Quick Reply Pill Clicks
    messagesContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.chat-quick-btn');
      if (btn && btn.dataset.question) {
        processUserQuestion(btn.dataset.question);
      }
    });

    // Form Submit Handler
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = input.value.trim();
      if (!message) return;
      input.value = '';
      processUserQuestion(message);
    });

    // Main Question Processing Pipeline (Step 10b: Local FAQ -> Step 10: Gemini API)
    async function processUserQuestion(message) {
      appendMessage('user', message);

      // STEP 10b: Check Local Predefined FAQ Engine First (Instant, Zero API Cost)
      if (window.RedMarksFAQEngine && typeof window.RedMarksFAQEngine.findMatch === 'function') {
        const localMatch = window.RedMarksFAQEngine.findMatch(message);
        if (localMatch) {
          // Instant response from local dataset
          appendMessage('bot', localMatch.answer, true);
          return;
        }
      }

      // STEP 10: Fallback to Gemini Backend Proxy API
      showTypingIndicator();

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: message })
        });

        removeTypingIndicator();

        if (response.ok) {
          const data = await response.json();
          appendMessage('bot', data.reply || "For details specific to your setup, please connect with us on WhatsApp or Call.", data.quick_actions !== false);
        } else {
          appendMessage('bot', "We could not connect to the live AI service. Please connect directly with our engineers via WhatsApp (+91 9958009729) or Call (+91 9958009729).", true);
        }
      } catch (err) {
        console.error('Chat Widget Fetch Error:', err);
        removeTypingIndicator();
        appendMessage('bot', "Connection error. Please reach out to RedMarks Enterprises on WhatsApp (+91 9958009729) or Call (+91 9958009729).", true);
      }
    }
  }

  function formatBotMessage(text) {
    let safe = escapeHTML(text);
    // Links: [Text](URL)
    safe = safe.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener" class="chat-inline-link">$1</a>');
    // Bold **text**
    safe = safe.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italics *text*
    safe = safe.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Bullet lists starting with * or -
    safe = safe.replace(/(?:^|\n)[\*\-]\s+(.*?)(?=\n|$)/g, '<br>• $1');
    // Newlines to <br>
    safe = safe.replace(/\n/g, '<br>');
    if (safe.startsWith('<br>')) safe = safe.substring(4);
    return safe;
  }

  function appendMessage(sender, text, showQuickActions = false) {
    const container = document.getElementById('chat-messages');
    const panel = document.getElementById('chat-panel');
    const trigger = document.getElementById('chat-trigger');
    if (!container) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender === 'user' ? 'user-msg' : 'bot-msg'}`;

    const formattedContent = sender === 'bot' ? formatBotMessage(text) : escapeHTML(text);
    let html = `<div class="msg-content">${formattedContent}</div>`;

    if (sender === 'bot' && showQuickActions) {
      html += `
        <div class="msg-quick-actions">
          <a href="https://wa.me/919958009729" target="_blank" rel="noopener" class="chat-action-btn wa-action">💬 WhatsApp (+91 9958009729)</a>
          <a href="tel:+919958009729" class="chat-action-btn call-action">📞 Call (+91 9958009729)</a>
        </div>
      `;
    }

    msgDiv.innerHTML = html;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;

    // Show unread indicator dot if collapsed and bot message arrives
    if (sender === 'bot' && panel && panel.hidden && trigger) {
      const badge = trigger.querySelector('.chat-unread-badge');
      if (badge) badge.style.display = 'flex';
    }
  }

  function showTypingIndicator() {
    const container = document.getElementById('chat-messages');
    if (!container || document.getElementById('chat-typing')) return;

    const typingDiv = document.createElement('div');
    typingDiv.id = 'chat-typing';
    typingDiv.className = 'chat-msg bot-msg typing-msg';
    typingDiv.innerHTML = `
      <div class="msg-content typing-dots">
        <span>.</span><span>.</span><span>.</span>
      </div>
    `;
    container.appendChild(typingDiv);
    container.scrollTop = container.scrollHeight;
  }

  function removeTypingIndicator() {
    const typingDiv = document.getElementById('chat-typing');
    if (typingDiv) typingDiv.remove();
  }

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatWidget);
  } else {
    initChatWidget();
  }
})();
