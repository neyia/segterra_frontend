function CloseModal() {
    var modal = document.querySelectorAll('.modal');
    var cancelBtn = document.querySelectorAll('.modal__close');
    
    for (let i = 0; i < cancelBtn.length; i++) {
        cancelBtn[i].addEventListener('click', function (e) {
            e.preventDefault();
            modal[i].classList.remove('show');
        });
    }
}

CloseModal();
