// Body Debug
window.addEventListener('keyup', e => {
  if (e.key == 'a') {
    document.body.classList.toggle('debug');
  }
});

window.addEventListener('dblclick', () => {
  document.body.classList.toggle('debug');
});
