window.addEventListener('load', () => {

    const popupLink = document.getElementById("card__popup-link");
    const popup= document.getElementById('popup');
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
        openPopup();
    };
    screen.onclick = function () {
        closePopup();
    };
    close.onclick = function () {
        closePopup();
    };
    function openPopup() {
        popup.classList.remove('hide');
        screen.classList.add('is-visible');
    }
    function closePopup() {
        popup.classList.add('hide');
        screen.classList.remove('is-visible');
    }
});
