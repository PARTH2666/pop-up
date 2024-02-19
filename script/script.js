document.querySelector('.button').addEventListener('click',()=>{
    document.querySelector('.container').setAttribute('style',"filter:blur(8px)");
    document.querySelector('.box_modal_container').style.transform = "translateY(300px)" 
})

