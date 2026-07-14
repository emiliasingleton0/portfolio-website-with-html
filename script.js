const statuses = [
  "studying at ucf ♡",
  "probably coding...",
  "listening to jazz ♫",
  "dreaming about space 🚀",
  "debugging something (╥﹏╥)",
  "building silly little websites ♡",
  "working on a side project...",
  "currently overthinking my css",
  "somewhere in orlando ☁️"
];

const devLogEntries = [
  { date: "07.14.26", icon: "♡", text: "turned my portfolio into EmiOS v1.0 and cleaned up the project structure!", isNew: true },
  { date: "07.13.26", icon: "♡", text: "moved some things around on my homepage and finally fixed the spacing. css is cooperating for once (˶ᵔ ᵕ ᵔ˶)" },
  { date: "07.08.26", icon: "☕", text: "jazz café v2 is live!! added café ambience, new animations, and some tiny details ♫" },
  { date: "07.07.26", icon: "🚀", text: "fixed the TLE data source for my ISS mission ops tracker. learned more about CORS than i ever wanted to..." },
  { date: "07.04.26", icon: "📷", text: "currently documenting my raspberry pi thermal photobooth build ♡" },
  { date: "06.30.26", icon: "✧", text: "learning more javascript and making way too many side projects..." }
];

function setRandomStatus() {
  const el = document.querySelector(".status-text");
  if (!el) return;
  el.textContent = `status: ${statuses[Math.floor(Math.random() * statuses.length)]}`;
}

function renderDevLog() {
  const log = document.querySelector("#dev-log");
  if (!log) return;
  log.innerHTML = devLogEntries.map(entry => `
    <article class="dev-entry">
      <div><span class="dev-date">${entry.date} ${entry.icon}</span>${entry.isNew ? '<span class="new-tag">NEW!</span>' : ''}</div>
      <div>${entry.text}</div>
    </article>
  `).join("") + '<div class="dev-footer">more updates soon ♡</div>';
}

function closeAllWindows() {
  document.querySelectorAll(".desktop-window.open").forEach(win => {
    win.classList.remove("open");
    win.setAttribute("aria-hidden", "true");
  });
}

function openWindow(id) {
  const target = document.getElementById(id);
  if (!target) return;
  closeAllWindows();
  target.classList.add("open");
  target.setAttribute("aria-hidden", "false");
}

document.querySelectorAll("[data-window]").forEach(button => {
  button.addEventListener("click", () => openWindow(button.dataset.window));
});

document.querySelectorAll(".window-close").forEach(button => {
  button.addEventListener("click", () => {
    const win = button.closest(".desktop-window");
    if (win) {
      win.classList.remove("open");
      win.setAttribute("aria-hidden", "true");
    }
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeAllWindows();
});

setRandomStatus();
renderDevLog();
