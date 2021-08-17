// Form Submission (5 points)



const myForm=document.querySelector("form");
myForm.addEventListener("submit", function (event){
    //- Handle the form submission, and don't make your teacher sad! (1 points)
    event.preventDefault();
    //- The form need to verify the previous conditions (space in victim, carry length) (2 points)
   
    if(nameOk && dateOk){
    
       //- if all is good, you'll replace the form with the message like :
       //"Thanks for the trust your put into our services. We'll carry Ned Flanders, ASAP" (1 point)
       const victimName = document.querySelector('#carry').value;
       myForm.innerHTML=`Thanks for the trust your put into our services. We'll carry ${victimName}, ASAP`;
       
    }else{
        
        //- if it does not, you'll show an alert "An error occured, we can't carry your victim." (1 point)
        myForm.innerHTML="An error occured, we can't carry your victim."
    }


});
