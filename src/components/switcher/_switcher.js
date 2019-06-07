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

let input = document.querySelector('.tumbler__input');
let switcherText = document.querySelector('.tumbler-label');
// let switcherLabel = document.querySelector('.tumbler-flex');

input.addEventListener('change', function (event) {
    if (event.target.checked === true) {
        switcherText.textContent = "On";
    } else {
        switcherText.textContent = "Off";
    }
});

// switcherLabel.addEventListener('click', function () {
//     input.checked = !input.checked;
//     triggerEvent(input, 'change');
// });

function triggerEvent(element, eventName) {
    let event = document.createEvent("HTMLEvents");
    event.initEvent(eventName, false, true);
    element.dispatchEvent(event);
}
