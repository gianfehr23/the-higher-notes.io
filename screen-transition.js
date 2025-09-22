// ===== SCREEN TRANSITION EFFECTS =====

class ScreenTransition {
    constructor() {
        this.isTransitioning = false;
        this.transitionContainer = null;
        this.init();
    }
    
    init() {
        this.createTransitionContainer();
        console.log('Screen Transition effects initialized');
    }
    
    createTransitionContainer() {
        // Create overlay container for transition effects
        this.transitionContainer = document.createElement('div');
        this.transitionContainer.id = 'screen-transition';
        this.transitionContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 9999;
            overflow: hidden;
        `;
        document.body.appendChild(this.transitionContainer);
    }
    
    async playNowTransition() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        
        // Add explosion to interactive background
        const playBtn = document.getElementById('play-now-btn');
        const rect = playBtn ? playBtn.getBoundingClientRect() : { 
            left: window.innerWidth / 2, 
            top: window.innerHeight / 2 
        };
        const centerX = rect.left + (rect.width / 2);
        const centerY = rect.top + (rect.height / 2);
        
        if (window.interactiveBackground) {
            window.interactiveBackground.addExplosion(centerX, centerY);
            window.interactiveBackground.setIntensity(1.0);
        }
        
        // Create smooth fade overlay
        this.createSmoothFade();
        
        // Create multiple layered effects with smoother timing
        await Promise.all([
            this.createSmoothRipples(),
            this.createGentleParticles(),
            this.createSoftColorWash(),
            this.createElegantSpotifyPulse(),
            this.createFloatingNotes()
        ]);
        
        // Wait for transition to complete
        setTimeout(() => {
            this.cleanup();
            if (window.interactiveBackground) {
                window.interactiveBackground.setIntensity(0.5);
            }
            this.isTransitioning = false;
        }, 2500);
    }
    
    createRippleWave() {
        return new Promise((resolve) => {
            // Get Play Now button position
            const playBtn = document.getElementById('play-now-btn');
            const rect = playBtn ? playBtn.getBoundingClientRect() : { 
                left: window.innerWidth / 2, 
                top: window.innerHeight / 2 
            };
            
            const centerX = rect.left + (rect.width / 2);
            const centerY = rect.top + (rect.height / 2);
            
            // Create multiple ripple waves
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const ripple = document.createElement('div');
                    ripple.className = 'transition-ripple';
                    ripple.style.cssText = `
                        position: absolute;
                        left: ${centerX}px;
                        top: ${centerY}px;
                        width: 20px;
                        height: 20px;
                        border: 3px solid rgba(30, 215, 96, ${0.8 - i * 0.15});
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        animation: rippleExpand 1.5s ease-out forwards;
                        animation-delay: ${i * 0.1}s;
                    `;
                    
                    this.transitionContainer.appendChild(ripple);
                }, i * 100);
            }
            
            setTimeout(resolve, 1500);
        });
    }
    
    createParticleExplosion() {
        return new Promise((resolve) => {
            const playBtn = document.getElementById('play-now-btn');
            const rect = playBtn ? playBtn.getBoundingClientRect() : { 
                left: window.innerWidth / 2, 
                top: window.innerHeight / 2 
            };
            
            const centerX = rect.left + (rect.width / 2);
            const centerY = rect.top + (rect.height / 2);
            
            // Create particle explosion
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                const angle = (i / 30) * Math.PI * 2;
                const velocity = 200 + Math.random() * 300;
                
                particle.className = 'transition-particle';
                particle.style.cssText = `
                    position: absolute;
                    left: ${centerX}px;
                    top: ${centerY}px;
                    width: ${4 + Math.random() * 8}px;
                    height: ${4 + Math.random() * 8}px;
                    background: ${Math.random() > 0.5 ? '#1ED760' : '#6366f1'};
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    animation: particleExplode 1.2s ease-out forwards;
                    --angle: ${angle}rad;
                    --velocity: ${velocity}px;
                `;
                
                this.transitionContainer.appendChild(particle);
            }
            
            setTimeout(resolve, 1200);
        });
    }
    
    createColorWash() {
        return new Promise((resolve) => {
            const colorWash = document.createElement('div');
            colorWash.className = 'color-wash';
            colorWash.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle at center, 
                    rgba(30, 215, 96, 0.3) 0%, 
                    rgba(99, 102, 241, 0.2) 50%, 
                    transparent 100%);
                opacity: 0;
                animation: colorWashPulse 1.5s ease-in-out forwards;
            `;
            
            this.transitionContainer.appendChild(colorWash);
            
            setTimeout(resolve, 1500);
        });
    }
    
    createSpotifyPulse() {
        return new Promise((resolve) => {
            // Create giant Spotify logo that pulses
            const spotifyPulse = document.createElement('div');
            spotifyPulse.innerHTML = `
                <svg viewBox="0 0 24 24" fill="currentColor" style="width: 100%; height: 100%;">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
            `;
            
            spotifyPulse.className = 'spotify-pulse';
            spotifyPulse.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 200px;
                height: 200px;
                color: rgba(30, 215, 96, 0.1);
                transform: translate(-50%, -50%) scale(0);
                animation: spotifyPulseGrow 1.8s ease-out forwards;
            `;
            
            this.transitionContainer.appendChild(spotifyPulse);
            
            setTimeout(resolve, 1800);
        });
    }
    
    createMusicNotes() {
        return new Promise((resolve) => {
            const notes = ['♪', '♫', '♬', '♩', '𝄞'];
            
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const note = document.createElement('div');
                    note.textContent = notes[Math.floor(Math.random() * notes.length)];
                    note.className = 'transition-note';
                    note.style.cssText = `
                        position: absolute;
                        left: ${Math.random() * 100}%;
                        top: ${Math.random() * 100}%;
                        font-size: ${20 + Math.random() * 30}px;
                        color: rgba(30, 215, 96, 0.7);
                        pointer-events: none;
                        animation: noteFloat 2s ease-out forwards;
                        animation-delay: ${Math.random() * 0.5}s;
                    `;
                    
                    this.transitionContainer.appendChild(note);
                }, i * 50);
            }
            
            setTimeout(resolve, 2000);
        });
    }
    
    createSmoothFade() {
        const fade = document.createElement('div');
        fade.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, 
                rgba(10, 10, 10, 0.1) 0%, 
                rgba(10, 10, 10, 0.3) 50%, 
                rgba(10, 10, 10, 0.6) 100%);
            opacity: 0;
            animation: smoothFadeIn 2.5s ease-in-out forwards;
        `;
        
        this.transitionContainer.appendChild(fade);
    }
    
    createSmoothRipples() {
        return new Promise((resolve) => {
            const playBtn = document.getElementById('play-now-btn');
            const rect = playBtn ? playBtn.getBoundingClientRect() : { 
                left: window.innerWidth / 2, 
                top: window.innerHeight / 2 
            };
            
            const centerX = rect.left + (rect.width / 2);
            const centerY = rect.top + (rect.height / 2);
            
            // Create fewer, more elegant ripples
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const ripple = document.createElement('div');
                    ripple.className = 'smooth-ripple';
                    ripple.style.cssText = `
                        position: absolute;
                        left: ${centerX}px;
                        top: ${centerY}px;
                        width: 10px;
                        height: 10px;
                        border: 2px solid rgba(30, 215, 96, ${0.6 - i * 0.2});
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        animation: smoothRippleExpand 2s ease-out forwards;
                        animation-delay: ${i * 0.3}s;
                    `;
                    
                    this.transitionContainer.appendChild(ripple);
                }, i * 200);
            }
            
            setTimeout(resolve, 2000);
        });
    }
    
    createGentleParticles() {
        return new Promise((resolve) => {
            const playBtn = document.getElementById('play-now-btn');
            const rect = playBtn ? playBtn.getBoundingClientRect() : { 
                left: window.innerWidth / 2, 
                top: window.innerHeight / 2 
            };
            
            const centerX = rect.left + (rect.width / 2);
            const centerY = rect.top + (rect.height / 2);
            
            // Create fewer, more elegant particles
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    const angle = (i / 15) * Math.PI * 2;
                    const velocity = 100 + Math.random() * 150;
                    
                    particle.className = 'gentle-particle';
                    particle.style.cssText = `
                        position: absolute;
                        left: ${centerX}px;
                        top: ${centerY}px;
                        width: ${3 + Math.random() * 4}px;
                        height: ${3 + Math.random() * 4}px;
                        background: radial-gradient(circle, 
                            ${Math.random() > 0.5 ? '#1ED760' : '#6366f1'} 0%, 
                            transparent 70%);
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        animation: gentleParticleFloat 2s ease-out forwards;
                        --angle: ${angle}rad;
                        --velocity: ${velocity}px;
                        opacity: 0.8;
                    `;
                    
                    this.transitionContainer.appendChild(particle);
                }, i * 100);
            }
            
            setTimeout(resolve, 2000);
        });
    }
    
    createSoftColorWash() {
        return new Promise((resolve) => {
            const colorWash = document.createElement('div');
            colorWash.className = 'soft-color-wash';
            colorWash.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(ellipse at center, 
                    rgba(30, 215, 96, 0.15) 0%, 
                    rgba(99, 102, 241, 0.1) 40%, 
                    rgba(30, 215, 96, 0.05) 70%,
                    transparent 100%);
                opacity: 0;
                animation: softColorPulse 2.2s ease-in-out forwards;
            `;
            
            this.transitionContainer.appendChild(colorWash);
            
            setTimeout(resolve, 2200);
        });
    }
    
    createElegantSpotifyPulse() {
        return new Promise((resolve) => {
            const spotifyPulse = document.createElement('div');
            spotifyPulse.innerHTML = `
                <svg viewBox="0 0 24 24" fill="currentColor" style="width: 100%; height: 100%;">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
            `;
            
            spotifyPulse.className = 'elegant-spotify-pulse';
            spotifyPulse.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 120px;
                height: 120px;
                color: rgba(30, 215, 96, 0.2);
                transform: translate(-50%, -50%) scale(0);
                animation: elegantSpotifyGrow 2.5s ease-out forwards;
                filter: blur(0.5px);
            `;
            
            this.transitionContainer.appendChild(spotifyPulse);
            
            setTimeout(resolve, 2500);
        });
    }
    
    createFloatingNotes() {
        return new Promise((resolve) => {
            const notes = ['♪', '♫', '♬', '♩', '𝄞'];
            
            for (let i = 0; i < 12; i++) {
                setTimeout(() => {
                    const note = document.createElement('div');
                    note.textContent = notes[Math.floor(Math.random() * notes.length)];
                    note.className = 'floating-note';
                    note.style.cssText = `
                        position: absolute;
                        left: ${20 + Math.random() * 60}%;
                        top: ${20 + Math.random() * 60}%;
                        font-size: ${16 + Math.random() * 20}px;
                        color: rgba(30, 215, 96, 0.6);
                        pointer-events: none;
                        animation: elegantNoteFloat 3s ease-out forwards;
                        animation-delay: ${Math.random() * 1}s;
                        filter: blur(0.3px);
                    `;
                    
                    this.transitionContainer.appendChild(note);
                }, i * 150);
            }
            
            setTimeout(resolve, 3000);
        });
    }
    
    createScreenFlash() {
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, 
                rgba(30, 215, 96, 0.8) 0%, 
                rgba(255, 255, 255, 0.9) 50%, 
                rgba(99, 102, 241, 0.8) 100%);
            opacity: 0;
            animation: screenFlash 0.3s ease-in-out forwards;
        `;
        
        this.transitionContainer.appendChild(flash);
        
        setTimeout(() => {
            flash.remove();
        }, 300);
    }
    
    cleanup() {
        // Remove all transition elements
        while (this.transitionContainer.firstChild) {
            this.transitionContainer.removeChild(this.transitionContainer.firstChild);
        }
    }
}

// CSS Animations for transition effects
const transitionStyles = document.createElement('style');
transitionStyles.textContent = `
    @keyframes smoothFadeIn {
        0% {
            opacity: 0;
        }
        30% {
            opacity: 0.3;
        }
        70% {
            opacity: 0.6;
        }
        100% {
            opacity: 0;
        }
    }
    
    @keyframes smoothRippleExpand {
        0% {
            width: 10px;
            height: 10px;
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1);
        }
        50% {
            opacity: 0.4;
        }
        100% {
            width: 120vmax;
            height: 120vmax;
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes gentleParticleFloat {
        0% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1);
        }
        50% {
            opacity: 0.6;
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) 
                      translate(calc(cos(var(--angle)) * var(--velocity)), 
                               calc(sin(var(--angle)) * var(--velocity))) 
                      scale(0.3);
        }
    }
    
    @keyframes softColorPulse {
        0% {
            opacity: 0;
            transform: scale(0.9);
        }
        30% {
            opacity: 0.6;
            transform: scale(1.1);
        }
        70% {
            opacity: 0.4;
            transform: scale(1.3);
        }
        100% {
            opacity: 0;
            transform: scale(1.6);
        }
    }
    
    @keyframes elegantSpotifyGrow {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 0;
            filter: blur(2px);
        }
        30% {
            transform: translate(-50%, -50%) scale(0.8) rotate(90deg);
            opacity: 0.6;
            filter: blur(1px);
        }
        70% {
            transform: translate(-50%, -50%) scale(1.8) rotate(270deg);
            opacity: 0.3;
            filter: blur(0.5px);
        }
        100% {
            transform: translate(-50%, -50%) scale(2.5) rotate(360deg);
            opacity: 0;
            filter: blur(0px);
        }
    }
    
    @keyframes elegantNoteFloat {
        0% {
            opacity: 0;
            transform: translateY(0px) rotate(0deg) scale(0.3);
            filter: blur(1px);
        }
        20% {
            opacity: 0.8;
            transform: translateY(-20px) rotate(45deg) scale(0.8);
            filter: blur(0.5px);
        }
        50% {
            opacity: 0.6;
            transform: translateY(-60px) rotate(180deg) scale(1);
            filter: blur(0.3px);
        }
        80% {
            opacity: 0.3;
            transform: translateY(-100px) rotate(315deg) scale(0.7);
            filter: blur(0.2px);
        }
        100% {
            opacity: 0;
            transform: translateY(-140px) rotate(360deg) scale(0.2);
            filter: blur(0px);
        }
    }
    
    /* Legacy animations for compatibility */
    @keyframes rippleExpand {
        0% {
            width: 20px;
            height: 20px;
            opacity: 1;
        }
        100% {
            width: 150vmax;
            height: 150vmax;
            opacity: 0;
        }
    }
    
    @keyframes particleExplode {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) 
                      translate(calc(cos(var(--angle)) * var(--velocity)), 
                               calc(sin(var(--angle)) * var(--velocity))) 
                      scale(0);
        }
    }
    
    @keyframes colorWashPulse {
        0% {
            opacity: 0;
            transform: scale(0.8);
        }
        50% {
            opacity: 1;
            transform: scale(1.2);
        }
        100% {
            opacity: 0;
            transform: scale(1.5);
        }
    }
    
    @keyframes spotifyPulseGrow {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 0;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.5) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: translate(-50%, -50%) scale(3) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes noteFloat {
        0% {
            opacity: 0;
            transform: translateY(0px) rotate(0deg) scale(0.5);
        }
        50% {
            opacity: 1;
            transform: translateY(-50px) rotate(180deg) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) rotate(360deg) scale(0.3);
        }
    }
    
    @keyframes screenFlash {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
document.head.appendChild(transitionStyles);

// Initialize and make globally available
let screenTransition = null;

document.addEventListener('DOMContentLoaded', () => {
    screenTransition = new ScreenTransition();
    window.screenTransition = screenTransition;
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScreenTransition;
}
