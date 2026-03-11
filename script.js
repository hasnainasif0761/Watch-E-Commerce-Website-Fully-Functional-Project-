const slider = document.getElementById('slider');
const slide = slider.children;


let index = 0;

function showSlider(){
    slider.style.transform = `translateX(-${index * 100}%)`
 recursion()
}

function recursion(){
    setTimeout(()=>{
        index++
        if(index >= slide.length){
            index = 0
        }
        showSlider()
    },2000)
}
recursion()
