/**
 * SchUG-Quiz – App-Controller
 *
 * Verbindet Quiz-Engine mit dem DOM: Screen-Wechsel, Event-Handler,
 * Rendering aller Ansichten.
 */
(function () {

  'use strict';

  // ---- Referenzen ----
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const engine = new QuizEngine();

  // Screens
  const screens = {
    start:  $('#screen-start'),
    quiz:   $('#screen-quiz'),
    result: $('#screen-result')
  };

  // ---- Init ----
  function init() {
    populateSectionSelect();
    bindEvents();
    showScreen('start');
  }

  // ---- Section-Select befüllen ----
  function populateSectionSelect() {
    const sections = getSections();
    const sel = $('#section-select');
    sel.innerHTML = '<option value="all">Alle Abschnitte</option>';
    sections.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.number;
      opt.textContent = `${s.number}. ${s.title}`;
      sel.appendChild(opt);
    });
  }

  /** Ermittelt die verfügbaren Abschnitte aus dem Fragenkatalog. */
  function getSections() {
    const map = {};
    window.QUESTIONS.forEach(q => {
      if (!map[q.section]) {
        map[q.section] = { number: q.section, title: q.sectionTitle || `Abschnitt ${q.section}` };
      }
    });
    return Object.values(map).sort((a, b) => a.number - b.number);
  }

  // ---- Screen-Wechsel ----
  function showScreen(name) {
    Object.keys(screens).forEach(key => {
      screens[key].classList.toggle('active', key === name);
    });
    // Scroll to top on screen change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ---- Event-Bindung ----
  function bindEvents() {
    // Start
    $('#btn-start').addEventListener('click', startQuiz);

    // Quiz
    $('#btn-submit').addEventListener('click', handleSubmit);
    $('#btn-next').addEventListener('click', handleNext);
    $('#btn-finish').addEventListener('click', finishQuiz);
    $('#btn-restart-from-quiz').addEventListener('click', () => showScreen('start'));

    // Immediate feedback bei Single Choice: Klick auf Radio → sofort auswerten
    $('#options-container').addEventListener('change', (e) => {
      if (e.target.matches('input[type="radio"]') && !engine.currentAnswer?.revealed) {
        handleSubmit();
      }
    });

    // Result
    $('#btn-review').addEventListener('click', renderReview);
    $('#btn-review-close').addEventListener('click', () => {
      $('#review-container').style.display = 'none';
    });
    $('#btn-retry-wrong').addEventListener('click', retryWrong);
    $('#btn-restart').addEventListener('click', () => showScreen('start'));
  }

  // ---- Quiz starten ----
  function startQuiz() {
    const section = $('#section-select').value;
    const shuffle = $('#shuffle-toggle').checked;
    const count = parseInt($('#question-count').value, 10);
    const recycle = $('#recycle-toggle').checked;
    const errorEl = $('#start-error');

    try {
      const numQuestions = engine.init(window.QUESTIONS, {
        section, shuffle, count, recycle
      });
      errorEl.style.display = 'none';
      showScreen('quiz');
      renderQuestion();
    } catch (e) {
      errorEl.textContent = e.message;
      errorEl.style.display = 'block';
    }
  }

  // ---- Frage rendern ----
  function renderQuestion() {
    const q = engine.currentQuestion;
    const answer = engine.currentAnswer;
    const progress = engine.progress;

    if (!q) {
      finishQuiz();
      return;
    }

    // Header
    $('#section-label').textContent = q.paragraph
      ? `${q.section}. Abschnitt · ${q.paragraph}`
      : `${q.section}. Abschnitt`;
    let progressText = `Frage ${progress.current} / ${progress.total}`;
    if (progress.recycledCount > 0) {
      progressText += ` (+${progress.recycledCount} wiederholt)`;
    }
    $('#progress-text').textContent = progressText;
    $('#score-display').textContent = `${engine.score} / ${engine.originalTotal}`;

    // Progress bar: dynamisch – steigt mit jeder absolvierten Frage
    const pct = ((progress.current - 1) / progress.total) * 100;
    $('#progress-fill').style.width = `${pct}%`;

    // Question
    $('#question-number').textContent = `Frage ${progress.current}`;
    $('#question-text').textContent = q.question;

    // Options
    const container = $('#options-container');
    container.innerHTML = '';
    const typeLabel = q.type === 'multiple'
      ? '<p class="options-hint">(Mehrfachauswahl möglich)</p>'
      : '';
    container.insertAdjacentHTML('beforeend', typeLabel);

    q.options.forEach((optText, idx) => {
      const isChecked = answer.revealed && answer.selected.includes(idx);
      const div = document.createElement('div');
      div.className = 'option';

      const input = document.createElement('input');
      input.type = q.type === 'single' ? 'radio' : 'checkbox';
      input.name = 'quiz-option';
      input.value = idx;
      if (isChecked) input.checked = true;
      if (answer.revealed) input.disabled = true;

      const textSpan = document.createElement('span');
      textSpan.className = 'option-text';
      textSpan.textContent = optText;

      // Label wrapper → label::before erzeugt den Indikator (Kreis/Quadrat)
      const label = document.createElement('label');
      label.className = 'option-label';
      label.appendChild(input);
      label.appendChild(textSpan);

      div.appendChild(label);

      // States setzen falls bereits beantwortet
      if (answer.revealed) {
        if (q.correct.includes(idx)) {
          div.classList.add('option-correct');
        } else if (answer.selected.includes(idx)) {
          div.classList.add('option-wrong');
        }
        div.classList.add('option-disabled');
      }

      container.appendChild(div);
    });

    // Feedback anzeigen falls bereits beantwortet
    if (answer.revealed) {
      showFeedback(answer.correct, q.explanation);
    } else {
      hideFeedback();
    }

    // Buttons
    updateButtons(answer.revealed);
  }

  // ---- Buttons umschalten ----
  function updateButtons(revealed) {
    const q = engine.currentQuestion;
    const submitBtn  = $('#btn-submit');
    const nextBtn    = $('#btn-next');
    const finishBtn  = $('#btn-finish');
    const restartBtn = $('#btn-restart-from-quiz');

    // Single Choice: sofortiges Feedback beim Klick → kein Submit-Button nötig
    if (q && q.type === 'single') {
      submitBtn.style.display = 'none';
    } else {
      submitBtn.style.display = revealed ? 'none' : 'inline-block';
    }

    restartBtn.style.display = revealed ? 'none' : 'inline-block';

    if (revealed) {
      if (engine.isLastQuestion) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'inline-block';
      } else {
        nextBtn.style.display = 'inline-block';
        finishBtn.style.display = 'none';
      }
    } else {
      nextBtn.style.display = 'none';
      finishBtn.style.display = 'none';
    }
  }

  // ---- Antwort einreichen ----
  function handleSubmit() {
    const inputs = $$('input[name="quiz-option"]:checked');
    const selected = Array.from(inputs).map(inp => parseInt(inp.value, 10));

    if (selected.length === 0) return; // nichts ausgewählt

    const result = engine.submit(selected);
    renderQuestion(); // re-rendert mit Feedback
  }

  // ---- Nächste Frage ----
  function handleNext() {
    engine.next();
    renderQuestion();
  }

  // ---- Quiz beenden ----
  function finishQuiz() {
    showScreen('result');
    renderResults();
  }

  // ---- Feedback anzeigen/verstecken ----
  function showFeedback(correct, explanation) {
    const area = $('#feedback-area');
    const icon = $('#feedback-icon');
    const text = $('#feedback-text');
    const explArea = $('#explanation-area');
    const explText = $('#explanation-text');

    if (correct) {
      icon.textContent = '✓';
      icon.style.color = '#2e7d32';
      text.textContent = 'Richtig!';
      text.style.color = '#2e7d32';
    } else {
      icon.textContent = '✗';
      icon.style.color = '#c62828';
      text.textContent = 'Leider falsch.';
      text.style.color = '#c62828';
    }

    explText.textContent = explanation;
    area.style.display = 'flex';
    explArea.style.display = 'block';
  }

  function hideFeedback() {
    $('#feedback-area').style.display = 'none';
    $('#explanation-area').style.display = 'none';
  }

  // ---- Ergebnisse rendern ----
  function renderResults() {
    const results = engine.getResults();

    $('#result-score').textContent = `${results.score} / ${results.total}`;
    let percentText = `${results.percent} %`;
    if (results.recycledCount > 0) {
      percentText += ` (${results.submissionsTotal} Versuche gesamt)`;
    }
    $('#result-percent').textContent = percentText;
    $('#result-grade').textContent = results.grade;

    // Stat-Zahlen
    const wrongCount = results.total - results.score;
    $('#stat-correct').textContent = results.score;
    $('#stat-wrong').textContent = results.submissionsTotal - results.score;
    $('#stat-total').textContent = results.submissionsTotal;

    // Icon abhängig vom Ergebnis
    const iconEl = $('#result-icon');
    if (results.percent >= 90) iconEl.textContent = '🏆';
    else if (results.percent >= 75) iconEl.textContent = '👍';
    else if (results.percent >= 50) iconEl.textContent = '👌';
    else if (results.percent >= 25) iconEl.textContent = '📖';
    else iconEl.textContent = '📚';

    // Review-Container verstecken
    $('#review-container').style.display = 'none';

    // Retry-Wrong-Button nur zeigen wenn es falsche gibt
    const uniqueWrong = results.total - results.score;
    $('#btn-retry-wrong').style.display = uniqueWrong > 0 ? 'inline-block' : 'none';
  }

  // ---- Review ----
  function renderReview() {
    const results = engine.getResults();
    const container = $('#review-list');
    container.innerHTML = '';

    results.questions.forEach((q, i) => {
      const ans = results.answers[i];
      const isCorrect = ans.correct;

      const div = document.createElement('div');
      div.className = 'review-item';

      // Header
      const header = document.createElement('div');
      header.className = 'review-question-header';
      header.innerHTML = `
        <span>${q.section}. Abschnitt · ${q.paragraph || ''} · Frage ${i + 1}</span>
        <span>—</span>
        <span>${isCorrect ? '✓ Richtig' : '✗ Falsch'}</span>
      `;
      div.appendChild(header);

      // Question text
      const qText = document.createElement('p');
      qText.className = 'review-question-text';
      qText.textContent = q.question;
      div.appendChild(qText);

      // User's answer
      const userLabel = document.createElement('div');
      userLabel.className = `review-answer review-answer--user ${isCorrect ? 'review-answer--correct' : 'review-answer--wrong'}`;
      userLabel.innerHTML = `<span class="review-answer-label">Deine Antwort:</span> ${ans.selected.map(idx => q.options[idx]).join(', ') || '(keine)'}`;
      div.appendChild(userLabel);

      // If wrong, show correct answer
      if (!isCorrect) {
        const correctDiv = document.createElement('div');
        correctDiv.className = 'review-answer review-answer--correct-answer';
        correctDiv.innerHTML = `<span class="review-answer-label">Richtige Antwort:</span> ${q.correct.map(idx => q.options[idx]).join(', ')}`;
        div.appendChild(correctDiv);
      }

      // Explanation
      const expl = document.createElement('div');
      expl.className = 'review-explanation';
      expl.innerHTML = `<strong>Erklärung:</strong> ${q.explanation}`;
      div.appendChild(expl);

      container.appendChild(div);
    });

    $('#review-container').style.display = 'block';
    $('#review-container').scrollIntoView({ behavior: 'smooth' });
  }

  // ---- Nur falsche wiederholen ----
  function retryWrong() {
    const wrong = engine.getWrongResults();
    if (wrong.length === 0) {
      $('#btn-retry-wrong').style.display = 'none';
      return;
    }

    // Temporäres Fragen-Array aus falsch beantworteten Fragen bauen
    const wrongQuestions = wrong.map(w => w.question);

    // Engine neu initialisieren
    const allQuestions = window.QUESTIONS;
    const section = $('#section-select').value;
    const shuffle = false; // originale Reihenfolge beibehalten

    // Wir verwenden die falschen Fragen direkt
    engine.reset();
    engine.sessionQuestions = [...wrongQuestions];
    engine.userAnswers = wrongQuestions.map(() => ({
      selected: [],
      correct: false,
      revealed: false
    }));
    engine.total = wrongQuestions.length;
    engine.currentIndex = 0;

    showScreen('quiz');
    renderQuestion();
  }

  // ---- DOM-Ready ----
  document.addEventListener('DOMContentLoaded', init);

})();
