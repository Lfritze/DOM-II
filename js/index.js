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
// mouseOver and click (2/10 for MVP)
//stop propagation
// resources https://developer.mozilla.org/en-US/docs/Web/Events

navThing.forEach(naverMouse => {
    
    naverMouse.addEventListener('click', event => {
        event.target.style.color = 'red';
        
    });

    naverMouse.addEventListener('mouseover', event => {
        event.target.style.color = 'purple';
        event.stopPropagation();
    });

    
})
//**************************************************** 
// (see below) mouseleave, mouseenter (4/10 for MVP)
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
//wheel (5/10 for MVP)
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
// resize (6/10 for MVP)
// from global window
const headerResize = document.querySelector('.logo-heading');

window.addEventListener('resize', () => {
    
    headerResize.textContent='Yada Yada Yada!';
})

//***************************************************
//mouseout (7/10 for MVP)

let changeParaColors = document.querySelectorAll('.text-content p')
            
changeParaColors.forEach (event => {
    event.addEventListener('mouseout', () => {
        event.style.color = 'purple';
    })
})

//**********************************************************
//dblclick (8/10 for MVP)
//double click the bottom image to see the landfill/sand/dump

const picSwitcher = document.querySelector('.content-destination img');

picSwitcher.addEventListener('dblclick', () => {
    picSwitcher.src = 'https://images.unsplash.com/photo-1523898377974-b4f882164761?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80';
})

//*********************************************** */
//keydown (9/10 for MVP)
// press any ke while on the page and receive a warning from browser window

window.addEventListener('keydown', () => {
    alert `WARNING!!! YOU CLICKED ON THIS PAGE OR SOMETHING!`;
})

//************************************************ */

//mouseup (10/10 for MVP)
const mouseAround = document.querySelectorAll('.content-destination img');
    mouseAround.forEach(thing => {
        thing.addEventListener('mouseup', () => {
            thing.style.transform = 'scale(2.5)';
            thing.style.transition = 'transform 0.5s';
        })
    })

    // Newton's law of action/reaction
    // mouseLeave to reset mouseup

    const newtonsMouseAround = document.querySelectorAll('.content-destination img');
        newtonsMouseAround.forEach(thing => {
            thing.addEventListener('mouseleave', event => {
            thing.style.transform = 'scale(1)';
            thing.style.transition = 'transform 0.5s';
            event.stopPropagation();
            })
        })

//************************************** */
//preventDefault() and stopPropagation()

const linkThing = document.querySelectorAll('a');
        linkThing.forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
                // this stopPropagation prevents the alert below from popping up when you click the link.
            });
        });
        const navTwo = document.querySelector(".main-navigation");
	
        navTwo.addEventListener("click", () => {
          alert("main-nav activated and annoying!!");
        });


