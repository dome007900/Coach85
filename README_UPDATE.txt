Phase 2:
- training.css einbinden
- training.js unter app.js einbinden
- In index.html folgenden Block ergänzen:

<section id="trainingPanel">
<h2 id="exerciseName"></h2>
<p id="exerciseInfo"></p>
<div class="trainingButtons">
<button id="prevExercise">◀</button>
<button id="finishSet">Satz fertig</button>
<button id="nextExercise">▶</button>
</div>
<p>Erledigte Saetze: <span id="setsDone">0</span></p>
<div id="pauseTimer">30 s</div>
<button id="pause30">Pause starten</button>
</section>
