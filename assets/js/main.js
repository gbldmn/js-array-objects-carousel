const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

for (let i = 0; i < images.length; i++) {
    let elementiSingoli = images[i]
    console.log(elementiSingoli)
     if (i == 0 ) {
         document.querySelector('.items').innerHTML += 
         `<div class="item active primo">
             <img src="${elementiSingoli['image']}" alt="">
             <div class="absolute"><h2>${elementiSingoli.title}</h2><br>${elementiSingoli.text}</div>
         </div>`
     } else if (i == images.length - 1) { 
         document.querySelector('.items').innerHTML += 
         `<div class="item ultimo">
             <img src="${elementiSingoli.image}" alt="">
             <div class="absolute"><h2>${elementiSingoli.title}</h2><br>${elementiSingoli.text}</div>
         </div>`
       } else {
         document.querySelector('.items').innerHTML += 
         `<div class="item">
             <img src="${elementiSingoli.image}" alt="">
             <div class="absolute"><h2>${elementiSingoli.title}</h2><br>${elementiSingoli.text}</div>
         </div>`
       }   
    
}   


let prima = document.querySelector(".prima");
let dopo = document.querySelector(".dopo");
     function next() {
          //  ragionamento da fare: selezionare il div con active
     let activeItem = document.querySelector('.item.active');
     console.log(activeItem)

     let itemToActivate = activeItem.nextElementSibling;
     console.log(itemToActivate)

     if (activeItem.classList.contains ('ultimo')) {
         itemToActivate = document.querySelector('.item.primo');
     }
     // rimozione classe block
     activeItem.classList.remove('active');
     // aggiunta classe block all'elemento successivo
     itemToActivate.classList.add('active');
     }
     dopo.addEventListener('click', next);

     function prev() {
       
            //  ragionamento da fare: selezionare il div con active
     let activeItem = document.querySelector('.item.active');
     console.log(activeItem)
     
     let itemToActivate = activeItem.previousElementSibling;
     console.log(itemToActivate)
     
     if (activeItem.classList.contains ('primo')) {
     itemToActivate = document.querySelector('.item.ultimo');
     }
     // rimozione classe block
     activeItem.classList.remove('active');
     // aggiunta classe block all'elemento successivo
     itemToActivate.classList.add('active');

     }
    
     prima.addEventListener('click', prev);



      let intervallo =  setInterval(next, 4000);
      let richiamo = setInterval(prev, 1000);

    document.getElementById('ferma').addEventListener('click',function(){
        clearInterval(intervallo)
        clearInterval(richiamo)
    })