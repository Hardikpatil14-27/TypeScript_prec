import promptSync from "prompt-sync";
const prompt = promptSync();

let name: string = prompt("Enter the name =");
let age: number = Number(prompt("Enter the age ="));


console.log("Name ="+ name);
console.log("Age ="+ age);
