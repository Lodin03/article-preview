const shareBtn = document.getElementById('share-btn');
const shareOptions = document.getElementById('share-options');

// Toggle share options on button click
shareBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  const isVisible = shareOptions.style.display === 'flex';
  const newState = !isVisible;

  shareOptions.style.display = newState ? 'flex' : 'none';
  shareBtn.setAttribute('aria-expanded', newState);
  
});

// Hide share options when clicking outside
document.addEventListener('click', function () {
  shareOptions.style.display = 'none';
  shareBtn.setAttribute('aria-expanded', 'false');
});

// ESC key to close share options for accessibility
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    shareOptions.style.display = 'none';
    shareBtn.setAttribute('aria-expanded', 'false');
  }
});