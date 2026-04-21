// ═══════════════════════════════════════════════
//  NAVEGAÇÃO
// ═══════════════════════════════════════════════

function initNavigation() {
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-mobile').classList.toggle('open');
  });
}

function closeMobile() {
  document.getElementById('nav-mobile').classList.remove('open');
}
