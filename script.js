document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    // The text to be typed out, with citations removed.
    const text = "A creative problem-solver with a passion for building robust AI/ML solutions and full-stack applications. Specializing in Deep Learning, MLOps, and scalable web systems.";
    let i = 0;
    const speed = 40; // typing speed in milliseconds

    function typeWriter() {
        // Check if there are still characters left to type
        if (i < text.length) {
            // Add the next character to the HTML element
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            // Wait for a set time before typing the next character
            setTimeout(typeWriter, speed);
        }
    }

    // Start the typewriter animation
    typeWriter();
});