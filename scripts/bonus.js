//# BONUS (1 point)
//- The "ADBUCT" submit button of the form get disabled(grey)/enable(pink) during the "keyup" validation if both conditions are valid (1 point)

function enableButton(){
    if(nameOk && dateOk){
        document.querySelector("#submit").disabled=false;
        document.querySelector("#submit").style.backgroundColor="#fa6980";
      
        }else{
            document.querySelector("#submit").disabled=true;
        document.querySelector("#submit").style.backgroundColor="#a6adb4";
        }
}

myForm.addEventListener("keyup",enableButton);


