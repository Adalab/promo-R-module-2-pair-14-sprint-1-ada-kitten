"use strict"; 

const sectionForm = document.querySelector('.js-new-form');

sectionForm.classList.remove("collapsed");

const listKitten = document.querySelector(".js-list");
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

const kittenOneImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenOneName = 'Anastacio';
const kittenOneDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace = 'British Shorthair';

const kittenTwoImage = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenTwoName ='Fiona';
const kittenTwoDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!';
const kittenTwoRace = 'British Shorthair';

const kittenThreeImage = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenThreeName = 'Cielo';
const kittenThreeDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!';
const kittenThreeRace ='British Shorthair';

const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;
if( kittenOneDesc.includes(descrSearchText) ) {
     console.log();
  } else
  
  if( kittenTwoDesc.includes(descrSearchText) ) {
     
  } else
  
  if( kittenThreeDesc.includes(descrSearchText) ) {
     
  } else

  const age = 35;

/*if (age > 30) {
  console.log('Tienes más de 30 años'); // Esta línea se ejecuta solo si se cumple la condición
} else if (age >= 20) {
  console.log('Tienes entre 20 y 30 años'); // Esta línea se ejecuta solo si se NO cumple la primera condición y SÍ se cumple la segunda
}*/