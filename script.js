document.addEventListener("DOMContentLoaded", function () {

    const sparkleContainer = document.getElementById("sparkles");

    if (sparkleContainer) {
        sparkleContainer.innerHTML = "";

        const isMobile = window.innerWidth <= 480;

        const sparkleCount = isMobile ? 90 : 130;
        const starCount = isMobile ? 22 : 32;
        const glowCount = isMobile ? 16 : 24;

        // Create golden sparkles
        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement("span");
            sparkle.className = "sparkle";

            const size = Math.random() * 3.5 + 1.5;

            sparkle.style.width = size + "px";
            sparkle.style.height = size + "px";
            sparkle.style.left = Math.random() * 100 + "%";
            sparkle.style.top = Math.random() * 100 + "%";

            sparkle.style.animationDelay =
                Math.random() * 3 + "s";

            sparkle.style.animationDuration =
                (1.2 + Math.random() * 2.5) + "s";

            sparkleContainer.appendChild(sparkle);
        }

        // Create glowing stars
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("span");
            star.className = "star";
            star.textContent = Math.random() > 0.5 ? "✦" : "✧";

            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";

            star.style.fontSize =
                (12 + Math.random() * 12) + "px";

            star.style.animationDelay =
                Math.random() * 4 + "s";

            star.style.animationDuration =
                (2 + Math.random() * 3) + "s";

            sparkleContainer.appendChild(star);
        }

        // Create golden glowing particles
        for (let i = 0; i < glowCount; i++) {
            const glow = document.createElement("span");
            glow.className = "golden-glow";

            glow.style.left = Math.random() * 100 + "%";
            glow.style.top = Math.random() * 100 + "%";

            glow.style.animationDelay =
                Math.random() * 3 + "s";

            sparkleContainer.appendChild(glow);
        }

        // Extra sparkles around the mobile card edges
        if (isMobile) {
            for (let i = 0; i < 24; i++) {
                const edgeSpark = document.createElement("span");
                edgeSpark.className = "sparkle";

                edgeSpark.style.width = "3px";
                edgeSpark.style.height = "3px";

                const leftSide = i % 2 === 0;

                edgeSpark.style.left = leftSide
                    ? (Math.random() * 6) + "%"
                    : (94 + Math.random() * 6) + "%";

                edgeSpark.style.top = Math.random() * 100 + "%";

                edgeSpark.style.animationDelay =
                    Math.random() * 3 + "s";

                sparkleContainer.appendChild(edgeSpark);
            }
        }
    }

    // WhatsApp Button
    const whatsappButton =
        document.getElementById("whatsappBtn");

    if (whatsappButton) {
        whatsappButton.addEventListener("click", function (event) {
            event.preventDefault();

            const whatsappURL =
                "https://wa.me/919723891128?text=I%20received%20my%20Diwali%20Gift%20from%20ArchPlus%20Healthcare.%20Thank%20you!";

            window.open(whatsappURL, "_blank");
        });
    }

});