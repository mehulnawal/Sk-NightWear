//login api with frontend

document.getElementById("login").addEventListener("click", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        Swal.fire({
            toast: true,
            icon: "warning",
            title: "Missing Fields!",
            text: "Please enter both email and password.",
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
        });
        return;
    }

    try {
        const response = await fetch("http://localhost:8000/api/v1/auth/userLogin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
            const username = email.split("@")[0];
            localStorage.setItem("email", email);
            localStorage.setItem("token", data.token);

            Swal.fire({
                toast: true,
                icon: "success",
                title: `Welcome, ${username}! 🎉`,
                text: "Login successful! Redirecting...",
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
            });

            setTimeout(() => {
                // ✅ Redirect to the same page without losing wishlist state
                if (localStorage.getItem("showWishlistAfterLogin") === "true") {
                    localStorage.setItem("wishlist_open", "true"); // 🌟 Keep wishlist open after reload
                    localStorage.removeItem("showWishlistAfterLogin");
                }

                window.location.reload(); // 🔄 Reload the page
            }, 2000);
        } else {
            Swal.fire({
                toast: true,
                icon: "error",
                title: "Login Failed",
                text: data.message || "Invalid email or password.",
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
            });
        }
    } catch (error) {
        console.error("Error:", error);
        Swal.fire({
            toast: true,
            icon: "error",
            title: "Server Error",
            text: "Something went wrong. Try again later.",
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
        });
    }
});




// Registration Form Submission
document.getElementById("register").addEventListener("click", async function (event) {
    event.preventDefault();

    const firstname = document.getElementById("first-name").value;
    const lastname = document.getElementById("last-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (!firstname || !lastname || !email || !password) {
        Swal.fire({
            toast: true,
            icon: "warning",
            title: "Missing Fields!",
            text: "Please fill in all fields.",
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
        });
        return;
    }

    try {
        const response = await fetch("http://localhost:8000/api/v1/auth/userRegister", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstname, lastname, email, password }),
        });

        const data = await response.json();
        console.error("Backend Response:", data); // Debugging API response

        if (response.ok) {
            Swal.fire({
                toast: true,
                icon: "success",
                title: "Registration Successful!",
                text: "You can now log in.",
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
            });

            setTimeout(() => {
                document.getElementById("register-form").style.display = "none";
                document.getElementById("login-form").style.display = "block";
            }, 2000);
        } else {
            // Handle registration errors
            Swal.fire({
                toast: true,
                icon: "error",
                title: "Registration Failed",
                text: data.message || "Something went wrong. Try again later.",
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
            });
        }
    } catch (error) {
        console.error("Error:", error);
        Swal.fire({
            toast: true,
            icon: "error",
            title: "Error",
            text: "Something went wrong. Try again later.",
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
        });
    }
});





// Forgot Password API Call
document.getElementById("reqotp").addEventListener("click", async function (event) {
    event.preventDefault();

    const email = document.getElementById("forgot-email").value;

    if (!email) {
        Swal.fire({
            toast: true,
            icon: "warning",
            title: "Missing Email!",
            text: "Please enter your registered email.",
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
        });
        return;
    }

    try {
        const response = await fetch("http://localhost:8000/api/v1/auth/forgot-Password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                toast: true,
                icon: "success",
                title: "OTP Sent!",
                text: "Check your email for the OTP to reset your password.",
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
            });

            // Show OTP & Password Fields
            document.getElementById("forgot-otp").style.display = "block";
            document.getElementById("forgot-password").style.display = "block";
            document.getElementById("final").style.display = "block";

        } else {
            Swal.fire({
                toast: true,
                icon: "error",
                title: "Error",
                text: data.message || "Could not send OTP. Try again later.",
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
            });
        }
    } catch (error) {
        console.error("Error:", error);
        Swal.fire({
            toast: true,
            icon: "error",
            title: "Error",
            text: "Something went wrong. Try again later.",
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
        });
    }
});

// Reset Password API Call
document.getElementById("final").addEventListener("click", async function (event) {
    event.preventDefault();

    const email = document.getElementById("forgot-email").value;
    const otp = document.getElementById("forgot-otp").value;
    const newPassword = document.getElementById("forgot-password").value;

    if (!email || !otp || !newPassword) {
        Swal.fire({
            toast: true,
            icon: "warning",
            title: "Missing Fields!",
            text: "Please enter OTP and new password.",
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
        });
        return;
    }

    if (newPassword.length < 6) {
        Swal.fire({
            toast: true,
            icon: "warning",
            title: "Weak Password!",
            text: "Password must be at least 6 characters long.",
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
        });
        return;
    }

    try {
        const response = await fetch("http://localhost:8000/api/v1/auth/reset-Password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, otp, password: newPassword }),
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                toast: true,
                icon: "success",
                title: "Password Reset Successful!",
                text: "You can now log in with your new password.",
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
            });

            // Redirect back to login
            setTimeout(() => {
                document.getElementById("forgot-password-form").style.display = "none";
                document.getElementById("login-form").style.display = "block";
            }, 2000);
        } else {
            Swal.fire({
                toast: true,
                icon: "error",
                title: "Reset Failed",
                text: data.message || "Invalid OTP or expired. Try again.",
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
            });
        }
    } catch (error) {
        console.error("Error:", error);
        Swal.fire({
            toast: true,
            icon: "error",
            title: "Error",
            text: "Something went wrong. Try again later.",
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
        });
    }
});
