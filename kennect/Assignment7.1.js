// Assignment 7.1 
// for loop for printing a text 5 times.
const n=5;
for(let i=1;i<=5;i++){
    console.log("kennect Assignment of forloop");
};
// while loop for printing no 1 to 5.
let i=1,n=5;
while(i<=n)
{
    console.log(i);
i++;
}
// using continue.

for (let i = 1; i <= 5; i++) {  
    if (i == 4) {
        continue;
    }

    console.log(i);
}
//using if and else statements.
let j=6;
if(j<5){
    console.log("Welcome");
}else{
    console.log("Thankyou")
}
//using of switch statement.
let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);
