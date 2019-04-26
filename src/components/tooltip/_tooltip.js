const TABLET = 796;
if (window.innerWidth < TABLET) {
    
    function Tooltip() {
        
        const tooltipHover = document.querySelectorAll('.tooltip-hover');
        const tooltip = document.querySelectorAll('.tooltip');
        const screen = document.querySelector('.screen');
        
        for (let i = 0; i < tooltipHover.length; i++) {
            tooltipHover[i].addEventListener('click', function (e) {
                e.preventDefault();
                
                if ( this.parentElement.classList.contains('card-rating')
                    && (window.innerWidth <= 820) ) {
                        tooltip[i].style.display = 'none';
                } else {
                    tooltip[i].classList.add('show');
                    screen.classList.add('is-visible');
                }
    
                screen.addEventListener('click', function () {
                    tooltip[i].classList.remove('show');
                    this.classList.remove('is-visible');
                });
            });
        }
    }
    
    Tooltip();
    
}
