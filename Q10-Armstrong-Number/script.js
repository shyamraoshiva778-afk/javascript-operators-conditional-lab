function checkArmstrong() {
  const inputEl     = document.getElementById("inputNum");
  const outputEl    = document.getElementById("output");
  const breakdownEl = document.getElementById("breakdown");

  const numStr = inputEl.value.trim();

  if (numStr === "" || isNaN(numStr)) {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ffaa00">⚠ Please enter a valid number.</span>`;
    breakdownEl.style.display = "none";
    return;
  }

  const num    = parseInt(numStr);
  const digits = String(Math.abs(num)).split("");
  const power  = digits.length;

  let sum       = 0;
  let breakdown = "";
  const parts   = [];

  for (let i = 0; i < digits.length; i++) {
    const d         = parseInt(digits[i]);
    const powered   = Math.pow(d, power);
    sum            += powered;
    parts.push(`${d}^${power} = ${powered}`);
  }

  const superscripts = {"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹"};
  const toSup = (n) => String(n).split("").map(c => superscripts[c] || c).join("");

  const isArmstrong = sum === num;

  breakdownEl.style.display = "block";

  let equationStr = digits.map(d => `${d}${toSup(power)}`).join(" + ");
  let sumParts    = parts.join(" + ");

  breakdownEl.innerHTML = `
    <span style="color:#e8e8e8">Number  : ${num}</span><br>
    <span style="color:#e8e8e8">Digits  : [${digits.join(", ")}]</span><br>
    <span style="color:#e8e8e8">Power   : ${power} (number of digits)</span><br>
    <span style="color:#e8e8e8">Formula : ${equationStr}</span><br>
    <span style="color:#e8e8e8">Calc    : ${sumParts}</span><br>
    <span style="color:#e8e8e8">Sum     : ${sum}</span><br>
    <span style="${isArmstrong ? "color:#00ff88" : "color:#ff4444"}">
      ${sum} ${isArmstrong ? "===" : "!=="} ${num} → ${isArmstrong ? "ARMSTRONG ✓" : "NOT ARMSTRONG ✗"}
    </span>
  `;

  if (isArmstrong) {
    outputEl.className = "output-box success";
    outputEl.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:0.3rem;width:100%">
        <span style="color:#00ff88;font-size:1.3rem;font-weight:700">✓ ${num} is an Armstrong Number!</span>
        <span style="color:#555;font-size:0.75rem">${equationStr} = ${sum}</span>
      </div>
    `;
  } else {
    outputEl.className = "output-box fail";
    outputEl.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:0.3rem;width:100%">
        <span style="color:#ff4444;font-size:1.3rem;font-weight:700">✗ ${num} is NOT an Armstrong Number</span>
        <span style="color:#555;font-size:0.75rem">Sum = ${sum} ≠ ${num}</span>
      </div>
    `;
  }
}

function quickCheck(num) {
  document.getElementById("inputNum").value = num;
  checkArmstrong();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inputNum").addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkArmstrong();
  });
});