function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function findPrimes() {
  const startEl   = document.getElementById("startNum");
  const endEl     = document.getElementById("endNum");
  const outputEl  = document.getElementById("output");
  const gridEl    = document.getElementById("primeGrid");
  const statsEl   = document.getElementById("statsRow");

  const start = parseInt(startEl.value);
  const end   = parseInt(endEl.value);

  if (isNaN(start) || isNaN(end)) {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ff4444">⚠ Please enter valid numbers.</span>`;
    gridEl.style.display  = "none";
    statsEl.style.display = "none";
    return;
  }

  if (start > end) {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ff4444">⚠ Start must be ≤ End.</span>`;
    gridEl.style.display  = "none";
    statsEl.style.display = "none";
    return;
  }

  if (end - start > 10000) {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ffaa00">⚠ Range too large (max 10,000). Please reduce range.</span>`;
    return;
  }

  const primes = [];

  for (let n = start; n <= end; n++) {
    if (isPrime(n)) {
      primes.push(n);
    }
  }

  statsEl.style.display = "grid";
  document.getElementById("countStat").textContent = primes.length;
  document.getElementById("firstStat").textContent = primes.length > 0 ? primes[0] : "—";
  document.getElementById("lastStat").textContent  = primes.length > 0 ? primes[primes.length - 1] : "—";

  if (primes.length === 0) {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `<span style="color:#ffaa00">No prime numbers found in range [${start}, ${end}].</span>`;
    gridEl.style.display = "none";
    return;
  }

  outputEl.className = "output-box success";
  const displayPrimes = primes.length > 30
    ? primes.slice(0, 30).join(", ") + ` ... and ${primes.length - 30} more`
    : primes.join(", ");

  outputEl.innerHTML = `<span style="color:#00ff88">${displayPrimes}</span>`;

  gridEl.style.display = "flex";
  gridEl.innerHTML     = "";

  for (let i = 0; i < primes.length; i++) {
    const tag       = document.createElement("span");
    tag.className   = "prime-tag";
    tag.textContent = primes[i];
    gridEl.appendChild(tag);
  }
}