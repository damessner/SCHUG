/**
 * SchUG-Quiz – Fragenkatalog
 *
 * Hier werden alle Fragen gespeichert. Abschnittsweiser Aufbau.
 * Jede Frage = ein Objekt mit folgendem Format:
 *
 * @format
 * {
 *   id:        number (eindeutig)
 *   section:   number (1-17, Abschnittsnummer)
 *   paragraph: string (z.B. "§3")
 *   type:      "single" | "multiple"
 *   question:  string (praxisnahes Szenario)
 *   options:   string[4] (Antwortmöglichkeiten)
 *   correct:   number[] (0-based Indices der richtigen Antworten)
 *   explanation: string (Erklärung ohne Paragrafen-Referenzen)
 * }
 */

window.QUESTIONS = [];
window.QUESTIONS_REGISTRY = window.QUESTIONS;

// ===================================================================
//  1. Abschnitt — ALLGEMEINE BESTIMMUNGEN
//  §1  Geltungsbereich
// ===================================================================

window.QUESTIONS.push(
  // --- Original 8 (Nr. 1–8) ---
  {
    id: 1,
    section: 1,
    paragraph: "§1",
    type: "single",
    question: "Eine Junglehrerin beginnt ihre Karriere an einer öffentlichen Neuen Mittelschule. Ihre Mutter, ebenfalls Lehrerin, meint: „Das SchUG gilt doch nur für höhere Schulen, oder” Was stimmt?",
    options: [
      "Das SchUG gilt nur für berufsbildende höhere Schulen und AHS.",
      "Das SchUG gilt für alle öffentlichen Schulen der im Schulorganisationsgesetz geregelten Schularten – also auch für die NMS.",
      "Das SchUG gilt nur für Privatschulen mit Öffentlichkeitsrecht.",
      "Das SchUG gilt nur für Pflichtschulen."
    ],
    correct: [1],
    explanation: "Das SchUG gilt ausdrücklich für öffentliche Schulen (und Schulen mit Öffentlichkeitsrecht) aller im Schulorganisationsgesetz geregelten Schularten – egal ob Pflichtschule, mittlere oder höhere Schule."
  },
  {
    id: 2,
    section: 1,
    paragraph: "§1",
    type: "single",
    question: "Ein Lehrer wechselt von einer öffentlichen NMS an eine Privatschule, die mit dem Öffentlichkeitsrecht ausgestattet ist. Der Direktor dort sagt: „Hier gelten nicht dieselben Regeln wie im öffentlichen Bereich, wir sind ja privat” Stimmt das?",
    options: [
      "Ja, Privatschulen mit Öffentlichkeitsrecht können eigene Regeln für Leistungsbeurteilung und Aufnahme festlegen.",
      "Ja, weil Privatschulen grundsätzlich nicht an das SchUG gebunden sind.",
      "Nein, das SchUG gilt auch für Privatschulen mit Öffentlichkeitsrecht – sie sind in den wesentlichen Bereichen gleichgestellt.",
      "Nein, aber nur, weil die Schule per Einzelvertrag das SchUG übernommen hat."
    ],
    correct: [2],
    explanation: "Das SchUG gilt für öffentliche und mit dem Öffentlichkeitsrecht ausgestattete Schulen gleichermaßen. Eine Privatschule mit Öffentlichkeitsrecht ist in schulrechtlicher Hinsicht einer öffentlichen Schule gleichgestellt."
  },
  {
    id: 3,
    section: 1,
    paragraph: "§1",
    type: "single",
    question: "Eine reine Privatschule (ohne Öffentlichkeitsrecht) weist einen Schüler nach der 3. Klasse ohne Wiederholungsprüfung ab. Die Mutter beruft sich auf die Bestimmungen des SchUG zur Wiederholungsprüfung. Hat sie recht?",
    options: [
      "Ja, das SchUG gilt für alle Schulen, die dem österreichischen Schulsystem angehören.",
      "Ja, weil der Schüler einen gesetzlichen Anspruch auf eine Wiederholungsprüfung hat.",
      "Nein, das SchUG gilt nur für öffentliche Schulen und solche mit Öffentlichkeitsrecht – reine Privatschulen sind nicht erfasst.",
      "Nein, aber nur weil die Schulart nicht im Schulorganisationsgesetz geregelt ist."
    ],
    correct: [2],
    explanation: "Reine Privatschulen ohne Öffentlichkeitsrecht unterliegen nicht dem SchUG. Die Mutter kann ihre Rechte daher nicht aus dem SchUG ableiten, sondern allenfalls aus dem privaten Schulvertrag."
  },
  {
    id: 4,
    section: 1,
    paragraph: "§1",
    type: "single",
    question: "Ein Lehrer beginnt an einer höheren land- und forstwirtschaftlichen Lehranstalt (HLFS) – einer öffentlichen Schule. Ein Kollege sagt: „Wir haben unser eigenes Gesetz, das SchUG gilt hier nicht” Muss der Lehrer das SchUG trotzdem kennen?",
    options: [
      "Nein, land- und forstwirtschaftliche Schulen haben ein völlig eigenständiges Schulrecht.",
      "Ja, das SchUG gilt ausdrücklich auch für diese Schulen – sie werden schulrechtlich wie höhere berufsbildende Schulen behandelt.",
      "Nur wenn die Schule nicht im Land- und forstwirtschaftlichen Bundesschulgesetz geregelt ist.",
      "Nein, diese Schulen fallen unter das Forstgesetz und das Landwirtschaftsgesetz, nicht unter das SchUG."
    ],
    correct: [1],
    explanation: "Das SchUG gilt explizit auch für öffentliche höhere land- und forstwirtschaftliche Lehranstalten sowie für die land- und forstwirtschaftlichen Fachschulen des Bundes. Sie werden schulrechtlich wie höhere bzw. mittlere berufsbildende Schulen behandelt."
  },
  {
    id: 5,
    section: 1,
    paragraph: "§1",
    type: "single",
    question: "Ein Forstwirtschafts-Absolvent beginnt sein Berufspraktikum als Lehrer an der Forstfachschule (Bundesschule). Er fragt sich, ob bei Konflikten mit Schülern das SchUG oder das Forstgesetz anwendbar ist. Was gilt?",
    options: [
      "Das Forstgesetz regelt den Schulbetrieb vollständig – das SchUG gilt nicht.",
      "Das SchUG gilt, weil die Forstfachschule explizit in den Geltungsbereich des SchUG einbezogen ist.",
      "Es gilt das SchUG, aber nur in Ausnahmefällen, wenn das Forstgesetz keine Regelung enthält.",
      "Weder SchUG noch Forstgesetz – die Forstfachschule hat eine eigene Hausordnung mit Rechtskraft."
    ],
    correct: [1],
    explanation: "Die Forstfachschule ist ausdrücklich im SchUG genannt und unterliegt daher dessen Bestimmungen."
  },
  {
    id: 6,
    section: 1,
    paragraph: "§1",
    type: "single",
    question: "Eine International School in Wien wird von Eltern gegründet, folgt einem ausländischen Lehrplan und hat keine Öffentlichkeitsrechte. Kann sich ein Schüler, der von der Schule verwiesen wurde, auf das SchUG berufen?",
    options: [
      "Ja, weil es sich um eine Schule in Österreich handelt, gilt österreichisches Schulrecht.",
      "Ja, aber nur wenn die Schule auch österreichische Staatsbürger aufnimmt.",
      "Nein, weil die Schule nicht im Schulorganisationsgesetz geregelt ist und kein Öffentlichkeitsrecht besitzt.",
      "Nein, weil International Schools grundsätzlich vom SchUG ausgenommen sind."
    ],
    correct: [2],
    explanation: "Das SchUG gilt nur für Schulen, die im Schulorganisationsgesetz geregelten Schularten angehören UND öffentlich oder mit Öffentlichkeitsrecht ausgestattet sind. Eine reine Privatschule ohne Öffentlichkeitsrecht und ohne SchOG-Regelung fällt nicht darunter."
  },
  {
    id: 7,
    section: 1,
    paragraph: "§1",
    type: "multiple",
    question: "Eine Schulbehörde prüft, ob an folgenden Schulen das SchUG anzuwenden ist. Welche Schulen sind erfasst?",
    options: [
      "Eine öffentliche Volksschule in einer ländlichen Gemeinde.",
      "Eine private Höhere Lehranstalt für wirtschaftliche Berufe mit Öffentlichkeitsrecht.",
      "Eine Privatschule ohne Öffentlichkeitsrecht, die nach einem alternativen pädagogischen Konzept arbeitet und nicht im SchOG als eigene Schulart anerkannt ist.",
      "Eine öffentliche Forstfachschule."
    ],
    correct: [0, 1, 3],
    explanation: "Die öffentliche Volksschule und die HLW mit Öffentlichkeitsrecht sind erfasst. Die Forstfachschule ist explizit genannt. Die Privatschule ohne Öffentlichkeitsrecht und ohne SchOG-Regelung hingegen nicht."
  },
  {
    id: 8,
    section: 1,
    paragraph: "§1",
    type: "multiple",
    question: "Welche der folgenden Situationen fallen unter den Geltungsbereich des SchUG?",
    options: [
      "Ein Schulverweis an einer öffentlichen AHS.",
      "Die Leistungsbeurteilung an einer privaten NMS mit Öffentlichkeitsrecht.",
      "Die Aufnahmeprüfung an einer vollkommen privaten Musikschule ohne Öffentlichkeitsrecht.",
      "Die Wiederholungsprüfung an einer öffentlichen land- und forstwirtschaftlichen Fachschule des Bundes."
    ],
    correct: [0, 1, 3],
    explanation: "Die öffentliche AHS, die Privatschule mit Öffentlichkeitsrecht und die land- und forstwirtschaftliche Fachschule des Bundes sind erfasst. Die reine Privatschule ohne Öffentlichkeitsrecht nicht."
  },

  // --- Neue 8 (Nr. 9–16) ---
  {
    id: 9,
    section: 1,
    paragraph: "§1",
    type: "single",
    question: "Du unterrichtest an einer Privatschule mit Öffentlichkeitsrecht. Ein Schüler hat in deinem Fach klare Defizite, du willst ihm ein „Nicht Genügend” geben. Der Direktor sagt: „Wir sind privat, wir können einfach alle durchwinken – das interessiert doch keinen.” Was sagst du als Lehrer?",
    options: [
      "Der Direktor hat recht – Privatschulen können Noten frei vergeben.",
      "Ich muss mich an die SchUG-Regeln für Leistungsbeurteilung halten, auch wenn die Schule privat ist – sie hat Öffentlichkeitsrecht.",
      "Ich kann den Schüler nur durchfallen lassen, wenn die Eltern zustimmen.",
      "Ich kann das „Nicht Genügend” geben, darf es aber nicht im Zeugnis ausweisen."
    ],
    correct: [1],
    explanation: "Eine Privatschule mit Öffentlichkeitsrecht ist in schulrechtlichen Fragen einer öffentlichen Schule gleichgestellt. Die Benotung muss nach denselben Regeln erfolgen wie an öffentlichen Schulen."
  },
  {
    id: 10,
    section: 1,
    paragraph: "§1",
    type: "single",
    question: "Deine öffentliche Schule startet ein Pilotprojekt: eine „Projektklasse” mit flexiblem Unterricht. Die Schulleitung sagt: „Für diese Klasse gelten die normalen Beurteilungsregeln nicht – wir machen unser eigenes System” Dein Bauchgefühl sagt dir, dass das nicht stimmen kann. Kann die Schule einzelne Klassen einfach vom SchUG ausnehmen?",
    options: [
      "Ja, Pilotprojekte dürfen von gesetzlichen Regelungen abweichen.",
      "Nein, die Schule kann nicht willkürlich entscheiden, ob sie das SchUG anwendet oder nicht.",
      "Ja, aber nur mit Zustimmung aller Eltern.",
      "Nein, aber nur weil die Projektklasse nicht als Sonderform genehmigt wurde."
    ],
    correct: [1],
    explanation: "Die Schule als Ganzes unterliegt dem SchUG. Man kann nicht einzelne Klassen oder Projekte einfach ausklammern. Wenn die Schule öffentlich (oder mit Öffentlichkeitsrecht) ist, gilt das Gesetz für alle Schüler gleichermaßen."
  },
  {
    id: 11,
    section: 1,
    paragraph: "§1",
    type: "single",
    question: "Eine Junglehrerin bekommt zwei Stellenangebote: eine öffentliche NMS und eine reine Privatschule (ohne Öffentlichkeitsrecht). Sie fragt dich: „Wenn ich an der Privatschule bin – gelten für mich dann dieselben Regeln bei Schularbeiten, Noten und Wiederholungsprüfungen” Was antwortest du?",
    options: [
      "Ja, das Schulrecht gilt in ganz Österreich für alle Schulen.",
      "Nein, an einer reinen Privatschule gelten die SchUG-Regeln nicht – du musst dich an die schuleigene Ordnung halten.",
      "Ja, aber nur für die ersten drei Dienstjahre.",
      "Teilweise: Die Notengebung ist gleich, aber Wiederholungsprüfungen sind privatrechtlich geregelt."
    ],
    correct: [1],
    explanation: "Reine Privatschulen ohne Öffentlichkeitsrecht unterliegen nicht dem SchUG. Die Junglehrerin müsste sich dort nach den schuleigenen Regelungen richten, die im Arbeitsvertrag oder der Schulordnung festgelegt sind."
  },
  {
    id: 12,
    section: 1,
    paragraph: "§1",
    type: "single",
    question: "Du unterrichtest an einer öffentlichen Höheren Land- und Forstwirtschaftlichen Schule (HLFS). Ein Schüler ist mit seiner Note unzufrieden und verlangt, dass du ihm die Benotungsregeln aus dem SchUG zeigst. Ein Kollege meint: „Wir sind keine normale Schule – bei uns gilt das SchUG nicht” Musst du dem Schüler die Regeln erklären?",
    options: [
      "Nein, der Kollege hat recht – Landwirtschaftsschulen haben ihr eigenes Gesetz.",
      "Ja, das SchUG gilt auch für diese Schulform – du kannst und solltest die Regeln erklären.",
      "Du musst nur dann Auskunft geben, wenn der Schulleiter es anordnet.",
      "Nein, Noten sind an dieser Schulart nicht anfechtbar."
    ],
    correct: [1],
    explanation: "Die HLFS ist im SchUG explizit genannt und wird wie eine höhere berufsbildende Schule behandelt. Du als Lehrer bist verpflichtet, deine Benotung nachvollziehbar zu machen – das SchUG ist dafür die Grundlage."
  },
  {
    id: 13,
    section: 1,
    paragraph: "§1",
    type: "single",
    question: "Du bist Klassenvorstand an einer öffentlichen Forstfachschule. Ein Schüler wurde wiederholt beim Spicken erwischt. Der Direktor will ihn ausschließen und bittet dich, den Fall nach dem SchUG vorzubereiten. Kannst du dich bei der Vorbereitung auf das SchUG stützen?",
    options: [
      "Nein, die Forstfachschule hat ein eigenes Disziplinarrecht nach dem Forstgesetz.",
      "Ja, die Forstfachschule fällt unter den Geltungsbereich des SchUG.",
      "Nur wenn der Ausschluss einvernehmlich mit den Eltern erfolgt.",
      "Nein, für Ausschlüsse gibt es im SchUG keine Regelung."
    ],
    correct: [1],
    explanation: "Die Forstfachschule ist im SchUG ausdrücklich genannt und unterliegt daher dessen Bestimmungen – auch bei Disziplinarmaßnahmen wie einem Ausschluss."
  },
  {
    id: 14,
    section: 1,
    paragraph: "§1",
    type: "single",
    question: "Du wechselst von einer öffentlichen NMS an eine private NMS mit Öffentlichkeitsrecht. An deiner neuen Schule gilt eine interne Richtlinie: „Mitarbeitsnoten zählen 60 % der Gesamtnote” Du weißt aus deiner alten Schule, dass das SchUG eine solche Festlegung nicht vorsieht. Darf die Schule das einfach so festlegen?",
    options: [
      "Ja, als Privatschule kann sie eigene Gewichtungen vornehmen.",
      "Nein, weil die Schule Öffentlichkeitsrecht hat, muss sie sich an die schulrechtlichen Vorgaben zur Leistungsbeurteilung halten.",
      "Ja, aber nur wenn das Schulforum zustimmt.",
      "Die Gewichtung ist egal, weil die Note ohnehin frei wählbar ist."
    ],
    correct: [1],
    explanation: "Auch Privatschulen mit Öffentlichkeitsrecht müssen die gesetzlichen Vorgaben zur Leistungsbeurteilung einhalten. Ein willkürliches Gewichtungssystem ohne gesetzliche Grundlage ist nicht zulässig."
  },
  {
    id: 15,
    section: 1,
    paragraph: "§1",
    type: "single",
    question: "Du hast selbst ein Kind, das auf eine reine Privatschule geht (kein Öffentlichkeitsrecht). Die Schule will dein Kind die 4. Klasse wiederholen lassen, obwohl es nach den SchUG-Regeln (Note „Befriedigend” im Jahreszeugnis) aufsteigen dürfte. Kannst du als Vater oder Mutter verlangen, dass die Schule die SchUG-Regeln anwendet?",
    options: [
      "Ja, weil das österreichische Schulrecht für alle Schulen verbindlich ist.",
      "Ja, weil die Wiederholungsregeln zum Kernbereich des Schulrechts gehören.",
      "Nein, reine Privatschulen ohne Öffentlichkeitsrecht müssen die SchUG-Regeln nicht anwenden. Der Schulvertrag ist die Grundlage.",
      "Du kannst es verlangen, aber die Schule kann widersprechen – dann entscheidet die Schulbehörde."
    ],
    correct: [2],
    explanation: "Eine reine Privatschule ohne Öffentlichkeitsrecht unterliegt nicht dem SchUG. Die Rechte und Pflichten richten sich nach dem privaten Schulvertrag. Wenn du mit der Entscheidung nicht einverstanden bist, kannst du nur zivilrechtlich vorgehen, nicht über das SchUG."
  },
  {
    id: 16,
    section: 1,
    paragraph: "§1",
    type: "single",
    question: "Deine Schule (öffentliches Gymnasium) startet eine „Semesterklasse” als Pilotprojekt. Die Direktorin sagt: „Da das eine semestergegliederte Sonderform ist, müssen wir uns nicht an die SchUG-Regeln für Wiederholungsprüfungen halten” Du sollst die Wiederholungsprüfungen für diese Klasse organisieren. Was tust du?",
    options: [
      "Die Regeln der Direktorin befolgen – sie wird schon wissen, was rechtlich geht.",
      "Widersprechen – eine einfache Pilotklasse ohne besonderen gesetzlichen Status ist keine gesetzlich definierte Sonderform.",
      "Die Eltern der betroffenen Schüler entscheiden lassen.",
      "Das geht in Ordnung, weil Semesterklassen immer vom SchUG ausgenommen sind."
    ],
    correct: [1],
    explanation: "Der Gesetzeswortlaut nimmt nur in Semester gegliederte Sonderformen aus. Eine einfache Pilotklasse ohne besonderen gesetzlichen Status ist keine solche Sonderform. Die Direktorin kann nicht eigenmächtig SchUG-Regeln außer Kraft setzen."
  },

  // ===================================================================
  //  2. Abschnitt — AUFNAHME IN DIE SCHULE
  //  §5  Aufnahmsverfahren
  // ===================================================================

  // --- Batch A: Grundlagen (Abs. 1, 2, 3, 6, 7) ---
  // A1 — Schulleiter als Entscheider (Abs. 2)
  {
    id: 17,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du übernimmst eine neue Schule als Direktor. Ein erfahrener Kollege sagt: „Bisher hat immer der SGA über Aufnahmen entschieden, du als Direktor hast nichts zu sagen.” Was stimmt?",
    options: [
      "Der SGA entscheidet bei mehr als 10 Anmeldungen pro Platz.",
      "Der Schulleiter entscheidet über die Aufnahme der angemeldeten Aufnahmsbewerber.",
      "Die Bildungsdirektion muss jede Aufnahme genehmigen.",
      "Der Klassenvorstand der künftigen Klasse entscheidet."
    ],
    correct: [1],
    explanation: "Der Schulleiter entscheidet über die Aufnahme – das Gesetz weist die Entscheidung ausdrücklich ihm zu. Der SGA hat hier kein Entscheidungsrecht."
  },
  {
    id: 18,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Schüler erfüllt die Voraussetzungen für eine außerordentliche Aufnahme nach §4 Abs.1. Wer entscheidet über seine Aufnahme?",
    options: [
      "Die Bildungsdirektion, weil es eine Sonderform der Aufnahme ist.",
      "Der Schulleiter – §5 Abs.2 stellt ao. Schüler den ordentlichen gleich.",
      "Der Schüler wird automatisch aufgenommen, der Schulleiter hat kein Entscheidungsrecht.",
      "Der SGA muss über die ao. Aufnahme entscheiden."
    ],
    correct: [1],
    explanation: "Das Gesetz stellt klar, dass der Schulleiter auch über die Aufnahme jener Bewerber entscheidet, die die Voraussetzungen für eine außerordentliche Aufnahme erfüllen."
  },
  {
    id: 19,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du bist als Direktor für drei Wochen krankgeschrieben. In dieser Zeit müssen Aufnahmeentscheidungen getroffen werden. Wer entscheidet?",
    options: [
      "Der SGA, weil er das einzige vertretungsberechtigte Gremium ist.",
      "Deine Stellvertretung (geschäftsführender Schulleiter) übernimmt die Entscheidungen.",
      "Die Bildungsdirektion muss alle Entscheidungen übernehmen.",
      "Die Entscheidungen müssen bis zu deiner Rückkehr aufgeschoben werden."
    ],
    correct: [1],
    explanation: "Die Stellvertretung übt in Abwesenheit des Schulleiters dessen Befugnisse aus – darunter auch die Entscheidung über Aufnahmen. Das Verfahren darf nicht blockiert werden."
  },

  // A2 — Zugelassene / ausgenommene Schularten (Abs. 1, 7)
  {
    id: 20,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du wirst Direktor einer land- und forstwirtschaftlichen Lehranstalt. Der bisherige Direktor meint: „§5 gilt für uns natürlich, wir sind eine öffentliche Schule.” Liegt er richtig?",
    options: [
      "Ja, weil land- und forstwirtschaftliche Schulen vom SchUG erfasst sind und §5 daher gilt.",
      "Nein, land- und forstwirtschaftliche Schulen sind vom Anwendungsbereich des SchUG ausgenommen.",
      "Ja, aber nur wenn die Schule keinen Sprengel hat.",
      "Nein, für diese Schulen gilt ein eigenes Bundesgesetz."
    ],
    correct: [0],
    explanation: "Land- und forstwirtschaftliche Schulen fallen in den Anwendungsbereich des SchUG, auch wenn sie anderen Ministerien unterstehen. §5 gilt daher für sie."
  },
  {
    id: 21,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Die Volksschuldirektorin deiner Nachbarschule hat mehr Anmeldungen als Plätze. Sie fragt, ob sie die Reihungskriterien des §5 anwenden muss. Was rätst du?",
    options: [
      "Ja, die Reihungskriterien gelten für alle Schularten gleichermaßen.",
      "Nein, für die Volksschule gelten das Schulpflichtgesetz 1985 und das landesrechtliche Pflichtschulerhaltungsgesetz.",
      "Ja, aber nur die gesetzlichen Pflichtkriterien ohne schulautonome.",
      "Die Gemeinde entscheidet, welches Gesetz anzuwenden ist."
    ],
    correct: [1],
    explanation: "Volksschulen sind in §5 Abs.1 ausdrücklich vom Anwendungsbereich ausgenommen. Für sie gelten eigene gesetzliche Regelungen auf Bundes- und Landesebene."
  },
  {
    id: 22,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Als designierter Direktor einer Berufsschule bereitest du das Aufnahmsverfahren vor. Ein Kollege sagt: „Wir sind von §5 ausgenommen, das gilt nur für allgemeinbildende Schulen.” Was stimmt?",
    options: [
      "Die Berufsschule ist in §5 Abs.1 ausdrücklich ausgenommen, er hat recht.",
      "Die Berufsschule fällt voll unter §5 wie jede andere Schulart auch.",
      "Die Berufsschule hat ein Sondergesetz, das §5 zur Gänze verdrängt.",
      "Die Wirtschaftskammer entscheidet über das Aufnahmsverfahren für Berufsschulen."
    ],
    correct: [0],
    explanation: "Die Berufsschule ist im Gesetzeswortlaut des §5 Abs.1 ausdrücklich von der Regelung ausgenommen – genau wie Volks- und Sonderschulen."
  },
  {
    id: 23,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Eine Sonderschule fragt bei dir an, ob die Reihungskriterien des §5 für sie gelten. Was ist die Rechtslage?",
    options: [
      "Ja, Sonderschulen sind nicht ausdrücklich ausgenommen.",
      "Nein, wie die Volksschule fallen Sonderschulen unter das Schulpflichtgesetz 1985 und das Pflichtschulerhaltungsgesetz des Landes.",
      "Ja, aber die Bildungsdirektion muss die Kriterien genehmigen.",
      "Der Schulerhalter (Gemeinde) entscheidet, ob §5 angewandt wird."
    ],
    correct: [1],
    explanation: "Sonderschulen sind ebenso wie Volksschulen von §5 Abs.1 ausgenommen. Für sie gelten die Bestimmungen des Schulpflichtgesetzes 1985 und des landesrechtlichen Pflichtschulerhaltungsgesetzes."
  },

  // A3 — Zeitlicher Übergang (Abs. 3)
  {
    id: 24,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Schüler wird im Juni für das nächste Schuljahr an deiner Schule aufgenommen. Die Mutter will noch im August eine Schulbesuchsbestätigung für die Familienbeihilfe. Kannst du sie ausstellen?",
    options: [
      "Nein, der Schüler ist erst ab dem ersten Schultag im September Schüler der Schule.",
      "Ja, wenn der Schüler am letzten Unterrichtstag des laufenden Schuljahres die Voraussetzungen erfüllt, ist er ab dem darauffolgenden Tag Schüler.",
      "Ja, aber die Bestätigung darf erst ab 1. September ausgestellt werden.",
      "Nein, vor dem ersten Unterrichtstag darf keine Bestätigung ausgestellt werden."
    ],
    correct: [1],
    explanation: "Wer für das folgende Schuljahr aufgenommen wird und am letzten Unterrichtstag die Voraussetzungen erfüllt, ist ab dem Tag nach dem letzten Unterrichtstag Schüler der aufnehmenden Schule – auch während der Ferien."
  },
  {
    id: 25,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Schüler wird im Juni an deiner Schule aufgenommen, fällt aber im Sommer in der Wiederholungsprüfung der vorigen Schule durch. Am letzten Unterrichtstag erfüllt er die Voraussetzungen nicht mehr. Gilt er trotzdem als dein Schüler ab dem nächsten Tag?",
    options: [
      "Ja, die einmal ausgesprochene Aufnahme ist bindend.",
      "Nein, weil die Voraussetzungen am letzten Unterrichtstag nicht erfüllt sind.",
      "Ja, du kannst als Direktor die Aufnahme ausdrücklich bestätigen.",
      "Der Klassenvorstand der künftigen Klasse entscheidet."
    ],
    correct: [1],
    explanation: "Die Aufnahme für das folgende Schuljahr steht unter der Bedingung, dass die Voraussetzungen am letzten Unterrichtstag erfüllt sind. Ist das nicht der Fall, wird der Schüler nicht Schüler der aufnehmenden Schule."
  },

  // A4 — Privatschulen (Abs. 6)
  {
    id: 26,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du bist Direktor einer Privatschule mit Öffentlichkeitsrecht. Ein Schüler erfüllt alle Aufnahmevoraussetzungen. In welcher Form erfolgt die Aufnahme?",
    options: [
      "Durch Bescheid des Schulleiters wie an öffentlichen Schulen.",
      "Durch einen Vertrag des bürgerlichen Rechts zwischen Schüler und Privatschulerhalter.",
      "Durch Anmeldung beim zuständigen Gemeindeamt.",
      "Durch einen Verwaltungsakt der Bildungsdirektion."
    ],
    correct: [1],
    explanation: "Anders als an öffentlichen Schulen erfolgt die Aufnahme an Privatschulen durch einen privatrechtlichen Vertrag, nicht durch hoheitlichen Bescheid."
  },
  {
    id: 27,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Dein Schulerhalter drängt dich als Direktor einer Privatschule, einen Schüler aufzunehmen, der die schulrechtlichen Voraussetzungen nicht erfüllt. Ist der Aufnahmevertrag gültig, wenn du ihn unterschreibst?",
    options: [
      "Ja, die Privatschule handelt privatautonom und kann jeden Vertrag abschließen.",
      "Nein, der Vertrag ist rechtsunwirksam, wenn der Schüler die schulrechtlichen Voraussetzungen nicht erfüllt.",
      "Ja, der Vertrag ist gültig, aber von der Schulbehörde anfechtbar.",
      "Ja, wenn der Eigentümer zustimmt, ist der Vertrag gültig."
    ],
    correct: [1],
    explanation: "Das Gesetz stellt klar: Wenn ein Aufnahmsbewerber trotz Nichterfüllung der schulrechtlichen Voraussetzungen aufgenommen wird, ist der Aufnahmevertrag rechtsunwirksam."
  },
  {
    id: 28,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein aufgenommener Schüler an deiner Privatschule (mit Öffentlichkeitsrecht) verlangt einen Bescheid über die Aufnahme „für seine Unterlagen”. Was ist deine Antwort?",
    options: [
      "Du stellst ihm einen Bescheid aus, weil der Schulleiter hoheitlich handelt.",
      "Die Aufnahme erfolgte durch Vertrag, nicht durch Bescheid – du bietest ihm eine schriftliche Vertragsbestätigung an.",
      "Die Bildungsdirektion stellt Bescheide für Privatschulen aus.",
      "Bescheide gibt es generell nur an öffentlichen Schulen."
    ],
    correct: [1],
    explanation: "An Privatschulen ist der Aufnahmevertrag die Rechtsgrundlage, nicht ein Bescheid. Du kannst den Vertrag bestätigen, aber keinen Bescheid ausstellen."
  },

  // A5 — Fristen (Abs. 1)
  {
    id: 29,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du legst als Direktor die Fristen für das Aufnahmsverfahren fest. Im Gesetz heißt es, das Verfahren soll „zu Beginn der Hauptferien” beendet sein. Welche Ausnahmen sind vom Gesetz ausdrücklich genannt?",
    options: [
      "Keine, der Zeitpunkt ist absolut verbindlich.",
      "Zwingende Gründe, wie die Ablegung von Prüfungen.",
      "Personalmangel im Schulsekretariat.",
      "Eine überdurchschnittlich hohe Zahl von Anmeldungen."
    ],
    correct: [1],
    explanation: "Das Gesetz nennt ausdrücklich zwingende Gründe – wie etwa die Ablegung von Prüfungen – als Ausnahme, die eine Verzögerung des Verfahrensabschlusses rechtfertigen können."
  },
  {
    id: 30,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "An deiner Schule finden die Aufnahmsprüfungen erst in der ersten Woche der Hauptferien statt. Was bedeutet das für den Verfahrensabschluss?",
    options: [
      "Das Verfahren muss trotzdem zu Ferienbeginn abgeschlossen sein – die Prüfungen sind rechtzeitig anzusetzen.",
      "Die Prüfungen sind ein zwingender Grund und erlauben eine Verzögerung über den Ferienbeginn hinaus.",
      "Du musst vor Ferienbeginn bei der Bildungsdirektion eine Fristverlängerung beantragen.",
      "Die Prüfungen müssen zwingend vorgezogen werden."
    ],
    correct: [1],
    explanation: "Weil Prüfungen als zwingender Grund gelten, darf der Verfahrensabschluss über den Ferienbeginn hinaus verzögert werden. Eine gesonderte Genehmigung ist nicht erforderlich."
  },

  // ===================================================================
  //  §5 — Batch B: Sprengel-Schulen (Abs. 1)
  // ===================================================================

  // B1 — Sprengelprinzip & Anspruch
  {
    id: 31,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du bist Direktor einer Schule mit Schulsprengel. Ein Vater aus einem Nachbarort möchte sein Kind bei dir anmelden, weil er dein Schulprofil besser findet, obwohl es eine Schule in seinem Sprengel gibt. Bei dir sind noch Plätze frei. Was gilt?",
    options: [
      "Ja, bei freien Plätzen darf der Schüler aufgenommen werden – Kinder aus dem Sprengel haben aber Vorrang.",
      "Nein, der Schüler hat keinen Anspruch auf Aufnahme außerhalb seines Sprengels. Du kannst ihn freiwillig aufnehmen, wenn Plätze frei sind.",
      "Nein, Schulsprengel sind absolut – du darfst keine Kinder von außerhalb aufnehmen.",
      "Die Gemeinde entscheidet über Ausnahmen vom Sprengel."
    ],
    correct: [1],
    explanation: "Ein Schüler außerhalb des Sprengels hat keinen Rechtsanspruch auf Aufnahme. Der Schulleiter kann ihn bei freien Plätzen aber aufnehmen – das Gesetz verbietet es nicht."
  },
  {
    id: 32,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Eine Mutter aus deinem Sprengel verlangt, dass du ihr Kind aufnehmen musst – „weil wir ja im Sprengel wohnen”. Wie ist die Rechtslage?",
    options: [
      "Die Mutter hat recht: Bei Sprengelschulen besteht grundsätzlich ein Anspruch auf Aufnahme für Kinder aus dem Sprengel.",
      "Die Mutter irrt: Der Schulleiter kann jedes Kind ablehnen, wenn er Zweifel an der Eignung hat.",
      "Der Anspruch besteht nur, wenn das Kind in der Volksschule war.",
      "Über den Anspruch entscheidet der SGA von Fall zu Fall."
    ],
    correct: [0],
    explanation: "Bei Schulen mit Schulsprengel haben Kinder aus dem Sprengel grundsätzlich einen Anspruch auf Aufnahme. Der Sprengel begründet ein Recht, nicht nur eine Möglichkeit."
  },
  {
    id: 33,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "In deiner Sprengel-Schule gibt es mehr Anmeldungen aus dem Sprengel als Plätze. Was tust du als Direktor?",
    options: [
      "Du reihst die Kinder nach dem Notendurchschnitt der Volksschule.",
      "Du reihst nach dem Prinzip „first come, first served\”.",
      "Du reihst nach Alter – ältere Kinder haben Vorrang.",
      "Bei einer Sprengelschule müssen grundsätzlich alle Kinder aus dem Sprengel aufgenommen werden. Bei Überbelag ist die Schulbehörde zu informieren."
    ],
    correct: [3],
    explanation: "Anders als bei Schulen ohne Sprengel darf der Schulleiter bei einer Sprengelschule nicht selbstständig reihen. Bei Überbelag ist die Schulbehörde einzuschalten, weil der Anspruch der Sprengelkinder besteht."
  },
  {
    id: 34,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Nachdem du alle Kinder aus deinem Sprengel aufgenommen hast, sind noch drei Plätze frei. Darfst du nun Kinder aus benachbarten Sprengeln aufnehmen?",
    options: [
      "Ja, freie Plätze dürfen mit Kindern aus anderen Sprengeln besetzt werden.",
      "Nein, die Plätze bleiben für eventuelle Nachzügler aus dem eigenen Sprengel reserviert.",
      "Ja, aber nur wenn die Gemeinde zustimmt.",
      "Die Bildungsdirektion weist die freien Plätze zu."
    ],
    correct: [0],
    explanation: "Sobald alle Kinder aus dem eigenen Sprengel versorgt sind, dürfen freie Plätze auch mit Kindern aus anderen Sprengeln besetzt werden. Es gibt keine Reserverpflicht."
  },

  // B2 — Schulen OHNE Sprengel (Reihungspflicht)
  {
    id: 35,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Deine AHS hat keinen Sprengel – ihr habt weit mehr Anmeldungen als Plätze. Ein Vater verlangt zu wissen, nach welchen Kriterien gereiht wird. Was ist deine Antwort?",
    options: [
      "„Die Kriterien sind interne Angelegenheit der Schule, dazu geben wir keine Auskunft.”",
      "„Die Reihung erfolgt nach den in der Verordnung festgelegten Kriterien: bisherige Leistungen, Wohnortnähe und allfälliger Geschwisterbesuch.”",
      "„Wir entscheiden nach dem Windhundprinzip – wer zuerst angemeldet hat, bekommt den Platz.”",
      "„Der SGA lost die Plätze unter allen Bewerbern aus.”"
    ],
    correct: [1],
    explanation: "Für Schulen ohne Sprengel schreibt das Gesetz verbindliche Reihungskriterien vor, die für alle Bewerber gleich gelten müssen: bisherige Leistungen, Wohnortnähe und Geschwisterbesuch."
  },
  {
    id: 36,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Deine Schule (ohne Sprengel) verwendet ein Punktesystem: 50% Noten, 30% Wohnortnähe, 20% Geschwisterbonus. Ein Vater beschwert sich, dass die Noten doppelt so viel zählen wie die Wohnortnähe. Ist das zulässig?",
    options: [
      "Nein, weil alle drei Kriterien gleich stark gewichtet werden müssen.",
      "Ja, das Gesetz schreibt nur vor, dass diese Kriterien zu berücksichtigen sind, nicht in welcher Gewichtung.",
      "Nein, die Wohnortnähe muss immer Vorrang haben.",
      "Ja, wenn der SGA der Gewichtung zugestimmt hat."
    ],
    correct: [1],
    explanation: "Das Gesetz gibt die Kriterien vor, aber nicht deren Gewichtung. Der Verordnungsgeber (bzw. der Schulleiter im Rahmen der schulautonomen Kriterien) darf die Gewichtung festlegen."
  },
  {
    id: 37,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du willst als Direktor einer Schule ohne Sprengel schulautonome Reihungskriterien einführen. Ein Elternvertreter droht mit Anfechtung – wer ermächtigt dich überhaupt dazu?",
    options: [
      "Der SGA beschließt die schulautonomen Reihungskriterien.",
      "Die Verordnung des zuständigen Bundesministers ermächtigt den Schulleiter dazu.",
      "Der Schulerhalter (Gemeinde oder Land) muss die Kriterien genehmigen.",
      "Die Bildungsdirektion erlässt die Kriterien per Bescheid."
    ],
    correct: [1],
    explanation: "Das Gesetz selbst sieht vor, dass in der Verordnung der Schulleiter ermächtigt wird, nähere Bestimmungen über die Reihung festzulegen. Die Ermächtigung kommt also vom Verordnungsgeber."
  },
  {
    id: 38,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Deine Schule hat einen Musikschwerpunkt. Du willst bei der Reihung berücksichtigen, ob ein Kind ein Instrument spielt. Ist das zulässig?",
    options: [
      "Nein, nur die drei gesetzlichen Pflichtkriterien (Leistungen, Wohnortnähe, Geschwister) sind zulässig.",
      "Ja, als schulautonomes Reihungskriterium, wenn die Verordnung dich dazu ermächtigt und es der schulautonomen Profilbildung dient.",
      "Ja, ohne jede Einschränkung – der Schulleiter kann frei entscheiden.",
      "Nein, nur der Bundesminister darf zusätzliche Kriterien festlegen."
    ],
    correct: [1],
    explanation: "Schulautonome Reihungskriterien sind zulässig, soweit die Verordnung den Schulleiter dazu ermächtigt. Sie müssen im Zusammenhang mit der schulautonomen Profilbildung stehen."
  },

  // B3 — Praktische Fallstricke
  {
    id: 39,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Kind wohnt direkt an der Grenze zwischen zwei Schulsprengeln – beide Schulen sind gleich weit entfernt. Ein Nachbar meint, die Eltern könnten wählen. Was stimmt?",
    options: [
      "Der Nachbar hat recht – das Kind kann zwischen beiden Schulen wählen.",
      "Die Schule, in deren Sprengel die Wohnadresse fällt, muss aufnehmen – die Sprengelgrenze ist eindeutig festgelegt.",
      "Die Gemeinde entscheidet, welche Schule zuständig ist.",
      "Beide Schulen müssen aufnehmen, das Kind kann wählen."
    ],
    correct: [1],
    explanation: "Jeder Schüler fällt in genau einen Schulsprengel – die Grenzen sind behördlich festgelegt. Auch wenn zwei Schulen nahe liegen, ist die Zuordnung zur Wohnadresse eindeutig."
  },
  {
    id: 40,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Eine Familie zieht während der Sommerferien aus deinem Sprengel weg, nachdem ihr Kind bereits aufgenommen wurde. Ändert der Wegzug etwas an der Aufnahme?",
    options: [
      "Ja, die Aufnahme muss widerrufen werden, weil der Schüler nicht mehr im Sprengel wohnt.",
      "Nein, die einmal ausgesprochene Aufnahme bleibt gültig.",
      "Ja, du musst das Aufnahmsverfahren neu durchführen.",
      "Der Schüler muss sich an der neuen Sprengelschule anmelden."
    ],
    correct: [1],
    explanation: "Die Aufnahme für das folgende Schuljahr ist wirksam, sobald sie ausgesprochen wurde und die Voraussetzungen am letzten Unterrichtstag erfüllt sind. Ein späterer Wegzug ändert daran nichts."
  },

  // ===================================================================
  //  §5 — Batch C: Reihung bei Überbelag (Schulen ohne Sprengel)
  // ===================================================================

  // C1 — Die drei Pflichtkriterien (Abs. 1)
  {
    id: 41,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du hast 120 Anmeldungen für 80 Plätze an deiner Schule (ohne Sprengel). Welche Kriterien musst du bei der Reihung jedenfalls berücksichtigen?",
    options: [
      "Bisherige Leistungen, soziales Engagement und räumliche Nähe.",
      "Bisherige Leistungen, Wohnortnähe und allfälligen Geschwisterbesuch.",
      "Nur die bisherigen Leistungen in den Kernfächern.",
      "Den Zeitpunkt der Anmeldung, die Distanz zur Schule und den Familienstand."
    ],
    correct: [1],
    explanation: "Das Gesetz nennt drei Pflichtkriterien: die bisherigen Leistungen, die Wohnortnähe sowie einen allfälligen Besuch der Schule durch Geschwister."
  },
  {
    id: 42,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Für das Kriterium „bisherige Leistungen” – welche Unterlagen ziehst du als Direktor heran?",
    options: [
      "Ein Bewerbungsschreiben des Schülers.",
      "Die Schulnachricht oder das Jahreszeugnis der besuchten Schule.",
      "Ein Empfehlungsschreiben des bisherigen Direktors.",
      "Einen von den Eltern selbst erstellten Leistungsbericht."
    ],
    correct: [1],
    explanation: "Die bisherigen Leistungen werden anhand der offiziellen Schuldokumente (Schulnachricht, Jahreszeugnis) beurteilt – nicht durch Eigenauskünfte oder Empfehlungen."
  },
  {
    id: 43,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Vater beschwert sich: „Nur die Noten sollten zählen – Wohnortnähe und Geschwister sind nicht leistungsbezogen, also verfassungswidrig.” Hat er recht?",
    options: [
      "Ja, nur leistungsbezogene Kriterien sind verfassungsrechtlich zulässig.",
      "Nein, alle drei Kriterien sind vom Gesetzgeber ausdrücklich vorgegeben und verfassungsrechtlich gedeckt.",
      "Ja, aber erst ab der Sekundarstufe II.",
      "Der Verfassungsgerichtshof müsste das im Einzelfall prüfen."
    ],
    correct: [1],
    explanation: "Der Gesetzgeber hat diese Kriterien bewusst gewählt, um neben der Leistung auch soziale und organisatorische Aspekte (Schulweg, Geschwisterbetreuung) zu berücksichtigen."
  },
  {
    id: 44,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Wie definierst du als Direktor das Kriterium „Wohnortnähe” praktisch? Eine Familie wohnt 3 km entfernt, eine andere 15 km.",
    options: [
      "Wohnortnähe zählt nur, wenn der Hauptwohnsitz innerhalb eines 5-km-Radius liegt.",
      "Du kannst ein abgestuftes Punktesystem festlegen (z. B. 0–5 km = 10 Punkte, 5–10 km = 5 Punkte, über 10 km = 0 Punkte).",
      "Nur die kürzeste Distanz in Luftlinie zählt.",
      "Wohnortnähe wird nicht in Kilometern, sondern in Fahrzeit gemessen."
    ],
    correct: [1],
    explanation: "Das Gesetz überlässt die konkrete Ausgestaltung der Verordnung – ein abgestuftes Punktesystem ist eine sachgerechte und transparente Methode."
  },
  {
    id: 45,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Schüler hat einen Bruder, der bereits deine Schule besucht. Wie berücksichtigst du das bei der Reihung?",
    options: [
      "Gar nicht – jedes Kind wird für sich allein beurteilt.",
      "Der Schüler erhält einen Bonus – das Gesetz nennt ausdrücklich den allfälligen Besuch der Schule durch Geschwister.",
      "Der Schüler wird automatisch aufgenommen, wenn ein Geschwister bereits an der Schule ist.",
      "Nur wenn das Geschwister in derselben Schulstufe ist."
    ],
    correct: [1],
    explanation: "Der Geschwisterbesuch ist eines der drei Pflichtkriterien. Er wird im Rahmen der Reihung berücksichtigt, führt aber nicht automatisch zur Aufnahme."
  },
  {
    id: 46,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Eine Familie mit Zwillingen meldet beide Kinder an deiner Schule (ohne Sprengel) an. Nur eines bekommt genug Punkte für einen Platz. Was gilt?",
    options: [
      "Jeder Bewerber wird einzeln nach den gleichen Kriterien gereiht – der andere Zwilling hat Pech gehabt.",
      "Du kannst beide aufnehmen, wenn es organisatorisch möglich ist – der SGA kann Härtefälle berücksichtigen.",
      "Du musst beide ablehnen, wenn einer keinen Platz bekommt.",
      "Die Bildungsdirektion entscheidet über Härtefälle."
    ],
    correct: [0],
    explanation: "Die Reihung erfolgt für jeden Bewerber individuell nach denselben Kriterien. Es gibt keine gesetzliche Grundlage für eine „Zwillingsregel”, die eine automatische Mitaufnahme erlauben würde."
  },
  {
    id: 47,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Kind besucht bereits die Vorschulstufe an deiner Schule. Für die 1. Klasse muss es neu aufgenommen werden. Ist das Kriterium „Geschwister” hier anwendbar?",
    options: [
      "Nein, weil das Kind selbst Schüler ist, kein Geschwister.",
      "Ja, der bisherige Besuch der Schule ist ein Grund, das Kind bei der Reihung zu bevorzugen – das ergibt sich aus dem Zweck der Regelung.",
      "Nein, das Kriterium gilt ausdrücklich nur für Geschwister.",
      "Ja, aber nur wenn der SGA zustimmt."
    ],
    correct: [2],
    explanation: "Das Gesetz spricht von „Besuch der Schule durch Geschwister”. Der Schüler selbst ist kein Geschwister im Sinne der Regelung. Sein Vorjahresbesuch ist als Kriterium nicht vorgesehen."
  },
  {
    id: 48,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Bewerber hat lauter „Sehr gut” im Zeugnis. Ein anderer hat gemischte Noten, wohnt 500 m von der Schule entfernt und hat drei Geschwister an der Schule. Nach welchen Kriterien reihst du?",
    options: [
      "Ausschließlich nach den Noten – Leistung hat Vorrang.",
      "Nach allen drei Kriterien in einer transparenten, vorab festgelegten Gewichtung.",
      "Nach dem Gesamteindruck aus einem persönlichen Aufnahmegespräch.",
      "Nach dem Alter – ältere Schüler haben Vorrang."
    ],
    correct: [1],
    explanation: "Das Gesetz verlangt, alle drei Kriterien zu berücksichtigen, nicht nur eines. Die Gewichtung muss vorab festgelegt werden und für alle gleich sein."
  },

  // C2 — Gewichtung, Dokumentation, Transparenz
  {
    id: 49,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du erstellst ein Punktesystem für deine Schule (ohne Sprengel). Ein Lehrer fragt, ob du die Kriterien und die Gewichtung veröffentlichen musst. Was ist richtig?",
    options: [
      "Nein, die Kriterien sind interne Verwaltungsentscheidungen und nicht öffentlich.",
      "Ja, die Kriterien müssen für alle Bewerber in gleicher Weise gelten – Transparenz ist rechtlich geboten.",
      "Nein, aber die Bildungsdirektion bekommt eine Kopie.",
      "Nur auf ausdrückliche Nachfrage von Eltern."
    ],
    correct: [1],
    explanation: "Weil die Kriterien für alle Bewerber in gleicher Weise gelten müssen, setzt das voraus, dass sie bekannt sind. Eine Veröffentlichung (Homepage, Amtstafel) ist daher geboten."
  },
  {
    id: 50,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Vater verlangt Einsicht in das Reihungsergebnis seines Sohnes (Punktzahl und Rang). Darfst du ihm das verweigern?",
    options: [
      "Ja, der Datenschutz verbietet die Weitergabe von internen Reihungsdaten.",
      "Nein, er hat ein Recht auf Auskunft über die Bewertung seines Kindes.",
      "Du darfst nur die Punktzahl, nicht den Rang bekannt geben.",
      "Du darfst nur schriftlich per Bescheid Auskunft geben."
    ],
    correct: [1],
    explanation: "Als Partei des Verfahrens hat der Bewerber (bzw. dessen Eltern) ein Auskunftsrecht über die eigenen Daten – inklusive der erreichten Punktzahl und des Rangs."
  },
  {
    id: 51,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Zwei Bewerber haben exakt dieselbe Punktzahl. Es gibt nur noch einen Platz. Wie gehst du vor?",
    options: [
      "Du entscheidest nach freiem Ermessen als Schulleiter.",
      "Die Verordnung oder deine schulautonomen Kriterien müssen eine Regelung für Gleichstände enthalten (z. B. Losverfahren, Alter).",
      "Die Bildungsdirektion entscheidet.",
      "Du nimmst beide auf – die Klasse wird einfach größer."
    ],
    correct: [1],
    explanation: "Das Reihungssystem muss für den Fall von Gleichständen eine sachliche Lösung vorsehen. Ein willkürlicher Entscheid des Schulleiters wäre anfechtbar."
  },
  {
    id: 52,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du dokumentierst das gesamte Reihungsverfahren. Wie lange musst du die Unterlagen aufbewahren?",
    options: [
      "Bis zum Ende des laufenden Schuljahres.",
      "Zumindest bis allfällige Rechtsmittel erledigt sind, danach gemäß den archivrechtlichen Aufbewahrungsfristen.",
      "Gar nicht – nach der Entscheidung können die Unterlagen vernichtet werden.",
      "Mindestens zehn Jahre, da es sich um Verwaltungsakte handelt."
    ],
    correct: [1],
    explanation: "Solange eine Anfechtung möglich oder anhängig ist, müssen die Unterlagen verfügbar sein. Danach gelten die allgemeinen Aufbewahrungsfristen für Verwaltungsunterlagen."
  },
  {
    id: 53,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Bewerber reicht nach dem Anmeldeschluss das Zeugnis einer bestandenen Nachprüfung nach. Die bessere Note würde seinen Rang verbessern. Musst du es berücksichtigen?",
    options: [
      "Ja, sofern die Note vor deiner Entscheidung vorliegt und die Fristen es zulassen.",
      "Nein, der Anmeldeschluss ist absolut – verspätete Unterlagen werden nicht mehr angenommen.",
      "Ja, aber nur wenn der Bewerber ohne diesen Nachweis keinen Platz bekommen hätte.",
      "Nein, Nachprüfungen zählen grundsätzlich nicht als „bisherige Leistungen”."
    ],
    correct: [0],
    explanation: "Solange die Entscheidung noch nicht gefallen ist, sind aktualisierte Leistungsnachweise zu berücksichtigen. Der Anmeldeschluss betrifft die Anmeldung selbst, nicht Nachreichungen."
  },

  // C3 — Betrug, Missbrauch, Sonderfälle
  {
    id: 54,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du erfährst, dass eine Familie eine falsche Wohnadresse angegeben hat, um näher an deiner Schule (ohne Sprengel) zu erscheinen. Die falsche Adresse war für die Reihung entscheidend. Was tust du?",
    options: [
      "Nichts – die Adresse zum Zeitpunkt der Anmeldung ist maßgeblich, auch wenn sie falsch war.",
      "Du kannst die Aufnahme ablehnen oder widerrufen, weil die Entscheidung auf erschlichenen falschen Angaben beruht.",
      "Du zeigst die Familie bei der Staatsanwaltschaft an.",
      "Die Bildungsdirektion entscheidet über die Konsequenzen."
    ],
    correct: [1],
    explanation: "Eine auf erschlichenen falschen Angaben beruhende Entscheidung ist mangelhaft und kann vom Schulleiter aufgehoben oder abgeändert werden."
  },
  {
    id: 55,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Schüler hat ein gefälschtes Jahreszeugnis vorgelegt, um bessere Noten vorzutäuschen. Der Betrug fällt nach der Aufnahme auf. Was gilt?",
    options: [
      "Die Aufnahme bleibt gültig – die Schule hätte die Echtheit vor der Entscheidung prüfen müssen.",
      "Die Aufnahme ist anfechtbar, weil sie auf erschlichenen falschen Angaben beruht.",
      "Der Schüler wird erst ab dem nächsten Semester von der Schule ausgeschlossen.",
      "Nur die Bildungsdirektion kann die Aufnahme rückgängig machen."
    ],
    correct: [1],
    explanation: "Eine auf gefälschten Dokumenten beruhende Entscheidung ist von Anfang an mangelhaft. Der Schulleiter kann die Aufnahme wegen Erschleichung anfechten bzw. widerrufen."
  },
  {
    id: 56,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Vater beschwert sich telefonisch, dass ein anderer Schüler mit schlechteren Noten aufgenommen wurde, aber „der Direktor ihn kennt”. Was ist deine professionelle Reaktion als Direktor?",
    options: [
      "„Die Entscheidung ist gefallen, wir können nichts mehr machen.”",
      "„Bitte legen Sie Ihre Einwände schriftlich dar. Wir prüfen, ob ein Fehler im Verfahren unterlaufen ist.”",
      "„Das müssen Sie mit dem SGA besprechen.”",
      "„Eine Berufung ist nicht möglich, das Verfahren war korrekt.”"
    ],
    correct: [1],
    explanation: "Bei Vorwürfen ist eine sachliche Prüfung angezeigt. Der Vater sollte seine Einwände konkretisieren – dann kann das Verfahren nachvollzogen und dokumentiert werden."
  },
  {
    id: 57,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Mehrere Kinder von Lehrern deiner Schule bewerben sich. Darfst du sie bei der Reihung bevorzugen?",
    options: [
      "Ja, als „Betriebsangehörige” analog zur Privatwirtschaft.",
      "Nein, alle Bewerber müssen nach den gleichen sachlichen Kriterien gereiht werden – eine Bevorzugung wäre sachlich nicht gerechtfertigt.",
      "Ja, wenn der SGA der Bevorzugung zustimmt.",
      "Ja, aber nur wenn die Kinder auch im Sprengel wohnen."
    ],
    correct: [1],
    explanation: "Das Gesetz verlangt eine Reihung nach sachlichen Kriterien. Der Beruf der Eltern ist kein zulässiges Kriterium – eine Bevorzugung von Lehrerkindern wäre rechtswidrig."
  },

  // ===================================================================
  //  §5 — Batch D: Schulautonome Reihungskriterien (Abs. 1)
  // ===================================================================

  // D1 — Was ist zulässig?
  {
    id: 58,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Deine Schule hat einen Sprachenschwerpunkt. Du willst ein verpflichtendes Sprachvorsprechen als zusätzliches Reihungskriterium einführen. Ist das zulässig?",
    options: [
      "Nein, weil schulautonome Reihungskriterien nicht die Eignung prüfen dürfen.",
      "Ja, wenn die Verordnung dich dazu ermächtigt und es der schulautonomen Profilbildung dient.",
      "Ja, ohne jede Einschränkung – der Schulleiter kann frei entscheiden.",
      "Nein, nur der Bundesminister darf Eignungstests vorschreiben."
    ],
    correct: [1],
    explanation: "Schulautonome Reihungskriterien sind im Rahmen der Verordnungsermächtigung zulässig und müssen der schulautonomen Profilbildung dienen."
  },
  {
    id: 59,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Was ist die rechtliche Grundlage für schulautonome Reihungskriterien?",
    options: [
      "Ein Beschluss des SGA.",
      "Die Ermächtigung in der Verordnung des zuständigen Bundesministers, die den Schulleiter zur Festlegung ermächtigt.",
      "Ein Gemeinderatsbeschluss.",
      "Eine Weisung der Bildungsdirektion."
    ],
    correct: [1],
    explanation: "Das Gesetz selbst sieht vor, dass der Schulleiter in der Verordnung ermächtigt wird, nähere Reihungsbestimmungen festzulegen. Die Rechtsgrundlage ist also die Verordnung."
  },
  {
    id: 60,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du möchtest das gesetzliche Kriterium „Geschwister” in deinem Punktesystem doppelt so stark gewichten wie „Wohnortnähe”. Ist das als schulautonome Regelung zulässig?",
    options: [
      "Ja, du darfst die Gewichtung innerhalb der gesetzlichen Kriterien selbst festlegen.",
      "Nein, du darfst die gesetzlichen Kriterien nicht verzerren – sie müssen angemessen und sachgerecht gewichtet sein.",
      "Ja, aber nur mit Zustimmung des SGA.",
      "Ja, aber nur für Schulen mit Sprengel."
    ],
    correct: [1],
    explanation: "Schulautonome Kriterien dürfen die gesetzlichen Vorgaben ergänzen, aber nicht unterlaufen. Eine extreme Schieflage in der Gewichtung könnte als unsachlich angefochten werden."
  },
  {
    id: 61,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Darfst du als schulautonomes Kriterium festlegen, dass Bewerber einen Notendurchschnitt von mindestens 2,0 haben müssen?",
    options: [
      "Ja, als Mindestvoraussetzung im Rahmen der Profilbildung und des Leistungsanspruchs.",
      "Nein, das wäre eine absolute Ausschlusshürde – du darfst Noten im Rahmen der Reihung gewichten, aber nicht als starres Ausschlusskriterium verwenden.",
      "Ja, wenn die Schule einen ausgewiesenen Leistungsschwerpunkt hat.",
      "Ja, aber nur für die 1. Klasse."
    ],
    correct: [1],
    explanation: "Würde man eine Mindestnote als absolute Hürde einführen, wäre das keine „Reihung” mehr, sondern eine Vorauswahl. Das Gesetz will eine Reihung aller Bewerber."
  },
  {
    id: 62,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Deine Schule hat eine Kooperation mit dem örtlichen Musikverein. Darfst du Kinder, die im Musikverein aktiv sind, bei der Reihung bevorzugen?",
    options: [
      "Ja, weil Schulkooperationen im Gesetz ausdrücklich als mögliches schulautonomes Kriterium genannt sind.",
      "Nein, das wäre eine unzulässige Bevorzugung von Privatvereinen.",
      "Nur wenn der Musikverein ein eigener Verein mit Rechtspersönlichkeit ist.",
      "Ja, aber nur mit Zustimmung aller Eltern."
    ],
    correct: [0],
    explanation: "Das Gesetz nennt „bestehende Schulkooperationen” ausdrücklich als Aspekt, der bei schulautonomen Profilbildungen berücksichtigt werden kann."
  },
  {
    id: 63,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Bewerber hat ein hervorragendes Zeugnis, aber kein Interesse an deinem Sport-Schwerpunkt. Ein anderer hat durchschnittliche Noten, ist aber Leistungssportler. Darfst du den Sportler bevorzugen?",
    options: [
      "Ja, die Passung zum Schulprofil ist ein sachlich gerechtfertigtes schulautonomes Kriterium.",
      "Nein, nur die drei gesetzlichen Pflichtkriterien sind zulässig.",
      "Ja, aber nur wenn der Sportverein eine Kooperationsvereinbarung hat.",
      "Nein, weil die Noten immer Vorrang vor Profilkriterien haben."
    ],
    correct: [0],
    explanation: "Die Profilpassung ist ein sachlich gerechtfertigtes schulautonomes Kriterium. Die gesetzlichen Pflichtkriterien müssen aber weiterhin angemessen berücksichtigt werden."
  },

  // D2 — Festlegungsprozess
  {
    id: 64,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Lehrer fordert, dass das gesamte Kollegium über die schulautonomen Reihungskriterien abstimmen soll. Musst du das als Direktor zulassen?",
    options: [
      "Ja, weil es eine pädagogische Angelegenheit ist, die dem Kollegium zusteht.",
      "Nein, die Festlegung obliegt dir als Schulleiter im Rahmen der Verordnungsermächtigung. Du kannst das Kollegium aber anhören.",
      "Ja, mit Zweidrittelmehrheit des Lehrkörpers.",
      "Nein, der SGA ist das einzige mitbestimmungsberechtigte Gremium."
    ],
    correct: [1],
    explanation: "Die Verordnung ermächtigt den Schulleiter zur Festlegung, nicht das Kollegium. Eine Anhörung ist aber sinnvoll, um Akzeptanz zu schaffen."
  },
  {
    id: 65,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Müssen schulautonome Reihungskriterien der Bildungsdirektion vorgelegt werden?",
    options: [
      "Ja, zur Genehmigung.",
      "Nein, aber sie müssen veröffentlicht werden (z. B. auf der Schulhomepage), sodass sie für alle Bewerber zugänglich sind.",
      "Ja, aber nur zur Kenntnisnahme.",
      "Nein, sie sind interne Schulangelegenheiten und unterliegen keiner Publikationspflicht."
    ],
    correct: [1],
    explanation: "Weil die Kriterien für alle Bewerber in gleicher Weise gelten müssen, müssen sie auch bekannt sein – eine Veröffentlichung ist daher zwingend. Einer Genehmigung durch die Bildungsdirektion bedarf es aber nicht."
  },
  {
    id: 66,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du übernimmst als neuer Direktor eine Schule. Dein Vorgänger hat vor acht Jahren schulautonome Reihungskriterien festgelegt, seither nie aktualisiert. Was solltest du tun?",
    options: [
      "Nichts – einmal festgelegte Kriterien gelten unbefristet.",
      "Du solltest sie auf Aktualität und sachliche Rechtfertigung prüfen – veraltete Kriterien könnten anfechtbar sein.",
      "Der SGA muss eine Überprüfung verlangen, bevor du handeln darfst.",
      "Die Bildungsdirektion prüft die Kriterien automatisch alle fünf Jahre."
    ],
    correct: [1],
    explanation: "Schulautonome Kriterien müssen sachlich gerechtfertigt sein. Wenn sich die Umstände ändern (z. B. Kooperationen enden, Profile wechseln), können veraltete Kriterien ihre sachliche Rechtfertigung verlieren."
  },
  {
    id: 67,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du willst die schulautonomen Kriterien für das kommende Schuljahr ändern. Eine Mutter, deren Kind sich bereits beworben hat, verlangt die Anwendung der alten Kriterien. Welche Kriterien sind maßgeblich?",
    options: [
      "Die Kriterien zum Zeitpunkt der Anmeldung.",
      "Die Kriterien zum Zeitpunkt der Entscheidung – sofern die Änderung rechtzeitig veröffentlicht wurde.",
      "Der Bewerber kann wählen, welche Kriterien angewandt werden sollen.",
      "Der SGA entscheidet von Fall zu Fall."
    ],
    correct: [1],
    explanation: "Maßgeblich sind die Kriterien, die zum Zeitpunkt der Entscheidung gelten, sofern sie rechtzeitig veröffentlicht wurden. Bewerber haben keinen Anspruch auf „Altkriterien”."
  },

  // D3 — Anfechtungen & Fehler
  {
    id: 68,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Vater ficht die Aufnahmeentscheidung an, weil die schulautonomen Kriterien seiner Ansicht nach sachlich nicht gerechtfertigt sind. Wer prüft das?",
    options: [
      "Der Schulleiter selbst.",
      "Die zuständige Schulbehörde (Bildungsdirektion) im Rahmen des Rechtsmittelverfahrens.",
      "Der SGA.",
      "Das Bezirksgericht."
    ],
    correct: [1],
    explanation: "Gegen die Entscheidung des Schulleiters ist die Berufung an die Bildungsdirektion zulässig, die sowohl die Kriterien als auch deren Anwendung prüft."
  },
  {
    id: 69,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du hast schulautonome Kriterien erlassen, aber vergessen, sie rechtzeitig zu veröffentlichen. Ein Bewerber erfährt erst nach der Entscheidung davon. Ist die Entscheidung anfechtbar?",
    options: [
      "Nein, die Kriterien gelten auch ohne Veröffentlichung.",
      "Ja, weil die Kriterien transparent und für alle Bewerber zugänglich sein müssen – fehlende Veröffentlichung ist ein Verfahrensmangel.",
      "Nein, wenn die Kriterien im SGA besprochen wurden.",
      "Eine Anfechtung ist nur innerhalb von zwei Wochen ab Bekanntgabe möglich."
    ],
    correct: [1],
    explanation: "Mangels Veröffentlichung konnten die Bewerber nicht wissen, welche Kriterien gelten. Das ist ein schwerwiegender Verfahrensmangel, der zur Anfechtbarkeit führt."
  },
  {
    id: 70,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Elternteil argumentiert, deine schulautonomen Kriterien seien „willkürlich” und würden bestimmte Bevölkerungsgruppen benachteiligen. Wie gehst du vor?",
    options: [
      "Du ignorierst die Beschwerde als unbegründet.",
      "Du prüfst die Kriterien auf sachliche Rechtfertigung und Gleichbehandlung – notfalls holst du rechtliche Beratung ein.",
      "Du änderst die Kriterien sofort, um Konflikte zu vermeiden.",
      "Du lässt den SGA entscheiden, ob die Kriterien geändert werden."
    ],
    correct: [1],
    explanation: "Der Vorwurf der Willkür ist ernst zu nehmen. Eine sachliche Prüfung der Kriterien ist angezeigt. Bei begründeten Zweifeln sollte rechtliche Beratung eingeholt werden."
  },
  {
    id: 71,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein abgelehnter Bewerber will nicht nur die Entscheidung, sondern die schulautonomen Kriterien selbst anfechten. Ist das möglich?",
    options: [
      "Nein, nur die konkrete Entscheidung ist anfechtbar.",
      "Ja, im Rahmen der Anfechtung der Entscheidung können die Kriterien auf ihre Rechtmäßigkeit geprüft werden.",
      "Nein, Kriterien als solche sind generell nicht anfechtbar.",
      "Ja, aber nur mit einer Individualbeschwerde beim Verfassungsgerichtshof."
    ],
    correct: [1],
    explanation: "Die Kriterien selbst sind keine hoheitlichen Entscheidungen, aber sie können im Zuge der Anfechtung der konkreten Entscheidung auf ihre Rechtmäßigkeit geprüft werden."
  },

  // ===================================================================
  //  §5 — Batch E: Verfahrensorganisation + Bekanntgabe (Abs. 1, 2)
  // ===================================================================

  // E1 — Fristen und Timing
  {
    id: 72,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du setzt als Direktor die Anmeldefristen fest. Ein Elternvertreter verlangt eine Frist von mindestens vier Wochen. Besteht darauf ein gesetzlicher Anspruch?",
    options: [
      "Ja, die Anmeldefrist muss mindestens vier Wochen betragen.",
      "Nein, die Fristen werden in der Verordnung festgelegt, du setzt sie innerhalb dieses Rahmens.",
      "Das Gesetz schreibt genau zwei Wochen vor.",
      "Die Bildungsdirektion setzt die Fristen für alle Schulen einheitlich fest."
    ],
    correct: [1],
    explanation: "Die Verordnung legt den Rahmen für die Anmeldefristen fest. Als Schulleiter setzt du die konkreten Fristen innerhalb dieses Rahmens – das Gesetz selbst schreibt keine Mindestfrist vor."
  },
  {
    id: 73,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Eine Mutter verpasst den Anmeldeschluss um einen Tag, weil ihr Kind krank war. Sie verlangt eine Nachanmeldung. Musst du sie zulassen?",
    options: [
      "Ja, bei Krankheit ist die Nachanmeldung zwingend zuzulassen.",
      "Nein, der Anmeldeschluss gilt für alle gleichermaßen. Du kannst sie aber im Ermessensweg nachmelden, solange das Verfahren noch nicht abgeschlossen ist.",
      "Ja, die Frist muss in jedem Fall verlängert werden.",
      "Nein, aber die Bildungsdirektion kann die Verspätung nachsehen."
    ],
    correct: [1],
    explanation: "Der Anmeldeschluss ist eine Ordnungsvorschrift. Solange das Verfahren noch läuft und keine Entscheidung gefallen ist, kannst du verspätete Anmeldungen im Ermessensweg annehmen."
  },
  {
    id: 74,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Das Gesetz sagt: Das Aufnahmsverfahren soll „zu Beginn der Hauptferien” beendet sein. Was heißt das für deine Terminplanung als Direktor?",
    options: [
      "Am ersten Ferientag müssen alle Entscheidungen persönlich zugestellt sein.",
      "Bis zum in der Verordnung festgelegten Beginn der Hauptferien soll das Verfahren abgeschlossen sein, sofern keine zwingenden Gründe entgegenstehen.",
      "In der ersten Ferienwoche müssen alle Entscheidungen bekannt gegeben sein.",
      "Das Verfahren muss vor den Sommerferien starten, der Abschluss ist flexibel."
    ],
    correct: [1],
    explanation: "Das Gesetz formuliert als Ziel: Das Verfahren soll zu Beginn der Hauptferien beendet sein. Die Verordnung legt den konkreten Zeitpunkt fest. Zwingende Gründe wie Prüfungen erlauben Abweichungen."
  },
  {
    id: 75,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du wirst drei Wochen vor Ferienbeginn schwer krank. Auch deine Stellvertretung ist im Krankenstand. Das Aufnahmsverfahren ist noch nicht abgeschlossen. Was passiert?",
    options: [
      "Das Verfahren muss ausgesetzt werden, bis jemand zurück ist.",
      "Die Bildungsdirektion muss einen provisorischen Schulleiter bestellen oder das Verfahren übernehmen.",
      "Die Entscheidungen werden automatisch auf September vertagt.",
      "Der SGA entscheidet in Vertretung über die Aufnahmen."
    ],
    correct: [1],
    explanation: "Wenn weder der Schulleiter noch die Stellvertretung handlungsfähig sind, muss die Schulbehörde für eine Vertretung sorgen. Das Verfahren darf nicht einfach blockiert werden."
  },
  {
    id: 76,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein aufgenommener Schüler sagt im August ab, weil er doch auf eine andere Schule geht. Du hast einen Nachrücker auf der Warteliste. Kann der noch aufgenommen werden?",
    options: [
      "Nein, die ursprüngliche Entscheidung ist rechtskräftig – die Plätze bleiben leer.",
      "Ja, wenn ein Platz frei wird, kannst du neu entscheiden und den Nachrücker aufnehmen.",
      "Nein, der Nachrücker muss sich im nächsten Verfahren neu bewerben.",
      "Ja, aber nur mit Genehmigung der Bildungsdirektion."
    ],
    correct: [1],
    explanation: "Wenn ein aufgenommener Schüler vor Schulbeginn abspringt, wird der Platz frei. Du kannst dann den nächsten Bewerber der Reihungsliste nachrücken lassen."
  },
  {
    id: 77,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du hast einen Schüler im Juni als außerordentlich aufgenommen. Im August legt er eine bestandene Aufnahmsprüfung vor, die den ordentlichen Status ermöglicht. Was machst du?",
    options: [
      "Du änderst den Status, weil sich der Sachverhalt geändert hat und die Aufnahme noch nicht vollzogen wurde.",
      "Der Status bleibt wie zum Zeitpunkt der Entscheidung – die neue Prüfung ändert daran nichts.",
      "Du musst ein völlig neues Verfahren einleiten.",
      "Der Schüler muss sich für das nächste Schuljahr als ordentlicher neu bewerben."
    ],
    correct: [0],
    explanation: "Bis zum Vollzug der Aufnahme (Schulbeginn) ist eine Änderung des Status aufgrund neuer Umstände möglich, wenn diese die Voraussetzungen betreffen."
  },

  // E2 — Bekanntgabe der Entscheidung (Abs. 2)
  {
    id: 78,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du hast alle Aufnahmeentscheidungen getroffen. In welcher Form gibst du sie bekannt?",
    options: [
      "Durch persönliche Verständigung jedes einzelnen Bewerbers.",
      "Durch Anschlag an der Amtstafel der Schule oder in anderer geeigneter Weise.",
      "Durch Veröffentlichung im Amtsblatt der Gemeinde.",
      "Durch Aushang im Klassenzimmer der künftigen Klasse."
    ],
    correct: [1],
    explanation: "Das Gesetz nennt die Amtstafel als primäres Bekanntgabemittel, lässt aber auch „andere geeignete Weise” zu. Eine persönliche Zustellung an jeden Bewerber ist nicht vorgeschrieben."
  },
  {
    id: 79,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Kann die Bekanntgabe der Aufnahmeentscheidungen auch per E-Mail über ein Schulportal erfolgen?",
    options: [
      "Ja, „anderer geeigneter Weise” umfasst auch E-Mail oder ein digitales Schulportal.",
      "Nein, nur die Amtstafel ist gesetzlich als Bekanntgabemittel vorgesehen.",
      "Ja, aber nur mit ausdrücklicher Zustimmung der Eltern.",
      "Nein, E-Mail erfüllt nicht die gesetzlichen Anforderungen an eine Bekanntgabe."
    ],
    correct: [0],
    explanation: "Der Gesetzeswortlaut „oder in anderer geeigneter Weise” ist bewusst flexibel gehalten. Ein digitales Portal oder E-Mail kann eine geeignete Weise sein, sofern alle Bewerber Zugang haben."
  },
  {
    id: 80,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du hast die Aufnahmeentscheidungen an der Amtstafel veröffentlicht. Ein Vater beschwert sich, dass sein Kind abgelehnt wurde und er das „aus dem Aushang erfahren musste, ohne Vorwarnung”. Was sagst du?",
    options: [
      "„Die Amtstafel ist das gesetzlich vorgesehene Bekanntgabemittel – das Verfahren ist damit ordnungsgemäß durchgeführt.”",
      "„Sie haben recht, ich hätte Sie vorher persönlich verständigen müssen.”",
      "„Das Verfahren ist noch nicht abgeschlossen, bitte warten Sie auf einen schriftlichen Bescheid.”",
      "„Das war ein Fehler – in Zukunft verständigen wir alle Eltern vor dem Aushang persönlich.”"
    ],
    correct: [0],
    explanation: "Die Amtstafel ist das gesetzlich vorgesehene Bekanntgabeorgan. Eine Vorabverständigung ist nicht erforderlich. Der Vater wurde ordnungsgemäß informiert."
  },
  {
    id: 81,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "An der Amtstafel stehen die Namen aller aufgenommenen und aller abgelehnten Schüler. Eine Mutter droht mit einer Datenschutzbeschwerde. Ist die Veröffentlichung zulässig?",
    options: [
      "Nein, Namen sind personenbezogene Daten und dürfen nicht einfach ausgehängt werden.",
      "Ja, die Amtstafel-Veröffentlichung ist gesetzlich vorgesehen und datenschutzrechtlich gedeckt.",
      "Ja, aber nur mit vorheriger Einwilligung aller Betroffenen.",
      "Nein, die DSGVO verbietet die Veröffentlichung von Ablehnungen."
    ],
    correct: [1],
    explanation: "Die Bekanntgabe durch Anschlag an der Amtstafel ist eine gesetzlich ausdrücklich normierte Form der Verständigung. Als solche ist sie datenschutzrechtlich gerechtfertigt."
  },
  {
    id: 82,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du überlegst, die Ergebnisse nur noch über das Schulportal (geschlossener Bereich mit persönlichem Login) bekannt zu geben. Ist das anstelle der Amtstafel zulässig?",
    options: [
      "Nein, die Amtstafel ist zwingend vorgeschrieben – digital ist nur zusätzlich erlaubt.",
      "Ja, wenn das Schulportal für alle Bewerber gleichermaßen zugänglich ist, ist das eine „andere geeignete Weise”.",
      "Ja, aber zusätzlich zur Amtstafel.",
      "Nein, weil das Schulportal kein amtliches Verkündungsorgan ist."
    ],
    correct: [1],
    explanation: "Das Gesetz lässt „andere geeignete Weise” ausdrücklich zu. Ein Schulportal mit personalisiertem Login kann eine geeignete Alternative sein, wenn alle Bewerber Zugang haben."
  },
  {
    id: 83,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du hast die Entscheidungen an der Amtstafel angeschlagen, aber nach einer Woche entfernt, weil du den Platz brauchst. Ein Vater hat den Aushang nicht rechtzeitig gesehen und verlangt Fristverlängerung für die Berufung. Was gilt?",
    options: [
      "Die Bekanntgabe gilt mit dem Anschlag als erfolgt – die Berufungsfrist läuft ab diesem Zeitpunkt.",
      "Der Aushang muss für die gesamte Dauer der Berufungsfrist hängen bleiben.",
      "Du musst die Frist verlängern, weil der Aushang vor Fristablauf entfernt wurde.",
      "Du musst jedem Bewerber die Entscheidung noch einmal zustellen."
    ],
    correct: [0],
    explanation: "Die Bekanntgabe ist mit dem Anschlag wirksam erfolgt. Solange der Aushang für eine angemessene Zeit (mehrere Tage) sichtbar war, ist das ausreichend. Der Vater hätte sich rechtzeitig informieren müssen."
  },

  // ===================================================================
  //  §5 — Batch F: Ablehnung + Rechtsmittel (Abs. 2)
  // ===================================================================

  // F1 — Form und Inhalt der Ablehnung
  {
    id: 84,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du musst einen Bewerber ablehnen. Welche Form schreibt das Gesetz für die Ablehnung vor?",
    options: [
      "Mündlich im persönlichen Gespräch mit den Eltern.",
      "Schriftlich unter Angabe der Gründe.",
      "Per E-Mail, mündlich oder schriftlich – die Form ist nicht geregelt.",
      "Nur durch formellen Bescheid, der persönlich zugestellt werden muss."
    ],
    correct: [1],
    explanation: "Das Gesetz verlangt ausdrücklich eine schriftliche Mitteilung unter Angabe der Gründe. Eine mündliche Ablehnung allein genügt nicht."
  },
  {
    id: 85,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Was muss in der schriftlichen Ablehnung mindestens enthalten sein?",
    options: [
      "„Ihr Kind wurde nicht aufgenommen, weil die Plätze begrenzt sind.”",
      "Eine nachvollziehbare Begründung, die erkennen lässt, warum der Bewerber nicht zum Zug kam – etwa die erreichte Punktzahl im Verhältnis zum letzten aufgenommenen Bewerber.",
      "„Leider müssen wir Ihnen mitteilen, dass eine Aufnahme nicht möglich ist.”",
      "Ein Hinweis auf alternative Schulen in der Umgebung."
    ],
    correct: [1],
    explanation: "Die Begründung muss so konkret sein, dass der Bewerber die Entscheidung nachvollziehen und auf ihre Rechtmäßigkeit prüfen kann. Eine reine Floskel wie „Platzmangel” reicht nicht."
  },
  {
    id: 86,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du lehnst einen Schüler ab und schreibst als Begründung: „Es stehen nicht genügend Plätze zur Verfügung.” Ein Anwalt der Familie beanstandet die Begründung als zu wenig konkret. Hat er recht?",
    options: [
      "Nein, die Angabe von Platzmangel ist eine ausreichende Begründung.",
      "Ja, die Begründung muss so konkret sein, dass der Bewerber die Entscheidung überprüfen kann – etwa durch Mitteilung des Reihungsrangs.",
      "Nein, eine Begründung ist rechtlich gar nicht erforderlich.",
      "Ja, aber nur wenn die Schule keinen Sprengel hat."
    ],
    correct: [1],
    explanation: "„Platzmangel” allein ist zu vage. Der Bewerber muss erkennen können, warum andere Bewerber bevorzugt wurden. Konkrete Angaben zur Reihung (Punktzahl, Rang) sind erforderlich."
  },
  {
    id: 87,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du hast in der Begründung der Ablehnung aus Versehen die falsche Punktezahl eines anderen Schülers angegeben – Vertauschung der Akten. Der Fehler fällt dir nach der Zustellung auf. Was tust du?",
    options: [
      "Du berichtigst den Bescheid – offenkundige Schreib- oder Rechenfehler können korrigiert werden.",
      "Du musst einen völlig neuen Bescheid ausstellen und zustellen.",
      "Die Korrektur ist nur mit Zustimmung des Bewerbers möglich.",
      "Du legst der Bildungsdirektion den Fehler zur Entscheidung vor."
    ],
    correct: [0],
    explanation: "Nach dem AVG können offenkundige Schreib-, Rechen- oder ähnliche Versehen jederzeit berichtigt werden. Eine vollständige Neuentscheidung ist nicht nötig."
  },
  {
    id: 88,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein abgelehnter Bewerber verlangt Einsicht in die vollständige Reihungsliste aller Bewerber, um die Fairness zu prüfen. Darf er das?",
    options: [
      "Ja, das Prinzip der Transparenz gebietet volle Akteneinsicht.",
      "Nein, er hat nur Anspruch auf Auskunft über seine eigenen Daten. Die Daten anderer Bewerber sind durch das Datenschutzrecht geschützt.",
      "Ja, aber nur in anonymisierter Form mit unkenntlich gemachten Namen.",
      "Nein, die Reihungsliste ist ein internes Dokument und keinem Einsichtsrecht zugänglich."
    ],
    correct: [1],
    explanation: "Der Bewerber hat als Partei ein Recht auf Akteneinsicht in seine eigenen Daten. Die Daten der Mitbewerber sind personenbezogen und daher geschützt. Eine anonymisierte Einsicht kann aber gewährt werden."
  },
  {
    id: 89,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du lehnst einen Schüler ab und schickst die schriftliche Begründung ab. Am nächsten Tag erscheint der Vater wütend im Direktorat und verlangt eine sofortige mündliche Erläuterung. Musst du dich darauf einlassen?",
    options: [
      "Ja, du musst ihm die Gründe persönlich erläutern.",
      "Nein, die schriftliche Begründung ist ausreichend. Du kannst ein Gespräch anbieten, musst es aber nicht.",
      "Ja, aber du kannst ihn an den SGA verweisen.",
      "Nein, aber die Bildungsdirektion muss das Gespräch führen."
    ],
    correct: [1],
    explanation: "Die gesetzliche Pflicht ist mit der schriftlichen Begründung erfüllt. Ein persönliches Gespräch ist nicht vorgeschrieben, aber als Schulleiter aus pädagogischer Sicht oft sinnvoll."
  },

  // F2 — Rechtsmittel
  {
    id: 90,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Vater legt Berufung gegen deine ablehnende Entscheidung ein. An welche Stelle richtet sich die Berufung?",
    options: [
      "An den SGA der Schule.",
      "An die zuständige Bildungsdirektion.",
      "An den Bundesminister für Bildung.",
      "An das zuständige Bezirksgericht."
    ],
    correct: [1],
    explanation: "Gegen Bescheide des Schulleiters ist die Berufung an die Bildungsdirektion (als Schulbehörde) zulässig. Der SGA ist kein Rechtsmittelorgan."
  },
  {
    id: 91,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Die Berufungsfrist beträgt zwei Wochen ab Bekanntgabe. Der Vater bringt die Berufung am 15. Tag nach dem Anschlag an der Amtstafel ein. Was geschieht?",
    options: [
      "Die Berufung wird trotzdem behandelt, weil eine Überschreitung um einen Tag unerheblich ist.",
      "Die Berufung ist verspätet und wird zurückgewiesen – sofern keine Wiedereinsetzung in den vorigen Stand beantragt wird.",
      "Der Schulleiter kann die Frist nachträglich verlängern.",
      "Die Berufung wird automatisch an den Bundesminister weitergeleitet."
    ],
    correct: [1],
    explanation: "Die zweiwöchige Berufungsfrist ist gesetzlich festgelegt. Bei Versäumnis ist die Berufung zurückzuweisen, es sei denn, der Betroffene beantragt rechtzeitig eine Wiedereinsetzung in den vorigen Stand."
  },
  {
    id: 92,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein abgelehnter Bewerber legt Berufung ein. Du als Schulleiter hältst deine Entscheidung für richtig. Was passiert mit der Berufung?",
    options: [
      "Du weist die Berufung selbst ab – du bleibst bei deiner Entscheidung.",
      "Du legst die Berufung der Bildungsdirektion vor, die in zweiter Instanz entscheidet.",
      "Die Berufung gilt damit automatisch als abgewiesen.",
      "Der SGA entscheidet über die Berufung."
    ],
    correct: [1],
    explanation: "Der Schulleiter entscheidet nicht über Berufungen gegen seine eigenen Bescheide. Er legt die Berufung der zuständigen Schulbehörde (Bildungsdirektion) zur Entscheidung vor."
  },
  {
    id: 93,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Die Bildungsdirektion gibt der Berufung statt und ordnet an, dass der abgelehnte Schüler aufzunehmen ist. Die Klasse hätte dann 33 statt 30 Schüler. Was tust du?",
    options: [
      "Du widersprichst mit Verweis auf die maximal zulässige Klassengröße.",
      "Du setzt die Entscheidung der Bildungsdirektion um und nimmst den Schüler auf.",
      "Du legst Beschwerde beim Bundesverwaltungsgericht gegen die Entscheidung ein.",
      "Du weist den Schüler einer anderen Klasse zu, um die Klassengröße einzuhalten."
    ],
    correct: [1],
    explanation: "Die Entscheidung der Bildungsdirektion ist bindend. Als Schulleiter setzt du sie um. Organisatorische Probleme (Klassengröße) sind nachgeordnet zu lösen, etwa durch Teilung der Klasse."
  },
  {
    id: 94,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein abgelehnter Bewerber akzeptiert die Ablehnung nicht und droht mit einer Zivilklage. Kann er vor einem Zivilgericht gegen die Ablehnung klagen?",
    options: [
      "Ja, weil es um seine Ausbildung geht, ist der Zivilrechtsweg offen.",
      "Nein, die Ablehnung ist ein hoheitlicher Akt (Bescheid) – der Rechtsweg führt über die Verwaltungsgerichtsbarkeit.",
      "Ja, aber nur wenn die Schule eine Privatschule ist.",
      "Nein, gegen Aufnahmeentscheidungen gibt es überhaupt keinen Rechtsbehelf."
    ],
    correct: [1],
    explanation: "Die Aufnahmeentscheidung an öffentlichen Schulen ist ein Bescheid. Dagegen steht der verwaltungsgerichtliche Rechtsweg offen (Bildungsdirektion → Bundesverwaltungsgericht), nicht der Zivilrechtsweg."
  },
  {
    id: 95,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Als Direktor erfährst du, dass ein abgelehnter Bewerber das Gerücht verbreitet: „Der Direktor nimmt nur Kinder von Freunden auf.” Wie reagierst du professionell?",
    options: [
      "Du ignorierst es – Gerüchte gehören zum Berufsrisiko.",
      "Du dokumentierst das Verfahren, legst die Reihung transparent offen und bietest ein klärendes Gespräch an.",
      "Du zeigst den Bewerber wegen übler Nachrede an.",
      "Du bittest die Bildungsdirektion um eine öffentliche Stellungnahme."
    ],
    correct: [1],
    explanation: "Transparenz ist der beste Schutz gegen Vorwürfe der Willkür. Indem du das nachvollziehbare Verfahren offenlegst, kannst du die Vorwürfe sachlich entkräften."
  },

  // ===================================================================
  //  §5 — Batch G: Privatschulen vertiefen (Abs. 6)
  // ===================================================================

  {
    id: 96,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du bist Direktor einer Privatschule mit Öffentlichkeitsrecht. Ein Schüler erfüllt die schulrechtlichen Voraussetzungen nicht, aber dein Schulerhalter sagt: „Wir machen einfach einen Aufnahmevertrag – wir sind Privatrecht, das geht.” Kann der Vertrag rechtswirksam geschlossen werden?",
    options: [
      "Ja, der Schulerhalter kann im Rahmen der Privatautonomie jeden Vertrag abschließen.",
      "Nein, §5 Abs.6 stellt klar: Ein Aufnahmevertrag ist rechtsunwirksam, wenn die schulrechtlichen Voraussetzungen nicht erfüllt sind.",
      "Ja, aber nur wenn der Schüler volljährig ist und selbst zustimmt.",
      "Ja, aber die Bildungsdirektion kann den Vertrag später aufheben."
    ],
    correct: [1],
    explanation: "Das Gesetz ist hier eindeutig: Selbst wenn ein Vertrag geschlossen wird – ist er wegen Nichterfüllung der schulrechtlichen Voraussetzungen rechtsunwirksam, entfaltet er keine Rechtswirkungen."
  },
  {
    id: 97,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Schüler an deiner Privatschule mit Öffentlichkeitsrecht will nach dem zweiten Semester die Schule wechseln. Er beruft sich auf das SchUG. Hat er die gleichen Wechselrechte wie an einer öffentlichen Schule?",
    options: [
      "Ja, als Schule mit Öffentlichkeitsrecht gelten die SchUG-Bestimmungen, auch für den Schulwechsel.",
      "Nein, für Privatschulen gelten die §§3 bis 5 nicht – die Aufnahme und Beendigung richten sich nach dem privaten Vertrag.",
      "Ja, aber nur für ordentliche Schüler.",
      "Nein, der Wechsel muss vom Schulerhalter genehmigt werden."
    ],
    correct: [1],
    explanation: "Die §§3 bis 5 sind durch §5 Abs.6 für Privatschulen ausdrücklich ausgenommen. Der Schulwechsel richtet sich daher nach dem privatrechtlichen Vertrag, nicht nach den SchUG-Regeln."
  },
  {
    id: 98,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein aufgenommener Schüler verlässt deine Privatschule nach einem Monat ohne das Schulgeld zu bezahlen. Kannst du die ausstehenden Kosten einklagen?",
    options: [
      "Nein, Schulverträge sind nicht einklagbar.",
      "Ja, der Aufnahmevertrag ist ein Vertrag des bürgerlichen Rechts – offene Forderungen können zivilrechtlich eingeklagt werden.",
      "Nein, nur der Schulerhalter (Eigentümer) kann Schulgeldforderungen einklagen.",
      "Ja, aber nur wenn der Vertrag schriftlich abgeschlossen wurde."
    ],
    correct: [1],
    explanation: "Der Aufnahmevertrag ist ein privatrechtlicher Vertrag. Daraus entstehen zivilrechtliche Forderungen, die vor den ordentlichen Gerichten eingeklagt werden können."
  },
  {
    id: 99,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Was ist der wesentlichste Unterschied im Aufnahmeverfahren zwischen einer öffentlichen Schule und einer Privatschule mit Öffentlichkeitsrecht?",
    options: [
      "Privatschulen können Bewerber aus beliebigen Gründen ablehnen, ohne ein Reihungsverfahren durchführen zu müssen.",
      "Die Aufnahme erfolgt durch Vertrag, nicht durch Bescheid – und die Bestimmungen der Abs. 1 bis 5 gelten für Privatschulen nicht.",
      "Privatschulen müssen alle Bewerber aufnehmen, die bereit sind, das Schulgeld zu zahlen.",
      "Es gibt keinen wesentlichen Unterschied im Aufnahmeverfahren."
    ],
    correct: [1],
    explanation: "§5 Abs.6 nimmt Privatschulen von den Abs. 1 bis 5 aus. Das bedeutet: keine Verordnung des Ministers, keine Reihungskriterien, keine Amtstafel, kein Bescheid – sondern Vertrag."
  },
  {
    id: 100,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Bewerber wird an deiner Privatschule (mit Öffentlichkeitsrecht) aufgenommen, obwohl er die Aufnahmevoraussetzungen nicht erfüllt. Der Vertrag wurde unterschrieben. Drei Monate später fällt der Mangel auf. Was passiert ex lege?",
    options: [
      "Der Vertrag bleibt gültig, weil er bereits vollzogen wurde (tatsächlicher Schulbesuch).",
      "Der Vertrag ist von Anfang an rechtsunwirksam – er entfaltet keinerlei rechtliche Wirkungen.",
      "Der Vertrag ist anfechtbar, bleibt aber bis zur Anfechtung durch die Bildungsdirektion gültig.",
      "Die Rechtsunwirksamkeit muss durch die Bildungsdirektion mit Bescheid festgestellt werden."
    ],
    correct: [1],
    explanation: "Das Gesetz spricht von „rechtsunwirksam”, nicht von „anfechtbar”. Der Vertrag ist ex lege unwirksam, ohne dass es einer behördlichen Feststellung bedarf."
  },
  {
    id: 101,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Du wechselst von einer öffentlichen Schule an eine Privatschule mit Öffentlichkeitsrecht. Eine Mutter verlangt, dass du ihre Tochter per Bescheid aufnimmst, so wie sie es von der öffentlichen Schule gewohnt war. Was sagst du?",
    options: [
      "„Ja, als Schulleiter habe ich die gleichen Befugnisse wie an einer öffentlichen Schule.”",
      "„Die Aufnahme erfolgt durch Vertrag zwischen dem Schüler und dem Privatschulerhalter, nicht durch Bescheid. Sie bekommen eine schriftliche Vertragsbestätigung.”",
      "„Das muss die Bildungsdirektion machen.”",
      "„Einen Bescheid gibt es erst nach dem ersten Semester.”"
    ],
    correct: [1],
    explanation: "An Privatschulen ist der Aufnahmevertrag die Rechtsgrundlage, nicht der Bescheid. Du handelst nicht hoheitlich, sondern privatrechtlich."
  },
  {
    id: 102,
    section: 2,
    paragraph: "§5",
    type: "single",
    question: "Ein Schüler wurde an einer reinen Privatschule (ohne Öffentlichkeitsrecht) aufgenommen, obwohl er die schulrechtlichen Voraussetzungen nicht erfüllt. Gilt hier die Rechtsunwirksamkeit des §5 Abs.6?",
    options: [
      "Ja, §5 Abs.6 gilt für alle Privatschulen, auch solche ohne Öffentlichkeitsrecht.",
      "Nein, §5 Abs.6 gilt nur für Privatschulen mit Öffentlichkeitsrecht – die reine Privatschule unterliegt nicht dem SchUG.",
      "Ja, aber die Rechtsunwirksamkeit tritt erst nach Feststellung durch die Bildungsdirektion ein.",
      "Ja, §1 stellt klar, dass das gesamte SchUG für alle Privatschulen gilt."
    ],
    correct: [1],
    explanation: "Das SchUG gilt für öffentliche Schulen und für Privatschulen mit Öffentlichkeitsrecht. Reine Privatschulen ohne Öffentlichkeitsrecht sind nicht erfasst, daher gilt §5 Abs.6 für sie nicht."
  },

  // ===================================================================
  //  3. Abschnitt — AUFNAHMS- UND EIGNUNGSPRÜFUNGEN
  //  §6  Grundlagen (Abs. 1–2)
  // ===================================================================

  // H1 — Zulassung zur Prüfung (Abs. 1)
  {
    id: 103,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Vater meldet sein Kind für die Aufnahmsprüfung an deiner AHS an. Das Kind hat aber nicht den Status eines ordentlichen Schülers an der aktuellen Schule (es ist außerordentlicher Schüler). Darfst du es zur Prüfung zulassen?",
    options: [
      "Nein, nur ordentliche Schüler dürfen eine Aufnahmsprüfung ablegen.",
      "Ja, sofern alle anderen Aufnahmevoraussetzungen für die AHS erfüllt sind – der Status als ordentlicher Schüler ist keine Voraussetzung für die Prüfungszulassung.",
      "Ja, das Kind muss nur die Schulstufe besuchen, deren Abschluss Voraussetzung für die Aufnahme ist.",
      "Nein, außerordentliche Schüler müssen zuerst eine Eignungsprüfung absolvieren."
    ],
    correct: [1],
    explanation: "Das Gesetz verlangt die Erfüllung aller anderen Aufnahmevoraussetzungen – der Status als ordentlicher Schüler zählt nicht zu diesen Voraussetzungen für die Zulassung zur Prüfung."
  },
  {
    id: 104,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Schüler der 4. Klasse VS möchte im April die Aufnahmsprüfung für das Gymnasium machen. Er hat das Schuljahr noch nicht abgeschlossen. Darf er zur Prüfung antreten?",
    options: [
      "Nein, der Abschluss der 4. Klasse VS muss vor der Prüfung vorliegen.",
      "Ja, weil der Schulstufenabschluss von den „anderen Aufnahmevoraussetzungen” ausgenommen ist – er darf vor Abschluss antreten.",
      "Ja, aber nur mit Genehmigung der Bildungsdirektion.",
      "Nein, die Prüfung darf erst nach Ausstellung des Jahreszeugnisses stattfinden."
    ],
    correct: [1],
    explanation: "Der noch nicht erfolgte Schulstufenabschluss (hier: 4. Klasse VS) steht der Zulassung zur Aufnahmsprüfung nicht entgegen – er ist explizit von den sonstigen Voraussetzungen ausgenommen."
  },
  {
    id: 105,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein besonders begabter Schüler der 3. Klasse VS soll die Aufnahmsprüfung für die AHS machen (Überspringen einer Stufe). Ist das nach §6 zulässig?",
    options: [
      "Ja, weil §6 den Abschluss der Voraussetzungsstufe nicht verlangt.",
      "Nein, der Schüler muss zumindest die 4. Klasse VS besuchen, da der erfolgreiche Abschluss dieser Stufe Voraussetzung für die AHS-Aufnahme ist.",
      "Ja, aber nur wenn eine schulpsychologische Begabungsabklärung vorliegt.",
      "Nein, das Überspringen ist in §26 geregelt, nicht in §6."
    ],
    correct: [1],
    explanation: "Die Ausnahme des §6 Abs.1 befreit nur vom Nachweis des bereits erfolgten Abschlusses, nicht vom Erfordernis, die betreffende Stufe zu besuchen. Der Schüler muss zumindest in der 4. Klasse VS sein."
  },
  {
    id: 106,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Bewerber für deine BHS hat alle Voraussetzungen erfüllt (Alter, Sprachkenntnisse, bisherige Schulbildung) – nur das 9. Schuljahr hat er noch nicht abgeschlossen. Kann er die Aufnahmsprüfung machen?",
    options: [
      "Nein, weil der Abschluss des 9. Schuljahres die zentrale Voraussetzung für die BHS ist.",
      "Ja, weil §6 den fehlenden Schulstufenabschluss von den „anderen” Voraussetzungen ausdrücklich ausnimmt.",
      "Ja, aber nur mit einer Ausnahmegenehmigung der Bildungsdirektion.",
      "Nein, die Prüfung darf erst nach der Ausstellung des Jahreszeugnisses stattfinden."
    ],
    correct: [1],
    explanation: "Der Schulstufenabschluss ist die Voraussetzung für die Aufnahme in die Schulart, aber nicht für die Zulassung zur Prüfung. Das Gesetz nimmt ihn explizit aus."
  },
  {
    id: 107,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Bewerber kann den erfolgreichen Abschluss der 8. Schulstufe nicht nachweisen (kein Zeugnis). Alle anderen Unterlagen sind vollständig. Darfst du ihn zur Aufnahmsprüfung zulassen?",
    options: [
      "Ja, der fehlende Nachweis des Schulstufenabschlusses ist von den „anderen Voraussetzungen” ausgenommen.",
      "Nein, als Schulleiter musst du prüfen, ob alle Voraussetzungen erfüllt sind – ohne Nachweis des Schulstufenabschlusses keine Zulassung zur Prüfung.",
      "Ja, die Prüfung stellt die Eignung fest, der Nachweis kann nachgereicht werden.",
      "Nein, aber die Bildungsdirektion kann ausnahmsweise die Zulassung erteilen."
    ],
    correct: [1],
    explanation: "Die Ausnahme vom Schulstufenabschluss gilt für den Fall, dass der Abschluss noch nicht vorliegt, aber zeitnah erreicht wird. Gibt es gar keinen Nachweis eines jemals erfolgten Abschlusses, ist die Voraussetzung nicht erfüllbar."
  },
  {
    id: 108,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein 15-jähriger Schüler will die Aufnahmsprüfung für eine BHS machen, besucht aber erst die 8. Schulstufe (noch zwei Jahre bis zum Pflichtschulabschluss). Darfst du ihn zur Prüfung zulassen?",
    options: [
      "Ja, §6 unterscheidet nicht nach Alter oder Schulstufe.",
      "Nein, weil er nicht die erforderliche Schulstufe besucht, deren Abschluss Voraussetzung für die BHS ist – die Ausnahme deckt nur den zeitlichen Vorsprung, nicht das Fehlen von zwei Schuljahren.",
      "Ja, wenn die Bildungsdirektion zustimmt.",
      "Ja, wenn er eine Eignungsprüfung statt der Aufnahmsprüfung macht."
    ],
    correct: [1],
    explanation: "Die Ausnahme vom Schulstufenabschluss betrifft den zeitlichen Ablauf (Prüfung vor Abschluss). Sie erlaubt aber nicht, dass ein Schüler zwei Jahre vor Erreichen der Voraussetzungsstufe zur Prüfung antritt."
  },
  {
    id: 109,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Bewerber aus dem Ausland hat alle Dokumente dabei, nur das Jahreszeugnis ist nicht amtlich beglaubigt. Darfst du ihn trotzdem zur Aufnahmsprüfung zulassen?",
    options: [
      "Ja, die fehlende Beglaubigung betrifft nicht die Aufnahmevoraussetzungen selbst.",
      "Nein, weil beglaubigte Schuldokumente zu den „anderen Aufnahmevoraussetzungen” gehören – ohne vollständige Nachweise keine Zulassung.",
      "Ja, die Beglaubigung kann nach der Prüfung nachgereicht werden.",
      "Nein, aber du kannst eine Eignungsprüfung anordnen."
    ],
    correct: [1],
    explanation: "Die „anderen Aufnahmevoraussetzungen” umfassen auch die formellen Nachweise. Ist ein erforderliches Dokument nicht in der vorgeschriebenen Form (beglaubigt) vorgelegt, ist die Voraussetzung nicht erfüllt."
  },
  {
    id: 110,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein 17-jähriger hat die 9. Schulstufe abgeschlossen, aber sehr schlechte Noten. Ein Lehrer sagt: „Den lassen wir gar nicht erst zur Prüfung zu, der schafft das nie.” Darfst du ihn abweisen?",
    options: [
      "Ja, der Schulleiter kann Bewerber ohne ausreichende Eignung von der Prüfung ausschließen.",
      "Nein, wenn er die Aufnahmevoraussetzungen erfüllt, musst du ihn zur Prüfung zulassen – die Eignung wird in der Prüfung selbst festgestellt.",
      "Ja, wenn der SGA zustimmt.",
      "Ja, aber nur wenn die Schule eine berufsbildende Schule ist."
    ],
    correct: [1],
    explanation: "Sind die formalen Voraussetzungen erfüllt (inkl. Schulstufenabschluss), hat der Bewerber ein Recht auf Zulassung zur Prüfung. Die Beurteilung der Eignung ist Sache der Prüfung, nicht der Vorabselektion."
  },
  {
    id: 111,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Bewerber mit sonderpädagogischem Förderbedarf (SPF) will an deiner HTL die Aufnahmsprüfung machen. Die standardisierte Prüfungsordnung sieht keine barrierefreien Formate vor. Wie gehst du vor?",
    options: [
      "Du lehnst die Zulassung ab, weil die Prüfungsordnung keine Ausnahmen zulässt.",
      "Du musst den Bewerber zulassen und angemessene Vorkehrungen treffen – das Benachteiligungsverbot gilt auch bei Aufnahmsprüfungen.",
      "Die Bildungsdirektion muss vorab eine barrierefreie Prüfung anordnen.",
      "Du bietest eine rein mündliche Prüfung als Ersatz für die schriftliche an."
    ],
    correct: [1],
    explanation: "Das Behindertengleichstellungsrecht und die Verfassung gebieten angemessene Vorkehrungen. Als Schulleiter musst du sicherstellen, dass auch Bewerber mit Behinderungen ihr Prüfungsrecht ausüben können."
  },
  {
    id: 112,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Bewerber erfüllt alle Aufnahmevoraussetzungen für deine AHS – inklusive des 4. Klasse VS-Abschlusses. Er will die Aufnahmsprüfung machen. Hast du als Schulleiter Ermessen, ihn nicht zur Prüfung zuzulassen?",
    options: [
      "Ja, du kannst Bewerber aus pädagogischen Gründen von der Prüfung ausschließen.",
      "Nein, bei Erfüllung aller Voraussetzungen hat der Bewerber ein Recht auf Zulassung zur Prüfung – du hast keinen Ermessensspielraum.",
      "Ja, wenn die Schule überbelegt ist.",
      "Nein, aber der SGA kann die Zulassung verweigern."
    ],
    correct: [1],
    explanation: "Das Gesetz räumt dem Schulleiter bei Erfüllung der Voraussetzungen kein Ermessen ein. Der Bewerber hat einen Rechtsanspruch auf Zulassung zur Aufnahmsprüfung."
  },

  // H2 — Ausnahme vom Schulstufenabschluss (Abs. 1 – Vertiefung)
  {
    id: 113,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Schüler der 4. Klasse VS tritt im Mai zur Aufnahmsprüfung für die AHS an und besteht. Im Juni fällt er dann doch in der VS durch und muss die 4. Klasse wiederholen. Was passiert mit der bestandenen Aufnahmsprüfung?",
    options: [
      "Die Prüfung bleibt gültig – er kann nach der Wiederholung der VS ohne neuerliche Prüfung ins Gymnasium.",
      "Die Prüfung verliert ihre Gültigkeit, weil der Schulstufenabschluss nachträglich nicht erreicht wurde.",
      "Die Prüfung bleibt gültig, aber nur für das laufende Schuljahr.",
      "Die Bildungsdirektion entscheidet im Einzelfall über die Gültigkeit."
    ],
    correct: [1],
    explanation: "Die Zulassung zur Prüfung vor Abschluss der Schulstufe steht unter der Bedingung, dass der Abschluss tatsächlich erreicht wird. Wird er nicht erreicht, entfaltet die bestandene Prüfung keine Wirkung."
  },
  {
    id: 114,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Eine Schülerin der 4. Klasse VS tritt im Mai zur Aufnahmsprüfung für die AHS an – und fällt durch. Darf sie noch im selben Juni (vor Ferienbeginn) eine zweite Aufnahmsprüfung an einer anderen AHS machen?",
    options: [
      "Ja, solange sie noch in der 4. Klasse VS ist, darf sie beliebig oft antreten.",
      "Nein, weil die Prüfung für dieselbe Schulart im selben Schuljahr nicht wiederholt werden darf – egal an welcher Schule.",
      "Ja, aber nur an einer anderen Schule.",
      "Ja, wenn der Schulleiter der ersten Prüfung zustimmt."
    ],
    correct: [1],
    explanation: "Die bestandene Prüfung berechtigt schulartweit, aber auch das Wiederholungsverbot gilt schulartweit. Ein Antritt an einer anderen Schule derselben Schulart ist eine Wiederholung und daher unzulässig."
  },
  {
    id: 115,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Eine Schülerin hat im Juni die 4. Klasse VS mit ausgezeichnetem Erfolg abgeschlossen. Im September will sie die AHS besuchen – ohne eine Aufnahmsprüfung gemacht zu haben. Ist das möglich?",
    options: [
      "Nein, ohne Aufnahmsprüfung ist keine Aufnahme in die AHS möglich.",
      "Das hängt von der Verordnung für die betreffende Schulart ab – sie legt fest, ob und wann eine Aufnahmsprüfung erforderlich ist.",
      "Ja, mit dem ausgezeichneten VS-Abschluss ist der Eintritt in die AHS automatisch.",
      "Ja, wenn der Schulleiter zustimmt."
    ],
    correct: [1],
    explanation: "§6 regelt die Voraussetzungen für die Zulassung zur Prüfung, nicht ob eine Prüfung überhaupt nötig ist. Die Verordnung für die Schulart bestimmt, ob und unter welchen Voraussetzungen eine Aufnahmsprüfung erforderlich ist."
  },
  {
    id: 116,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Schüler wiederholt die 4. Klasse VS. Er hatte im Vorjahr die Aufnahmsprüfung für die AHS bestanden, konnte aber wegen des Nichtaufstiegs nicht wechseln. Ist die Prüfung im Wiederholungsjahr noch gültig?",
    options: [
      "Nein, die Prüfung gilt nur für das Schuljahr, für das sie abgelegt wurde.",
      "Ja, eine bestandene Aufnahmsprüfung gilt für das Jahr der Prüfung und die beiden folgenden Schuljahre.",
      "Nein, weil die Voraussetzung (VS-Abschluss) erst nach Ablauf der Gültigkeit erreicht wird.",
      "Ja, aber nur wenn der Schulleiter die Gültigkeit bestätigt."
    ],
    correct: [1],
    explanation: "§8 Abs.4 bestimmt die Gültigkeit einer bestandenen Prüfung für das betreffende und die zwei folgenden Schuljahre. Der Schüler kann die Prüfung nach dem Wiederholungsjahr nützen."
  },

  // H3 — Wiederholungsverbot (Abs. 2)
  {
    id: 117,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Bewerber ist bei der Aufnahmsprüfung an deiner AHS durchgefallen. Drei Wochen später meldet er sich an einer anderen AHS in der Nachbarstadt zur Prüfung an. Darf diese Schule ihn prüfen?",
    options: [
      "Ja, weil es eine andere Schule ist, gilt das Wiederholungsverbot nicht.",
      "Nein, das Gesetz verbietet die Wiederholung für dieselbe Schulart im selben Schuljahr – unabhängig vom Schulstandort.",
      "Ja, wenn der Schulleiter der neuen Schule zustimmt.",
      "Ja, weil die Prüfungskommission eine andere ist."
    ],
    correct: [1],
    explanation: "Das Verbot gilt für „dieselbe Schulart” – nicht für dieselbe Schule. Ein neuerlicher Prüfungsantritt an einer anderen Schule derselben Schulart ist eine unzulässige Wiederholung."
  },
  {
    id: 118,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Bewerber ist bei der Aufnahmsprüfung für die AHS durchgefallen. Darf er im selben Schuljahr die Eignungsprüfung für eine Sport-AHS (besonderer Schwerpunkt) ablegen?",
    options: [
      "Nein, der Begriff „dieselbe Schulart” umfasst alle Formen der AHS.",
      "Das ist eine Grauzone: Wenn die Eignungsprüfung einen völlig anderen Prüfungsstoff und Zweck hat (Sporteignung), könnte sie zulässig sein – die Abgrenzung zur Aufnahmsprüfung ist aber entscheidend.",
      "Ja, ohne jede Einschränkung.",
      "Nein, einmal durchgefallen heißt Sperre für alle Prüfungen im selben Jahr."
    ],
    correct: [1],
    explanation: "Aufnahmsprüfung und Eignungsprüfung sind unterschiedliche Instrumente. Die Eignungsprüfung prüft spezifische Eignung (z. B. Sport), die Aufnahmsprüfung die allgemeine Leistungsfähigkeit. Nach dem Zweck des Gesetzes könnte eine Eignungsprüfung zulässig sein."
  },
  {
    id: 119,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Bewerber besteht die Aufnahmsprüfung an deiner AHS, bekommt aber wegen Platzmangels keinen Platz. Er will im selben Schuljahr an einer anderen AHS die Prüfung wiederholen, um sein Ergebnis zu verbessern. Darf er das?",
    options: [
      "Ja, weil er die Prüfung bestanden hat, ist das Wiederholungsverbot nicht anwendbar.",
      "Nein, das Gesetz verbietet jede Wiederholung einer Aufnahmsprüfung für dieselbe Schulart im selben Schuljahr – egal ob bestanden oder nicht.",
      "Ja, weil er keinen Platz bekommen hat, ist das ein Härtefall.",
      "Ja, aber nur an einer Privatschule."
    ],
    correct: [1],
    explanation: "Das Gesetz unterscheidet nicht zwischen bestandenen und nicht bestandenen Prüfungen. Auch wer bestanden hat, darf die Prüfung für dieselbe Schulart im selben Schuljahr nicht wiederholen."
  },
  {
    id: 120,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Schüler besteht im September die Aufnahmsprüfung für eine AHS. Im November stellt sich heraus, dass eine BHS besser zu ihm passen würde. Darf er im selben Schuljahr die Aufnahmsprüfung für die BHS machen?",
    options: [
      "Nein, das Wiederholungsverbot gilt für alle Schularten gleichermaßen.",
      "Ja, weil die BHS eine andere Schulart als die AHS ist – das Wiederholungsverbot gilt nur für dieselbe Schulart.",
      "Ja, aber nur wenn die AHS der Abmeldung zustimmt.",
      "Nein, er muss bis zum nächsten Schuljahr warten."
    ],
    correct: [1],
    explanation: "Das Wiederholungsverbot des §6 Abs.2 bezieht sich auf „dieselbe Schulart”. Der Wechsel von AHS zu BHS betrifft eine andere Schulart und fällt daher nicht unter das Verbot."
  },
  {
    id: 121,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Bewerber ist in der schriftlichen Aufnahmsprüfung an deiner Schule durchgefallen. Er beantragt eine mündliche Wiederholung, weil er Prüfungsangst hatte. Darfst du das anbieten?",
    options: [
      "Ja, der Schulleiter kann aus pädagogischen Gründen Wiederholungen gestatten.",
      "Nein, das Gesetz verbietet jede Wiederholung der Aufnahmsprüfung im selben Schuljahr – auch in einer anderen Prüfungsform.",
      "Ja, wenn die Prüfer zustimmen.",
      "Ja, aber nur gegen Vorlage eines ärztlichen Attests über Prüfungsangst."
    ],
    correct: [1],
    explanation: "Das Wiederholungsverbot ist absolut. Auch ein Wechsel der Prüfungsform (mündlich statt schriftlich) umgeht das Verbot nicht. Der Schüler muss bis zum nächsten Schuljahr warten."
  },
  {
    id: 122,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Schüler hat für die Aufnahmsprüfung an deiner AHS angemeldet, ist aber krankheitsbedingt nicht angetreten. Darf er zu einem späteren Prüfungstermin im selben Schuljahr antreten?",
    options: [
      "Nein, die Nichtteilnahme gilt als Prüfungsantritt – Wiederholung erst im nächsten Schuljahr.",
      "Ja, wenn er kein Prüfungsgebiet absolviert hat, gilt die Prüfung als nicht abgelegt – er kann zu einem späteren Termin antreten.",
      "Ja, aber nur mit ärztlichem Attest.",
      "Nein, der Prüfungstermin ist absolut verbindlich."
    ],
    correct: [1],
    explanation: "Das Gesetz verbietet die Wiederholung einer „abgelegten” Prüfung. Wer nicht angetreten ist, hat keine Prüfung abgelegt. Der Antritt zu einem späteren Termin ist daher keine Wiederholung, sondern der erste Antritt."
  },
  {
    id: 123,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Bewerber besteht die Aufnahmsprüfung an deiner AHS mit der Note „Befriedigend”. Er möchte die Prüfung an einer anderen AHS wiederholen, um eine bessere Note für die Reihung zu erzielen. Darf er das?",
    options: [
      "Ja, als bestandene Prüfung darf sie jederzeit wiederholt werden.",
      "Nein, die einmal abgelegte Aufnahmsprüfung darf für dieselbe Schulart im selben Schuljahr nicht wiederholt werden – das gilt auch für bestandene Prüfungen.",
      "Ja, aber nur an einer anderen Schule.",
      "Ja, wenn er bei der ersten Prüfung schriftlich auf den Platz verzichtet."
    ],
    correct: [1],
    explanation: "Das Gesetz stellt allein auf die Tatsache der „abgelegten” Prüfung ab, nicht auf das Ergebnis. Eine Wiederholung zur Notenverbesserung ist daher unzulässig."
  },
  {
    id: 124,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Bewerber fällt bei der Aufnahmsprüfung an deiner AHS durch. Am 15. September (Beginn des neuen Schuljahres) will er sich an derselben Schule zur Prüfung anmelden. Darf er das?",
    options: [
      "Ja, mit dem neuen Schuljahr beginnt die Frist von neuem – das Wiederholungsverbot gilt nur innerhalb desselben Schuljahres.",
      "Nein, er muss ein volles Kalenderjahr seit dem ersten Antritt warten.",
      "Ja, aber nur wenn er die Voraussetzungsklasse wiederholt hat.",
      "Nein, er muss mindestens ein Semester warten."
    ],
    correct: [0],
    explanation: "Das Wiederholungsverbot des §6 Abs.2 gilt für dasselbe Schuljahr. Mit Beginn des neuen Schuljahres darf die Prüfung erneut abgelegt werden – auch an derselben Schule."
  },
  {
    id: 125,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Schüler besteht die Aufnahmsprüfung für eine BHS. Darf er mit diesem Ergebnis auch an einer BMS (berufsbildende mittlere Schule) aufgenommen werden?",
    options: [
      "Nein, BHS und BMS sind verschiedene Schularten mit verschiedenen Voraussetzungen.",
      "Ja, §8 Abs.4 bestimmt ausdrücklich, dass die bestandene Aufnahmsprüfung für eine BHS auch zur Aufnahme in eine BMS berechtigt.",
      "Ja, aber nur wenn die BMS dem zustimmt.",
      "Nein, jede Schulart erfordert eine eigene Aufnahmsprüfung."
    ],
    correct: [1],
    explanation: "Das Gesetz stellt eine bestandene BHS-Aufnahmsprüfung explizit der BMS-Aufnahme gleich. Ein BHS-Bewerber kann daher auch an einer BMS aufgenommen werden."
  },
  {
    id: 126,
    section: 3,
    paragraph: "§6",
    type: "single",
    question: "Ein Bewerber hat vor zwei Jahren die Aufnahmsprüfung für die AHS bestanden, ist dann aber nicht angetreten. Jetzt, zwei Jahre später, will er die AHS doch besuchen. Gilt die Prüfung noch?",
    options: [
      "Nein, die Prüfung verfällt nach einem Jahr.",
      "Ja, die bestandene Aufnahmsprüfung gilt für das Jahr der Prüfung und die zwei folgenden Schuljahre – also insgesamt für drei Jahre.",
      "Ja, einmal bestanden, immer gültig.",
      "Nein, nach einem Jahr muss die Prüfung wiederholt werden."
    ],
    correct: [1],
    explanation: "§8 Abs.4 regelt die Gültigkeitsdauer: das Jahr der Prüfung plus die zwei folgenden Schuljahre. Der Bewerber kann innerhalb dieses Zeitraums ohne neuerliche Prüfung aufgenommen werden."
  },

  // ===================================================================
  //  §7 — Durchführung der Aufnahms- und Eignungsprüfungen
  // ===================================================================

  // §7 Abs. 1 — Prüfungsform und Prüfungsgebiete
  {
    id: 127,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Du planst als Direktor die Aufnahmsprüfungen für deine AHS. Ein Lehrer schlägt vor, heuer statt der standardisierten schriftlichen Prüfung ein mündliches Gespräch durchzuführen, das sei „aussagekräftiger”. Darfst du das entscheiden?",
    options: [
      "Ja, als Schulleiter bestimmst du die Prüfungsform.",
      "Nein, die Prüfungsform wird vom Bundesminister durch Verordnung bestimmt.",
      "Ja, wenn die Prüfer zustimmen.",
      "Ja, aber nur für die Aufnahmsprüfung, nicht für die Eignungsprüfung."
    ],
    correct: [1],
    explanation: "Die Prüfungsform wird nicht von der Schule festgelegt, sondern vom zuständigen Bundesminister durch Verordnung. Der Schulleiter kann davon nicht abweichen."
  },
  {
    id: 128,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Deine Schule möchte in der Aufnahmsprüfung ein Fach prüfen, das in der Verordnung des Ministers gar nicht als Prüfungsgebiet vorgesehen ist. Darfst du es trotzdem als zusätzliches Prüfungsgebiet aufnehmen?",
    options: [
      "Ja, der Schulleiter kann die Prüfungsgebiete nach pädagogischem Ermessen erweitern.",
      "Nein, die Prüfungsgebiete werden durch die Verordnung abschließend festgelegt.",
      "Ja, wenn der SGA zustimmt.",
      "Ja, aber nur wenn es sich um eine Eignungsprüfung handelt."
    ],
    correct: [1],
    explanation: "Die Verordnung des Ministers legt die Prüfungsgebiete abschließend fest. Die Schule kann nicht eigenmächtig weitere Gebiete hinzufügen."
  },
  {
    id: 129,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Bei der Erstellung der Prüfungsaufgaben für die Aufnahmsprüfung deiner Schule stellt sich die Frage: An welchem Lehrplan orientieren sich die Aufgaben?",
    options: [
      "Am Lehrplan der aufnehmenden Schule (z. B. 1. Klasse AHS).",
      "Am Lehrplan jener Schulstufe, deren erfolgreicher Besuch die Mindestvoraussetzung für die Aufnahme ist (z. B. 4. Klasse VS).",
      "Am Lehrplan der letzten besuchten Schule des jeweiligen Bewerbers.",
      "Die Aufgaben sind an keinen bestimmten Lehrplan gebunden."
    ],
    correct: [1],
    explanation: "Das Gesetz schreibt vor, auf den Lehrplan jener Schulstufe Bedacht zu nehmen, deren erfolgreicher Besuch Mindestvoraussetzung für die Aufnahme ist."
  },
  {
    id: 130,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Der zuständige Bundesminister hat für eine neu geschaffene Schulart noch keine Verordnung über Prüfungsform und -gebiete erlassen. Als Direktor musst du trotzdem Aufnahmsprüfungen durchführen. Was tust du?",
    options: [
      "Du setzt alle Prüfungen aus, bis die Verordnung vorliegt.",
      "Du legst Prüfungsform und -gebiete provisorisch selbst fest, weil ohne Verordnung kein Prüfungsbetrieb möglich wäre.",
      "Die Bildungsdirektion erlässt eine Ersatzverordnung.",
      "Du verwendest die Verordnung der nächstverwandten Schulart."
    ],
    correct: [1],
    explanation: "Fehlt eine Verordnung, ist der Schulleiter gezwungen, provisorische Regelungen zu treffen, da sonst keine Aufnahmsprüfungen stattfinden könnten. Die Bildungsdirektion sollte zeitnah eine Lösung schaffen."
  },
  {
    id: 131,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein Lehrer fragt: „Die Eignungsprüfung im Fach Bewegung und Sport – gilt da die gleiche Verordnung wie für die schriftliche Aufnahmsprüfung?” Was sagst du als Direktor?",
    options: [
      "Ja, die Verordnung des Ministers gilt für Aufnahms- und Eignungsprüfungen gleichermaßen.",
      "Die Verordnung kann für Eignungsprüfungen eigene Formen und Gebiete vorsehen, die auf die spezifische Eignung abgestimmt sind.",
      "Eignungsprüfungen unterliegen keiner Verordnung, die Schule legt sie autonom fest.",
      "Für Eignungsprüfungen gibt es eigene gesetzliche Bestimmungen außerhalb des SchUG."
    ],
    correct: [1],
    explanation: "§7 Abs.1 gilt für beide Prüfungsarten. Die Verordnung kann und wird aber für Eignungsprüfungen in der Regel abweichende, auf die spezifische Eignung zugeschnittene Regelungen treffen."
  },
  {
    id: 132,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein Bewerber für deine HTL hat eine Legasthenie und beantragt eine mündliche statt der in der Verordnung vorgeschriebenen schriftlichen Prüfung. Darfst du die Prüfungsform abweichend von der Verordnung anpassen?",
    options: [
      "Nein, die Verordnung ist bindend – du darfst die Prüfungsform nicht ändern.",
      "Ja, das Behindertengleichstellungsrecht gebietet angemessene Vorkehrungen. Du kannst die Prüfungsform im Einzelfall anpassen.",
      "Ja, ohne Einschränkung.",
      "Nein, nur die Bildungsdirektion kann Ausnahmen von der Verordnung genehmigen."
    ],
    correct: [1],
    explanation: "Das Benachteiligungsverbot und das Recht auf angemessene Vorkehrungen für Menschen mit Behinderungen gehen der starren Anwendung der Verordnung vor. Die Prüfungsform kann daher im Einzelfall angepasst werden."
  },
  {
    id: 133,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Die Verordnung deiner Schulart schreibt sowohl eine schriftliche als auch eine mündliche Aufnahmsprüfung vor. Ein Schüler schneidet mündlich hervorragend ab, fällt aber schriftlich durch. Wie wird die Gesamtbeurteilung ermittelt?",
    options: [
      "Die mündliche Note gleicht die schriftliche aus – der Schüler besteht.",
      "Die Gesamtbeurteilung folgt den Regeln des §8, nicht einer festen Gewichtung der Prüfungsformen.",
      "Die Verordnung legt fest, wie die Teilleistungen zu gewichten sind und wann die Prüfung insgesamt bestanden ist.",
      "Der Schulleiter entscheidet basierend auf dem Gesamteindruck."
    ],
    correct: [2],
    explanation: "Die Verordnung bestimmt Inhalt und Form der Prüfung, §8 regelt die Beurteilung. Welches Gewicht die einzelnen Teile haben und wann die Prüfung bestanden ist, richtet sich nach der Verordnung."
  },
  {
    id: 134,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Du stellst als Direktor fest, dass die geltende Verordnung über die Prüfungsgebiete nicht mehr zum aktuellen Lehrplan passt. Darfst du die Gebiete eigenmächtig aktualisieren?",
    options: [
      "Ja, als Schulleiter kannst du die Gebiete an den aktuellen Lehrplan anpassen.",
      "Nein, die Festlegung der Prüfungsgebiete obliegt ausschließlich dem Bundesminister per Verordnung.",
      "Ja, wenn die Bildungsdirektion zustimmt.",
      "Ja, aber nur mit Zustimmung aller Prüfer."
    ],
    correct: [1],
    explanation: "Die Zuständigkeit für die Festlegung der Prüfungsgebiete liegt beim Bundesminister. Der Schulleiter kann davon nicht abweichen, auch wenn die Verordnung veraltet ist."
  },
  {
    id: 135,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein Bewerber kommt von einer ausländischen Schule und hat keinen dem österreichischen Lehrplan der 8. Schulstufe entsprechenden Unterricht gehabt. Kannst du die Prüfungsgebiete für ihn individuell anpassen?",
    options: [
      "Ja, für ausländische Bewerber kannst du individuelle Prüfungsgebiete festlegen.",
      "Nein, Prüfungsform und -gebiete gelten für alle Bewerber gleichermaßen.",
      "Ja, aber nur mit Genehmigung der Bildungsdirektion.",
      "Ja, wenn er eine Eignungsprüfung statt der Aufnahmsprüfung macht."
    ],
    correct: [1],
    explanation: "Die Prüfungsgebiete sind durch Verordnung für alle Bewerber einheitlich festgelegt. Eine individuelle Anpassung ist nicht vorgesehen."
  },
  {
    id: 136,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Eine Lehrerin möchte die Aufnahmsprüfung als Projektarbeit statt als schriftliche Prüfung gestalten – das sei „zeitgemäßer”. Die Verordnung sieht eine schriftliche Prüfung vor. Darf sie das?",
    options: [
      "Ja, pädagogische Innovation geht der Verordnung vor.",
      "Nein, die Prüfungsform ist durch die Verordnung abschließend bestimmt. Eine Projektarbeit ist nur zulässig, wenn die Verordnung sie vorsieht.",
      "Ja, wenn die Schulpartner der Änderung zustimmen.",
      "Ja, aber nur für die Eignungsprüfung."
    ],
    correct: [1],
    explanation: "§7 Abs.1 weist die Festlegung der Prüfungsform dem Verordnungsgeber zu. Die Schule kann nicht eigenständig eine andere Prüfungsform wählen."
  },

  // §7 Abs. 2 — Schulleiter bestellt Prüfer
  {
    id: 137,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Du bereitest als Direktor die Aufnahmsprüfungen vor. Ein Lehrer sagt: „Ob ich als Prüfer mitmache, entscheide ich selbst.” Hat er recht?",
    options: [
      "Ja, die Tätigkeit als Prüfer ist freiwillig.",
      "Nein, der Schulleiter bestellt die Prüfer – die Lehrkräfte sind zur Übernahme dieser Aufgabe verpflichtet.",
      "Ja, aber nur wenn der Lehrer keine Freigegenstände unterrichtet.",
      "Nein, aber der Lehrer kann beim SGA Einspruch erheben."
    ],
    correct: [1],
    explanation: "Der Schulleiter bestellt die Prüfer. Die Übernahme dieser Aufgabe gehört zu den Dienstpflichten der Lehrkräfte – ein Recht auf Ablehnung besteht nicht."
  },
  {
    id: 138,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "An deiner kleinen Schule gibt es nur drei Lehrer mit der erforderlichen Qualifikation. Die Prüfung umfasst aber vier Prüfungsgebiete. Was tust du?",
    options: [
      "Du bestellst die drei Lehrer für die vorhandenen Gebiete und lässt ein Gebiet entfallen.",
      "Du musst externe Prüfer (z. B. von einer Nachbarschule) bestellen, um alle Gebiete abzudecken.",
      "Du teilst die Prüfung auf zwei Tage auf, damit die drei Lehrer alle Gebiete abdecken können.",
      "Die Bildungsdirektion muss zusätzliche Prüfer entsenden."
    ],
    correct: [1],
    explanation: "Der Schulleiter muss für jedes Prüfungsgebiet einen Prüfer bestellen. Fehlen interne Kapazitäten, sind externe Lehrkräfte als Prüfer zu bestellen."
  },
  {
    id: 139,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Kannst du als Schulleiter dich selbst als Prüfer bestellen?",
    options: [
      "Ja, du bist auch Lehrer und kannst Prüfer sein – du führst dann den Vorsitz in der Prüferkonferenz und bist gleichzeitig Prüfer.",
      "Nein, der Schulleiter kann nicht Prüfer sein, weil er den Vorsitz in der Prüferkonferenz führt.",
      "Ja, aber nur wenn die Schule sehr klein ist und es keine Alternativen gibt.",
      "Nein, das Gesetz verbietet ausdrücklich, dass der Schulleiter Prüfer ist."
    ],
    correct: [0],
    explanation: "Das Gesetz verbietet nicht, dass der Schulleiter auch Prüfer ist. Er führt den Vorsitz in der Konferenz und kann gleichzeitig als Prüfer fungieren."
  },
  {
    id: 140,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Für die Eignungsprüfung (Sport) brauchst du einen externen Trainer, weil keine schuleigene Lehrkraft die nötige Spezialqualifikation hat. Darfst du Externe als Prüfer bestellen?",
    options: [
      "Nein, nur Lehrer der eigenen Schule dürfen als Prüfer bestellt werden.",
      "Ja, das Gesetz spricht von „Lehrern” – das umfasst auch Lehrkräfte anderer Schulen, die du als Prüfer bestellen kannst.",
      "Ja, aber nur wenn der SGA zustimmt.",
      "Nein, externe Prüfer müssen von der Bildungsdirektion bestellt werden."
    ],
    correct: [1],
    explanation: "Der Begriff „Lehrer” in §7 Abs.2 ist nicht auf die eigene Schule beschränkt. Du kannst geeignete Lehrkräfte anderer Schulen als Prüfer bestellen."
  },
  {
    id: 141,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein von dir bestellter Prüfer ist am Prüfungstag akut erkrankt. Die Prüfung läuft bereits. Darf ein anderer Lehrer spontan als Ersatz einspringen?",
    options: [
      "Ja, in dringenden Fällen kannst du mündlich einen Ersatzprüfer bestellen.",
      "Nein, die Bestellung muss schriftlich und vor Beginn der Prüfung erfolgen.",
      "Ja, aber nur für den Rest des laufenden Prüfungstags.",
      "Nein, die Prüfung muss abgebrochen und neu angesetzt werden."
    ],
    correct: [0],
    explanation: "In Notfällen ist eine formlose mündliche Bestellung eines Ersatzprüfers zulässig, um den Prüfungsbetrieb aufrechtzuerhalten."
  },
  {
    id: 142,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein Junglehrer im ersten Dienstjahr möchte als Prüfer mitwirken. Darfst du ihn bestellen?",
    options: [
      "Ja, wenn er die Lehrbefähigung für das Prüfungsgebiet hat, darf er Prüfer sein.",
      "Nein, nur Lehrer mit mindestens drei Jahren Erfahrung dürfen Prüfer sein.",
      "Ja, aber nur als Beisitzer ohne Stimme bei der Gesamtbeurteilung.",
      "Nein, Junglehrer dürfen erst nach der Entlassung aus dem Dienstverhältnis prüfen."
    ],
    correct: [0],
    explanation: "Das Gesetz stellt keine Anforderungen an die Dienstzeit. Entscheidend ist die fachliche Qualifikation für das Prüfungsgebiet."
  },
  {
    id: 143,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Wie viele Prüfer musst du für eine Aufnahmsprüfung bestellen? Reicht ein einziger Prüfer für alle Fächer?",
    options: [
      "Ja, ein Prüfer kann alle Prüfungsgebiete allein abdecken.",
      "Das Gesetz spricht von der „erforderlichen Zahl” – für jedes Prüfungsgebiet ist zumindest ein Prüfer zu bestellen.",
      "Es müssen mindestens drei Prüfer sein, unabhängig von der Zahl der Gebiete.",
      "Die Anzahl legt die Bildungsdirektion fest."
    ],
    correct: [1],
    explanation: "Die „erforderliche Zahl” richtet sich nach den Prüfungsgebieten. Für jedes Gebiet sollte zumindest ein fachlich zuständiger Prüfer bestellt werden."
  },
  {
    id: 144,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein von dir bestellter Prüfer lehnt ab, weil er mit einer Bewerberin verwandt ist. Darf er die Prüfertätigkeit verweigern?",
    options: [
      "Nein, die Bestellung durch den Schulleiter ist bindend.",
      "Ja, bei Befangenheit soll der Lehrer nicht als Prüfer fungieren – du musst eine Ersatzbestellung vornehmen.",
      "Nein, Verwandtschaft allein ist kein gesetzlicher Ausschlussgrund.",
      "Ja, aber die Bewerberin muss der Prüfung durch den Verwandten zustimmen."
    ],
    correct: [1],
    explanation: "Befangenheit ist ein wichtiger Grund, die Prüfertätigkeit abzulehnen. Der Schulleiter muss in diesem Fall einen anderen Prüfer bestellen, um die Objektivität zu wahren."
  },
  {
    id: 145,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein von dir bestellter Prüfer erscheint wiederholt unvorbereitet zu den Prüferkonferenzen. Darfst du die Bestellung widerrufen?",
    options: [
      "Ja, du kannst die Bestellung jederzeit widerrufen und einen anderen Prüfer bestellen.",
      "Nein, einmal bestellte Prüfer bleiben für das gesamte Verfahren bestellt.",
      "Ja, aber nur mit Zustimmung des SGA.",
      "Nein, nur die Bildungsdirektion kann die Bestellung aufheben."
    ],
    correct: [0],
    explanation: "Der Schulleiter bestellt die Prüfer und kann die Bestellung bei mangelhafter Pflichterfüllung auch widerrufen und durch eine andere Lehrkraft ersetzen."
  },
  {
    id: 146,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein Lehramtsstudierender im Praktikum bietet sich als Prüfer an. Darfst du ihn bestellen?",
    options: [
      "Ja, wenn er fachlich geeignet ist, darf er als Prüfer mitwirken.",
      "Nein, nur planmäßige Lehrer mit abgeschlossener Ausbildung dürfen Prüfer sein.",
      "Ja, aber nur unter Aufsicht eines planmäßigen Lehrers.",
      "Ja, aber nur für die Eignungsprüfung, nicht für die Aufnahmsprüfung."
    ],
    correct: [1],
    explanation: "Prüfer müssen Lehrer sein – also Personen, die die Lehramtsausbildung abgeschlossen haben. Lehramtsstudierende sind noch keine Lehrer im rechtlichen Sinne."
  },

  // §7 Abs. 3 — Aufgabenstellung in der Prüferkonferenz
  {
    id: 147,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein Prüfer kommt zu dir und sagt: „Ich habe die Aufgaben für mein Gebiet schon fertig vorbereitet, das kann ich allein entscheiden.” Darf er das?",
    options: [
      "Ja, jeder Prüfer stellt die Aufgaben für sein Gebiet eigenverantwortlich.",
      "Nein, die Aufgabenstellungen müssen in einer Konferenz aller Prüfer unter dem Vorsitz des Schulleiters gemeinsam festgesetzt werden.",
      "Ja, wenn er der Fachkoordinator ist.",
      "Ja, aber nur für die mündliche Prüfung."
    ],
    correct: [1],
    explanation: "Die Aufgabenstellungen sind nicht Sache des einzelnen Prüfers, sondern werden in der Konferenz aller Prüfer unter Leitung des Schulleiters gemeinsam festgesetzt."
  },
  {
    id: 148,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "In der Prüferkonferenz sind sich zwei Prüfer über eine Aufgabe uneinig: zwei dafür, zwei dagegen. Du als Schulleiter hast den Vorsitz. Wie wird entschieden?",
    options: [
      "Du gibst als Vorsitzender den Stichentscheid.",
      "Bei Stimmengleichheit gilt der Antrag als abgelehnt.",
      "Das Gesetz schweigt dazu – du entscheidest als Vorsitzender.",
      "Die Bildungsdirektion entscheidet bei Streitfällen."
    ],
    correct: [0],
    explanation: "Der Schulleiter führt den Vorsitz. Bei Stimmengleichheit in der Konferenz geht die Entscheidung auf den Vorsitzenden über – er hat den Stichentscheid."
  },
  {
    id: 149,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein Prüfer schlägt eine Aufgabe vor, die deutlich über dem Niveau des Lehrplans der Voraussetzungsstufe liegt. Darfst du als vorsitzender Schulleiter die Aufgabe ablehnen?",
    options: [
      "Ja, als Vorsitzender hast du das Letztentscheidungsrecht in der Konferenz.",
      "Nein, die Prüfer entscheiden fachlich autonom – du kannst nur Empfehlungen abgeben.",
      "Ja, aber nur wenn die Bildungsdirektion zustimmt.",
      "Nein, der Fachkoordinator entscheidet über fachliche Fragen."
    ],
    correct: [0],
    explanation: "Der Schulleiter führt den Vorsitz und trägt die Verantwortung für die Ordnungsmäßigkeit der Prüfung. Er kann Aufgaben ablehnen, die nicht dem vorgeschriebenen Niveau entsprechen."
  },
  {
    id: 150,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein Prüfer möchte Aufgaben aus dem Vorjahr wiederverwenden. Ist das zulässig?",
    options: [
      "Ja, die Wiederverwendung ist eine pädagogische Entscheidung des Prüfers.",
      "Das ist grundsätzlich möglich, aber du solltest als Vorsitzender sicherstellen, dass die Aufgaben nicht durch vorherige Prüfungen bekannt geworden sind.",
      "Nein, Aufgaben müssen jedes Jahr von Grund auf neu erstellt werden.",
      "Ja, aber nur wenn die Prüfungskandidaten zustimmen."
    ],
    correct: [1],
    explanation: "Die Wiederverwendung ist nicht verboten, aber problematisch, wenn Aufgaben bekannt geworden sind. Der Schulleiter sollte als Vorsitzender auf die Geheimhaltung achten."
  },
  {
    id: 151,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Du hast den Vorsitz in der Prüferkonferenz. Ein Prüfer ist erkrankt und kann nicht teilnehmen. Ist die Konferenz ohne ihn beschlussfähig?",
    options: [
      "Ja, wenn zumindest die Hälfte der Prüfer anwesend ist.",
      "Das Gesetz regelt keine Beschlussfähigkeit – du entscheidest als Vorsitzender, ob die Konferenz die Aufgaben ohne den fehlenden Prüfer festsetzen kann.",
      "Nein, alle bestellten Prüfer müssen anwesend sein.",
      "Ja, wenn der erkrankte Prüfer seine Aufgaben vorab eingereicht hat."
    ],
    correct: [1],
    explanation: "Das Gesetz schreibt keine bestimmte Beschlussfähigkeit vor. Der Schulleiter entscheidet im Einzelfall, ob die Konferenz ohne den fehlenden Prüfer die Aufgaben für dessen Gebiet festsetzen kann oder ob vertagt werden muss."
  },
  {
    id: 152,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein Prüfer möchte einen externen Experten (Universitätsprofessor) zur Prüferkonferenz einladen, „um die Qualität zu sichern”. Darfst du das zulassen?",
    options: [
      "Ja, du kannst als Vorsitzender Gäste ohne Stimmrecht zur Konferenz zulassen.",
      "Nein, die Prüferkonferenz ist ein geschlossenes Gremium der bestellten Prüfer.",
      "Ja, der Externe darf sogar mitstimmen, wenn er fachlich qualifiziert ist.",
      "Ja, aber nur wenn alle Prüfer zustimmen."
    ],
    correct: [0],
    explanation: "Der Schulleiter hat den Vorsitz und kann Gäste ohne Stimmrecht zulassen. Die Entscheidungsbefugnis bleibt aber bei den bestellten Prüfern."
  },
  {
    id: 153,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein Prüfer stellt die Aufgaben für sein Fach allein fertig, bevor die Konferenz stattfindet. In der Konferenz sagt er: „Hier sind meine Aufgaben, wir müssen sie nur noch absegnen.” Ist das Vorgehen korrekt?",
    options: [
      "Ja, die Konferenz dient nur der formalen Bestätigung der fachlichen Vorarbeit.",
      "Nein, die Aufgaben müssen in der Konferenz gemeinsam festgesetzt werden – nicht nur abgesegnet.",
      "Ja, wenn der Schulleiter die Vorab-Erstellung genehmigt hat.",
      "Ja, wenn der Prüfer der Fachkoordinator ist."
    ],
    correct: [1],
    explanation: "Die Konferenz dient der gemeinsamen Festsetzung der Aufgaben. Ein reines „Absegnen” von Einzelarbeit entspricht nicht dem Zweck der gemeinsamen Beschlussfassung."
  },
  {
    id: 154,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein Bewerber behauptet nach der Prüfung, die Aufgaben seien unfair gewesen. Du willst den Ablauf der Konferenz nachweisen. Gibt es eine Aufzeichnungspflicht?",
    options: [
      "Nein, die Prüferkonferenz ist vertraulich und wird nicht protokolliert.",
      "Ja, über die Festsetzung der Aufgaben sollte zur Nachvollziehbarkeit ein Protokoll geführt werden, auch wenn das Gesetz es nicht ausdrücklich vorschreibt.",
      "Nein, nur das Prüfungsergebnis wird dokumentiert.",
      "Ja, aber nur wenn ein Prüfer ein Protokoll verlangt."
    ],
    correct: [1],
    explanation: "Eine schriftliche Dokumentation der Aufgabenfestsetzung ist aus Gründen der Nachvollziehbarkeit dringend zu empfehlen, auch wenn §7 keine ausdrückliche Protokollierungspflicht vorsieht."
  },
  {
    id: 155,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "In der Prüferkonferenz sind sich zwei Prüfer über den Schwierigkeitsgrad uneinig. Du als Schulleiter sollst vermitteln. Welcher Maßstab hilft dir?",
    options: [
      "Die Aufgaben müssen dem Lehrplan jener Schulstufe entsprechen, deren erfolgreicher Besuch Mindestvoraussetzung ist.",
      "Jeder Prüfer entscheidet für sein Gebiet autonom über den Schwierigkeitsgrad.",
      "Der Schulleiter bestimmt den Schwierigkeitsgrad nach eigenem Ermessen.",
      "Die Aufgaben des Vorjahres sind der verbindliche Maßstab."
    ],
    correct: [0],
    explanation: "Der Lehrplan der Voraussetzungsstufe (z. B. 4. Klasse VS für AHS) ist der gesetzlich vorgegebene Maßstab für die Angemessenheit der Aufgaben."
  },
  {
    id: 156,
    section: 3,
    paragraph: "§7",
    type: "single",
    question: "Ein Prüfer weigert sich, in der Konferenz seine Aufgaben offenzulegen, weil er „Angst vor Weitergabe” hat. Darfst du als Vorsitzender auf Offenlegung bestehen?",
    options: [
      "Nein, der Prüfer kann seine Aufgaben bis zur Prüfung geheim halten.",
      "Ja, die Aufgaben müssen in der Konferenz gemeinsam festgesetzt werden – dafür müssen sie offengelegt werden.",
      "Nein, aber der Prüfer muss sie zumindest dem Schulleiter zeigen.",
      "Ja, aber der Prüfer muss sie in einem versiegelten Umschlag hinterlegen."
    ],
    correct: [1],
    explanation: "Die Festsetzung in der Konferenz setzt die Offenlegung der Aufgaben voraus. Ein Prüfer kann sich nicht unter Berufung auf Geheimhaltung der gemeinsamen Beschlussfassung entziehen."
  }
);

// ===================================================================
//  Paragraph-Registry: Metadaten für die Startseiten-Kacheln
// ===================================================================
window.PARAGRAPH_REGISTRY = (function () {
  const titles = {
    "§1": "Geltungsbereich",
    "§5": "Aufnahmsverfahren",
    "§6": "Aufnahms- und Eignungsprüfungen – Grundlagen",
    "§7": "Durchführung der Prüfungen"
  };
  const reg = {};
  window.QUESTIONS.forEach(function (q) {
    if (!q.paragraph) return;
    if (!reg[q.paragraph]) {
      reg[q.paragraph] = {
        title: titles[q.paragraph] || "",
        count: 0,
        section: q.section
      };
    }
    reg[q.paragraph].count++;
  });
  return reg;
})();
