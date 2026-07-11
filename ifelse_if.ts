import PromptSync from "prompt-sync";
const prompt= PromptSync();

let Marks : number = Number(prompt("Enter the marks ="));

if(Marks>=90){
    console.log("*** A Greade ***");
}
else if(Marks>=80){
    console.log("** B Greade **");
}
else if(Marks>=70){
    console.log("* C Greade *");
}
else if(Marks>=60){
    console.log("D Greade");
}
else{
    console.log("Fail");
}