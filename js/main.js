//Этапы преображения
//
//     let go=document.querySelector('.block');
//     let numbers=document.querySelectorAll('.numberss')
//     let left = document.querySelector('.arrows__left');
//     let right = document.querySelector('.arrows__right');

//     window.onresize=function (){
//     document.location.reload();
// }
//     if(window.innerWidth==375) {
//
//     let add = 0;
//     let i=0;
//     left.addEventListener('click', function () {
//     if (add <= -355) {
//     add += 355;
//     numbers[i].style.background = '#D9D9D9';
//     i = i - 1;
//     numbers[i].style.background = '#313131';
//     go.style.left = add + 'px';
// }
//     if(i==0){
//     left.style.background="#31313133";
//     right.style.background="#313131";
// }
// })
//
//     right.addEventListener('click', function () {
//     if (add >= -1065){
//     console.log('hi');
//     add += -355;
//     go.style.left = add + 'px';
//     numbers[i].style.background='#D9D9D9';
//     i=i+1;
//     numbers[i].style.background='#313131';
// }
//     if(i==4){
//     right.style.background="#31313133";
//     left.style.background="#313131";
// }
// })
// }
//
//     else if(window.innerWidth==320) {
//     let add = 0;
//     let i=0;
//         console.log(add);
//     left.addEventListener('click', function () {
//     if (add <= -300) {
//     add += 300;
//     console.log(add);
//     numbers[i].style.background = '#D9D9D9';
//     i = i - 1;
//     numbers[i].style.background = '#313131';
//     go.style.left = add + 'px';
// }
//     if(i==0){
//     left.style.background="#31313133";
//     right.style.background="#313131";
// }
// })
//
//     right.addEventListener('click', function () {
//     if (add >= -900){
//     console.log('hi');
//     add += -300;
//     go.style.left = add + 'px';
//     numbers[i].style.background='#D9D9D9';
//     console.log(numbers[i]);
//     i=i+1;
//     numbers[i].style.background='#313131';
// }
//     if(i==4){
//     right.style.background="#31313133";
//     left.style.background="#313131";
// }
// })
// }
//     else if(window.innerWidth==425) {
//     let add = 0;
//     let i=0;
//     left.addEventListener('click', function () {
//     if (add <= -405) {
//     add += 405;
//     numbers[i].style.background = '#D9D9D9';
//     i = i - 1;
//     numbers[i].style.background = '#313131';
//     go.style.left = add + 'px';
// }
//     if(i==0){
//     left.style.background="#31313133";
//     right.style.background="#313131";
// }
//
// })
//
//     right.addEventListener('click', function () {
//     if (add >= -1215){
//     add += -405;
//     go.style.left = add + 'px';
//     numbers[i].style.background='#D9D9D9';
//     console.log(numbers[i]);
//     i=i+1;
//     numbers[i].style.background='#313131';
// }
//     if(i==4){
//     right.style.background="#31313133";
//     left.style.background="#313131";
// }
// })
// }

//++++++++++++++++++++++++++++++++++++++++++
window.onresize=function (){
    document.location.reload();
}
let numbers=document.querySelectorAll('.numberss');
let left = document.querySelector('.arrows__left');
let right = document.querySelector('.arrows__right');
let go=document.querySelector('.information_three_div_block');
console.log(go);
let arrow1=document.querySelectorAll('.arrows i');
let card1=go.offsetWidth;
console.log(card1);
let i=0;

arrow1.forEach(item=> {
    item.addEventListener('click', () => {

        if (item.id === 'left0' && i!==0){
            go.scrollLeft += -card;
           numbers[i].style.background = '#D9D9D9';
           i = i - 1;
           numbers[i].style.background = '#313131';

    }
        if(item.id === 'left0' && i<4 && i>0){
            // right.style.background="#313131";
            right.style.background="#313131";
            left.style.background = "#FBCE51";
        }
        else if (item.id === 'left0' && i===0 ) {
            left.style.background = "#D9D9D9";
        }

        if(item.id === 'right0' && i<4) {
            go.scrollLeft += card;
            numbers[i].style.background = '#D9D9D9';
            i = i + 1;
            numbers[i].style.background = '#313131';
            // if(i===numbers.length-1){
            //     right.style.background="#D6D6D6";
            //     // left.style.background="#313131";
            // }
            // if(i===4){
            //     // right.style.background="#313131";
            //     right.style.background="#D6D6D6";
            // }
        }
             if(item.id === 'right0' && i===0){
                // right.style.background="#313131";
                left.style.background="#D6D6D6";
            }
            else if (item.id === 'right0' && i>0 &&i<4) {
                 left.style.background = "#313131";
                 right.style.background = "#FBCE51";
                 console.log('erfverv');


             }
             else if (item.id === 'right0' && i===4) {
                  right.style.background = "#D9D9D9";

             }
})
    item.addEventListener('mouseover', (e) => {
        if(i===0 && item.id === 'left0')
            e.target.closest("div").style.background="#D9D9D9";
        else if(i>0 && i<4 && item.id === 'left0')
            // e.target.closest("div").style.background="#313131";
        e.target.closest("div").style.background = "#FBCE51";
        else if(i>0 && i<4 && item.id === 'left0')
            // e.target.closest("div").style.background="#313131";
            e.target.closest("div").style.background = "#FBCE51";
        else if(i===4 && item.id === 'left0')
            // e.target.closest("div").style.background="#313131";
            e.target.closest("div").style.background = "#FBCE51";
        if(i===0 && item.id === 'right0')
            // e.target.closest("div").style.background="#313131";
            e.target.closest("div").style.background = "#FBCE51";
        else if(i===4 && item.id === 'right0')
            e.target.closest("div").style.background="#D9D9D9";
        else if(i>0 && i<4 && item.id === 'right0')
            e.target.closest("div").style.background = "#FBCE51";
    })

    item.addEventListener('mouseout', (e) => {
        if(i===0 && item.id === 'left0')
            e.target.closest("div").style.background="#D9D9D9";
        else if(i>0 && i<4 && item.id === 'left0')
            e.target.closest("div").style.background="#313131";
        else if(i===4 && item.id === 'left0')
            e.target.closest("div").style.background="#313131";
        if(i===0 && item.id === 'right0')
            e.target.closest("div").style.background="#313131";
         else if(i===4 && item.id === 'right0')
            e.target.closest("div").style.background="#D9D9D9";
        else if(i>0 && i<4 && item.id === 'right0')
            e.target.closest("div").style.background="#313131";
        console.log(i);
    })
})


// переход на якорь

let buttonLeft=document.querySelector('#button-left');
let buttonRight=document.querySelector('#button-right');

buttonLeft.addEventListener('click',()=>document.location.href="#information");
buttonRight.addEventListener('click',()=>document.location.href="#four");