(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-burger-mobile-open]'),
      closeModalBtn: document.querySelector('[data-burger-mobile-close]'),
      modal: document.querySelector('[data-burger-mobile]'),
    };
  
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle("modal-open")
    }
  })();
  