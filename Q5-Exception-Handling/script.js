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

    if (isNaN(a) || isNaN(b)) {
      throw new Error("Both inputs must be valid numbers.");
    }

    if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
      throw new Error(`Invalid operator: "${op}" — Allowed: +, -, *, /`);
    }

    if (op === "/" && b === 0) {
      throw new Error("Division by zero is not allowed.");
    }

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