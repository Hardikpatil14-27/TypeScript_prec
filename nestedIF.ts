import PromptSync from "prompt-sync";
const prompt= PromptSync();
let name: String="HARDIK PATIL";
let password:String="PATIL1422";

if(name== "HARDIK PATIL"){
    let pass:String =prompt("Enter the password=");
    if(pass== password){
        console.log("Login Done..")
    }
    else{
        console.log("Password is incorrect");
    }
    }
else{
        console.log("User not found");
    }
