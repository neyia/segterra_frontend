function Toggler() {
  const toggleItem = document.querySelectorAll('.toggle__item');

  for(let i = 0; i < toggleItem.length; i++){
    toggleItem.addEventListener('click', function () {
      toggleItem.classList.remove('active');
    });
  }


}

Toggler();