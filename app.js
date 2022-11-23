function imgSlider(anything){
   const cola = document.querySelector('.cola').src=anything;
};

// function changeBgColor(color){
//     const sec = document.querySelector('.content');
//     sec.style.background = color;
// }
// function changeColor(color){
    // const sec = document.querySelector('.span_content');
//     sec.style.color = color;
// }
// function changeIconColor(color){
//     const sec = document.querySelector('.sci');
//     sec.style.color = color;
// }

const coke = document.querySelector('.coke');
const fanta = document.querySelector('.fanta');
const pepsi = document.querySelector('.pepsi');
const cola = document.querySelector('.cola');
const content = document.querySelector('.content');

coke.addEventListener('click', ()=> {
    content.style.backgroundColor = '#f77878';

})

fanta.addEventListener('click', ()=>{
    content.style.backgroundColor = '#f5bd07';
});

pepsi.addEventListener('click', ()=> {
    content.style.backgroundColor = '#0d6ce9'
})
