
let person = {
    name: 'John',
    mentalhealth: 10,
}

const musics = [
    "Wejdene",
    "GIMS",
    "PNL",
    "JUL",
    "SCH",
]

let trajet = {
    changes: 0,
    redlights: 30,
}
function jouelamusic() {
    return Math.floor(Math.random() * 5);
  }

function takeTaxi() {
    while(trajet.redlights > 0) {
        if (jouelamusic() == 0) {
            trajet.changes ++,
            person.mentalhealth --,
            console.log(" Anissa est joué à la radio " + person.name + ' a perdu ' + person.mentalhealth + 
            ' John prend un autre taxi, il y a maintenant : ' + trajet.changes + ' changements'+ ' il reste ' + trajet.redlights + " feu rouge avant d'arriver chez lui")
        } else {
            console.log(musics[jouelamusic()]+ ' est joué sur skyrrock' + ' il reste ' + trajet.redlights + " feu rouge avant d'arriver chez lui")
        }
        trajet.redlights--
        if (trajet.redlights == 0) {
            console.log(person.name + 'est bien rentré chez lui')
        break
    } if (person.mentalhealth == 0) {
            console.log('JOHN EXPLOSE BOOOOOMMM')
        break
    }
    }}
takeTaxi()

let killer = {
    nom:' Jason ',
    health: 100,
}
class Caracteristique{
    constructor(name, carac, probamourrir) {
        this.name,
        this.carac,
        this.probamourrir
    }
}

const resultat= ['meurt', 'esquive', 'meurt']
const prenom=['Chad', 'Quentin', 'Viktor', 'MC', 'Oumar', 'Ryoma', 'Melissa', 'Prisca', 'Julien', 'Olivia']
const personnalite= ['Nerd', 'sportif', 'discret', 'le fdp', 'le peureux', 'le vieux', 'le solitaire', 'drole']

function prenomF(){ 
    return Math.floor(Math.random() * 10);
}
function personnaliteF() {
    return Math.floor(Math.random() * 7);
}

function resultatF(){
    return Math.floor(Math.random() * 4) 
}
let personnage1 = new Caracteristique(prenom[prenomF()], personnalite[personnaliteF()], resultat[resultatF()])
let personnage2 = new Caracteristique(prenom[prenomF()], personnalite[personnaliteF()])
let personnage3 = new Caracteristique(prenom[prenomF()], personnalite[personnaliteF()])
let personnage4 = new Caracteristique(prenom[prenomF()], personnalite[personnaliteF()])
let personnage5 = new Caracteristique(prenom[prenomF()], personnalite[personnaliteF()])

console.log(personnage1, personnage2, personnage3, personnage4, personnage5)
let personnage = [personnage1, personnage2, personnage3, personnage4, personnage5]
