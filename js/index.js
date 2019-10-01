// /*Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
//  mouseover
//  keydown
//  wheel
//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick 

let navThing = document.querySelectorAll('nav .nav-link');

//************************************************************
// mouseOver and click
//stop propagation
// resources https://developer.mozilla.org/en-US/docs/Web/Events

navThing.forEach(naverMouse => {
    naverMouse.addEventListener('mouseover', event => {
        event.target.style.color = 'purple';
    });

    naverMouse.addEventListener('click', event => {
        event.target.style.color = 'red';
        event.stopPropagation();
    });
})
//**************************************************** 
// (see below) mouseleave, mouseenter
//(see below) TRANSFORM The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.
// scalePicUp with mouseenter
const scalePicUp = document.querySelectorAll('.img-content');
    scalePicUp.forEach(item => {
        item.addEventListener('mouseenter', event => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.5s';
        })
    })

    //scalePicDown with mouseleave
    const scalePicDown = document.querySelectorAll('.img-content');
        scalePicDown.forEach(item => {
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'scale(1)';
                item.style.transition = 'transform 0.5s';
            })
        })

//********************************************************
//wheel 
//Wheel for scrolling https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event#addEventListener_equivalent

const wheelie = document.querySelector('.img-content');
let scale = 1;
        wheelie.addEventListener('wheel', event => {
            event.preventDefault();
            scale += event.y * -0.01;
            scale = Math.min(Math.max(.125, scale), 4);
            wheelie.style.transform = `scale(${scale})`;
        })
//***************************************************