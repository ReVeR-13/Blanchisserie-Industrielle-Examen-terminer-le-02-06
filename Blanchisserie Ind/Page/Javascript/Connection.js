/* == declaration des variables ==*/
/*-------------------------------------------------------------------------------*/
const conteneur_general= document.querySelector('.conteneur');
const btn_enregistrement = document.querySelector('.enregistrement-btn');
const btn_connection = document.querySelector('.connection-btn');
const btn_deco_enregistrement = document.querySelector('.deco-enregist-btn');
const btn_deco_connection = document.querySelector('.deco-connect-btn');

/* == les fonctions ==*/
/*-------------------------------------------------------------------------------*/







/* == les dev ==*/
/*-------------------------------------------------------------------------------*/

//------------ au clique du boutton enregistrement on active l animation vers la droite
btn_deco_enregistrement.addEventListener('click', () => {
    conteneur_general.classList.add('active');
})
//------------ au clique du boutton connection on desactive l animation
btn_deco_connection.addEventListener('click', () => {
    conteneur_general.classList.remove('active');
})