
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('hidden');
});
