/*========== Login Form ==========*/
const loginFormEmailInput = document.querySelector(".loginFormMainContainer .loginFormContent form .emailInputSpan input");
const loginFormEmailInputError = document.querySelector(".loginFormMainContainer .loginFormContent form .emailError");
const loginFormPasswordInput = document.querySelector(".loginFormMainContainer .loginFormContent form .passwordInputSpan input");
const loginFormPasswordInputError = document.querySelector(".loginFormMainContainer .loginFormContent form .passwordError");
const loginButton = document.querySelector(".loginFormMainContainer .loginFormContent form #loginButton");

let loginFormEmailInputsStatus;
let loginFormPasswordInputsStatus;

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


function loginFormFunctions(){
    window.addEventListener("load",()=>{
        loginFormEmailInput.focus();
    });

    loginButton.addEventListener("click", (e)=>{
        //Show Email Input Error when Email is Invalid
        function emailInputError(){
            if(!emailRegex.test(loginFormEmailInput.value)){
                e.preventDefault();
                loginFormEmailInput.classList.add("error");
                loginFormEmailInputError.style.display = "block";
            }
            else{
                loginFormEmailInput.classList.remove("error");
                loginFormEmailInputError.style.display = "none";
                loginFormEmailInputsStatus = "valid";
            }
        }
        emailInputError();

        function passwordInputError(){
            //Show Password Input Error when Password is Invalid
            if(loginFormPasswordInput.value.length < 8){
                e.preventDefault();
                loginFormPasswordInput.classList.add("error");
                loginFormPasswordInputError.style.display = "block";
            }
            else{
                loginFormPasswordInput.classList.remove("error");
                loginFormPasswordInputError.style.display = "none";
                loginFormPasswordInputsStatus = "valid";
            }
        }
        passwordInputError();
    });

    //Login Button Loader & open Welcome Page
    const loginButtonTextSpan = document.querySelector(".loginFormMainContainer .loginForm .loginFormContent form #loginButton span");
    const loginButtonLoader = document.querySelector(".loginFormMainContainer .loginForm .loginFormContent form #loginButton i");
    function loginButtonLoaderFunction(){
        loginButton.addEventListener("click", (e)=>{
            if(loginFormEmailInputsStatus == "valid" && loginFormPasswordInputsStatus == "valid"){
                e.preventDefault();
                loginButtonTextSpan.style.display="none";
                loginButton.classList.add("untouchabel");
                loginButtonLoader.classList.add("active");
                window.open("./welcome page.html","_self");

                if(window.open("../HTML Files/welcome page.html","_self")){
                    loginButtonTextSpan.style.display="block";
                    loginButton.classList.remove("untouchabel");
                    loginButtonLoader.classList.remove("active");
                }
            }
        })
    }
    loginButtonLoaderFunction();
}
if(loginButton != null){loginFormFunctions()};



/*========== Reset Password Form ==========*/
const resetPasswordFormEmailInput = document.querySelector(".resetPasswordMainContainer .resetPasswordForm .resetPasswordFormContent form #emailInput");
const resetPasswordFormEmailInputError = document.querySelector(".resetPasswordMainContainer .resetPasswordForm .resetPasswordFormContent .emailError");
const resetPasswordFormSendButton = document.querySelector(".resetPasswordMainContainer .resetPasswordForm .resetPasswordFormContent button");
const passwordResetLinkPopUpForm = document.querySelector(".resetPasswordMainContainer .passwordResetLinkPopUpForm");
const resetPasswordForm = document.querySelector(".resetPasswordMainContainer .resetPasswordForm");
let resetPasswordFormEmailInputsStatus;


function resetPasswordFormFunction(){
    window.addEventListener("load",()=>{
        resetPasswordFormEmailInput.focus();
    });

    resetPasswordFormSendButton.addEventListener("click",(e)=>{
        //Show Email Input Error when Email is Invalid
        function resetPasswordFormEmailInputErrorFunction(){
            if(!emailRegex.test(resetPasswordFormEmailInput.value)){
                e.preventDefault();
                resetPasswordFormEmailInput.classList.add("error")
                resetPasswordFormEmailInputError.style.display = "block";
            }
            else{
                e.preventDefault();
                resetPasswordFormEmailInput.classList.remove("error");
                resetPasswordForm.style.display = "none";
                passwordResetLinkPopUpForm.style.display = "block";
                resetPasswordFormEmailInputsStatus = "valid";
                NotificationAndCountContainerFunction();
            }
        }
        resetPasswordFormEmailInputErrorFunction();
    })
}
if(resetPasswordFormSendButton != null){resetPasswordFormFunction()};



/*========== Sign Up Form ==========*/
const signUpFormUsernameInput = document.querySelector(".signUpFormMainContainer .signUpForm .signUpFormContent form .usernameInput");
const signUpFormUsernameInputError = document.querySelector(".signUpFormMainContainer .signUpForm .signUpFormContent form .usernameInputError");

const signUpFormEmailInput = document.querySelector(".signUpFormMainContainer .signUpForm .signUpFormContent form .emailInput");
const signUpFormEmailInputError = document.querySelector(".signUpFormMainContainer .signUpForm .signUpFormContent form .emailInputError");

const signUpFormPasswordInput = document.querySelector(".signUpFormMainContainer .signUpForm .signUpFormContent form .passwordInputSpan .passwordInput");
const signUpFormPasswordInputError = document.querySelector(".signUpFormMainContainer .signUpForm .signUpFormContent form .passwordInputError");

const signUpFormButton = document.querySelector(".signUpFormMainContainer .signUpForm .signUpFormContent form button");

const usernameRegex = /^[a-zA-Z0-9._-]{3,20}$/;

let signUpFormUsernameInputStatus;
let signUpFormEmailInputStatus;
let signUpFormPasswordInputStatus;


function signUpFormFunction(){
    window.addEventListener("load",()=>{
        signUpFormUsernameInput.focus();
    });

    signUpFormButton.addEventListener("click", (e)=>{
        function signUpFormUsernameInputErrorFunction(){
            if(!usernameRegex.test(signUpFormUsernameInput.value)){
                e.preventDefault();
                signUpFormUsernameInput.classList.add("error");
                signUpFormUsernameInputError.style.display = "block";
            }
            else{
                signUpFormUsernameInput.classList.remove("error");
                signUpFormUsernameInputError.style.display = "none";
                signUpFormUsernameInputStatus = "valid";
            }
        }
        signUpFormUsernameInputErrorFunction();

        //Show Email Input Error when Email is Invalid
        function signUpFormEmailInputErrorFunction(){
            if(!emailRegex.test(signUpFormEmailInput.value)){
                e.preventDefault();
                signUpFormEmailInput.classList.add("error");
                signUpFormEmailInputError.style.display = "block";
            }
            else{
                signUpFormEmailInput.classList.remove("error");
                signUpFormEmailInputError.style.display = "none";
                signUpFormEmailInputStatus = "valid";
            }
        }
        signUpFormEmailInputErrorFunction()

        //Show Password Input Error when Password is Invalid
        function signUpFormPasswordInputErrorFunction(){
            if(signUpFormPasswordInput.value.length < 8){
                e.preventDefault();
                signUpFormPasswordInput.classList.add("error")
                signUpFormPasswordInputError.style.display = "block";
            }
            else{
                signUpFormPasswordInput.classList.remove("error");
                signUpFormPasswordInputError.style.display = "none";
                signUpFormPasswordInputStatus = "valid";
            }
        }
        signUpFormPasswordInputErrorFunction()
    })

    //Sign up Confirmation Email Link Pop Up
    const signUpForm = document.querySelector(".signUpFormMainContainer .signUpForm");
    const signUpConfirmationEmailLinkPopUp = document.querySelector(".signUpFormMainContainer .signUpConfirmationEmailLinkPopUp")

    signUpFormButton.addEventListener("click", (e)=>{
        if(signUpFormUsernameInputStatus ==  "valid" && signUpFormEmailInputStatus ==  "valid" && signUpFormPasswordInputStatus ==  "valid"){
            e.preventDefault();
            signUpForm.style.display = "none";
            signUpConfirmationEmailLinkPopUp.style.display = "block";
            NotificationAndCountContainerFunction();
        }
    })
}
if(signUpFormButton != null){signUpFormFunction()};



/*---------- Link Sent Notification and Count Function ----------*/
const linkSentNotification = document.querySelector(".linkSentNotification");
const resendTheLinkButtonCount = document.querySelector(".resendTheLinkButtonCount");
const resendTheLinkButton = document.querySelector(".resendTheLinkButton");

function NotificationAndCountContainerFunction(){
    function NotificationAndCountFunction(){
        //Make Resend the Link Button Untouchable
        resendTheLinkButton.style.pointerEvents = "none";
        resendTheLinkButton.style.opacity = ".7";

        //Show and Hide Link Sent Pop Up
        linkSentNotification.classList.add("show");
        if(linkSentNotification.classList.contains("show")){
            setTimeout(() => {
                linkSentNotification.classList.remove("show");
            }, 5000);
        }

        //Resend the Link Button Count
        resendTheLinkButtonCount.style.display = "inline";
        var i = 60;
        resendTheLinkButtonCount.innerText = i;
        const countInterval = setInterval(()=>{
            i--
            resendTheLinkButtonCount.innerText = i;
            if(i < 10){
                resendTheLinkButtonCount.innerText = `0${i}`;
            }
        },1000);

        //Make Resent the Link Button Available after 60 Seconds
        setTimeout(()=>{
            clearInterval(countInterval);
            resendTheLinkButtonCount.style.display = "none";
            resendTheLinkButton.style.pointerEvents = "all";
            resendTheLinkButton.style.opacity = "1";
        },60000);
    }

    NotificationAndCountFunction();

    resendTheLinkButton.addEventListener("click", ()=>{
        NotificationAndCountFunction();
    })
}



/*========== General ==========*/
//Show and hide password function
function showAndHidePassword(){
    const eyeIcone = document.querySelector(".passwordInputSpan i");
    eyeIcone.addEventListener("click", ()=>{
        if(eyeIcone.className == "fa-solid fa-eye"){
            if(loginFormPasswordInput != null){
                loginFormPasswordInput.type = "text";
            }
            if(signUpFormPasswordInput != null){
                signUpFormPasswordInput.type = "text";
            }
            eyeIcone.className = "fa-solid fa-eye-slash";
        }
        else{
            if(loginFormPasswordInput != null){
                loginFormPasswordInput.type = "password";
            }
            if(signUpFormPasswordInput != null){
                signUpFormPasswordInput.type = "password";
            }
            eyeIcone.className = "fa-solid fa-eye";
        }
    })
}
if(loginFormPasswordInput != null || signUpFormPasswordInput != null){showAndHidePassword()}