// ═══════════════════════════════════════════════
//  FUNÇÕES UTILITÁRIAS
// ═══════════════════════════════════════════════

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

function copyPix() {
  navigator.clipboard.writeText(CONFIG.pixKey).then(() => showToast('Chave Pix copiada! 📋'));
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
