// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Formulario de contacto
function submitForm() {
  const name = document.getElementById('cf-name').value.trim();
  const msg  = document.getElementById('cf-msg').value.trim();
  const out  = document.getElementById('form-msg');
  if (!name || !msg) {
    out.style.color = '#f87171';
    out.textContent = 'Por favor complete al menos su nombre y mensaje.';
    return;
  }
  out.style.color = 'var(--gold)';
  out.textContent = '✅ Mensaje enviado. Nos comunicaremos pronto. ¡Gracias, ' + name + '!';
  ['cf-name','cf-phone','cf-email','cf-type','cf-msg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}
