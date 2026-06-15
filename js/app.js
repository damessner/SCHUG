/**
 * SchUG-Quiz – App-Controller
 *
 * Verbindet Quiz-Engine mit dem DOM: Screen-Wechsel, Event-Handler,
 * Rendering aller Ansichten, Paragraph-Blöcke und Fortschrittsanzeige.
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
    renderParagraphGrid();
    bindEvents();
    showScreen('start');
  }

  // ---- Paragraph-Blöcke rendern ----
  function renderParagraphGrid() {
    const grid = $('#paragraph-grid');
    grid.innerHTML = '';

    // "Alle" Karte als erstes
    const allCard = createParagraphCard(null, 'Alle Paragraphen', 'Alle verfügbaren Fragen');
    grid.appendChild(allCard);

    // Paragraphen-Karten
    const registry = window.PARAGRAPH_REGISTRY || {};
    const paragraphs = Object.keys(registry).sort((a, b) => {
      const na = parseInt(a.replace(/\D/g, ''), 10);
      const nb = parseInt(b.replace(/\D/g, ''), 10);
      return na - nb;
    });

    paragraphs.forEach(key => {
      const p = registry[key];
      if (p.count === 0) return;
      const card = createParagraphCard(key, `${key} – ${p.title}`, `${p.count} Fragen · ${p.section}. Abschnitt`);
      grid.appendChild(card);
    });
  }

  function createParagraphCard(paragraph, heading, desc) {
    const card = document.createElement('button');
    card.className = 'paragraph-card';
    card.dataset.paragraph = paragraph || 'all';

    const title = document.createElement('div');
    title.className = 'paragraph-card-title';
    title.textContent = heading;
    card.appendChild(title);

    const descEl = document.createElement('div');
    descEl.className = 'paragraph-card-desc';
    descEl.textContent = desc;
    card.appendChild(descEl);

    // Fortschritt anzeigen
    if (paragraph) {
      const progress = QuizEngine.getParagraphProgress(paragraph);
      const pct = progress.total > 0 ? Math.round((progress.correct / progress.total) * 100) : 0;
      const barContainer = document.createElement('div');
      barContainer.className = 'paragraph-card-progress';

      const barBg = document.createElement('div');
      barBg.className = 'paragraph-card-progress-bar';

      const bar = document.createElement('div');
      bar.className = 'paragraph-card-progress-fill';
      bar.style.width = `${pct}%`;
      barBg.appendChild(bar);
      barContainer.appendChild(barBg);

      const label = document.createElement('span');
      label.className = 'paragraph-card-progress-label';
      label.textContent = progress.total > 0
        ? `${progress.correct}/${progress.total} (${pct}%)`
        : 'Noch nicht bearbeitet';
      if (progress.total === 0) label.textContent = '0/0';
      barContainer.appendChild(label);

      card.appendChild(barContainer);
    }

    card.addEventListener('click', () => startQuiz(paragraph));
    return card;
  }

  // ---- Screen-Wechsel ----
  function showScreen(name) {
    Object.keys(screens).forEach(key => {
      screens[key].classList.toggle('active', key === name);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ---- Event-Bindung ----
  function bindEvents() {
    // Globaler "Quiz starten"-Button – startet Quiz über alle Paragraphen
    $('#btn-start').addEventListener('click', () => startQuiz());

    // Quiz
    $('#btn-submit').addEventListener('click', handleSubmit);
    $('#btn-next').addEventListener('click', handleNext);
    $('#btn-finish').addEventListener('click', finishQuiz);
    $('#btn-restart-from-quiz').addEventListener('click', () => showScreen('start'));

    // Immediate feedback bei Single Choice
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
  function startQuiz(paragraph = null) {
    const shuffle = $('#shuffle-toggle').checked;
    const count = parseInt($('#question-count').value, 10);
    const recycle = $('#recycle-toggle').checked;
    const errorEl = $('#start-error');

    try {
      const numQuestions = engine.init(window.QUESTIONS, {
        paragraph,
        shuffle,
        count: paragraph ? 0 : count, // bei Paragraph-Auswahl alle Fragen
        recycle
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

    // Progress bar
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

      const label = document.createElement('label');
      label.className = 'option-label';
      label.appendChild(input);
      label.appendChild(textSpan);

      div.appendChild(label);

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

    // Feedback
    if (answer.revealed) {
      showFeedback(answer.correct, q.explanation);
    } else {
      hideFeedback();
    }

    updateButtons(answer.revealed);
  }

  // ---- Buttons ----
  function updateButtons(revealed) {
    const q = engine.currentQuestion;
    const submitBtn  = $('#btn-submit');
    const nextBtn    = $('#btn-next');
    const finishBtn  = $('#btn-finish');
    const restartBtn = $('#btn-restart-from-quiz');

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

  // ---- Antwort einreichen + Fortschritt speichern ----
  function handleSubmit() {
    const inputs = $$('input[name="quiz-option"]:checked');
    const selected = Array.from(inputs).map(inp => parseInt(inp.value, 10));

    if (selected.length === 0) return;

    const result = engine.submit(selected);

    // Fortschritt persistieren
    const q = engine.currentQuestion;
    if (q && q.paragraph) {
      QuizEngine.saveAnswer(q.paragraph, q.id, result.correct);
    }

    renderQuestion();
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

  // ---- Feedback ----
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

  // ---- Ergebnisse ----
  function renderResults() {
    const results = engine.getResults();

    $('#result-score').textContent = `${results.score} / ${results.total}`;
    let percentText = `${results.percent} %`;
    if (results.recycledCount > 0) {
      percentText += ` (${results.submissionsTotal} Versuche gesamt)`;
    }
    $('#result-percent').textContent = percentText;
    $('#result-grade').textContent = results.grade;

    const wrongCount = results.total - results.score;
    $('#stat-correct').textContent = results.score;
    $('#stat-wrong').textContent = results.submissionsTotal - results.score;
    $('#stat-total').textContent = results.submissionsTotal;

    const iconEl = $('#result-icon');
    if (results.percent >= 90) iconEl.textContent = '🏆';
    else if (results.percent >= 75) iconEl.textContent = '👍';
    else if (results.percent >= 50) iconEl.textContent = '👌';
    else if (results.percent >= 25) iconEl.textContent = '📖';
    else iconEl.textContent = '📚';

    $('#review-container').style.display = 'none';

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

      const header = document.createElement('div');
      header.className = 'review-question-header';
      header.innerHTML = `
        <span>${q.section}. Abschnitt · ${q.paragraph || ''} · Frage ${i + 1}</span>
        <span>—</span>
        <span>${isCorrect ? '✓ Richtig' : '✗ Falsch'}</span>
      `;
      div.appendChild(header);

      const qText = document.createElement('p');
      qText.className = 'review-question-text';
      qText.textContent = q.question;
      div.appendChild(qText);

      const userLabel = document.createElement('div');
      userLabel.className = `review-answer review-answer--user ${isCorrect ? 'review-answer--correct' : 'review-answer--wrong'}`;
      userLabel.innerHTML = `<span class="review-answer-label">Deine Antwort:</span> ${ans.selected.map(idx => q.options[idx]).join(', ') || '(keine)'}`;
      div.appendChild(userLabel);

      if (!isCorrect) {
        const correctDiv = document.createElement('div');
        correctDiv.className = 'review-answer review-answer--correct-answer';
        correctDiv.innerHTML = `<span class="review-answer-label">Richtige Antwort:</span> ${q.correct.map(idx => q.options[idx]).join(', ')}`;
        div.appendChild(correctDiv);
      }

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

    const wrongQuestions = wrong.map(w => w.question);

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