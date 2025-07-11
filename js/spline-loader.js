import { Application } from '@splinetool/runtime';

// Initialize Spline scene
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas3d');
    
    if (canvas) {
        console.log('Canvas found, loading Spline scene...');
        
        const app = new Application(canvas);
        app.load('https://prod.spline.design/8-uqC0vc1GSrJQDN/scene.splinecode')
            .then(() => {
                console.log('Spline scene loaded successfully');
                // Hide any loading indicators if needed
                canvas.style.opacity = '1';
            })
            .catch((error) => {
                console.error('Error loading Spline scene:', error);
                // Fallback: show original background image if Spline fails to load
                const heroSection = document.querySelector('.hero');
                if (heroSection) {
                    heroSection.style.backgroundImage = 'url(images/hero-2xl.webp)';
                    heroSection.style.backgroundSize = 'cover';
                    heroSection.style.backgroundPosition = 'center';
                    canvas.style.display = 'none';
                }
            });
    } else {
        console.error('Canvas element not found');
    }
});