const VALID_USERNAME = "admin";
const VALID_PASSWORD = "1234";
const MAX_ATTEMPTS   = 3;

let attemptsLeft = MAX_ATTEMPTS;
let isLocked     = false;
let logEntries   = [];

function login() {
  if (isLocked) {
    showStatus("locked", "🔒 Account is locked. Too many failed attempts.");
    return;
  }

  const username = document.getElementById("usernameInput").value.trim();
  const password = document.getElementById("passwordInput").value;

  try {
    if (username === "" || password === "") {
      throw new Error("Username and Password cannot be empty.");
    }

    if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
      throw new Error(
        `Invalid credentials. ${attemptsLeft - 1} attempt(s) remaining.`
      );
    }

    addLog("ok", `✓ Login successful — Welcome, ${username}!`);
    showStatus("success", `
      <div style="display:flex;flex-direction:column;gap:0.4rem;width:100%">
        <span style="color:#00ff88;font-size:1rem;font-weight:700">✓ Login Successful!</span>
        <span style="color:#555;font-size:0.75rem">Welcome back, <span style="color:#e8e8e8">${escapeHtml(username)}</span></span>
      </div>
    `);

    disableForm();

  } catch (err) {
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

      const card = document.querySelector(".card");
      card.style.animation = "none";
      card.offsetHeight;
      card.style.animation = "shake 0.3s";
    }

    document.getElementById("passwordInput").value = "";

  } finally {
    document.getElementById("logBox").style.display = "flex";
    renderLog();
  }
}

function lockAccount() {
  isLocked = true;
  addLog("err", "🔒 ACCOUNT LOCKED — Maximum attempts exceeded.");
  disableForm();

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

  const overlay = document.getElementById("lockedOverlay");
  if (overlay) overlay.remove();

  document.getElementById("loginBtn").disabled         = false;
  document.getElementById("usernameInput").disabled    = false;
  document.getElementById("passwordInput").disabled    = false;
  document.getElementById("usernameInput").value       = "";
  document.getElementById("passwordInput").value       = "";

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

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("usernameInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("passwordInput").focus();
  });
  document.getElementById("passwordInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") login();
  });
});
