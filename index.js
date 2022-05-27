var username = document.getElementById("username");
var error = document.getElementById("error");
var uname = document.getElementById("name");
var signin = document.getElementById("signin");
var quiz = document.getElementById("quiz-container");

signin.addEventListener("click",function(e){
    e.preventDefault();
    if(uname.value ===""){
        error.style.display="block";
        error.innerHTML="please enter your name";
        error.style.color="red";
        error.style.fontSize="0.6em";
     }else{
          error.style.display="none";
          username.style.display="none";
          quiz.style.display="block";
          var interval1 =setInterval(countdown,1000);
        
      }
});
var question_text = document.getElementById("question-text");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var curques=0;
var score=0;

 const quizdata=[{
    question: "Inside which HTML element do we put the JavaScrpit?",
    a: "<js>",
    b: "<scripting>",
    c: "<javascript>",
    d: "<script>",
    correct: "d",
},
{
    question: "Where is the correct place to insert a JavaScript?",
    a: "The <head> section",
    b: "The <body> section",
    c: "Neither a nor b",
    d: "Both a and b",
    correct: "d",
},{
    question: "The external JavaScrpit file must contain the <script> tag",
    a: "True",
    b: "False",
    c: "Maybe",
    d: "none of the above",
    correct: "b",
},{
    question: "JavaScript is a _____-side programming language",
    a: "Client",
    b: "Server",
    c: "Both",
    d: "none",
    correct: "c",
},{
    question: "What will the code return? /n Boolean(3 < 7)",
    a: "True",
    b: "False",
    c: "Nan",
    d: "Syntax error",
    correct: "a",
}];
function deselect(){
    let alloptions=document.getElementsByName("1");
    alloptions.forEach((x)=>{
        x.checked=false;
    });

}
function loadques(){
    deselect();
    let questiondata=quizdata[curques];
 question_text.innerText= questiondata.question;
 option1.innerText=questiondata.a;
 option2.innerText=questiondata.b;
 option3.innerText=questiondata.c;
 option4.innerText=questiondata.d;
}
loadques();
 var next=document.getElementById("next-question");
 next.addEventListener("click",function(){
    let questiondata=quizdata[curques];
    var alloptions=document.getElementsByName("1");
    alloptions.forEach((x)=>{
        if(x.checked){
            if(x.id == questiondata.correct ){
                score++;
            }
        }
    })
     curques+=1;
     if(curques<quizdata.length){
        loadques();
     }else{
         result();
     }
    
 })
  c=60;
  bool = false;
 var exit=document.getElementById("exit");
 exit.addEventListener("click",function(){
     if(confirm("Are you sure,You want to exit?")){
       result();
      
     }

 })
 function result(){
    quiz.style.display="none";
        var resultdiv=document.getElementById("result");
        resultdiv.style.display="block";
        var result = document.getElementById("result-text");
        result.innerHTML=`<h3>Your Score is : ${score}/5</h3>`;
        var reload = document.getElementById("reload");
 reload.addEventListener("click",function(){
     resultdiv.style.display="none";
     quiz.style.display="block";
     curques=0;
    loadques();
     bool = true;
    //setInterval(countdown,1000);
 })
       
 }
 
 
 function countdown(){
     if(bool){
         c=60;
         bool=false;
     }
  if(c>0){
    const mins = Math.floor(c / 60) % 60;
    const secs=Math.floor(c)%60;
      var mincount = document.getElementById("mincount");
      var seccount = document.getElementById("seccount");
      mincount.innerHTML=mins;
      seccount.innerHTML=secs ;
      c--;
  }else{
      result();
  }
 }
