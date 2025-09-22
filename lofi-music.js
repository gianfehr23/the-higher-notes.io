// Lofi Music Generator for The Higher Notes
class LofiMusicGenerator {
    constructor() {
        this.audioContext = null;
        this.isPlaying = false;
        this.masterVolume = 0.15; // Lower volume for background music
        this.currentLoop = null;
        this.instruments = {};
        this.tempo = 85; // BPM for lofi feel
        this.beatInterval = (60 / this.tempo) * 1000; // ms per beat
        this.currentChord = 0;
        this.enabled = true;
        this.vinylNoise = null;
        
        // Lofi chord progressions
        this.chordProgressions = [
            // Am - F - C - G (vi-IV-I-V)
            [
                [220, 261.63, 329.63], // Am
                [174.61, 220, 261.63], // F
                [130.81, 164.81, 196], // C
                [196, 246.94, 293.66]  // G
            ],
            // Dm - G - C - Am (ii-V-I-vi)
            [
                [146.83, 174.61, 220], // Dm
                [196, 246.94, 293.66], // G
                [130.81, 164.81, 196], // C
                [220, 261.63, 329.63]  // Am
            ]
        ];
        
        this.currentProgression = this.chordProgressions[0];
        this.initAudioContext();
    }

    initAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (error) {
            console.log('Web Audio API not supported for lofi music');
        }
    }

    createLowPassFilter(frequency = 3000) {
        const filter = this.audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        filter.Q.setValueAtTime(1, this.audioContext.currentTime);
        return filter;
    }

    createReverb() {
        const convolver = this.audioContext.createConvolver();
        const length = this.audioContext.sampleRate * 2; // 2 seconds
        const impulse = this.audioContext.createBuffer(2, length, this.audioContext.sampleRate);
        
        for (let channel = 0; channel < 2; channel++) {
            const channelData = impulse.getChannelData(channel);
            for (let i = 0; i < length; i++) {
                channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2);
            }
        }
        
        convolver.buffer = impulse;
        return convolver;
    }

    createVinylNoise() {
        if (!this.audioContext) return null;
        
        const bufferSize = this.audioContext.sampleRate * 2;
        const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            output[i] = (Math.random() * 2 - 1) * 0.02; // Very quiet vinyl crackle
        }
        
        const noise = this.audioContext.createBufferSource();
        noise.buffer = noiseBuffer;
        noise.loop = true;
        
        const noiseGain = this.audioContext.createGain();
        noiseGain.gain.setValueAtTime(this.masterVolume * 0.1, this.audioContext.currentTime);
        
        const noiseFilter = this.createLowPassFilter(8000);
        
        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        
        return { source: noise, gain: noiseGain };
    }

    playChord(frequencies, duration = 4, waveType = 'sine') {
        if (!this.enabled || !this.audioContext || !this.isPlaying) return;

        try {
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }

            const masterGain = this.audioContext.createGain();
            masterGain.gain.setValueAtTime(this.masterVolume * 0.3, this.audioContext.currentTime);
            
            // Create reverb and filter for lofi sound
            const reverb = this.createReverb();
            const filter = this.createLowPassFilter(2500);
            
            masterGain.connect(filter);
            filter.connect(reverb);
            reverb.connect(this.audioContext.destination);

            frequencies.forEach((freq, index) => {
                // Main chord tone
                const osc = this.audioContext.createOscillator();
                const gain = this.audioContext.createGain();
                
                osc.connect(gain);
                gain.connect(masterGain);
                
                osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                osc.type = waveType;
                
                // Soft attack and release for lofi feel
                gain.gain.setValueAtTime(0, this.audioContext.currentTime);
                gain.gain.linearRampToValueAtTime(0.15, this.audioContext.currentTime + 0.1);
                gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration - 0.1);
                
                osc.start(this.audioContext.currentTime);
                osc.stop(this.audioContext.currentTime + duration);
                
                // Add subtle detuning for warmth
                if (index > 0) {
                    const detunedOsc = this.audioContext.createOscillator();
                    const detunedGain = this.audioContext.createGain();
                    
                    detunedOsc.connect(detunedGain);
                    detunedGain.connect(masterGain);
                    
                    detunedOsc.frequency.setValueAtTime(freq + (Math.random() * 4 - 2), this.audioContext.currentTime);
                    detunedOsc.type = waveType;
                    
                    detunedGain.gain.setValueAtTime(0, this.audioContext.currentTime);
                    detunedGain.gain.linearRampToValueAtTime(0.05, this.audioContext.currentTime + 0.1);
                    detunedGain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration - 0.1);
                    
                    detunedOsc.start(this.audioContext.currentTime);
                    detunedOsc.stop(this.audioContext.currentTime + duration);
                }
            });

        } catch (error) {
            console.log('Error playing lofi chord:', error);
        }
    }

    playBassLine(rootFreq, duration = 4) {
        if (!this.enabled || !this.audioContext || !this.isPlaying) return;

        try {
            const bass = this.audioContext.createOscillator();
            const bassGain = this.audioContext.createGain();
            const bassFilter = this.createLowPassFilter(200);
            
            bass.connect(bassGain);
            bassGain.connect(bassFilter);
            bassFilter.connect(this.audioContext.destination);
            
            bass.frequency.setValueAtTime(rootFreq / 2, this.audioContext.currentTime); // Octave down
            bass.type = 'sawtooth';
            
            bassGain.gain.setValueAtTime(0, this.audioContext.currentTime);
            bassGain.gain.linearRampToValueAtTime(this.masterVolume * 0.4, this.audioContext.currentTime + 0.05);
            bassGain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration - 0.1);
            
            bass.start(this.audioContext.currentTime);
            bass.stop(this.audioContext.currentTime + duration);

        } catch (error) {
            console.log('Error playing bass line:', error);
        }
    }

    playDrumLoop() {
        if (!this.enabled || !this.audioContext || !this.isPlaying) return;

        try {
            // Kick drum (low frequency)
            const kick = this.audioContext.createOscillator();
            const kickGain = this.audioContext.createGain();
            const kickFilter = this.createLowPassFilter(100);
            
            kick.connect(kickGain);
            kickGain.connect(kickFilter);
            kickFilter.connect(this.audioContext.destination);
            
            kick.frequency.setValueAtTime(60, this.audioContext.currentTime);
            kick.type = 'sine';
            
            kickGain.gain.setValueAtTime(this.masterVolume * 0.6, this.audioContext.currentTime);
            kickGain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.2);
            
            kick.start(this.audioContext.currentTime);
            kick.stop(this.audioContext.currentTime + 0.2);

            // Hi-hat (filtered noise)
            setTimeout(() => {
                if (!this.isPlaying) return;
                
                const hihat = this.audioContext.createOscillator();
                const hihatGain = this.audioContext.createGain();
                const hihatFilter = this.createLowPassFilter(8000);
                
                hihat.connect(hihatGain);
                hihatGain.connect(hihatFilter);
                hihatFilter.connect(this.audioContext.destination);
                
                hihat.frequency.setValueAtTime(10000, this.audioContext.currentTime);
                hihat.type = 'square';
                
                hihatGain.gain.setValueAtTime(this.masterVolume * 0.1, this.audioContext.currentTime);
                hihatGain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.1);
                
                hihat.start(this.audioContext.currentTime);
                hihat.stop(this.audioContext.currentTime + 0.1);
            }, this.beatInterval / 2);

        } catch (error) {
            console.log('Error playing drum loop:', error);
        }
    }

    startLoop() {
        if (!this.audioContext || this.isPlaying) return;
        
        this.isPlaying = true;
        
        // Start vinyl noise and store reference
        this.vinylNoise = this.createVinylNoise();
        if (this.vinylNoise) {
            this.vinylNoise.gain.connect(this.audioContext.destination);
            this.vinylNoise.source.start();
        }
        
        const playNextChord = () => {
            if (!this.isPlaying) return;
            
            const chord = this.currentProgression[this.currentChord];
            const rootFreq = chord[0];
            
            // Play chord
            this.playChord(chord, 4, 'triangle');
            
            // Play bass line
            this.playBassLine(rootFreq, 4);
            
            // Play subtle drums
            this.playDrumLoop();
            
            // Move to next chord
            this.currentChord = (this.currentChord + 1) % this.currentProgression.length;
            
            // If we completed the progression, maybe switch to another one
            if (this.currentChord === 0 && Math.random() < 0.3) {
                this.currentProgression = this.chordProgressions[Math.floor(Math.random() * this.chordProgressions.length)];
            }
            
            // Schedule next chord
            setTimeout(playNextChord, this.beatInterval * 4); // 4 beats per chord
        };
        
        // Start the loop
        playNextChord();
    }

    stop() {
        this.isPlaying = false;
        
        // Stop vinyl noise if it exists
        if (this.vinylNoise && this.vinylNoise.source) {
            try {
                this.vinylNoise.source.stop();
                this.vinylNoise.source.disconnect();
                this.vinylNoise.gain.disconnect();
            } catch (error) {
                console.log('Error stopping vinyl noise:', error);
            }
            this.vinylNoise = null;
        }
    }

    setVolume(volume) {
        this.masterVolume = Math.max(0, Math.min(0.3, volume)); // Cap at 0.3 for background music
        console.log('LofiMusic volume set to:', this.masterVolume); // Debug
        
        // Update vinyl noise volume if it's playing
        if (this.vinylNoise && this.vinylNoise.gain) {
            try {
                this.vinylNoise.gain.gain.setValueAtTime(this.masterVolume * 0.1, this.audioContext.currentTime);
            } catch (error) {
                console.log('Error updating vinyl noise volume:', error);
            }
        }
    }

    toggle() {
        this.enabled = !this.enabled;
        if (!this.enabled) {
            this.stop();
        } else if (!this.isPlaying) {
            this.startLoop();
        }
        return this.enabled;
    }
}

// Create global lofi music instance
window.lofiMusic = new LofiMusicGenerator();

// Auto-start lofi music when page loads (after user interaction)
document.addEventListener('click', () => {
    if (window.lofiMusic && !window.lofiMusic.isPlaying && window.lofiMusic.enabled) {
        setTimeout(() => {
            window.lofiMusic.startLoop();
            // Update play button and animations
            const playPauseBtn = document.getElementById('music-play-pause');
            const musicCover = document.querySelector('.music-cover');
            if (playPauseBtn) {
                playPauseBtn.textContent = '⏸️';
                playPauseBtn.title = 'Pause';
                playPauseBtn.classList.add('playing');
            }
            if (musicCover) {
                musicCover.classList.add('playing');
            }
        }, 1000); // Start after 1 second delay
    }
}, { once: true });
