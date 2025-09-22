// Sound Manager for The Higher Notes
class SoundManager {
    constructor() {
        this.sounds = {};
        this.audioContext = null;
        this.masterVolume = 0.3;
        this.enabled = true;
        this.initAudioContext();
        this.createSounds();
    }

    initAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (error) {
            console.log('Web Audio API not supported');
        }
    }

    // Create procedural sounds using Web Audio API
    createSounds() {
        // Success sound - ascending notes
        this.sounds.correct = () => this.playTone([523.25, 659.25, 783.99], 0.15, 'sine');
        
        // Error sound - descending notes
        this.sounds.incorrect = () => this.playTone([392, 329.63, 261.63], 0.2, 'triangle');
        
        // Button click sound
        this.sounds.click = () => this.playTone([800], 0.1, 'square');
        
        // Hover sound
        this.sounds.hover = () => this.playTone([1200], 0.05, 'sine');
        
        // Game start sound - chord
        this.sounds.gameStart = () => this.playChord([261.63, 329.63, 392, 523.25], 0.3, 'sine');
        
        // Score increment sound
        this.sounds.score = () => this.playTone([1046.5], 0.1, 'sine');
        
        // Game over sound
        this.sounds.gameOver = () => this.playTone([220, 196, 174.61, 146.83], 0.4, 'sawtooth');
        
        // Menu navigation sound
        this.sounds.menu = () => this.playTone([659.25], 0.08, 'sine');
        
        // Login/Register success
        this.sounds.success = () => this.playTone([523.25, 659.25], 0.2, 'sine');
    }

    playTone(frequencies, duration, waveType = 'sine') {
        if (!this.enabled || !this.audioContext) return;

        try {
            // Resume audio context if suspended
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }

            frequencies.forEach((freq, index) => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime + index * 0.1);
                oscillator.type = waveType;
                
                // Envelope
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime + index * 0.1);
                gainNode.gain.linearRampToValueAtTime(this.masterVolume * 0.3, this.audioContext.currentTime + index * 0.1 + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + index * 0.1 + duration);
                
                oscillator.start(this.audioContext.currentTime + index * 0.1);
                oscillator.stop(this.audioContext.currentTime + index * 0.1 + duration);
            });
        } catch (error) {
            console.log('Error playing sound:', error);
        }
    }

    playChord(frequencies, duration, waveType = 'sine') {
        if (!this.enabled || !this.audioContext) return;

        try {
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }

            frequencies.forEach(freq => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                oscillator.type = waveType;
                
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.masterVolume * 0.2, this.audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + duration);
            });
        } catch (error) {
            console.log('Error playing chord:', error);
        }
    }

    play(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }

    setVolume(volume) {
        this.masterVolume = Math.max(0, Math.min(1, volume));
    }

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }

    enable() {
        this.enabled = true;
    }

    disable() {
        this.enabled = false;
    }
}

// Create global sound manager instance
window.soundManager = new SoundManager();

// Initialize audio context on first user interaction
document.addEventListener('click', () => {
    if (window.soundManager.audioContext && window.soundManager.audioContext.state === 'suspended') {
        window.soundManager.audioContext.resume();
    }
}, { once: true });
