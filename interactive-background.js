// ===== INTERACTIVE MUSICAL BACKGROUND =====

class InteractiveBackground {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.notes = [];
        this.mouse = { x: 0, y: 0 };
        this.animationId = null;
        this.isInitialized = false;
        
        // Configuration - Optimized for performance
        this.config = {
            noteCount: 80,  // Reduced from 150
            maxDistance: 100,  // Reduced from 120
            connectionOpacity: 0.12,
            noteOpacity: 0.7,
            mouseInfluence: 70,  // Reduced from 80
            colors: {
                primary: '#1ED760',    // Spotify Green
                secondary: '#6366f1',  // Blue
                accent: '#ffffff',     // White
                connection: '#1ED760'  // Connection lines
            }
        };
        
        this.init();
    }
    
    init() {
        this.createCanvas();
        this.createNotes();
        this.setupEventListeners();
        this.animate();
        this.isInitialized = true;
        console.log('Interactive Musical Background initialized');
    }
    
    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'interactive-bg';
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 0;
            pointer-events: none;
            background: linear-gradient(135deg, 
                #0a0a0a 0%, 
                #1a1a2e 25%, 
                #16213e 50%, 
                #0f3460 75%, 
                #0a0a0a 100%);
        `;
        
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        
        // Insert before all other content
        document.body.insertBefore(this.canvas, document.body.firstChild);
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createNotes() {
        const musicSymbols = ['♪', '♫', '♬', '♩', '𝄞', '𝄢', '♭', '♯'];
        
        for (let i = 0; i < this.config.noteCount; i++) {
            const note = {
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                originalX: 0,
                originalY: 0,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                symbol: musicSymbols[Math.floor(Math.random() * musicSymbols.length)],
                size: Math.random() * 8 + 4,
                opacity: Math.random() * 0.6 + 0.2,
                color: this.getRandomColor(),
                pulsePhase: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
                rotation: 0
            };
            
            note.originalX = note.x;
            note.originalY = note.y;
            this.notes.push(note);
        }
    }
    
    getRandomColor() {
        const colors = [
            this.config.colors.primary,
            this.config.colors.secondary,
            this.config.colors.accent
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    setupEventListeners() {
        // Mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        // Window resize
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.repositionNotes();
        });
        
        // Touch events for mobile
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.mouse.x = e.touches[0].clientX;
                this.mouse.y = e.touches[0].clientY;
            }
        });
    }
    
    repositionNotes() {
        this.notes.forEach(note => {
            if (note.originalX > this.canvas.width) {
                note.x = note.originalX = Math.random() * this.canvas.width;
            }
            if (note.originalY > this.canvas.height) {
                note.y = note.originalY = Math.random() * this.canvas.height;
            }
        });
    }
    
    updateNotes() {
        this.notes.forEach(note => {
            // Mouse influence
            const dx = this.mouse.x - note.x;
            const dy = this.mouse.y - note.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.config.mouseInfluence) {
                const force = (this.config.mouseInfluence - distance) / this.config.mouseInfluence;
                const angle = Math.atan2(dy, dx);
                
                // Smooth attraction to mouse
                note.x += Math.cos(angle) * force * 2;
                note.y += Math.sin(angle) * force * 2;
            } else {
                // Gentle return to original position
                note.x += (note.originalX - note.x) * 0.02;
                note.y += (note.originalY - note.y) * 0.02;
            }
            
            // Natural floating movement
            note.x += note.vx;
            note.y += note.vy;
            
            // Pulse effect
            note.pulsePhase += 0.02;
            
            // Rotation
            note.rotation += note.rotationSpeed;
            
            // Boundary wrapping
            if (note.x < -50) note.x = this.canvas.width + 50;
            if (note.x > this.canvas.width + 50) note.x = -50;
            if (note.y < -50) note.y = this.canvas.height + 50;
            if (note.y > this.canvas.height + 50) note.y = -50;
        });
    }
    
    drawConnections() {
        // Optimize: Only check every other note for connections to reduce calculations
        for (let i = 0; i < this.notes.length; i += 2) {
            for (let j = i + 2; j < this.notes.length; j += 2) {
                const note1 = this.notes[i];
                const note2 = this.notes[j];
                
                const dx = note1.x - note2.x;
                const dy = note1.y - note2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.config.maxDistance) {
                    const opacity = (1 - distance / this.config.maxDistance) * this.config.connectionOpacity;
                    
                    // Simplified solid color line for better performance
                    this.ctx.strokeStyle = `rgba(30, 215, 96, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.globalAlpha = opacity;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(note1.x, note1.y);
                    this.ctx.lineTo(note2.x, note2.y);
                    this.ctx.stroke();
                }
            }
        }
        
        this.ctx.globalAlpha = 1;
    }
    
    drawNotes() {
        // Optimize: Reduce glow effects and simplify rendering
        this.notes.forEach(note => {
            this.ctx.save();
            
            // Move to note position
            this.ctx.translate(note.x, note.y);
            this.ctx.rotate(note.rotation);
            
            // Simplified pulse effect
            const pulse = Math.sin(note.pulsePhase) * 0.2 + 1;
            const currentSize = note.size * pulse;
            
            // Simplified glow effect
            this.ctx.shadowColor = note.color;
            this.ctx.shadowBlur = 6;  // Reduced from 10
            
            // Draw note symbol
            this.ctx.fillStyle = note.color;
            this.ctx.globalAlpha = note.opacity * this.config.noteOpacity;
            this.ctx.font = `${currentSize}px Arial`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(note.symbol, 0, 0);
            
            this.ctx.restore();
        });
    }
    
    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        
        // Clear canvas completely for better performance
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateNotes();
        this.drawConnections();
        this.drawNotes();
    }
    
    // Public methods for external control
    setIntensity(intensity) {
        this.config.noteOpacity = 0.4 + intensity * 0.6;
        this.config.connectionOpacity = 0.1 + intensity * 0.2;
        this.config.mouseInfluence = 60 + intensity * 40;
    }
    
    addExplosion(x, y) {
        // Add temporary explosion of notes - reduced for performance
        for (let i = 0; i < 10; i++) {  // Reduced from 20
            const angle = (i / 10) * Math.PI * 2;
            const velocity = 2 + Math.random() * 3;
            
            const explosionNote = {
                x: x,
                y: y,
                originalX: x,
                originalY: y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                symbol: ['♪', '♫', '♬'][Math.floor(Math.random() * 3)],
                size: 6 + Math.random() * 4,
                opacity: 1,
                color: this.config.colors.primary,
                pulsePhase: 0,
                rotationSpeed: (Math.random() - 0.5) * 0.1,
                rotation: 0,
                life: 60, // frames to live
                maxLife: 60
            };
            
            this.notes.push(explosionNote);
        }
        
        // Remove explosion notes after their life expires
        setTimeout(() => {
            this.notes = this.notes.filter(note => !note.life || note.life > 0);
        }, 1000);
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
        
        console.log('Interactive Background destroyed');
    }
}

// Initialize when DOM is loaded
let interactiveBackground = null;

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        interactiveBackground = new InteractiveBackground();
        window.interactiveBackground = interactiveBackground;
        
        console.log('Interactive Musical Background loaded successfully!');
    }, 500);
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = InteractiveBackground;
}
