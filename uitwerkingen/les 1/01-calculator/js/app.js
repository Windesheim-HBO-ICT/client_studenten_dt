console.log('Hello world! This is JavaScript.');

function groet(naam){
    console.log('Hallo ' + naam);
}

groet("Jerry");

//arrow function
const vegen = () => console.log('Vegen maar!');

vegen();

// arrow function klaar voor meerdere regels code
const optellen = (a, b) => {
    return a + b;
};

console.log(optellen(5, 10));


console.log(optellen);


// Voorbeelden JSON

const persoon = {}
console.log(persoon);

persoon.naam = "Jerry";
console.log(persoon);

const persoon2 = {
    naam: "Jerry",
    leeftijd: 30,
    hobby: "voetbal"
};
console.log(persoon2);

const persoon3 = {
    naam: "Jerry",
    achternaam: "Smith",
    leeftijd: 30,
    fullName: function() {
        return this.naam + " " + this.achternaam;
    }
};
console.log(persoon3);
console.log(persoon3.fullName());

const persoonString = JSON.stringify(persoon3);
console.log(persoonString);
const persoonObject = JSON.parse(persoonString);
console.log(persoonObject);