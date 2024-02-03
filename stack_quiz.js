let co1 = document.querySelector('#co1');
let co2 = document.querySelector('#co2');
let co3 = document.querySelector('#co3');
let co4 = document.querySelector('#co4');
let co5 = document.querySelector('#co5');
let co6 = document.querySelector('#co6');
let co7= document.querySelector('#co7');
let co8 = document.querySelector('#co8');

let cd1 = document.querySelector('.cd1');
let cd2 = document.querySelector('.cd2');
let cd3 = document.querySelector('.cd3');
let cd4 = document.querySelector('.cd4');
let cd5 = document.querySelector('.cd5');
let cd6 = document.querySelector('.cd6');
let cd7=  document.querySelector('.cd7');
let cd8 = document.querySelector('.cd8');


// storing a correct ans into a variable

let corect_ans1=document.querySelector('#correct1');
let correct_ans2=document.querySelector('#correct2');
let correct_ans3=document.querySelector('#correct3');
let correct_ans4=document.querySelector('#correct4');
let correct_ans5=document.querySelector('#correct5');
let correct_ans6=document.querySelector('#correct6');
let correct_ans7=document.querySelector('#correct7');
let correct_ans78=document.querySelector('#correct8');


let c1=document.getElementsByName('question1');
let c2=document.getElementsByName('question2');
let c3=document.getElementsByName('question3');
let c4=document.getElementsByName('question4');
let c5=document.getElementsByName('question5');
let c6=document.getElementsByName('question6');
let c7=document.getElementsByName('question7');
let c8=document.getElementsByName('question8');
let s1;
let s2;
let s3;
let s4;
let s5;
let s6;
let s7;
let s8;
let s9;
let s10;
let span;
let showscore=document.querySelector('.score')

function result() {
var score=0;

if (document.getElementById('correct1').checked) {
score++;

}
for (var i = 0; i < c1.length; i++) {
       if (c1[i].checked) {
           s1 = c1[i].value;
           var checked_1=c1[i];
           break;
       }
   }
if(s1=='c'){

 co1.parentNode.style.background='#b6feb6';
}     
else{
 co1.parentNode.style.background='lightgrey';
 console.log(checked_1)
 checked_1.parentNode.parentNode.style.background='#ff827a';

}



if (document.getElementById('correct2').checked) {
score++;
}

for (var i = 0; i < c2.length; i++) {
       if (c2[i].checked) {
           s2 = c2[i].value;
           var checked_2=c2[i];
           break;
       }
   }
if(s2=='a'){

 co2.parentNode.style.background='#b6feb6';
}     
else{
 co2.parentNode.style.background='lightgrey';
 checked_2.parentNode.parentNode.style.background='#ff827a'
}

if (document.getElementById('correct3').checked) {
score++;
}
for (var i = 0; i < c3.length; i++) {
       if (c3[i].checked) {
           s3 = c3[i].value;
           var checked_3=c3[i];
           break;
       }
   }
if(s3=='b'){

 co3.parentNode.style.background='#b6feb6';
}     
else{
 co3.parentNode.style.background='lightgrey';
 checked_3.parentNode.parentNode.style.background='#ff827a'
}


if (document.getElementById('correct4').checked) {
score++;
}
for (var i = 0; i < c4.length; i++) {
       if (c4[i].checked) {
           s4 = c4[i].value;
           var checked_4=c4[i];
           break;
       }
   }
if(s4=='b'){

 co4.parentNode.style.background='#b6feb6';
}     
else{
 co4.parentNode.style.background='lightgrey';
 checked_4.parentNode.parentNode.style.background='#ff827a'
}



if (document.getElementById('correct5').checked) {
score++;
}
for (var i = 0; i < c5.length; i++) {
       if (c5[i].checked) {
           s5= c5[i].value;
           var checked_5=c5[i];
           break;
       }
   }
if(s5=='a'){

 co5.parentNode.style.background='#b6feb6';
}     
else{
 co5.parentNode.style.background='lightgrey';
 checked_5.parentNode.parentNode.style.background='#ff827a'
}


if (document.getElementById('correct6').checked) {
score++;
}
for (var i = 0; i < c6.length; i++) {
       if (c6[i].checked) {
           s6 = c6[i].value;
           var checked_6=c6[i];
           break;
       }
   }
if(s6=='c'){

 co6.parentNode.style.background='#b6feb6';
}     
else{
 co6.parentNode.style.background='lightgrey';
 checked_6.parentNode.parentNode.style.background='#ff827a'
}


if (document.getElementById('correct7').checked) {
score++;
}
for (var i = 0; i < c7.length; i++) {
       if (c7[i].checked) {
           s7 = c7[i].value;
           var checked_7=c7[i];
           break;
       }
   }
if(s7=='b'){

 co7.parentNode.style.background='#b6feb6';
}     
else{
 co7.parentNode.style.background='lightgrey';
 checked_7.parentNode.parentNode.style.background='#ff827a'
}     



if (document.getElementById('correct8').checked) {
score++;
}
for (var i = 0; i < c8.length; i++) {
       if (c8[i].checked) {
           s8 = c8[i].value;
           var checked_8=c8[i];
           break;
       }
   }
if(s8=='d'){

 co8.parentNode.style.background='#b6feb6';
}     
else{
 co8.parentNode.style.background='lightgrey';
 checked_8.parentNode.parentNode.style.background='#ff827a'
}

 alert("Your score is :" + score);
showscore.style.opacity='100%';
showscore.innerHTML=' Your score is : '+ score+'/8';
}