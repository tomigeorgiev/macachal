document.addEventListener('scroll', ()=>{
    const navbar = document.querySelector('nav');
    if(window.scrollY > 0){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

// let a = document.getElementById('emailtag');

// var b = 0;
// var arr = [
//     'Да покажеш на тия хора как са праи #OurNextChallenge',
//     'Гепнеш някоя далаверка... евентуално',
//     'Го имаме',
//     'Циментираш тоз камък',
//     'Преливаш без да се оливаш',
//     'Го усмихнеш тоя френски',
//     'Изправиш кривите си линии',
//     'Тръкнеш на баба ти перлата',
//     'Скиваш новостите първа',

// ]

// var i = 1;                  

// function myLoop() {         
//   setTimeout(function() {   
    
//     if(b == 0){
//         a.innerHTML = arr[0]
//         b++;
//     }else if(b == 1){
//         a.innerHTML = arr[1];
//         b++;
//     }else if(b == 2){
//         a.innerHTML = arr[2];
//         b++;
//     }else if(b == 3){
//         a.innerHTML = arr[3];
//         b++;
//     }else if(b == 4){
//         a.innerHTML = arr[4];
//         b++;
//     }else if(b == 5){
//         a.innerHTML = arr[5];
//         b++;
//     }else if(b == 6){
//         a.innerHTML = arr[6];
//         b++;
//     }else if(b == 7){
//         a.innerHTML = arr[7];
//         b++;
//     }else if(b == 8){
//         a.innerHTML = arr[8];
//         b = 0;
//     }

//     i++;                    //  increment the counter
//     if (i < 250) {           //  if the counter < 10, call the loop function
//       myLoop();             //  ..  again which will trigger another 
//     }                   //  ..  setTimeout()
//   }, 4000)
// }

// myLoop(); 





