// Slider Content
const slider = document.getElementById('slider');
const slide = slider.children;


// Slider Content
let index = 0;

function showSlider(){
    slider.style.transform = `translateX(-${index * 100}%)`
}

function recursion(){
    setTimeout(()=>{
        index++
        if(index >= slide.length){
            index = 0
        }
        showSlider()
        recursion()
    },2000)
}
recursion()



// Plus Btn Animation Content
const plusBtn = document.querySelector('.puls');
const showArrival = document.querySelector('.showArrival');

// Plus Btn Animation Content
plusBtn.addEventListener('click',(e)=>{
    e.stopPropagation()
    showArrival.classList.remove('hidden')
})
document.addEventListener('click',()=>{
    showArrival.classList.add('hidden')
})

// Card Animation Slider
const cardSlider = document.querySelector('.cards');
const cards = [...cardSlider.children];

const visileCards = 4;

for(let i = 0; i < visileCards; i++){
    const clone = cards[i].cloneNode(true)
    cardSlider.appendChild(clone)
}

for(let i = cards.length - visileCards; i < cards.length; i++){
    const clone = cards[i].cloneNode(true);
    cardSlider.prepend(clone);
}

let cardIndex = visileCards;
cardSlider.style.transform = `translateX(-${cardIndex * 340}px)`

function autoSlide(){
    setTimeout(()=>{

        cardIndex++
        cardSlider.style.transition = "transform 0.5s"
        cardSlider.style.transform = `translateX(-${cardIndex * 340}px)`

        // end par reset
        if(cardIndex >= cardSlider.children.length - visileCards){
            setTimeout(()=>{
                cardSlider.style.transition = "none"
                cardIndex = visileCards
                cardSlider.style.transform = `translateX(-${cardIndex * 340}px)`
            },500)
        }

        autoSlide()

    },3000)
}

autoSlide()



// Change Website Title Dynamically
let changeTitle = document.title;

let titleInterval = null;

document.addEventListener('visibilitychange',function(){
    let title = ["💥 Don't Forget this...",'⚠️ Please Come Back','⏳ We are waiting for you'];
    
    let i = 0 ;

    titleInterval = setInterval(function(){
     if(document.hidden){
        document.title = title[i % title.length];
        i++
     }else{
        clearInterval(titleInterval);
        document.title = changeTitle
     }   
    },2000)


})



// Box Hover Animation
let boxHover = document.getElementById('boxHover');

boxHover.addEventListener('mouseover',()=>{
    boxHover.classList.add('animate__animated' , 'animate__headShake')
})
boxHover.addEventListener('mouseout',()=>{
    boxHover.classList.remove('animate__animated' , 'animate__headShake')
})


// Testimonial Cards Slider 
const testSlider = document.querySelector('.testCard');
const testChild = testSlider.children

let testIndex = 0;

function showTestSlider(){
    testSlider.style.transform = `translateX(-${testIndex * 100}%)`
}

    setInterval(()=>{
    testIndex++
    if(testIndex >= testChild.length){
        testIndex = 0;
    }
    showTestSlider()
},3000)


// ------ Company Slider ---------------//
let companySlider = document.querySelector('.companySlider');
let companyChild = [...companySlider.children]

let visibleSlider = 4;

for(let i = 0; i < visibleSlider; i++){
    let clone = companyChild[i].cloneNode(true);
    companySlider.appendChild(clone)
}

for(let i = companyChild.length - visibleSlider; i < companyChild.length;i++){
    let clone = companyChild[i].cloneNode(true)
    companySlider.prepend(clone)
}


let companyIndex = visibleSlider;
companySlider.style.transform = `translateX(-${companyIndex * 240}px)`

function companySliderFunc(){
    companySlider.style.transform = `translateX(-${companyIndex * 240}px)`
}

setInterval(()=>{
companyIndex++
if(companyIndex >= companyChild.length + visibleSlider){
    companyIndex = visibleSlider
}
companySliderFunc()
},2000)



// ------------ Watch Slider --------------- //
const watchSlide = document.querySelector('.watchSlide');

let isDragge = false;
let startX;
let scrollLeft;

watchSlide.addEventListener('mousedown', watchEventFunc);

function watchEventFunc(e){

    isDragge = true;


    startX = e.pageX - watchSlide.offsetLeft;

    scrollLeft = watchSlide.scrollLeft;

}

watchSlide.addEventListener('mouseleave',()=>{
    isDragge = false
})

watchSlide.addEventListener('mouseup',()=>{
    isDragge = false
})

watchSlide.addEventListener('mousemove',(e)=>{

    if(!isDragge) return;

    e.preventDefault();

    const x = e.pageX - watchSlide.offsetLeft;

    const walk = (x - startX) * 2;

    watchSlide.scrollLeft = scrollLeft - walk

})
























