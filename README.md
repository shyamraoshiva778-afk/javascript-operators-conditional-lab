# JavaScript Lab: Operators and Conditional Statements

An end-to-end, practical JavaScript lab that teaches core language fundamentals through 12 interactive mini projects and one unified landing page.

This project is built with pure HTML, CSS, and JavaScript (no frameworks, no bundlers, no dependencies).

![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
![JavaScript](https://img.shields.io/badge/javascript-vanilla-f0db4f?style=flat-square&logo=javascript&logoColor=000)
![Projects](https://img.shields.io/badge/projects-12-00ff88?style=flat-square&labelColor=111111)

---

## 1) Topic Overview

This repository focuses on two important JavaScript foundations:

- Operators (arithmetic, comparison, logical behavior in real tasks)
- Conditional statements (`if`, `else`, branching decisions)

Instead of learning only theory, each concept is used in real mini-projects:

- string processing
- exception handling
- browser object model interactions
- mathematical logic and algorithmic checks
- a final mini-project that combines multiple concepts

---

## 2) Learning Goals

By finishing this lab, you will practice:

- writing clean loop-based logic
- designing conditional flows for valid/invalid inputs
- using object maps for counting and tracking
- handling runtime errors with `try...catch...finally`
- using BOM APIs like `window.confirm`, `window.location`, `setInterval`
- building interactive UIs with DOM updates
- organizing multi-project repositories with reusable design style

---

## 3) Project Map

| # | Project | Category | Core Concepts |
|---|---------|----------|---------------|
| Q1 | Remove Duplicate Characters | String | loops, object map, conditions |
| Q2 | Character Frequency | String | counting map, loops, formatting |
| Q3 | First Non-Repeating Character | String | two-pass frequency logic |
| Q4 | String Compression | String | nested loop counters |
| Q5 | Exception Handling Calculator | Exception | `try/catch/finally`, `throw` |
| Q6 | Nested Exception Handling | Exception | nested `try/catch`, `JSON.parse` |
| Q7 | BOM Redirect System | BOM | `window.confirm`, `location.href` |
| Q8 | BOM Digital Clock | BOM | `setInterval`, `Date`, DOM updates |
| Q9 | Prime Numbers in Range | Math | primality checks, `Math.sqrt` |
| Q10 | Armstrong Number Checker | Math | digit extraction, `Math.pow` |
| Q11 | Password Generator | Math | `Math.random`, shuffle logic |
| Q12 | Login Attempt System | Mini Project | exceptions + BOM + DOM state |

---

## 4) Landing Page

The root landing page connects all 12 projects:

- `index.html` (landing layout and cards)
- `style.css` (landing theme and responsive styles)
- `script.js` (filters, search, counters, animations, navigation)

Features:

- hero section with animated stats
- category filters (String, Exception, BOM, Math, Mini)
- live search across projects
- keyboard-accessible cards
- smooth in-page navigation and back-to-top

---

## 5) Repository Structure

```text
javascript-lab/
|- index.html
|- style.css
|- script.js
|- README.md
|- GitHub/
|  `- (upload and metadata planning files)
|- Q1-Remove-Duplicates/
|- Q2-Character-Frequency/
|- Q3-First-Non-Repeating/
|- Q4-String-Compression/
|- Q5-Exception-Handling/
|- Q6-Nested-Exception/
|- Q7-Page-Redirect/
|- Q8-Digital-Clock/
|- Q9-Prime-Numbers/
|- Q10-Armstrong-Number/
|- Q11-Password-Generator/
`- Q12-Login-Attempt-System/
```

Each Q-folder contains:

- `index.html`
- `style.css`
- `script.js`
- `README.md`

---

## 6) Design System

Global visual language used across projects:

- background: `#0a0a0a`
- card: `#111111`
- accent: `#00ff88`
- error: `#ff4444`
- fonts: JetBrains Mono + Inter
- background texture: dot-grid pattern

---

## 7) Run Locally

No build setup required.

```bash
git clone https://github.com/YOUR_USERNAME/javascript-lab.git
cd javascript-lab
open index.html
```

On Windows, you can also double-click `index.html`.

---

## 8) Suggested GitHub Metadata

Detailed GitHub upload plan is available in:

- `GitHub/GITHUB-UPLOAD-PLAN.md`

This includes recommended repository title, description, topics, and publish checklist.

---

## 9) Author

Made by Kabali Gamer Developers

GitHub: https://github.com/shyamraoshiva778-afk

---

## 10) License

MIT License (you can add `LICENSE` file before publishing if required).
