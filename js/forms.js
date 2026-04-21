// ═══════════════════════════════════════════════
//  FORMULÁRIOS (RSVP & RECADOS)
// ═══════════════════════════════════════════════

function submitRsvp() {
  const nome  = document.getElementById('rsvp-nome').value.trim();
  const conf  = document.getElementById('rsvp-conf').value;
  if (!nome || !conf) { showToast('Por favor, preencha seu nome e confirmação.'); return; }
  showToast(`Obrigado, ${nome}! Confirmação registrada com sucesso. 🎉`);
  ['rsvp-nome','rsvp-email','rsvp-rest'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('rsvp-conf').value = '';
  document.getElementById('rsvp-acomp').value = '0';
}

function submitMsg() {
  const nome = document.getElementById('msg-nome').value.trim();
  const msg  = document.getElementById('msg-texto').value.trim();
  if (!nome || !msg) { showToast('Preencha seu nome e a mensagem.'); return; }
  const now = new Date().toLocaleDateString('pt-BR', {day:'numeric',month:'long',year:'numeric'});
  const li = document.createElement('div');
  li.className = 'mural-item';
  li.innerHTML = `
    <div class="mural-name">${escHtml(nome)}</div>
    <div class="mural-msg">"${escHtml(msg)}"</div>
    <div class="mural-date">${now}</div>
  `;
  document.getElementById('mural-list').prepend(li);
  document.getElementById('msg-nome').value = '';
  document.getElementById('msg-email').value = '';
  document.getElementById('msg-texto').value = '';
  showToast('Recado enviado! Obrigado pela mensagem. 💌');
}
