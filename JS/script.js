let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open__popup');
let closePopupButton = document.querySelector('.close__popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    })
});

closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    document.body.style.overflow = "";
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active'); 
        document.body.style.overflow = "";
    };
})