const shareBtn = document.getElementById('share-btn');
const shareOptions = document.getElementById('share-options');

shareBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  const isVisible = shareOptions.style.display === 'flex';
  shareOptions.style.display = isVisible ? 'none' : 'flex';
});

document.addEventListener('click', function () {
  shareOptions.style.display = 'none';
});
