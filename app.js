/**
 * Clean Minimalist Quiz Application (120 Questions)
 * Developed by: นายพีรพัฒน์ วิไชยวงค์ (รหัส 69030188)
 * Features:
 * - Home Session Selection (1-6 & All)
 * - 2-step Quiz Flow (Select -> Check -> Lock & Reveal)
 * - Safe HTML Escaping (Fixes unescaped <tag> options like <class 'int'>, <URL>, etc.)
 * - Detailed Answer Review (Check correct / wrong answers with explanations)
 */

// Application State
const state = {
  view: 'home', // 'home' | 'quiz' | 'result'
  currentCategory: 'all',
  currentQuestionIndex: 0,
  questions: [], // filtered questions based on chosen category
  answers: {}, // questionId -> { selected: "ก", checked: boolean, isCorrect: boolean }
  reviewFilter: 'all' // 'all' | 'correct' | 'wrong'
};

// Safe HTML Escaping Helper (Fixes missing/hidden text caused by < > characters)
function escapeHtml(text) {
  if (typeof text !== 'string') return text || '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// DOM References
const dom = {
  homeSection: document.getElementById('home-section'),
  quizSection: document.getElementById('quiz-section'),
  resultSection: document.getElementById('result-section'),
  
  navHomeBtn: document.getElementById('nav-home-btn'),
  brandHomeBtn: document.getElementById('brand-home-btn'),
  btnGoHome: document.getElementById('btn-go-home'),

  categoryTag: document.getElementById('category-tag'),
  qCounter: document.getElementById('q-counter'),
  scoreCorrect: document.getElementById('score-correct'),
  scoreWrong: document.getElementById('score-wrong'),
  progressBarFill: document.getElementById('progress-bar-fill'),

  qBadge: document.getElementById('q-badge'),
  questionText: document.getElementById('question-text'),
  choicesContainer: document.getElementById('choices-container'),

  explanationBox: document.getElementById('explanation-box'),
  expHeader: document.getElementById('exp-header'),
  expText: document.getElementById('exp-text'),

  prevBtn: document.getElementById('prev-btn'),
  checkBtn: document.getElementById('check-btn'),
  nextBtn: document.getElementById('next-btn'),

  paletteGrid: document.getElementById('palette-grid'),

  // Review section
  reviewList: document.getElementById('review-list'),
  filterAll: document.getElementById('filter-all'),
  filterCorrect: document.getElementById('filter-correct'),
  filterWrong: document.getElementById('filter-wrong'),
  countAll: document.getElementById('count-all'),
  countCorrect: document.getElementById('count-correct'),
  countWrong: document.getElementById('count-wrong')
};

// Category Titles Map
const categoryTitles = {
  all: 'ข้อสอบทั้งหมด (120 ข้อ)',
  cat1: 'Session 01: คอมพิวเตอร์ & SDLC (ข้อ 1-20)',
  cat2: 'Session 02: อัลกอริทึม & ผังงาน (ข้อ 21-40)',
  cat3: 'Session 03: ภาษา Python เบื้องต้น (ข้อ 41-60)',
  cat4: 'Session 04: ตัวแปร & ตัวดำเนินการ (ข้อ 61-80)',
  cat5: 'Session 05: Git พื้นฐาน (ข้อ 81-100)',
  cat6: 'Session 06: Git Branching & Remote (ข้อ 101-120)'
};

// Start Quiz with Selected Category
function startCategoryQuiz(catKey) {
  state.currentCategory = catKey;
  if (catKey === 'all') {
    state.questions = [...quizQuestions];
  } else {
    state.questions = quizQuestions.filter(q => q.categoryKey === catKey);
  }

  state.currentQuestionIndex = 0;
  state.answers = {};
  switchView('quiz');
  renderQuiz();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Switch Views (home | quiz | result)
function switchView(viewName) {
  state.view = viewName;

  dom.homeSection.style.display = viewName === 'home' ? 'block' : 'none';
  dom.quizSection.style.display = viewName === 'quiz' ? 'block' : 'none';
  dom.resultSection.style.display = viewName === 'result' ? 'block' : 'none';
  dom.navHomeBtn.style.display = viewName !== 'home' ? 'inline-flex' : 'none';
}

// Update Top Statistics (Correct / Wrong counts)
function updateStats() {
  let correct = 0;
  let wrong = 0;

  Object.values(state.answers).forEach(ans => {
    if (ans.checked) {
      if (ans.isCorrect) correct++;
      else wrong++;
    }
  });

  if (dom.scoreCorrect) dom.scoreCorrect.textContent = correct;
  if (dom.scoreWrong) dom.scoreWrong.textContent = wrong;
}

// Main Render Function for Quiz
function renderQuiz() {
  updateStats();

  const total = state.questions.length;
  const currentQ = state.questions[state.currentQuestionIndex];

  if (!currentQ) return;

  // Header Info
  dom.categoryTag.textContent = currentQ.category;
  dom.qCounter.textContent = `ข้อ ${state.currentQuestionIndex + 1} / ${total}`;
  dom.qBadge.textContent = currentQ.id;
  dom.questionText.textContent = currentQ.question;

  // Progress Bar Fill
  const progress = ((state.currentQuestionIndex + 1) / total) * 100;
  dom.progressBarFill.style.width = `${progress}%`;

  // Check state of current question
  const currentAnsState = state.answers[currentQ.id] || { selected: null, checked: false, isCorrect: false };

  // Render Choices List
  renderChoices(currentQ, currentAnsState);

  // Render Explanation Box
  if (currentAnsState.checked) {
    dom.explanationBox.style.display = 'block';
    dom.explanationBox.className = `explanation-box ${currentAnsState.isCorrect ? 'is-correct' : 'is-wrong'}`;
    
    if (currentAnsState.isCorrect) {
      dom.expHeader.className = 'exp-header is-correct';
      dom.expHeader.innerHTML = '✓ ตอบถูกต้อง!';
    } else {
      dom.expHeader.className = 'exp-header is-wrong';
      dom.expHeader.innerHTML = `✕ ตอบไม่ถูกต้อง (เฉลยข้อ ${escapeHtml(currentQ.answer)})`;
    }
    dom.expText.innerHTML = `💡 <strong>คำอธิบาย:</strong> ${escapeHtml(currentQ.explanation)}`;
  } else {
    dom.explanationBox.style.display = 'none';
  }

  // Buttons Logic:
  // 1. Prev Button
  dom.prevBtn.disabled = state.currentQuestionIndex === 0;

  // 2. Check / Next Buttons:
  if (!currentAnsState.checked) {
    dom.checkBtn.style.display = 'inline-flex';
    dom.checkBtn.disabled = !currentAnsState.selected;
    dom.nextBtn.style.display = 'none';
  } else {
    dom.checkBtn.style.display = 'none';
    dom.nextBtn.style.display = 'inline-flex';
    
    const isLastQuestion = state.currentQuestionIndex === total - 1;
    dom.nextBtn.textContent = isLastQuestion ? 'ดูผลคะแนน 📊' : 'ข้อถัดไป ➔';
  }

  // Render Palette Matrix
  renderPalette();
}

// Render Choices (with safe HTML escaping for <class>, <URL>, etc.)
function renderChoices(question, ansState) {
  dom.choicesContainer.innerHTML = '';

  question.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice-item';

    // State 1: Already Checked (Locked - Cannot change)
    if (ansState.checked) {
      btn.classList.add('locked');
      btn.disabled = true; // completely disable clicking after check

      if (opt.key === question.answer) {
        btn.classList.add('correct-answer');
      } else if (opt.key === ansState.selected) {
        btn.classList.add('wrong-selection');
      } else {
        btn.classList.add('dimmed');
      }
    } 
    // State 2: Selected, waiting for user to click Check Answer
    else if (ansState.selected === opt.key) {
      btn.classList.add('selected');
    }

    // Safely inject text using escapeHtml
    btn.innerHTML = `
      <div class="choice-key">${escapeHtml(opt.key)}</div>
      <div class="choice-text">${escapeHtml(opt.text)}</div>
      <div class="choice-status-icon">${opt.key === question.answer ? '✓' : '✕'}</div>
    `;

    // Click handler before checking
    btn.addEventListener('click', () => {
      if (ansState.checked) return; // Locked

      state.answers[question.id] = {
        selected: opt.key,
        checked: false,
        isCorrect: false
      };
      renderQuiz();
    });

    dom.choicesContainer.appendChild(btn);
  });
}

// Check Answer Trigger
function handleCheckAnswer() {
  const currentQ = state.questions[state.currentQuestionIndex];
  if (!currentQ) return;

  const ans = state.answers[currentQ.id];
  if (!ans || !ans.selected || ans.checked) return;

  const isCorrect = ans.selected === currentQ.answer;
  state.answers[currentQ.id] = {
    selected: ans.selected,
    checked: true,
    isCorrect: isCorrect
  };

  renderQuiz();
}

// Palette / Matrix Grid Render
function renderPalette() {
  dom.paletteGrid.innerHTML = '';

  state.questions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.textContent = q.id;

    if (idx === state.currentQuestionIndex) {
      btn.classList.add('current');
    }

    const ans = state.answers[q.id];
    if (ans) {
      if (ans.checked) {
        if (ans.isCorrect) btn.classList.add('is-correct');
        else btn.classList.add('is-wrong');
      } else if (ans.selected) {
        btn.classList.add('is-selected-uncheck');
      }
    }

    btn.addEventListener('click', () => {
      state.currentQuestionIndex = idx;
      renderQuiz();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    dom.paletteGrid.appendChild(btn);
  });
}

// Show Final Score Summary & Detailed Review
function showResultScreen() {
  switchView('result');

  let correctCount = 0;
  let wrongCount = 0;

  state.questions.forEach(q => {
    const ans = state.answers[q.id];
    if (ans && ans.checked) {
      if (ans.isCorrect) correctCount++;
      else wrongCount++;
    } else {
      wrongCount++; // unanswered counted as wrong
    }
  });

  const total = state.questions.length;
  const scorePercent = Math.round((correctCount / total) * 100);

  document.getElementById('res-score-num').textContent = `${correctCount}/${total}`;
  document.getElementById('res-score-pct').textContent = `คิดเป็น ${scorePercent}%`;
  
  const title = document.getElementById('res-msg-title');
  const desc = document.getElementById('res-msg-desc');

  if (scorePercent >= 80) {
    title.textContent = '🎉 ยอดเยี่ยมมาก! พร้อมสอบแน่นอน';
    desc.textContent = `คุณทำคะแนนใน ${categoryTitles[state.currentCategory] || 'แบบทดสอบ'} ได้ยอดเยี่ยม`;
  } else if (scorePercent >= 60) {
    title.textContent = '👍 ผ่านเกณฑ์ได้ดี!';
    desc.textContent = 'สามารถเลื่อนลงไปดูเฉลยข้อที่ตอบผิดด้านล่าง เพื่อทบทวนความแม่นยำครับ';
  } else {
    title.textContent = '📚 พยายามอีกนิด สู้ๆ นะครับ!';
    desc.textContent = 'สามารถเลื่อนดูเฉลยและคำอธิบายข้อที่ตอบผิดด้านล่างเพื่อศึกษาเพิ่มเติมครับ';
  }

  // Update Review Filter Counters
  if (dom.countAll) dom.countAll.textContent = total;
  if (dom.countCorrect) dom.countCorrect.textContent = correctCount;
  if (dom.countWrong) dom.countWrong.textContent = wrongCount;

  // Render Detailed Review List
  state.reviewFilter = 'all';
  updateReviewFilterButtons();
  renderReviewList();
}

// Update Active Review Filter Chip UI
function updateReviewFilterButtons() {
  if (dom.filterAll) dom.filterAll.classList.toggle('active', state.reviewFilter === 'all');
  if (dom.filterCorrect) dom.filterCorrect.classList.toggle('active', state.reviewFilter === 'correct');
  if (dom.filterWrong) dom.filterWrong.classList.toggle('active', state.reviewFilter === 'wrong');
}

// Render Detailed Review List Items
function renderReviewList() {
  if (!dom.reviewList) return;
  dom.reviewList.innerHTML = '';

  let list = state.questions;

  if (state.reviewFilter === 'correct') {
    list = list.filter(q => {
      const ans = state.answers[q.id];
      return ans && ans.checked && ans.isCorrect;
    });
  } else if (state.reviewFilter === 'wrong') {
    list = list.filter(q => {
      const ans = state.answers[q.id];
      return !ans || !ans.checked || !ans.isCorrect;
    });
  }

  if (list.length === 0) {
    dom.reviewList.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-muted); background: #ffffff; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        ไม่มีรายการข้อสอบในตัวกรองนี้
      </div>
    `;
    return;
  }

  list.forEach(q => {
    const ans = state.answers[q.id] || { selected: null, checked: false, isCorrect: false };
    const isCorrect = ans.checked && ans.isCorrect;
    
    // Find text for user choice & correct choice
    const userOption = q.options.find(o => o.key === ans.selected);
    const correctOption = q.options.find(o => o.key === q.answer);

    const userAnsText = userOption ? `${userOption.key}. ${userOption.text}` : 'ไม่ได้ตอบ';
    const correctAnsText = correctOption ? `${correctOption.key}. ${correctOption.text}` : '';

    const card = document.createElement('div');
    card.className = `review-item-card ${isCorrect ? 'is-correct' : 'is-wrong'}`;

    card.innerHTML = `
      <div class="review-item-top">
        <div class="review-q-title-group">
          <div class="review-q-badge">${q.id}</div>
          <div class="review-q-text">${escapeHtml(q.question)}</div>
        </div>
        <span class="review-status-tag ${isCorrect ? 'correct' : 'wrong'}">
          ${isCorrect ? '✓ ตอบถูกต้อง' : '✕ ตอบผิด'}
        </span>
      </div>

      <div class="review-answers-box">
        <div class="review-ans-row">
          <span class="review-ans-label">คำตอบของคุณ:</span>
          <span class="review-ans-value ${isCorrect ? 'correct' : 'wrong'}">${escapeHtml(userAnsText)}</span>
        </div>
        ${!isCorrect ? `
          <div class="review-ans-row">
            <span class="review-ans-label">เฉลยที่ถูกต้อง:</span>
            <span class="review-ans-value correct">${escapeHtml(correctAnsText)}</span>
          </div>
        ` : ''}
      </div>

      <div class="review-explanation">
        💡 <strong>คำอธิบาย:</strong> ${escapeHtml(q.explanation)}
      </div>
    `;

    dom.reviewList.appendChild(card);
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Category Cards Click (Home)
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const catKey = card.getAttribute('data-cat');
      startCategoryQuiz(catKey);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const catKey = card.getAttribute('data-cat');
        startCategoryQuiz(catKey);
      }
    });
  });

  // Return to Home Buttons
  if (dom.navHomeBtn) {
    dom.navHomeBtn.addEventListener('click', () => {
      switchView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (dom.brandHomeBtn) {
    dom.brandHomeBtn.addEventListener('click', () => {
      switchView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (dom.btnGoHome) {
    dom.btnGoHome.addEventListener('click', () => {
      switchView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Check Answer Button
  if (dom.checkBtn) {
    dom.checkBtn.addEventListener('click', handleCheckAnswer);
  }

  // Next Question Button
  if (dom.nextBtn) {
    dom.nextBtn.addEventListener('click', () => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
        renderQuiz();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        showResultScreen();
      }
    });
  }

  // Prev Question Button
  if (dom.prevBtn) {
    dom.prevBtn.addEventListener('click', () => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        renderQuiz();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Retake / Reset Current Category
  const retakeBtn = document.getElementById('btn-retake');
  if (retakeBtn) {
    retakeBtn.addEventListener('click', () => {
      startCategoryQuiz(state.currentCategory);
    });
  }

  // Review Filter Buttons
  if (dom.filterAll) {
    dom.filterAll.addEventListener('click', () => {
      state.reviewFilter = 'all';
      updateReviewFilterButtons();
      renderReviewList();
    });
  }

  if (dom.filterCorrect) {
    dom.filterCorrect.addEventListener('click', () => {
      state.reviewFilter = 'correct';
      updateReviewFilterButtons();
      renderReviewList();
    });
  }

  if (dom.filterWrong) {
    dom.filterWrong.addEventListener('click', () => {
      state.reviewFilter = 'wrong';
      updateReviewFilterButtons();
      renderReviewList();
    });
  }

  // Keyboard Shortcuts for Quiz:
  // 1-4 for ก-ง
  // Enter for Check or Next
  window.addEventListener('keydown', (e) => {
    if (state.view !== 'quiz') return;
    const currentQ = state.questions[state.currentQuestionIndex];
    if (!currentQ) return;
    const ansState = state.answers[currentQ.id] || { selected: null, checked: false };

    const keyMap = {
      '1': 'ก', 'a': 'ก', 'A': 'ก',
      '2': 'ข', 'b': 'ข', 'B': 'ข',
      '3': 'ค', 'c': 'ค', 'C': 'ค',
      '4': 'ง', 'd': 'ง', 'D': 'ง'
    };

    if (keyMap[e.key] && !ansState.checked) {
      e.preventDefault();
      state.answers[currentQ.id] = { selected: keyMap[e.key], checked: false, isCorrect: false };
      renderQuiz();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (!ansState.checked && ansState.selected) {
        handleCheckAnswer();
      } else if (ansState.checked) {
        dom.nextBtn.click();
      }
    }
  });
}

// Init App on Load
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  switchView('home');
});
