tailwind.config = {
    theme: {
        extend: {
            colors: {
                'solara-terracotta': '#A55335',
                'solara-orange': '#F4A340',
                'solara-beige': '#F3D6A1',
                'solara-offwhite': '#FDF7EB',
                'solara-gold': '#F4C465',
                'solara-cream': '#FDF7EB'
            },
            fontFamily: {
                serif: ['Georgia', 'serif'],
                sans: ['Inter', 'sans-serif']
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Obrigado pelo seu interesse! Esta é uma demonstração - em um site real, sua mensagem seria enviada para nossa equipe.');
        });
    }

    document.querySelectorAll('button').forEach((button) => {
        if (!button.type || button.type !== 'submit') {
            button.addEventListener('click', function () {
                const buttonText = this.textContent;

                if (buttonText.includes('Conheça') || buttonText.includes('Comprar')) {
                    alert('Redirecionando para a página do produto... (Demo)');
                } else if (buttonText.includes('Saiba Mais')) {
                    const aboutSection = document.querySelector('#sobre');
                    if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } else if (buttonText.includes('Participar')) {
                    alert('Redirecionando para a campanha #SolaraSemFiltro... (Demo)');
                }
            });
        }
    });
});
