let images = [
    {src:"/images/a.jpg"},
    {src:"/images/b.jpg"},
    {src:"/images/c.jpg"},
    {src:"/images/d.jpg"}
];

window.onload = ()=>{
const leftBtn = document.querySelector(".ri-arrow-left-s-line");
const rightBtn = document.querySelector(".ri-arrow-right-s-line");
const slideBox = document.querySelector(".slides");
const para = document.getElementsByTagName("p")[0];
let currentIndex = 0;
para.innerText = `page${currentIndex+1}`;  //set page no
const imgEl = slideBox.getElementsByTagName("img")[0];
imgEl.src = images[currentIndex].src;  //set image source

// remove element of slidebox
function removeSlide(){
    slideBox.removeChild(leftBtn)
    slideBox.removeChild(rightBtn)
    slideBox.removeChild(imgEl)
    slideBox.removeChild(para)
}

// append element to slidebox
function changeSlide(){
    imgEl.src = images[currentIndex].src;  //update image source
    para.innerText = `page${currentIndex+1}`;  //update page no
    slideBox.appendChild(imgEl);
    slideBox.appendChild(leftBtn)
    slideBox.appendChild(rightBtn)
    slideBox.appendChild(para)
}
changeSlide();  //initially set first slide

leftBtn.onclick =()=>{
    if(currentIndex > 0){
        removeSlide(currentIndex); //remove current slide
        currentIndex--;
        changeSlide(); 
    }
}

rightBtn.onclick =()=>{
    if(currentIndex < (images.length -1)){
        removeSlide(currentIndex);  //remove current slide
        currentIndex++;
        changeSlide();
    }
}
}