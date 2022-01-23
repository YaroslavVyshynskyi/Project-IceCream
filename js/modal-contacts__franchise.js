
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-about1-open]'),
//     closeModalBtn: document.querySelector('[data-modal-about1-close]'),
//     modal: document.querySelector('[data-about1-modal]'),
   
//   };
//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);
//   function toggleModal() {

//     // refs.modal.style.transition = 'opacity 500ms cubic-bezier(0.88, -0.13, 0.58, 1) 0s';
//     refs.modal.classList.toggle('is-open1');

//   }
// })();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-about1-open]'),
    closeModalBtn: document.querySelector('[data-modal-about1-close]'),
    modal: document.querySelector('[data-about1-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('her__modal--is-hidden');
    document.body.classList.toggle("modal-open")
  }
})();