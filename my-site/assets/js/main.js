// Set footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Lightweight hover tooltip for highlighted terms
// Uses the element's data-tip attribute.
let tipEl = null;

function showTip(target) {
  const text = target.getAttribute("data-tip");
  if (!text) return;

  if (!tipEl) {
    tipEl = document.createElement("div");
    tipEl.style.position = "fixed";
    tipEl.style.zIndex = "9999";
    tipEl.style.maxWidth = "320px";
    tipEl.style.padding = "10px 12px";
    tipEl.style.borderRadius = "12px";
    tipEl.style.background = "white";
    tipEl.style.border = "1px solid rgba(0,0,0,0.12)";
    tipEl.style.boxShadow = "0 10px 24px rgba(0,0,0,0.12)";
    tipEl.style.fontSize = "14px";
    tipEl.style.lineHeight = "1.4";
    document.body.appendChild(tipEl);
  }

  tipEl.textContent = text;
  tipEl.style.display = "block";
}

function moveTip(x, y) {
  if (!tipEl) return;
  const offset = 14;
  tipEl.style.left = `${x + offset}px`;
  tipEl.style.top = `${y + offset}px`;
}

function hideTip() {
  if (!tipEl) return;
  tipEl.style.display = "none";
}

document.addEventListener("mouseover", (e) => {
  const t = e.target;
  if (t instanceof HTMLElement && t.classList.contains("term")) showTip(t);
});

document.addEventListener("mousemove", (e) => {
  moveTip(e.clientX, e.clientY);
});

document.addEventListener("mouseout", (e) => {
  const t = e.target;
  if (t instanceof HTMLElement && t.classList.contains("term")) hideTip();
});