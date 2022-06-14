let slides = document.querySelectorAll(".slide");
let buttons = document.querySelectorAll(".slide_button");
let canSlide = 1;

buttons.forEach(button =>{
    button.addEventListener("click", () =>{
            if(button.classList.contains("slide_left") && canSlide >= 2){
                canSlide -= 1;
            }
            if(button.classList.contains("slide_right") && canSlide <= 3){
                canSlide += 1;
            }
            slideNow();
    })
})

function slideNow(){
    for(let i = 0; i < slides.length; i++){
        let slide = slides[i];
        if(parseFloat(slide.getAttribute("data-slide")) == canSlide && slide.classList.contains("active")){
            return;
        }
        else{
            slide.classList.remove("active");
            changeClasse(slide);
        }
    }
}
/**
 * 
 * @param {HTMLDivElement} slide 
 */
function changeClasse(slide){
    if(parseFloat(slide.getAttribute("data-slide")) == canSlide){
        slide.classList.add("active");
    }
}