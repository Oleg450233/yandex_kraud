let list=document.querySelector('.list');
console.log(list);
 let card=list.querySelector('.four__item').offsetWidth;
let n;
if(window.innerWidth>800&& window.innerWidth<=1130 ){
    n=2;
}
else if(window.innerWidth<=800){
    n=1;
}
else n=3;
// let card=list.offsetWidth/n;
console.log(n);
let isDraging=false,startX,startScrollLeft;
let arrow=document.querySelectorAll('.four__arrow i');
let listChildren=[...list.children];



let left1 = document.querySelector('.four__now');
let right1 = document.querySelector('.four__summa');


let arr=Array.from(listChildren);



console.log(arr);
right1.textContent=arr.length;
//получите количество карточек, которое может поместиться в списке за один раз
// let sum= Math.round(list.offsetWidth/card);




//вставьте копии последних нескольких карточек в начало карусели для бесконечной прокрутки

listChildren.slice(-n).reverse().forEach(card=>{
    list.insertAdjacentHTML('afterbegin',card.outerHTML);
})
listChildren.slice(0,n).forEach(card=>{
    list.insertAdjacentHTML('beforeend',card.outerHTML);
})

let scrollStart=e=>{
    isDraging=true;
    list.classList.add('dragging');
    startX=e.pageX;
    console.log(startX);
    startScrollLeft=list.scrollLeft;
    console.log(startScrollLeft);//   0
}
let scroll = e => {
    if(!isDraging) return;
    console.log(list.scrollLeft=startScrollLeft-(e.pageX-startX));
    list.scrollLeft=startScrollLeft-(e.pageX-startX);
    console.log(startScrollLeft,e.pageX,startX);

}
let scrollStop = e => {
    isDraging=false;
    list.classList.remove('dragging');
}
console.log(  list.scrollLeft);
const infiniteScroll=()=> {
    console.log(list.scrollLeft);
    if (list.scrollLeft === 0 ) {
        list.classList.add('no-transition');
        list.scrollLeft =list.scrollWidth - 2 * list.offsetWidth;
        list.classList.remove('no-transition');
        console.log(  list.scrollLeft);
    }
    else if (Math.ceil(list.scrollLeft) === list.scrollWidth - list.offsetWidth) {

        list.classList.add('no-transition');
        list.scrollLeft = list.offsetWidth;
        list.classList.remove('no-transition');

    }
}
let x=1;
left1.innerText= x;
arrow.forEach(btn=> {
    btn.addEventListener('click', () => {

  list.scrollLeft+=btn.id==='left'? -card:+card;
        if(btn.id==='left' && list.scrollLeft===0 ) {
           return;
        }
  if(btn.id==='left' && left1.textContent>1 ) {
      x -= 1;
      left1.innerText = x;
  }
  else if(btn.id==='left' && left1.textContent==1 ){
      x = 6;
      left1.innerText = x;
  }
  else if(btn.id==='right' && left1.textContent<=5){
      x += 1;
      left1.innerText = x;
  }
  else if(btn.id==='right' && left1.textContent==6){
      x = 1;
      left1.innerText = x;
  }

    })

})



list.addEventListener('mousedown',scrollStart);
list.addEventListener('mousemove',scroll);
document.addEventListener('mouseup',scrollStop);
list.addEventListener('scroll',infiniteScroll);

function test(){
    if(x===6)
        x=0
    x += 1;
    list.scrollLeft+=card;
    left1.innerText = x;
    console.log('Привет');

}
setInterval(test,2000);