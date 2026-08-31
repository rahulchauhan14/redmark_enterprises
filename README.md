# RedMarks Enterprises — Industrial Refrigeration & HVAC Services

A modern, high-performance, mobile-first web application and AI-powered customer service platform built for **RedMarks Enterprises**, specializing in commercial & industrial refrigeration, cold storage walk-in rooms, chillers, VRF/VRV systems, and HVAC maintenance across Delhi NCR.

---

## 📋 Key Features & Highlights

- **8 Confirmed Core Services:** Industrial Refrigeration, Cold Room Systems, VRF Systems, Industrial AC, Chillers, Freezer Plants, AMC & Preventive Maintenance, Repair & Breakdown Services.
- **Direct WhatsApp Lead Routing:** Clicking any service tile launches an instant WhatsApp chat pre-filled with that specific service name for frictionless customer inquiries.
- **Persistent Mobile Action Bar:** Pure CSS sticky bottom navigation bar (`Call | WhatsApp`) optimized for mobile devices (≤ 768px).
- **CSV-Driven Service Catalog:** Dynamically parses service rates and quote estimations from `pricing.csv` with instant WhatsApp inquiry triggers per row.
- **Hybrid Grounded FAQ Assistant (Chatbot):**
  - **Local FAQ Engine (`faq-data.js`):** Instant client-side fuzzy keyword matching for top business queries (zero latency, zero API cost).
  - **Serverless AI Proxy (`/api/chat`):** Seamless fallback to Gemini AI with strict grounding in `knowledge-base.json` to prevent hallucinations and off-topic queries.
- **SEO & Social Optimization:** Complete Open Graph tags, Twitter cards, canonical URL, Google Maps geolocation schema, `sitemap.xml`, and `robots.txt`.

---

## 📞 Business Contact Information

- **Primary (Sales & Service):** [+91 9958009729](tel:+919958009729)
  - **WhatsApp Direct:** [Chat on WhatsApp](https://wa.me/919958009729)
- **Secondary (Support):** [+91 9425835884](tel:+919425835884)
- **Email:** [redmarksdelhi@gmail.com](mailto:redmarksdelhi@gmail.com)
- **Office Location:** C-114, Sector 63, Noida, Uttar Pradesh 201301 (Coordinates: `28.684278, 77.031653`)
- **Service Region:** Delhi, Gurgaon, Noida, Greater Noida, Faridabad & Ghaziabad (Delhi NCR)

---

## 📁 Project Architecture

```text
RED_MARK/
├── index.html            # Landing page with SEO meta, 8 service cards & contact layout
├── styles.css            # Vanilla CSS styling, design system, theme variables & mobile bar
├── scripts.js            # Dynamic CSV parser, WhatsApp service card router & year auto-update
├── chat-widget.js        # Floating FAQ chatbot UI, quick reply pills & message pipeline
├── faq-data.js           # Client-side local FAQ dataset & fuzzy keyword matching engine
├── knowledge-base.json   # Grounding dataset for LLM backend serverless functions
├── pricing.csv           # Service pricing catalog (Code, Service Name, Price / Estimate)
├── robots.txt            # Search engine crawler instructions
├── sitemap.xml           # XML Sitemap for search engine indexing
├── server.js             # Local Express server with rate-limiting & API proxy
├── netlify/
│   └── functions/
│       └── chat.js       # Production Netlify serverless function for LLM API proxy
├── img/
│   └── logo.png          # RedMarks Enterprises brand logo
├── package.json          # Node.js dependencies (express, dotenv)
├── .env.example          # Environment variables template
└── README.md             # Project documentation & deployment guide
```

---

## 🚀 Local Development & Testing

Because `scripts.js` fetches `pricing.csv` via `fetch()`, run the application via a local HTTP web server rather than opening `index.html` directly as a `file://` URL.

### Running with Node.js Express Server
```bash
npm install
npm run dev
```
Visit `http://localhost:8008` in your browser.

### Running with Python HTTP Server
```bash
python -m http.server 8000
```
Visit `http://localhost:8000` in your browser.

---

## 🌐 Production Deployment Guide

### Option 1: Netlify Deployment (Recommended)
1. **Connect Repository:** Link this Git repository to Netlify.
2. **Environment Variables:** Set `GEMINI_API_KEY` in **Site Configuration → Environment Variables**.
3. **Build Settings:**
   - Build Command: *(Leave blank - static site)*
   - Publish Directory: `.` (Root)
   - Functions Directory: `netlify/functions`
4. Netlify will automatically deploy the static assets and mount the `/api/chat` serverless function.

### Option 2: Custom VPS / Node.js Server
1. Clone the repository and copy `.env.example` to `.env`.
2. Add your `GEMINI_API_KEY` into `.env`.
3. Install dependencies: `npm install --production`.
4. Start server: `npm start` (or manage with PM2: `pm2 start server.js --name redmarks`).

---

## 📋 Launch Checklist for Business Owner

1. **Domain Configuration:** Point your domain (e.g. `www.redmarksenterprises.com`) to your hosting server or Netlify target.
2. **Update Domain References:**
   - Update `robots.txt` line 7 to match your live domain: `Sitemap: https://yourdomain.com/sitemap.xml`
   - Update `sitemap.xml` location URL: `<loc>https://yourdomain.com/</loc>`
   - Update `index.html` canonical link: `<link rel="canonical" href="https://yourdomain.com/" />`
3. **API Key Setup:** Obtain a Google Gemini API Key from [Google AI Studio](https://aistudio.google.com/) and configure `GEMINI_API_KEY` in environment variables.
4. **Logo & Assets:** Replace `img/logo.png` if an updated high-resolution logo or banner asset is provided.
5. **Pricing Updates:** Edit `pricing.csv` at any time to update base service pricing without touching code.
