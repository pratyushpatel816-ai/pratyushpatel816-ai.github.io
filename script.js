(() => {
  "use strict";
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const opened = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(opened));
      toggle.setAttribute("aria-label", opened ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  const copyButton = document.getElementById("copyEmail");
  const status = document.getElementById("copyStatus");
  if (copyButton && status) {
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("pratyushpatel816@gmail.com");
        status.textContent = "Email address copied.";
      } catch {
        status.textContent = "Clipboard unavailable. Use the email link.";
      }
    });
  }
})();
