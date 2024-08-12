const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('open');
        menuBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        menuBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    });