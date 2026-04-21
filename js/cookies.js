// ═══════════════════════════════════════════════
//  COOKIES
// ═══════════════════════════════════════════════

function checkCookies() {
  if (!localStorage.getItem('cookies-ok')) {
    document.getElementById('cookie-banner').classList.remove('hidden');
  }
}

function acceptCookies() {
  localStorage.setItem('cookies-ok','1');
  document.getElementById('cookie-banner').classList.add('hidden');
}

function showTermos() {
  showToast('Termos: As informações inseridas neste site são usadas apenas para organização do casamento. Não compartilhamos seus dados.');
}

function showPriv() {
  showToast('Privacidade: Usamos cookies essenciais para salvar preferências. Nenhum dado é vendido ou compartilhado com terceiros.');
}
