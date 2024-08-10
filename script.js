let gameArray =[];
let userArray =[];
let start =false;
let level = 0;
let btns=["red","yellow","green","purple"]
let h3 = document.querySelector('h3');

document.addEventListener('keypress',function(){
    if(start == false){
        console.log("game started")
        start = true;
    }
    levelup();
    
})
function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove("flash")
    },200)
}
function levelup(){
    userArray=[];
    level++;
    h3.innerText=`Level ${level}`
    
    let randomIdx = Math.floor(Math.random()*3)
    let randomcolor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randomcolor}`)
    btnFlash(randbtn);
    gameArray.push(randomcolor)
    console.log(gameArray)
    
}
function checkans(idx){
    
    if(gameArray[idx]==userArray[idx]){
        if(gameArray.length==userArray.length){
            setTimeout(levelup,500)
            
        }
    }else {
       
            h3.innerText=`Game Over, Press any key to continue!\n your score is ${gameArray.length-1}`;
            let body = document.querySelector('body')
            body.classList.toggle("error")
            setTimeout(()=>{
                body.classList.toggle("error")
            },200)
            gameArray=[]
            level=0
            start=false;
        }
    }

function btnPress(){
    let btn = this;
    btnFlash(btn)
    let userbtn =btn.getAttribute("id")
    userArray.push(userbtn)
    console.log(userArray)
    checkans(userArray.length-1);
}
let AllBtns = document.querySelectorAll(".btn");
for(btn of AllBtns){
    btn.addEventListener('click',btnPress)
}