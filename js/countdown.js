// ═══════════════════════════════════════════════
//  COUNTDOWN
// ═══════════════════════════════════════════════

function startCountdown() {
  function tick() {
    const now = new Date().getTime();
    const target = new Date(CONFIG.dataEvento).getTime();
    const diff = target - now;
    if (diff <= 0) {
      document.getElementById('countdown').innerHTML =
        '<div style="font-family:var(--fonte-display);font-size:2rem;color:var(--cor-primaria)">🎊 Hoje é o grande dia!</div>';
      return;
    }
    const dias  = Math.floor(diff / 86400000);
    const horas = Math.floor((diff % 86400000) / 3600000);
    const min   = Math.floor((diff % 3600000)  / 60000);
    const sec   = Math.floor((diff % 60000)    / 1000);
    document.getElementById('cd-dias').textContent  = String(dias).padStart(3,'0');
    document.getElementById('cd-horas').textContent = String(horas).padStart(2,'0');
    document.getElementById('cd-min').textContent   = String(min).padStart(2,'0');
    document.getElementById('cd-sec').textContent   = String(sec).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);
}
