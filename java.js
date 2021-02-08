function f1()
{
    var x = Math.floor((Math.random() * 10) + 1);
    if(x%2)
    {
        document.getElementById("body").innerHTML=`<button onclick="f1()" class="button5">Head</button>`;
    }
    else
    {
        document.getElementById("body").innerHTML=`<button onclick="f1()" class="button5">Tail</button>`;
    }
}