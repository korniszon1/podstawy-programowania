console.log("````````````````````````````````");
console.log("`````````Ostatnie zadanie```````");
console.log("````````````````````````````````");




let gracz1 = prompt("Wybór gracza nr 1  *wielkosc liter nie ma znaczenia");
let gracz2 = prompt("Wybór gracza nr 2  *wielkosc liter nie ma znaczenia");

gracz1 = gracz1.toUpperCase();
gracz2 = gracz2.toUpperCase();
gracz1 = gracz1.replace("Ż",'Z')
gracz1 = gracz1.replace("Ń",'N')
gracz2 = gracz2.replace("Ż",'Z')
gracz2 = gracz2.replace("Ń",'N')

rockPaperScissors(gracz1,gracz2);

function rockPaperScissors(player1, player2)
{
    if(player1==player2)
    {
        console.log("remis")
    }
    else if( player1 == "NOZYCE" && player2 == "PAPIER" || player1 == "KAMIEN" && player2 == "NOZYCE" || player1 == "PAPIER" && player2 == "KAMIEN")
    {
        console.log("Gracz nr 1 wygrał")
    }
    else if(player2 == "NOZYCE" && player1 == "PAPIER" || player2 == "KAMIEN" && player1 == "NOZYCE" || player2 == "PAPIER" && player1 == "KAMIEN")
    {
        console.log("Gracz nr 2 wygrał")
    }
    else
    {
        console.log("Błędne informacje")
    }
}