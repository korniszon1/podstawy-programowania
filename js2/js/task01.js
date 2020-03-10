let grade = prompt("Liczba od 1-6");
if(grade>6 || grade<1)
{
    location.reload();
}
switch(grade)
{
    case '6': 
    grade = "celujący"; 
    break;
    case '5': 
    grade = "bardzo dobry"; 
    break;
    case '4': 
    grade = "dobry"; 
    break;
    case '3': 
    grade = "dostateczny"; 
    break;
    case '2': 
    grade = "dopuszczający"; 
    break;
    case '1': 
    grade = "niedostateczny"; 
    break;
}
console.log(grade);
 