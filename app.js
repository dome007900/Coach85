// Coach85 1.0 - app.js

document.addEventListener("DOMContentLoaded", () => {

  console.log("Coach85 1.0 gestartet");

  // Training-Button
  const start = document.getElementById("startTraining");
  if(start){
    start.addEventListener("click", () => {
      alert("Das Trainingsmodul wird in Modul 2 aktiviert.");
    });
  }

  // Navigation vorbereiten
  document.querySelectorAll("#bottomNavigation button")
    .forEach(btn => {
      btn.addEventListener("click", () => {
        document
          .querySelectorAll("#bottomNavigation button")
          .forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });

  // Service Worker registrieren (wenn vorhanden)
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .catch(err => console.log("Service Worker noch nicht verfügbar:", err));
  }

});
