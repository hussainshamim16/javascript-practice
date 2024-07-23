console.log("logo")

var input = document.getElementById('input');

function Add(defultperamitor = 5) {
    console.log("touch");
if(!input.value){
    alert("enter value")
    return

}
    var output = document.getElementById('output');
    // console.log()
    output.innerHTML = input.value * defultperamitor
    input.value = ''
}