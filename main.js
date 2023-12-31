const passwordFind = document.getElementById("password");
const togglePass = document.querySelector(".password-toggle-icon i");

togglePass.addEventListener('click', function() {
    if(passwordFind.type === "password") {
        passwordFind.type = "text";
        togglePass.classList.remove("fa-eye")
        togglePass.classList.add("fa-eye-slash")
    }
    else{
        passwordFind.type ="password";
        togglePass.classList.remove("fa-eye-slash");
        togglePass.classList.add("fa-eye")
    }
})