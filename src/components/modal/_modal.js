var popup = document.getElementById('modal');
var cancelBtn = document.getElementById('modal__close');

cancelBtn.onclick = function() {
    closePopup();
};

function closePopup() {
    popup.classList.remove('show');
}
