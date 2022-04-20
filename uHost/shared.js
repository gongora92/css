const backdrop = document.querySelector('.backdrop');
const selectPlanButton = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const cancelButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

selectPlanButton.forEach(button => {
  button.addEventListener('click', function(){
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
});

cancelButton.addEventListener('click', closeModal);

backdrop.addEventListener('click', function() {
  mobileNav.style.display = 'none';
  closeModal();
});

toggleButton.addEventListener('click', function() {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});

function closeModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}
