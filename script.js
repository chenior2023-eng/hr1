document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("testBtn");
  const text = document.getElementById("statusText");

  if (!btn || !text) return;

  btn.addEventListener("click", () => {
    text.textContent = "Theme loaded: Pink + Yellow + Blue";
  });
});
