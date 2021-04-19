import Swiper from "swiper";
var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
});
if (document.querySelectorAll(".color-selector")) {
  let colorButtons = document.querySelectorAll(".color-selector");
  colorButtons.forEach((element) => {
    let image = element.dataset.colorImage;
    let id = element.dataset.productId;

    element.onclick = function (event) {
      document.getElementById(`image-selector-${id}`).src = image;
    };
  });
}
if (document.getElementById("textoColor")) {
  let colorButtons = document.querySelectorAll(".color-selector");
  let colorText = document.getElementById("textoColor");
  let imagen = document.getElementById("foto");
  // let parrafoText=document.getElementById("colorDeTexto");
  //let rescolor = parrafoText.dataset.colorDeTexto;
  colorButtons.forEach((element) => {
    element.onclick = function (event) {
      let color = element.dataset.color;
      let texto = element.dataset.colorText;
      let image = element.dataset.colorimage;
      imagen.src = image;

      colorText.innerText = texto;
    };
  });
}
if(document.querySelectorAll(".size-selector")){
    let sizeButtons = document.querySelectorAll(".size-selector");
                let parrafo=document.getElementById("textoTallas");
                sizeButtons.forEach(element => {
                    let size = element.dataset.size;
                    
                    element.onclick = function(event) {
                        parrafo.innerText=size; 
                    }
                });
}
window.nav = {
    status: true,
    menu: function () {
        if (nav.status) {
            // here put class when menu is open - eg:
            document.getElementById("menu-box").className = "menu-box menuopen";
            nav.status = false;
        } else {
            // here put class when menu is closed - eg:
            document.getElementById("menu-box").className = "menu-box";
            nav.status = true;
        }
    }
}
window.navMobile = {
    status: true,
    menuMobile: function () {
        if (navMobile.status) {
            // here put class when menu is open - eg:
            document.getElementById("menu-box-mobile").className = "menu-box menuopen";
            navMobile.status = false;
        } else {
            // here put class when menu is closed - eg:
            document.getElementById("menu-box-mobile").className = "menu-box";
            navMobile.status = true;
        }
    }
}