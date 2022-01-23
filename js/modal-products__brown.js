(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-brown-open]'),
      closeModalBtn: document.querySelector('[data-brown-close]'),
      modal: document.querySelector('[data-brown]'),
    };
  
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('products__modal--is-hidden_brown');
      document.body.classList.toggle("modal-open")
    }
  })();