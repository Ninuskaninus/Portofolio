const button = document.querySelector('button');
const screenHeight = window.innerHeight;
button.addEventListener('click', () => {
    scrollTo({
        top: screenHeight * 1,
        left: 0,
        behavior: 'smooth'

    });
});

