# Landing Page PDR

---

## 📁 File Structure Addition

```
javascript-lab/
│
├── index.html          ← 🏠 Landing Page
├── style.css           ← Landing Page Styles
├── script.js           ← Landing Page Scripts
│
├── Q1-Remove-Duplicates/
├── Q2-Character-Frequency/
...
```

---

## 📁 File: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>JS Lab — Operators & Conditional Statements</title>
  <link rel="stylesheet" href="style.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
</head>
<body>

  <!-- ══════════════════════════════════════
       BACKGROUND LAYERS
  ══════════════════════════════════════ -->
  <div class="bg-base"></div>
  <div class="bg-pattern"></div>
  <div class="bg-glow bg-glow--1"></div>
  <div class="bg-glow bg-glow--2"></div>

  <!-- ══════════════════════════════════════
       NAVBAR
  ══════════════════════════════════════ -->
  <nav class="navbar" id="navbar">
    <div class="nav-inner">

      <div class="nav-brand">
        <div class="nav-logo">
          <span class="logo-bracket">{</span>
          <span class="logo-text">JS</span>
          <span class="logo-bracket">}</span>
        </div>
        <span class="nav-title">JS Lab</span>
      </div>

      <div class="nav-links">
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#concepts" class="nav-link">Concepts</a>
        <a href="#about"    class="nav-link">About</a>
      </div>

      <div class="nav-actions">
        <a
          href="https://github.com"
          target="_blank"
          class="nav-github"
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839
            9.489.5.092.682-.217.682-.482
            0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608
            1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087
            2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943
            0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0
            0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0
            012.504.337c1.909-1.294 2.747-1.025
            2.747-1.025.546 1.377.202 2.394.1 2.647.64.699
            1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566
            4.935.359.309.678.919.678 1.852 0 1.336-.012
            2.415-.012 2.743 0 .267.18.578.688.48C19.138
            20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
        </a>
      </div>

    </div>
  </nav>

  <!-- ══════════════════════════════════════
       HERO SECTION
  ══════════════════════════════════════ -->
  <section class="hero" id="hero">
    <div class="hero-inner">

      <!-- Top badge -->
      <div class="hero-badge" data-aos="fade-down">
        <span class="badge-dot"></span>
        <span>JavaScript Lab · 12 Projects</span>
      </div>

      <!-- Heading -->
      <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
        <span class="title-line">Operators &amp;</span>
        <span class="title-line accent-line">Conditional</span>
        <span class="title-line">Statements</span>
      </h1>

      <!-- Sub -->
      <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
        A collection of <strong>12 interactive JavaScript projects</strong> —
        each with its own UI, logic, and dark aesthetic. Built from scratch
        using pure HTML, CSS &amp; JS.
      </p>

      <!-- CTA -->
      <div class="hero-cta" data-aos="fade-up" data-aos-delay="300">
        <a href="#projects" class="btn-primary">
          <span>Explore Projects</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12,5 19,12 12,19"/>
          </svg>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          class="btn-secondary"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865
            8.166 6.839 9.489.5.092.682-.217.682-.482
            0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608
            1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087
            2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943
            0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0
            0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0
            012.504.337c1.909-1.294 2.747-1.025
            2.747-1.025.546 1.377.202 2.394.1 2.647.64.699
            1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566
            4.935.359.309.678.919.678 1.852 0 1.336-.012
            2.415-.012 2.743 0 .267.18.578.688.48C19.138
            20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          <span>View on GitHub</span>
        </a>
      </div>

      <!-- Stats strip -->
      <div class="hero-stats" data-aos="fade-up" data-aos-delay="400">
        <div class="stat">
          <span class="stat-num" data-target="12">0</span>
          <span class="stat-lbl">Projects</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num" data-target="48">0</span>
          <span class="stat-lbl">Files</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num" data-target="3">0</span>
          <span class="stat-lbl">Languages</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num" data-target="100">0</span>
          <span class="stat-lbl">% Vanilla JS</span>
        </div>
      </div>

    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <div class="scroll-line"></div>
      <span class="scroll-text">scroll</span>
    </div>
  </section>

  <!-- ══════════════════════════════════════
       CONCEPTS TICKER
  ══════════════════════════════════════ -->
  <div class="ticker-wrap">
    <div class="ticker-track" id="tickerTrack">
      <span class="tick-item">Loops</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">Objects</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">try/catch</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">Math.random()</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">BOM</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">setInterval()</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">JSON.parse()</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">DOM Manipulation</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">Exception Handling</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">String Methods</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">Conditionals</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">Math.pow()</span>
      <span class="tick-sep">·</span>

      <!-- duplicate for seamless loop -->
      <span class="tick-item">Loops</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">Objects</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">try/catch</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">Math.random()</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">BOM</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">setInterval()</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">JSON.parse()</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">DOM Manipulation</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">Exception Handling</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">String Methods</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">Conditionals</span>
      <span class="tick-sep">·</span>
      <span class="tick-item">Math.pow()</span>
      <span class="tick-sep">·</span>
    </div>
  </div>

  <!-- ══════════════════════════════════════
       FILTER BAR
  ══════════════════════════════════════ -->
  <section class="filter-section" id="projects">
    <div class="section-inner">

      <div class="section-header" data-aos="fade-up">
        <div class="section-badge">Projects</div>
        <h2 class="section-title">
          All <span class="accent">12</span> Challenges
        </h2>
        <p class="section-sub">
          Click any card to open the interactive project
        </p>
      </div>

      <!-- Filter buttons -->
      <div class="filter-bar" data-aos="fade-up" data-aos-delay="100">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="string">Strings</button>
        <button class="filter-btn" data-filter="exception">Exceptions</button>
        <button class="filter-btn" data-filter="bom">BOM</button>
        <button class="filter-btn" data-filter="math">Math</button>
        <button class="filter-btn" data-filter="mini">Mini Project</button>
      </div>

      <!-- Search -->
      <div class="search-wrap" data-aos="fade-up" data-aos-delay="150">
        <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          id="searchInput"
          class="search-input"
          placeholder="Search projects..."
          oninput="filterProjects()"
        />
      </div>

    </div>
  </section>

  <!-- ══════════════════════════════════════
       PROJECT CARDS GRID
  ══════════════════════════════════════ -->
  <section class="cards-section">
    <div class="section-inner">

      <div class="cards-grid" id="cardsGrid">

        <!-- Q1 -->
        <article
          class="project-card"
          data-category="string"
          data-aos="fade-up"
          data-aos-delay="0"
          onclick="openProject('Q1-Remove-Duplicates/index.html')"
        >
          <div class="card-glow"></div>
          <div class="card-top">
            <div class="card-num">01</div>
            <div class="card-tags">
              <span class="tag tag--string">String</span>
            </div>
          </div>
          <div class="card-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0
                0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9
                21H5a2 2 0 0 1-2-2V9m0 0h18"/>
            </svg>
          </div>
          <h3 class="card-title">Remove Duplicate Characters</h3>
          <p class="card-desc">
            Remove all duplicate characters from a string without using Set —
            preserving first occurrence order.
          </p>
          <div class="card-concepts">
            <span class="concept">Loops</span>
            <span class="concept">Objects</span>
            <span class="concept">Strings</span>
          </div>
          <div class="card-footer">
            <span class="card-example">
              <span class="ex-label">example</span>
              "programming" → "progamin"
            </span>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </div>
          </div>
        </article>

        <!-- Q2 -->
        <article
          class="project-card"
          data-category="string"
          data-aos="fade-up"
          data-aos-delay="50"
          onclick="openProject('Q2-Character-Frequency/index.html')"
        >
          <div class="card-glow"></div>
          <div class="card-top">
            <div class="card-num">02</div>
            <div class="card-tags">
              <span class="tag tag--string">String</span>
            </div>
          </div>
          <div class="card-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6"  y1="20" x2="6"  y2="14"/>
            </svg>
          </div>
          <h3 class="card-title">Character Frequency</h3>
          <p class="card-desc">
            Count how many times each character appears and display
            results in <code>{char:count}</code> format.
          </p>
          <div class="card-concepts">
            <span class="concept">Objects</span>
            <span class="concept">Loops</span>
            <span class="concept">Formatting</span>
          </div>
          <div class="card-footer">
            <span class="card-example">
              <span class="ex-label">example</span>
              "hello" → {h:1,e:1,l:2,o:1}
            </span>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </div>
          </div>
        </article>

        <!-- Q3 -->
        <article
          class="project-card"
          data-category="string"
          data-aos="fade-up"
          data-aos-delay="100"
          onclick="openProject('Q3-First-Non-Repeating/index.html')"
        >
          <div class="card-glow"></div>
          <div class="card-top">
            <div class="card-num">03</div>
            <div class="card-tags">
              <span class="tag tag--string">String</span>
            </div>
          </div>
          <div class="card-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <h3 class="card-title">First Non-Repeating Character</h3>
          <p class="card-desc">
            Find the first character in a string that appears only once —
            using a two-pass frequency map approach.
          </p>
          <div class="card-concepts">
            <span class="concept">Two-pass Loops</span>
            <span class="concept">Objects</span>
          </div>
          <div class="card-footer">
            <span class="card-example">
              <span class="ex-label">example</span>
              "javascript" → 'j'
            </span>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </div>
          </div>
        </article>

        <!-- Q4 -->
        <article
          class="project-card"
          data-category="string"
          data-aos="fade-up"
          data-aos-delay="150"
          onclick="openProject('Q4-String-Compression/index.html')"
        >
          <div class="card-glow"></div>
          <div class="card-top">
            <div class="card-num">04</div>
            <div class="card-tags">
              <span class="tag tag--string">String</span>
            </div>
          </div>
          <div class="card-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <polyline points="4,14 10,14 10,20"/>
              <polyline points="20,10 14,10 14,4"/>
              <line x1="14" y1="10" x2="21" y2="3"/>
              <line x1="3"  y1="21" x2="10" y2="14"/>
            </svg>
          </div>
          <h3 class="card-title">String Compression</h3>
          <p class="card-desc">
            Compress consecutive repeating characters using loops —
            no built-in string tricks.
          </p>
          <div class="card-concepts">
            <span class="concept">Nested Loops</span>
            <span class="concept">Counters</span>
          </div>
          <div class="card-footer">
            <span class="card-example">
              <span class="ex-label">example</span>
              "aaabbc" → "a3b2c1"
            </span>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </div>
          </div>
        </article>

        <!-- Q5 -->
        <article
          class="project-card"
          data-category="exception"
          data-aos="fade-up"
          data-aos-delay="200"
          onclick="openProject('Q5-Exception-Handling/index.html')"
        >
          <div class="card-glow card-glow--blue"></div>
          <div class="card-top">
            <div class="card-num">05</div>
            <div class="card-tags">
              <span class="tag tag--exception">Exception</span>
            </div>
          </div>
          <div class="card-icon card-icon--blue">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71
                3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0
                0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <h3 class="card-title">Exception Handling</h3>
          <p class="card-desc">
            Calculator with full error handling — invalid operators,
            division by zero — using try/catch/finally.
          </p>
          <div class="card-concepts">
            <span class="concept">try/catch/finally</span>
            <span class="concept">throw</span>
          </div>
          <div class="card-footer">
            <span class="card-example">
              <span class="ex-label">handles</span>
              Div by 0 · Invalid Op
            </span>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </div>
          </div>
        </article>

        <!-- Q6 -->
        <article
          class="project-card"
          data-category="exception"
          data-aos="fade-up"
          data-aos-delay="250"
          onclick="openProject('Q6-Nested-Exception/index.html')"
        >
          <div class="card-glow card-glow--blue"></div>
          <div class="card-top">
            <div class="card-num">06</div>
            <div class="card-tags">
              <span class="tag tag--exception">Exception</span>
            </div>
          </div>
          <div class="card-icon card-icon--blue">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <polyline points="16,18 22,12 16,6"/>
              <polyline points="8,6 2,12 8,18"/>
            </svg>
          </div>
          <h3 class="card-title">Nested Exception Handling</h3>
          <p class="card-desc">
            Parse JSON input with nested try/catch blocks —
            handles SyntaxErrors with a live syntax-highlighted tree.
          </p>
          <div class="card-concepts">
            <span class="concept">JSON.parse()</span>
            <span class="concept">Nested try/catch</span>
          </div>
          <div class="card-footer">
            <span class="card-example">
              <span class="ex-label">handles</span>
              SyntaxError · Empty Input
            </span>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </div>
          </div>
        </article>

        <!-- Q7 -->
        <article
          class="project-card"
          data-category="bom"
          data-aos="fade-up"
          data-aos-delay="300"
          onclick="openProject('Q7-Page-Redirect/index.html')"
        >
          <div class="card-glow card-glow--purple"></div>
          <div class="card-top">
            <div class="card-num">07</div>
            <div class="card-tags">
              <span class="tag tag--bom">BOM</span>
            </div>
          </div>
          <div class="card-icon card-icon--purple">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2
                2 0 0 1 2-2h6"/>
              <polyline points="15,3 21,3 21,9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </div>
          <h3 class="card-title">Page Redirect System</h3>
          <p class="card-desc">
            BOM-powered redirect system using window.confirm() and
            window.location — shows live browser info.
          </p>
          <div class="card-concepts">
            <span class="concept">window.confirm()</span>
            <span class="concept">window.location</span>
          </div>
          <div class="card-footer">
            <span class="card-example">
              <span class="ex-label">uses</span>
              BOM · navigator · screen
            </span>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </div>
          </div>
        </article>

        <!-- Q8 -->
        <article
          class="project-card"
          data-category="bom"
          data-aos="fade-up"
          data-aos-delay="350"
          onclick="openProject('Q8-Digital-Clock/index.html')"
        >
          <div class="card-glow card-glow--purple"></div>
          <div class="card-top">
            <div class="card-num">08</div>
            <div class="card-tags">
              <span class="tag tag--bom">BOM</span>
            </div>
          </div>
          <div class="card-icon card-icon--purple">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
          </div>
          <h3 class="card-title">Digital Clock</h3>
          <p class="card-desc">
            Live clock powered by setInterval() — updates every second
            with HH:MM:SS format and start/stop controls.
          </p>
          <div class="card-concepts">
            <span class="concept">setInterval()</span>
            <span class="concept">Date Object</span>
          </div>
          <div class="card-footer">
            <span class="card-example">
              <span class="ex-label">format</span>
              HH:MM:SS · AM/PM
            </span>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </div>
          </div>
        </article>

        <!-- Q9 -->
        <article
          class="project-card"
          data-category="math"
          data-aos="fade-up"
          data-aos-delay="400"
          onclick="openProject('Q9-Prime-Numbers/index.html')"
        >
          <div class="card-glow card-glow--orange"></div>
          <div class="card-top">
            <div class="card-num">09</div>
            <div class="card-tags">
              <span class="tag tag--math">Math</span>
            </div>
          </div>
          <div class="card-icon card-icon--orange">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <line x1="12" y1="2"  x2="12" y2="6"/>
              <line x1="12" y1="18" x2="12" y2="22"/>
              <line x1="4.93" y1="4.93"   x2="7.76" y2="7.76"/>
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
              <line x1="2"  y1="12" x2="6"  y2="12"/>
              <line x1="18" y1="12" x2="22" y2="12"/>
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
            </svg>
          </div>
          <h3 class="card-title">Prime Numbers in Range</h3>
          <p class="card-desc">
            Find all prime numbers between two values using optimized
            loop-based primality check with √n optimization.
          </p>
          <div class="card-concepts">
            <span class="concept">Math.sqrt()</span>
            <span class="concept">Nested Loops</span>
          </div>
          <div class="card-footer">
            <span class="card-example">
              <span class="ex-label">range</span>
              1 – 100 → 25 primes
            </span>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </div>
          </div>
        </article>

        <!-- Q10 -->
        <article
          class="project-card"
          data-category="math"
          data-aos="fade-up"
          data-aos-delay="450"
          onclick="openProject('Q10-Armstrong-Number/index.html')"
        >
          <div class="card-glow card-glow--orange"></div>
          <div class="card-top">
            <div class="card-num">10</div>
            <div class="card-tags">
              <span class="tag tag--math">Math</span>
            </div>
          </div>
          <div class="card-icon card-icon--orange">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14
                18.18,21.02 12,17.77 5.82,21.02 7,14.14
                2,9.27 8.91,8.26 12,2"/>
            </svg>
          </div>
          <h3 class="card-title">Armstrong Number</h3>
          <p class="card-desc">
            Check if a number equals the sum of its digits each raised
            to the power of the total digit count.
          </p>
          <div class="card-concepts">
            <span class="concept">Math.pow()</span>
            <span class="concept">Digit Extraction</span>
          </div>
          <div class="card-footer">
            <span class="card-example">
              <span class="ex-label">example</span>
              153 = 1³+5³+3³ ✓
            </span>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </div>
          </div>
        </article>

        <!-- Q11 -->
        <article
          class="project-card"
          data-category="math"
          data-aos="fade-up"
          data-aos-delay="500"
          onclick="openProject('Q11-Password-Generator/index.html')"
        >
          <div class="card-glow card-glow--orange"></div>
          <div class="card-top">
            <div class="card-num">11</div>
            <div class="card-tags">
              <span class="tag tag--math">Math</span>
            </div>
          </div>
          <div class="card-icon card-icon--orange">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <h3 class="card-title">Password Generator</h3>
          <p class="card-desc">
            Generate secure passwords with configurable length and
            character sets — includes strength meter and copy feature.
          </p>
          <div class="card-concepts">
            <span class="concept">Math.random()</span>
            <span class="concept">Fisher-Yates</span>
          </div>
          <div class="card-footer">
            <span class="card-example">
              <span class="ex-label">output</span>
              A9k#mP2x · strength meter
            </span>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </div>
          </div>
        </article>

        <!-- Q12 -->
        <article
          class="project-card project-card--featured"
          data-category="mini"
          data-aos="fade-up"
          data-aos-delay="550"
          onclick="openProject('Q12-Login-Attempt-System/index.html')"
        >
          <div class="card-glow card-glow--red"></div>
          <div class="card-top">
            <div class="card-num">12</div>
            <div class="card-tags">
              <span class="tag tag--mini">Mini Project</span>
              <span class="tag tag--exception">Exception</span>
              <span class="tag tag--bom">BOM</span>
            </div>
          </div>
          <div class="card-icon card-icon--red">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3 class="card-title">Login Attempt System</h3>
          <p class="card-desc">
            Full mini-project — 3 attempt limit, error throwing, account
            lock, attempt log with timestamps and reset system.
          </p>
          <div class="card-concepts">
            <span class="concept">try/catch</span>
            <span class="concept">throw</span>
            <span class="concept">BOM</span>
            <span class="concept">DOM</span>
          </div>
          <div class="card-footer">
            <span class="card-example">
              <span class="ex-label">demo</span>
              admin / 1234 · 3 attempts
            </span>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </div>
          </div>
        </article>

      </div><!-- /cards-grid -->

      <!-- No results -->
      <div class="no-results" id="noResults" style="display:none;">
        <span class="no-results-icon">⌀</span>
        <p>No projects match your search.</p>
      </div>

    </div>
  </section>

  <!-- ══════════════════════════════════════
       CONCEPTS SECTION
  ══════════════════════════════════════ -->
  <section class="concepts-section" id="concepts">
    <div class="section-inner">

      <div class="section-header" data-aos="fade-up">
        <div class="section-badge">Concepts</div>
        <h2 class="section-title">
          What You'll <span class="accent">Learn</span>
        </h2>
      </div>

      <div class="concepts-grid" data-aos="fade-up" data-aos-delay="100">

        <div class="concept-card">
          <div class="concept-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <polyline points="16,18 22,12 16,6"/>
              <polyline points="8,6 2,12 8,18"/>
            </svg>
          </div>
          <h4 class="concept-title">String Manipulation</h4>
          <p class="concept-desc">
            Duplicates, frequency maps, compression, non-repeating char detection
          </p>
          <span class="concept-count">4 projects</span>
        </div>

        <div class="concept-card">
          <div class="concept-icon concept-icon--blue">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71
                3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0
                0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <h4 class="concept-title">Exception Handling</h4>
          <p class="concept-desc">
            try/catch/finally, throw, nested exceptions, JSON parsing errors
          </p>
          <span class="concept-count">2 projects</span>
        </div>

        <div class="concept-card">
          <div class="concept-icon concept-icon--purple">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h4 class="concept-title">Browser Object Model</h4>
          <p class="concept-desc">
            window, confirm, location, navigator, screen, setInterval
          </p>
          <span class="concept-count">2 projects</span>
        </div>

        <div class="concept-card">
          <div class="concept-icon concept-icon--orange">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <line x1="12" y1="2"  x2="12" y2="6"/>
              <line x1="12" y1="18" x2="12" y2="22"/>
              <line x1="4.93" y1="4.93"  x2="7.76" y2="7.76"/>
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
              <line x1="2" y1="12" x2="6" y2="12"/>
              <line x1="18" y1="12" x2="22" y2="12"/>
            </svg>
          </div>
          <h4 class="concept-title">Math & Algorithms</h4>
          <p class="concept-desc">
            Math.random, Math.pow, Math.sqrt, primes, Armstrong, passwords
          </p>
          <span class="concept-count">3 projects</span>
        </div>

      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════
       ABOUT / TECH STACK SECTION
  ══════════════════════════════════════ -->
  <section class="about-section" id="about">
    <div class="section-inner">

      <div class="about-grid">

        <div class="about-left" data-aos="fade-right">
          <div class="section-badge">About</div>
          <h2 class="section-title">
            Pure Vanilla <span class="accent">JavaScript</span>
          </h2>
          <p class="about-desc">
            Every project in this lab is built with zero dependencies —
            no frameworks, no build tools. Just raw HTML, CSS, and JavaScript.
            The goal: deeply understand JS fundamentals through building real,
            interactive UIs.
          </p>
          <div class="tech-pills">
            <span class="pill">HTML5</span>
            <span class="pill">CSS3</span>
            <span class="pill">Vanilla JS</span>
            <span class="pill">JetBrains Mono</span>
            <span class="pill">Google Fonts</span>
          </div>
        </div>

        <div class="about-right" data-aos="fade-left" data-aos-delay="100">
          <div class="code-block">
            <div class="code-header">
              <div class="code-dots">
                <span class="dot-r"></span>
                <span class="dot-y"></span>
                <span class="dot-g"></span>
              </div>
              <span class="code-filename">script.js</span>
            </div>
            <pre class="code-body"><code><span class="c-kw">try</span> {
  <span class="c-kw">const</span> result <span class="c-op">=</span> <span class="c-fn">calculate</span>(a, op, b);
  <span class="c-fn">showOutput</span>(result);

} <span class="c-kw">catch</span> (err) {
  <span class="c-kw">throw new</span> <span class="c-cls">Error</span>(
    err.message
  );

} <span class="c-kw">finally</span> {
  <span class="c-fn">logExecution</span>(<span class="c-str">"complete"</span>);
}</code></pre>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════
       FOOTER
  ══════════════════════════════════════ -->
  <footer class="footer">
    <div class="footer-inner">

      <div class="footer-brand">
        <div class="nav-logo">
          <span class="logo-bracket">{</span>
          <span class="logo-text">JS</span>
          <span class="logo-bracket">}</span>
        </div>
        <span class="footer-tagline">
          JavaScript Operators &amp; Conditional Statements Lab
        </span>
      </div>

      <div class="footer-links">
        <a href="#hero"     class="footer-link">Home</a>
        <a href="#projects" class="footer-link">Projects</a>
        <a href="#concepts" class="footer-link">Concepts</a>
        <a href="#about"    class="footer-link">About</a>
      </div>

      <div class="footer-bottom">
        <span class="footer-copy">
          Built with pure HTML · CSS · JS &nbsp;·&nbsp; No frameworks
        </span>
        <span class="footer-copy">
          12 Projects · 48 Files · 100% Vanilla
        </span>
      </div>

    </div>
  </footer>

  <!-- Back to top -->
  <button class="back-top" id="backTop" onclick="scrollToTop()"
    aria-label="Back to top">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2.5">
      <line x1="12" y1="19" x2="12" y2="5"/>
      <polyline points="5,12 12,5 19,12"/>
    </svg>
  </button>

  <script src="script.js"></script>
</body>
</html>
```

---

## 📁 File: `style.css`

```css
/* ══════════════════════════════════════════════
   RESET & ROOT
══════════════════════════════════════════════ */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg:          #0a0a0a;
  --bg-2:        #0d0d0d;
  --card:        #111111;
  --card-2:      #141414;
  --border:      #1a1a1a;
  --border-2:    #242424;
  --border-3:    #2e2e2e;
  --text:        #e8e8e8;
  --text-2:      #a0a0a0;
  --muted:       #4a4a4a;
  --accent:      #00ff88;
  --accent-dim:  #00ff8822;
  --accent-mid:  #00ff8844;
  --blue:        #3b82f6;
  --blue-dim:    #3b82f622;
  --purple:      #a855f7;
  --purple-dim:  #a855f722;
  --orange:      #f97316;
  --orange-dim:  #f9731622;
  --red:         #ef4444;
  --red-dim:     #ef444422;
  --font-mono:   'JetBrains Mono', monospace;
  --font-sans:   'Inter', sans-serif;
  --radius:      14px;
  --radius-sm:   8px;
  --radius-xs:   5px;
  --nav-h:       68px;
  --transition:  0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  line-height: 1.6;
  overflow-x: hidden;
}

/* ══════════════════════════════════════════════
   BACKGROUND LAYERS
══════════════════════════════════════════════ */
.bg-base {
  position: fixed;
  inset: 0;
  background: var(--bg);
  z-index: -3;
}

.bg-pattern {
  position: fixed;
  inset: 0;
  background-image: radial-gradient(
    circle,
    #ffffff0d 1px,
    transparent 1px
  );
  background-size: 30px 30px;
  z-index: -2;
  pointer-events: none;
}

.bg-glow {
  position: fixed;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  z-index: -1;
}

.bg-glow--1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #00ff8808, transparent 70%);
  top: -200px;
  right: -200px;
}

.bg-glow--2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #3b82f606, transparent 70%);
  bottom: 0;
  left: -200px;
}

/* ══════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════ */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-h);
  z-index: 1000;
  transition: background var(--transition), border-color var(--transition);
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background: rgba(10, 10, 10, 0.88);
  border-bottom-color: var(--border);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* Brand */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  cursor: pointer;
}

.nav-logo {
  display: flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 800;
  gap: 0;
}

.logo-bracket {
  color: var(--accent);
}

.logo-text {
  color: var(--text);
  font-size: 0.9rem;
}

.nav-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.01em;
}

/* Nav links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  color: var(--text-2);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-xs);
  transition: color var(--transition), background var(--transition);
}

.nav-link:hover {
  color: var(--text);
  background: var(--border);
}

/* GitHub icon */
.nav-github {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-2);
  text-decoration: none;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border-2);
  border-radius: var(--radius-xs);
  transition: color var(--transition),
              border-color var(--transition),
              background var(--transition);
}

.nav-github:hover {
  color: var(--text);
  border-color: var(--border-3);
  background: var(--border);
}

/* ══════════════════════════════════════════════
   HERO
══════════════════════════════════════════════ */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: calc(var(--nav-h) + 4rem) 2rem 6rem;
  position: relative;
}

.hero-inner {
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
}

/* Top badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--accent-dim);
  border: 1px solid var(--accent-mid);
  border-radius: 100px;
  padding: 6px 16px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent);
  letter-spacing: 0.04em;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: var(--accent);
  border-radius: 50%;
  animation: blink 1.5s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.2; }
}

/* Hero title */
.hero-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1em;
  font-size: clamp(2.8rem, 8vw, 5.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: #fff;
}

.title-line {
  display: block;
}

.accent-line {
  color: var(--accent);
  position: relative;
}

/* Hero subtitle */
.hero-subtitle {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: var(--text-2);
  font-weight: 300;
  line-height: 1.7;
  max-width: 560px;
}

.hero-subtitle strong {
  color: var(--text);
  font-weight: 500;
}

/* CTA Buttons */
.hero-cta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--accent);
  color: #000;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius-sm);
  transition: opacity var(--transition), transform var(--transition);
  letter-spacing: -0.01em;
}

.btn-primary:hover  { opacity: 0.85; }
.btn-primary:active { transform: scale(0.97); }

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--text-2);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--border-2);
  border-radius: var(--radius-sm);
  transition: color var(--transition),
              border-color var(--transition),
              background var(--transition);
}

.btn-secondary:hover {
  color: var(--text);
  border-color: var(--border-3);
  background: var(--border);
}

/* Stats strip */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 0;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  overflow: hidden;
  margin-top: 1rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  padding: 1rem 2rem;
}

.stat-num {
  font-family: var(--font-mono);
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
}

.stat-lbl {
  font-size: 0.7rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.35;
  animation: scrollBob 2s ease-in-out infinite;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--accent), transparent);
}

.scroll-text {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--text-2);
}

@keyframes scrollBob {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(6px); }
}

/* ══════════════════════════════════════════════
   TICKER
══════════════════════════════════════════════ */
.ticker-wrap {
  overflow: hidden;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--bg-2);
  padding: 0.9rem 0;
}

.ticker-track {
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
  animation: ticker 28s linear infinite;
  width: max-content;
}

.tick-item {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-2);
  letter-spacing: 0.04em;
}

.tick-sep {
  color: var(--accent);
  font-weight: 700;
}

@keyframes ticker {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ══════════════════════════════════════════════
   SHARED SECTION STYLES
══════════════════════════════════════════════ */
.section-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  background: var(--accent-dim);
  border: 1px solid var(--accent-mid);
  border-radius: 100px;
  padding: 4px 14px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #fff;
  line-height: 1.1;
}

.accent { color: var(--accent); }

.section-sub {
  font-size: 0.95rem;
  color: var(--text-2);
  font-weight: 300;
}

/* ══════════════════════════════════════════════
   FILTER SECTION
══════════════════════════════════════════════ */
.filter-section {
  padding: 5rem 0 0;
}

.filter-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
}

.filter-btn {
  background: transparent;
  color: var(--text-2);
  border: 1px solid var(--border-2);
  border-radius: var(--radius-xs);
  padding: 0.45rem 1rem;
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition);
}

.filter-btn:hover {
  color: var(--text);
  border-color: var(--border-3);
  background: var(--border);
}

.filter-btn.active {
  background: var(--accent);
  color: #000;
  border-color: var(--accent);
  font-weight: 700;
}

/* Search */
.search-wrap {
  position: relative;
  max-width: 380px;
  margin: 0 auto;
  margin-top: 0.75rem;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--muted);
  pointer-events: none;
}

.search-input {
  width: 100%;
  background: var(--card);
  border: 1px solid var(--border-2);
  border-radius: var(--radius-sm);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  padding: 0.7rem 1rem 0.7rem 2.75rem;
  outline: none;
  transition: border-color var(--transition), box-shadow var(--transition);
}

.search-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-dim);
}

.search-input::placeholder {
  color: var(--muted);
}

/* ══════════════════════════════════════════════
   CARDS SECTION
══════════════════════════════════════════════ */
.cards-section {
  padding: 2.5rem 0 6rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
}

/* ══════════════════════════════════════════════
   PROJECT CARD
══════════════════════════════════════════════ */
.project-card {
  position: relative;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.75rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  transition:
    border-color var(--transition),
    transform var(--transition),
    box-shadow var(--transition);
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent-mid),
    transparent
  );
  opacity: 0;
  transition: opacity var(--transition);
}

.project-card:hover {
  border-color: var(--border-3);
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.project-card:hover::before {
  opacity: 1;
}

/* Featured card */
.project-card--featured {
  border-color: var(--border-2);
  background: linear-gradient(135deg, #111 0%, #141414 100%);
}

.project-card--featured::before {
  background: linear-gradient(
    90deg,
    transparent,
    #ef444444,
    transparent
  );
}

/* Card glow effects */
.card-glow {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--accent-dim), transparent 70%);
  top: -80px;
  right: -80px;
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--transition);
}
.card-glow--blue   { background: radial-gradient(circle, var(--blue-dim),   transparent 70%); }
.card-glow--purple { background: radial-gradient(circle, var(--purple-dim), transparent 70%); }
.card-glow--orange { background: radial-gradient(circle, var(--orange-dim), transparent 70%); }
.card-glow--red    { background: radial-gradient(circle, var(--red-dim),    transparent 70%); }

.project-card:hover .card-glow { opacity: 1; }

/* Card top */
.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-num {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--muted);
  letter-spacing: 0.05em;
}

.card-tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

/* Tags */
.tag {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 100px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.tag--string    { background: var(--accent-dim);  color: var(--accent);  border: 1px solid var(--accent-mid); }
.tag--exception { background: var(--blue-dim);    color: var(--blue);    border: 1px solid #3b82f644; }
.tag--bom       { background: var(--purple-dim);  color: var(--purple);  border: 1px solid #a855f744; }
.tag--math      { background: var(--orange-dim);  color: var(--orange);  border: 1px solid #f9731644; }
.tag--mini      { background: var(--red-dim);     color: var(--red);     border: 1px solid #ef444444; }

/* Card icon */
.card-icon {
  width: 52px;
  height: 52px;
  background: var(--accent-dim);
  border: 1px solid var(--accent-mid);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}

.card-icon--blue   { background: var(--blue-dim);   border-color: #3b82f644; color: var(--blue);   }
.card-icon--purple { background: var(--purple-dim); border-color: #a855f744; color: var(--purple); }
.card-icon--orange { background: var(--orange-dim); border-color: #f9731644; color: var(--orange); }
.card-icon--red    { background: var(--red-dim);    border-color: #ef444444; color: var(--red);    }

/* Card text */
.card-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.card-desc {
  font-size: 0.85rem;
  color: var(--text-2);
  line-height: 1.65;
  flex: 1;
}

.card-desc code {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--accent);
  background: var(--accent-dim);
  padding: 1px 5px;
  border-radius: 3px;
}

/* Concepts */
.card-concepts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.concept {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--muted);
  background: var(--border);
  border: 1px solid var(--border-2);
  padding: 2px 8px;
  border-radius: var(--radius-xs);
}

/* Card footer */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border);
  margin-top: auto;
}

.card-example {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-2);
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.ex-label {
  font-size: 0.6rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.card-arrow {
  width: 32px;
  height: 32px;
  border: 1px solid var(--border-2);
  border-radius: var(--radius-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  flex-shrink: 0;
  transition: background var(--transition),
              border-color var(--transition),
              color var(--transition),
              transform var(--transition);
}

.project-card:hover .card-arrow {
  background: var(--accent);
  border-color: var(--accent);
  color: #000;
  transform: translateX(3px);
}

/* No results */
.no-results {
  text-align: center;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: var(--muted);
}

.no-results-icon {
  font-size: 3rem;
  opacity: 0.4;
}

.no-results p {
  font-size: 0.9rem;
  font-family: var(--font-mono);
}

/* ══════════════════════════════════════════════
   CONCEPTS SECTION
══════════════════════════════════════════════ */
.concepts-section {
  padding: 5rem 0;
  border-top: 1px solid var(--border);
}

.concepts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.concept-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color var(--transition), transform var(--transition);
}

.concept-card:hover {
  border-color: var(--border-3);
  transform: translateY(-2px);
}

.concept-icon {
  width: 44px;
  height: 44px;
  background: var(--accent-dim);
  border: 1px solid var(--accent-mid);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
}

.concept-icon--blue   { background: var(--blue-dim);   border-color: #3b82f644; color: var(--blue);   }
.concept-icon--purple { background: var(--purple-dim); border-color: #a855f744; color: var(--purple); }
.concept-icon--orange { background: var(--orange-dim); border-color: #f9731644; color: var(--orange); }

.concept-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.02em;
}

.concept-desc {
  font-size: 0.83rem;
  color: var(--text-2);
  line-height: 1.6;
  flex: 1;
}

.concept-count {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent);
  background: var(--accent-dim);
  border: 1px solid var(--accent-mid);
  padding: 2px 8px;
  border-radius: 100px;
  width: fit-content;
}

/* ══════════════════════════════════════════════
   ABOUT SECTION
══════════════════════════════════════════════ */
.about-section {
  padding: 5rem 0;
  border-top: 1px solid var(--border);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-left {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.about-desc {
  font-size: 0.95rem;
  color: var(--text-2);
  line-height: 1.75;
  font-weight: 300;
}

.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.pill {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-2);
  background: var(--border);
  border: 1px solid var(--border-2);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-xs);
}

/* Code block */
.code-block {
  background: #0d0d0d;
  border: 1px solid var(--border-2);
  border-radius: var(--radius);
  overflow: hidden;
}

.code-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
  background: #0a0a0a;
}

.code-dots {
  display: flex;
  gap: 0.4rem;
}

.dot-r { width:10px;height:10px;border-radius:50%;background:#ef4444; }
.dot-y { width:10px;height:10px;border-radius:50%;background:#f59e0b; }
.dot-g { width:10px;height:10px;border-radius:50%;background:#10b981; }

.code-filename {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--muted);
}

.code-body {
  padding: 1.5rem;
  overflow-x: auto;
}

.code-body code {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.9;
  display: block;
}

/* Syntax highlighting */
.c-kw  { color: #c678dd; }
.c-fn  { color: #61afef; }
.c-str { color: #98c379; }
.c-cls { color: #e5c07b; }
.c-op  { color: #56b6c2; }

/* ══════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════ */
.footer {
  border-top: 1px solid var(--border);
  padding: 3rem 0;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.footer-tagline {
  font-size: 0.82rem;
  color: var(--muted);
  font-family: var(--font-mono);
}

.footer-links {
  display: flex;
  gap: 0.25rem;
}

.footer-link {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.85rem;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-xs);
  transition: color var(--transition), background var(--transition);
}

.footer-link:hover {
  color: var(--text);
  background: var(--border);
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.footer-copy {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--muted);
}

/* ══════════════════════════════════════════════
   BACK TO TOP
══════════════════════════════════════════════ */
.back-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 42px;
  height: 42px;
  background: var(--card);
  border: 1px solid var(--border-2);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-2);
  cursor: pointer;
  z-index: 999;
  opacity: 0;
  transform: translateY(10px);
  transition: all var(--transition);
  pointer-events: none;
}

.back-top.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

.back-top:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: #000;
}

/* ══════════════════════════════════════════════
   CARD HIDE/SHOW (filter)
══════════════════════════════════════════════ */
.project-card.hidden {
  display: none;
}

/* ══════════════════════════════════════════════
   AOS (manual fade-up)
══════════════════════════════════════════════ */
[data-aos] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}

[data-aos].aos-animate {
  opacity: 1;
  transform: translateY(0);
}

/* ══════════════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════════════ */
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .about-right {
    order: -1;
  }
}

@media (max-width: 640px) {
  .nav-links { display: none; }
  .hero-stats {
    flex-wrap: wrap;
    justify-content: center;
  }
  .stat-divider { display: none; }
  .stat { padding: 0.75rem 1.25rem; }
  .cards-grid {
    grid-template-columns: 1fr;
  }
  .filter-bar { gap: 0.35rem; }
  .concepts-grid { grid-template-columns: 1fr; }
}
```

---

## 📁 File: `script.js`

```javascript
// ══════════════════════════════════════════════
// LANDING PAGE — script.js
// ══════════════════════════════════════════════

/* ─────────────────────────────────────
   1. NAVBAR SCROLL STATE
───────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });
}

/* ─────────────────────────────────────
   2. COUNTER ANIMATION (stats)
───────────────────────────────────── */
function animateCounters() {
  const counters = document.querySelectorAll(".stat-num[data-target]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el     = entry.target;
      const target = parseInt(el.getAttribute("data-target"));
      const suffix = el.textContent.includes("%") ? "%" : "";
      let   current = 0;
      const step    = Math.ceil(target / 40);
      const timer   = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current + suffix;
      }, 28);

      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach((el) => observer.observe(el));
}

/* ─────────────────────────────────────
   3. AOS — Scroll Reveal (manual)
───────────────────────────────────── */
function initAOS() {
  const elements = document.querySelectorAll("[data-aos]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el    = entry.target;
        const delay = parseInt(el.getAttribute("data-aos-delay") || "0");

        setTimeout(() => {
          el.classList.add("aos-animate");
        }, delay);

        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -40px 0px"
  });

  elements.forEach((el) => observer.observe(el));
}

/* ─────────────────────────────────────
   4. FILTER BUTTONS
───────────────────────────────────── */
function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards      = document.querySelectorAll(".project-card");
  const noResults  = document.getElementById("noResults");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Toggle active class
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      // Clear search
      document.getElementById("searchInput").value = "";

      applyFilter(filter, cards, noResults);
    });
  });
}

function applyFilter(filter, cards, noResults) {
  let visible = 0;

  cards.forEach((card) => {
    const category = card.getAttribute("data-category");
    const show = filter === "all" || category === filter;

    if (show) {
      card.classList.remove("hidden");
      visible++;
    } else {
      card.classList.add("hidden");
    }
  });

  noResults.style.display = visible === 0 ? "flex" : "none";
}

/* ─────────────────────────────────────
   5. SEARCH
───────────────────────────────────── */
function filterProjects() {
  const query     = document.getElementById("searchInput")
                    .value.toLowerCase().trim();
  const cards     = document.querySelectorAll(".project-card");
  const noResults = document.getElementById("noResults");

  // Reset filter buttons
  document.querySelectorAll(".filter-btn").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-filter") === "all");
  });

  let visible = 0;

  cards.forEach((card) => {
    const title    = card.querySelector(".card-title").textContent.toLowerCase();
    const desc     = card.querySelector(".card-desc").textContent.toLowerCase();
    const concepts = card.querySelector(".card-concepts").textContent.toLowerCase();
    const num      = card.querySelector(".card-num").textContent.toLowerCase();

    const match = (
      title.includes(query)    ||
      desc.includes(query)     ||
      concepts.includes(query) ||
      num.includes(query)      ||
      query === ""
    );

    if (match) {
      card.classList.remove("hidden");
      visible++;
    } else {
      card.classList.add("hidden");
    }
  });

  noResults.style.display = visible === 0 ? "flex" : "none";
}

/* ─────────────────────────────────────
   6. OPEN PROJECT
───────────────────────────────────── */
function openProject(path) {
  window.location.href = path;
}

/* ─────────────────────────────────────
   7. BACK TO TOP
───────────────────────────────────── */
function initBackTop() {
  const btn = document.getElementById("backTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ─────────────────────────────────────
   8. SMOOTH ANCHOR SCROLL
───────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top    = target.getBoundingClientRect().top
                       + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

/* ─────────────────────────────────────
   9. CARD KEYBOARD SUPPORT
───────────────────────────────────── */
function initCardKeyboard() {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.setAttribute("tabindex", "0");
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
  });
}

/* ─────────────────────────────────────
   10. ACTIVE NAV LINK ON SCROLL
───────────────────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        current = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.style.color = "";
      const href = link.getAttribute("href").replace("#", "");
      if (href === current) {
        link.style.color = "var(--accent)";
      }
    });
  }, { passive: true });
}

/* ─────────────────────────────────────
   INIT
───────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initAOS();
  animateCounters();
  initFilters();
  initBackTop();
  initSmoothScroll();
  initCardKeyboard();
  initActiveNav();

  // Trigger AOS for immediately visible elements
  setTimeout(() => {
    document.querySelectorAll("[data-aos]").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        const delay = parseInt(el.getAttribute("data-aos-delay") || "0");
        setTimeout(() => el.classList.add("aos-animate"), delay);
      }
    });
  }, 100);
});
```

---

## 📁 File: `README.md` *(Root — updated)*

````markdown
# 🖥️ JavaScript Lab — Operators & Conditional Statements

> **12 interactive JavaScript projects** with a unified dark minimal
> landing page. Pure HTML · CSS · JS — zero dependencies.

![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
![JS](https://img.shields.io/badge/JavaScript-Vanilla-f0db4f?style=flat-square&logo=javascript&logoColor=000)
![Projects](https://img.shields.io/badge/Projects-12-00ff88?style=flat-square&labelColor=111111)

---

## 🚀 Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/javascript-lab.git
cd javascript-lab
open index.html          # Opens the landing page
```

> Just open `index.html` in any browser — no install needed.

---

## 🗂️ Structure

```
javascript-lab/
│
├── index.html                    ← 🏠 Landing Page
├── style.css                     ← Landing Page Styles
├── script.js                     ← Landing Page Scripts
├── README.md                     ← This file
│
├── Q1-Remove-Duplicates/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── Q2-Character-Frequency/
├── Q3-First-Non-Repeating/
├── Q4-String-Compression/
├── Q5-Exception-Handling/
├── Q6-Nested-Exception/
├── Q7-Page-Redirect/
├── Q8-Digital-Clock/
├── Q9-Prime-Numbers/
├── Q10-Armstrong-Number/
├── Q11-Password-Generator/
└── Q12-Login-Attempt-System/
```

---

## 📋 Projects

| # | Project | Category | Concepts |
|---|---------|----------|----------|
| Q1  | Remove Duplicate Characters  | String    | Loops, Objects, Strings |
| Q2  | Character Frequency          | String    | Objects, Loops, Formatting |
| Q3  | First Non-Repeating Char     | String    | Two-pass loops, Objects |
| Q4  | String Compression           | String    | Nested loops, Counters |
| Q5  | Exception Handling           | Exception | try/catch/finally, throw |
| Q6  | Nested Exception Handling    | Exception | JSON.parse, Nested try/catch |
| Q7  | Page Redirect System         | BOM       | window.confirm, location |
| Q8  | Digital Clock                | BOM       | setInterval, Date object |
| Q9  | Prime Numbers in Range       | Math      | Math.sqrt, Nested loops |
| Q10 | Armstrong Number             | Math      | Math.pow, Digit extraction |
| Q11 | Password Generator           | Math      | Math.random, Fisher-Yates |
| Q12 | Login Attempt System         | Mini      | try/catch, throw, BOM, DOM |

---

## 🎨 Design System

| Token       | Value       |
|-------------|-------------|
| Background  | `#0a0a0a`   |
| Card        | `#111111`   |
| Accent      | `#00ff88`   |
| Font Mono   | JetBrains Mono |
| Font Sans   | Inter       |
| Pattern     | Dot-grid SVG |

---

## ✅ Status

![Status](https://img.shields.io/badge/all%2012%20projects-complete-00ff88?style=flat-square&labelColor=111111)
````

---

## 🗺️ Navigation Flow

```
index.html  (Landing Page)
    │
    ├── Click Q1 Card  →  Q1-Remove-Duplicates/index.html
    │                          └── "← Back to Home" → index.html
    │
    ├── Click Q2 Card  →  Q2-Character-Frequency/index.html
    │                          └── "← Back to Home" → index.html
    │
    ├── Click Q3 Card  →  Q3-First-Non-Repeating/index.html
    │   ...
    └── Click Q12 Card →  Q12-Login-Attempt-System/index.html
                               └── "← Back to Home" → index.html
```