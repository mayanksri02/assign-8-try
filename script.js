var i=0;
function required()
{
    var empt = document.forms["form"]["first_name"].value;
    if (empt == "")
    {
    alert("Please input a Value");
    return false;
    }
    else 
    {
    alert('Code has accepted : you can try another');
    return true; 
    }
}
function alrt(){
    alert("FORM SUBMITTED SUCCESSFULLY")
}
const button = document.getElementById("button")
button.addEventListener("click",alrt)