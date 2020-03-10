let liczba = prompt("Podaj liczbe do silni")
if(liczba>0)
{
    let wynik = 1;
    for(i=1; i<liczba; i++)
    {
        wynik = wynik*(i+1);
        console.log(wynik);
    }
    document.getElementById("wynik").innerHTML = wynik;
}
else
{
    location.reload();
}
    