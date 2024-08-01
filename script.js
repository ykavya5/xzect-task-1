document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.section-price-table__tab');
    const tabContents = document.querySelectorAll('.section-price-table__content-inner');
    const slide = document.querySelector('.slide');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and content
            tabs.forEach(tab => tab.classList.remove('tab-active'));
            tabContents.forEach(content => content.classList.remove('content-active'));

            // Add active class to the clicked tab and corresponding content
            tab.classList.add('tab-active');
            tabContents[index].classList.add('content-active');

            // Move slide to the clicked tab
            const slideWidth = slide.offsetWidth;
            slide.style.transform = `translateX(${slideWidth * index}px)`;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const faqRows = document.querySelectorAll('.section-faq__row');

    faqRows.forEach(row => {
        row.querySelector('.section-faq__title').addEventListener('click', () => {
            row.classList.toggle('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');

    // Check local storage for theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggle.checked = true;
        }
    }

    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBar = document.querySelector(".hamburger-bar");
    const menuContent = document.querySelector(".menu-content");
    const closeMenu = document.querySelector(".close-menu");

    function toggleMenu() {
        menuContent.classList.toggle("show");
        document.body.classList.toggle("no-scroll");
    }

    function closeMenuFunction() {
        menuContent.classList.remove("show");
        document.body.classList.remove("no-scroll");
    }

    hamburgerBar.addEventListener("click", toggleMenu);
    closeMenu.addEventListener("click", closeMenuFunction);

    document.addEventListener("click", function (event) {
        if (!hamburgerBar.contains(event.target) && !menuContent.contains(event.target)) {
            closeMenuFunction();
        }
    });
});




   
    
