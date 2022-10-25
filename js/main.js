"use strict"; 
//2.1. ejercicio 3

const sectionForm = document.querySelector('.js-new-form');

/*sectionForm.classList.remove("collapsed");

Comentamos para que funcione el 2.3 ejercicio 2, que también es de mostrar y ocultar formulario*/




//2.1. ejercicio 4

const listKitten = document.querySelector(".js-list");

/*
const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le
    moleste. Es una maravilla acariciarle!
  </p>
</article>
</li>`;

const kittenTwo = `<li class="card"> <img class="card_img"
src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg" alt="gatito" />
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
Es una maravilla acariciarle!
</p>
</li>`;

const kittenThree = `<li class="card"> <img class="card_img"
src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
alt="gatito" />
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
Es una maravilla acariciarle!
</p>
</li>`;

listKitten.innerHTML = kittenOne + kittenTwo + kittenThree; 

Comentamos para que funcione el 2.2 ejercicio 1 de interpolación. Lo escribimos más abajo con las variables de ese ejercicio
*/





//2.2.1

const kittenOneImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenOneName = 'Anastacio';
const kittenOneDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenOneRace = 'British Shorthair';

const kittenTwoImage = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenTwoName ='Fiona';
const kittenTwoDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!';
const kittenTwoRace = 'British Shorthair';

const kittenThreeImage = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenThreeName = 'Cielo';
const kittenThreeDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!';
const kittenThreeRace ='British Shorthair';

const kittenOne = `<li class="card">
<article>
  <img class="card_img" src=${kittenOneImage} alt="gatito" />
  <h3 class="card_title">${kittenOneName}</h3>
  <h4 class="card_race">${kittenOneRace}</h4>
  <p class="card_description">
    ${kittenOneDesc}
  </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<article>
  <img class="card_img" src=${kittenTwoImage} alt="gatito" />
  <h3 class="card_title">${kittenTwoName}</h3>
  <h4 class="card_race">${kittenTwoRace}</h4>
  <p class="card_description">
    ${kittenTwoDesc}
  </p>
</article>
</li>`;

const kittenThree = `<li class="card">
<article>
  <img class="card_img" src=${kittenThreeImage} alt="gatito" />
  <h3 class="card_title">${kittenThreeName}</h3>
  <h4 class="card_race">${kittenThreeRace}</h4>
  <p class="card_description">
    ${kittenThreeDesc}
  </p>
</article>
</li>`;

/*listKitten.innerHTML = kittenOne + kittenTwo + kittenThree;
Esta parte la comentamos específicamente para que no se nos dupliquen los gatitos del 2.3 ejercicio 1 a la hora de buscar por descripción
*/




//2.3.1

const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = '';
const descrSearchText = input_search_desc.value;

if( kittenOneDesc.includes(descrSearchText) ) {
  listKitten.innerHTML += kittenOne;
  }
  
  if( kittenTwoDesc.includes(descrSearchText) ) {
    listKitten.innerHTML += kittenTwo;
  }
  
  if( kittenThreeDesc.includes(descrSearchText) ) {
    listKitten.innerHTML += kittenThree;
  };





  //2.3.2

  /*if (sectionForm.classList.contains('collapsed')) {
    sectionForm.classList.remove('collapsed');
  } else {
    sectionForm.classList.add('collapsed');
  };

  Lo comentamos para que funcione el 2.5 ejercicio 1. Será de mostrar y ocultar formulario otra vez así que puede dar problemas
*/




//2.4 ejercicio 1

const btnNav = document.querySelector ('.js-btn-nav');

btnNav.addEventListener ('click', (event) => {
  event.preventDefault();
  if (sectionForm.classList.contains ('collapsed')) {
    sectionForm.classList.remove ('collapsed');
  } else {
    sectionForm.classList.add ('collapsed');
  }
});





//2.4.2 validar formulario (que al intentar agregar un nuevo gatito con el botón "añadir" salte mensaje de error si no se rellenaron todos los campos)

const btnAdd = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

btnAdd.addEventListener('click', (event) =>{
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    labelMesageError.innerHTML = '';
  }
});






//2.4 ejercicio 3 validar formulacio búsqueda (que al intentar buscar gatito con el botón "buscar" salte mensaje de error si no se rellenaron todos los campos)

const btnSearch = document.querySelector('.js-btnSearch');
const descSearch = document.querySelector('.js-descSearch');
const raceSearch = document.querySelector('.js-raceSearch');
const labelSearchError= document.querySelector('.js-labelSearch-error');
//ni idea de si había que meter un label al html, algo me dice que no pero ni idea de cómo hacer el ejercicio en ese caso

btnSearch.addEventListener('click', (event) => {
  event.preventDefault();
  const valueDescSearch = descSearch.value;
  const valueRaceSearch = raceSearch.value;

  if (valueDescSearch === '' || valueRaceSearch === '') {
    labelSearchError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    labelSearchError.innerHTML = '';
  }
});






//2.4 ejercicio 4 cancelar formulario (que la usuaria le de al botón cancelar y la sección se oculte otra vez y que los campos se limpien)

const btnCancel = document.querySelector('.js-btnCancel');

btnCancel.addEventListener('click', (event) => {
  event.preventDefault();
  sectionForm.classList.add('collapsed');
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';

});


