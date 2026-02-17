function copyDiscord() {
  const username = 'riccomiller0768';
  const btn = document.getElementById('discordBtn');
  const original = 'Copy Discord →';

  const succeed = () => {
    btn.textContent = 'Copied! ✓';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('copied');
    }, 2000);
  };

  if (navigator.clipboard) {
    navigator.clipboard.writeText(username).then(succeed).catch(() => {
      fallback(username, succeed);
    });
  } else {
    fallback(username, succeed);
  }
}

function fallback(text, cb) {
  const el = document.createElement('textarea');
  el.value = text;
  el.style.position = 'fixed';
  el.style.opacity = '0';
  document.body.appendChild(el);
  el.focus();
  el.select();
  try { document.execCommand('copy'); cb(); } catch(e) {}
  document.body.removeChild(el);
}
