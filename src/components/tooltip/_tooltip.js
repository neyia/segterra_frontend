const TABLET = 796;
if (window.innerWidth < TABLET) {
    
    function Tooltip() {
        
        const tooltipWrap = document.querySelectorAll('.tooltip-wrap');
        const tooltip = document.querySelectorAll('.tooltip');
        const screen = document.querySelector('.screen');
        
        for (let i = 0; i < tooltipWrap.length; i++) {
            tooltipWrap[i].addEventListener('click', function (e) {
                e.preventDefault();
                tooltip[i].classList.add('show');
                screen.classList.add('is-visible');
                
                screen.addEventListener('click', function () {
                    tooltip[i].classList.remove('show');
                    this.classList.remove('is-visible');
                });
            });
        }
    }
    
    Tooltip();
    
}
