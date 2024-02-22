function btnclick(val)
{
    document.getElementById("inp").value=document.getElementById("inp").value+val;
}
function cleardisplay()
{
    document.getElementById("inp").value=""
}
function equalclick()
{
    var text=document.getElementById('inp').value
    var result=eval(text)
    document.getElementById('inp').value=result
}