(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-hero-open]'),
      closeModalBtn: document.querySelector('[data-hero-close]'),
      modal: document.querySelector('[data-hero]'),
    };
  
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('hero__modal--is-hidden');
      document.body.classList.toggle("modal-open")
    }
    
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
    
  })();