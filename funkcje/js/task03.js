console.log("```````````````````````````````");
console.log("``````````Piąte zadanie````````");
console.log("```````````````````````````````");

let kwota = prompt("Podaj kwote");
let opis = prompt("Podaj opis słowny *wielkosc liter nie ma znaczenia");
let koniec;
opis = opis.toUpperCase();
console.log(calculateTip(kwota,opis));

function calculateTip(amount, raiting)
{
    if(raiting=="BARDZO DOBRA OBSŁUGA")
    {
        koniec = 25;
    }
    else if(raiting=="DOBRA OBSŁUGA")
    {
        koniec = 20;
    }
    else if(raiting=="ŚREDNIA OBSŁUGA")
    {
        koniec = 15;
    }
    else if(raiting=="ZŁA OBSŁUGA")
    {
        koniec = 0;
    }
    else
    {
        koniec = "Brak danych na temat opinii "
        return koniec;
    }
    koniec = koniec+"% napiwku, a zapłacono "+kwota;
    return koniec;
}