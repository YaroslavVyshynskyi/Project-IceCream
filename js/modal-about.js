

(() => {
    const refs = {
      openModalBtn: document.querySelector('[about__data-modal-open]'),
      closeModalBtn: document.querySelector('[about__data-modal-close]'),
      modal: document.querySelector('[about__data-modal]'),

    };
  
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('about__modal--is-hidden');
      document.body.classList.toggle("modal-open")
    }
  })();