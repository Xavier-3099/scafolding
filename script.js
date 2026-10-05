/* =========================
   APEXRISE WEBSITE
   MAIN JAVASCRIPT
========================= */


/* =========================
   MOBILE MENU
========================= */

const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

if (menu && links) {
    menu.addEventListener("click", () => {
        links.classList.toggle("active");
    });

    links.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            links.classList.remove("active");
        });
    });
}


/* =========================
   CONTACT FORM
========================= */

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {

        // Stop the page from refreshing
        event.preventDefault();

        // Create notification
        const notification = document.createElement("div");

        notification.className = "success-notification";

        notification.innerHTML = `
            <div class="success-icon">✓</div>
            <div>
                <strong>Request submitted successfully</strong>
                <p>Thank you. We have received your enquiry and will contact you shortly.</p>
            </div>
        `;

        // Add notification to the page
        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => {
            notification.classList.add("show");
        }, 10);

        // Clear the form
        form.reset();

        // Automatically remove notification after 5 seconds
        setTimeout(() => {
            notification.classList.remove("show");

            setTimeout(() => {
                notification.remove();
            }, 400);

        }, 5000);
    });
}


/* =========================
   CLOSE MOBILE MENU
   WHEN CLICKING OUTSIDE
========================= */

document.addEventListener("click", function (event) {

    if (
        menu &&
        links &&
        !menu.contains(event.target) &&
        !links.contains(event.target)
    ) {
        links.classList.remove("active");
    }

});


/* =========================
   CLOSE MOBILE MENU
   WITH ESCAPE
========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && links) {
        links.classList.remove("active");
    }

});


/* =========================
   SUCCESS NOTIFICATION STYLE
========================= */

const notificationStyle = document.createElement("style");

notificationStyle.textContent = `
    .success-notification {
        position: fixed;
        top: 30px;
        right: 30px;
        width: 380px;
        max-width: calc(100% - 40px);
        padding: 20px 22px;
        background: #ffffff;
        border-left: 5px solid #168a45;
        border-radius: 12px;
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: flex-start;
        gap: 15px;
        z-index: 9999;
        opacity: 0;
        transform: translateY(-20px);
        pointer-events: none;
        transition: opacity 0.4s ease, transform 0.4s ease;
    }

    .success-notification.show {
        opacity: 1;
        transform: translateY(0);
    }

    .success-icon {
        width: 32px;
        height: 32px;
        min-width: 32px;
        background: #168a45;
        color: #ffffff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
    }

    .success-notification strong {
        display: block;
        color: #168a45;
        font-size: 16px;
        margin-bottom: 5px;
    }

    .success-notification p {
        margin: 0;
        color: #555555;
        font-size: 14px;
        line-height: 1.5;
    }

    @media (max-width: 600px) {
        .success-notification {
            top: 20px;
            right: 20px;
            left: 20px;
            width: auto;
            max-width: none;
        }
    }
`;

document.head.appendChild(notificationStyle);