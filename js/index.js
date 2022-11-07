const menuDiv = document.getElementById('menu-mobile');
const btnAnimar = document.getElementById('btn-menu');

menuDiv.addEventListener('click', animarMenu)


function animarMenu(){
    menuDiv.classList.toggle('abrir');
    btnAnimar.classList.toggle('ativo');
    const btn = document.getElementById('btn-menu');
    btnAnimar.classList.toggle('ativar');
}


const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('.close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const toggleModal = () => {
    [modal,fade].forEach((el) => el.classList.toggle('hide'));
};

[ openModalButton, closeModalButton , fade].forEach((el) => {
    el.addEventListener('click', () => toggleModal());
});
