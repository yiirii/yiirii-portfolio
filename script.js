document.addEventListener('DOMContentLoaded', () => {

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;
    
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const navLinks = document.querySelector('.nav-links');

    const preferredTheme = localStorage.getItem('theme');
    if (preferredTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    menuToggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggleBtn.classList.toggle('active');document.addEventListener('DOMContentLoaded', () => {

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;
    
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const navLinks = document.querySelector('.nav-links');

    const preferredTheme = localStorage.getItem('theme');
    if (preferredTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    menuToggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggleBtn.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggleBtn.classList.remove('active');
        });
    });

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    const copyButtons = document.querySelectorAll('.copy-btn');
    const toast = document.getElementById('copy-toast');
    let toastTimeout;

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = button.dataset.copy;
            
            const tempTextarea = document.createElement('textarea');
            tempTextarea.value = textToCopy;
            tempTextarea.style.position = 'absolute';
            tempTextarea.style.left = '-9999px';
            document.body.appendChild(tempTextarea);
            
            tempTextarea.select();
            tempTextarea.setSelectionRange(0, 99999);
            
            try {
                document.execCommand('copy');
                showToast();
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
            
            document.body.removeChild(tempTextarea);
        });
    });

    function showToast() {
        clearTimeout(toastTimeout);
        toast.classList.add('show');
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

});


    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggleBtn.classList.remove('active');
        });
    });

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});