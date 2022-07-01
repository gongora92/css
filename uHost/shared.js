const backdrop = document.querySelector('.backdrop');
const selectPlanButton = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const cancelButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

selectPlanButton.forEach(button => {
  button.addEventListener('click', function () {
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
});

if (cancelButton) {
  cancelButton.addEventListener('click', closeModal);
}


backdrop.addEventListener('click', function () {
  mobileNav.classList.remove('open');
  closeModal();
});

toggleButton.addEventListener('click', function () {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});

function closeModal() {
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
}
