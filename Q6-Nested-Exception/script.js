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