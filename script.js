// Slider Content
const slider = document.getElementById('slider');
const slide = slider.children;
// Card Animation Slider
const cardSlider = document.querySelector('.cards');
const cardChildren = cardSlider.children
console.log(cardChildren)
// Plus Btn Animation Content
const plusBtn = document.querySelector('.puls');
const showArrival = document.querySelector('.showArrival');

// Slider Content
let index = 0;
let cardIndex = 0;

function showSlider(){
    slider.style.transform = `translateX(-${index * 100}%)`
    // cardSlider.style.transform = `translateX(-${cardIndex * 300}px)`
 recursion()
}

function recursion(){
    setTimeout(()=>{
        index++
        if(index >= slide.length){
            index = 0
        }
        cardIndex++
        if(cardIndex >= cardChildren.length){
            cardIndex = 0
        }
        showSlider()
    },2000)
}
recursion()

// Plus Btn Animation Content
plusBtn.addEventListener('click',(e)=>{
    e.stopPropagation()
    showArrival.classList.remove('hidden')
})
document.addEventListener('click',()=>{
    showArrival.classList.add('hidden')
})

