 //primitive Data types
 let myvar= 5;//int
 let myvar2='string';//string
 let myvar3=true;//bool
 let myvar4=null;// NUll
 let myvar5=undefined;//undefined data

 //Object data type
 let Student={
     Name:"Fardin",
     std:"B.tech 2nd year",
     performance:"Good",
     "ability 1":"Quick Learner, when he like that",

 }
 console.log(Student);
 console.log(Student.Name);// for only that key which have no space 
 console.log(Student['ability 1']);//if space present 

 //let list=[1,4,'Fardin',"car",69];
 let list=new Array(1,4,'Fardin',"car",69);
 console.log(list);//for print list
 console.log(list[1]);//for know whats the value present in 1 position
 console.log(list.lenght);//error present
 list.push('FuRi');//for add items in list
 console.log(list);

 let items=new Array(10);//for making 10 values present in array
 console.log(items[0]);