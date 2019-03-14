/*pop-up's BEGIN---*/
var testPopup = document.getElementById('test-popup');
var testBtn = document.getElementById('test');
var testScreen = document.getElementById('screen');
var cancelBtn = document.getElementById('btn-cancel');

testBtn.onclick = function() {
    openModal();
};

cancelBtn.onclick = function() {
    closeModal();
};

testScreen.onclick = function() {
    closeModal();
};

function openModal() {
    testPopup.classList.remove('hide');
    testScreen.classList.add('is-visible');
}

function closeModal() {
    testPopup.classList.add('hide');
    testScreen.classList.remove('is-visible');
}

/*---pop-up's END*/