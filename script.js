let elemC =document.querySelector('#elem-container');



let fixedImg=document.querySelector('#fixed-img');


elemC.addEventListener('mouseenter',function(){
   fixedImg.style.display=('block');
})
elemC.addEventListener('mouseleave',function(){
   fixedImg.style.display=('none');
})

let elems =document.querySelectorAll('.elem');
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        let pic =e.getAttribute('data-img');
        fixedImg.style.backgroundImage=`url(${pic})`
    })
})