/**
 * Multi-Course & Multi-Level Quiz Application
 * Courses:
 * 1. PRINCIPLE OF SOFTWARE DESIGN AND DEVELOPMENT (240 Questions Total)
 *    - ระดับพื้นฐาน (Basic): 120 ข้อ
 *    - ระดับยาก (Advanced): 120 ข้อ
 * 2. DATABASE (Draft / โครงสร้างร่าง 6 Sessions)
 * 3. COMPUTER SYSTEM (Draft / โครงสร้างร่าง 6 Sessions)
 * 
 * Developed by: นายพีรพัฒน์ วิไชยวงค์ (รหัส 69030188)
 */

// Application State
const state = {
  view: 'subject', // 'subject' | 'home' | 'quiz' | 'result'
  currentSubject: 'psdd', // 'psdd' | 'db' | 'cs'
  currentLevel: 'basic', // 'basic' | 'advanced'
  currentCategory: 'all',
  currentQuestionIndex: 0,
  questions: [], // filtered questions based on chosen level and category
  answers: {}, // questionId -> { selected: "ก", checked: boolean, isCorrect: boolean }
  reviewFilter: 'all' // 'all' | 'correct' | 'wrong'
};

// Safe HTML Escaping Helper
function escapeHtml(text) {
  if (typeof text !== 'string') return text || '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Sound Effects Synthesizer Engine (Web Audio API)
const soundEffects = {
  enabled: localStorage.getItem('quiz_sound_enabled') !== '0',
  audioCtx: null,

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  },

  playCorrect() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      const ctx = this.audioCtx;
      const now = ctx.currentTime;

      // Uplifting arpeggio: C5 (523.25), E5 (659.25), G5 (783.99), C6 (1046.50)
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.07);

        gain.gain.setValueAtTime(0, now + i * 0.07);
        gain.gain.linearRampToValueAtTime(0.18, now + i * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.28);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 0.3);
      });
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  },

  playWrong() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      const ctx = this.audioCtx;
      const now = ctx.currentTime;

      // Soft sympathetic double-tone: G3 (196.00), D3 (146.83)
      const notes = [196.00, 146.83];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.12);

        gain.gain.setValueAtTime(0, now + i * 0.12);
        gain.gain.linearRampToValueAtTime(0.14, now + i * 0.12 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.28);
      });
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }
};

// Encouraging Feedback Messages Pool
const encouragementPool = {
  correct: [
    { title: "🎉 ยอดเยี่ยมมากครับ!", msg: "ตอบได้ถูกต้องและแม่นยำมาก ความรู้แน่นปึ้ก ลุยข้อต่อไปเลย!" },
    { title: "✨ เก่งมากๆ เลยครับ!", msg: "วิเคราะห์โจทย์ได้เฉียบคม ตอบถูกเป๊ะ รักษาความมั่นใจไว้นะครับ" },
    { title: "🔥 เยี่ยมยอดสุดๆ!", msg: "สมาธิและความจำดีเยี่ยมมาก เก็บแต้มเต็มไปเรื่อยๆ เลยครับ" },
    { title: "🎯 แม่นยำระดับเซียน!", msg: "จับจุดสำคัญของเนื้อหาได้ดีมาก เดินหน้าต่อสู่คะแนนเต็มเลยครับ" },
    { title: "🌟 เทพมากครับ!", msg: "ตอบถูกแบบไร้ข้อกังขา เข้าใจทฤษฎีและหลักการอย่างลึกซึ้ง" },
    { title: "💪 พลังความรู้เต็มเปี่ยม!", msg: "ทำผลงานได้ยอดเยี่ยมมาก ลุยข้อถัดไปกันต่อเลยครับ" },
    { title: "🚀 สปีดความแม่นยำมาแรง!", msg: "ตอบถูกคล่องแคล่วมาก เป็นกำลังใจให้ทำคะแนนท็อปนะครับ" },
    { title: "👏 ปรบมือรัวๆ ให้เลย!", msg: "เก่งมากครับ ตอบถูกต่อเนื่อง ลุยข้อต่อไปเพื่อชัยชนะ!" }
  ],
  wrong: [
    { title: "🌱 ไม่เป็นไรเลยครับ สู้ๆ!", msg: "ข้อนี้แอบท้าทาย ผิดเป็นครูยิ่งทำยิ่งจำได้แม่นขึ้นนะ อ่านคำอธิบายแล้วลุยต่อเลย!" },
    { title: "💡 ข้อนี้เป็นจุดที่หลายคนพลาด!", msg: "ถือเป็นการทบทวนจุดสำคัญและได้เรียนรู้สิ่งใหม่ สู้ๆ นะครับ ทำได้แน่นอน" },
    { title: "💪 อย่าเพิ่งท้อนะครับ!", msg: "ความสำเร็จมาจากการฝึกฝนและการเรียนรู้จากข้อผิดพลาด เดินหน้าเก็บแต้มข้อถัดไปเลย" },
    { title: "✨ ผิดเพื่อรู้ถูก!", msg: "อ่านเฉลยและคำอธิบายสั้นๆ ด้านล่าง แล้วข้อนี้จะไม่พลาดอีกแน่นอนครับ สู้ๆ!" },
    { title: "🎯 ก้าวต่อไปอย่างมั่นใจ!", msg: "อย่าให้ข้อนี้หยุดความตั้งใจ ไฟยังไม่มอด ลุยข้อถัดไปเพื่อดึงคะแนนคืนมาเลย" },
    { title: "🌈 เป็นกำลังใจให้นะครับ!", msg: "ทุกคนพัฒนาจากการฝึกทำโจทย์ สู้ต่ออีกนิด ความรู้จะยิ่งแน่นขึ้นครับ" },
    { title: "🔥 อย่ายอมแพ้ ลุยต่อเลย!", msg: "ตั้งสติแล้วอ่านเฉลยให้เข้าใจ ข้อถัดไปรอให้เราพิชิตอยู่ครับ!" },
    { title: "📖 เก็บเกี่ยวความรู้เพิ่มอีกข้อ!", msg: "ทุกข้อที่ทำคือประสบการณ์อันมีค่า ยิ้มสู้แล้วลุยข้อถัดไปกันต่อเลยครับ" }
  ]
};

// Celebration Confetti & Sparkles Trigger
function triggerConfetti() {
  const container = dom.confettiContainer || document.getElementById('confetti-container');
  if (!container) return;

  container.innerHTML = '';
  const emojis = ['✨', '⭐', '🎉', '🎯', '👏', '💯', '🚀', '🏆', '🔥', '🟢'];
  const particleCount = 14;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const startX = 40 + (Math.random() * 20); // 40% - 60% center
    const startY = 45 + (Math.random() * 20);
    const tx = (Math.random() - 0.5) * 260; // Spread horizontally
    const ty = -60 - Math.random() * 120; // Fly upward then gravity
    const rot = (Math.random() - 0.5) * 360;

    particle.style.left = `${startX}%`;
    particle.style.top = `${startY}%`;
    particle.style.setProperty('--tx', `${tx}px`);
    particle.style.setProperty('--ty', `${ty}px`);
    particle.style.setProperty('--rot', `${rot}deg`);
    particle.style.animationDelay = `${Math.random() * 0.15}s`;

    container.appendChild(particle);
  }

  setTimeout(() => {
    container.innerHTML = '';
  }, 1400);
}

// Course Configurations Database
const coursesData = {
  psdd: {
    id: 'psdd',
    name: 'PRINCIPLE OF SOFTWARE DESIGN AND DEVELOPMENT',
    fullName: 'หลักการออกแบบและการพัฒนาซอฟต์แวร์ (PRINCIPLE OF SOFTWARE DESIGN AND DEVELOPMENT)',
    isReady: true,
    levels: {
      basic: {
        levelName: 'ระดับพื้นฐาน (Basic)',
        headerSub: '120 ข้อ (คอมพิวเตอร์เบื้องต้น, SDLC, อัลกอริทึม, Python, ตัวแปร, Git)',
        homeTitle: 'หมวดหมู่แบบทดสอบระดับพื้นฐาน',
        homeDesc: 'คลิกเลือก Session ที่ต้องการฝึกฝน หรือทำข้อสอบครบทั้งหมด 120 ข้อ',
        featured: {
          title: 'ข้อสอบระดับพื้นฐานทั้งหมด (All In One)',
          badge: '120 ข้อ',
          desc: 'ทดสอบความรู้พื้นฐานครบถ้วนทุกหมวดหมู่ (ข้อ 1 - 120) จำลองการสอบจริงแบบครอบคลุม'
        },
        categories: [
          {
            key: 'cat1',
            icon: '💻',
            title: 'Session 01: คอมพิวเตอร์ & SDLC',
            badge: '20 ข้อ',
            desc: 'ฮาร์ดแวร์, CPU, RAM, ALU, SDLC, Waterfall, Agile และ Big Bang Model (ข้อ 1 - 20)'
          },
          {
            key: 'cat2',
            icon: '📐',
            title: 'Session 02: อัลกอริทึม & ผังงาน',
            badge: '20 ข้อ',
            desc: 'อัลกอริทึม, ซูโดโคด, IPO Cycle, Top-down Design และสัญลักษณ์ Flowchart (ข้อ 21 - 40)'
          },
          {
            key: 'cat3',
            icon: '🐍',
            title: 'Session 03: ภาษา Python เบื้องต้น',
            badge: '20 ข้อ',
            desc: 'ประวัติ Python, Interpreter, print, input, Indentation, if-elif-else, while, break, continue (ข้อ 41 - 60)'
          },
          {
            key: 'cat4',
            icon: '🔢',
            title: 'Session 04: ตัวแปร & ตัวดำเนินการ',
            badge: '20 ข้อ',
            desc: 'การตั้งชื่อตัวแปร, int, float, str, bool, ตัวดำเนินการ %, //, **, ตรรกศาสตร์ and/or/not (ข้อ 61 - 80)'
          },
          {
            key: 'cat5',
            icon: '📦',
            title: 'Session 05: Git พื้นฐาน',
            badge: '20 ข้อ',
            desc: 'ระบบ DVCS, Staging Area, git init, add, commit, log, status, Commit message, .gitignore (ข้อ 81 - 100)'
          },
          {
            key: 'cat6',
            icon: '🌿',
            title: 'Session 06: Git Branching & Remote',
            badge: '20 ข้อ',
            desc: 'Branch, checkout/switch, merge, Merge Conflict, GitHub, clone, push, pull, Vi/Vim (ข้อ 101 - 120)'
          }
        ]
      },
      advanced: {
        levelName: 'ระดับยาก (Advanced)',
        headerSub: '120 ข้อ (Concepts, Compilers, Flowcharts, Operators, Control, Memory, Data Structures)',
        homeTitle: 'หมวดหมู่ข้อสอบระดับยาก (Advanced Level)',
        homeDesc: 'ข้อสอบเชิงลึก Programming Concepts, Memory Stack/Heap, Pointers, Flowcharts และ Data Structures',
        featured: {
          title: 'ข้อสอบระดับยากทั้งหมด (All In One)',
          badge: '120 ข้อ',
          desc: 'ทดสอบความรู้ระดับเข้มข้นครบทั้ง 6 Sessions (ข้อ 1 - 120) ข้อสอบระดับปริญญาตรีครอบคลุมทุกมิติ'
        },
        categories: [
          {
            key: 'cat1',
            icon: '⚙️',
            title: 'Session 01: Programming Concepts, SDLC & Compilers',
            badge: '20 ข้อ',
            desc: 'Compiler vs Interpreter, Pass-by-Value/Ref, Linker, Lexical/Syntax/Semantic Error, Cohesion & Coupling (ข้อ 1 - 20)'
          },
          {
            key: 'cat2',
            icon: '📐',
            title: 'Session 02: Flowcharts, Pseudocode & Algorithms',
            badge: '20 ข้อ',
            desc: 'Decision, Do-While Loop, Nested Loop, Binary Search, Infinite Loop, Top-Down Design, Divide & Conquer (ข้อ 21 - 40)'
          },
          {
            key: 'cat3',
            icon: '🔢',
            title: 'Session 03: Data Types, Operators & Expressions',
            badge: '20 ข้อ',
            desc: 'Type Casting, Precedence, Bitwise AND/Shift, Short-circuit, Post-increment, Ternary, IEEE 754 Float (ข้อ 41 - 60)'
          },
          {
            key: 'cat4',
            icon: '🔀',
            title: 'Session 04: Control Structures (Selection & Iteration)',
            badge: '20 ข้อ',
            desc: 'Switch Fall-through, Break vs Continue, Dangling Else, Loop Invariant, Infinite Loop, Loop Unrolling (ข้อ 61 - 80)'
          },
          {
            key: 'cat5',
            icon: '🧠',
            title: 'Session 05: Functions, Scope & Memory Management',
            badge: '20 ข้อ',
            desc: 'Static Variables, Dangling Pointer, Inline Function, Stack Frame, Pure Function, malloc/calloc/free (ข้อ 81 - 100)'
          },
          {
            key: 'cat6',
            icon: '📦',
            title: 'Session 06: Data Structures & Basic Algorithms',
            badge: '20 ข้อ',
            desc: 'Array vs Linked List, Multi-dim Array, Quick/Selection/Bubble Sort, Stack/Queue, Pointer Arithmetic (ข้อ 101 - 120)'
          }
        ]
      }
    }
  },

  // 2. Active Subject: DATABASE
  db: {
    id: 'db',
    name: 'DATABASE',
    fullName: 'ระบบฐานข้อมูลและการจัดการข้อมูล (DATABASE SYSTEMS)',
    isReady: true,
    levels: {
      basic: {
        levelName: 'ข้อสอบกลางภาค (Midterm Exam)',
        headerSub: '90 ข้อ (พื้นฐาน DBMS, Relational Model, ERD, Normalization, SQL, ACID & Concurrency)',
        homeTitle: 'หมวดหมู่แบบทดสอบวิชา DATABASE (ข้อสอบกลางภาค 90 ข้อ)',
        homeDesc: 'คลิกเลือกหมวดที่ต้องการฝึกฝน หรือทำข้อสอบครบทั้งหมด 90 ข้อ พร้อมเฉลยละเอียดและคำอธิบาย',
        featured: {
          title: 'ข้อสอบกลางภาคทั้งหมด (All In One)',
          badge: '90 ข้อ',
          desc: 'ทดสอบความรู้ระบบฐานข้อมูลครบถ้วนทั้ง 4 หมวด (ข้อ 1 - 90) จำลองการสอบจริงพร้อมเฉลยละเอียด'
        },
        categories: [
          {
            key: 'db_cat1',
            icon: '🗄️',
            title: 'หมวดที่ 1: บทที่ 1 & 2 พื้นฐานระบบฐานข้อมูลและแบบจำลองข้อมูล',
            badge: '25 ข้อ',
            desc: 'Data/Information, File-based System, 3-Schema Architecture, Relational Model, Keys & Integrity Constraints (ข้อ 1 - 25)'
          },
          {
            key: 'db_cat2',
            icon: '📊',
            title: 'หมวดที่ 2: บทที่ 3 การออกแบบฐานข้อมูลด้วย ER Model และ ERD',
            badge: '25 ข้อ',
            desc: 'Chen ERD, Crow\'s Foot, Weak Entity, Cardinality, EERD Supertype/Subtype, ER to Relational Mapping (ข้อ 26 - 50)'
          },
          {
            key: 'db_cat3',
            icon: '🧹',
            title: 'หมวดที่ 3: บทที่ 4 Normalization และคำสั่ง SQL',
            badge: '20 ข้อ',
            desc: '1NF, 2NF, 3NF, BCNF, Anomalies, DDL, DML, WHERE, GROUP BY, HAVING, INNER/LEFT JOIN (ข้อ 51 - 70)'
          },
          {
            key: 'db_cat4',
            icon: '🔄',
            title: 'หมวดที่ 4: หัวข้อพิเศษ Transaction & ความสัมพันธ์เชิงลึก',
            badge: '20 ข้อ',
            desc: 'ACID (Atomicity, Consistency, Isolation, Durability), 1:1 Mapping, Surrogate vs Natural Key, DCL/TCL (ข้อ 71 - 90)'
          }
        ]
      }
    }
  },

  // 3. Draft Subject: COMPUTER SYSTEM
  cs: {
    id: 'cs',
    name: 'COMPUTER SYSTEM',
    fullName: 'ระบบคอมพิวเตอร์และสถาปัตยกรรม (COMPUTER SYSTEM ARCHITECTURE)',
    isReady: false,
    levels: {
      basic: {
        levelName: 'ระดับพื้นฐาน (Basic)',
        headerSub: 'เค้าโครง 6 Sessions (อยู่ระหว่างเตรียมข้อสอบ)',
        homeTitle: 'โครงสร้างหมวดหมู่รายวิชา COMPUTER SYSTEM',
        homeDesc: 'เค้าโครงเนื้อหา 6 Sessions ที่จะใช้ในการจัดทำแบบทดสอบประเมินความรู้',
        featured: {
          title: 'ข้อสอบวิชา COMPUTER SYSTEM ทั้งหมด (All In One)',
          badge: 'เตรียมจัดทำ',
          desc: 'รวบรวมข้อสอบวิชา Computer Systems ครอบคลุมตั้งแต่ Logic Gates จนถึง Operating Systems'
        },
        categories: [
          {
            key: 'cs_cat1',
            icon: '⚡',
            title: 'Session 01: Computer Organization & Architecture',
            badge: 'โครงสร้างร่าง',
            desc: 'Von Neumann Architecture, Harvard Architecture, System Bus, Control Unit, ALU'
          },
          {
            key: 'cs_cat2',
            icon: '🔢',
            title: 'Session 02: Number Systems & Logic Gates',
            badge: 'โครงสร้างร่าง',
            desc: 'Binary, Octal, Hexadecimal, Two’s Complement, Boolean Algebra, Logic Gates (AND/OR/NOT/XOR)'
          },
          {
            key: 'cs_cat3',
            icon: '⚙️',
            title: 'Session 03: CPU Structure & Instruction Cycle',
            badge: 'โครงสร้างร่าง',
            desc: 'Instruction Fetch, Decode, Execute, CPU Registers (PC, IR, MAR, MBR), Instruction Pipeline'
          },
          {
            key: 'cs_cat4',
            icon: '💾',
            title: 'Session 04: Memory Hierarchy & Cache Memory',
            badge: 'โครงสร้างร่าง',
            desc: 'Registers, L1/L2/L3 Cache, SRAM vs DRAM, Cache Mapping, Virtual Memory & Paging'
          },
          {
            key: 'cs_cat5',
            icon: '🔌',
            title: 'Session 05: I/O Systems & Interconnection',
            badge: 'โครงสร้างร่าง',
            desc: 'Programmed I/O, Interrupt-Driven I/O, Direct Memory Access (DMA), System Bus Protocols'
          },
          {
            key: 'cs_cat6',
            icon: '🖥️',
            title: 'Session 06: Operating System Interface & Scheduling',
            badge: 'โครงสร้างร่าง',
            desc: 'Kernel vs User Mode, System Calls, Process Lifecycle, CPU Scheduling Algorithms, Context Switch'
          }
        ]
      }
    }
  }
};

// DOM References
const dom = {
  subjectSection: document.getElementById('subject-section'),
  homeSection: document.getElementById('home-section'),
  quizSection: document.getElementById('quiz-section'),
  resultSection: document.getElementById('result-section'),
  
  navSubjectBtn: document.getElementById('nav-subject-btn'),
  navHomeBtn: document.getElementById('nav-home-btn'),
  brandHomeBtn: document.getElementById('brand-home-btn'),
  btnBackToSubjects: document.getElementById('btn-back-to-subjects'),
  btnGoHome: document.getElementById('btn-go-home'),
  btnGoSubject: document.getElementById('btn-go-subject'),

  // Subject Cards
  subjectCardPsdd: document.getElementById('subject-card-psdd'),
  subjectCardDb: document.getElementById('subject-card-db'),
  subjectCardCs: document.getElementById('subject-card-cs'),

  // Course Dashboard elements
  currentCourseTitle: document.getElementById('current-course-title'),
  courseDraftNotice: document.getElementById('course-draft-notice'),
  levelSelectorContainer: document.getElementById('level-selector-container'),

  // Level controls
  levelBtnBasic: document.getElementById('level-btn-basic'),
  levelBtnAdvanced: document.getElementById('level-btn-advanced'),
  headerLevelSubtitle: document.getElementById('header-level-subtitle'),
  homeCategoryTitle: document.getElementById('home-category-title'),
  homeCategoryDesc: document.getElementById('home-category-desc'),
  featuredCard: document.getElementById('featured-card'),
  featuredTitle: document.getElementById('featured-title'),
  featuredBadge: document.getElementById('featured-badge'),
  featuredDesc: document.getElementById('featured-desc'),
  categoryGrid: document.getElementById('category-grid'),

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
  encouragementBanner: document.getElementById('encouragement-banner'),
  encourageIcon: document.getElementById('encourage-icon'),
  encourageTitle: document.getElementById('encourage-title'),
  encourageMsg: document.getElementById('encourage-msg'),
  confettiContainer: document.getElementById('confetti-container'),
  soundToggleBtn: document.getElementById('sound-toggle-btn'),
  soundIcon: document.getElementById('sound-icon'),

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

// Select Course / Subject
function selectSubject(subjectKey) {
  state.currentSubject = subjectKey;
  const course = coursesData[subjectKey];
  if (!course) return;

  if (dom.currentCourseTitle) {
    dom.currentCourseTitle.textContent = course.name;
  }

  // If Draft Course:
  if (!course.isReady) {
    if (dom.courseDraftNotice) dom.courseDraftNotice.style.display = 'flex';
    if (dom.levelSelectorContainer) dom.levelSelectorContainer.style.display = 'none';
    
    state.currentLevel = 'basic';
    const config = course.levels.basic;
    
    if (dom.homeCategoryTitle) dom.homeCategoryTitle.textContent = config.homeTitle;
    if (dom.homeCategoryDesc) dom.homeCategoryDesc.textContent = config.homeDesc;
    if (dom.featuredTitle) dom.featuredTitle.textContent = config.featured.title;
    if (dom.featuredBadge) dom.featuredBadge.textContent = config.featured.badge;
    if (dom.featuredDesc) dom.featuredDesc.textContent = config.featured.desc;

    renderDraftCategories(config.categories);
  } else {
    // Active Course:
    if (dom.courseDraftNotice) dom.courseDraftNotice.style.display = 'none';
    const hasMultipleLevels = course.levels && Object.keys(course.levels).length > 1;
    if (dom.levelSelectorContainer) {
      dom.levelSelectorContainer.style.display = hasMultipleLevels ? 'block' : 'none';
    }
    state.currentLevel = 'basic';
    setLevel('basic');
  }

  switchView('home');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Draft Subject Category Cards
function renderDraftCategories(categories) {
  if (!dom.categoryGrid) return;
  dom.categoryGrid.innerHTML = '';

  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="card-icon-wrapper">${cat.icon}</div>
      <div class="card-content">
        <div class="card-title-row">
          <h3 class="card-title">${escapeHtml(cat.title)}</h3>
          <span class="card-badge">${escapeHtml(cat.badge)}</span>
        </div>
        <p class="card-desc">${escapeHtml(cat.desc)}</p>
      </div>
      <div class="card-arrow">🔒</div>
    `;

    card.addEventListener('click', () => {
      alert(`📌 รายวิชา [${coursesData[state.currentSubject].name}] อยู่ระหว่างจัดเตรียมคลังข้อสอบครับ\n\nสามารถเลือกทำข้อสอบวิชา PRINCIPLE OF SOFTWARE DESIGN AND DEVELOPMENT (240 ข้อ) ได้ทันทีครับ`);
    });

    dom.categoryGrid.appendChild(card);
  });
}

// Set Active Level (Basic or Advanced for PSDD)
function setLevel(levelKey) {
  state.currentLevel = levelKey;
  
  // Update Level Buttons UI
  if (dom.levelBtnBasic) dom.levelBtnBasic.classList.toggle('active', levelKey === 'basic');
  if (dom.levelBtnAdvanced) dom.levelBtnAdvanced.classList.toggle('active', levelKey === 'advanced');

  const course = coursesData[state.currentSubject];
  if (!course || !course.levels) return;

  const config = course.levels[levelKey] || course.levels.basic;
  if (!config) return;

  if (dom.homeCategoryTitle) dom.homeCategoryTitle.textContent = config.homeTitle;
  if (dom.homeCategoryDesc) dom.homeCategoryDesc.textContent = config.homeDesc;

  // Update Featured Card
  if (dom.featuredTitle) dom.featuredTitle.textContent = config.featured.title;
  if (dom.featuredBadge) dom.featuredBadge.textContent = config.featured.badge;
  if (dom.featuredDesc) dom.featuredDesc.textContent = config.featured.desc;

  // Render 6 Category Cards for this level
  renderHomeCategories(config.categories);
}

// Render Home Category Cards dynamically
function renderHomeCategories(categories) {
  if (!dom.categoryGrid) return;
  dom.categoryGrid.innerHTML = '';

  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.setAttribute('data-cat', cat.key);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="card-icon-wrapper">${cat.icon}</div>
      <div class="card-content">
        <div class="card-title-row">
          <h3 class="card-title">${escapeHtml(cat.title)}</h3>
          <span class="card-badge">${escapeHtml(cat.badge)}</span>
        </div>
        <p class="card-desc">${escapeHtml(cat.desc)}</p>
      </div>
      <div class="card-arrow">➔</div>
    `;

    card.addEventListener('click', () => startCategoryQuiz(cat.key));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') startCategoryQuiz(cat.key);
    });

    dom.categoryGrid.appendChild(card);
  });
}

// Switch Views (subject | home | quiz | result)
function switchView(viewName) {
  state.view = viewName;

  if (dom.subjectSection) dom.subjectSection.style.display = viewName === 'subject' ? 'block' : 'none';
  if (dom.homeSection) dom.homeSection.style.display = viewName === 'home' ? 'block' : 'none';
  if (dom.quizSection) dom.quizSection.style.display = viewName === 'quiz' ? 'block' : 'none';
  if (dom.resultSection) dom.resultSection.style.display = viewName === 'result' ? 'block' : 'none';

  // Navigation Header Buttons
  if (dom.navSubjectBtn) dom.navSubjectBtn.style.display = viewName !== 'subject' ? 'inline-flex' : 'none';
  if (dom.navHomeBtn) dom.navHomeBtn.style.display = (viewName === 'quiz' || viewName === 'result') ? 'inline-flex' : 'none';

  // Header Subtitle Text
  if (dom.headerLevelSubtitle) {
    if (viewName === 'subject') {
      dom.headerLevelSubtitle.textContent = 'คลังข้อสอบวัดระดับความรู้รายวิชา';
    } else {
      const course = coursesData[state.currentSubject];
      dom.headerLevelSubtitle.textContent = course ? `วิชา: ${course.name}` : 'ระบบแบบทดสอบประเมินความรู้';
    }
  }
}

// Start Quiz with Selected Category
function startCategoryQuiz(catKey) {
  const course = coursesData[state.currentSubject];
  if (!course || !course.isReady) {
    alert(`📌 รายวิชา [${course ? course.name : ''}] อยู่ระหว่างจัดเตรียมคลังข้อสอบครับ\n\nสามารถเลือกทำข้อสอบวิชา PRINCIPLE OF SOFTWARE DESIGN AND DEVELOPMENT (240 ข้อ) ได้ทันทีครับ`);
    return;
  }

  state.currentCategory = catKey;
  let questionPool = [];
  if (state.currentSubject === 'db') {
    questionPool = quizData.db || [];
  } else if (state.currentSubject === 'psdd') {
    questionPool = quizData[state.currentLevel] || quizData.basic;
  } else {
    questionPool = quizData[state.currentSubject] || quizData[state.currentLevel] || quizData.basic;
  }

  if (catKey === 'all') {
    state.questions = [...questionPool];
  } else {
    state.questions = questionPool.filter(q => q.categoryKey === catKey);
  }

  state.currentQuestionIndex = 0;
  state.answers = {};
  switchView('quiz');
  renderQuiz();
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
    
    // Render Encouragement Banner
    if (dom.encouragementBanner && currentAnsState.encourage) {
      dom.encouragementBanner.className = `encouragement-banner ${currentAnsState.isCorrect ? 'correct' : 'wrong'}`;
      if (dom.encourageIcon) dom.encourageIcon.textContent = currentAnsState.isCorrect ? '🎉' : '💪';
      if (dom.encourageTitle) dom.encourageTitle.textContent = currentAnsState.encourage.title;
      if (dom.encourageMsg) dom.encourageMsg.textContent = currentAnsState.encourage.msg;
    }

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

// Render Choices
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
  const list = isCorrect ? encouragementPool.correct : encouragementPool.wrong;
  const encourageItem = list[Math.floor(Math.random() * list.length)];

  state.answers[currentQ.id] = {
    selected: ans.selected,
    checked: true,
    isCorrect: isCorrect,
    encourage: encourageItem
  };

  // Play Sound & Visual Effects
  if (isCorrect) {
    soundEffects.playCorrect();
    triggerConfetti();
  } else {
    soundEffects.playWrong();
  }

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
  const levelLabel = state.currentLevel === 'advanced' ? 'ระดับยาก (Advanced)' : 'ระดับพื้นฐาน (Basic)';

  if (scorePercent >= 80) {
    title.textContent = '🎉 ยอดเยี่ยมมาก! เก่งระดับผู้เชี่ยวชาญ';
    desc.textContent = `คุณทำคะแนนในแบบทดสอบ [${levelLabel}] ได้อย่างยอดเยี่ยม`;
  } else if (scorePercent >= 60) {
    title.textContent = '👍 ผ่านเกณฑ์ได้ดี!';
    desc.textContent = `ผ่านเกณฑ์การประเมิน [${levelLabel}] สามารถเลื่อนดูเฉลยข้อที่ตอบผิดด้านล่างเพื่อศึกษาเพิ่มเติม`;
  } else {
    title.textContent = '📚 พยายามอีกนิด สู้ๆ นะครับ!';
    desc.textContent = `ข้อสอบชุดนี้มีความท้าทาย สามารถเลื่อนดูเฉลยละเอียดและกดทำใหม่อีกครั้งเพื่อทบทวนครับ`;
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
  // Sound Toggle Button
  if (dom.soundToggleBtn) {
    if (dom.soundIcon) dom.soundIcon.textContent = soundEffects.enabled ? '🔊' : '🔇';
    dom.soundToggleBtn.addEventListener('click', () => {
      soundEffects.enabled = !soundEffects.enabled;
      localStorage.setItem('quiz_sound_enabled', soundEffects.enabled ? '1' : '0');
      if (dom.soundIcon) dom.soundIcon.textContent = soundEffects.enabled ? '🔊' : '🔇';
      if (soundEffects.enabled) {
        soundEffects.playCorrect();
      }
    });
  }

  // Active Course Card: PRINCIPLE OF SOFTWARE DESIGN AND DEVELOPMENT
  if (dom.subjectCardPsdd) {
    dom.subjectCardPsdd.addEventListener('click', () => selectSubject('psdd'));
    dom.subjectCardPsdd.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') selectSubject('psdd');
    });
  }

  // Active Course Card: DATABASE
  if (dom.subjectCardDb) {
    dom.subjectCardDb.addEventListener('click', () => selectSubject('db'));
    dom.subjectCardDb.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') selectSubject('db');
    });
  }

  // Back to Subject Selection
  if (dom.btnBackToSubjects) {
    dom.btnBackToSubjects.addEventListener('click', () => {
      switchView('subject');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  if (dom.navSubjectBtn) {
    dom.navSubjectBtn.addEventListener('click', () => {
      switchView('subject');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  if (dom.btnGoSubject) {
    dom.btnGoSubject.addEventListener('click', () => {
      switchView('subject');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Level Switcher Buttons (for active course)
  if (dom.levelBtnBasic) {
    dom.levelBtnBasic.addEventListener('click', () => setLevel('basic'));
  }
  if (dom.levelBtnAdvanced) {
    dom.levelBtnAdvanced.addEventListener('click', () => setLevel('advanced'));
  }

  // Featured Card Click (All Questions)
  if (dom.featuredCard) {
    dom.featuredCard.addEventListener('click', () => startCategoryQuiz('all'));
    dom.featuredCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') startCategoryQuiz('all');
    });
  }

  // Return to Home (Course Dashboard) Buttons
  if (dom.navHomeBtn) {
    dom.navHomeBtn.addEventListener('click', () => {
      switchView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (dom.brandHomeBtn) {
    dom.brandHomeBtn.addEventListener('click', () => {
      switchView('subject');
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
  // 1-4 for ก-ง / A-D
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
  switchView('subject'); // start at Subject selection
});
