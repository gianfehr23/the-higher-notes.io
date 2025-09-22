// ===== SPOTIFY LOGO 3D EFFECTS =====

class SpotifyLogo3D {
    constructor() {
        this.logo = null;
        this.isAnimating = false;
        this.mouseX = 0;
        this.mouseY = 0;
        this.init();
    }
    
    init() {
        this.logo = document.querySelector('.spotify-logo');
        if (!this.logo) {
            console.log('Spotify logo not found');
            return;
        }
        
        this.setupEventListeners();
        this.createParticleEffect();
        this.startMusicVisualization();
        
        console.log('Spotify Logo 3D effects initialized');
    }
    
    setupEventListeners() {
        // Mouse tracking for 3D tilt effect
        document.addEventListener('mousemove', (e) => {
            this.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouseY = (e.clientY / window.innerHeight) * 2 - 1;
            this.updateTilt();
        });
        
        // Click effect
        this.logo.addEventListener('click', () => {
            this.triggerClickEffect();
        });
        
        // Game events
        document.addEventListener('gameStart', () => {
            this.onGameStart();
        });
        
        document.addEventListener('scoreUpdate', (e) => {
            this.onScoreUpdate(e.detail);
        });
        
        document.addEventListener('gameEnd', () => {
            this.onGameEnd();
        });
    }
    
    updateTilt() {
        if (!this.logo || this.isAnimating) return;
        
        const tiltX = this.mouseY * 10; // Max 10 degrees
        const tiltY = this.mouseX * -10; // Max 10 degrees (inverted)
        
        this.logo.style.transform = `
            rotateX(${tiltX}deg) 
            rotateY(${tiltY}deg) 
            translateZ(0px)
        `;
    }
    
    triggerClickEffect() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        
        // Create ripple effect
        this.createRipple();
        
        // Bounce animation
        this.logo.style.animation = 'none';
        this.logo.style.transform = 'scale(0.8) rotateZ(180deg)';
        
        setTimeout(() => {
            this.logo.style.transform = 'scale(1.3) rotateZ(360deg)';
        }, 100);
        
        setTimeout(() => {
            this.logo.style.transform = 'scale(1) rotateZ(0deg)';
            this.logo.style.animation = 'spotifyFloat 4s ease-in-out infinite';
            this.isAnimating = false;
        }, 400);
        
        // Sound wave effect
        this.createSoundWaves();
    }
    
    createRipple() {
        const ripple = document.createElement('div');
        ripple.className = 'spotify-ripple';
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, rgba(30, 215, 96, 0.6) 0%, transparent 70%);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 10;
            animation: rippleExpand 0.6s ease-out forwards;
        `;
        
        this.logo.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    createSoundWaves() {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const wave = document.createElement('div');
                wave.className = 'sound-wave';
                wave.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 40px;
                    height: 40px;
                    border: 2px solid rgba(30, 215, 96, 0.4);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    pointer-events: none;
                    z-index: 5;
                    animation: waveExpand 1s ease-out forwards;
                `;
                
                this.logo.appendChild(wave);
                
                setTimeout(() => {
                    wave.remove();
                }, 1000);
            }, i * 200);
        }
    }
    
    createParticleEffect() {
        // Create floating music notes around the logo
        const notes = ['♪', '♫', '♬', '♩'];
        
        setInterval(() => {
            if (Math.random() > 0.7) { // 30% chance every interval
                this.createMusicNote(notes[Math.floor(Math.random() * notes.length)]);
            }
        }, 2000);
    }
    
    createMusicNote(note) {
        const musicNote = document.createElement('div');
        musicNote.textContent = note;
        musicNote.style.cssText = `
            position: absolute;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            color: rgba(30, 215, 96, 0.6);
            font-size: 12px;
            pointer-events: none;
            z-index: 3;
            animation: noteFloat 3s ease-out forwards;
        `;
        
        this.logo.appendChild(musicNote);
        
        setTimeout(() => {
            musicNote.remove();
        }, 3000);
    }
    
    startMusicVisualization() {
        // Simulate music beat visualization
        let beatInterval = setInterval(() => {
            if (!this.logo) {
                clearInterval(beatInterval);
                return;
            }
            
            // Random beat effect
            if (Math.random() > 0.8) {
                this.logo.style.filter = `
                    drop-shadow(0 0 15px rgba(30, 215, 96, 0.8)) 
                    brightness(1.2)
                `;
                
                setTimeout(() => {
                    this.logo.style.filter = `
                        drop-shadow(0 0 10px rgba(30, 215, 96, 0.3))
                        brightness(1)
                    `;
                }, 150);
            }
        }, 1000);
    }
    
    onGameStart() {
        // Intensify effects when game starts
        this.logo.style.animationDuration = '2s';
        this.logo.style.filter = `
            drop-shadow(0 0 20px rgba(30, 215, 96, 0.6)) 
            brightness(1.1)
        `;
    }
    
    onScoreUpdate(score) {
        // Pulse effect based on score
        const intensity = Math.min(score / 10, 1);
        
        this.logo.style.transform = `scale(${1 + intensity * 0.1})`;
        this.logo.style.filter = `
            drop-shadow(0 0 ${15 + intensity * 10}px rgba(30, 215, 96, ${0.3 + intensity * 0.3})) 
            brightness(${1 + intensity * 0.2})
        `;
        
        // Create celebration particles on high scores
        if (score > 0 && score % 5 === 0) {
            this.createCelebrationEffect();
        }
    }
    
    onGameEnd() {
        // Calm effects when game ends
        this.logo.style.animationDuration = '4s';
        this.logo.style.filter = `
            drop-shadow(0 0 10px rgba(30, 215, 96, 0.3))
            brightness(1)
        `;
    }
    
    createCelebrationEffect() {
        // Create burst of particles
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 4px;
                    height: 4px;
                    background: #1ED760;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 8;
                    animation: particleBurst 0.8s ease-out forwards;
                    transform: translate(-50%, -50%) rotate(${i * 45}deg);
                `;
                
                this.logo.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 800);
            }, i * 50);
        }
    }
}

// CSS Animations (inject into page)
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleExpand {
        0% {
            width: 10px;
            height: 10px;
            opacity: 1;
        }
        100% {
            width: 80px;
            height: 80px;
            opacity: 0;
        }
    }
    
    @keyframes waveExpand {
        0% {
            width: 40px;
            height: 40px;
            opacity: 0.6;
        }
        100% {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
    
    @keyframes noteFloat {
        0% {
            opacity: 1;
            transform: translateY(0px) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-30px) scale(0.5);
        }
    }
    
    @keyframes particleBurst {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) translateX(0px);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) translateX(40px);
        }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const spotifyLogo3D = new SpotifyLogo3D();
        window.spotifyLogo3D = spotifyLogo3D;
    }, 500);
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpotifyLogo3D;
}
