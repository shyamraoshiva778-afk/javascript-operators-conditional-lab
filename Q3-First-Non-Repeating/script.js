function findFirstNonRepeating() {
  const inputEl   = document.getElementById("inputStr");
  const outputEl  = document.getElementById("output");
  const stripEl   = document.getElementById("charStrip");
  const str       = inputEl.value.trim();

  if (str === "") {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ff4444">⚠ Please enter a string.</span>`;
    stripEl.style.display = "none";
    return;
  }

  const freq = {};
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    freq[c] = (freq[c] === undefined) ? 1 : freq[c] + 1;
  }

  let result     = null;
  let resultIdx  = -1;

  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) {
      result    = str[i];
      resultIdx = i;
      break;
    }
  }

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