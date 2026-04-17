function charFrequency() {
  const inputEl    = document.getElementById("inputStr");
  const outputEl   = document.getElementById("output");
  const freqGridEl = document.getElementById("freqGrid");

  const str = inputEl.value.trim();

  if (str === "") {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ff4444">⚠ Please enter a string.</span>`;
    freqGridEl.style.display = "none";
    return;
  }

  const freq = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (freq[char] === undefined) {
      freq[char] = 1;
    } else {
      freq[char] = freq[char] + 1;
    }
  }

  let outputStr = "{ ";
  const keys    = Object.keys(freq);

  for (let i = 0; i < keys.length; i++) {
    outputStr += `${keys[i]}:${freq[keys[i]]}`;
    if (i < keys.length - 1) outputStr += ", ";
  }
  outputStr += " }";

  outputEl.className = "output-box success";
  outputEl.innerHTML = `<span style="color:#00ff88">${escapeHtml(outputStr)}</span>`;

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