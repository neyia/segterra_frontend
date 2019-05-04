const TABLET = 796;
if(window.innerWidth < TABLET) {
  function Popup() {

    const popupWrap = document.querySelector('.popup-wrap');
    const popup = document.querySelectorAll('.popup');
    const screen = document.querySelector('.screen');
    // const btnClose = document.querySelector('.close-block__link"');

    // for(let i = 0; i < popupWrap.length; i++){
    popupWrap.onclick = function (e) {
      e.preventDefault();
      popup.classList.add('show');
      screen.classList.add('is-visible');

      screen.onclick = function () {
        popup.classList.remove('show');
        this.classList.remove('is-visible');
      }
      // btnClose.onclick = function () {
      //   popup[i].classList.remove('show');
      //   this.classList.remove('is-visible');
      // }
    };
    // }
  }

  Popup();
}
