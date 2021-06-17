window.addEventListener('load', () => {

    const popupLink = document.getElementsByClassName('card__btn');
    const popup= document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');
    const close = document.getElementById('close');
    const screen = document.getElementById('screen');

    popupLink.onclick = function () {
        openPopup2();
    };
    closeBtn.onclick = function () {
        closePopup2();
    };
    screen.onclick = function () {
        closePopup2();
    };
    close.onclick = function () {
        closePopup2();
    };
    function openPopup2() {
        popup.classList.remove('hide');
        screen.classList.add('is-visible');
    }
    function closePopup2() {
        popup.classList.add('hide');
        screen.classList.remove('is-visible');
    }
});
