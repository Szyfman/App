// ═══════════════════════════════════════════════
//  CARRINHO DE PRESENTES
// ═══════════════════════════════════════════════

const cart = [];

function renderGifts() {
  const grid = document.getElementById('gift-grid');
  grid.innerHTML = GIFTS.map(g => `
    <div class="gift-card" id="gcard-${g.id}">
      <div class="gift-img">
        <span style="font-size:3.2rem">${g.emoji}</span>
        <span class="gift-badge">${g.tag}</span>
      </div>
      <div class="gift-body">
        <div class="gift-name">${g.nome}</div>
        <div class="gift-desc">${g.desc}</div>
        <div class="gift-price">R$ ${g.valor.toLocaleString('pt-BR')}</div>
        <div class="gift-msg">💬 Deixe uma mensagem (opcional)</div>
        <textarea class="gift-msg-input" id="gmsg-${g.id}" placeholder="Ex: Com muito carinho de..." rows="2"></textarea>
        <button class="btn btn-primary gift-btn" id="gbtn-${g.id}" onclick="addToCart(${g.id})">
          <i class="fa-solid fa-gift"></i> Presentear
        </button>
      </div>
    </div>
  `).join('');
}

function addToCart(id) {
  const g = GIFTS.find(x => x.id === id);
  const msgEl = document.getElementById('gmsg-'+id);
  const inCart = cart.find(c => c.id === id);
  const btn = document.getElementById('gbtn-'+id);

  if (!inCart) {
    // Mostra campo de mensagem primeiro se não estava aberto
    if (!msgEl.classList.contains('open')) {
      msgEl.classList.add('open');
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Adicionar ao carrinho';
      return;
    }
    cart.push({ ...g, msg: msgEl.value });
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Adicionado!';
    btn.style.background = '#5a8a5e';
    btn.style.borderColor = '#5a8a5e';
    btn.disabled = true;
    showToast(`"${g.nome}" adicionado ao carrinho!`);
  }
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, c) => s + c.valor, 0);
  document.getElementById('cart-total').textContent = total.toLocaleString('pt-BR', {minimumFractionDigits:2});
  document.getElementById('cart-count').textContent = cart.length;
  document.getElementById('cart-btn').style.display = cart.length ? 'inline-block' : 'none';

  // modal items
  const itemsEl = document.getElementById('cart-items');
  if (cart.length === 0) {
    itemsEl.innerHTML = '<p style="color:rgba(44,31,20,.4);font-style:italic;text-align:center;padding:1rem 0">Carrinho vazio</p>';
  } else {
    itemsEl.innerHTML = cart.map(c => `
      <div class="cart-item">
        <span class="cart-item-name">${c.emoji} ${c.nome}${c.msg ? ` <span style="font-size:.75rem;color:rgba(44,31,20,.4)">· "${c.msg}"</span>` : ''}</span>
        <span class="cart-item-price">R$ ${c.valor.toLocaleString('pt-BR')}</span>
        <button class="cart-item-remove" onclick="removeFromCart(${c.id})"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `).join('');
  }
  document.getElementById('modal-total').textContent = total.toLocaleString('pt-BR', {minimumFractionDigits:2});
}

function removeFromCart(id) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx > -1) cart.splice(idx, 1);
  const btn = document.getElementById('gbtn-'+id);
  const msg = document.getElementById('gmsg-'+id);
  if (btn) { btn.innerHTML = '<i class="fa-solid fa-gift"></i> Presentear'; btn.style.background=''; btn.style.borderColor=''; btn.disabled=false; }
  if (msg) msg.classList.remove('open');
  updateCartUI();
}

function openCart() {
  document.getElementById('cart-modal').classList.add('open');
  updateCartUI();
}

function closeCart() {
  document.getElementById('cart-modal').classList.remove('open');
}

function finalizarPresente() {
  copyPix();
  showToast('Chave Pix copiada! Realize a transferência e depois nos informe. 💛');
  setTimeout(() => closeCart(), 2000);
}

function initCartModal() {
  // Fechar modal ao clicar fora
  document.getElementById('cart-modal').addEventListener('click', function(e) {
    if (e.target === this) closeCart();
  });
}
