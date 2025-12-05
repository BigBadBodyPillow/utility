//css
import './Sheets.css';

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1InKVRATY6wQjbp-E3zsAYFr_pdVvm7rnXXWLrQQZGkM/edit?usp=sharing';
export function Sheets() {
  return (
    <>
      <div className="sheets">
        <iframe
          className="sheets-embed"
          src={SHEET_URL}
          // allow="clipboard-read; clipboard-write"
          // sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe>
      </div>
    </>
  );
}
