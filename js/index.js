// Your code goes here

const navigation = document.querySelectorAll('.nav .nav-Link');

navigation.forEach(navigate => {
    navigate.addEventListener('mouseover', event => {
        event.target.style.color = 'red';
    });

    navigate.addEventListener('click', event => {
        event.target.style.color = 'blue';
        event.stopPropagation();
    })
})