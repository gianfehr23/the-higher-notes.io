// ===== THREE.JS WEBGL EFFECTS FOR THE HIGHER NOTES =====

class ThreeJSEffects {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = [];
        this.musicWaves = [];
        this.spotifyLogo = null;
        this.animationId = null;
        this.isInitialized = false;
        
        // Audio analysis
        this.audioContext = null;
        this.analyser = null;
        this.dataArray = null;
        
        this.init();
    }
    
    init() {
        try {
            this.createScene();
            this.createCamera();
            this.createRenderer();
            this.createLights();
            this.createParticleSystem();
            this.createMusicWaves();
            // this.createSpotifyLogo(); // Removed - was blocking the VS area
            this.setupEventListeners();
            this.animate();
            this.isInitialized = true;
            console.log('Three.js effects initialized successfully');
        } catch (error) {
            console.error('Error initializing Three.js effects:', error);
        }
    }
    
    createScene() {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x0a0a0a, 50, 200);
    }
    
    createCamera() {
        this.camera = new THREE.PerspectiveCamera(
            75, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            1000
        );
        this.camera.position.z = 50;
    }
    
    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        
        // Add canvas to background
        const canvas = this.renderer.domElement;
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '1';
        canvas.style.pointerEvents = 'none';
        document.body.appendChild(canvas);
    }
    
    createLights() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0x1ED760, 0.3);
        this.scene.add(ambientLight);
        
        // Directional light
        const directionalLight = new THREE.DirectionalLight(0x1ED760, 0.8);
        directionalLight.position.set(10, 10, 5);
        directionalLight.castShadow = true;
        this.scene.add(directionalLight);
        
        // Point lights for music effect
        const pointLight1 = new THREE.PointLight(0x1ED760, 1, 100);
        pointLight1.position.set(-30, 20, 10);
        this.scene.add(pointLight1);
        
        const pointLight2 = new THREE.PointLight(0x6366f1, 1, 100);
        pointLight2.position.set(30, -20, 10);
        this.scene.add(pointLight2);
    }
    
    createParticleSystem() {
        const particleCount = 500;  // Reduced from 1000 for better performance
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        
        const color1 = new THREE.Color(0x1ED760);
        const color2 = new THREE.Color(0x6366f1);
        const color3 = new THREE.Color(0xffffff);
        
        for (let i = 0; i < particleCount; i++) {
            // Position
            positions[i * 3] = (Math.random() - 0.5) * 200;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
            
            // Color
            const colorChoice = Math.random();
            let color;
            if (colorChoice < 0.4) color = color1;
            else if (colorChoice < 0.7) color = color2;
            else color = color3;
            
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
            
            // Size
            sizes[i] = Math.random() * 3 + 1;
        }
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                pixelRatio: { value: window.devicePixelRatio }
            },
            vertexShader: `
                attribute float size;
                attribute vec3 color;
                varying vec3 vColor;
                uniform float time;
                
                void main() {
                    vColor = color;
                    vec3 pos = position;
                    
                    // Wave motion
                    pos.y += sin(time * 0.5 + position.x * 0.01) * 5.0;
                    pos.x += cos(time * 0.3 + position.z * 0.01) * 3.0;
                    
                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = size * (300.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
                
                void main() {
                    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
                    float alpha = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
                    gl_FragColor = vec4(vColor, alpha * 0.8);
                }
            `,
            transparent: true,
            vertexColors: true,
            blending: THREE.AdditiveBlending
        });
        
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }
    
    createMusicWaves() {
        const waveCount = 3;  // Reduced from 5 for better performance
        
        for (let i = 0; i < waveCount; i++) {
            const geometry = new THREE.RingGeometry(10 + i * 8, 12 + i * 8, 64);
            const material = new THREE.MeshBasicMaterial({
                color: i % 2 === 0 ? 0x1ED760 : 0x6366f1,
                transparent: true,
                opacity: 0.1,
                side: THREE.DoubleSide
            });
            
            const wave = new THREE.Mesh(geometry, material);
            wave.position.z = -20 - i * 5;
            wave.rotation.x = Math.PI / 2;
            
            this.musicWaves.push(wave);
            this.scene.add(wave);
        }
    }
    
    createSpotifyLogo() {
        // Create Spotify logo using curves
        const shape = new THREE.Shape();
        
        // Simplified Spotify logo shape
        shape.moveTo(0, 8);
        shape.bezierCurveTo(-12, 6, -12, -2, 0, -4);
        shape.bezierCurveTo(12, -2, 12, 6, 0, 8);
        
        shape.moveTo(0, 4);
        shape.bezierCurveTo(-8, 3, -8, -1, 0, -2);
        shape.bezierCurveTo(8, -1, 8, 3, 0, 4);
        
        shape.moveTo(0, 0);
        shape.bezierCurveTo(-4, -0.5, -4, -2.5, 0, -3);
        shape.bezierCurveTo(4, -2.5, 4, -0.5, 0, 0);
        
        const geometry = new THREE.ShapeGeometry(shape);
        const material = new THREE.MeshBasicMaterial({
            color: 0x1ED760,
            transparent: true,
            opacity: 0.1
        });
        
        this.spotifyLogo = new THREE.Mesh(geometry, material);
        this.spotifyLogo.position.set(0, 0, -30);
        this.spotifyLogo.scale.set(3, 3, 3);
        this.scene.add(this.spotifyLogo);
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => this.onWindowResize(), false);
        
        // Mouse movement effect
        document.addEventListener('mousemove', (event) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            
            if (this.camera) {
                this.camera.position.x = mouseX * 5;
                this.camera.position.y = mouseY * 5;
                this.camera.lookAt(0, 0, 0);
            }
        });
        
        // Game events
        document.addEventListener('gameStart', () => this.onGameStart());
        document.addEventListener('gameEnd', () => this.onGameEnd());
        document.addEventListener('scoreUpdate', (event) => this.onScoreUpdate(event.detail));
    }
    
    onWindowResize() {
        if (!this.camera || !this.renderer) return;
        
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    onGameStart() {
        // Intensify effects when game starts
        this.musicWaves.forEach((wave, index) => {
            wave.material.opacity = 0.3;
        });
        
        if (this.spotifyLogo) {
            this.spotifyLogo.material.opacity = 0.2;
        }
    }
    
    onGameEnd() {
        // Calm effects when game ends
        this.musicWaves.forEach((wave, index) => {
            wave.material.opacity = 0.1;
        });
        
        if (this.spotifyLogo) {
            this.spotifyLogo.material.opacity = 0.1;
        }
    }
    
    onScoreUpdate(score) {
        // Pulse effect based on score
        const intensity = Math.min(score / 10, 1);
        
        this.musicWaves.forEach((wave, index) => {
            wave.scale.setScalar(1 + intensity * 0.2);
        });
    }
    
    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        
        const time = Date.now() * 0.001;
        
        // Animate particles
        if (this.particles && this.particles.material.uniforms) {
            this.particles.material.uniforms.time.value = time;
            this.particles.rotation.y = time * 0.1;
        }
        
        // Animate music waves
        this.musicWaves.forEach((wave, index) => {
            wave.rotation.z = time * (0.2 + index * 0.1);
            wave.scale.setScalar(1 + Math.sin(time * 2 + index) * 0.1);
        });
        
        // Animate Spotify logo
        if (this.spotifyLogo) {
            this.spotifyLogo.rotation.z = Math.sin(time * 0.5) * 0.1;
            this.spotifyLogo.scale.setScalar(3 + Math.sin(time * 1.5) * 0.2);
        }
        
        // Render
        if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    }
    
    // Public methods for external control
    setIntensity(intensity) {
        if (!this.isInitialized) return;
        
        this.musicWaves.forEach((wave, index) => {
            wave.material.opacity = 0.1 + intensity * 0.3;
            wave.scale.setScalar(1 + intensity * 0.5);
        });
        
        if (this.particles && this.particles.material.uniforms) {
            // Could add intensity-based particle effects here
        }
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        if (this.renderer && this.renderer.domElement) {
            document.body.removeChild(this.renderer.domElement);
        }
        
        // Clean up Three.js objects
        if (this.scene) {
            this.scene.clear();
        }
        
        console.log('Three.js effects destroyed');
    }
}

// Initialize when DOM is loaded
let threeEffects = null;

document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for the page to settle
    setTimeout(() => {
        if (typeof THREE !== 'undefined') {
            threeEffects = new ThreeJSEffects();
            
            // Make it globally available
            window.threeEffects = threeEffects;
            
            console.log('Three.js WebGL effects loaded successfully!');
        } else {
            console.log('Three.js library not found. Please include Three.js CDN.');
        }
    }, 1000);
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThreeJSEffects;
}
