//Form Validation (4 points)
//- Each border become green when it's valid (1 point)
//- Or red if the input in NOT valid (1 point)

//- The date of carry must contains at least 4 caracters (1 point)
let nameOk=false;
let dateOk=false;
const dateArea = document.querySelector('#carry');
dateArea.addEventListener('keyup', function () {
  const value = dateArea.value;
  const lengthValid = value.length > 4;
  nameOk=lengthValid;
  if (lengthValid) {
    dateArea.style.border = '5px solid green';
    
  } else {
    dateArea.style.border = '5px solid red';

  }
  
});

//- The victim name must include a space " " caracter (1 point)
const nameArea=document.querySelector("#victim");
nameArea.addEventListener("keyup",function(){
  const value=nameArea.value;
  dateOk=value.includes(" ");
  if(value.includes(" ")){
    nameArea.style.border='5px solid green';
  }else{
    nameArea.style.border='5px solid red';
  }
 
})


