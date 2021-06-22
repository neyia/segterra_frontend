window.addEventListener('load', () => {

    const popupLink = document.getElementsByClassName('card__btn');
    const popup= document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');
    const close = document.getElementById('close');
    const screen = document.getElementById('screen');
    
    const podcastForm = document.getElementById('podcast-form');
    
    podcastForm.onsubmit = function(e) {
        const success = document.querySelector('.top-section__success');
        e.preventDefault();
        this.classList.add("hide");
        success.classList.add("fadeIn");
        const fadeOut = function () {
            success.classList.add("fadeOut")
        }
        setTimeout(fadeOut,5000);
    };
    
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
