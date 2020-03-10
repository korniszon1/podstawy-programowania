console.log("--Zadanie 0a--");

let numberOfUsers = 4;
let result = numberOfUsers/2;
result = Math.floor(result);
console.log(result);

console.log("--Zadanie 0b--");

result = Math.sqrt(144);
console.log(result);

console.log("--Zadanie 1--");

result = Math.floor(Math.random() * (100-5+1)+5);
console.log(result);

console.log("--Zadanie 2--")

const widthBox = "23px";
const widthPanel = "3px";
let czymJest = "";


//widthBox = parseInt(widthBox);
czymJest = typeof(widthBox);
console.log(czymJest);

console.log("--Zadanie 3--")

let mail = "mail@mail.pl";

let szukanie = mail.search("@");
if(szukanie>0)
{
    let znajduje = "znajduje sie na pozycji "+ szukanie;
    console.log(znajduje);
}
else
{
    let znajduje = "Nie ma tego znaku "
    console.log(znajduje);
}
