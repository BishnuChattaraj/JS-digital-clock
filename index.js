function time()
{
        let dt = new Date();
        let hrs = dt.getHours();
        let min = dt.getMinutes();
        let sec = dt.getSeconds();

        document.getElementById("hrs").innerHTML = hrs;
        document.getElementById("min").innerHTML= min;
        document.getElementById("sec").innerHTML= sec;

        if(hrs===12)
        {
            document.getElementById("dn").innerHTML = "PM"
        }
        else if(hrs>=12)
        {
            hrs=hrs-12;
            document.getElementById("hrs").innerHTML = hrs;
            document.getElementById("dn").innerHTML = "PM"
        }
        else
        {
            
                document.getElementById("dn").innerHTML = "AM"
            
        }

    }

setInterval(time,1000)  // To make clock dynamic , caling the function at each interval of 1 second.


function fun()
{
    document.getElementById("alarm-btn").style.background="linear-gradient(to left,#6E54EC 25%,#CB52F8,#FC5EFF,#F1A7C5)"


    let wakeTime = document.querySelector("#drop-menu1").value;
    let lunchTime = document.querySelector("#drop-menu2").value;
    let napTime = document.querySelector("#drop-menu3").value;
    let nightTime = document.querySelector("#drop-menu4").value;

    let wakeArr = wakeTime.split(" ");
    
    let lunchArr = lunchTime.split(" ");
    
    let napArr = napTime.split(" ");
    
    let sleepArr = nightTime.split(" ");


    console.log(wakeArr);
    

    // time message box
    document.querySelector(".data").style.display="block"
    
    document.querySelector(".wakeData").textContent=`Wake Up Time : ${wakeTime}`;
    document.querySelector(".lunchData").textContent=`Lunch Time : ${lunchTime}`;
    document.querySelector(".napData").textContent=`Nap Time : ${napTime}`;
    document.querySelector(".nightData").textContent=`Night Time : ${nightTime}`;



    // image  and text changing according to current time

    let currentTime = document.querySelector("#hrs").textContent;
    let currentSession = document.querySelector("#dn").textContent;

    if ((currentTime)>=parseInt(wakeArr[0]) && currentSession===(wakeArr[1]))
      
      {

        document.querySelector(".img").src="./goodMorning.png"
        document.querySelector(".text1").textContent = "GOOD MORNING!! WAKE UP !!"
        document.querySelector(".text2").textContent = "GRAB SOME HEALTHY BREAKFAST!!! "
        console.log("good nmghf");
    }

    else if((currentTime)>=parseInt(lunchArr[0]) &&  currentSession===(lunchArr[1]))
     {
        document.querySelector(".img").src="./partyTime.png "
        document.querySelector(".text1").textContent = "GOOD AFTERNOON !! "
        document.querySelector(".text2").textContent = "LET'S HAVE SOME LUNCH !!"
        console.log("good erwt");

    }

    else if((currentTime)>=parseInt(napArr[0]) && currentSession===napArr[1])
      {
        document.querySelector(".img").src="./goodEvening.png "
        document.querySelector(".text1").textContent = "GOOD EVENING !!"
        document.querySelector(".text2").textContent = "TAKE SOME SLEEP THEN GET SOME TEA.. ITS JUST EVENING!"
        console.log("good edbhksd");
    }

    else if((currentTime)>=parseInt(sleepArr[0]) && currentSession===sleepArr[1])
      {
        document.querySelector(".img").src="./goodNight.png";
        document.querySelector(".img").style.height= "250px"
        document.querySelector(".text1").textContent = "GOOD NIGHT !!"
        document.querySelector(".text2").textContent = "CLOSE YOUR EYES AND GO TO SLEEP"
        console.log("good mrehftj");
    }



}


document.querySelector("#alarm-btn").addEventListener("click",fun);