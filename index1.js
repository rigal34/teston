// SELECTEURS
// document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelector("h4");

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

/* <div> > #id > .class > baliseHTML */

//--------------------------------------------------
// Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//---------------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  if (e.key === "z") ring(e.key);// si mon fichier e.key est ??gal ?? z alors fait moi la suite 
});

//-------------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => { //je donne un ??v??nement ?? ma fen??tre pour ex??cut?? un scroll dans une fonction
  console.log(window.scrollY);//permet de chercher la valeur de mon scroll dans le navigateur en px
  if(window.scrollY > 120){// si dans la fen??tre de window au scroll je suis sup??rieur ?? 120px tu cible nav pour injecter un style top 0 qui fera apparaitre ma nav qui ??tait ?? -50px
    nav.style.top = 0;
  }else{                 //sinon si elle est inf ?? 120px ma nav dispara??t
    nav.style.top = "-50px";
  }
});

//--------------------------------------------------
// Form Events ??v??nement sur les formulaires
const inputName = document.querySelector('input[type="text"]');//('input[type="text"]');ce selecteur permet de cibler cette input en particulier
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";
console.log(form);
select.addEventListener("input", (e) => {
// console.log(e.target.value);
language = e.target.value;
console.log(language);
})


inputName.addEventListener("input", (e) => { //??v??nement pour un input s'appelle dans js "input" et quand je click dans input je d??clenche une fonction
console.log(e.target.value);//permet de savoir dans la console ce qui ?? ??tait tap?? dans input
pseudo = e.target.value;//permet de recuper ce qui est tap?? dans input pour le stock?? dans let pseudo
console.log(pseudo);
});





form.addEventListener("submit", (e) => {  //l'??v??nement pour un form est soumettre valider
e.preventDefault();//cette m??thode ?? notre ??v??nement ??vite de changer de page ?? notre navigateur cela annule ce changement de page,permet de travailler tranquille avec notre formulaire
console.log(cgv.checked);
if (cgv.checked) { //on ?? pas besoin de d??clarer une variable pour une checkbox javascript les reconna??s id pareil pour les bouttons m??me principe
  // si c'est checked on va aller chercher cette balise div d'une fa??on diff??rent pour montrer un exemple
//on va chercher l'enfant de form div pour injecter h3 et h4 en utilisant innerHML
// si c'est valider tu m'affiche ce qui est en dessous
document.querySelector("form > div").innerHTML = `  
<h3>Pseudo : ${pseudo}</h3>
<h4>Langage pr??f??r?? : ${language}</h4>
`;
} else {
  alert("Veuillez accepter les CVG");
}
})
//------------------------------------------------
// Load event ev??nement de chargement
// load envent se d??clenche une fois que toute la page est charg??e
window.addEventListener("load",() =>{// je veux que tu me fasses sa une fois que le document est charg?? ??vite d'avoir des probl??mes de performance 
console.log("Document Charg??");



}) ;








//-------quand on plusieurs ??l??ments de la m??me class ou plusieurs ??l??ments qui s'appelle pareil
//cela ??vite de cr??er une variable pour chaqu'un





// ForEach ==>>>pour chacun d'eux on donnera tel logique
 //const boxes = document.getElementsByClassName("box"); // je select plusieurs class mais pose souvent des probl??mes
const boxes = document.querySelectorAll(".box");//selectionne toute les classes .box
// boxes.addEventListener("click", () =>{  //on ne peut pas mettre un addEventListener sur 3 ??l??ments comme cela pour cela que l'on utlise ForEach
   console.log(boxes);   
// })

boxes.forEach((box) => {     //le param??tre ici est tr??s important, c'est comment je vais les appeler individuellement pour chaqu'une d'elle 
  box.addEventListener ("click",(e) =>{ //ensuite je vais pouvoir donner la logique que je veux pour mes 3 boxes cela permet de creer un seul addEventListener au lieu de 3
    //console.log(e.target);quand je clic sur ma page il me qu 'elle des 3 classe je suis 
    e.target.style.transform = "scale(0.7)"; // quand je clic sur un des 3 class on injecte un style qui transform
});
});




//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// ForEach
// const boxes = document.getElementsByClassName("box");




//------------------------------------------------
// addEventListener Vs onclick
// document.body.onclick = function() {
//   console.log("Scroll !");
// };

// Bubbling => fin (de base l'eventlistener est param??tr?? en mode Bublbing)

// Usecapture


// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/

//-------------------------------------------------
// Stop propagation
// questionContainer.addEventListener("click", (e) => {
//   alert("Test !");
//   e.stopPropagation();
// });

// removeEventListener

//-------------------------------------------------
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600, width=800");
// window.close()

// Ev??nements adoss??s ?? Window
// alert("hello");

// confirm
// btn2.addEventListener("click", () => {
//   confirm("Voulez vous vraiment vous tromper ?");
// });

// prompt
// btn1.addEventListener("click", () => {
//   let answer = prompt("Entrez votre nom !");

//   questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
// });

// Timer, compte ?? rebours
// setTimeout(() => {
//   questionContainer.style.borderRadius = "300px";
// }, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//       <div class='box'>
//         <h2>Nouvelle Boite !</h2>
//       </div>
//     `;
// }, 4000);

// document.body.addEventListener("click", (e) => {
//   e.target.remove();
//   clearInterval(interval);
// });

// Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };

// Navigator
// console.log(navigator.userAgent);

// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La pr??cision est de ${crd.accuracy} m??tres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// History
// console.log(history);
// window.history.back();
// history.go(-2)

