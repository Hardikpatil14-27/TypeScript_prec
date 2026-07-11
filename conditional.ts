let i:number = 100;
if(i>20){
    console.log("I is greater then 20");
}


let age:number = 20;
if(age>=18){
    console.log("YOU CAN VOTE");
}
else{
    console.log("YOU CAN'T VOTE");
}



import promptSync from "prompt-sync";
const prompt = promptSync();

let j: number= Number(prompt("Enter the age = "));
if(j>=18){
    console.log("YOU CAN VOTE");
}
else{
    console.log("YOU CAN'T VOTE");
}  
