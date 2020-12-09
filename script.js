let submit = document.getElementById("submit");

let tab1 = [4,8,7,12];
let tab2 =[3,6]
let passerelle = 0;
let total =0;

for (let i=0; i<tab1.length; i++){
  for (let a=0; a<tab2.length; a++){
    passerelle = tab1[i]*tab2[a];
    total = total+passerelle;
    
    affichage.innerHTML = `<h3>Ton resultat est ${total} <h3>`;
  }
}



   