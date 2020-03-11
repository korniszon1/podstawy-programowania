console.log("```````````````````````````````");
console.log("`````````Czwarte zadanie```````");
console.log("```````````````````````````````");


let a = prompt("Podaj A");
let b = prompt("Podaj B");
let c = prompt("Podaj C");

console.log(najwieksza(a,b,c));

function najwieksza(a,b,c)
{
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    if(a>b && a>c)
    {
        return a;
    }
    else if(b>a && b>c)
    {
        return b;
    }
    else if(c>a && c>b)
    {
        return c;
    }
    else if(a==b || a==c)
    {
        return "Nie ma jednej najwiekszej liczby";
    }
    else if(b==a || b==c)
    {
        return "Nie ma jednej najwiekszej liczby";
    }
    else if(c==b || c==a)
    {
        return "Nie ma jednej najwiekszej liczby";
    }

}