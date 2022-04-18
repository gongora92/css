const backdrop = document.querySelector('.backdrop');
const selectPlanButton = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const cancelButton = document.querySelector('.modal__action--negative')

selectPlanButton.forEach(button => {
  button.addEventListener('click', function(){
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
});

cancelButton.addEventListener('click', closeModal);

backdrop.addEventListener('click', closeModal)

function closeModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}
