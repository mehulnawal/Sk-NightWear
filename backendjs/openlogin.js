document.addEventListener("DOMContentLoaded", function () {
    const lostPasswordLink = document.getElementById("lost-password");
    const backToLoginLink = document.getElementById("back-to-login");
    const createAccountLink = document.getElementById("create-account-link");
    const backToLoginFromRegisterLink = document.getElementById("back-to-login-from-register");
    const loginForm = document.getElementById("login-form");
    const forgotPasswordForm = document.getElementById("forgot-password-form");
    const registerForm = document.getElementById("register-form");
    const closeButton = document.getElementById("user-close-icon");
    const formHeading = document.getElementById("form-heading");
    const logoutButton = document.getElementById("logout");
    const logoutForm = document.getElementById("logout-form");
    const loginFormSection = document.querySelector(".form-main");
    const createAccountSection = document.querySelector(".create-account"); // ✅ Added

    // ✅ Function to toggle UI based on token presence
    function updateUIBasedOnToken() {
        if (localStorage.getItem("token")) {

            const storedEmail = localStorage.getItem("email") || "User";
            const usernameFromEmail = storedEmail.split("@")[0];
            // 🎯 Token found: Show logout, hide login forms and create account
            loginForm.style.display = "none";
            forgotPasswordForm.style.display = "none";
            registerForm.style.display = "none";
            logoutForm.style.display = "block"; // Show logout button
            createAccountSection.style.display = "none"; // ✅ Hide Create Account
            formHeading.textContent = "Welcome Back " + usernameFromEmail;
        } else {
            // 🛑 Token not found: Show login forms, hide logout, show create account
            loginForm.style.display = "block";
            forgotPasswordForm.style.display = "none";
            registerForm.style.display = "none";
            logoutForm.style.display = "none"; // Hide logout button
            createAccountSection.style.display = "block"; // ✅ Show Create Account
            formHeading.textContent = "Sign in";
        }
    }

    // ✅ Initial UI Check on Page Load
    updateUIBasedOnToken();

    // ✅ Handle Logout
    // ✅ Handle Logout
    logoutButton.addEventListener("click", function () {
        // ❌ Clear all stored user data
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("username");


        Swal.fire({
            toast: true,
            icon: "info",
            title: "Logged out successfully!",
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
        }).then(() => {
            // 🔄 Refresh the page *only after* the Swal notification
            updateUIBasedOnToken(); // 🔄 Update UI after logout
            window.location.href = "/index.html";
        });
    });


    // ✅ Show Forgot Password Form
    lostPasswordLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.style.display = "none";
        forgotPasswordForm.style.display = "block";
        registerForm.style.display = "none";
        formHeading.textContent = "Forgot Password";
    });

    // ✅ Back to Login from Forgot Password
    backToLoginLink.addEventListener("click", function (event) {
        event.preventDefault();
        updateUIBasedOnToken();
    });

    // ✅ Show Registration Form
    createAccountLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.style.display = "none";
        forgotPasswordForm.style.display = "none";
        registerForm.style.display = "block";
        createAccountSection.style.display = "none"; // ✅ Hide when registering
        formHeading.textContent = "Sign Up";
    });

    // ✅ Back to Login from Registration
    backToLoginFromRegisterLink.addEventListener("click", function (event) {
        event.preventDefault();
        updateUIBasedOnToken();
    });

    // ✅ Close Login Section
    closeButton.addEventListener("click", function () {
        loginFormSection.style.display = "none";
    });



});