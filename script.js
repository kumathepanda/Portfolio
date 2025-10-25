document.addEventListener('DOMContentLoaded', function() {

    // --- Typewriter Effect ---
    // [PREVIOUS TYPEWRITER CODE REMAINS THE SAME]
    const typewriterElement = document.getElementById('typewriter-hero');
    const roles = [
        'Parth Ramdeo',
        'An AI/ML Enthusiast',
        'A Full-Stack Developer',
        'A Problem-Solver'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const delayBetweenRoles = 1500;

    function typeWriterHero() {
        if (!typewriterElement) return;

        const currentRole = roles[roleIndex];
        let displayText = '';

        if (isDeleting) {
            displayText = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            displayText = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        // Add a non-breaking space if text is empty to maintain height
        typewriterElement.textContent = displayText || '\u00A0';

        let currentSpeed = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
            currentSpeed = delayBetweenRoles;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            currentSpeed = typeSpeed * 2;
        }

        setTimeout(typeWriterHero, currentSpeed);
    }
    if (typewriterElement) {
        // Ensure the element has some initial content or min-height via CSS if needed
        typewriterElement.textContent = '\u00A0'; // Start with non-breaking space
        setTimeout(typeWriterHero, typeSpeed);
    }


    // --- Mobile Menu Toggle ---
    // [PREVIOUS MOBILE MENU CODE REMAINS THE SAME]
    const navToggle = document.getElementById('nav-toggle');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    if (navToggle && menuOverlay && menuIconOpen && menuIconClose) {
        navToggle.addEventListener('click', () => {
            menuOverlay.classList.toggle('hidden');
            menuIconOpen.classList.toggle('hidden');
            menuIconClose.classList.toggle('hidden');
        });
        menuOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuOverlay.classList.add('hidden');
                menuIconOpen.classList.remove('hidden');
                menuIconClose.classList.add('hidden');
            });
        });
    }


    // --- Infinite Skill Scroller ---
    const skills = [
        // Languages
        { image: './images/python.png', skill: 'Python' },
        { image: './images/c++.png', skill: 'C++' },
        { image: './images/sql.png', skill: 'SQL' },
        { image: './images/html-css.png', skill: 'HTML/CSS' },
        // Data Science & ML
        { image: './images/scikit.png', skill: 'scikit-learn' },
        { image: './images/pandas.png', skill: 'Pandas' },
        { image: './images/numpy.png', skill: 'NumPy' },
        { image: './images/tensorflow.png', skill: 'TensorFlow' },
        { image: './images/keras.png', skill: 'Keras' },
        { image: './images/langchain.png', skill: 'LangChain' },
        // Backend & Frontend
        { image: './images/flask.png', skill: 'Flask' },
        { image: './images/streamlit.png', skill: 'Streamlit' },
        { image: './images/bootstrap.png', skill: 'Bootstrap' },
        // Databases
        { image: './images/mysql.png', skill: 'MySQL' },
        // Core CS
        { image: './images/dsa.png', skill: 'DSA' },
        { image: './images/os.png', skill: 'OS' },
        { image: './images/oops.png', skill: 'OOPs' },
        { image: './images/dbms.png', skill: 'DBMS' },
        // Tools
        { image: './images/git.png', skill: 'Git' },
        { image: './images/github.png', skill: 'GitHub' },
        { image: './images/postman.png', skill: 'Postman' },
        { image: './images/vscode.png', skill: 'VS Code' },
        { image: './images/colab.png', skill: 'Google Colab' },
        { image: './images/docker.png', skill: 'Docker' },
    ];

    const skillsContainer = document.querySelector('.skills-container');

    if (skillsContainer) {
        // Clear previous skills (important for recalculation if needed)
        skillsContainer.innerHTML = '';

        // Function to create and append skill elements
        const populateSkills = (skillList) => {
            skillList.forEach(skill => {
                const skillDiv = document.createElement('div');
                // Ensure consistent spacing and width affects calculation
                skillDiv.className = 'flex-shrink-0 mx-4 w-[120px] text-center skill-card';
                skillDiv.innerHTML = `
                    <img src="${skill.image}" alt="${skill.skill}" height="100" width="100" class="mx-auto h-[100px] w-[100px] object-contain pointer-events-none">
                    <p class="text-sm pt-2 text-[#ADB7BE] font-medium">${skill.skill}</p>
                `;
                skillsContainer.appendChild(skillDiv);
            });
        };

        // Populate first set
        populateSkills(skills);

        // --- Calculate width AFTER first set is rendered ---
        // We need the browser to calculate the layout first
        requestAnimationFrame(() => {
            let totalWidthOneSet = 0;
            const skillCards = skillsContainer.querySelectorAll('.skill-card');

            if(skillCards.length > 0) {
                 // Calculate width including margins
                 skillCards.forEach(card => {
                    const style = window.getComputedStyle(card);
                    const marginLeft = parseFloat(style.marginLeft) || 0;
                    const marginRight = parseFloat(style.marginRight) || 0;
                    totalWidthOneSet += card.offsetWidth + marginLeft + marginRight;
                 });

                 console.log("Calculated width of one set:", totalWidthOneSet); // Debugging log

                // Set the CSS variable for the animation
                skillsContainer.style.setProperty('--scroll-width', `-${totalWidthOneSet}px`);

                // Now populate the second set for seamless loop
                populateSkills(skills);

            } else {
                 console.error("No skill cards found to calculate width.");
            }
        });


    } else {
        console.error("'.skills-container' element not found!");
    }


    // --- Download CV ---
    // [PREVIOUS DOWNLOAD CV CODE REMAINS THE SAME]
    const downloadBtn = document.getElementById('download-cv');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            try {
                 saveAs("Parth_Resume.pdf", "Parth_Ramdeo_Resume.pdf");
            } catch (e) {
                console.error("Error downloading CV:", e);
                alert("Could not download the CV. Please ensure the file 'Parth_Resume.pdf' exists in the project root.");
            }
        });
    }


    // --- Contact Form ---
    // [PREVIOUS CONTACT FORM CODE REMAINS THE SAME]
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    const messagePopup = document.getElementById('message-popup');

    if (contactForm && formFeedback && messagePopup) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            formFeedback.textContent = '';
            formFeedback.className = 'mt-4 text-center text-sm font-medium'; // Reset

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: json
                });
                const result = await response.json();

                if (result.success) {
                    contactForm.reset();
                    messagePopup.classList.remove('hidden');
                    requestAnimationFrame(() => {
                        messagePopup.classList.remove('opacity-0');
                        messagePopup.classList.add('opacity-100');
                    });
                    setTimeout(() => {
                         messagePopup.classList.remove('opacity-100');
                         messagePopup.classList.add('opacity-0');
                         setTimeout(() => messagePopup.classList.add('hidden'), 500);
                    }, 3000);
                } else {
                    console.error("Form submission error:", result.message);
                    formFeedback.textContent = result.message || 'Something went wrong.';
                    formFeedback.classList.add('text-red-400');
                }
            } catch (error) {
                console.error("Network or fetch error:", error);
                formFeedback.textContent = 'Could not send message. Check network connection or API key.';
                formFeedback.classList.add('text-red-400');
            } finally {
                 submitButton.disabled = false;
                 submitButton.textContent = originalButtonText;
            }
        });
    } else {
        console.error("Contact form elements not found!");
    }


    // --- Update Footer Year ---
    // [PREVIOUS FOOTER YEAR CODE REMAINS THE SAME]
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});