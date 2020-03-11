console.log("```````````````````````````````");
console.log("`````````Drugie zadanie````````");
console.log("```````````````````````````````");


let ilosc_dni = prompt("Ile dni?");
let koszt;
console.log(rentCost(ilosc_dni))

function rentCost(dni)
{
    let numbersOfWeeks = Math.floor(dni / 7);
    if(dni<=1)
    {
        koszt = dni*200;
    }
    else if(dni<=3)
    {
        koszt = dni*180;
    }
    else if(dni<=7)
    {
        koszt = dni*160;
    }
    else if(dni>=8)
    {
        koszt = dni*150;
    }

    if(dni>=7)
    {
        koszt = koszt - (50*numbersOfWeeks);
    }
    
    return koszt;
}