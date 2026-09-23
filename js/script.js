/* =========================================
   NEXORA - JAVASCRIPT
   ========================================= */


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

function toggleMenu() {

    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.querySelector(".menu-toggle");

    if (!navLinks) {
        return;
    }

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    } else {

        navLinks.style.display = "flex";

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );
        }
    }
}


/* =========================================
   CONTACT FORM VALIDATION
   ========================================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const fullName =
                document.getElementById("fullName");

            const email =
                document.getElementById("email");

            const service =
                document.getElementById("service");

            const message =
                document.getElementById("message");

            const fullNameError =
                document.getElementById("fullNameError");

            const emailError =
                document.getElementById("emailError");

            const serviceError =
                document.getElementById("serviceError");

            const messageError =
                document.getElementById("messageError");

            const formSuccess =
                document.getElementById("formSuccess");


            if (fullNameError) {
                fullNameError.textContent = "";
            }

            if (emailError) {
                emailError.textContent = "";
            }

            if (serviceError) {
                serviceError.textContent = "";
            }

            if (messageError) {
                messageError.textContent = "";
            }

            if (formSuccess) {
                formSuccess.textContent = "";
            }


            let isValid = true;


            /* Full Name */

            if (
                fullName &&
                fullName.value.trim() === ""
            ) {

                if (fullNameError) {
                    fullNameError.textContent =
                        "Please enter your full name.";
                }

                isValid = false;
            }


            /* Email */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (
                email &&
                email.value.trim() === ""
            ) {

                if (emailError) {
                    emailError.textContent =
                        "Please enter your email address.";
                }

                isValid = false;

            } else if (
                email &&
                !emailPattern.test(email.value.trim())
            ) {

                if (emailError) {
                    emailError.textContent =
                        "Please enter a valid email address.";
                }

                isValid = false;
            }


            /* Service */

            if (
                service &&
                service.value === ""
            ) {

                if (serviceError) {
                    serviceError.textContent =
                        "Please select a service.";
                }

                isValid = false;
            }


            /* Message */

            if (
                message &&
                message.value.trim() === ""
            ) {

                if (messageError) {
                    messageError.textContent =
                        "Please enter your message.";
                }

                isValid = false;

            } else if (
                message &&
                message.value.trim().length < 10
            ) {

                if (messageError) {
                    messageError.textContent =
                        "Message should contain at least 10 characters.";
                }

                isValid = false;
            }


            /* Success */

            if (isValid) {

                if (formSuccess) {
                    formSuccess.textContent =
                        "Thank you! Your inquiry has been received. This demo form does not send data to a server.";
                }

                contactForm.reset();
            }

        }
    );
}


/* =========================================
   BUTTON INTERACTION
   ========================================= */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            button.style.transform =
                "scale(0.97)";

            setTimeout(function () {

                button.style.transform = "";

            }, 120);

        }
    );

});


/* =========================================
   CURRENT YEAR
   ========================================= */

const footerYear =
    document.querySelector(".footer-bottom p");

if (footerYear) {

    footerYear.innerHTML =
        `© ${new Date().getFullYear()} NEXORA. All rights reserved.`;

}