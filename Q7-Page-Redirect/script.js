document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentUrl").textContent =
    window.location.href;
  document.getElementById("userAgent").textContent =
    navigator.userAgent.substring(0, 80) + "...";
  document.getElementById("screenRes").textContent =
    `${screen.width} × ${screen.height} (available: ${screen.availWidth} × ${screen.availHeight})`;

  const cards = document.querySelectorAll(".site-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const url  = card.getAttribute("data-url");
      const name = card.getAttribute("data-name");
      handleRedirect(url, name);
    });
  });
});

function handleRedirect(url, name) {
  const outputEl = document.getElementById("output");

  const userChoice = window.confirm(
    `Do you want to visit ${name}?\n\n${url}`
  );

  if (userChoice === true) {
    outputEl.className = "output-box success";
    outputEl.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:0.4rem;width:100%">
        <span style="color:#00ff88">✓ Redirecting to ${escapeHtml(name)}...</span>
        <span style="color:#555;font-size:0.75rem">${escapeHtml(url)}</span>
      </div>
    `;

    setTimeout(() => {
      window.location.href = url;
    }, 800);

  } else {
    outputEl.className = "output-box error";
    outputEl.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:0.4rem;width:100%">
        <span style="color:#ffaa00">↩ You chose to Stay Here</span>
        <span style="color:#555;font-size:0.75rem">Redirect to ${escapeHtml(name)} cancelled</span>
      </div>
    `;
  }
}

function escapeHtml(str) {
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}