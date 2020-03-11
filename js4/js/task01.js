let num = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
let dlugosc = num.length;
let najwieksza = 0;
let najwieksza2 = 0;
let odleglosc;
let array2 = new Array(dlugosc);


//console.log(getSecondMaxNumber(num));
getSecondMaxNumber(num);

function getSecondMaxNumber(array)
{
    console.log(array);
    for(i=0;i<dlugosc;i++)
    {
        array2[i] = array[i];
        array[i] = parseInt(array[i])
    }
    
    for(i=0; i<dlugosc;i++)
    {
        for(j=0;j<dlugosc;j++)
        {
            if(array[i]>najwieksza)
            {
                najwieksza = array[i];
                //console.log("Większa");
                //console.log(najwieksza);
            }
            else
            {
                //console.log("Mniejsza");
            }
        }
    }

    odleglosc =  array.indexOf(najwieksza);
    // console.log(odleglosc);
    ;
    array.splice(odleglosc,1);
    // console.log(array)
    

    for(i=0; i<dlugosc;i++)
    {
        for(j=0;j<dlugosc;j++)
        {
            if(array2[i]>najwieksza)
            {
                najwieksza = array2[i];
                //console.log("Większa");
                //console.log(najwieksza);
            }
            else
            {
                //console.log("Mniejsza");
            }
        }
    }
    console.log(najwieksza);
    //return najwieksza;
}