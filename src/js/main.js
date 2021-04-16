import Swiper from 'swiper';
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});


function Jesus() {
    console.log('hola jesus')

}



let div = document.getElementById('prpr')

div.onclick = Jesus
