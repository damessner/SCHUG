# SchUG-Quiz 🎯

Interaktives Quiz zum **Schulunterrichtsgesetz (SchUG)** — praxisnahe Single- und Multiple-Choice-Fragen für die Prüfungsvorbereitung.

👉 **Live:** https://damessner.github.io/SCHUG

## Features

- **Single Choice** und **Multiple Choice** Fragen
- **Abschnitts-Filter** – wähle einen bestimmten Abschnitt oder alle
- **Zufällige Reihenfolge** – durchmische die Fragen
- **Anzahl wählbar** – 5, 10, 20 oder alle Fragen
- **Sofortiges Feedback** mit Erklärung und Gesetzesverweis
- **Detail-Review** nach dem Quiz mit allen Antworten
- **Falsche wiederholen** – gezielt üben
- **100 % statisch** – kein Server, kein Build-Tool, kein Framework

## ⚠️ Haftungsausschluss

Dieses Quiz wird mit größter Sorgfalt erstellt. Es dient ausschließlich zu Lern- und Übungszwecken und ersetzt keine professionelle Rechtsberatung. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird keine Haftung übernommen.

## Verwendung

1. Repro klonen:
   ```bash
   git clone https://github.com/<username>/SCHUG.git
   cd SCHUG
   ```
2. `index.html` im Browser öffnen (lokal oder via GitHub Pages)

## Fragen hinzufügen

Fragen werden in `js/questions.js` als Array von Objekten definiert:

```js
{
  id: 123,
  section: 5,
  paragraph: "§18",
  type: "single",               // "single" oder "multiple"
  question: "Praxisnahes Szenario...",
  options: [
    "Antwort A",
    "Antwort B",
    "Antwort C",
    "Antwort D"
  ],
  correct: [1],                 // Index(es) der richtigen Antwort
  explanation: "Laut §18 Abs. 1..."
}
```

## Projektstruktur

```
├── index.html                  ← Einstiegsseite
├── css/style.css               ← Komplettes Styling
├── js/
│   ├── questions.js            ← Fragenkatalog
│   ├── quiz-engine.js          ← Quiz-Logik
│   └── app.js                  ← App-Controller
├── schug_paragraphen/          ← SchUG-Volltext (Referenz)
└── README.md
```

## Technik

- **Reines HTML/CSS/JS** – kein Framework, keine Dependencies
- **Responsive** – mobile-first, funktioniert auf Smartphone, Tablet, Desktop
- **Barrierefrei** – Tastatur-Navigation, Screenreader-kompatibel
- **Modernes CSS** – Custom Properties, `:has()`-Selektor, `prefers-reduced-motion`
