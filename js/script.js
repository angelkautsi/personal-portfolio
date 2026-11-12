document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });


    // TYPEWRITER EFFECT

    const typingElement = document.querySelector(".typing-text");

    if (typingElement) {
        const originalText = typingElement.textContent.trim();

        typingElement.textContent = "";

        let characterIndex = 0;

        function typeText() {
            if (characterIndex < originalText.length) {
                typingElement.textContent += originalText.charAt(characterIndex);
                characterIndex++;

                setTimeout(typeText, 90);
            }
        }

        typeText();
    }

});