(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-pink-open]'),
      closeModalBtn: document.querySelector('[data-pink-close]'),
      modal: document.querySelector('[data-pink]'),
    };
  
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('products__modal--is-hidden_pink');
      document.body.classList.toggle("modal-open")
    }
  })();