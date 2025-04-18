const slide=document.querySelector('.slider');
const lbutt=document.querySelector('.button1');
const tbutt=document.querySelector('.button2');

let scrol=520;



lbutt.addEventListener('click', () => {
  slide.scrollBy({ left: -scrol, behavior: 'smooth' });
});

tbutt.addEventListener('click', () => {
  slide.scrollBy({ left: scrol, behavior: 'smooth' });
});
