console.log("-------------------------");
console.log("-----Trzecie zadanie-----");
console.log("-------------------------");

let num = new Array(10);

for(i=0;i<10; i++)
{
    num[i] = Math.floor(Math.random() * (60 - 1 + 1) + 1);
} 
console.log("Nie zmodyfikowana tablica:");
console.log(num);
for(i=0;i<10; i++)
{
    if(num[i]%2==0)
    {
        
    }
    else
    {
        num[i]++;
    }
}
console.log("Zmodyfikowana tablica:");
console.log(num);