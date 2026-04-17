# Project Design & Requirements Document (PDR)

---

## 📋 PROJECT OVERVIEW

**Project Name:** JavaScript Operators & Conditional Statements — Interactive Lab
**Subject:** JavaScript (Operators & Conditional Statements)
**Platform:** GitHub Repository
**Theme:** Dark Minimal UI | Black-dominant | Pattern Background | Aesthetic Typography

---

## 🗂️ REPOSITORY STRUCTURE

```
javascript-lab/
│
├── Q1-Remove-Duplicates/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── Q2-Character-Frequency/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── Q3-First-Non-Repeating/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── Q4-String-Compression/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── Q5-Exception-Handling/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── Q6-Nested-Exception/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── Q7-Page-Redirect/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── Q8-Digital-Clock/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── Q9-Prime-Numbers/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── Q10-Armstrong-Number/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── Q11-Password-Generator/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── Q12-Login-Attempt-System/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
└── README.md  ← (Root README)
```

---

# 🎨 GLOBAL DESIGN SYSTEM

> Every project uses this design — consistent dark minimal aesthetic.

**Colors:**
- Background: `#0a0a0a`
- Card: `#111111`
- Border: `#1e1e1e`
- Accent: `#ffffff` / `#a0a0a0`
- Green Highlight: `#00ff88`
- Red Error: `#ff4444`
- Font: `'JetBrains Mono'` + `'Inter'`

**Pattern:** Dot-grid SVG pattern on background

---

---

# ✅ Q1 — Remove Duplicate Characters

## 📁 File: `Q1-Remove-Duplicates/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Q1 — Remove Duplicates</title>
  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
</head>
<body>
  <div class="bg-pattern"></div>

  <div class="container">
    <div class="badge">Q1</div>
    <h1 class="title">Remove Duplicate <span class="accent">Characters</span></h1>
    <p class="subtitle">Input a string — duplicates will be removed without using Set</p>

    <div class="card">
      <div class="input-group">
        <label class="label">Enter String</label>
        <input
          type="text"
          id="inputStr"
          class="input"
          placeholder="e.g. programming"
          autocomplete="off"
        />
      </div>

      <button class="btn" onclick="removeDuplicates()">
        <span>Run</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5,3 19,12 5,21"/></svg>
      </button>

      <div class="output-box" id="output">
        <span class="output-placeholder">Output will appear here...</span>
      </div>

      <div class="trace-box" id="trace" style="display:none;"></div>
    </div>

    <a href="../index.html" class="back-link">← Back to Home</a>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

## 📁 File: `Q1-Remove-Duplicates/style.css`

```css
/* =============================================
   GLOBAL RESET & BASE
   ============================================= */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg:        #0a0a0a;
  --card:      #111111;
  --border:    #1e1e1e;
  --border-2:  #2a2a2a;
  --text:      #e8e8e8;
  --muted:     #555555;
  --accent:    #00ff88;
  --accent-2:  #0066ff;
  --error:     #ff4444;
  --warning:   #ffaa00;
  --font-mono: 'JetBrains Mono', monospace;
  --font-sans: 'Inter', sans-serif;
  --radius:    12px;
  --radius-sm: 6px;
}

html { scroll-behavior: smooth; }

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  position: relative;
  overflow-x: hidden;
}

/* =============================================
   DOT GRID PATTERN BACKGROUND
   ============================================= */
.bg-pattern {
  position: fixed;
  inset: 0;
  background-image: radial-gradient(circle, #ffffff12 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
  z-index: 0;
}

/* =============================================
   CONTAINER
   ============================================= */
.container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* =============================================
   BADGE
   ============================================= */
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--accent);
  color: #000;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 4px 12px;
  border-radius: 100px;
  width: fit-content;
  text-transform: uppercase;
}

/* =============================================
   TITLE & SUBTITLE
   ============================================= */
.title {
  font-family: var(--font-sans);
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: #fff;
}

.accent {
  color: var(--accent);
}

.subtitle {
  font-size: 0.9rem;
  color: var(--muted);
  font-weight: 300;
  line-height: 1.6;
}

/* =============================================
   CARD
   ============================================= */
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent)44, transparent);
}

/* =============================================
   INPUT GROUP
   ============================================= */
.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: var(--font-mono);
}

.input {
  background: #0d0d0d;
  border: 1px solid var(--border-2);
  border-radius: var(--radius-sm);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 1rem;
  padding: 0.8rem 1rem;
  width: 100%;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent)18;
}

.input::placeholder {
  color: var(--muted);
}

/* =============================================
   BUTTON
   ============================================= */
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--accent);
  color: #000;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: var(--radius-sm);
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  width: 100%;
}

.btn:hover  { opacity: 0.85; }
.btn:active { transform: scale(0.98); }

/* =============================================
   OUTPUT BOX
   ============================================= */
.output-box {
  background: #0d0d0d;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 1rem;
  font-family: var(--font-mono);
  font-size: 1rem;
  min-height: 60px;
  display: flex;
  align-items: center;
  transition: border-color 0.3s;
  word-break: break-all;
}

.output-box.success { border-color: var(--accent); }
.output-box.error   { border-color: var(--error);  }

.output-placeholder { color: var(--muted); font-size: 0.85rem; }

/* =============================================
   TRACE BOX
   ============================================= */
.trace-box {
  background: #0a0a0a;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 1rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.8;
  white-space: pre-wrap;
}

/* =============================================
   BACK LINK
   ============================================= */
.back-link {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.85rem;
  font-family: var(--font-mono);
  transition: color 0.2s;
  width: fit-content;
}

.back-link:hover { color: var(--accent); }
```

## 📁 File: `Q1-Remove-Duplicates/script.js`

```javascript
// =============================================
// Q1 — Remove Duplicate Characters from String
// Without using Set
// =============================================

function removeDuplicates() {
  const inputEl  = document.getElementById("inputStr");
  const outputEl = document.getElementById("output");
  const traceEl  = document.getElementById("trace");

  const str = inputEl.value.trim();

  // --- Validation ---
  if (str === "") {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ff4444">⚠ Please enter a string.</span>`;
    traceEl.style.display = "none";
    return;
  }

  // --- Core Logic (No Set) ---
  let result   = "";
  let seen     = {};        // plain object as frequency map
  let traceLog = "TRACE LOG\n";
  traceLog    += "─".repeat(36) + "\n";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (seen[char] === undefined) {
      // First time seeing this character
      seen[char]  = true;
      result     += char;
      traceLog   += `[${i}] '${char}' → NEW   → result: "${result}"\n`;
    } else {
      traceLog += `[${i}] '${char}' → SKIP  (already exists)\n`;
    }
  }

  // --- Render Output ---
  outputEl.className = "output-box success";
  outputEl.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:0.4rem;width:100%">
      <span style="color:#555;font-size:0.75rem;">INPUT  → <span style="color:#e8e8e8">${escapeHtml(str)}</span></span>
      <span style="color:#555;font-size:0.75rem;">OUTPUT → <span style="color:#00ff88;font-size:1.1rem">${escapeHtml(result)}</span></span>
    </div>
  `;

  traceEl.style.display = "block";
  traceEl.textContent   = traceLog;
}

// --- Helper ---
function escapeHtml(str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

// --- Enter key support ---
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inputStr").addEventListener("keydown", (e) => {
    if (e.key === "Enter") removeDuplicates();
  });
});
```

## 📁 File: `Q1-Remove-Duplicates/README.md`

````markdown
# Q1 — Remove Duplicate Characters from String

## 📌 Problem Statement
Given a string, remove all duplicate characters while preserving the original order of first occurrence — **without using `Set`**.

## 💡 Approach
- Loop through each character
- Use a plain object `{}` as a visited/seen map
- If character not in map → append to result + mark seen
- If already in map → skip

## 🧪 Example
| Input         | Output     |
|---------------|------------|
| `programming` | `progamin` |
| `hello`       | `helo`     |
| `aabbcc`      | `abc`      |

## 🧠 Concepts Used
- `for` loop
- Object as hash map
- Conditional (`if/else`)
- String concatenation

## 🚀 How to Run
1. Open `index.html` in browser
2. Type a string in the input field
3. Click **Run** or press **Enter**
4. View result + trace log

## 📁 Files
```
Q1-Remove-Duplicates/
├── index.html
├── style.css
├── script.js
└── README.md
```

## ✅ Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
````

---

---

# ✅ Q2 — Character Frequency in String

## 📁 File: `Q2-Character-Frequency/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Q2 — Character Frequency</title>
  <link rel="stylesheet" href="style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
</head>
<body>
  <div class="bg-pattern"></div>

  <div class="container">
    <div class="badge">Q2</div>
    <h1 class="title">Character <span class="accent">Frequency</span></h1>
    <p class="subtitle">Count how many times each character appears in the string</p>

    <div class="card">
      <div class="input-group">
        <label class="label">Enter String</label>
        <input
          type="text"
          id="inputStr"
          class="input"
          placeholder="e.g. javascript"
          autocomplete="off"
        />
      </div>

      <button class="btn" onclick="charFrequency()">
        <span>Analyze</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5,3 19,12 5,21"/></svg>
      </button>

      <div class="output-box" id="output">
        <span class="output-placeholder">Output will appear here...</span>
      </div>

      <div class="freq-grid" id="freqGrid" style="display:none;"></div>
    </div>

    <a href="../index.html" class="back-link">← Back to Home</a>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

## 📁 File: `Q2-Character-Frequency/style.css`

```css
/* =============================================
   GLOBAL RESET & BASE (same design system)
   ============================================= */
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

:root {
  --bg:        #0a0a0a;
  --card:      #111111;
  --border:    #1e1e1e;
  --border-2:  #2a2a2a;
  --text:      #e8e8e8;
  --muted:     #555555;
  --accent:    #00ff88;
  --error:     #ff4444;
  --font-mono: 'JetBrains Mono', monospace;
  --font-sans: 'Inter', sans-serif;
  --radius:    12px;
  --radius-sm: 6px;
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  position: relative;
}

.bg-pattern {
  position: fixed; inset: 0;
  background-image: radial-gradient(circle, #ffffff12 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none; z-index: 0;
}

.container {
  position: relative; z-index: 1;
  width: 100%; max-width: 640px;
  display: flex; flex-direction: column; gap: 1.5rem;
}

.badge {
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--accent); color: #000;
  font-family: var(--font-mono); font-size: 0.7rem; font-weight: 700;
  letter-spacing: 0.1em; padding: 4px 12px; border-radius: 100px;
  width: fit-content; text-transform: uppercase;
}

.title {
  font-family: var(--font-sans);
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 600; line-height: 1.2;
  letter-spacing: -0.03em; color: #fff;
}

.accent { color: var(--accent); }

.subtitle {
  font-size: 0.9rem; color: var(--muted);
  font-weight: 300; line-height: 1.6;
}

.card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 2rem;
  display: flex; flex-direction: column; gap: 1.2rem;
  position: relative; overflow: hidden;
}

.card::before {
  content: ''; position: absolute;
  top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent)44, transparent);
}

.input-group { display: flex; flex-direction: column; gap: 0.5rem; }

.label {
  font-size: 0.75rem; font-weight: 600; color: var(--muted);
  text-transform: uppercase; letter-spacing: 0.1em;
  font-family: var(--font-mono);
}

.input {
  background: #0d0d0d; border: 1px solid var(--border-2);
  border-radius: var(--radius-sm); color: var(--text);
  font-family: var(--font-mono); font-size: 1rem;
  padding: 0.8rem 1rem; width: 100%; outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent)18; }
.input::placeholder { color: var(--muted); }

.btn {
  display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  background: var(--accent); color: #000;
  font-family: var(--font-sans); font-size: 0.9rem; font-weight: 600;
  border: none; border-radius: var(--radius-sm);
  padding: 0.75rem 1.5rem; cursor: pointer;
  transition: opacity 0.2s, transform 0.1s; width: 100%;
}

.btn:hover  { opacity: 0.85; }
.btn:active { transform: scale(0.98); }

.output-box {
  background: #0d0d0d; border: 1px solid var(--border);
  border-radius: var(--radius-sm); padding: 1rem;
  font-family: var(--font-mono); font-size: 0.95rem;
  min-height: 60px; display: flex; align-items: center;
  transition: border-color 0.3s; word-break: break-all;
}

.output-box.success { border-color: var(--accent); }
.output-box.error   { border-color: var(--error);  }
.output-placeholder { color: var(--muted); font-size: 0.85rem; }

/* =============================================
   FREQUENCY GRID
   ============================================= */
.freq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
  gap: 0.6rem;
}

.freq-item {
  background: #0d0d0d;
  border: 1px solid var(--border-2);
  border-radius: var(--radius-sm);
  padding: 0.6rem 0.5rem;
  display: flex; flex-direction: column;
  align-items: center; gap: 0.3rem;
  transition: border-color 0.2s;
}

.freq-item:hover { border-color: var(--accent); }

.freq-char {
  font-family: var(--font-mono);
  font-size: 1.2rem; font-weight: 700;
  color: var(--accent);
}

.freq-count {
  font-family: var(--font-mono);
  font-size: 0.75rem; color: var(--muted);
}

.back-link {
  color: var(--muted); text-decoration: none;
  font-size: 0.85rem; font-family: var(--font-mono);
  transition: color 0.2s; width: fit-content;
}
.back-link:hover { color: var(--accent); }
```

## 📁 File: `Q2-Character-Frequency/script.js`

```javascript
// =============================================
// Q2 — Character Frequency in String
// =============================================

function charFrequency() {
  const inputEl    = document.getElementById("inputStr");
  const outputEl   = document.getElementById("output");
  const freqGridEl = document.getElementById("freqGrid");

  const str = inputEl.value.trim();

  // --- Validation ---
  if (str === "") {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ff4444">⚠ Please enter a string.</span>`;
    freqGridEl.style.display = "none";
    return;
  }

  // --- Core Logic ---
  const freq = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (freq[char] === undefined) {
      freq[char] = 1;
    } else {
      freq[char] = freq[char] + 1;
    }
  }

  // --- Format output string: {a:2, b:1, ...} ---
  let outputStr = "{ ";
  const keys    = Object.keys(freq);

  for (let i = 0; i < keys.length; i++) {
    outputStr += `${keys[i]}:${freq[keys[i]]}`;
    if (i < keys.length - 1) outputStr += ", ";
  }
  outputStr += " }";

  // --- Render output text ---
  outputEl.className = "output-box success";
  outputEl.innerHTML = `<span style="color:#00ff88">${escapeHtml(outputStr)}</span>`;

  // --- Render visual freq grid ---
  freqGridEl.style.display = "grid";
  freqGridEl.innerHTML     = "";

  for (let i = 0; i < keys.length; i++) {
    const char  = keys[i];
    const count = freq[char];

    const item      = document.createElement("div");
    item.className  = "freq-item";
    item.innerHTML  = `
      <span class="freq-char">${escapeHtml(char === " " ? "·" : char)}</span>
      <span class="freq-count">×${count}</span>
    `;
    freqGridEl.appendChild(item);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inputStr").addEventListener("keydown", (e) => {
    if (e.key === "Enter") charFrequency();
  });
});
```

## 📁 File: `Q2-Character-Frequency/README.md`

````markdown
# Q2 — Character Frequency in String

## 📌 Problem Statement
Count the frequency of each character in a string and display in `{char:count}` format.

## 💡 Approach
- Loop through each character
- Use a plain object `{}` as frequency map
- Increment count for each occurrence

## 🧪 Example
| Input         | Output                              |
|---------------|-------------------------------------|
| `hello`       | `{ h:1, e:1, l:2, o:1 }`           |
| `aab`         | `{ a:2, b:1 }`                      |

## 🧠 Concepts Used
- `for` loop
- Object as frequency map
- `Object.keys()`
- String formatting

## 🚀 How to Run
1. Open `index.html` in browser
2. Type a string
3. Click **Analyze**

## 📁 Files
```
Q2-Character-Frequency/
├── index.html
├── style.css
├── script.js
└── README.md
```

## ✅ Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
````

---

---

# ✅ Q3 — First Non-Repeating Character

## 📁 File: `Q3-First-Non-Repeating/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Q3 — First Non-Repeating Character</title>
  <link rel="stylesheet" href="style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
</head>
<body>
  <div class="bg-pattern"></div>

  <div class="container">
    <div class="badge">Q3</div>
    <h1 class="title">First <span class="accent">Non-Repeating</span> Character</h1>
    <p class="subtitle">Find the first character that appears only once in the string</p>

    <div class="card">
      <div class="input-group">
        <label class="label">Enter String</label>
        <input
          type="text"
          id="inputStr"
          class="input"
          placeholder="e.g. javascript"
          autocomplete="off"
        />
      </div>

      <button class="btn" onclick="findFirstNonRepeating()">
        <span>Find</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5,3 19,12 5,21"/></svg>
      </button>

      <div class="output-box" id="output">
        <span class="output-placeholder">Output will appear here...</span>
      </div>

      <!-- Character strip visualizer -->
      <div class="char-strip" id="charStrip" style="display:none;"></div>
    </div>

    <a href="../index.html" class="back-link">← Back to Home</a>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

## 📁 File: `Q3-First-Non-Repeating/style.css`

```css
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#0a0a0a;--card:#111111;--border:#1e1e1e;--border-2:#2a2a2a;
  --text:#e8e8e8;--muted:#555555;--accent:#00ff88;--error:#ff4444;
  --font-mono:'JetBrains Mono',monospace;--font-sans:'Inter',sans-serif;
  --radius:12px;--radius-sm:6px;
}
body{background:var(--bg);color:var(--text);font-family:var(--font-sans);
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:2rem 1rem;position:relative;}
.bg-pattern{position:fixed;inset:0;
  background-image:radial-gradient(circle,#ffffff12 1px,transparent 1px);
  background-size:28px 28px;pointer-events:none;z-index:0;}
.container{position:relative;z-index:1;width:100%;max-width:640px;
  display:flex;flex-direction:column;gap:1.5rem;}
.badge{display:inline-flex;align-items:center;justify-content:center;
  background:var(--accent);color:#000;font-family:var(--font-mono);
  font-size:0.7rem;font-weight:700;letter-spacing:0.1em;padding:4px 12px;
  border-radius:100px;width:fit-content;text-transform:uppercase;}
.title{font-family:var(--font-sans);font-size:clamp(1.6rem,4vw,2.2rem);
  font-weight:600;line-height:1.2;letter-spacing:-0.03em;color:#fff;}
.accent{color:var(--accent);}
.subtitle{font-size:0.9rem;color:var(--muted);font-weight:300;line-height:1.6;}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);
  padding:2rem;display:flex;flex-direction:column;gap:1.2rem;
  position:relative;overflow:hidden;}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--accent)44,transparent);}
.input-group{display:flex;flex-direction:column;gap:0.5rem;}
.label{font-size:0.75rem;font-weight:600;color:var(--muted);
  text-transform:uppercase;letter-spacing:0.1em;font-family:var(--font-mono);}
.input{background:#0d0d0d;border:1px solid var(--border-2);border-radius:var(--radius-sm);
  color:var(--text);font-family:var(--font-mono);font-size:1rem;
  padding:0.8rem 1rem;width:100%;outline:none;transition:border-color 0.2s,box-shadow 0.2s;}
.input:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent)18;}
.input::placeholder{color:var(--muted);}
.btn{display:flex;align-items:center;justify-content:center;gap:0.5rem;
  background:var(--accent);color:#000;font-family:var(--font-sans);
  font-size:0.9rem;font-weight:600;border:none;border-radius:var(--radius-sm);
  padding:0.75rem 1.5rem;cursor:pointer;transition:opacity 0.2s,transform 0.1s;width:100%;}
.btn:hover{opacity:0.85;}.btn:active{transform:scale(0.98);}
.output-box{background:#0d0d0d;border:1px solid var(--border);border-radius:var(--radius-sm);
  padding:1rem;font-family:var(--font-mono);font-size:0.95rem;
  min-height:60px;display:flex;align-items:center;
  transition:border-color 0.3s;word-break:break-all;}
.output-box.success{border-color:var(--accent);}
.output-box.error{border-color:var(--error);}
.output-placeholder{color:var(--muted);font-size:0.85rem;}

/* CHARACTER STRIP */
.char-strip{
  display:flex;flex-wrap:wrap;gap:0.4rem;padding:0.8rem;
  background:#0d0d0d;border:1px solid var(--border);border-radius:var(--radius-sm);
}
.char-bubble{
  display:inline-flex;align-items:center;justify-content:center;
  width:36px;height:36px;border-radius:6px;
  font-family:var(--font-mono);font-size:0.9rem;font-weight:700;
  border:1px solid var(--border-2);color:var(--muted);
  transition:all 0.2s;
}
.char-bubble.unique{border-color:var(--accent);color:var(--accent);background:#00ff8815;}
.char-bubble.duplicate{opacity:0.3;}

.back-link{color:var(--muted);text-decoration:none;
  font-size:0.85rem;font-family:var(--font-mono);
  transition:color 0.2s;width:fit-content;}
.back-link:hover{color:var(--accent);}
```

## 📁 File: `Q3-First-Non-Repeating/script.js`

```javascript
// =============================================
// Q3 — First Non-Repeating Character
// =============================================

function findFirstNonRepeating() {
  const inputEl   = document.getElementById("inputStr");
  const outputEl  = document.getElementById("output");
  const stripEl   = document.getElementById("charStrip");
  const str       = inputEl.value.trim();

  // --- Validation ---
  if (str === "") {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ff4444">⚠ Please enter a string.</span>`;
    stripEl.style.display = "none";
    return;
  }

  // --- Step 1: Build frequency map ---
  const freq = {};
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    freq[c] = (freq[c] === undefined) ? 1 : freq[c] + 1;
  }

  // --- Step 2: Find first with frequency === 1 ---
  let result     = null;
  let resultIdx  = -1;

  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) {
      result    = str[i];
      resultIdx = i;
      break;
    }
  }

  // --- Render output ---
  if (result !== null) {
    outputEl.className = "output-box success";
    outputEl.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:0.4rem;width:100%">
        <span style="color:#555;font-size:0.75rem;">FIRST NON-REPEATING CHARACTER</span>
        <span style="color:#00ff88;font-size:1.8rem;font-weight:700">${escapeHtml(result)}</span>
        <span style="color:#555;font-size:0.75rem;">at index <span style="color:#e8e8e8">[${resultIdx}]</span></span>
      </div>
    `;
  } else {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ff4444">No non-repeating character found.</span>`;
  }

  // --- Render char strip ---
  stripEl.style.display = "flex";
  stripEl.innerHTML     = "";

  for (let i = 0; i < str.length; i++) {
    const c      = str[i];
    const bubble = document.createElement("div");
    bubble.className = `char-bubble ${freq[c] === 1 ? "unique" : "duplicate"}`;
    bubble.textContent = c === " " ? "·" : c;
    bubble.title = `'${c}' appears ${freq[c]} time(s)`;
    stripEl.appendChild(bubble);
  }
}

function escapeHtml(str) {
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inputStr").addEventListener("keydown", (e) => {
    if (e.key === "Enter") findFirstNonRepeating();
  });
});
```

## 📁 File: `Q3-First-Non-Repeating/README.md`

````markdown
# Q3 — First Non-Repeating Character

## 📌 Problem Statement
Find the first character in a string that does not repeat.

## 💡 Approach
1. Build a frequency map using a loop
2. Loop again — return first char where `freq === 1`

## 🧪 Example
| Input         | Output |
|---------------|--------|
| `javascript`  | `j`    |
| `aab`         | `b`    |
| `aabb`        | `none` |

## 🧠 Concepts Used
- Two-pass loop
- Object frequency map
- Conditional (`if`)

## 🚀 How to Run
1. Open `index.html`
2. Enter string → Click **Find**

## ✅ Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
````

---

---

# ✅ Q4 — String Compression

## 📁 File: `Q4-String-Compression/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Q4 — String Compression</title>
  <link rel="stylesheet" href="style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
</head>
<body>
  <div class="bg-pattern"></div>
  <div class="container">
    <div class="badge">Q4</div>
    <h1 class="title">String <span class="accent">Compression</span></h1>
    <p class="subtitle">Compress consecutive repeating characters — e.g. "aaabbc" → "a3b2c1"</p>

    <div class="card">
      <div class="input-group">
        <label class="label">Enter String</label>
        <input type="text" id="inputStr" class="input" placeholder="e.g. aaabbc" autocomplete="off"/>
      </div>

      <button class="btn" onclick="compressString()">
        <span>Compress</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4,14 10,14 10,20"/><polyline points="20,10 14,10 14,4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
      </button>

      <div class="compare-row" id="compareRow" style="display:none;">
        <div class="compare-item">
          <span class="compare-label">ORIGINAL</span>
          <span class="compare-val" id="origVal"></span>
          <span class="compare-len" id="origLen"></span>
        </div>
        <div class="compare-arrow">→</div>
        <div class="compare-item">
          <span class="compare-label">COMPRESSED</span>
          <span class="compare-val accent" id="compVal"></span>
          <span class="compare-len" id="compLen"></span>
        </div>
      </div>

      <div class="output-box" id="output">
        <span class="output-placeholder">Output will appear here...</span>
      </div>
    </div>

    <a href="../index.html" class="back-link">← Back to Home</a>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## 📁 File: `Q4-String-Compression/style.css`

```css
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#0a0a0a;--card:#111111;--border:#1e1e1e;--border-2:#2a2a2a;
  --text:#e8e8e8;--muted:#555555;--accent:#00ff88;--error:#ff4444;
  --font-mono:'JetBrains Mono',monospace;--font-sans:'Inter',sans-serif;
  --radius:12px;--radius-sm:6px;
}
body{background:var(--bg);color:var(--text);font-family:var(--font-sans);
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:2rem 1rem;position:relative;}
.bg-pattern{position:fixed;inset:0;
  background-image:radial-gradient(circle,#ffffff12 1px,transparent 1px);
  background-size:28px 28px;pointer-events:none;z-index:0;}
.container{position:relative;z-index:1;width:100%;max-width:640px;
  display:flex;flex-direction:column;gap:1.5rem;}
.badge{display:inline-flex;align-items:center;justify-content:center;
  background:var(--accent);color:#000;font-family:var(--font-mono);
  font-size:0.7rem;font-weight:700;letter-spacing:0.1em;padding:4px 12px;
  border-radius:100px;width:fit-content;text-transform:uppercase;}
.title{font-family:var(--font-sans);font-size:clamp(1.6rem,4vw,2.2rem);
  font-weight:600;line-height:1.2;letter-spacing:-0.03em;color:#fff;}
.accent{color:var(--accent);}
.subtitle{font-size:0.9rem;color:var(--muted);font-weight:300;line-height:1.6;}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);
  padding:2rem;display:flex;flex-direction:column;gap:1.2rem;
  position:relative;overflow:hidden;}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--accent)44,transparent);}
.input-group{display:flex;flex-direction:column;gap:0.5rem;}
.label{font-size:0.75rem;font-weight:600;color:var(--muted);
  text-transform:uppercase;letter-spacing:0.1em;font-family:var(--font-mono);}
.input{background:#0d0d0d;border:1px solid var(--border-2);border-radius:var(--radius-sm);
  color:var(--text);font-family:var(--font-mono);font-size:1rem;
  padding:0.8rem 1rem;width:100%;outline:none;transition:border-color 0.2s,box-shadow 0.2s;}
.input:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent)18;}
.input::placeholder{color:var(--muted);}
.btn{display:flex;align-items:center;justify-content:center;gap:0.5rem;
  background:var(--accent);color:#000;font-family:var(--font-sans);
  font-size:0.9rem;font-weight:600;border:none;border-radius:var(--radius-sm);
  padding:0.75rem 1.5rem;cursor:pointer;transition:opacity 0.2s,transform 0.1s;width:100%;}
.btn:hover{opacity:0.85;}.btn:active{transform:scale(0.98);}
.output-box{background:#0d0d0d;border:1px solid var(--border);border-radius:var(--radius-sm);
  padding:1rem;font-family:var(--font-mono);font-size:0.95rem;
  min-height:60px;display:flex;align-items:center;transition:border-color 0.3s;word-break:break-all;}
.output-box.success{border-color:var(--accent);}
.output-box.error{border-color:var(--error);}
.output-placeholder{color:var(--muted);font-size:0.85rem;}

/* COMPARE ROW */
.compare-row{
  display:flex;align-items:center;gap:1rem;
  padding:1rem;background:#0d0d0d;
  border:1px solid var(--border);border-radius:var(--radius-sm);
}
.compare-item{display:flex;flex-direction:column;gap:0.25rem;flex:1;}
.compare-label{font-size:0.65rem;color:var(--muted);letter-spacing:0.1em;font-family:var(--font-mono);}
.compare-val{font-family:var(--font-mono);font-size:1.1rem;font-weight:700;word-break:break-all;}
.compare-len{font-size:0.7rem;color:var(--muted);font-family:var(--font-mono);}
.compare-arrow{font-size:1.5rem;color:var(--muted);}
.back-link{color:var(--muted);text-decoration:none;font-size:0.85rem;
  font-family:var(--font-mono);transition:color 0.2s;width:fit-content;}
.back-link:hover{color:var(--accent);}
```

## 📁 File: `Q4-String-Compression/script.js`

```javascript
// =============================================
// Q4 — String Compression
// "aaabbc" → "a3b2c1"
// Using loops ONLY — no built-in tricks
// =============================================

function compressString() {
  const inputEl      = document.getElementById("inputStr");
  const outputEl     = document.getElementById("output");
  const compareRowEl = document.getElementById("compareRow");

  const str = inputEl.value.trim();

  // --- Validation ---
  if (str === "") {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ff4444">⚠ Please enter a string.</span>`;
    compareRowEl.style.display = "none";
    return;
  }

  // --- Core Logic ---
  let compressed = "";
  let i          = 0;

  while (i < str.length) {
    const currentChar = str[i];
    let   count       = 1;

    // Count consecutive same characters
    while (i + count < str.length && str[i + count] === currentChar) {
      count++;
    }

    compressed += currentChar + count;
    i          += count;
  }

  // --- Render compare ---
  compareRowEl.style.display = "flex";
  document.getElementById("origVal").textContent  = str;
  document.getElementById("origLen").textContent  = `length: ${str.length}`;
  document.getElementById("compVal").textContent  = compressed;
  document.getElementById("compLen").textContent  = `length: ${compressed.length}`;

  // --- Render output ---
  const ratio = ((1 - compressed.length / str.length) * 100).toFixed(1);
  outputEl.className = "output-box success";
  outputEl.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:0.4rem;width:100%">
      <span style="color:#00ff88;font-size:1.2rem;font-weight:700">${escapeHtml(compressed)}</span>
      <span style="color:#555;font-size:0.75rem">
        ${compressed.length < str.length
          ? `Compressed by <span style="color:#00ff88">${ratio}%</span>`
          : `<span style="color:#ffaa00">No compression gain</span>`}
      </span>
    </div>
  `;
}

function escapeHtml(str) {
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inputStr").addEventListener("keydown", (e) => {
    if (e.key === "Enter") compressString();
  });
});
```

## 📁 File: `Q4-String-Compression/README.md`

````markdown
# Q4 — String Compression

## 📌 Problem Statement
Compress a string by counting consecutive characters.
Input: `"aaabbc"` → Output: `"a3b2c1"`

## 💡 Approach
- Use a `while` loop
- Track current character and consecutive count
- Append `char + count` to result

## 🧪 Example
| Input      | Output    |
|------------|-----------|
| `aaabbc`   | `a3b2c1`  |
| `aabccc`   | `a2b1c3`  |

## 🧠 Concepts Used
- `while` loop (nested)
- String concatenation
- Conditional logic

## ✅ Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
````

---

---

# ✅ Q5 — Exception Handling with Multiple Cases

## 📁 File: `Q5-Exception-Handling/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Q5 — Exception Handling</title>
  <link rel="stylesheet" href="style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
</head>
<body>
  <div class="bg-pattern"></div>
  <div class="container">
    <div class="badge">Q5</div>
    <h1 class="title">Exception <span class="accent">Handling</span></h1>
    <p class="subtitle">Two numbers + operator — handles invalid operator & division by zero</p>

    <div class="card">
      <div class="input-row">
        <div class="input-group">
          <label class="label">Number A</label>
          <input type="number" id="numA" class="input" placeholder="e.g. 10"/>
        </div>

        <div class="input-group op-group">
          <label class="label">Operator</label>
          <select id="operator" class="input select">
            <option value="+">+</option>
            <option value="-">−</option>
            <option value="*">×</option>
            <option value="/">÷</option>
            <option value="%">% (invalid test)</option>
          </select>
        </div>

        <div class="input-group">
          <label class="label">Number B</label>
          <input type="number" id="numB" class="input" placeholder="e.g. 0"/>
        </div>
      </div>

      <button class="btn" onclick="calculate()">
        <span>Calculate</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5,3 19,12 5,21"/></svg>
      </button>

      <div class="output-box" id="output">
        <span class="output-placeholder">Output will appear here...</span>
      </div>

      <!-- Try/Catch/Finally log -->
      <div class="log-box" id="logBox" style="display:none;"></div>
    </div>

    <a href="../index.html" class="back-link">← Back to Home</a>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## 📁 File: `Q5-Exception-Handling/style.css`

```css
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#0a0a0a;--card:#111111;--border:#1e1e1e;--border-2:#2a2a2a;
  --text:#e8e8e8;--muted:#555555;--accent:#00ff88;--error:#ff4444;--warning:#ffaa00;
  --font-mono:'JetBrains Mono',monospace;--font-sans:'Inter',sans-serif;
  --radius:12px;--radius-sm:6px;
}
body{background:var(--bg);color:var(--text);font-family:var(--font-sans);
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:2rem 1rem;position:relative;}
.bg-pattern{position:fixed;inset:0;
  background-image:radial-gradient(circle,#ffffff12 1px,transparent 1px);
  background-size:28px 28px;pointer-events:none;z-index:0;}
.container{position:relative;z-index:1;width:100%;max-width:640px;
  display:flex;flex-direction:column;gap:1.5rem;}
.badge{display:inline-flex;align-items:center;justify-content:center;
  background:var(--accent);color:#000;font-family:var(--font-mono);
  font-size:0.7rem;font-weight:700;letter-spacing:0.1em;padding:4px 12px;
  border-radius:100px;width:fit-content;text-transform:uppercase;}
.title{font-family:var(--font-sans);font-size:clamp(1.6rem,4vw,2.2rem);
  font-weight:600;line-height:1.2;letter-spacing:-0.03em;color:#fff;}
.accent{color:var(--accent);}
.subtitle{font-size:0.9rem;color:var(--muted);font-weight:300;line-height:1.6;}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);
  padding:2rem;display:flex;flex-direction:column;gap:1.2rem;
  position:relative;overflow:hidden;}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--accent)44,transparent);}

/* Input Row */
.input-row{display:grid;grid-template-columns:1fr auto 1fr;gap:0.8rem;align-items:end;}
.op-group{max-width:90px;}
.input-group{display:flex;flex-direction:column;gap:0.5rem;}
.label{font-size:0.75rem;font-weight:600;color:var(--muted);
  text-transform:uppercase;letter-spacing:0.1em;font-family:var(--font-mono);}
.input{background:#0d0d0d;border:1px solid var(--border-2);border-radius:var(--radius-sm);
  color:var(--text);font-family:var(--font-mono);font-size:1rem;
  padding:0.8rem 1rem;width:100%;outline:none;transition:border-color 0.2s,box-shadow 0.2s;}
.input:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent)18;}
.input::placeholder{color:var(--muted);}
.select{cursor:pointer;appearance:none;-webkit-appearance:none;text-align:center;}

.btn{display:flex;align-items:center;justify-content:center;gap:0.5rem;
  background:var(--accent);color:#000;font-family:var(--font-sans);
  font-size:0.9rem;font-weight:600;border:none;border-radius:var(--radius-sm);
  padding:0.75rem 1.5rem;cursor:pointer;transition:opacity 0.2s,transform 0.1s;width:100%;}
.btn:hover{opacity:0.85;}.btn:active{transform:scale(0.98);}
.output-box{background:#0d0d0d;border:1px solid var(--border);border-radius:var(--radius-sm);
  padding:1rem;font-family:var(--font-mono);font-size:0.95rem;
  min-height:60px;display:flex;align-items:center;transition:border-color 0.3s;word-break:break-all;}
.output-box.success{border-color:var(--accent);}
.output-box.error{border-color:var(--error);}
.output-placeholder{color:var(--muted);font-size:0.85rem;}

/* LOG BOX */
.log-box{
  background:#0a0a0a;border:1px solid var(--border);
  border-radius:var(--radius-sm);padding:1rem;
  font-family:var(--font-mono);font-size:0.8rem;
  line-height:2;
}
.log-try     { color:#0066ff; }
.log-catch   { color:#ff4444; }
.log-finally { color:#ffaa00; }
.log-success { color:#00ff88; }

.back-link{color:var(--muted);text-decoration:none;font-size:0.85rem;
  font-family:var(--font-mono);transition:color 0.2s;width:fit-content;}
.back-link:hover{color:var(--accent);}
```

## 📁 File: `Q5-Exception-Handling/script.js`

```javascript
// =============================================
// Q5 — Exception Handling with Multiple Cases
// try...catch...finally
// =============================================

function calculate() {
  const numAEl    = document.getElementById("numA");
  const numBEl    = document.getElementById("numB");
  const opEl      = document.getElementById("operator");
  const outputEl  = document.getElementById("output");
  const logBoxEl  = document.getElementById("logBox");

  const a  = parseFloat(numAEl.value);
  const b  = parseFloat(numBEl.value);
  const op = opEl.value;

  let logHTML = "";
  let result;

  try {
    logHTML += `<div class="log-try">▶ TRY block entered</div>`;

    // --- Validate inputs ---
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Both inputs must be valid numbers.");
    }

    // --- Validate operator ---
    if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
      throw new Error(`Invalid operator: "${op}" — Allowed: +, -, *, /`);
    }

    // --- Division by zero check ---
    if (op === "/" && b === 0) {
      throw new Error("Division by zero is not allowed.");
    }

    // --- Perform calculation ---
    if (op === "+") result = a + b;
    if (op === "-") result = a - b;
    if (op === "*") result = a * b;
    if (op === "/") result = a / b;

    logHTML += `<div class="log-success">✓ Calculation successful: ${a} ${op} ${b} = ${result}</div>`;

    outputEl.className = "output-box success";
    outputEl.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:0.4rem;width:100%">
        <span style="color:#555;font-size:0.75rem;">RESULT</span>
        <span style="color:#00ff88;font-size:1.6rem;font-weight:700">${a} ${escapeOp(op)} ${b} = ${result}</span>
      </div>
    `;

  } catch (err) {
    logHTML += `<div class="log-catch">✗ CATCH → ${escapeHtml(err.message)}</div>`;

    outputEl.className = "output-box error";
    outputEl.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:0.4rem;width:100%">
        <span style="color:#ff4444;font-size:0.75rem;">ERROR</span>
        <span style="color:#ff4444">${escapeHtml(err.message)}</span>
      </div>
    `;

  } finally {
    logHTML += `<div class="log-finally">⬡ FINALLY block always runs — execution complete</div>`;
    logBoxEl.style.display = "block";
    logBoxEl.innerHTML     = logHTML;
  }
}

function escapeOp(op) {
  if (op === "*") return "×";
  if (op === "/") return "÷";
  return op;
}

function escapeHtml(str) {
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
```

## 📁 File: `Q5-Exception-Handling/README.md`

````markdown
# Q5 — Exception Handling with Multiple Cases

## 📌 Problem Statement
Take two numbers and an operator. Handle:
- Invalid operator
- Division by zero
- Using `try...catch...finally`

## 💡 Approach
- Wrap logic in `try` block
- `throw` custom errors for invalid cases
- `catch` displays error message
- `finally` always runs

## 🧪 Test Cases
| A  | Op | B  | Expected           |
|----|----|----|------------------  |
| 10 | /  | 0  | Division by zero   |
| 5  | %  | 2  | Invalid operator   |
| 10 | +  | 5  | 15                 |

## ✅ Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
````

---

---

# ✅ Q6 — Nested Exception Handling

## 📁 File: `Q6-Nested-Exception/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Q6 — Nested Exception Handling</title>
  <link rel="stylesheet" href="style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
</head>
<body>
  <div class="bg-pattern"></div>
  <div class="container">
    <div class="badge">Q6</div>
    <h1 class="title">Nested <span class="accent">Exception Handling</span></h1>
    <p class="subtitle">Parse JSON input — handles invalid JSON with try...catch</p>

    <div class="card">
      <div class="input-group">
        <label class="label">Enter JSON String</label>
        <textarea
          id="jsonInput"
          class="input textarea"
          placeholder='e.g. {"name":"John","age":25}'
          rows="4"
        ></textarea>
      </div>

      <div class="btn-row">
        <button class="btn" onclick="parseJSON()">
          <span>Parse JSON</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5,3 19,12 5,21"/></svg>
        </button>
        <button class="btn btn-outline" onclick="loadSample(true)">Valid Sample</button>
        <button class="btn btn-outline btn-error" onclick="loadSample(false)">Invalid Sample</button>
      </div>

      <div class="output-box" id="output">
        <span class="output-placeholder">Parsed JSON will appear here...</span>
      </div>

      <div class="json-tree" id="jsonTree" style="display:none;"></div>
      <div class="log-box"  id="logBox"  style="display:none;"></div>
    </div>

    <a href="../index.html" class="back-link">← Back to Home</a>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## 📁 File: `Q6-Nested-Exception/style.css`

```css
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#0a0a0a;--card:#111111;--border:#1e1e1e;--border-2:#2a2a2a;
  --text:#e8e8e8;--muted:#555555;--accent:#00ff88;--error:#ff4444;--warning:#ffaa00;
  --font-mono:'JetBrains Mono',monospace;--font-sans:'Inter',sans-serif;
  --radius:12px;--radius-sm:6px;
}
body{background:var(--bg);color:var(--text);font-family:var(--font-sans);
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:2rem 1rem;position:relative;}
.bg-pattern{position:fixed;inset:0;
  background-image:radial-gradient(circle,#ffffff12 1px,transparent 1px);
  background-size:28px 28px;pointer-events:none;z-index:0;}
.container{position:relative;z-index:1;width:100%;max-width:640px;
  display:flex;flex-direction:column;gap:1.5rem;}
.badge{display:inline-flex;align-items:center;justify-content:center;
  background:var(--accent);color:#000;font-family:var(--font-mono);
  font-size:0.7rem;font-weight:700;letter-spacing:0.1em;padding:4px 12px;
  border-radius:100px;width:fit-content;text-transform:uppercase;}
.title{font-family:var(--font-sans);font-size:clamp(1.6rem,4vw,2.2rem);
  font-weight:600;line-height:1.2;letter-spacing:-0.03em;color:#fff;}
.accent{color:var(--accent);}
.subtitle{font-size:0.9rem;color:var(--muted);font-weight:300;line-height:1.6;}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);
  padding:2rem;display:flex;flex-direction:column;gap:1.2rem;
  position:relative;overflow:hidden;}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--accent)44,transparent);}
.input-group{display:flex;flex-direction:column;gap:0.5rem;}
.label{font-size:0.75rem;font-weight:600;color:var(--muted);
  text-transform:uppercase;letter-spacing:0.1em;font-family:var(--font-mono);}
.input{background:#0d0d0d;border:1px solid var(--border-2);border-radius:var(--radius-sm);
  color:var(--text);font-family:var(--font-mono);font-size:0.9rem;
  padding:0.8rem 1rem;width:100%;outline:none;transition:border-color 0.2s,box-shadow 0.2s;}
.input:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent)18;}
.textarea{resize:vertical;min-height:100px;line-height:1.6;}
.btn-row{display:flex;gap:0.6rem;flex-wrap:wrap;}
.btn{display:flex;align-items:center;justify-content:center;gap:0.5rem;
  background:var(--accent);color:#000;font-family:var(--font-sans);
  font-size:0.9rem;font-weight:600;border:none;border-radius:var(--radius-sm);
  padding:0.75rem 1.2rem;cursor:pointer;transition:opacity 0.2s,transform 0.1s;flex:1;}
.btn:hover{opacity:0.85;}.btn:active{transform:scale(0.98);}
.btn-outline{background:transparent;color:var(--text);border:1px solid var(--border-2);flex:0 0 auto;}
.btn-outline:hover{border-color:var(--accent);color:var(--accent);}
.btn-error{color:var(--error) !important;border-color:var(--error) !important;}
.btn-error:hover{background:var(--error)15 !important;}

.output-box{background:#0d0d0d;border:1px solid var(--border);border-radius:var(--radius-sm);
  padding:1rem;font-family:var(--font-mono);font-size:0.85rem;
  min-height:60px;display:flex;align-items:center;transition:border-color 0.3s;word-break:break-all;}
.output-box.success{border-color:var(--accent);}
.output-box.error{border-color:var(--error);}
.output-placeholder{color:var(--muted);font-size:0.85rem;}

/* JSON TREE */
.json-tree{
  background:#0a0a0a;border:1px solid var(--border);
  border-radius:var(--radius-sm);padding:1rem;
  font-family:var(--font-mono);font-size:0.82rem;line-height:2;
}
.json-key   { color:#0066ff; }
.json-str   { color:#00ff88; }
.json-num   { color:#ff9900; }
.json-bool  { color:#ff4444; }
.json-null  { color:#555; }

.log-box{background:#0a0a0a;border:1px solid var(--border);
  border-radius:var(--radius-sm);padding:1rem;
  font-family:var(--font-mono);font-size:0.8rem;line-height:2;}
.log-try{color:#0066ff;}.log-catch{color:#ff4444;}.log-finally{color:#ffaa00;}.log-ok{color:#00ff88;}
.back-link{color:var(--muted);text-decoration:none;font-size:0.85rem;
  font-family:var(--font-mono);transition:color 0.2s;width:fit-content;}
.back-link:hover{color:var(--accent);}
```

## 📁 File: `Q6-Nested-Exception/script.js`

```javascript
// =============================================
// Q6 — Nested Exception Handling
// JSON.parse with try...catch
// =============================================

function parseJSON() {
  const jsonInput = document.getElementById("jsonInput").value.trim();
  const outputEl  = document.getElementById("output");
  const treeEl    = document.getElementById("jsonTree");
  const logBoxEl  = document.getElementById("logBox");

  let logHTML = "";
  logBoxEl.style.display = "block";
  treeEl.style.display   = "none";

  try {
    logHTML += `<div class="log-try">▶ OUTER TRY — Attempting to validate input...</div>`;

    if (jsonInput === "") {
      throw new Error("Input cannot be empty.");
    }

    try {
      logHTML += `<div class="log-try">  ▶ INNER TRY — Calling JSON.parse()...</div>`;

      const parsed = JSON.parse(jsonInput);

      logHTML += `<div class="log-ok">  ✓ JSON parsed successfully!</div>`;

      outputEl.className = "output-box success";
      outputEl.innerHTML = `<span style="color:#00ff88">✓ Valid JSON — parsed successfully</span>`;

      // Render tree
      treeEl.style.display = "block";
      treeEl.innerHTML     = renderJSONTree(parsed, 0);

    } catch (innerErr) {
      logHTML += `<div class="log-catch">  ✗ INNER CATCH → SyntaxError: ${escapeHtml(innerErr.message)}</div>`;

      outputEl.className = "output-box error";
      outputEl.innerHTML = `
        <div style="display:flex;flex-direction:column;gap:0.3rem">
          <span style="color:#ff4444;font-size:0.75rem">SYNTAX ERROR</span>
          <span style="color:#ff4444">${escapeHtml(innerErr.message)}</span>
        </div>
      `;
    }

  } catch (outerErr) {
    logHTML += `<div class="log-catch">✗ OUTER CATCH → ${escapeHtml(outerErr.message)}</div>`;

    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ff4444">${escapeHtml(outerErr.message)}</span>`;

  } finally {
    logHTML += `<div class="log-finally">⬡ FINALLY — execution complete</div>`;
    logBoxEl.innerHTML = logHTML;
  }
}

// --- Render JSON as syntax-highlighted tree ---
function renderJSONTree(obj, depth) {
  const indent = "&nbsp;".repeat(depth * 3);
  let   html   = "";

  if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      const v = obj[k];
      html += `${indent}<span class="json-key">"${escapeHtml(k)}"</span>: ${renderValue(v, depth)}<br>`;
    }
  } else if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      html += `${indent}[${i}]: ${renderValue(obj[i], depth)}<br>`;
    }
  } else {
    html += renderValue(obj, depth);
  }
  return html;
}

function renderValue(v, depth) {
  if (v === null)             return `<span class="json-null">null</span>`;
  if (typeof v === "boolean") return `<span class="json-bool">${v}</span>`;
  if (typeof v === "number")  return `<span class="json-num">${v}</span>`;
  if (typeof v === "string")  return `<span class="json-str">"${escapeHtml(v)}"</span>`;
  if (typeof v === "object")  return `<br>${renderJSONTree(v, depth + 1)}`;
  return escapeHtml(String(v));
}

function loadSample(valid) {
  const el = document.getElementById("jsonInput");
  if (valid) {
    el.value = '{"name":"Alice","age":30,"skills":["JS","CSS"],"active":true}';
  } else {
    el.value = '{name: "Bob", age: 25,}';
  }
}

function escapeHtml(str) {
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
```

## 📁 File: `Q6-Nested-Exception/README.md`

````markdown
# Q6 — Nested Exception Handling

## 📌 Problem Statement
Take a JSON string input, parse it using `JSON.parse()`, and handle invalid JSON using nested `try...catch`.

## 💡 Approach
- **Outer try**: Validate input is not empty
- **Inner try**: `JSON.parse()` — catches `SyntaxError`
- **finally**: Always executes

## 🧪 Test Cases
| Input                     | Result         |
|---------------------------|----------------|
| `{"name":"John"}`         | ✓ Valid JSON   |
| `{name: "John",}`         | ✗ SyntaxError  |
| (empty)                   | ✗ Empty error  |

## ✅ Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
````

---

---

# ✅ Q7 — BOM Page Redirect System

## 📁 File: `Q7-Page-Redirect/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Q7 — Page Redirect System</title>
  <link rel="stylesheet" href="style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
</head>
<body>
  <div class="bg-pattern"></div>
  <div class="container">
    <div class="badge">Q7 · BOM</div>
    <h1 class="title">Page <span class="accent">Redirect</span> System</h1>
    <p class="subtitle">Uses <code>window.confirm()</code> and <code>window.location</code> for navigation</p>

    <div class="card">
      <!-- Site cards to redirect -->
      <div class="sites-grid">
        <div class="site-card" data-url="https://google.com" data-name="Google">
          <div class="site-icon">G</div>
          <span class="site-name">Google</span>
          <span class="site-url">google.com</span>
        </div>
        <div class="site-card" data-url="https://github.com" data-name="GitHub">
          <div class="site-icon">GH</div>
          <span class="site-name">GitHub</span>
          <span class="site-url">github.com</span>
        </div>
        <div class="site-card" data-url="https://stackoverflow.com" data-name="Stack Overflow">
          <div class="site-icon">SO</div>
          <span class="site-name">Stack Overflow</span>
          <span class="site-url">stackoverflow.com</span>
        </div>
        <div class="site-card" data-url="https://mdn.web.docs.org" data-name="MDN Docs">
          <div class="site-icon">MD</div>
          <span class="site-name">MDN Docs</span>
          <span class="site-url">developer.mozilla.org</span>
        </div>
      </div>

      <div class="output-box" id="output">
        <span class="output-placeholder">Click a site card to trigger redirect...</span>
      </div>

      <!-- BOM info display -->
      <div class="bom-info">
        <div class="bom-item">
          <span class="bom-label">Current URL</span>
          <span class="bom-val" id="currentUrl"></span>
        </div>
        <div class="bom-item">
          <span class="bom-label">User Agent</span>
          <span class="bom-val" id="userAgent"></span>
        </div>
        <div class="bom-item">
          <span class="bom-label">Screen Resolution</span>
          <span class="bom-val" id="screenRes"></span>
        </div>
      </div>
    </div>

    <a href="../index.html" class="back-link">← Back to Home</a>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## 📁 File: `Q7-Page-Redirect/style.css`

```css
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#0a0a0a;--card:#111111;--border:#1e1e1e;--border-2:#2a2a2a;
  --text:#e8e8e8;--muted:#555555;--accent:#00ff88;--error:#ff4444;
  --font-mono:'JetBrains Mono',monospace;--font-sans:'Inter',sans-serif;
  --radius:12px;--radius-sm:6px;
}
body{background:var(--bg);color:var(--text);font-family:var(--font-sans);
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:2rem 1rem;position:relative;}
.bg-pattern{position:fixed;inset:0;
  background-image:radial-gradient(circle,#ffffff12 1px,transparent 1px);
  background-size:28px 28px;pointer-events:none;z-index:0;}
.container{position:relative;z-index:1;width:100%;max-width:640px;
  display:flex;flex-direction:column;gap:1.5rem;}
.badge{display:inline-flex;align-items:center;justify-content:center;
  background:var(--accent);color:#000;font-family:var(--font-mono);
  font-size:0.7rem;font-weight:700;letter-spacing:0.1em;padding:4px 12px;
  border-radius:100px;width:fit-content;text-transform:uppercase;}
.title{font-family:var(--font-sans);font-size:clamp(1.6rem,4vw,2.2rem);
  font-weight:600;line-height:1.2;letter-spacing:-0.03em;color:#fff;}
.accent{color:var(--accent);}
code{font-family:var(--font-mono);font-size:0.85rem;color:var(--accent);
  background:#00ff8815;padding:2px 6px;border-radius:4px;}
.subtitle{font-size:0.9rem;color:var(--muted);font-weight:300;line-height:1.6;}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);
  padding:2rem;display:flex;flex-direction:column;gap:1.2rem;
  position:relative;overflow:hidden;}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--accent)44,transparent);}
.output-box{background:#0d0d0d;border:1px solid var(--border);border-radius:var(--radius-sm);
  padding:1rem;font-family:var(--font-mono);font-size:0.9rem;
  min-height:60px;display:flex;align-items:center;transition:border-color 0.3s;}
.output-box.success{border-color:var(--accent);}
.output-box.error{border-color:var(--error);}
.output-placeholder{color:var(--muted);font-size:0.85rem;}

/* SITES GRID */
.sites-grid{
  display:grid;grid-template-columns:repeat(2,1fr);gap:0.8rem;
}
.site-card{
  background:#0d0d0d;border:1px solid var(--border-2);
  border-radius:var(--radius-sm);padding:1rem;
  display:flex;flex-direction:column;align-items:center;gap:0.4rem;
  cursor:pointer;transition:border-color 0.2s,transform 0.15s;
}
.site-card:hover{border-color:var(--accent);transform:translateY(-2px);}
.site-icon{
  width:44px;height:44px;background:#1a1a1a;border:1px solid var(--border-2);
  border-radius:8px;display:flex;align-items:center;justify-content:center;
  font-family:var(--font-mono);font-size:0.75rem;font-weight:700;color:var(--accent);
}
.site-name{font-size:0.9rem;font-weight:600;color:var(--text);}
.site-url{font-size:0.7rem;color:var(--muted);font-family:var(--font-mono);}

/* BOM INFO */
.bom-info{
  background:#0a0a0a;border:1px solid var(--border);
  border-radius:var(--radius-sm);padding:1rem;
  display:flex;flex-direction:column;gap:0.6rem;
}
.bom-item{display:flex;flex-direction:column;gap:0.15rem;}
.bom-label{font-size:0.65rem;color:var(--muted);text-transform:uppercase;
  letter-spacing:0.1em;font-family:var(--font-mono);}
.bom-val{font-family:var(--font-mono);font-size:0.75rem;color:var(--text);
  word-break:break-all;}
.back-link{color:var(--muted);text-decoration:none;font-size:0.85rem;
  font-family:var(--font-mono);transition:color 0.2s;width:fit-content;}
.back-link:hover{color:var(--accent);}
```

## 📁 File: `Q7-Page-Redirect/script.js`

```javascript
// =============================================
// Q7 — BOM: Page Redirect System
// window.confirm() + window.location
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  // --- Display BOM info ---
  document.getElementById("currentUrl").textContent =
    window.location.href;
  document.getElementById("userAgent").textContent =
    navigator.userAgent.substring(0, 80) + "...";
  document.getElementById("screenRes").textContent =
    `${screen.width} × ${screen.height} (available: ${screen.availWidth} × ${screen.availHeight})`;

  // --- Attach click handlers to site cards ---
  const cards = document.querySelectorAll(".site-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const url  = card.getAttribute("data-url");
      const name = card.getAttribute("data-name");
      handleRedirect(url, name);
    });
  });
});

function handleRedirect(url, name) {
  const outputEl = document.getElementById("output");

  // --- window.confirm() as required by question ---
  const userChoice = window.confirm(
    `Do you want to visit ${name}?\n\n${url}`
  );

  if (userChoice === true) {
    outputEl.className = "output-box success";
    outputEl.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:0.4rem;width:100%">
        <span style="color:#00ff88">✓ Redirecting to ${escapeHtml(name)}...</span>
        <span style="color:#555;font-size:0.75rem">${escapeHtml(url)}</span>
      </div>
    `;

    // Redirect after short delay for UX
    setTimeout(() => {
      window.location.href = url;
    }, 800);

  } else {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:0.4rem;width:100%">
        <span style="color:#ffaa00">↩ You chose to Stay Here</span>
        <span style="color:#555;font-size:0.75rem">Redirect to ${escapeHtml(name)} cancelled</span>
      </div>
    `;
  }
}

function escapeHtml(str) {
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
```

## 📁 File: `Q7-Page-Redirect/README.md`

````markdown
# Q7 — BOM: Page Redirect System

## 📌 Problem Statement
Ask user confirmation before redirecting. Use BOM APIs.

## 💡 Concepts Used
- `window.confirm()`
- `window.location.href`
- `navigator.userAgent`
- `screen.width / screen.height`

## 🚀 How to Run
1. Open `index.html`
2. Click a site card
3. Confirm or cancel redirect

## ✅ Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
````

---

---

# ✅ Q8 — BOM Digital Clock

## 📁 File: `Q8-Digital-Clock/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Q8 — Digital Clock</title>
  <link rel="stylesheet" href="style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
</head>
<body>
  <div class="bg-pattern"></div>
  <div class="container">
    <div class="badge">Q8 · BOM</div>
    <h1 class="title">Digital <span class="accent">Clock</span></h1>
    <p class="subtitle">Live clock using <code>setInterval()</code> — updates every second</p>

    <div class="card">
      <!-- Main clock display -->
      <div class="clock-display">
        <div class="clock-time" id="clockTime">00:00:00</div>
        <div class="clock-ampm" id="clockAmpm">AM</div>
      </div>

      <div class="clock-date" id="clockDate">Loading...</div>

      <!-- Segments -->
      <div class="segments">
        <div class="seg-item">
          <span class="seg-val" id="segH">00</span>
          <span class="seg-label">HOURS</span>
        </div>
        <div class="seg-sep">:</div>
        <div class="seg-item">
          <span class="seg-val" id="segM">00</span>
          <span class="seg-label">MINUTES</span>
        </div>
        <div class="seg-sep">:</div>
        <div class="seg-item">
          <span class="seg-val" id="segS">00</span>
          <span class="seg-label">SECONDS</span>
        </div>
      </div>

      <!-- Controls -->
      <div class="btn-row">
        <button class="btn" id="toggleBtn" onclick="toggleClock()">
          <span id="toggleLabel">Stop</span>
        </button>
        <button class="btn btn-outline" onclick="resetClock()">Reset</button>
      </div>

      <!-- Timezone info -->
      <div class="tz-info">
        <span class="bom-label">Timezone</span>
        <span class="bom-val" id="tzVal"></span>
      </div>
    </div>

    <a href="../index.html" class="back-link">← Back to Home</a>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## 📁 File: `Q8-Digital-Clock/style.css`

```css
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#0a0a0a;--card:#111111;--border:#1e1e1e;--border-2:#2a2a2a;
  --text:#e8e8e8;--muted:#555555;--accent:#00ff88;--error:#ff4444;
  --font-mono:'JetBrains Mono',monospace;--font-sans:'Inter',sans-serif;
  --radius:12px;--radius-sm:6px;
}
body{background:var(--bg);color:var(--text);font-family:var(--font-sans);
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:2rem 1rem;position:relative;}
.bg-pattern{position:fixed;inset:0;
  background-image:radial-gradient(circle,#ffffff12 1px,transparent 1px);
  background-size:28px 28px;pointer-events:none;z-index:0;}
.container{position:relative;z-index:1;width:100%;max-width:640px;
  display:flex;flex-direction:column;gap:1.5rem;}
.badge{display:inline-flex;align-items:center;justify-content:center;
  background:var(--accent);color:#000;font-family:var(--font-mono);
  font-size:0.7rem;font-weight:700;letter-spacing:0.1em;padding:4px 12px;
  border-radius:100px;width:fit-content;text-transform:uppercase;}
.title{font-family:var(--font-sans);font-size:clamp(1.6rem,4vw,2.2rem);
  font-weight:600;line-height:1.2;letter-spacing:-0.03em;color:#fff;}
.accent{color:var(--accent);}
code{font-family:var(--font-mono);font-size:0.85rem;color:var(--accent);
  background:#00ff8815;padding:2px 6px;border-radius:4px;}
.subtitle{font-size:0.9rem;color:var(--muted);font-weight:300;line-height:1.6;}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);
  padding:2rem;display:flex;flex-direction:column;gap:1.5rem;
  position:relative;overflow:hidden;align-items:center;}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--accent)44,transparent);}

/* CLOCK DISPLAY */
.clock-display{
  display:flex;align-items:flex-start;gap:0.5rem;
}
.clock-time{
  font-family:var(--font-mono);
  font-size:clamp(3rem,12vw,5.5rem);
  font-weight:800;
  color:#fff;
  letter-spacing:0.05em;
  text-shadow:0 0 40px var(--accent)33;
  transition:color 0.1s;
}
.clock-ampm{
  font-family:var(--font-mono);
  font-size:1rem;font-weight:700;
  color:var(--accent);margin-top:0.5rem;
  background:var(--accent)18;
  border:1px solid var(--accent)44;
  padding:4px 8px;border-radius:4px;
}
.clock-date{
  font-family:var(--font-mono);font-size:0.85rem;
  color:var(--muted);text-align:center;
}

/* SEGMENTS */
.segments{
  display:flex;align-items:center;gap:0.8rem;width:100%;justify-content:center;
}
.seg-item{
  display:flex;flex-direction:column;align-items:center;gap:0.3rem;
  flex:1;
  background:#0d0d0d;border:1px solid var(--border);
  border-radius:var(--radius-sm);padding:0.8rem;
}
.seg-val{
  font-family:var(--font-mono);font-size:1.8rem;font-weight:700;color:var(--accent);
}
.seg-label{
  font-family:var(--font-mono);font-size:0.6rem;color:var(--muted);
  letter-spacing:0.1em;
}
.seg-sep{font-size:1.5rem;color:var(--muted);font-weight:700;}

/* CONTROLS */
.btn-row{display:flex;gap:0.8rem;width:100%;}
.btn{display:flex;align-items:center;justify-content:center;gap:0.5rem;
  background:var(--accent);color:#000;font-family:var(--font-sans);
  font-size:0.9rem;font-weight:600;border:none;border-radius:var(--radius-sm);
  padding:0.75rem 1.5rem;cursor:pointer;transition:opacity 0.2s,transform 0.1s;flex:1;}
.btn:hover{opacity:0.85;}.btn:active{transform:scale(0.98);}
.btn-outline{background:transparent;color:var(--text);border:1px solid var(--border-2);}
.btn-outline:hover{border-color:var(--accent);color:var(--accent);}

/* TZ INFO */
.tz-info{
  display:flex;flex-direction:column;gap:0.25rem;
  width:100%;padding:0.8rem;
  background:#0d0d0d;border:1px solid var(--border);border-radius:var(--radius-sm);
}
.bom-label{font-size:0.65rem;color:var(--muted);text-transform:uppercase;
  letter-spacing:0.1em;font-family:var(--font-mono);}
.bom-val{font-family:var(--font-mono);font-size:0.8rem;color:var(--text);}

.back-link{color:var(--muted);text-decoration:none;font-size:0.85rem;
  font-family:var(--font-mono);transition:color 0.2s;width:fit-content;}
.back-link:hover{color:var(--accent);}
```

## 📁 File: `Q8-Digital-Clock/script.js`

```javascript
// =============================================
// Q8 — BOM: Digital Clock
// setInterval() — updates every 1 second
// Format: HH:MM:SS
// =============================================

let intervalId = null;
let isRunning  = true;

function pad(n) {
  return n < 10 ? "0" + n : "" + n;
}

function updateClock() {
  const now = new Date();

  const hours24 = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // 12-hour format
  const ampm   = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 || 12;

  const timeStr = `${pad(hours12)}:${pad(minutes)}:${pad(seconds)}`;

  // Update elements
  document.getElementById("clockTime").textContent = timeStr;
  document.getElementById("clockAmpm").textContent = ampm;
  document.getElementById("segH").textContent       = pad(hours12);
  document.getElementById("segM").textContent       = pad(minutes);
  document.getElementById("segS").textContent       = pad(seconds);

  // Date string
  const days   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const dateStr = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  document.getElementById("clockDate").textContent = dateStr;

  // Pulse seconds color
  const clockEl = document.getElementById("clockTime");
  clockEl.style.textShadow = seconds % 2 === 0
    ? "0 0 40px #00ff8855"
    : "0 0 20px #00ff8822";
}

function startClock() {
  updateClock(); // Immediate call
  intervalId = setInterval(updateClock, 1000);
  isRunning  = true;
  document.getElementById("toggleLabel").textContent = "Stop";
}

function toggleClock() {
  if (isRunning) {
    clearInterval(intervalId);
    intervalId = null;
    isRunning  = false;
    document.getElementById("toggleLabel").textContent = "Start";
    document.getElementById("clockTime").style.opacity = "0.4";
  } else {
    document.getElementById("clockTime").style.opacity = "1";
    startClock();
  }
}

function resetClock() {
  if (!isRunning) {
    document.getElementById("clockTime").style.opacity = "1";
    startClock();
  }
  updateClock();
}

// --- Init ---
document.addEventListener("DOMContentLoaded", () => {
  // Timezone
  document.getElementById("tzVal").textContent =
    Intl.DateTimeFormat().resolvedOptions().timeZone +
    ` (UTC${new Date().getTimezoneOffset() > 0 ? "-" : "+"}${
      Math.abs(new Date().getTimezoneOffset() / 60)
    })`;

  startClock();
});
```

## 📁 File: `Q8-Digital-Clock/README.md`

````markdown
# Q8 — BOM: Digital Clock

## 📌 Problem Statement
Display a live digital clock that updates every second using `setInterval()`.

## 💡 Concepts Used
- `setInterval()` / `clearInterval()`
- `Date` object
- BOM — `Intl.DateTimeFormat`
- DOM manipulation

## 🚀 How to Run
1. Open `index.html`
2. Clock starts automatically
3. Stop / Start using button

## ✅ Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
````

---

---

# ✅ Q9 — Prime Numbers in Range

## 📁 File: `Q9-Prime-Numbers/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Q9 — Prime Numbers</title>
  <link rel="stylesheet" href="style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
</head>
<body>
  <div class="bg-pattern"></div>
  <div class="container">
    <div class="badge">Q9 · Math</div>
    <h1 class="title">Prime Numbers <span class="accent">in Range</span></h1>
    <p class="subtitle">Find all prime numbers between two given values</p>

    <div class="card">
      <div class="input-row">
        <div class="input-group">
          <label class="label">Start</label>
          <input type="number" id="startNum" class="input" placeholder="e.g. 1" value="1"/>
        </div>
        <div class="input-group">
          <label class="label">End</label>
          <input type="number" id="endNum" class="input" placeholder="e.g. 100" value="100"/>
        </div>
      </div>

      <button class="btn" onclick="findPrimes()">
        <span>Find Primes</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5,3 19,12 5,21"/></svg>
      </button>

      <div class="stats-row" id="statsRow" style="display:none;">
        <div class="stat-item">
          <span class="stat-val" id="countStat">0</span>
          <span class="stat-label">Primes Found</span>
        </div>
        <div class="stat-item">
          <span class="stat-val" id="firstStat">—</span>
          <span class="stat-label">First Prime</span>
        </div>
        <div class="stat-item">
          <span class="stat-val" id="lastStat">—</span>
          <span class="stat-label">Last Prime</span>
        </div>
      </div>

      <div class="output-box" id="output">
        <span class="output-placeholder">Primes will appear here...</span>
      </div>

      <div class="prime-grid" id="primeGrid" style="display:none;"></div>
    </div>

    <a href="../index.html" class="back-link">← Back to Home</a>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## 📁 File: `Q9-Prime-Numbers/style.css`

```css
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#0a0a0a;--card:#111111;--border:#1e1e1e;--border-2:#2a2a2a;
  --text:#e8e8e8;--muted:#555555;--accent:#00ff88;--error:#ff4444;
  --font-mono:'JetBrains Mono',monospace;--font-sans:'Inter',sans-serif;
  --radius:12px;--radius-sm:6px;
}
body{background:var(--bg);color:var(--text);font-family:var(--font-sans);
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:2rem 1rem;position:relative;}
.bg-pattern{position:fixed;inset:0;
  background-image:radial-gradient(circle,#ffffff12 1px,transparent 1px);
  background-size:28px 28px;pointer-events:none;z-index:0;}
.container{position:relative;z-index:1;width:100%;max-width:680px;
  display:flex;flex-direction:column;gap:1.5rem;}
.badge{display:inline-flex;align-items:center;justify-content:center;
  background:var(--accent);color:#000;font-family:var(--font-mono);
  font-size:0.7rem;font-weight:700;letter-spacing:0.1em;padding:4px 12px;
  border-radius:100px;width:fit-content;text-transform:uppercase;}
.title{font-family:var(--font-sans);font-size:clamp(1.6rem,4vw,2.2rem);
  font-weight:600;line-height:1.2;letter-spacing:-0.03em;color:#fff;}
.accent{color:var(--accent);}
.subtitle{font-size:0.9rem;color:var(--muted);font-weight:300;line-height:1.6;}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);
  padding:2rem;display:flex;flex-direction:column;gap:1.2rem;
  position:relative;overflow:hidden;}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--accent)44,transparent);}
.input-row{display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;}
.input-group{display:flex;flex-direction:column;gap:0.5rem;}
.label{font-size:0.75rem;font-weight:600;color:var(--muted);
  text-transform:uppercase;letter-spacing:0.1em;font-family:var(--font-mono);}
.input{background:#0d0d0d;border:1px solid var(--border-2);border-radius:var(--radius-sm);
  color:var(--text);font-family:var(--font-mono);font-size:1rem;
  padding:0.8rem 1rem;width:100%;outline:none;transition:border-color 0.2s,box-shadow 0.2s;}
.input:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent)18;}
.btn{display:flex;align-items:center;justify-content:center;gap:0.5rem;
  background:var(--accent);color:#000;font-family:var(--font-sans);
  font-size:0.9rem;font-weight:600;border:none;border-radius:var(--radius-sm);
  padding:0.75rem 1.5rem;cursor:pointer;transition:opacity 0.2s,transform 0.1s;width:100%;}
.btn:hover{opacity:0.85;}.btn:active{transform:scale(0.98);}
.output-box{background:#0d0d0d;border:1px solid var(--border);border-radius:var(--radius-sm);
  padding:1rem;font-family:var(--font-mono);font-size:0.85rem;
  min-height:60px;display:flex;align-items:center;transition:border-color 0.3s;word-break:break-all;}
.output-box.success{border-color:var(--accent);}
.output-box.error{border-color:var(--error);}
.output-placeholder{color:var(--muted);font-size:0.85rem;}

/* STATS */
.stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:0.6rem;}
.stat-item{background:#0d0d0d;border:1px solid var(--border);
  border-radius:var(--radius-sm);padding:0.8rem;
  display:flex;flex-direction:column;align-items:center;gap:0.3rem;}
.stat-val{font-family:var(--font-mono);font-size:1.4rem;font-weight:700;color:var(--accent);}
.stat-label{font-size:0.65rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.1em;}

/* PRIME GRID */
.prime-grid{
  display:flex;flex-wrap:wrap;gap:0.4rem;
  max-height:240px;overflow-y:auto;
  padding:0.8rem;background:#0d0d0d;
  border:1px solid var(--border);border-radius:var(--radius-sm);
}
.prime-grid::-webkit-scrollbar{width:4px;}
.prime-grid::-webkit-scrollbar-track{background:#0d0d0d;}
.prime-grid::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:2px;}
.prime-tag{
  font-family:var(--font-mono);font-size:0.75rem;
  padding:3px 8px;background:#00ff8810;
  border:1px solid var(--accent)44;border-radius:4px;
  color:var(--accent);
}
.back-link{color:var(--muted);text-decoration:none;font-size:0.85rem;
  font-family:var(--font-mono);transition:color 0.2s;width:fit-content;}
.back-link:hover{color:var(--accent);}
```

## 📁 File: `Q9-Prime-Numbers/script.js`

```javascript
// =============================================
// Q9 — Find Prime Numbers in Range
// Math — pure loop-based primality check
// =============================================

function isPrime(n) {
  // Edge cases
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  // Check odd divisors up to √n
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function findPrimes() {
  const startEl   = document.getElementById("startNum");
  const endEl     = document.getElementById("endNum");
  const outputEl  = document.getElementById("output");
  const gridEl    = document.getElementById("primeGrid");
  const statsEl   = document.getElementById("statsRow");

  const start = parseInt(startEl.value);
  const end   = parseInt(endEl.value);

  // --- Validation ---
  if (isNaN(start) || isNaN(end)) {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ff4444">⚠ Please enter valid numbers.</span>`;
    gridEl.style.display  = "none";
    statsEl.style.display = "none";
    return;
  }

  if (start > end) {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ff4444">⚠ Start must be ≤ End.</span>`;
    gridEl.style.display  = "none";
    statsEl.style.display = "none";
    return;
  }

  if (end - start > 10000) {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ffaa00">⚠ Range too large (max 10,000). Please reduce range.</span>`;
    return;
  }

  // --- Find all primes in range ---
  const primes = [];

  for (let n = start; n <= end; n++) {
    if (isPrime(n)) {
      primes.push(n);
    }
  }

  // --- Render stats ---
  statsEl.style.display = "grid";
  document.getElementById("countStat").textContent = primes.length;
  document.getElementById("firstStat").textContent = primes.length > 0 ? primes[0] : "—";
  document.getElementById("lastStat").textContent  = primes.length > 0 ? primes[primes.length - 1] : "—";

  // --- Render output text ---
  if (primes.length === 0) {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ffaa00">No prime numbers found in range [${start}, ${end}].</span>`;
    gridEl.style.display = "none";
    return;
  }

  outputEl.className = "output-box success";
  const displayPrimes = primes.length > 30
    ? primes.slice(0, 30).join(", ") + ` ... and ${primes.length - 30} more`
    : primes.join(", ");

  outputEl.innerHTML = `<span style="color:#00ff88">${displayPrimes}</span>`;

  // --- Render prime grid ---
  gridEl.style.display = "flex";
  gridEl.innerHTML     = "";

  for (let i = 0; i < primes.length; i++) {
    const tag       = document.createElement("span");
    tag.className   = "prime-tag";
    tag.textContent = primes[i];
    gridEl.appendChild(tag);
  }
}
```

## 📁 File: `Q9-Prime-Numbers/README.md`

````markdown
# Q9 — Find Prime Numbers in Range

## 📌 Problem Statement
Input two numbers (start, end) and print all prime numbers between them.

## 💡 Algorithm
```
isPrime(n):
  if n < 2 → false
  if n == 2 → true
  if n % 2 == 0 → false
  for i = 3 to √n (step 2):
    if n % i == 0 → false
  return true
```

## 🧠 Concepts Used
- `Math.sqrt()`
- Nested loops
- Conditional logic
- DOM rendering

## ✅ Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
````

---

---

# ✅ Q10 — Armstrong Number

## 📁 File: `Q10-Armstrong-Number/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Q10 — Armstrong Number</title>
  <link rel="stylesheet" href="style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
</head>
<body>
  <div class="bg-pattern"></div>
  <div class="container">
    <div class="badge">Q10 · Math</div>
    <h1 class="title">Armstrong <span class="accent">Number</span></h1>
    <p class="subtitle">Check if a number equals the sum of its digits raised to the power of digit count</p>

    <div class="card">
      <div class="formula-box">
        <span style="color:#555">153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 ✓</span>
      </div>

      <div class="input-group">
        <label class="label">Enter Number</label>
        <input type="number" id="inputNum" class="input" placeholder="e.g. 153" min="0"/>
      </div>

      <button class="btn" onclick="checkArmstrong()">
        <span>Check</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5,3 19,12 5,21"/></svg>
      </button>

      <div class="output-box" id="output">
        <span class="output-placeholder">Result will appear here...</span>
      </div>

      <div class="breakdown" id="breakdown" style="display:none;"></div>

      <!-- Known Armstrong numbers -->
      <div class="known-box">
        <span class="bom-label">Known Armstrong Numbers</span>
        <div class="known-tags">
          <span class="known-tag" onclick="quickCheck(1)">1</span>
          <span class="known-tag" onclick="quickCheck(153)">153</span>
          <span class="known-tag" onclick="quickCheck(370)">370</span>
          <span class="known-tag" onclick="quickCheck(371)">371</span>
          <span class="known-tag" onclick="quickCheck(407)">407</span>
          <span class="known-tag" onclick="quickCheck(1634)">1634</span>
          <span class="known-tag known-not" onclick="quickCheck(100)">100 ✗</span>
          <span class="known-tag known-not" onclick="quickCheck(200)">200 ✗</span>
        </div>
      </div>
    </div>

    <a href="../index.html" class="back-link">← Back to Home</a>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## 📁 File: `Q10-Armstrong-Number/style.css`

```css
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#0a0a0a;--card:#111111;--border:#1e1e1e;--border-2:#2a2a2a;
  --text:#e8e8e8;--muted:#555555;--accent:#00ff88;--error:#ff4444;
  --font-mono:'JetBrains Mono',monospace;--font-sans:'Inter',sans-serif;
  --radius:12px;--radius-sm:6px;
}
body{background:var(--bg);color:var(--text);font-family:var(--font-sans);
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:2rem 1rem;position:relative;}
.bg-pattern{position:fixed;inset:0;
  background-image:radial-gradient(circle,#ffffff12 1px,transparent 1px);
  background-size:28px 28px;pointer-events:none;z-index:0;}
.container{position:relative;z-index:1;width:100%;max-width:640px;
  display:flex;flex-direction:column;gap:1.5rem;}
.badge{display:inline-flex;align-items:center;justify-content:center;
  background:var(--accent);color:#000;font-family:var(--font-mono);
  font-size:0.7rem;font-weight:700;letter-spacing:0.1em;padding:4px 12px;
  border-radius:100px;width:fit-content;text-transform:uppercase;}
.title{font-family:var(--font-sans);font-size:clamp(1.6rem,4vw,2.2rem);
  font-weight:600;line-height:1.2;letter-spacing:-0.03em;color:#fff;}
.accent{color:var(--accent);}
.subtitle{font-size:0.9rem;color:var(--muted);font-weight:300;line-height:1.6;}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);
  padding:2rem;display:flex;flex-direction:column;gap:1.2rem;
  position:relative;overflow:hidden;}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--accent)44,transparent);}
.formula-box{
  background:#0d0d0d;border:1px solid var(--border);border-radius:var(--radius-sm);
  padding:0.8rem 1rem;font-family:var(--font-mono);font-size:0.8rem;text-align:center;
}
.input-group{display:flex;flex-direction:column;gap:0.5rem;}
.label{font-size:0.75rem;font-weight:600;color:var(--muted);
  text-transform:uppercase;letter-spacing:0.1em;font-family:var(--font-mono);}
.input{background:#0d0d0d;border:1px solid var(--border-2);border-radius:var(--radius-sm);
  color:var(--text);font-family:var(--font-mono);font-size:1rem;
  padding:0.8rem 1rem;width:100%;outline:none;transition:border-color 0.2s,box-shadow 0.2s;}
.input:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent)18;}
.input::placeholder{color:var(--muted);}
.btn{display:flex;align-items:center;justify-content:center;gap:0.5rem;
  background:var(--accent);color:#000;font-family:var(--font-sans);
  font-size:0.9rem;font-weight:600;border:none;border-radius:var(--radius-sm);
  padding:0.75rem 1.5rem;cursor:pointer;transition:opacity 0.2s,transform 0.1s;width:100%;}
.btn:hover{opacity:0.85;}.btn:active{transform:scale(0.98);}
.output-box{background:#0d0d0d;border:1px solid var(--border);border-radius:var(--radius-sm);
  padding:1rem;font-family:var(--font-mono);font-size:0.95rem;
  min-height:70px;display:flex;align-items:center;transition:border-color 0.3s;}
.output-box.success{border-color:var(--accent);}
.output-box.fail{border-color:var(--error);}
.output-box.error{border-color:#ffaa00;}
.output-placeholder{color:var(--muted);font-size:0.85rem;}

/* BREAKDOWN */
.breakdown{
  background:#0a0a0a;border:1px solid var(--border);border-radius:var(--radius-sm);
  padding:1rem;font-family:var(--font-mono);font-size:0.85rem;
  line-height:2;color:var(--muted);
}

/* KNOWN BOX */
.known-box{
  background:#0d0d0d;border:1px solid var(--border);border-radius:var(--radius-sm);
  padding:1rem;display:flex;flex-direction:column;gap:0.6rem;
}
.bom-label{font-size:0.65rem;color:var(--muted);text-transform:uppercase;
  letter-spacing:0.1em;font-family:var(--font-mono);}
.known-tags{display:flex;flex-wrap:wrap;gap:0.4rem;}
.known-tag{
  font-family:var(--font-mono);font-size:0.8rem;
  padding:4px 10px;background:#00ff8810;
  border:1px solid var(--accent)44;border-radius:4px;
  color:var(--accent);cursor:pointer;transition:background 0.2s;
}
.known-tag:hover{background:#00ff8825;}
.known-not{background:#ff444410;border-color:#ff444444;color:#ff4444;}
.known-not:hover{background:#ff444425;}

.back-link{color:var(--muted);text-decoration:none;font-size:0.85rem;
  font-family:var(--font-mono);transition:color 0.2s;width:fit-content;}
.back-link:hover{color:var(--accent);}
```

## 📁 File: `Q10-Armstrong-Number/script.js`

```javascript
// =============================================
// Q10 — Armstrong Number Checker
// e.g. 153 → 1³ + 5³ + 3³ = 153 ✓
// =============================================

function checkArmstrong() {
  const inputEl     = document.getElementById("inputNum");
  const outputEl    = document.getElementById("output");
  const breakdownEl = document.getElementById("breakdown");

  const numStr = inputEl.value.trim();

  // --- Validation ---
  if (numStr === "" || isNaN(numStr)) {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ffaa00">⚠ Please enter a valid number.</span>`;
    breakdownEl.style.display = "none";
    return;
  }

  const num    = parseInt(numStr);
  const digits = String(Math.abs(num)).split("");  // split into individual digits
  const power  = digits.length;

  // --- Calculate Armstrong sum ---
  let sum       = 0;
  let breakdown = "";
  const parts   = [];

  for (let i = 0; i < digits.length; i++) {
    const d         = parseInt(digits[i]);
    const powered   = Math.pow(d, power);
    sum            += powered;
    parts.push(`${d}^${power} = ${powered}`);
  }

  // Superscript helper
  const superscripts = {"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹"};
  const toSup = (n) => String(n).split("").map(c => superscripts[c] || c).join("");

  const isArmstrong = sum === num;

  // --- Render breakdown ---
  breakdownEl.style.display = "block";

  let equationStr = digits.map(d => `${d}${toSup(power)}`).join(" + ");
  let sumParts    = parts.join(" + ");

  breakdownEl.innerHTML = `
    <span style="color:#e8e8e8">Number  : ${num}</span><br>
    <span style="color:#e8e8e8">Digits  : [${digits.join(", ")}]</span><br>
    <span style="color:#e8e8e8">Power   : ${power} (number of digits)</span><br>
    <span style="color:#e8e8e8">Formula : ${equationStr}</span><br>
    <span style="color:#e8e8e8">Calc    : ${sumParts}</span><br>
    <span style="color:#e8e8e8">Sum     : ${sum}</span><br>
    <span style="${isArmstrong ? "color:#00ff88" : "color:#ff4444"}">
      ${sum} ${isArmstrong ? "===" : "!=="} ${num} → ${isArmstrong ? "ARMSTRONG ✓" : "NOT ARMSTRONG ✗"}
    </span>
  `;

  // --- Render output ---
  if (isArmstrong) {
    outputEl.className = "output-box success";
    outputEl.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:0.3rem;width:100%">
        <span style="color:#00ff88;font-size:1.3rem;font-weight:700">✓ ${num} is an Armstrong Number!</span>
        <span style="color:#555;font-size:0.75rem">${equationStr} = ${sum}</span>
      </div>
    `;
  } else {
    outputEl.className = "output-box fail";
    outputEl.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:0.3rem;width:100%">
        <span style="color:#ff4444;font-size:1.3rem;font-weight:700">✗ ${num} is NOT an Armstrong Number</span>
        <span style="color:#555;font-size:0.75rem">Sum = ${sum} ≠ ${num}</span>
      </div>
    `;
  }
}

function quickCheck(num) {
  document.getElementById("inputNum").value = num;
  checkArmstrong();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inputNum").addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkArmstrong();
  });
});
```

## 📁 File: `Q10-Armstrong-Number/README.md`

````markdown
# Q10 — Armstrong Number

## 📌 Problem Statement
Check if a number equals sum of its digits raised to power of number of digits.

## 💡 Algorithm
```
digits = split number into array
power  = length of digits array
sum    = Σ (each digit ^ power)
if sum === number → Armstrong ✓
```

## 🧪 Examples
| Input | Calculation           | Result |
|-------|-----------------------|--------|
| 153   | 1³+5³+3³ = 153        | ✓      |
| 370   | 3³+7³+0³ = 370        | ✓      |
| 100   | 1³+0³+0³ = 1 ≠ 100   | ✗      |

## ✅ Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
````

---

---

# ✅ Q11 — Random Password Generator

## 📁 File: `Q11-Password-Generator/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Q11 — Password Generator</title>
  <link rel="stylesheet" href="style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
</head>
<body>
  <div class="bg-pattern"></div>
  <div class="container">
    <div class="badge">Q11 · Math.random()</div>
    <h1 class="title">Password <span class="accent">Generator</span></h1>
    <p class="subtitle">Generates secure passwords using <code>Math.random()</code></p>

    <div class="card">
      <!-- Options -->
      <div class="options-grid">
        <div class="option-item">
          <label class="label">Length</label>
          <input type="range" id="lengthRange" min="6" max="32" value="8" class="range-input"
            oninput="document.getElementById('lengthVal').textContent = this.value"/>
          <span class="range-val" id="lengthVal">8</span>
        </div>
      </div>

      <div class="checkbox-row">
        <label class="check-item">
          <input type="checkbox" id="chkUpper" checked/>
          <span class="check-box"></span>
          <span class="check-label">Uppercase (A-Z)</span>
        </label>
        <label class="check-item">
          <input type="checkbox" id="chkLower" checked/>
          <span class="check-box"></span>
          <span class="check-label">Lowercase (a-z)</span>
        </label>
        <label class="check-item">
          <input type="checkbox" id="chkNumbers" checked/>
          <span class="check-box"></span>
          <span class="check-label">Numbers (0-9)</span>
        </label>
        <label class="check-item">
          <input type="checkbox" id="chkSymbols"/>
          <span class="check-box"></span>
          <span class="check-label">Symbols (!@#$)</span>
        </label>
      </div>

      <button class="btn" onclick="generatePassword()">
        <span>Generate Password</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </button>

      <!-- Password display -->
      <div class="pwd-display" id="pwdDisplay">
        <span class="pwd-placeholder">Click Generate...</span>
      </div>

      <!-- Strength meter -->
      <div class="strength-container" id="strengthContainer" style="display:none;">
        <div class="strength-label">
          <span class="bom-label">Strength</span>
          <span class="strength-text" id="strengthText"></span>
        </div>
        <div class="strength-bar">
          <div class="strength-fill" id="strengthFill"></div>
        </div>
      </div>

      <!-- Copy button -->
      <button class="btn btn-outline" id="copyBtn" onclick="copyPassword()" style="display:none;">
        Copy to Clipboard
      </button>

      <!-- History -->
      <div class="history-box" id="historyBox" style="display:none;">
        <span class="bom-label">Recent Passwords</span>
        <div class="history-list" id="historyList"></div>
      </div>
    </div>

    <a href="../index.html" class="back-link">← Back to Home</a>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## 📁 File: `Q11-Password-Generator/style.css`

```css
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#0a0a0a;--card:#111111;--border:#1e1e1e;--border-2:#2a2a2a;
  --text:#e8e8e8;--muted:#555555;--accent:#00ff88;--error:#ff4444;--warning:#ffaa00;
  --font-mono:'JetBrains Mono',monospace;--font-sans:'Inter',sans-serif;
  --radius:12px;--radius-sm:6px;
}
body{background:var(--bg);color:var(--text);font-family:var(--font-sans);
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:2rem 1rem;position:relative;}
.bg-pattern{position:fixed;inset:0;
  background-image:radial-gradient(circle,#ffffff12 1px,transparent 1px);
  background-size:28px 28px;pointer-events:none;z-index:0;}
.container{position:relative;z-index:1;width:100%;max-width:640px;
  display:flex;flex-direction:column;gap:1.5rem;}
.badge{display:inline-flex;align-items:center;justify-content:center;
  background:var(--accent);color:#000;font-family:var(--font-mono);
  font-size:0.7rem;font-weight:700;letter-spacing:0.1em;padding:4px 12px;
  border-radius:100px;width:fit-content;text-transform:uppercase;}
.title{font-family:var(--font-sans);font-size:clamp(1.6rem,4vw,2.2rem);
  font-weight:600;line-height:1.2;letter-spacing:-0.03em;color:#fff;}
.accent{color:var(--accent);}
code{font-family:var(--font-mono);font-size:0.85rem;color:var(--accent);
  background:#00ff8815;padding:2px 6px;border-radius:4px;}
.subtitle{font-size:0.9rem;color:var(--muted);font-weight:300;line-height:1.6;}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);
  padding:2rem;display:flex;flex-direction:column;gap:1.2rem;
  position:relative;overflow:hidden;}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--accent)44,transparent);}

/* OPTIONS */
.options-grid{display:flex;flex-direction:column;gap:0.4rem;}
.option-item{display:flex;align-items:center;gap:1rem;}
.label{font-size:0.75rem;font-weight:600;color:var(--muted);
  text-transform:uppercase;letter-spacing:0.1em;font-family:var(--font-mono);}
.range-input{
  flex:1;-webkit-appearance:none;appearance:none;
  height:4px;border-radius:2px;background:var(--border-2);outline:none;cursor:pointer;
}
.range-input::-webkit-slider-thumb{
  -webkit-appearance:none;appearance:none;
  width:16px;height:16px;border-radius:50%;
  background:var(--accent);cursor:pointer;
}
.range-val{font-family:var(--font-mono);font-size:1rem;font-weight:700;color:var(--accent);
  min-width:2ch;text-align:right;}

/* CHECKBOXES */
.checkbox-row{display:grid;grid-template-columns:1fr 1fr;gap:0.6rem;}
.check-item{
  display:flex;align-items:center;gap:0.5rem;cursor:pointer;
  padding:0.6rem;background:#0d0d0d;border:1px solid var(--border-2);
  border-radius:var(--radius-sm);transition:border-color 0.2s;
}
.check-item:hover{border-color:var(--accent);}
.check-item input[type="checkbox"]{display:none;}
.check-box{
  width:16px;height:16px;border:1px solid var(--border-2);border-radius:3px;
  flex-shrink:0;display:flex;align-items:center;justify-content:center;
  transition:background 0.2s,border-color 0.2s;
}
.check-item input[type="checkbox"]:checked ~ .check-box{
  background:var(--accent);border-color:var(--accent);
}
.check-item input[type="checkbox"]:checked ~ .check-box::after{
  content:'✓';font-size:0.7rem;color:#000;font-weight:700;
}
.check-label{font-size:0.8rem;color:var(--text);font-family:var(--font-mono);}

/* BUTTON */
.btn{display:flex;align-items:center;justify-content:center;gap:0.5rem;
  background:var(--accent);color:#000;font-family:var(--font-sans);
  font-size:0.9rem;font-weight:600;border:none;border-radius:var(--radius-sm);
  padding:0.75rem 1.5rem;cursor:pointer;transition:opacity 0.2s,transform 0.1s;width:100%;}
.btn:hover{opacity:0.85;}.btn:active{transform:scale(0.98);}
.btn-outline{background:transparent;color:var(--text);border:1px solid var(--border-2);}
.btn-outline:hover{border-color:var(--accent);color:var(--accent);}

/* PASSWORD DISPLAY */
.pwd-display{
  background:#0d0d0d;border:1px solid var(--border-2);
  border-radius:var(--radius-sm);padding:1.2rem;
  font-family:var(--font-mono);font-size:1.1rem;font-weight:700;
  letter-spacing:0.08em;min-height:60px;
  display:flex;align-items:center;word-break:break-all;
  transition:border-color 0.3s;
}
.pwd-display.active{border-color:var(--accent);}
.pwd-placeholder{color:var(--muted);font-weight:400;font-size:0.85rem;}
.c-upper  {color:#00ff88;}
.c-lower  {color:#e8e8e8;}
.c-number {color:#ffaa00;}
.c-symbol {color:#0066ff;}

/* STRENGTH */
.strength-container{display:flex;flex-direction:column;gap:0.5rem;}
.strength-label{display:flex;justify-content:space-between;align-items:center;}
.bom-label{font-size:0.65rem;color:var(--muted);text-transform:uppercase;
  letter-spacing:0.1em;font-family:var(--font-mono);}
.strength-text{font-family:var(--font-mono);font-size:0.8rem;font-weight:700;}
.strength-bar{height:4px;background:var(--border-2);border-radius:2px;overflow:hidden;}
.strength-fill{height:100%;border-radius:2px;transition:width 0.4s,background 0.4s;}

/* HISTORY */
.history-box{
  background:#0d0d0d;border:1px solid var(--border);
  border-radius:var(--radius-sm);padding:1rem;
  display:flex;flex-direction:column;gap:0.6rem;
}
.history-list{display:flex;flex-direction:column;gap:0.3rem;}
.history-item{
  font-family:var(--font-mono);font-size:0.8rem;color:var(--muted);
  padding:0.3rem 0;border-bottom:1px solid var(--border);
  word-break:break-all;
}
.history-item:last-child{border-bottom:none;}

.back-link{color:var(--muted);text-decoration:none;font-size:0.85rem;
  font-family:var(--font-mono);transition:color 0.2s;width:fit-content;}
.back-link:hover{color:var(--accent);}
```

## 📁 File: `Q11-Password-Generator/script.js`

```javascript
// =============================================
// Q11 — Random Password Generator
// Math.random() based — uppercase, lowercase,
// numbers, symbols
// =============================================

const UPPER   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER   = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

let passwordHistory = [];
let currentPassword = "";

function generatePassword() {
  const length    = parseInt(document.getElementById("lengthRange").value);
  const useUpper  = document.getElementById("chkUpper").checked;
  const useLower  = document.getElementById("chkLower").checked;
  const useNum    = document.getElementById("chkNumbers").checked;
  const useSymbol = document.getElementById("chkSymbols").checked;

  const pwdDisplayEl       = document.getElementById("pwdDisplay");
  const copyBtnEl          = document.getElementById("copyBtn");
  const strengthContainer  = document.getElementById("strengthContainer");
  const historyBox         = document.getElementById("historyBox");

  // --- Build charset ---
  let charset = "";
  if (useUpper)  charset += UPPER;
  if (useLower)  charset += LOWER;
  if (useNum)    charset += NUMBERS;
  if (useSymbol) charset += SYMBOLS;

  if (charset === "") {
    pwdDisplayEl.className = "pwd-display";
    pwdDisplayEl.innerHTML = `<span style="color:#ff4444">⚠ Select at least one character type.</span>`;
    return;
  }

  // --- Ensure at least one of each selected type ---
  let password = "";

  if (useUpper)  password += UPPER  [Math.floor(Math.random() * UPPER.length)];
  if (useLower)  password += LOWER  [Math.floor(Math.random() * LOWER.length)];
  if (useNum)    password += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
  if (useSymbol) password += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

  // --- Fill remaining length ---
  for (let i = password.length; i < length; i++) {
    const idx = Math.floor(Math.random() * charset.length);
    password += charset[idx];
  }

  // --- Shuffle password (Fisher-Yates) ---
  const arr = password.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j    = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i]     = arr[j];
    arr[j]     = temp;
  }
  password = arr.join("");

  currentPassword = password;

  // --- Render colored password ---
  pwdDisplayEl.className = "pwd-display active";
  let coloredHTML = "";

  for (let i = 0; i < password.length; i++) {
    const c = password[i];
    let cls = "c-lower";
    if (UPPER.includes(c))   cls = "c-upper";
    if (NUMBERS.includes(c)) cls = "c-number";
    if (SYMBOLS.includes(c)) cls = "c-symbol";
    coloredHTML += `<span class="${cls}">${c}</span>`;
  }
  pwdDisplayEl.innerHTML = coloredHTML;

  // --- Strength meter ---
  const strength = calculateStrength(password, useUpper, useLower, useNum, useSymbol, length);
  renderStrength(strength);
  strengthContainer.style.display = "flex";

  // --- Show copy btn ---
  copyBtnEl.style.display = "flex";

  // --- History ---
  passwordHistory.unshift(password);
  if (passwordHistory.length > 5) passwordHistory.pop();
  renderHistory();
  historyBox.style.display = "flex";
}

function calculateStrength(pwd, upper, lower, num, sym, len) {
  let score = 0;
  if (upper)   score += 1;
  if (lower)   score += 1;
  if (num)     score += 1;
  if (sym)     score += 2;
  if (len >= 8)  score += 1;
  if (len >= 12) score += 1;
  if (len >= 20) score += 1;
  return score;
}

function renderStrength(score) {
  const fillEl  = document.getElementById("strengthFill");
  const textEl  = document.getElementById("strengthText");

  let label, color, pct;

  if      (score <= 2) { label = "Weak";      color = "#ff4444"; pct = "25%"; }
  else if (score <= 4) { label = "Fair";      color = "#ffaa00"; pct = "50%"; }
  else if (score <= 6) { label = "Strong";    color = "#00aaff"; pct = "75%"; }
  else                 { label = "Very Strong"; color = "#00ff88"; pct = "100%"; }

  fillEl.style.width      = pct;
  fillEl.style.background = color;
  textEl.textContent      = label;
  textEl.style.color      = color;
}

function renderHistory() {
  const listEl = document.getElementById("historyList");
  listEl.innerHTML = "";
  for (let i = 0; i < passwordHistory.length; i++) {
    const item       = document.createElement("div");
    item.className   = "history-item";
    item.textContent = passwordHistory[i];
    listEl.appendChild(item);
  }
}

function copyPassword() {
  if (!currentPassword) return;
  navigator.clipboard.writeText(currentPassword).then(() => {
    const btn = document.getElementById("copyBtn");
    btn.textContent = "Copied ✓";
    btn.style.color = "#00ff88";
    btn.style.borderColor = "#00ff88";
    setTimeout(() => {
      btn.textContent = "Copy to Clipboard";
      btn.style.color = "";
      btn.style.borderColor = "";
    }, 2000);
  });
}
```

## 📁 File: `Q11-Password-Generator/README.md`

````markdown
# Q11 — Random Password Generator

## 📌 Problem Statement
Generate a random password with configurable length and character sets.

## 💡 Features
- Configurable length (6–32)
- Toggle: Uppercase, Lowercase, Numbers, Symbols
- Strength meter
- Copy to clipboard
- Password history (last 5)
- Colored character display

## 🧠 Concepts Used
- `Math.random()`
- `Math.floor()`
- Fisher-Yates shuffle
- String manipulation

## ✅ Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
````

---

---

# ✅ Q12 — Mini Project: Login Attempt System

## 📁 File: `Q12-Login-Attempt-System/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Q12 — Login Attempt System</title>
  <link rel="stylesheet" href="style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>
</head>
<body>
  <div class="bg-pattern"></div>
  <div class="container">
    <div class="badge">Q12 · BOM + Exception</div>
    <h1 class="title">Login <span class="accent">Attempt</span> System</h1>
    <p class="subtitle">3 attempts max — wrong credentials throw errors — account locks on failure</p>

    <div class="card">
      <!-- Attempt counter -->
      <div class="attempt-bar">
        <span class="attempt-label">Attempts Remaining</span>
        <div class="attempt-dots" id="attemptDots">
          <span class="dot active" id="dot1"></span>
          <span class="dot active" id="dot2"></span>
          <span class="dot active" id="dot3"></span>
        </div>
      </div>

      <div class="input-group">
        <label class="label">Username</label>
        <input
          type="text"
          id="usernameInput"
          class="input"
          placeholder="Enter username"
          autocomplete="off"
        />
      </div>

      <div class="input-group">
        <label class="label">Password</label>
        <div class="pwd-input-wrap">
          <input
            type="password"
            id="passwordInput"
            class="input"
            placeholder="Enter password"
            autocomplete="off"
          />
          <button class="eye-btn" onclick="togglePwdVis()" id="eyeBtn">
            <svg id="eyeIcon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
      </div>

      <button class="btn" id="loginBtn" onclick="login()">
        <span>Login</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10,17 15,12 10,7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
      </button>

      <!-- Status output -->
      <div class="status-box" id="statusBox">
        <span class="output-placeholder">Enter credentials and click Login</span>
      </div>

      <!-- Log -->
      <div class="log-box" id="logBox" style="display:none;">
        <div class="log-header">
          <span class="bom-label">Attempt Log</span>
          <button class="clear-btn" onclick="clearLog()">Clear</button>
        </div>
        <div class="log-entries" id="logEntries"></div>
      </div>

      <!-- Hint (demo) -->
      <div class="hint-box">
        <span class="bom-label">Demo Credentials</span>
        <span style="font-family:var(--font-mono);font-size:0.8rem;color:var(--muted)">
          User: <span style="color:#00ff88">admin</span> &nbsp; Pass: <span style="color:#00ff88">1234</span>
        </span>
      </div>
    </div>

    <a href="../index.html" class="back-link">← Back to Home</a>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## 📁 File: `Q12-Login-Attempt-System/style.css`

```css
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#0a0a0a;--card:#111111;--border:#1e1e1e;--border-2:#2a2a2a;
  --text:#e8e8e8;--muted:#555555;--accent:#00ff88;--error:#ff4444;--warning:#ffaa00;
  --font-mono:'JetBrains Mono',monospace;--font-sans:'Inter',sans-serif;
  --radius:12px;--radius-sm:6px;
}
body{background:var(--bg);color:var(--text);font-family:var(--font-sans);
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:2rem 1rem;position:relative;}
.bg-pattern{position:fixed;inset:0;
  background-image:radial-gradient(circle,#ffffff12 1px,transparent 1px);
  background-size:28px 28px;pointer-events:none;z-index:0;}
.container{position:relative;z-index:1;width:100%;max-width:640px;
  display:flex;flex-direction:column;gap:1.5rem;}
.badge{display:inline-flex;align-items:center;justify-content:center;
  background:var(--accent);color:#000;font-family:var(--font-mono);
  font-size:0.7rem;font-weight:700;letter-spacing:0.1em;padding:4px 12px;
  border-radius:100px;width:fit-content;text-transform:uppercase;}
.title{font-family:var(--font-sans);font-size:clamp(1.6rem,4vw,2.2rem);
  font-weight:600;line-height:1.2;letter-spacing:-0.03em;color:#fff;}
.accent{color:var(--accent);}
.subtitle{font-size:0.9rem;color:var(--muted);font-weight:300;line-height:1.6;}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);
  padding:2rem;display:flex;flex-direction:column;gap:1.2rem;
  position:relative;overflow:hidden;}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--accent)44,transparent);}

/* ATTEMPT BAR */
.attempt-bar{
  display:flex;justify-content:space-between;align-items:center;
  padding:0.8rem;background:#0d0d0d;
  border:1px solid var(--border);border-radius:var(--radius-sm);
}
.attempt-label{font-family:var(--font-mono);font-size:0.75rem;color:var(--muted);}
.attempt-dots{display:flex;gap:0.5rem;}
.dot{
  width:12px;height:12px;border-radius:50%;
  background:var(--accent);
  transition:background 0.3s,transform 0.2s;
  box-shadow:0 0 8px var(--accent)66;
}
.dot.used{background:var(--border-2);box-shadow:none;}
.dot.error{background:var(--error);box-shadow:0 0 8px var(--error)66;}

/* INPUTS */
.input-group{display:flex;flex-direction:column;gap:0.5rem;}
.label{font-size:0.75rem;font-weight:600;color:var(--muted);
  text-transform:uppercase;letter-spacing:0.1em;font-family:var(--font-mono);}
.input{background:#0d0d0d;border:1px solid var(--border-2);border-radius:var(--radius-sm);
  color:var(--text);font-family:var(--font-mono);font-size:1rem;
  padding:0.8rem 1rem;width:100%;outline:none;transition:border-color 0.2s,box-shadow 0.2s;}
.input:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent)18;}
.input:disabled{opacity:0.4;cursor:not-allowed;}
.input::placeholder{color:var(--muted);}
.pwd-input-wrap{position:relative;}
.pwd-input-wrap .input{padding-right:3rem;}
.eye-btn{
  position:absolute;right:0.8rem;top:50%;transform:translateY(-50%);
  background:none;border:none;color:var(--muted);cursor:pointer;
  transition:color 0.2s;padding:4px;
}
.eye-btn:hover{color:var(--accent);}

/* BUTTON */
.btn{display:flex;align-items:center;justify-content:center;gap:0.5rem;
  background:var(--accent);color:#000;font-family:var(--font-sans);
  font-size:0.9rem;font-weight:600;border:none;border-radius:var(--radius-sm);
  padding:0.75rem 1.5rem;cursor:pointer;transition:opacity 0.2s,transform 0.1s;width:100%;}
.btn:hover{opacity:0.85;}.btn:active{transform:scale(0.98);}
.btn:disabled{opacity:0.3;cursor:not-allowed;}

/* STATUS BOX */
.status-box{
  background:#0d0d0d;border:1px solid var(--border);border-radius:var(--radius-sm);
  padding:1rem;font-family:var(--font-mono);font-size:0.9rem;
  min-height:64px;display:flex;align-items:center;
  transition:border-color 0.3s;
}
.status-box.success{border-color:var(--accent);}
.status-box.error  {border-color:var(--error);}
.status-box.warning{border-color:var(--warning);}
.status-box.locked {border-color:var(--error);background:#ff444410;}
.output-placeholder{color:var(--muted);font-size:0.85rem;}

/* LOG */
.log-box{
  background:#0a0a0a;border:1px solid var(--border);border-radius:var(--radius-sm);
  padding:1rem;display:flex;flex-direction:column;gap:0.5rem;
}
.log-header{display:flex;justify-content:space-between;align-items:center;}
.bom-label{font-size:0.65rem;color:var(--muted);text-transform:uppercase;
  letter-spacing:0.1em;font-family:var(--font-mono);}
.clear-btn{background:none;border:none;color:var(--muted);cursor:pointer;
  font-size:0.75rem;font-family:var(--font-mono);transition:color 0.2s;}
.clear-btn:hover{color:var(--error);}
.log-entries{display:flex;flex-direction:column;gap:0.25rem;}
.log-entry{font-family:var(--font-mono);font-size:0.78rem;line-height:1.6;}
.log-ok   {color:#00ff88;}
.log-warn {color:#ffaa00;}
.log-err  {color:#ff4444;}
.log-info {color:#555;}

/* HINT */
.hint-box{
  background:#0d0d0d;border:1px dashed var(--border-2);border-radius:var(--radius-sm);
  padding:0.8rem;display:flex;flex-direction:column;gap:0.3rem;
}
.back-link{color:var(--muted);text-decoration:none;font-size:0.85rem;
  font-family:var(--font-mono);transition:color 0.2s;width:fit-content;}
.back-link:hover{color:var(--accent);}

/* LOCKED OVERLAY */
.locked-overlay{
  position:absolute;inset:0;background:#0a0a0acc;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:1rem;border-radius:var(--radius);z-index:10;
  backdrop-filter:blur(4px);
}
.lock-icon{font-size:3rem;}
.lock-text{font-family:var(--font-mono);font-size:1rem;color:var(--error);font-weight:700;}
.lock-sub{font-family:var(--font-mono);font-size:0.75rem;color:var(--muted);}
.unlock-btn{
  background:var(--error);color:#fff;border:none;border-radius:var(--radius-sm);
  padding:0.6rem 1.5rem;font-family:var(--font-sans);font-size:0.85rem;
  font-weight:600;cursor:pointer;transition:opacity 0.2s;margin-top:0.5rem;
}
.unlock-btn:hover{opacity:0.8;}
```

## 📁 File: `Q12-Login-Attempt-System/script.js`

```javascript
// =============================================
// Q12 — Login Attempt System
// BOM + Exception Handling
// Max 3 attempts — then account locked
// =============================================

// --- Predefined credentials ---
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "1234";
const MAX_ATTEMPTS   = 3;

let attemptsLeft = MAX_ATTEMPTS;
let isLocked     = false;
let logEntries   = [];

function login() {
  // --- Guard: system locked ---
  if (isLocked) {
    showStatus("locked", "🔒 Account is locked. Too many failed attempts.");
    return;
  }

  const username = document.getElementById("usernameInput").value.trim();
  const password = document.getElementById("passwordInput").value;

  try {
    // --- Throw if empty fields ---
    if (username === "" || password === "") {
      throw new Error("Username and Password cannot be empty.");
    }

    // --- Throw if wrong credentials ---
    if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
      throw new Error(
        `Invalid credentials. ${attemptsLeft - 1} attempt(s) remaining.`
      );
    }

    // --- SUCCESS ---
    addLog("ok", `✓ Login successful — Welcome, ${username}!`);
    showStatus("success", `
      <div style="display:flex;flex-direction:column;gap:0.4rem;width:100%">
        <span style="color:#00ff88;font-size:1rem;font-weight:700">✓ Login Successful!</span>
        <span style="color:#555;font-size:0.75rem">Welcome back, <span style="color:#e8e8e8">${escapeHtml(username)}</span></span>
      </div>
    `);

    // Disable form after success
    disableForm();

  } catch (err) {
    // --- HANDLE WRONG CREDENTIALS ---
    if (username !== "" && password !== "" && username !== VALID_USERNAME || password !== VALID_PASSWORD) {
      attemptsLeft--;
      updateDots();
    }

    addLog("err", `✗ ${err.message}`);

    if (attemptsLeft <= 0) {
      lockAccount();
    } else {
      showStatus("error", `
        <div style="display:flex;flex-direction:column;gap:0.4rem;width:100%">
          <span style="color:#ff4444;font-weight:700">✗ ${escapeHtml(err.message)}</span>
          <span style="color:#555;font-size:0.75rem">${attemptsLeft} attempt(s) remaining</span>
        </div>
      `);

      // Shake animation on card
      const card = document.querySelector(".card");
      card.style.animation = "none";
      card.offsetHeight; // reflow
      card.style.animation = "shake 0.3s";
    }

    // Clear password field
    document.getElementById("passwordInput").value = "";

  } finally {
    // Always show log
    document.getElementById("logBox").style.display = "flex";
    renderLog();
  }
}

function lockAccount() {
  isLocked = true;
  addLog("err", "🔒 ACCOUNT LOCKED — Maximum attempts exceeded.");
  disableForm();

  // Show locked overlay
  const card = document.querySelector(".card");
  const overlay = document.createElement("div");
  overlay.className = "locked-overlay";
  overlay.id        = "lockedOverlay";
  overlay.innerHTML = `
    <div class="lock-icon">🔒</div>
    <div class="lock-text">Account Locked</div>
    <div class="lock-sub">Maximum login attempts (${MAX_ATTEMPTS}) exceeded</div>
    <button class="unlock-btn" onclick="resetSystem()">Reset System</button>
  `;
  card.appendChild(overlay);

  showStatus("locked", "🔒 Account locked — too many failed attempts.");
}

function resetSystem() {
  isLocked     = false;
  attemptsLeft = MAX_ATTEMPTS;
  logEntries   = [];

  // Remove overlay
  const overlay = document.getElementById("lockedOverlay");
  if (overlay) overlay.remove();

  // Re-enable form
  document.getElementById("loginBtn").disabled         = false;
  document.getElementById("usernameInput").disabled    = false;
  document.getElementById("passwordInput").disabled    = false;
  document.getElementById("usernameInput").value       = "";
  document.getElementById("passwordInput").value       = "";

  // Reset dots
  for (let i = 1; i <= 3; i++) {
    const dot       = document.getElementById(`dot${i}`);
    dot.className   = "dot active";
  }

  showStatus("", "<span class='output-placeholder'>System reset. Enter credentials and try again.</span>");
  document.getElementById("logBox").style.display = "none";
  document.getElementById("logEntries").innerHTML = "";
}

function disableForm() {
  document.getElementById("loginBtn").disabled      = true;
  document.getElementById("usernameInput").disabled = true;
  document.getElementById("passwordInput").disabled = true;
}

function updateDots() {
  const usedCount = MAX_ATTEMPTS - attemptsLeft;

  for (let i = 1; i <= MAX_ATTEMPTS; i++) {
    const dot = document.getElementById(`dot${i}`);
    if (i <= usedCount) {
      dot.className = attemptsLeft <= 0 ? "dot error" : "dot used";
    }
  }
}

function showStatus(type, htmlContent) {
  const statusEl  = document.getElementById("statusBox");
  statusEl.className = `status-box ${type}`;
  statusEl.innerHTML = htmlContent;
}

function addLog(type, message) {
  const timestamp = new Date().toLocaleTimeString();
  logEntries.unshift({ type, message, time: timestamp });
  if (logEntries.length > 20) logEntries.pop();
}

function renderLog() {
  const listEl = document.getElementById("logEntries");
  listEl.innerHTML = "";

  for (let i = 0; i < logEntries.length; i++) {
    const entry = logEntries[i];
    const div   = document.createElement("div");
    div.className = `log-entry log-${entry.type}`;
    div.innerHTML = `<span style="color:#333">[${entry.time}]</span> ${escapeHtml(entry.message)}`;
    listEl.appendChild(div);
  }
}

function clearLog() {
  logEntries = [];
  renderLog();
}

function togglePwdVis() {
  const pwdEl  = document.getElementById("passwordInput");
  pwdEl.type   = pwdEl.type === "password" ? "text" : "password";
}

function escapeHtml(str) {
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

// --- Enter key support ---
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("usernameInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("passwordInput").focus();
  });
  document.getElementById("passwordInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") login();
  });
});
```

## 📁 File: `Q12-Login-Attempt-System/README.md`

````markdown
# Q12 — Mini Project: Login Attempt System

## 📌 Problem Statement
A login system with:
- Predefined username & password
- Max 3 attempts
- Error thrown on wrong credentials
- Account locked after 3 failures

## 💡 Features
- Visual attempt dots (green → grey → red)
- `try...catch` for all error handling
- Password show/hide toggle
- Attempt log with timestamps
- Account lock overlay + reset

## 🔐 Demo Credentials
```
Username : admin
Password : 1234
```

## 🧠 Concepts Used
- `try...catch...finally`
- `throw new Error()`
- BOM interactions
- DOM manipulation
- Event listeners

## 🚀 How to Run
1. Open `index.html`
2. Enter credentials
3. Try wrong ones to trigger errors
4. After 3 fails → account locks

## ✅ Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
````

---

---

# 🏠 ROOT README

## 📁 File: `README.md` (Root)

````markdown
# 🖥️ JavaScript — Operators & Conditional Statements Lab

> A collection of 12 JavaScript mini-projects with dark minimal UI, aesthetic typography, and clean code architecture.

![GitHub](https://img.shields.io/badge/platform-GitHub-000?style=flat-square&logo=github)
![JS](https://img.shields.io/badge/language-JavaScript-f0db4f?style=flat-square&logo=javascript&logoColor=000)
![CSS](https://img.shields.io/badge/styling-CSS3-264de4?style=flat-square&logo=css3)
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)

---

## 📁 Project Structure

```
javascript-lab/
│
├── Q1-Remove-Duplicates/
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
├── Q12-Login-Attempt-System/
└── README.md
```

---

## 📋 Project List

| # | Project | Concepts |
|---|---------|----------|
| Q1  | Remove Duplicate Characters | Loops, Objects, Strings |
| Q2  | Character Frequency         | Objects, Loops, Formatting |
| Q3  | First Non-Repeating Char    | Two-pass loops, Objects |
| Q4  | String Compression          | Nested loops, Counters |
| Q5  | Exception Handling          | try/catch/finally, throw |
| Q6  | Nested Exception Handling   | JSON.parse, nested try/catch |
| Q7  | Page Redirect System        | BOM, window.confirm, location |
| Q8  | Digital Clock               | setInterval, Date object |
| Q9  | Prime Numbers in Range      | Math.sqrt, Nested loops |
| Q10 | Armstrong Number            | Math.pow, Digit extraction |
| Q11 | Password Generator          | Math.random, Fisher-Yates |
| Q12 | Login Attempt System        | try/catch, throw, BOM, DOM |

---

## 🎨 Design System

| Property       | Value                     |
|----------------|---------------------------|
| Background     | `#0a0a0a`                 |
| Card           | `#111111`                 |
| Accent Color   | `#00ff88`                 |
| Error Color    | `#ff4444`                 |
| Font (Heading) | Inter                     |
| Font (Code)    | JetBrains Mono            |
| Pattern        | Dot-grid SVG              |

---

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/javascript-lab.git

# Navigate into any project
cd javascript-lab/Q1-Remove-Duplicates

# Open in browser
open index.html
# OR double-click index.html
```

> No build tools or npm required — pure HTML/CSS/JS

---

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)

---

## 📄 License

MIT © 2024
````

---

# 📐 PDR SUMMARY TABLE

| Section | Detail |
|---|---|
| **Total Projects** | 12 |
| **Files per Project** | `index.html` + `style.css` + `script.js` + `README.md` |
| **Total Files** | 49 (48 project files + 1 root README) |
| **Design Theme** | Dark Minimal Black `#0a0a0a` |
| **Pattern** | Dot-grid radial SVG |
| **Accent Color** | `#00ff88` (Neon Green) |
| **Fonts** | JetBrains Mono + Inter |
| **Framework** | Vanilla HTML/CSS/JS (zero dependencies) |
| **Hosting** | GitHub (static — open `index.html` in browser) |