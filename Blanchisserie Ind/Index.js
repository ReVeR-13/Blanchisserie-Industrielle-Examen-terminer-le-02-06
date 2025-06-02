// ** declaration des variables **/-----------------------------------------
// definir le temps des sliders ---
const temps_slider_1 = 10000;
//slider 1 ---
const imgs_slider_1 = [ "img-defile1.webp",
                                "img-defile2.webp",
                                "img-defile3.webp"];
const nbre_slider_1 = imgs_slider_1.length;
const box_slide1= document.querySelector("#img-defile1");
const miniSlide = document.querySelectorAll(".mini-slider");
const btn_slide_preced = document.querySelector(".btn-precedent");
const btn_slide_suivant = document.querySelector(".btn-suivant");
let num = 0;

// ** Fonctions ** /--------------------------------------------------------
// slider 1 ---
let changeSlides = (sens,id_slider,id_miniSlider,data_slide) => {
    // Gère l'indice cycliquement
    num = (sens + nbre_slider_1) % nbre_slider_1;
    // Itère sur toutes les miniatures et met à jour la classe en fonction de l'indice
    id_miniSlider.forEach((miniS, index) => {
        miniS.classList.toggle("mini-slider-actived", index === num);
        miniS.style.transition = "all 0.5s ease 0s"
    });
    // Met à jour l'image principale
    if (id_slider) {
        const slideImage = data_slide[num];
        id_slider.src = `./assets/Images/Sliders/${slideImage}`;
        id_slider.alt = slideImage;
    }
    clearInterval(interv)
    interv=setInterval("changeSlides(num += 1,box_slide1,miniSlide,imgs_slider_1)",temps_slider_1);
};

// ** Main ** /
let interv=setInterval("changeSlides(num += 1,box_slide1,miniSlide,imgs_slider_1)",temps_slider_1);

btn_slide_preced.addEventListener("click", () => {
    changeSlides(num -= 1,box_slide1,miniSlide,imgs_slider_1)
});

btn_slide_suivant.addEventListener("click", () => {
    changeSlides(num += 1,box_slide1,miniSlide,imgs_slider_1)
});

// ** Footer ** /



