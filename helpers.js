/* mouse move drag*/

let container = document.querySelector('#demo');


container.addEventListener('mousemove',(event)=>{
    let x = event.clientX;
    let y = event.clientY;

    let span = document.createElement('span');
    span.style.left = x+ "px";
    span.style.top  = y+ "px";
    div.appendChild(span);

    deleteItem(span);

});

function deleteItem(span){
    setTimeout(()=>{
       span.remove();     
    },5000)
}


/* Auto typing */

let val = "Example text for javascript";
let paragrapgh = document.querySelector(".typing");
let cursor = document.querySelector(".cursor");
let n = 0;
let counter = true;        
let salam = setInterval(()=>{
        if(n==val.length-1){
            clearInterval(salam);  
            start();  
        }
        paragrapgh.innerHTML += val[n];
        n++;
},100)

function start(){
    setInterval(() => {
        counter= !counter;
        if(counter){
            cursor.style.opacity = 0;
        }else {
            cursor.style.opacity = 1;
        }
    }, 500);
}