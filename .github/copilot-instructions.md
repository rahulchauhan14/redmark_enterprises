# Copilot Instructions for RedMarks Enterprises Web Project

This project is a static website for RedMarks Enterprises, an AC & Cooling Services provider in Delhi. The codebase is simple and consists of HTML, CSS, JavaScript, and a CSV file for service pricing. Follow these guidelines to be productive as an AI coding agent:

## Architecture Overview
- **Single-page static site**: All content is rendered in `index.html`.
- **Styling**: All styles are in `styles.css`. Uses basic CSS, no frameworks.
- **Dynamic content**: `scripts.js` loads `pricing.csv` via fetch and renders a pricing table in the Services section.
- **Images**: Stored in the `img/` directory. Logo is referenced in the header.
- **Contact/Quote Form**: Submits to Formspree endpoint via POST.

## Key Files & Data Flow
- `index.html`: Main structure, sections for services, quote, contact, and map placeholder.
- `styles.css`: Site-wide styles, including header, buttons, tables, and forms.
- `scripts.js`: Handles year display in footer and dynamic loading of pricing table from `pricing.csv`.
- `pricing.csv`: Service codes, names, and prices. First row is headers; subsequent rows are service entries.

## Developer Workflows
- **No build step**: All files are static. Just open `index.html` in a browser to view.
- **Debugging**: Use browser DevTools for inspecting DOM, CSS, and JS errors.
- **Updating prices**: Edit `pricing.csv`. JS will auto-update the table on reload.
- **Adding services**: Add new rows to `pricing.csv` with the same header format.
- **Styling changes**: Edit `styles.css` directly. No preprocessor.

## Project-Specific Patterns
- **CSV-driven pricing**: All service prices are managed in `pricing.csv` and loaded client-side. No backend.
- **Error handling**: If `pricing.csv` fails to load, JS displays a fallback message in the pricing table.
- **Form submission**: Uses Formspree for contact/quote requests. No local validation beyond HTML5 required fields.
- **Map embedding**: Placeholder in `index.html` for Google Map integration (not yet implemented).

## Integration Points
- **Formspree**: Handles contact form submissions.
- **Google Maps**: To be embedded in the `#map` div (see comment in HTML).

## Conventions
- **File naming**: Lowercase, hyphen-separated for all files and directories.
- **No frameworks**: Pure HTML/CSS/JS. No React, Vue, etc.
- **No package management**: No npm, yarn, or pip. All dependencies are CDN or local files.

## Examples
- To add a new service: Edit `pricing.csv`:
  `AC-NEW-SERVICE,New Service Name,1500`
- To change site colors: Edit relevant selectors in `styles.css`.
- To update contact info: Edit the Contact section in `index.html`.

---

If any section is unclear or missing, please provide feedback for further refinement.
