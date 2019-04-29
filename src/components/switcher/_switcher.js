function Toggler() {
    const toggleItem = document.querySelectorAll('.toggler__item');
    
    for (let i = 0; i < toggleItem.length; i++) {
        for (let j = 0; j < toggleItem.length; j++) {
            toggleItem[i].addEventListener('click', function () {
                toggleItem[j].classList.remove('active');
                this.classList.add('active');
            });
        }
    }
}

Toggler();