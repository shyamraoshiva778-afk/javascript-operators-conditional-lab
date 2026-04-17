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

  let password = "";

  if (useUpper)  password += UPPER  [Math.floor(Math.random() * UPPER.length)];
  if (useLower)  password += LOWER  [Math.floor(Math.random() * LOWER.length)];
  if (useNum)    password += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
  if (useSymbol) password += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

  for (let i = password.length; i < length; i++) {
    const idx = Math.floor(Math.random() * charset.length);
    password += charset[idx];
  }

  const arr = password.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j    = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i]     = arr[j];
    arr[j]     = temp;
  }
  password = arr.join("");

  currentPassword = password;

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

  const strength = calculateStrength(password, useUpper, useLower, useNum, useSymbol, length);
  renderStrength(strength);
  strengthContainer.style.display = "flex";

  copyBtnEl.style.display = "flex";

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