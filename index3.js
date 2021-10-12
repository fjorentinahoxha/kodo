const lights = document.querySelectorAll('.light');
lights[0].style.backgroundColor='red';
console.log(lights[0])

setInterval(() => {
    
    setTimeout(() => {
        lights[0].style.backgroundColor=''
        lights[1].style.backgroundColor='yellow'

    }, 1000)

    setTimeout(() => {
        lights[1].style.backgroundColor=''
        lights[2].style.backgroundColor='green'

    }, 2000)
    
    setTimeout(() => {
        lights[2].style.backgroundColor=''
        lights[0].style.backgroundColor='red'

    }, 3000)

}, 4000)


/*
const lights = document.querySelectorAll(".light");
const order = ["red", "yellow", "green"]
let counter = 0;

setInterval(() => {
    lights[counter].style.backgroundColor = ""
    counter ++;
    if(counter > 2) counter = 0
    lights[counter].style.backgroundColor = order[counter]
    
}, 1000);
*/