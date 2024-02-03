var canvas=document.querySelector("canvas");
var body=document.body;
var push=document.querySelector(".push")
var pop=document.querySelector(".pop");
var clear=document.querySelector(".clear");
var maxElements=document.querySelector(".max-elements");
var input=document.querySelector(".input")
var canvasfield=document.getElementsByClassName("canvas-field");
var error=document.querySelector(".error");


var c=canvas.getContext("2d"); //imporitng all methods of 2d drawing and storing in variable called c


const scaleFactor = window.devicePixelRatio;
canvas.width = 450 * scaleFactor;
canvas.height = 393 * scaleFactor;
canvas.style.width = '450px';
canvas.style.height = '393px';

// Adjust scale to ensure sharp rendering
c.scale(scaleFactor, scaleFactor);



var x=(canvas.width)/7;
var y=(canvas.height)/1.9;
var max=6;

c.beginPath()
c.lineWidth=2
c.moveTo(x-5,y-280);
c.lineTo(x-2,y);
c.lineTo(x+202,y);
c.lineTo(x+202,y-280);
c.stroke();
// c.closePath();

var topptr=-1;

//creating the pointer rect at the starting 
c.fillStyle="white";
c.fillRect((x-50),y,50,40);

//writing TOP in the pointer rect at the start 
c.fillStyle = 'black';
c.font = '20px san-serif';
c.textAlign = 'center';
c.textBaseline = 'middle';
c.fillText("TOP",(x-25),y+20);    //y+20 as to set the TOP at the center of the rect


console.log(topptr)


class Stack{
    constructor(x,y,userInput){
        this.x=x;
        this.y=y;
        this.w=200;
        this.h=40;
        this.textColor="black";
        this.userInput=userInput;
    }
    draw(c)
    { 
        
        c.clearRect((this.x-55),(this.y+42),(this.w-150),this.h);   //clearing the previous pointer rect
        console.log(this.x, this.y)
        c.fillStyle="white";
        c.fillRect((this.x-55),this.y,(this.w-150),this.h);    //drawing new pointer rectangle
        
        //Writing TOP inside pointer rect
        c.fillStyle = 'black';
        c.font = '20px Caliber';
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillText("TOP",(x-50)+25,y+20); 

        c.fillStyle="lightblue";
        c.fillRect(this.x,this.y,this.w,this.h);     //creating new element rectangle

        //writing the element inside the rectangle
        c.fillStyle = 'black';
        c.font = '20px Caliber';
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillText(`${this.userInput}`,this.x+((this.w)/2),this.y+((this.h)/2));
        
        input.value=""  // setting the input tag value as blank
    }
}


push.addEventListener("click",function()
{
    if(input.value==""){
        error.textContent="Enter element First"
    }
    if(input.value!="")
    {
        
        if(topptr>=(max-1))
        {
            console.log("overflow")
            error.textContent="Overflow!"
        }
        else{
            topptr+=1;
            console.log(topptr)
            y-=42;
            let userInput=input.value;
            error.textContent=`Top pointer is at index ${topptr}`
            let box=new Stack(x,y,userInput);
            
            box.draw(c)
        }
    }
    
})

pop.addEventListener("click",function(){
    if(topptr<0)
    {
        console.log("underflow");
        error.innerText="Underflow!"
        

    }
    else{

        if(y>300)
        {
    
        }else{

            c.clearRect((x-55),(y),(50),40);   //clearing the previous pointer rect
            c.fillStyle="white";

            c.fillRect((x-55),y+42,50,40);    //creating new pointer rect

            //Writing TOP inside pointer rect
            
            c.fillStyle = 'black';
            c.font = '20px Caliber';
            c.textAlign = 'center';
            c.textBaseline = 'middle';
            c.fillText("TOP",(x-50)+25,y+62);    


            c.clearRect(x-1,y,201,40);          //clearing previous element rect
            y+=42;
            topptr-=1;   
            error.textContent=`Top pointer is at index ${topptr}`                      
            
        }
    }
})

clear.addEventListener("click", function(){
    x=(canvas.width)/7;

    y=(canvas.height)/1.9;
    c.clearRect(x-95,y-310,canvas.width,canvas.height)
    //creating the pointer rect at the starting 
    c.fillStyle="white";
    c.fillRect((x-50),y,50,40);

    //writing TOP in the pointer rect at the start 
    c.fillStyle = 'black';
    c.font = '20px san-serif';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText("TOP",(x-25),y+20);    //y+20 as to set the TOP at the center of the rect

    //creating stack struc
    c.beginPath()
    c.lineWidth=2
    c.moveTo(x-5,y-280);
    c.lineTo(x-2,y);
    c.lineTo(x+202,y);
    c.lineTo(x+202,y-280);
    c.stroke();
    c.closePath();


    topptr=-1
    input.value=""
    error.textContent=`Top pointer is at index ${topptr}`
});
