let slider = document.querySelector('#intro-to-company'),
loginButton = document.querySelector('#login'),
signupButton = document.querySelector('#signup');

signupButton.addEventListener('click', () => {
    slider.classList.add('slide-right');
});
loginButton.addEventListener('click', () => {
    slider.classList.remove('slide-right');
});



