let classe = [];
let maxlen = prompt("Choisissez le nombre max d'étudiants");

while (classe.length < maxlen) {
    classe.push(" " + prompt("Ajouter un élève"));
}

alert(classe);