let offcanvasSlider;
let mobileSwiper;
const offcanvas = document.getElementById('portfolioOffcanvas');
const closeOffcanvas = document.querySelector('.close-offcanvas');
const offcanvasTitle = document.getElementById('offcanvasTitle');
const offcanvasDetails = document.getElementById('offcanvasDetails');
const offcanvasSwiper = document.getElementById('offcanvasSwiper');
const bottomSheet = document.getElementById('portfolioBottomSheet');
const closeBottomSheet = document.querySelector('.close-bottom-sheet');
const bottomSheetTitle = document.getElementById('bottomSheetTitle');
const bottomSheetDetails = document.getElementById('bottomSheetDetails');
const bottomSheetSwiper = document.getElementById('bottomSheetSwiper');

document.addEventListener('DOMContentLoaded', function() {
    // Populate navigation
    const navLinks = document.getElementById('navLinks');
    portfolioData.navigation.forEach(item => {
        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = item.name;
        navLinks.appendChild(link);
    });

    // Populate hero section
    const heroContent = document.getElementById('heroContent');
    heroContent.innerHTML = `
        <div class="profile-img">
            <img src="${portfolioData.personal.profileImg}" alt="${portfolioData.personal.name}">
        </div>
        <div class="hero-text">
            <h1>${portfolioData.personal.name}</h1>
            <h2>${portfolioData.personal.title}</h2>
            <p>${portfolioData.personal.bio}</p>
            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span><a href="${portfolioData.personal.contact.phoneLink}" target="_blank">${portfolioData.personal.contact.phone}</a></span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span><a href="${portfolioData.personal.contact.emailLink}" target="_blank">${portfolioData.personal.contact.email}</a></span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span><a href="${portfolioData.personal.contact.locationLink}" target="_blank">${portfolioData.personal.contact.location}</a></span>
                </div>
            </div>
        </div>
    `;

    // Populate skills
    const skillsContainer = document.getElementById('skillsContainer');
    portfolioData.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <img src="${skill.icon}" alt="${skill.name}">
            <span>${skill.name}</span>
        `;
        skillsContainer.appendChild(skillItem);
    });

    // Populate experience
    const experienceTimeline = document.getElementById('experienceTimeline');
    portfolioData.experience.forEach(job => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const responsibilitiesList = job.responsibilities.map(responsibility => 
            `<li>${responsibility}</li>`
        ).join('');
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${job.title}</h3>
                <h4>${job.company}</h4>
                <div class="small-text">${job.period} | ${job.location}</div>
                <ul>${responsibilitiesList}</ul>
            </div>
        `;
        experienceTimeline.appendChild(timelineItem);
    });

    // Populate portfolio
    const portfolioContainer = document.getElementById('portfolioContainer');
    Object.values(portfolioData.projects).forEach(project => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-id', project.id);
        
        const tagsList = project.tags.map(tag => 
            `<span class="portfolio-tag">${tag}</span>`
        ).join('');
        
        portfolioItem.innerHTML = `
            <div class="portfolio-img">
                <img src="${project.thumbnail}" alt="${project.title}">
            </div>
            <div class="portfolio-content">
                <h3>${project.title}</h3>
                <p>${project.shortDescription}</p>
                <div class="portfolio-tags">${tagsList}</div>
            </div>
        `;
        portfolioContainer.appendChild(portfolioItem);
    });

    // Populate footer
    const footerContent = document.getElementById('footerContent');
    const interestsList = portfolioData.personal.interests.join(', ');
    
    footerContent.innerHTML = `
        <p>${portfolioData.personal.name} | ${portfolioData.personal.title}</p>
        <div class="social-links">
            <a href="${portfolioData.personal.social.github}" aria-label="GitHub" target="_blank"><i class="fab fa-github"></i></a>
            <a href="${portfolioData.personal.social.linkedin}" aria-label="LinkedIn" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="${portfolioData.personal.social.instagram}" aria-label="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
        <p>Minat: ${interestsList}</p>
    `;
});

// Toggle dark mode
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Check if device is mobile
function isMobile() {
    return window.innerWidth < 768;
}

// Portfolio item click handler
document.addEventListener('click', function(e) {
    const portfolioItem = e.target.closest('.portfolio-item');
    if (!portfolioItem) return;
    
    const projectId = portfolioItem.getAttribute('data-id');
    const project = portfolioData.projects[projectId];
    
    if (project) {
        if (isMobile()) {
            showBottomSheet(project);
        } else {
            showOffcanvas(project);
        }
    }
});

function showOffcanvas(project) {
    offcanvasTitle.textContent = project.title;
    offcanvasDetails.innerHTML = project.details;

    offcanvasSwiper.innerHTML = '';
    project.images.forEach(img => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<img src="${img}" alt="${project.title}">`;
        offcanvasSwiper.appendChild(slide);
    });
    
    if (offcanvasSlider) offcanvasSlider.destroy();
    
    offcanvasSlider = new Swiper('.offcanvas-swiper', {
        loop: true,
        pagination: { el: '.offcanvas-swiper .swiper-pagination', clickable: true },
        navigation: { 
            nextEl: '.offcanvas-swiper .swiper-button-next', 
            prevEl: '.offcanvas-swiper .swiper-button-prev' 
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    });
    
    offcanvas.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showBottomSheet(project) {
    bottomSheetTitle.textContent = project.title;
    bottomSheetDetails.innerHTML = project.details;
    
    bottomSheetSwiper.innerHTML = '';
    project.images.forEach(img => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<img src="${img}" alt="${project.title}" style="width: 100%; height: auto;">`;
        bottomSheetSwiper.appendChild(slide);
    });
    
    if (mobileSwiper) mobileSwiper.destroy();
    
    mobileSwiper = new Swiper('.bottom-sheet-swiper', {
        loop: true,
        pagination: { el: '.bottom-sheet-swiper .swiper-pagination', clickable: true }
    });
    
    bottomSheet.classList.add('active');
    document.body.style.overflow = 'hidden';
}

closeOffcanvas.addEventListener('click', () => {
    offcanvas.classList.remove('active');
    document.body.style.overflow = 'auto';
});

closeBottomSheet.addEventListener('click', () => {
    bottomSheet.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Handle resize events to close offcanvas or bottom sheet
window.addEventListener('resize', function() {
    if (offcanvas.classList.contains('active') || bottomSheet.classList.contains('active')) {
        offcanvas.classList.remove('active');
        bottomSheet.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});