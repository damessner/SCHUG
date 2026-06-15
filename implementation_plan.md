# Quiz-Framework für das Schulunterrichtsgesetz (SchUG)

## Ziel
Ein statisches GitHub-Page-Quiz (HTML/CSS/JS, kein Framework) mit Single- und Multiple-Choice-Fragen, basierend auf praxisnahen Beispielen aus dem SchUG. Das Framework wird jetzt gebaut, Fragen werden später abschnittsweise hinzugefügt.

## Projektstruktur

```
SCHUG/
├── index.html                 ← Einstiegsseite (SPA, alle Screens via JS)
├── css/
│   └── style.css              ← Komplettes Styling (responsive, print)
├── js/
│   ├── app.js                 ← App-Router, Screen-Wechsel, Zustand
│   ├── quiz-engine.js         ← Quiz-Logik (Anzeige, Bewertung, Auswertung)
│   └── questions-loader.js    ← Lädt Fragen aus JSON-Dateien
├── questions/                 ← Fragen-Dateien (später abschnittsweise)
│   └── template.json          ← Vorlage-Datei mit einer Beispiel-Frage
├── README.md                  ← Repo-Beschreibung
└── schug_paragraphen/         ← Bereits existierende Referenz
```

## Screen-Design (3 Screens, Single-Page)

### 1. StartScreen
- Titel "SchUG-Quiz"
- Kurzbeschreibung: "Teste dein Wissen zum Schulunterrichtsgesetz anhand von praxisnahen Beispielen"
- Auswahl: **Alle Abschnitte** oder **bestimmten Abschnitt wählen** (Dropdown)
- Option: **Reihenfolge zufällig** (Toggle)
- Button: "Quiz starten"

### 2. QuizScreen
- **Header:** Abschnittsname, Fortschritt (7/20), Punktestand
- **Frage:** Nummer + Fragetext (praxisnahes Szenario)
- **Antwort-Optionen:**
  - Single Choice: Radio-Buttons
  - Multiple Choice: Checkboxen + Hinweis "(Mehrfachauswahl möglich)"
- **Footer:** "Zurück" / "Weiter" / "Beenden"
- **Nach Antwort:** sofortiges Feedback (richtig/falsch + Erklärung)
- **Animation/Highlight:** Korrekte Antwort grün, falsche rot

### 3. ResultScreen
- **Ergebnis:** X von Y richtig (Prozentanzeige)
- **Bewertung:** (z.B. "Sehr gut" / "Gut" / "Befriedigend" / "Nicht bestanden")
- **Button:** "Antworten überprüfen" → zeigt alle Fragen mit Markierung
- **Button:** "Neues Quiz starten"
- **Button:** "Falsche Antworten wiederholen"

## Question-JSON-Format

```json
{
  "id": 1,
  "section": 1,
  "sectionTitle": "Allgemeine Bestimmungen",
  "paragraph": "§1",
  "type": "single",
  "question": "Ein Schüler wird in der ersten Schulwoche krank und kann am Unterricht nicht teilnehmen. Der Direktor der öffentlichen Mittelschule möchte den Schüler trotzdem als ordentlichen Schüler aufnehmen, weil dieser im Vorjahr ausgezeichnete Leistungen erbracht hat. Welche Aussage trifft zu?",
  "options": [
    "Der Schüler muss aufgenommen werden, da das SchUG keine Mindestanwesenheit vorsieht.",
    "Der Schüler darf nur aufgenommen werden, wenn er die Unterrichtssprache beherrscht (§3 Abs. 1 lit. b) und die gesetzlichen Voraussetzungen erfüllt (§3 Abs. 1 lit. a).",
    "Der Direktor kann nach eigenem Ermessen entscheiden, weil es sich um eine öffentliche Schule handelt.",
    "Die Aufnahme ist nur mit Zustimmung der Schulbehörde möglich."
  ],
  "correct": [1],
  "explanation": "Gemäß §3 (1) SchUG ist als ordentlicher Schüler aufzunehmen, wer die gesetzlichen Voraussetzungen erfüllt und die Unterrichtssprache beherrscht. Eine Kranksetzung in der ersten Woche ändert nichts an diesen Aufnahmekriterien."
}
```

- `type`: `"single"` oder `"multiple"`
- `correct`: Array von Indices (0-based). Bei `single` Länge 1, bei `multiple` Länge ≥ 1

## Features

| Feature | Priorität |
|---|---|
| Single Choice Fragen | v1 (Pflicht) |
| Multiple Choice Fragen | v1 (Pflicht) |
| Fortschrittsanzeige | v1 |
| Sofortiges Feedback mit Erklärung | v1 |
| Ergebnisübersicht | v1 |
| Abschnittsfilter | v1 |
| Zufällige Reihenfolge | v1 |
| Antworten überprüfen (Review) | v1 |
| Mobile-first, responsives Design | v1 |
| Falsche Antworten wiederholen | v2 (optional) |
| Highscore / LocalStorage | v2 (optional) |
| Prüfungsmodus (alle Fragen, timed) | v2 (optional) |

## Umsetzungsschritte

1. **`index.html`** – HTML-Struktur mit 3 Screens (divs), Meta-Tags, Einbindung von CSS/JS
2. **`css/style.css`** – Komplettes Styling: Variablen, Layout, Formulare, Feedback-Farben, Responsive
3. **`js/questions-loader.js`** – Lädt Fragen aus JSON-Dateien, stellt Merge-Funktion bereit
4. **`js/quiz-engine.js`** – Kernlogik: Frage anzeigen, Antwort prüfen, bewerten, Ergebnis berechnen
5. **`js/app.js`** – App-State, Screen-Wechsel, Event-Handler, Start/Quiz/Result-Orchestrierung
6. **`questions/template.json`** – Template-Datei mit 2-3 Beispielfragen (für Struktur-Test)
7. **`README.md`** – Projektinfos, How-to, Link zur GitHub Page

## Validierung

- `index.html` öffnet im Browser ohne Fehler (auch via `file://`)
- Quiz-Durchlauf: Start → Frage beantworten → Feedback → nächste → Ergebnis
- Single Choice: nur eine Antwort wählbar
- Multiple Choice: mehrere Antworten wählbar
- Responsive auf Mobil und Desktop
- Keine JS-Konsolenfehler
