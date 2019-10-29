function control()
{
 var firstNumber=document.getElementById("firstNumber").value;
 var secondNumber=document.getElementById("secondNumber").value;
result=Math.trunc(firstNumber)*Math.trunc(secondNumber)
alert("Vous avez saisi" + result);
}
