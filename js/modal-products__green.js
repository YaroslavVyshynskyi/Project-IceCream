(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-green-open]'),
      closeModalBtn: document.querySelector('[data-green-close]'),
      modal: document.querySelector('[data-green]'),
    };
  
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('products__modal--is-hidden_green');
      document.body.classList.toggle("modal-open")
    }
  })();