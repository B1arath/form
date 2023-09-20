const form= document.querySelector('#form');
const username= document.querySelector('#username');
const email= document.querySelector('#email');
const password= document.querySelector('#password');
const cpassword= document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
   
    if(!validateInputs()){
        e.preventDefault();
    }
})

 function validateInputs(){

    const usernameVal =username.value.trim();
    const emailVal =email.value.trim();
    const passwordVal =password.value.trim();
    const cpasswordVal =cpassword.value.trim();
    let success=true

    if(usernameVal==''){
        setError(username,'username is required')
        success=false;
    }
    else{
        success=true;
        setSuccess(username)
    }

    if(email==''){
        success=false;
        setError(email,'email is requried')
        

    }else if(!validateEmail(emailVal)){
        success=false;
        setError(email,'please enter a valid email')
    }else{
        success=true;
        setSuccess(email)
    }
    if(passwordVal==''){
        success=false;
        setError(password,'password is requried')
        
    }
    else if(passwordVal.length<8){
        success=false;
        setError(password,'password must be 8 character')

    }else{
        success=true;
        setSuccess(password)
    }
    if(cpasswordVal==''){
        success=false;
        setError(cpassword,'password is requried')
    }else if(cpasswordVal==passwordVal){
        success=false;
        setError(cpassword,'pasword doesnot match')
    }else{
        success=true;
        setSuccess(cpassword)
    }
    return success;
 }

function setError(element,message){
 const inputGroup = element.parentElement;
 const errorElement = inputGroup.querySelector('.error');

 errorElement.innerText= message;
 inputGroup.classList.add('error')
 inputGroup.classList.remove('success')

}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
   
    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
   
   }

   const validateEmail = (email) =>{
     return String(email)
    .toLowerCase()
    .match(/.*@[a-z0-9.-]*/i)
   }