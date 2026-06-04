/**
 * ==========================================
 * Main JS for Gus Landscapes Redesign Exploration
 * Handlers for dynamic theme switcher, before/after image sliders,
 * cursor-following spotlights, and fade animations.
 * ==========================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject the floating concept switcher automatically
    injectSwitcher();

    // 2. Initialize before-and-after sliders (Concept 1 & general)
    initBeforeAfterSliders();

    // 3. Initialize brutalist spotlight effects (Concept 3)
    if (document.body.classList.contains('theme-brutalist')) {
        initSpotlightTracking();
        initCustomCursor();
        adjustVideoSpeed();
    }

    // 4. Initialize scroll animations
    initScrollReveal();
});

/**
 * Dynamically injects the visual exploration theme switcher at the bottom of the viewport
 */
function injectSwitcher() {
    const switcherContainer = document.createElement('div');
    switcherContainer.className = 'concept-switcher-container';
    
    // Detect which page is currently active
    const path = window.location.pathname;
    const pageName = path.split('/').pop() || 'index.html';
    
    const isHub = pageName === 'index.html' || pageName === '';
    const isC1 = pageName === 'concept1.html' || pageName.startsWith('project-');
    const isC2 = pageName === 'concept2.html';
    const isC3 = pageName === 'concept3.html';
    
    // Set appropriate body class for styling adjustments
    if (isC1) document.body.classList.add('theme-museum');
    if (isC2) document.body.classList.add('theme-cinema');
    if (isC3) document.body.classList.add('theme-brutalist');

    switcherContainer.innerHTML = `
        <div class="concept-switcher">
            <span class="concept-switcher-label">Explore Concept</span>
            <a href="index.html" class="concept-switcher-btn ${isHub ? 'active' : ''}">Overview</a>
            <a href="concept1.html" class="concept-switcher-btn active-museum ${isC1 ? 'active' : ''}">01. The Museum</a>
            <a href="concept2.html" class="concept-switcher-btn active-cinema ${isC2 ? 'active' : ''}">02. Cinematic Canvas</a>
            <a href="concept3.html" class="concept-switcher-btn active-brutalist ${isC3 ? 'active' : ''}">03. Modern Brutalist</a>
        </div>
    `;
    
    document.body.appendChild(switcherContainer);
}

/**
 * Sets up custom before-and-after image slider controls
 */
function initBeforeAfterSliders() {
    const sliders = document.querySelectorAll('.before-after-slider');
    
    sliders.forEach(slider => {
        const container = slider.querySelector('.slider-container');
        const beforeImg = slider.querySelector('.img-before');
        const handle = slider.querySelector('.slider-handle');
        
        if (!container || !beforeImg || !handle) return;
        
        let isDragging = false;
        
        const updateSlider = (clientX) => {
            const rect = container.getBoundingClientRect();
            const x = clientX - rect.left;
            let percentage = (x / rect.width) * 100;
            
            // Constrain between 0% and 100%
            if (percentage < 0) percentage = 0;
            if (percentage > 100) percentage = 100;
            
            beforeImg.style.width = `${percentage}%`;
            handle.style.left = `${percentage}%`;
        };
        
        // Mouse Events
        handle.addEventListener('mousedown', (e) => {
            isDragging = true;
            e.preventDefault();
        });
        
        window.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            updateSlider(e.clientX);
        });
        
        // Touch Events (Mobile Support)
        handle.addEventListener('touchstart', (e) => {
            isDragging = true;
        });
        
        window.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        window.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            if (e.touches.length > 0) {
                updateSlider(e.touches[0].clientX);
            }
        });

        // Click directly on slider to jump
        container.addEventListener('click', (e) => {
            if (e.target === handle) return; // Let handle drag take priority
            updateSlider(e.clientX);
        });
    });
}

/**
 * Handles cursor spotlight highlights (radial gradients) on Brutalist concept
 */
function initSpotlightTracking() {
    const spotlights = document.querySelectorAll('.spotlight-glow');
    
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        spotlights.forEach(spotlight => {
            // Put spotlight at center of cursor relative to viewport
            spotlight.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
        });
    });
}

/**
 * Applies CSS class triggers on scroll to create fluid animation entry points
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Once revealed, no need to observe again
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(revealCallback, {
        root: null, // Viewport
        threshold: 0.1, // 10% visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it enters screen
    });
    
    revealElements.forEach(el => observer.observe(el));
}

/**
 * Custom micro-cursor dot & circle lagging animation trackers
 */
function initCustomCursor() {
    const dot = document.querySelector('.custom-cursor-dot');
    const circle = document.querySelector('.custom-cursor-circle');
    if (!dot || !circle) return;

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Dot tracking
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
        dot.style.opacity = '1';
        circle.style.opacity = '1';
    });

    // Lag calculation
    const tick = () => {
        circleX += (mouseX - circleX) * 0.15;
        circleY += (mouseY - circleY) * 0.15;

        circle.style.left = `${circleX}px`;
        circle.style.top = `${circleY}px`;

        requestAnimationFrame(tick);
    };
    tick();

    // Expand on hover
    const hoverables = document.querySelectorAll('a, button, select, textarea, input, .slider-handle');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            circle.classList.add('cursor-hover');
            dot.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            circle.classList.remove('cursor-hover');
            dot.classList.remove('cursor-hover');
        });
    });

    // Hide on mouseleave window
    document.addEventListener('mouseleave', () => {
        dot.style.opacity = '0';
        circle.style.opacity = '0';
    });
}

/**
 * Adjust video speed to play slowly and smoothly
 */
function adjustVideoSpeed() {
    const videos = document.querySelectorAll('.hero-video-bg, .process-video-bg');
    videos.forEach(video => {
        video.playbackRate = 0.5; // Smooth cinematic speed
        
        // Ensure play speed remains consistent on video loop resets
        video.addEventListener('play', () => {
            video.playbackRate = 0.5;
        });
    });
}
