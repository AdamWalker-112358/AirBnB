let header = document.querySelector('.second-header')
let reserve = document.querySelector('.bookings__payments');
let button = document.querySelector('.reserve-button');
let image = document.querySelector('.main__images');

header.classList.add('hidden')

let observer = new IntersectionObserver(function (event) {
    if (event[0].target == image && event[0].intersectionRatio == 0) {
        header.classList.add('fixed-header') 
        header.classList.remove('hidden') 
        button.classList.add('hidden')
    } else if (event[0].target == image && event[0].intersectionRatio < 1) {
        header.classList.remove('fixed-header') 
        header.classList.add('hidden') 
    } else if (event[0].target == reserve && event[0].intersectionRatio == 0) {
        button.classList.remove('hidden')
    } else if (event[0].target == reserve && event[0].intersectionRatio < 1) {
        button.classList.add('hidden')
    }
        console.log(event[0])
}, { threshold: [0,0.95, 1] })

observer.observe(reserve)
observer.observe(image)





