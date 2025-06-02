
/*----------------------------------------------*/
/*--- declaration des variable ---*/
/*----------------------------------------------*/

const max_article_vente_par_page= 5;
let page_active=document.querySelector(".page-active");

const btn_filtre_min = document.querySelector(".filtre-range-min")
const btn_filtre_max = document.querySelector(".filtre-range-max")
const box_prix_min = document.querySelector(".detail-prix-min");
const box_prix_max = document.querySelector(".detail-prix-max");

box_prix_min.innerHTML = btn_filtre_min.value
box_prix_max.innerHTML = btn_filtre_max.value
box_prix_min.value = btn_filtre_min.value;
box_prix_max.value = btn_filtre_max.value;


const btn_precedente = document.querySelector(".btn-panneau-preced");
const btn_suivant = document.querySelector(".btn-panneau-suivant");
const liste_nav_vente= document.querySelectorAll(".nav-list");

const liste_categories= document.querySelectorAll(".categories");
const all_article_en_vente = document.querySelectorAll(".sell-product");

/*----------------------------------------------*/
/*------------- dev ------------*/
/*----------------------------------------------*/

/*------------- les fonctions ------------*/

/*--- donne la classe active au boutton ---*/
let f_activeBtn_onclick = (group,item,classe) => {
    /*--- retire les classes sur tous les btn ---*/
    group.forEach(element => {
        element.classList.remove(classe);
    })
    /*--- ajout la classe sur le btn cliquer ---*/
    item.classList.add(classe);
};

/*--- fonction pour avancer ou reculer de page ---*/
let f_page_suivant_precedent = (group,sens) => {

    /* ---- je recupere la page active ----*/
    page_active = document.querySelector(".page-active");
    /* ---- j'applique le sens ----*/
    let index_page_actuel = page_active.value - 1;
    let index_page_update = index_page_actuel + sens;

    /*--- empêche le decompte d'aller en dessous de 0 ---*/
    if(index_page_update >= 0 && index_page_update <= group.length - 1){
        /*--- appel la fonction de mise en class : page-active ---*/
        f_activeBtn_onclick (group,group[index_page_update],"page-active");
    }
};

/*------------- corps develo ------------*/

liste_categories.forEach((categ) => {
    categ.addEventListener("click", () => {
        /*--- appel la fonction de mise en class : page-active ---*/
        f_activeBtn_onclick (liste_categories,categ,"categories-active");
    })
});

btn_filtre_min.addEventListener("input", (e) => {
    /*---- je recupere les valeurs ---*/
    box_prix_min.value = e.target.value;
    /*--- je l'injecte dans mon span ----*/
    box_prix_min.innerHTML = e.target.value;
    /*--- je limite mon max au min du max XD----*/
    btn_filtre_min.max= btn_filtre_max.value;
});

btn_filtre_max.addEventListener("input", (e) => {
    box_prix_max.value = e.target.value;
    box_prix_max.innerHTML = e.target.value;

    btn_filtre_max.min= btn_filtre_min.value;
})

/*------------- click sur les bonttons de list-pages-vente ------------*/
liste_nav_vente.forEach(nav_btn => {
    nav_btn.addEventListener("click", () => {
        /*--- appel la fonction de mise en class : page-active ---*/
        f_activeBtn_onclick (liste_nav_vente,nav_btn,"page-active");
    })
});
/*------------- click sur les bonttons suivant et precedent ------------*/
btn_precedente.addEventListener("click", () =>{
    /*--- appel la fonction de defilement ---*/
    f_page_suivant_precedent (liste_nav_vente,-1);

});

btn_suivant.addEventListener("click", () =>{
    /*--- appel la fonction de defilement ---*/
    f_page_suivant_precedent (liste_nav_vente,1);

});






