function compressString() {
  const inputEl      = document.getElementById("inputStr");
  const outputEl     = document.getElementById("output");
  const compareRowEl = document.getElementById("compareRow");

  const str = inputEl.value.trim();

  if (str === "") {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ff4444">⚠ Please enter a string.</span>`;
    compareRowEl.style.display = "none";
    return;
  }

  let compressed = "";
  let i          = 0;

  while (i < str.length) {
    const currentChar = str[i];
    let   count       = 1;

    while (i + count < str.length && str[i + count] === currentChar) {
      count++;
    }

    compressed += currentChar + count;
    i          += count;
  }

  compareRowEl.style.display = "flex";
  document.getElementById("origVal").textContent  = str;
  document.getElementById("origLen").textContent  = `length: ${str.length}`;
  document.getElementById("compVal").textContent  = compressed;
  document.getElementById("compLen").textContent  = `length: ${compressed.length}`;

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