var y=0;
function myFunctionm()
{
  document.getElementById("Win").style.display="none";
  document.getElementById("iwon").style.display="none";
  document.getElementById("Lose").style.display="none";
  document.getElementById("ilost").style.display="none";
  document.body.style.backgroundColor="lightblue";
  document.getElementById("text").style.display="block";
  document.getElementById("button").style.display="block";
  document.getElementById("score").innerHTML=0;
  document.getElementById("winlose").style.display="block";
  y=0;
}

function myFunction()
{
  document.getElementById("a1").style.display="none";
  document.getElementById("a2").style.display='block';
  y=y+1;
  document.getElementById("score").innerHTML=y;
}

function myFunction2()
{
  document.getElementById("a2").style.display="none";
  document.getElementById("a3").style.display='block';
  y=y+1;
  document.getElementById("score").innerHTML=y;
}

function myFunction3()
{
  document.getElementById("a3").style.display="none";
  document.getElementById("a4").style.display='block';
  y=y+1;
  document.getElementById("score").innerHTML=y;
}

function myFunction4()
{
  document.getElementById("a4").style.display="none";
  document.getElementById("a5").style.display='block';
  y=y+1;
  document.getElementById("score").innerHTML=y;
}

function myFunction5()
{
  document.getElementById("a5").style.display="none";
  document.getElementById("a6").style.display='block';
  y=y+1;
  document.getElementById("score").innerHTML=y;
}
function myFunction6()
{
  document.getElementById("a6").style.display="none";
  document.getElementById("a7").style.display='block';
  y=y+1;
  document.getElementById("score").innerHTML=y;
}
function myFunction7()
{
  document.getElementById("a7").style.display="none";
  document.getElementById("a1").style.display='block';
  y=y+1;
  document.getElementById("score").innerHTML=y;
}
function myFunctionb()
{
  document.getElementById("text").style.display="none";
  document.getElementById("button").style.display="none";
  document.body.style.backgroundColor="white";
  document.getElementById("a2").style.display="none";
  document.getElementById("a1").style.display='block';
  document.getElementById("timer").style.display="block";
  document.getElementById("score").style.display="block";
  document.getElementById("winlose").style.display="none";
  y=0;
  var refresh =setInterval(function()
    {
        if(x==0)
        {
            if(y>=15)
            {
                y=0;
                YouWIN();
                clearInterval(refresh);
            }
            else
            {
                y=0;
                YouLOSE();
                clearInterval(refresh);
            }
            x=10;
        }
        document.getElementById("timp").innerHTML=x;
        x--;
    },1000);
}
let x=9;
function YouLOSE()
{
    document.getElementById("timer").style.display="none";
    document.getElementById("score").style.display="none";
    document.getElementById("a1").style.display="none";
    document.getElementById("a2").style.display="none";
    document.getElementById("a4").style.display="none";
    document.getElementById("a3").style.display="none";
    document.getElementById("a5").style.display="none";
    document.getElementById("a6").style.display="none";
    document.getElementById("a7").style.display="none";
    document.body.style.backgroundColor="brown";
    document.getElementById("Lose").style.display="block";
    document.getElementById("ilost").style.display="block";
}

function YouWIN()
{
  document.getElementById("timer").style.display="none";
    document.getElementById("score").style.display="none";
    document.getElementById("a1").style.display="none";
    document.getElementById("a2").style.display="none";
    document.getElementById("a4").style.display="none";
    document.getElementById("a3").style.display="none";
    document.getElementById("a5").style.display="none";
    document.getElementById("a6").style.display="none";
    document.getElementById("a7").style.display="none";
    document.body.style.backgroundColor="pink";
    document.getElementById("Win").style.display="block";
    document.getElementById("iwon").style.display="block";
}





