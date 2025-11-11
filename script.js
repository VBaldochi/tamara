// ===== MENU TOGGLE =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// ===== SCROLL HEADER =====
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
}
window.addEventListener('scroll', scrollHeader);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector('.nav-link[href*=' + sectionId + ']');

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

// ===== FORM SUBMISSION =====
const contatoForm = document.getElementById('contato-form');

if (contatoForm) {
    contatoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const empresa = document.getElementById('empresa').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Formatar mensagem para WhatsApp
        const whatsappMessage = `*Nova mensagem do site*%0A%0A` +
                               `*Nome:* ${nome}%0A` +
                               `*Empresa:* ${empresa}%0A` +
                               `*E-mail:* ${email}%0A` +
                               `*Telefone:* ${telefone}%0A%0A` +
                               `*Mensagem:*%0A${mensagem}`;
        
        // Redirecionar para WhatsApp
        const whatsappNumber = '5516991591785';
        const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
        
        window.open(whatsappURL, '_blank');
        
        // Limpar formulário
        contatoForm.reset();
    });
}

// ===== SCROLL REVEAL ANIMATION =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
const animateElements = document.querySelectorAll('.servico-card, .cliente-card, .time-member, .missao-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', function() {
    const heroCircle = document.querySelector('.hero-circle');
    if (heroCircle) {
        const scrolled = window.pageYOffset;
        heroCircle.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

console.log('Tamara Marketing Digital - Website carregado com sucesso!');
