// Coach85 1.0 - dashboard.js

document.addEventListener("DOMContentLoaded", () => {

  // Begrüßung
  const greeting = document.getElementById("greeting");
  const today = document.getElementById("today");
  const coachTip = document.getElementById("coachTip");
  const quick = document.getElementById("quickActions");
  const stats = document.getElementById("statsGrid");

  const h = new Date().getHours();

  let text = "Guten Abend";
  if (h < 12) text = "Guten Morgen";
  else if (h < 18) text = "Guten Tag";

  greeting.textContent = text + " 👋";

  today.textContent = new Date().toLocaleDateString(
    "de-DE",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );

  // Coach Tipps

  const tips = [
    "Konstanz schlägt Perfektion.",
    "20 Minuten Training sind besser als gar keines.",
    "Saubere Technik vor Geschwindigkeit.",
    "Heute auf ausreichend Wasser achten.",
    "Regeneration gehört zum Training."
  ];

  coachTip.textContent =
    tips[new Date().getDate() % tips.length];

  // Schnellzugriffe

  const actions = [
    ["📈","Fortschritt"],
    ["🎵","Musik"],
    ["👤","Profil"],
    ["⚙️","Einstellungen"]
  ];

  actions.forEach(a=>{

      const card=document.createElement("div");
      card.className="card fade-in";

      card.innerHTML=
      "<h2>"+a[0]+"</h2><p>"+a[1]+"</p>";

      quick.appendChild(card);

  });

  // Statistik

  const values=[

    ["⚖️","72 kg"],
    ["📏","-- cm"],
    ["🔥","0 Tage"],
    ["🎯","Muskelaufbau"]

  ];

  values.forEach(v=>{

      const card=document.createElement("div");
      card.className="card fade-in";

      card.innerHTML=
      "<h3>"+v[0]+"</h3><strong>"+v[1]+"</strong>";

      stats.appendChild(card);

  });

});
