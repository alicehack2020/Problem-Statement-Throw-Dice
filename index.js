{/* <div id="winner"></div>
<div>
   <div id="member-1">Member A</div>
   <div id="member-2">Member B</div>
   <div id="member-3">Member C</div>
   <button id="roll">ROLL THE DICE</button>
</div> */}
// 1.green
// 2.yellow
// 3.red
// 4.draw blue

var member_1=document.getElementById("member-1")
var member_2=document.getElementById("member-2")
var member_3=document.getElementById("member-3")

var roll=document.getElementById("roll")
var winner=document.getElementById("winner")

roll.addEventListener("click",function(){
    var min=1
    var max=6
    var m1= Math.floor(getRandomArbitrary(min, max))
    var m2= Math.floor(getRandomArbitrary(min, max)) 
    var m3=Math.floor(getRandomArbitrary(min, max)) 

    member_1.innerText=m1
    member_2.innerText=m2
    member_3.innerText=m3

    if(m1>m2 && m1>m3)
    {
        member_1.style.color="green"
        if(m2>m3)
        {
            member_2.style.color="yellow" 
        }
        else
        {
            member_2.style.color="red"
        }

        if(m3>m2)
        {
            member_3.style.color="yellow" 
        }
        else
        {
            member_3.style.color="red"
        }
        winner.innerText="winner is Member A"
        
    }
    else if(m2>m1 && m2>m3)
    {
        member_2.style.color="green"

        if(m1>m3)
        {
            member_1.style.color="yellow" 
        }
        else
        {
            member_1.style.color="red"
        }

        if(m3>m1)
        {
            member_3.style.color="yellow" 
        }
        else
        {
            member_3.style.color="red"
        }
        winner.innerText="winner is Member B" 
        
    }
    else if(m3>m1 && m3>m2)
    {
        member_3.style.color="green"

        if(m1>m2)
        {
            member_1.style.color="yellow" 
        }
        else
        {
            member_1.style.color="red"
        }

        if(m2>m1)
        {
            member_2.style.color="yellow" 
        }
        else
        {
            member_2.style.color="red"
        }

        winner.innerText="winner is Member C"
         
    }
    else if(m1==m2 && m2==m3){
         member_1.style.color="blue"
         member_2.style.color="blue"
         member_3.style.color="blue"
        winner.innerText="Draw"
    }


    


})

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


