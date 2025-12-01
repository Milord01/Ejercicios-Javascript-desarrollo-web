const message = document.querySelector('#message');
const buttons = document.querySelector('#buttons');
const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');

noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    message.innerHTML = 'TE AMO MIBIDA';
    buttons.style.display = 'none';
});