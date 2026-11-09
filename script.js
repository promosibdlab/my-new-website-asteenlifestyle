let cartCount = 0;
function addToCart(productName) {
  cartCount += 1;
  document.getElementById('cart-count').textContent = cartCount;
  const toast = document.getElementById('toast');
  toast.textContent = productName + ' added to your demo cart';
  toast.classList.add('show');
  window.clearTimeout(window.toastTimer);
  window.toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2200);
}
document.getElementById('year').textContent = new Date().getFullYear();
