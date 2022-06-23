let datum = document.getElementById("datum")
let dag = new Date().getHours()
let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }
let volDat = dag.toLocaleString('nl-BE', options)
datum.innerHTML = volDat

//andere manier om datum te tonen

let weekdag = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag",
    "vrijdag", "zaterdag"]

// weekdag = weekdag[4]

weekdag = weekdag[new Date().getDay()]
console.log(weekdag)

//getDay; getDate, getMonth; getFullYear
let datum1 = document.getElementById("datum1")
let date = new Date().getDate()
console.log(date)
let month = ["januari", "februari", "maart", "april", "mei", "juni"]
month = month[new Date().getMonth()]
console.log(month)
let year = new Date().getFullYear()
console.log(year)
datum1.innerHTML = weekdag + " " + date + " " + month + " " + year


//opdracht:afhankelijk van de tijd andere boodschap in HTML

let tijd = document.getElementById("tijd")
let hours
let uur = new Date().getHours()
console.log(uur)
let minuut = new Date().getMinutes()
if (minuut < 30) {
    console.log("hallo")
} else {
    console.log("bye bye")
}
tijd.innerHTML = "Hoe laat is het?" + " " + uur + ":" + minuut

//MATH OBJECTS

let result = Math.random()
result = Math.random() * 10 //tot max 10 krijgen we random getalen
result = (Math.round(Math.random() * 10)) //round
result = (Math.round(Math.random() * 10)) + 1 // begint niet van 0 , van 1-11
console.log(result)


//spelletje met welk speelgoed mag spelen:
let speelgoed = ["bal", "pop", "lego", "beer", "auto", "puzzel", "PS", "monoply",
    "kleuren", "kaarten", "lezen"]
let kind = speelgoed[Math.round(Math.random() * 10)]
console.log(kind)

//functies
function test1(param1, param2, param3) {
    return console.log(param1, param2, param3)
}

test1("hello", 5, "#")
test1("hallo", "Freddy", 10)

const test2 = (param4, param5) => { console.log(param4, param5) } // ander manier 

test2("hallo", "hello")


let vrienden = ["Els", "Marie", "Linda", "Karen"]

//functie om iets toe te voegen
function friends(vriend) {
    vrienden.push(vriend)
}

friends("An");
friends("Sofie")
friends("Lola")
console.log(vrienden)

let z;
let a = 5;
let b = 7;
function gemiddelde(a, b) {
    return (a + b) / 2
}
console.log(gemiddelde(5, 6))
console.log(a, b)
console.log(z)

//Filter filtreren door parameter "punten"

var studenten = [
    {
        id: 1,
        naam: "Jos",
        cursus: "JAVA",
        punten: 55
    },

    {
        id: 2,
        naam: "Marie",
        cursus: "JAVA",
        punten: 40
    },

    {
        id: 3,
        naam: "JLinda",
        cursus: "JAVA",
        punten: 20
    },

    {
        id: 4,
        naam: "Marc",
        cursus: "JAVA",
        punten: 33
    },

    {
        id: 5,
        naam: "Jan",
        cursus: "JAVA",
        punten: 60
    }
]
let geslaagd = studenten.filter(diploma)
function diploma(punt) {
    return punt.punten>=50
}
console.log(geslaagd)


