let n = 5;
let a;
let j = 1;
let text = "";
for(i=0; i<5; i++)
{
    for(j=0; j<5; j++)
    {
        a = j+i;
        // console.log(a);
        // if(a % 5 == 0)
        {
            // console.log("koniec linijki");
            // text = text+"\n";
        }
        if(a % 2 == 0)
        {
            text = text+" ";
        }
        else if(a % 2 != 0)
        {
            // console.log("znak");
            text = text+"*";
        } 
    }
    text = text+"\n"; 
}
console.log(text);


//a = i + j;
//    if(a % 2 != 0)
//    {
//        text = text+"*";
//    }
    // else if(a % 5 == 0)
    // {
        // text = text+"\n";
    // }
    // else
    // {
        // text = text+" ";
    // }