let tablica = new Array(3);
let wynik=0;


console.log("```````````````````````````````");
console.log("````````Pierwsze zadanie```````");
console.log("```````````````````````````````");


for(i=0;i<3;i++)
{
    tablica[i]= prompt("Podaj "+(i+1)+" liczbe");
}


console.log(suma(tablica[0],tablica[1],tablica[2]));



function suma(tab,tab2,tab3)
{
    tab=parseInt(tab);
    tab2=parseInt(tab2);
    tab3=parseInt(tab3);
    wynik=tab+tab2+tab3;
    return wynik;
}