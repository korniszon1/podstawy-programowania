let oceny = [4 ,4 ,1 ,2 ,5 , 40];
let dlugosc = oceny.length;
let wynikSrednia = oceny[0];

console.log("--------------------------");
console.log("------Drugie zadanie------");
console.log("--------------------------");


for(i=0;i<dlugosc-1;i++)
{
    wynikSrednia = wynikSrednia  + oceny[i+1];
}
wynikSrednia = wynikSrednia / dlugosc;
wynikSrednia = (Math.floor(wynikSrednia*1000))/1000;
console.log("Srednia tych liczb to "+ wynikSrednia);