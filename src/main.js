let html = document.querySelector("#demo");
let style=document.querySelector("style");

setTimeout(()=>{
    style.innerHTML=`body{
        color:red;
    }`;
},100)
let string = `
    /*你好,我是一名前端小白
    我叫白杨
    我要加样式了
    要加的样式是*/
    body{
        color:red;
    } 
    /*接下来准备一个div*/
    #div1{
        border:1px solid black;
        width:200px;
        height:200px;
    }
    /*接下来将div变成一个八卦图
    *首先，将其变成一个圆*/
   #div1{
       border-radius:50%;
       box-shadow:0 0 3px rgba(0,0,0,0.6);
       border:none;
   }
   /* 八卦图是一黑一白组成的*/
   #div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
   }
   /*加上两端的小球*/
   #div1::before{
       width:100px;
       height:100px;
       top:0;
       left:50%;
       transform:translateX(-50%);
       background:#000;
       border-radius:50%;
       background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 100%);
   }
   #div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(33,33,33,1) 15%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 100%);
    }     
    `;
    
let string2=``;
let n=0;
console.log(string.length);

let step =()=>{
    
    setTimeout(()=>{            
        if (string[n]==="\n"){
            string2=string2+"<br>";   
        }else if(string[n]===" "){
            string2=string2+"&nbsp;"
        }{
            string2=string2+string[n];  
        }           
        html.innerHTML=string2;
        style.innerHTML=string.substring(0,n);
        window.scrollTo(0,999999999);
        html.scrollTo(0,99999999)
        if (n+1 <string.length){
            step();
            n=n+1;
        }
               
    },50);
};
step();

