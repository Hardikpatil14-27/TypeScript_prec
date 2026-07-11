class Student{
    id:number;
    name:string;

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    display():void{
        console.log(this.id);
        console.log(this.name);
    }
}

let s1=new Student(101,"HARDIK PATIL");
s1.display();


