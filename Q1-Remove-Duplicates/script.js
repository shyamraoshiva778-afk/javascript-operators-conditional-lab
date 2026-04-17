function removeDuplicates() {
  const inputEl  = document.getElementById("inputStr");
  const outputEl = document.getElementById("output");
  const traceEl  = document.getElementById("trace");

  const str = inputEl.value.trim();

  if (str === "") {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ff4444">⚠ Please enter a string.</span>`;
    traceEl.style.display = "none";
    return;
  }

  let result   = "";
  let seen     = {};
  let traceLog = "TRACE LOG\n";
  traceLog    += "─".repeat(36) + "\n";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (seen[char] === undefined) {
      seen[char]  = true;
      result     += char;
      traceLog   += `[${i}] '${char}' → NEW   → result: "${result}"\n`;
    } else {
      traceLog += `[${i}] '${char}' → SKIP  (already exists)\n`;
    }
  }

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

function escapeHtml(str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inputStr").addEventListener("keydown", (e) => {
    if (e.key === "Enter") removeDuplicates();
  });
});