const btnLogin = document.querySelector('.btn-login');
const btnAdd = document.querySelector('.btn-add');
const likeButtons = document.querySelectorAll('.btn-like');
const definitionsSection = document.querySelector('.definitions');

btnLogin.addEventListener('click', () => {
 if (btnLogin.textContent === 'Iniciar sesión') {
 btnLogin.textContent = 'Cerrar sesión';
 } else {
 btnLogin.textContent = 'Iniciar sesión';
 }
});

btnAdd.addEventListener('click', () => {
 btnAdd.style.display = 'none';
});

likeButtons.forEach(button => {
 button.addEventListener('click', () => {
 const definitionTitle = button.parentNode.querySelector('h2').textContent;
 alert(`¡Te gustó la definición de "${definitionTitle}"!`);
 const likeCount = parseInt(button.textContent.split(' ')[0]);
 button.textContent = `${likeCount + 1} me gusta`;
 });
});