const comprarOption = document.getElementById('comprarOption');
const rentarOption = document.getElementById('rentarOption');

comprarOption.addEventListener('click', () => {
  comprarOption.classList.add('selected');
  rentarOption.classList.remove('selected');
});

rentarOption.addEventListener('click', () => {
  rentarOption.classList.add('selected');
  comprarOption.classList.remove('selected');
});
