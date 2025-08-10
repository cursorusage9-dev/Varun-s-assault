/**
 * Varun's Assault Particle System
 * Creates dynamic visual effects for the game
 */

class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.emitters = [];
        this.maxParticles = 100;
        this.gravity = 0.1;
        this.wind = 0;
        
        this.init();
    }

    init() {
        // Create particle canvas overlay
        this.particleCanvas = document.createElement('canvas');
        this.particleCanvas.style.position = 'absolute';
        this.particleCanvas.style.top = '0';
        this.particleCanvas.style.left = '0';
        this.particleCanvas.style.pointerEvents = 'none';
        this.particleCanvas.style.zIndex = '1000';
        
        // Match canvas size
        this.resize();
        
        // Add to game container
        const gameContainer = document.querySelector('.game-canvas-container');
        if (gameContainer) {
            gameContainer.appendChild(this.particleCanvas);
        }
        
        // Start animation loop
        this.animate();
    }

    resize() {
        const rect = this.canvas.getBoundingClientRect();
        this.particleCanvas.width = rect.width;
        this.particleCanvas.height = rect.height;
    }

    // Create explosion effect
    createExplosion(x, y, color = '#00ffff', count = 20) {
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count;
            const speed = Math.random() * 5 + 2;
            const velocity = {
                x: Math.cos(angle) * speed,
                y: Math.sin(angle) * speed
            };
            
            this.particles.push({
                x: x,
                y: y,
                vx: velocity.x,
                vy: velocity.y,
                life: 1.0,
                decay: Math.random() * 0.02 + 0.01,
                size: Math.random() * 4 + 2,
                color: color,
                type: 'explosion'
            });
        }
    }

    // Create laser trail effect
    createLaserTrail(x, y, color = '#00ffff') {
        for (let i = 0; i < 3; i++) {
            this.particles.push({
                x: x + (Math.random() - 0.5) * 10,
                y: y + (Math.random() - 0.5) * 10,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                life: 0.5,
                decay: 0.02,
                size: Math.random() * 3 + 1,
                color: color,
                type: 'laser'
            });
        }
    }

    // Create spawn effect
    createSpawnEffect(x, y, color = '#ff00ff') {
        for (let i = 0; i < 15; i++) {
            this.particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                life: 1.0,
                decay: Math.random() * 0.01 + 0.005,
                size: Math.random() * 3 + 1,
                color: color,
                type: 'spawn'
            });
        }
    }

    // Create EMP effect
    createEMPEffect(x, y) {
        // Create expanding ring
        for (let i = 0; i < 50; i++) {
            const angle = (Math.PI * 2 * i) / 50;
            const speed = 3;
            const velocity = {
                x: Math.cos(angle) * speed,
                y: Math.sin(angle) * speed
            };
            
            this.particles.push({
                x: x,
                y: y,
                vx: velocity.x,
                vy: velocity.y,
                life: 1.0,
                decay: 0.01,
                size: Math.random() * 2 + 1,
                color: '#00ffff',
                type: 'emp'
            });
        }
    }

    // Create typing effect
    createTypingEffect(x, y, char) {
        this.particles.push({
            x: x,
            y: y,
            vx: 0,
            vy: -2,
            life: 1.0,
            decay: 0.02,
            size: 16,
            color: '#00ff00',
            type: 'text',
            text: char
        });
    }

    // Update all particles
    update() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Apply gravity
            particle.vy += this.gravity;
            
            // Apply wind
            particle.vx += this.wind;
            
            // Update life
            particle.life -= particle.decay;
            
            // Remove dead particles
            if (particle.life <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }

    // Render all particles
    render() {
        const ctx = this.particleCanvas.getContext('2d');
        ctx.clearRect(0, 0, this.particleCanvas.width, this.particleCanvas.height);
        
        this.particles.forEach(particle => {
            ctx.save();
            
            // Set alpha based on life
            ctx.globalAlpha = particle.life;
            
            if (particle.type === 'text') {
                // Render text particles
                ctx.fillStyle = particle.color;
                ctx.font = `${particle.size}px 'Orbitron', monospace`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(particle.text, particle.x, particle.y);
            } else {
                // Render regular particles
                ctx.fillStyle = particle.color;
                
                if (particle.type === 'emp') {
                    // EMP particles are rings
                    ctx.strokeStyle = particle.color;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.stroke();
                } else {
                    // Regular particles are circles
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            
            ctx.restore();
        });
    }

    // Animation loop
    animate() {
        this.update();
        this.render();
        requestAnimationFrame(() => this.animate());
    }

    // Clear all particles
    clear() {
        this.particles = [];
    }

    // Set wind effect
    setWind(wind) {
        this.wind = wind;
    }

    // Set gravity
    setGravity(gravity) {
        this.gravity = gravity;
    }
}

// Create global particle system instance
window.createParticleSystem = function(canvas) {
    return new ParticleSystem(canvas);
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ParticleSystem;
}
