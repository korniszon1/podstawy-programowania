let x = prompt("Podaj X");
let y = prompt("Podaj Y")
let z = 0;
console.log(x);
console.log(y);
let wynik2 = 0;
let fix = parseInt(x);
let fixY = parseInt(y)
z = fix;
if(x>y)
{
    location.reload();
}
console.log(z);
for(i=fix;i<fixY+1;i++)
{
    z = fix++;
    console.log("--Liczba");
    console.log(z);
    wynik2 =  z+wynik2;
    console.log(wynik2);
}
console.log("--Wynik to--")
console.log(wynik2);