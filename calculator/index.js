function clicka(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val

}
function cleardisplay(){
    document.getElementById("screen").value=""
}
function equalclick()
{
    var text1 = document.getElementById("screen").value
    var result= eval(text1)
    document.getElementById("screen").value=result
}