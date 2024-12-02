// Utilisation de la fonction addEventListener :

/*Déclaration de mes variables images et boutons */
const imageThai = document.querySelector('.destination__bloc__img-thailande');
const imageUsa = document.querySelector('.destination__bloc__img-usa');
const boutonThai = document.querySelector('.destination__bloc__btn-thailande');
const boutonUsa = document.querySelector('.destination__bloc__btn-usa');

/*Appel de mes deux fonctions addEventListener */
imageThai.addEventListener('click', function (){
    boutonThai.classList.add('appear');
})

imageUsa.addEventListener('click', function (){
    boutonUsa.classList.add('appear');
})