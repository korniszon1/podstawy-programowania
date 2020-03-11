let  numery = new Array(10);
let  numery2 = new Array(10);
let wynik = "";
let wynik2 = 0;
for(i=0;i<10; i++)
{
    numery[i] = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    numery2[i] = true;
}  
// for(i=0;i<10; i++)
// {
//     //console.log(numery[i]);
//     console.log(typeof(numery[i]));
// }
console.log("Wylosowane numery To");
console.log("--------------------");
for(i=0;i<10;i++)
{
    console.log(numery[i]);
    //console.log(numery2[i]);
    
    for(j=0;j<10;j++)
    {
        if(numery[i]===numery[j] && j !== i)
        {
            console.log("powtarza sie");
            console.log(numery[j]);
            

            if(numery2[i]==true)
            {
                //console.log("Pierwszy raz widze")
                wynik = wynik+" "+numery[i];
                //console.log(typeof(numery[j]));
                //numery[i]= 0;
                wynik2++;
            }
            numery2[i]=false;
            numery2[j]=false;
        }
    }
    console.log("---------");
}    
console.log("Numery powtarzają się");
console.log(wynik2+" razy");
console.log("Numery które się powtarzają to");
console.log(wynik);