# PDR — GitHub Upload & Repository Setup Guide

---

## 📋 PROJECT INFO

**Repository:** `JavaScript-Lab-Operators-and-Conditional-Statements`
**Owner:** `shyamraoshiva778-afk`
**URL:** `https://github.com/shyamraoshiva778-afk/JavaScript-Lab-Operators-and-Conditional-Statements`
**Already Uploaded:** `Q12-Login-Attempt-System.zip`

---

## 🗺️ FULL PLAN OVERVIEW

```
PHASE 1 → Clone the repo to your machine
PHASE 2 → Unzip Q12 (already uploaded)
PHASE 3 → Create all remaining project folders & files
PHASE 4 → Add landing page files
PHASE 5 → Git add → commit → push everything
PHASE 6 → Verify on GitHub
```

---

## ✅ PHASE 1 — Clone the Repository

> Open your **Terminal** (Mac/Linux) or **Git Bash** (Windows)

```bash
# Step 1 — Go to your Desktop or preferred folder
cd ~/Desktop

# Step 2 — Clone your repo
git clone https://github.com/shyamraoshiva778-afk/JavaScript-Lab-Operators-and-Conditional-Statements.git

# Step 3 — Move into the cloned folder
cd JavaScript-Lab-Operators-and-Conditional-Statements
```

**Verify it cloned correctly:**

```bash
# This should show Q12-Login-Attempt-System.zip
ls
```

**Expected output:**

```
Q12-Login-Attempt-System.zip
```

---

## ✅ PHASE 2 — Unzip Q12 (Already Uploaded File)

```bash
# Make sure you are inside the repo folder
pwd
# Should show: /Users/YourName/Desktop/JavaScript-Lab-Operators-and-Conditional-Statements
```

**For Mac / Linux:**

```bash
# Unzip the file
unzip Q12-Login-Attempt-System.zip

# Check that the folder appeared
ls
```

**For Windows (Git Bash):**

```bash
# Unzip using Git Bash
unzip Q12-Login-Attempt-System.zip

# OR use PowerShell:
Expand-Archive -Path "Q12-Login-Attempt-System.zip" -DestinationPath "."
```

**Verify Q12 folder structure:**

```bash
ls Q12-Login-Attempt-System/
```

**Expected output:**

```
index.html   style.css   script.js   README.md
```

> ✅ Q12 is now ready. **Do NOT delete the zip yet** — we will
> remove it cleanly in Phase 5.

---

## ✅ PHASE 3 — Create All Project Folders & Files

> Run these commands one by one in terminal.
> We will create all 11 remaining project folders.

### 📁 Create All Folders at Once

```bash
mkdir -p Q1-Remove-Duplicates
mkdir -p Q2-Character-Frequency
mkdir -p Q3-First-Non-Repeating
mkdir -p Q4-String-Compression
mkdir -p Q5-Exception-Handling
mkdir -p Q6-Nested-Exception
mkdir -p Q7-Page-Redirect
mkdir -p Q8-Digital-Clock
mkdir -p Q9-Prime-Numbers
mkdir -p Q10-Armstrong-Number
mkdir -p Q11-Password-Generator
```

**Verify all folders exist:**

```bash
ls -la
```

**Expected output:**

```
Q1-Remove-Duplicates/
Q2-Character-Frequency/
Q3-First-Non-Repeating/
Q4-String-Compression/
Q5-Exception-Handling/
Q6-Nested-Exception/
Q7-Page-Redirect/
Q8-Digital-Clock/
Q9-Prime-Numbers/
Q10-Armstrong-Number/
Q11-Password-Generator/
Q12-Login-Attempt-System/
Q12-Login-Attempt-System.zip
```

---

### 📁 Create Empty Files in Each Folder

```bash
# Q1
touch Q1-Remove-Duplicates/index.html
touch Q1-Remove-Duplicates/style.css
touch Q1-Remove-Duplicates/script.js
touch Q1-Remove-Duplicates/README.md

# Q2
touch Q2-Character-Frequency/index.html
touch Q2-Character-Frequency/style.css
touch Q2-Character-Frequency/script.js
touch Q2-Character-Frequency/README.md

# Q3
touch Q3-First-Non-Repeating/index.html
touch Q3-First-Non-Repeating/style.css
touch Q3-First-Non-Repeating/script.js
touch Q3-First-Non-Repeating/README.md

# Q4
touch Q4-String-Compression/index.html
touch Q4-String-Compression/style.css
touch Q4-String-Compression/script.js
touch Q4-String-Compression/README.md

# Q5
touch Q5-Exception-Handling/index.html
touch Q5-Exception-Handling/style.css
touch Q5-Exception-Handling/script.js
touch Q5-Exception-Handling/README.md

# Q6
touch Q6-Nested-Exception/index.html
touch Q6-Nested-Exception/style.css
touch Q6-Nested-Exception/script.js
touch Q6-Nested-Exception/README.md

# Q7
touch Q7-Page-Redirect/index.html
touch Q7-Page-Redirect/style.css
touch Q7-Page-Redirect/script.js
touch Q7-Page-Redirect/README.md

# Q8
touch Q8-Digital-Clock/index.html
touch Q8-Digital-Clock/style.css
touch Q8-Digital-Clock/script.js
touch Q8-Digital-Clock/README.md

# Q9
touch Q9-Prime-Numbers/index.html
touch Q9-Prime-Numbers/style.css
touch Q9-Prime-Numbers/script.js
touch Q9-Prime-Numbers/README.md

# Q10
touch Q10-Armstrong-Number/index.html
touch Q10-Armstrong-Number/style.css
touch Q10-Armstrong-Number/script.js
touch Q10-Armstrong-Number/README.md

# Q11
touch Q11-Password-Generator/index.html
touch Q11-Password-Generator/style.css
touch Q11-Password-Generator/script.js
touch Q11-Password-Generator/README.md
```

---

## ✅ PHASE 4 — Add Landing Page & Root Files

```bash
# Create root landing page files
touch index.html
touch style.css
touch script.js
touch README.md
```

> Now **copy-paste all the code** from the PDR documents into
> each file using your code editor (VS Code recommended).

### Open in VS Code

```bash
# Open entire project in VS Code
code .
```

> VS Code will open with the full folder structure on the left sidebar.
> Paste each file's code from the PDR into the correct file.

---

### ✅ File Paste Checklist

**Root (Landing Page):**

```
☐  index.html    ← Landing page HTML
☐  style.css     ← Landing page CSS
☐  script.js     ← Landing page JS
☐  README.md     ← Root README
```

**Q1-Remove-Duplicates:**

```
☐  index.html
☐  style.css
☐  script.js
☐  README.md
```

**Q2-Character-Frequency:**

```
☐  index.html
☐  style.css
☐  script.js
☐  README.md
```

**Q3-First-Non-Repeating:**

```
☐  index.html
☐  style.css
☐  script.js
☐  README.md
```

**Q4-String-Compression:**

```
☐  index.html
☐  style.css
☐  script.js
☐  README.md
```

**Q5-Exception-Handling:**

```
☐  index.html
☐  style.css
☐  script.js
☐  README.md
```

**Q6-Nested-Exception:**

```
☐  index.html
☐  style.css
☐  script.js
☐  README.md
```

**Q7-Page-Redirect:**

```
☐  index.html
☐  style.css
☐  script.js
☐  README.md
```

**Q8-Digital-Clock:**

```
☐  index.html
☐  style.css
☐  script.js
☐  README.md
```

**Q9-Prime-Numbers:**

```
☐  index.html
☐  style.css
☐  script.js
☐  README.md
```

**Q10-Armstrong-Number:**

```
☐  index.html
☐  style.css
☐  script.js
☐  README.md
```

**Q11-Password-Generator:**

```
☐  index.html
☐  style.css
☐  script.js
☐  README.md
```

**Q12-Login-Attempt-System:** *(already unzipped — just verify)*

```
☐  index.html   ← verify exists
☐  style.css    ← verify exists
☐  script.js    ← verify exists
☐  README.md    ← verify exists
```

---

## ✅ PHASE 5 — Git Setup & Push

### Step 1 — Check Git is Installed

```bash
git --version
```

**Expected:**

```
git version 2.x.x
```

> If not installed → Download from https://git-scm.com

---

### Step 2 — Configure Git (First Time Only)

```bash
git config --global user.name "shyamraoshiva778-afk"
git config --global user.email "your@email.com"
```

**Verify config:**

```bash
git config --list
```

---

### Step 3 — Check Repo Status

```bash
# Make sure you are in the right folder
pwd

# Check what git sees
git status
```

**Expected output — shows all new untracked files:**

```
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)

    index.html
    style.css
    script.js
    README.md
    Q1-Remove-Duplicates/
    Q2-Character-Frequency/
    Q3-First-Non-Repeating/
    Q4-String-Compression/
    Q5-Exception-Handling/
    Q6-Nested-Exception/
    Q7-Page-Redirect/
    Q8-Digital-Clock/
    Q9-Prime-Numbers/
    Q10-Armstrong-Number/
    Q11-Password-Generator/
    Q12-Login-Attempt-System/
    Q12-Login-Attempt-System.zip
```

---

### Step 4 — Remove the ZIP File (Clean Up)

```bash
# Remove the zip — we already unzipped it
git rm Q12-Login-Attempt-System.zip

# If git rm doesn't work (file not yet tracked):
rm Q12-Login-Attempt-System.zip
```

---

### Step 5 — Add ALL Files to Git

```bash
# Stage everything
git add .

# Verify what is staged
git status
```

**Expected — all files show as "new file":**

```
Changes to be committed:
  new file:   index.html
  new file:   style.css
  new file:   script.js
  new file:   README.md
  new file:   Q1-Remove-Duplicates/index.html
  new file:   Q1-Remove-Duplicates/style.css
  new file:   Q1-Remove-Duplicates/script.js
  new file:   Q1-Remove-Duplicates/README.md
  new file:   Q2-Character-Frequency/index.html
  ... (and so on for all files)
  new file:   Q12-Login-Attempt-System/index.html
  new file:   Q12-Login-Attempt-System/style.css
  new file:   Q12-Login-Attempt-System/script.js
  new file:   Q12-Login-Attempt-System/README.md
  deleted:    Q12-Login-Attempt-System.zip
```

---

### Step 6 — Commit

```bash
git commit -m "🚀 Initial commit — Add all 12 JS Lab projects + Landing Page

- Landing page with dark minimal UI, dot-grid pattern
- Filter system (All / String / Exception / BOM / Math / Mini)
- Search functionality
- Q1: Remove Duplicate Characters
- Q2: Character Frequency
- Q3: First Non-Repeating Character
- Q4: String Compression
- Q5: Exception Handling (try/catch/finally)
- Q6: Nested Exception Handling (JSON.parse)
- Q7: BOM Page Redirect System
- Q8: BOM Digital Clock
- Q9: Prime Numbers in Range
- Q10: Armstrong Number
- Q11: Random Password Generator
- Q12: Login Attempt System (Mini Project)
- Root README with full project table
- Unzipped and integrated Q12 from uploaded zip"
```

---

### Step 7 — Set Remote Origin (Verify)

```bash
# Check if remote is already set
git remote -v
```

**Expected:**

```
origin  https://github.com/shyamraoshiva778-afk/JavaScript-Lab-Operators-and-Conditional-Statements.git (fetch)
origin  https://github.com/shyamraoshiva778-afk/JavaScript-Lab-Operators-and-Conditional-Statements.git (push)
```

> If remote is NOT set (blank output), run:

```bash
git remote add origin https://github.com/shyamraoshiva778-afk/JavaScript-Lab-Operators-and-Conditional-Statements.git
```

---

### Step 8 — Push to GitHub

```bash
# Push to main branch
git push origin main
```

> **If your default branch is `master` not `main`:**

```bash
git push origin master
```

> **If you get a rejected error (branch conflict):**

```bash
git pull origin main --rebase
git push origin main
```

---

### Step 9 — Authentication

> GitHub no longer accepts passwords in terminal.
> You need a **Personal Access Token (PAT)**.

**Generate PAT:**

```
1. Go to → https://github.com/settings/tokens
2. Click → "Generate new token (classic)"
3. Note → "JS Lab Push"
4. Expiration → 90 days
5. Check → [✓] repo (full control)
6. Click → "Generate token"
7. COPY the token (shown only once)
```

**When terminal asks for password:**

```
Username: shyamraoshiva778-afk
Password: [PASTE YOUR TOKEN HERE]
```

---

## ✅ PHASE 6 — Verify on GitHub

```bash
# After push completes, open browser
# Go to:
https://github.com/shyamraoshiva778-afk/JavaScript-Lab-Operators-and-Conditional-Statements
```

**Verify this checklist on GitHub:**

```
☐  index.html          visible in root
☐  style.css           visible in root
☐  script.js           visible in root
☐  README.md           renders at bottom of repo page
☐  Q1-Remove-Duplicates/     folder exists with 4 files
☐  Q2-Character-Frequency/   folder exists with 4 files
☐  Q3-First-Non-Repeating/   folder exists with 4 files
☐  Q4-String-Compression/    folder exists with 4 files
☐  Q5-Exception-Handling/    folder exists with 4 files
☐  Q6-Nested-Exception/      folder exists with 4 files
☐  Q7-Page-Redirect/         folder exists with 4 files
☐  Q8-Digital-Clock/         folder exists with 4 files
☐  Q9-Prime-Numbers/         folder exists with 4 files
☐  Q10-Armstrong-Number/     folder exists with 4 files
☐  Q11-Password-Generator/   folder exists with 4 files
☐  Q12-Login-Attempt-System/ folder exists with 4 files
☐  Q12-Login-Attempt-System.zip  DELETED (not visible)
```

---

## 🌐 BONUS — Enable GitHub Pages (Live Website)

> Make your landing page live on the web — FREE

```
1. Go to your repo on GitHub
2. Click → Settings (top menu)
3. Scroll down → Pages (left sidebar)
4. Under "Branch" → Select: main
5. Under "Folder" → Select: / (root)
6. Click → Save
7. Wait 2-3 minutes
8. Your site will be live at:
```

```
https://shyamraoshiva778-afk.github.io/JavaScript-Lab-Operators-and-Conditional-Statements/
```

---

## 🔄 FUTURE UPDATES — How to Push Changes

> Any time you edit files later, run these 3 commands:

```bash
# 1. Stage changes
git add .

# 2. Commit with message
git commit -m "✏️ Update: describe what you changed"

# 3. Push
git push origin main
```

---

## ⚠️ TROUBLESHOOTING

### Problem: `git push` rejected

```bash
# Solution — Pull first then push
git pull origin main --rebase
git push origin main
```

---

### Problem: `unzip: command not found` (Windows)

```bash
# Use PowerShell instead
Expand-Archive -Path "Q12-Login-Attempt-System.zip" -DestinationPath "."
```

---

### Problem: `Permission denied (publickey)`

```bash
# Use HTTPS instead of SSH
git remote set-url origin https://github.com/shyamraoshiva778-afk/JavaScript-Lab-Operators-and-Conditional-Statements.git
```

---

### Problem: Files are empty after touch

```
→ That is expected — touch creates empty files
→ Open VS Code with: code .
→ Then paste code into each file from the PDR
→ Save with Ctrl+S (Windows) or Cmd+S (Mac)
→ Then run git add . again
```

---

### Problem: Wrong branch name

```bash
# Check your branch name
git branch

# Rename master to main if needed
git branch -M main
```

---

## 📊 FINAL SUMMARY

| Phase | Action | Command |
|-------|--------|---------|
| 1 | Clone Repo | `git clone https://github.com/...` |
| 2 | Unzip Q12 | `unzip Q12-Login-Attempt-System.zip` |
| 3 | Create Folders | `mkdir -p Q1-Remove-Duplicates` ... |
| 4 | Create Files | `touch Q1/index.html` ... |
| 4 | Add Code | `code .` → paste from PDR |
| 5a | Remove ZIP | `rm Q12-Login-Attempt-System.zip` |
| 5b | Stage All | `git add .` |
| 5c | Commit | `git commit -m "🚀 Initial commit"` |
| 5d | Push | `git push origin main` |
| 6 | Verify | Open GitHub in browser |
| B | Go Live | GitHub Pages → Settings |

---

## 🗂️ FINAL REPO STRUCTURE ON GITHUB

```
JavaScript-Lab-Operators-and-Conditional-Statements/
│
├── index.html                         ← 🏠 Landing Page
├── style.css
├── script.js
├── README.md                          ← Auto-renders on GitHub
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
│   └── ...
├── Q4-String-Compression/
│   └── ...
├── Q5-Exception-Handling/
│   └── ...
├── Q6-Nested-Exception/
│   └── ...
├── Q7-Page-Redirect/
│   └── ...
├── Q8-Digital-Clock/
│   └── ...
├── Q9-Prime-Numbers/
│   └── ...
├── Q10-Armstrong-Number/
│   └── ...
├── Q11-Password-Generator/
│   └── ...
└── Q12-Login-Attempt-System/          ← ✅ From unzipped file
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md
```