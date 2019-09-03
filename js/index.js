/*Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
 mouseover
 keydown
 wheel
 drag / drop
 load
 focus
 resize
 scroll
 select
 dblclick 
 
 Nest two similar events somewhere in the site and prevent the event propagation properly
 Stop the navigation items from refreshing the page by using preventDefault() */

// Your code goes here
//------------------------------------------------------------------

//click and mouseover

// used mouseover and mouseout...nav links start out black, mouseover them and they turn green, click links and they turn salmon color (#ff5777). Bears eat salmon.

let navigon = document.querySelectorAll('nav .nav-link');

navigon.forEach(navigate => {
    navigate.addEventListener('mouseover', e => {
        e.target.style.color = 'green';
    });

    navigate.addEventListener('click', e => {
        e.target.style.color = '#ff5777';
        e.stopPropagation();
    });
})


//----------------------------------------------------------
//mouseleave and mouseenter
//Scale up ".img-content" pictures

const scaleUpPics = document.querySelectorAll('.img-content');
    scaleUpPics.forEach(item => {
        item.addEventListener('mouseenter', event => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.5s';
        })
    })

//Scale down ".img-content" pictures    

const scaleDownPics = document.querySelectorAll('.img-content');
    scaleDownPics.forEach(item => {
        item.addEventListener('mouseleave', event => {
            item.style.transform = 'scale(1)';
            item.style.transition = 'transform 0.5s';
        })
    })

//-----------------------------------------------------------------
//Wheel
//prevent default

//Wheel for scrolling into images - cited idea from https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event#addEventListener_equivalent

const crazyWheel = document.querySelector('.img-content');
let scale = 1;
    crazyWheel.addEventListener('wheel', zoom => {
        event.preventDefault();
        scale += event.deltaY * -0.01;
        scale = Math.min(Math.max(.125, scale), 4);
        crazyWheel.style.transform = `scale(${scale})`;
    })
    
//---------------------------------------------------------------------
//dblclick

const picSwap = document.querySelector('.content-destination img');

picSwap.addEventListener('dblclick', e => {
    picSwap.src = 'https://images.unsplash.com/photo-1516537219851-920e2670c6e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80';
})
    
//----------------------------------------------------------------
// resize

window.addEventListener('resize', e => {
    const changeTitle = document.querySelector('.logo-heading');
    changeTitle.textContent="GO jump in a Volcano!"
})

//--------------------------------------------------------
// keydown

window.addEventListener('keydown', e => {
    alert `Super Nintento, Sega Genesis, when I was dead broke, I couldn't picture this`
})



//-----------------------------------------------------------
//mouseout

let pColors = document.querySelectorAll('.text-content p')
            

pColors.forEach (p => {
    p.addEventListener('mouseout', () => {
        p.style.color = 'red';
    })
})




//------------------------------------------------------------
// prevent default on nav
const menu = document.querySelectorAll('nav a')

    menu.forEach(e => {
        e.addEventListener('click', event => {
            event.preventDefault();
        })
    })

