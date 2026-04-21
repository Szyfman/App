// ═══════════════════════════════════════════════
//  INICIALIZAÇÃO
// ═══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Aplicar CONFIG nos elementos do HTML
  applyConfig();

  // Inicializar módulos
  startCountdown();
  initNavigation();
  renderGifts();
  initCartModal();
  checkCookies();
  initAnimations();
});

function applyConfig() {
  // Nomes
  document.getElementById('nome1').textContent = CONFIG.noivo1;
  document.getElementById('nome2').textContent = CONFIG.noivo2;
  document.getElementById('nav-logo').textContent = `${CONFIG.noivo1[0]} & ${CONFIG.noivo2[0]}`;
  document.getElementById('footer-names').innerHTML = `${CONFIG.noivo1} &amp; ${CONFIG.noivo2}`;
  document.getElementById('footer-hash').textContent = CONFIG.hashtag;
  document.title = `${CONFIG.noivo1} & ${CONFIG.noivo2} — Casamento`;

  // Data formatada
  const d = new Date(CONFIG.dataEvento);
  const opts = { day: 'numeric', month: 'long', year: 'numeric' };
  const dateStr = d.toLocaleDateString('pt-BR', opts);
  document.getElementById('hero-date').textContent = dateStr;

  // Frase
  document.getElementById('hero-frase').textContent = CONFIG.fraseBoasvindas;

  // Cerimônia / Recepção
  document.getElementById('cer-data').textContent = CONFIG.cerimonia.data;
  document.getElementById('cer-hora').textContent = CONFIG.cerimonia.horario;
  document.getElementById('cer-local').textContent = CONFIG.cerimonia.local;
  document.getElementById('cer-end').textContent = CONFIG.cerimonia.endereco;
  document.getElementById('cer-info').textContent = CONFIG.cerimonia.info;
  document.getElementById('rec-data').textContent = CONFIG.cerimonia.data;
  document.getElementById('rec-hora').textContent = CONFIG.recepcao.horario;
  document.getElementById('rec-local').textContent = CONFIG.recepcao.local;
  document.getElementById('rec-end').textContent = CONFIG.recepcao.endereco;
  document.getElementById('rec-info').textContent = CONFIG.recepcao.info;
  document.getElementById('dc-title').textContent = CONFIG.cerimonia.dresscode;
  document.getElementById('dc-desc').textContent = CONFIG.cerimonia.dresscodeDesc;

  // Mapa
  document.getElementById('mapa').src = CONFIG.cerimonia.mapUrl;

  // Pix
  document.getElementById('pix-key-display').textContent = CONFIG.pixKey;

  // Cores CSS
  const r = document.documentElement.style;
  r.setProperty('--cor-primaria',   CONFIG.cores.primaria);
  r.setProperty('--cor-secundaria', CONFIG.cores.secundaria);
  r.setProperty('--cor-destaque',   CONFIG.cores.destaque);
  r.setProperty('--cor-texto',      CONFIG.cores.texto);
  r.setProperty('--cor-fundo',      CONFIG.cores.fundo);
  r.setProperty('--cor-claro',      CONFIG.cores.claro);

  // Fontes
  document.documentElement.style.setProperty('--fonte-display', CONFIG.fonteDisplay);
  document.documentElement.style.setProperty('--fonte-body', CONFIG.fonteBody);
}
