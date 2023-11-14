// // // Exercice 1
// // // Créer 4 variables : nom, prenom, age, taille
// // // affichez dans la console ces 4 variables (vous pouvez séparer les variables par une virgule dans le console.log())
// // // Ajoutez 2 à l'age
// // // affichez de nouveau les 4 variables dans la console

// let name = "dhalluin";
// let prenom = "izaline";
// let age = 26;
// let taille = 173;

// console.log(name, prenom, taille, age);

// age = age + 2;

// console.log(name, prenom, taille, age);

// // // Exercice 2 :

// // // Reprenez le premier exercice et à l'aide de la concaténation, affectez le tout à une nouvelle variable.
// // // Affichez cette nouvelle variable dans la console.

// let total = `${name} ${prenom} ${age} ${taille} `;

// console.log(total);

// // // Exercice 3 :

// // // Reprenez le résultat de l'exercice 2, et à la place d'affecter le prenom à la variable prénom, utilisez la fonction prompt pour assigner ce qu'un utilisateur écrit à la variable prenom

// prenom = prompt(`Quel est votre prenom ?`);
// console.log(prenom);

// // Exercice 4 :

// // Reprenez le résultat de l'exercice 2, et cette fois ci, demandé à l'utilisateur d'entrer un age. Si l'age est supérieur ou égale à 18, affichez dans la console "je suis majeur", sinon affichez dans la console "je ne suis pas majeur"

// age = prompt(`Quel âge avez-vous ?`);

// if (age >= 18) {
//   console.log(`Je suis majeur`);
// } else {
//   console.log(`Je ne suis pas majeur`);
// }

// Exercice 5 :

// Mathéo a une moyenne de 15,4 , Nathan de 9,2 , Léo de 16,1 et Maxime de 12,6. Calculez la moyenne de ces 4 personnes

// let matheo = 15.4;
// let nathan = 9.2;
// let leo = 16.1;
// let maxime = 12.6;
// let moyenne = (matheo + nathan + leo + maxime) / 4;

// console.log(moyenne);

// Exercice 6 :

// A l'aide de math.floor et math.random, affichez dans la console un nombre aléatoire compris entre 1 et 100. (cet exercice vous demandera d'aller lire la doc)

// let joker = Math.floor(Math.random() * 100) + 1;
// console.log(joker);

// Exercice 7 :

// A faire uniquement en JS
// Créer un élement h1 avec comme contenu Hello World, une classe name "monH1".
// Créer un paragraphe avec comme contenu une petite présentation de vous, un id "presentation"
// Il faut que le paragraphe apparaisse avant le H1

// let titre = document.createElement(`h1`);
// titre.className = `monH1`;
// titre.textContent = "Hello World";
// document.body.appendChild(titre);

// let texte = document.createElement(`p`);
// texte.id = `presentation`;
// texte.textContent = "Je suis un paragraphe";
// document.body.insertBefore(texte, titre);
// // ou h1.parentNode.insertBefore(texte, titre);

// Exercice 8 :

// L'utilisateur doit entrer un nombre. Si ce nombre est positif, alors on doit récupérer une valeur aléatoire compris entre 1 et ce nombre
// l'afficher dans la console

// let nombre = prompt("Entrer un nombre");
// let resultat = Math.floor(Math.random() * nombre) + 1;
// if (nombre > 0) {
//   console.log(resultat);
// }
