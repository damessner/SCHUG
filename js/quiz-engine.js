/**
 * SchUG-Quiz – Quiz-Engine
 *
 * Kapselt die gesamte Quiz-Logik: Fragenauswahl, Antwortprüfung,
 * Bewertung und Fortschritt.
 */
class QuizEngine {

  constructor() {
    this.reset();
  }

  /** Setzt den gesamten Zustand zurück. */
  reset() {
    this.sessionQuestions = [];   // Fragen für diese Quiz-Runde
    this.currentIndex = 0;        // Index in sessionQuestions
    this.userAnswers = [];        // { selected: number[], correct: boolean, revealed: boolean } pro Frage
    this.score = 0;
    this.total = 0;
    this.recycleMode = false;     // falsche Fragen ans Ende der Queue?
    this.recycledCount = 0;       // wie oft wurde bereits recycelt
    this.finished = false;
  }

  /**
   * Initialisiert eine neue Quiz-Runde.
   * @param {object[]} allQuestions  – kompletter Fragenkatalog
   * @param {object}   opts
   * @param {number|string} opts.section – Abschnittsnummer oder "all"
   * @param {boolean}  opts.shuffle – zufällige Reihenfolge?
   * @param {number}   opts.count   – max. Fragen (0 = alle)
   * @param {boolean}  opts.recycle – falsche Fragen ans Ende der Queue?
   * @returns {number} Anzahl der Fragen in der Session
   */
  init(allQuestions, opts = {}) {
    this.reset();

    const { section = 'all', paragraph = null, shuffle = true, count = 0, recycle = false } = opts;
    this.recycleMode = recycle;

    // Filtern
    let pool = [...allQuestions];
    if (paragraph) {
      pool = pool.filter(q => q.paragraph === paragraph);
    } else if (section !== 'all') {
      pool = pool.filter(q => q.section === Number(section));
    }

    if (pool.length === 0) {
      throw new Error(`Keine Fragen für Abschnitt "${section}" gefunden.`);
    }

    // Mischen
    if (shuffle) {
      pool = this._shuffle(pool);
    }

    // Begrenzen
    if (count > 0 && count < pool.length) {
      pool = pool.slice(0, count);
    }

    this.sessionQuestions = pool;
    this.userAnswers = pool.map(() => ({
      selected: [],
      correct: false,
      revealed: false
    }));
    this.total = pool.length;

    return pool.length;
  }

  // ---- Navigation ----

  get currentQuestion() {
    return this.sessionQuestions[this.currentIndex] || null;
  }

  get currentAnswer() {
    return this.userAnswers[this.currentIndex] || null;
  }

  get progress() {
    return {
      current: this.currentIndex + 1,
      total: this.total,
      recycledCount: this.recycledCount
    };
  }

  get isLastQuestion() {
    return this.currentIndex >= this.total - 1;
  }

  get originalTotal() {
    return this.total - this.recycledCount;
  }

  get isFirstQuestion() {
    return this.currentIndex === 0;
  }

  /** Wechselt zur nächsten Frage. Gibt false wenn keine weitere. */
  next() {
    if (this.isLastQuestion) return false;
    this.currentIndex++;
    return true;
  }

  /** Wechselt zur vorherigen Frage. Gibt false wenn bei 0. */
  prev() {
    if (this.isFirstQuestion) return false;
    this.currentIndex--;
    return true;
  }

  // ---- Antworten ----

  /**
   * Reicht eine Antwort ein.
   * @param {number[]} selected – Indices der gewählten Optionen
   * @returns {{ correct: boolean, correctIndices: number[], explanation: string, type: string, recycled: boolean }}
   */
  submit(selected) {
    const q = this.currentQuestion;
    const answer = this.currentAnswer;

    answer.selected = [...selected];
    answer.revealed = true;

    const correct = this._isCorrect(selected, q.correct, q.type);
    answer.correct = correct;

    if (correct) {
      this.score++;
    } else if (this.recycleMode) {
      // Falsche Frage ans Ende der Queue – neu lernen!
      this.sessionQuestions.push(q);
      this.userAnswers.push({
        selected: [],
        correct: false,
        revealed: false
      });
      this.total = this.sessionQuestions.length;
      this.recycledCount++;
    }

    return {
      correct,
      correctIndices: q.correct,
      explanation: q.explanation,
      type: q.type,
      recycled: !correct && this.recycleMode
    };
  }

  /**
   * Prüft ob eine Frage bereits beantwortet wurde.
   */
  isRevealed(index = this.currentIndex) {
    return this.userAnswers[index]?.revealed ?? false;
  }

  /**
   * Holt die gespeicherte Antwort für eine Frage.
   */
  getAnswer(index = this.currentIndex) {
    return this.userAnswers[index] || null;
  }

  // ---- Ergebnisse ----

  /**
   * @returns {{ score: number, total: number, percent: number, grade: string,
   *            answers: object[], questions: object[] }}
   */
  getResults() {
    const baseTotal = this.originalTotal || this.total;
    const percent = baseTotal > 0
      ? Math.round((this.score / baseTotal) * 100)
      : 0;

    return {
      score: this.score,
      total: baseTotal,
      submissionsTotal: this.total,
      recycledCount: this.recycledCount,
      percent,
      grade: this._grade(percent),
      answers: this.userAnswers,
      questions: this.sessionQuestions
    };
  }

  /**
   * Gibt nur die falsch beantworteten Fragen + Antworten zurück.
   */
  getWrongResults() {
    const results = this.getResults();
    const wrong = [];
    for (let i = 0; i < results.questions.length; i++) {
      if (!results.answers[i].correct) {
        wrong.push({
          question: results.questions[i],
          answer: results.answers[i]
        });
      }
    }
    return wrong;
  }

  // ---- Privat ----

  _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  _isCorrect(selected, correct, type) {
    if (type === 'single') {
      return selected.length === 1 && selected[0] === correct[0];
    }
    // multiple: alle richtigen ausgewählt, keine falschen
    if (selected.length !== correct.length) return false;
    const sortedSel = [...selected].sort();
    const sortedCor = [...correct].sort();
    return sortedSel.every((v, i) => v === sortedCor[i]);
  }

  _grade(percent) {
    if (percent >= 90) return 'Sehr gut! 🏆';
    if (percent >= 75) return 'Gut 👍';
    if (percent >= 50) return 'Befriedigend 👌';
    if (percent >= 25) return 'Genügend 📖';
    return 'Du solltest nochmal üben 📚';
  }

  // ---- Persistierter Fortschritt (localStorage) ----

  /**
   * Lädt den gespeicherten Fortschritt.
   * @returns {object} { §1: { correct: Set<id>, wrong: Set<id> }, … }
   */
  static loadProgress() {
    try {
      const raw = localStorage.getItem('schug-progress');
      if (!raw) return {};
      const data = JSON.parse(raw);
      // Konvertiere Arrays zurück zu Sets
      for (const key of Object.keys(data)) {
        data[key].correct = new Set(data[key].correct || []);
        data[key].wrong = new Set(data[key].wrong || []);
      }
      return data;
    } catch {
      return {};
    }
  }

  /**
   * Speichert eine beantwortete Frage im Fortschritt.
   * @param {string} paragraph  – z.B. "§5"
   * @param {number} questionId – Frage-ID
   * @param {boolean} correct   – richtig?
   */
  static saveAnswer(paragraph, questionId, correct) {
    const progress = QuizEngine.loadProgress();
    if (!progress[paragraph]) {
      progress[paragraph] = { correct: new Set(), wrong: new Set() };
    }
    // Aus beiden Sets entfernen (falls schon anderswo gespeichert)
    progress[paragraph].correct.delete(questionId);
    progress[paragraph].wrong.delete(questionId);
    // Ins richtige Set eintragen
    if (correct) {
      progress[paragraph].correct.add(questionId);
    } else {
      progress[paragraph].wrong.add(questionId);
    }
    // Für JSON serialisierbar machen (Set → Array)
    const store = {};
    for (const key of Object.keys(progress)) {
      store[key] = {
        correct: [...progress[key].correct],
        wrong: [...progress[key].wrong]
      };
    }
    localStorage.setItem('schug-progress', JSON.stringify(store));
  }

  /**
   * Gibt den Fortschritt für einen Paragraphen zurück.
   * @param {string} paragraph
   * @returns {{ correct: number, wrong: number, total: number }}
   */
  static getParagraphProgress(paragraph) {
    const progress = QuizEngine.loadProgress();
    const p = progress[paragraph];
    if (!p) return { correct: 0, wrong: 0, total: 0 };
    return {
      correct: p.correct.size,
      wrong: p.wrong.size,
      total: p.correct.size + p.wrong.size
    };
  }

  /**
   * Gibt den Fortschritt für alle Paragraphen zurück.
   * @returns {object} { "§1": { correct, wrong, total }, … }
   */
  static getAllProgress() {
    const progress = QuizEngine.loadProgress();
    const result = {};
    for (const key of Object.keys(progress)) {
      result[key] = {
        correct: progress[key].correct.size,
        wrong: progress[key].wrong.size,
        total: progress[key].correct.size + progress[key].wrong.size
      };
    }
    return result;
  }
}

// Export als global
window.QuizEngine = QuizEngine;
