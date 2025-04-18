const slide=document.querySelector('.one');
const lbutt=document.querySelector('.eight');
const tbutt=document.querySelector('.nine');

const slide2=document.querySelector('.one2');
const lbutt2=document.querySelector('.eight2');
const tbutt2=document.querySelector('.nine2');

const slide3=document.querySelector('.one3');
const lbutt3=document.querySelector('.eight3');
const tbutt3=document.querySelector('.nine3');

const slide4=document.querySelector('.one4');
const lbutt4=document.querySelector('.eight4');
const tbutt4=document.querySelector('.nine4');

const slide5=document.querySelector('.one5');
const lbutt5=document.querySelector('.eight5');
const tbutt5=document.querySelector('.nine5');



let scrol=275;


lbutt.addEventListener('click', () => {
  slide.scrollBy({ left: -scrol, behavior: 'smooth' });
});

tbutt.addEventListener('click', () => {
  slide.scrollBy({ left: scrol, behavior: 'smooth' });
});



lbutt2.addEventListener('click', () => {
  slide2.scrollBy({ left: -scrol, behavior: 'smooth' });
});

tbutt2.addEventListener('click', () => {
  slide2.scrollBy({ left: scrol, behavior: 'smooth' });
});



lbutt3.addEventListener('click', () => {
  slide3.scrollBy({ left: -scrol, behavior: 'smooth' });
});

tbutt3.addEventListener('click', () => {
  slide3.scrollBy({ left: scrol, behavior: 'smooth' });
});


lbutt4.addEventListener('click', () => {
  slide4.scrollBy({ left: -scrol, behavior: 'smooth' });
});

tbutt4.addEventListener('click', () => {
  slide4.scrollBy({ left: scrol, behavior: 'smooth' });
});


lbutt5.addEventListener('click', () => {
  slide5.scrollBy({ left: -scrol, behavior: 'smooth' });
});

tbutt5.addEventListener('click', () => {
  slide5.scrollBy({ left: scrol, behavior: 'smooth' });
});
