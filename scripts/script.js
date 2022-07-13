var globalNBItem = 0;

/*Incrémentation du tableau*/
function incrementID(valeur) {
    document.querySelector('.identifier').innerHTML = valeur + 1;
}

function addListenerClick () {
    document.querySelectorAll('.modif').forEach(e => { e.addEventListener("click", changeValueToInput)});
    document.querySelectorAll('.valid').forEach(e => { e.addEventListener("click", validInput)});
    document.querySelectorAll('.cancel').forEach(e => { e.addEventListener("click", cancelInput)});
    document.querySelectorAll('.delete').forEach(e => { e.addEventListener("click", deleteLine)});
}

function addListenerClickSort () {
    document.querySelector('.sortID').addEventListener("click", sortByID);
    document.querySelector('.sortNom').addEventListener("click", sortByNom);
    document.querySelector('.sortPrenom').addEventListener("click", sortByPrenom);
    document.querySelector('.sortNote').addEventListener("click", sortByNote);
}

function prepareTable() {
    globalNBItem = document.querySelector('.test').childElementCount
    incrementID(globalNBItem);
    resetInput();
    addListenerClick();
    addListenerClickSort();
}

function refreshTable () {
    incrementID(globalNBItem);
    resetInput();
    addListenerClick();
}

window.onload = prepareTable;

/*Reset de la barre d'ajout du tableau*/
function resetInput() {
    document.getElementById('nom').value =  "";
    document.getElementById('prenom').value =  "";
    document.getElementById('note').value =  0;
}

/*Utilisation du bouton cancel*/
function cancelInput () {
    this.parentNode.querySelector('.valid').classList.add("hide")
    this.classList.add("hide")
    this.parentNode.querySelector('.delete').classList.add("hide")
    this.parentNode.querySelector('.modif').classList.remove("hide")
    let nomTag = this.parentNode.parentNode.children[1]
    let prenomTag = this.parentNode.parentNode.children[2]
    let noteTag = this.parentNode.parentNode.children[3]
    let nom = nomTag.firstChild.defaultValue
    let prenom = prenomTag.firstChild.defaultValue
    let note = noteTag.firstChild.defaultValue
    nomTag.removeChild(nomTag.firstChild)
    prenomTag.removeChild(prenomTag.firstChild)
    noteTag.removeChild(noteTag.firstChild)
    nomTag.innerHTML = nom
    prenomTag.innerHTML = prenom
    noteTag.innerHTML = note
}

/*Utilisation du bouton valider*/
function validInput () {
    this.parentNode.querySelector('.cancel').classList.add("hide")
    this.classList.add("hide")
    this.parentNode.querySelector('.delete').classList.add("hide")
    this.parentNode.querySelector('.modif').classList.remove("hide")
    let nomTag = this.parentNode.parentNode.children[1]
    let prenomTag = this.parentNode.parentNode.children[2]
    let noteTag = this.parentNode.parentNode.children[3]
    let nom = nomTag.firstChild.value
    let prenom = prenomTag.firstChild.value
    let note = noteTag.firstChild.value
    nomTag.removeChild(nomTag.firstChild)
    prenomTag.removeChild(prenomTag.firstChild)
    noteTag.removeChild(noteTag.firstChild)
    nomTag.innerHTML = nom
    prenomTag.innerHTML = prenom
    noteTag.innerHTML = note
}

/*Affichage des 3 boutons et modification*/
function changeValueToInput () {
    this.classList.add("hide")
    this.parentNode.querySelector('.valid').classList.remove("hide")
    this.parentNode.querySelector('.cancel').classList.remove("hide")
    this.parentNode.querySelector('.delete').classList.remove("hide")

    // input nom
    let nom = this.parentNode.parentNode.children[1]
    var inputNom = "<input type='text' name='nom' value = '" + nom.innerHTML + "'>"
    nom.innerHTML = inputNom                      

    // input prenom
    let prenom = this.parentNode.parentNode.children[2]
    var inputPrenom = "<input type='text' name='prenom' value = '" + prenom.innerHTML + "'>"
    prenom.innerHTML = inputPrenom  
    // input note
    let note = this.parentNode.parentNode.children[3]
    var inputNote = "<input type='number' name='note' value = '" + note.innerHTML + "'>"
    note.innerHTML = inputNote  
}

/*Fonction pour trier par ID*/
function sortByID () {
    var reverse = 1;
    var th = Array.prototype.slice.call(document.querySelector('.head').rows, 0)
    if (!th[0].children[0].classList.contains("reverse")){
        th[0].children[0].classList.add("reverse")
        reverse = -1;
    } else {
        th[0].children[0].classList.remove("reverse")
    }
    var tr = Array.prototype.slice.call(document.querySelector('.test').rows, 0)
    tr.sort(function(a, b) {
        if ((a.cells[0].textContent.trim() - b.cells[0].textContent.trim()) > 0) {
            console.log("a")
            return 1 * reverse
        }
        if ((a.cells[0].textContent.trim() - b.cells[0].textContent.trim()) < 0) {
            console.log("c")
            return -1 * reverse
        }
        return 0
    })
    for(i = 0; i < tr.length; ++i) document.querySelector('.test').appendChild(tr[i]);
}

/*Fonction pour trier par nom*/
function sortByNom () {
    var reverse = 1;
    var th = Array.prototype.slice.call(document.querySelector('.head').rows, 0)
    if (!th[0].children[1].classList.contains("reverse")){
        th[0].children[1].classList.add("reverse")
        reverse = -1;
    } else {
        th[0].children[1].classList.remove("reverse")
    }
    var tr = Array.prototype.slice.call(document.querySelector('.test').rows, 0)
    tr.sort(function(a, b) {
        return reverse * (a.cells[1].textContent.trim().localeCompare(b.cells[1].textContent.trim()));
    })
    for(i = 0; i < tr.length; ++i) document.querySelector('.test').appendChild(tr[i]);
}

/*Foncton pour trier par prénom*/
function sortByPrenom () {
    var reverse = 1;
    var th = Array.prototype.slice.call(document.querySelector('.head').rows, 0)
    if (!th[0].children[2].classList.contains("reverse")){
        th[0].children[2].classList.add("reverse")
        reverse = -1;
    } else {
        th[0].children[2].classList.remove("reverse")
    }
    var tr = Array.prototype.slice.call(document.querySelector('.test').rows, 0)
    tr.sort(function(a, b) {
        return reverse * (a.cells[2].textContent.trim().localeCompare(b.cells[2].textContent.trim()));
    })
    for(i = 0; i < tr.length; ++i) document.querySelector('.test').appendChild(tr[i]);
}

/*Fonction pour trier par note*/
function sortByNote () {
    var reverse = 1;
    var th = Array.prototype.slice.call(document.querySelector('.head').rows, 0)
    if (!th[0].children[3].classList.contains("reverse")){
        th[0].children[3].classList.add("reverse")
        reverse = -1;
    } else {
        th[0].children[3].classList.remove("reverse")
    }
    var tr = Array.prototype.slice.call(document.querySelector('.test').rows, 0)
    tr.sort(function(a, b) {
        if ((a.cells[3].textContent.trim() - b.cells[3].textContent.trim()) > 0) {
            console.log("a")
            return 1 * reverse
        }
        if ((a.cells[3].textContent.trim() - b.cells[3].textContent.trim()) < 0) {
            console.log("c")
            return -1 * reverse
        }
        return 0
    })
    for(i = 0; i < tr.length; ++i) document.querySelector('.test').appendChild(tr[i]);
}

/*Suppression de la ligne du tableau selectionnée*/
function deleteLine () {
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
}

/*Ajout d'une ligne dans le tableau*/
function addRow()
{
    //Création d'une ligne
    TR = document.createElement("tr");

    //Création de la 1er cellule
    TD1 = document.createElement("td");
    console.log(globalNBItem)
    TD1.innerHTML = globalNBItem + 1;

    //Création de la 2nd cellule
    TD2 = document.createElement("td");
    TD2.innerHTML = document.getElementById('nom').value;
    
    //Création de la 3eme cellule
    TD3 = document.createElement("td");
    TD3.innerHTML = document.getElementById('prenom').value;

    //Création de la 4eme cellule
    TD4 = document.createElement("td");
    TD4.innerHTML = document.getElementById('note').value;
    

    //Création de la 5eme cellule
    TD5 = document.createElement("td");
    TD5.innerHTML = "<a class='modif'><i class='fas fa-edit'></i></a><a class='valid hide'><i class='fas fa-check'></i></a><a class='delete hide'><i class='fas fa-trash'></i></a><a class='cancel hide'><i class='fas fa-history'></i></a>"
    
    //On assemble les cellules à la ligne
    TR.appendChild(TD1);
    TR.appendChild(TD2);
    TR.appendChild(TD3);
    TR.appendChild(TD4);
    TR.appendChild(TD5);

    //On assemble la ligne au tablea
    document.querySelector('.test').appendChild(TR)

    //Preparer la prochaine valeur
    globalNBItem++;
    refreshTable();
}
