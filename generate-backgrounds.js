// Varun's Assault Background Generator
// Generates cyberpunk-style backgrounds using HTML5 Canvas

class CyberBackgroundGenerator {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.init();
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.ctx = this.canvas.getContext('2d');
    }

    // Generate brutal combat grid background
    generateCyberGrid() {
        this.ctx.fillStyle = '#0a0000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Create gradient overlay
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, 'rgba(255, 0, 0, 0.15)');
        gradient.addColorStop(0.5, 'rgba(139, 0, 0, 0.1)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw grid lines
        this.ctx.strokeStyle = 'rgba(255, 0, 0, 0.4)';
        this.ctx.lineWidth = 1;

        // Vertical lines
        for (let x = 0; x < this.canvas.width; x += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }

        // Horizontal lines
        for (let y = 0; y < this.canvas.height; y += 50) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }

        // Add some blood-red glowing points
        for (let i = 0; i < 20; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            const radius = Math.random() * 3 + 1;
            
            const glow = this.ctx.createRadialGradient(x, y, 0, x, y, radius * 3);
            glow.addColorStop(0, 'rgba(255, 0, 0, 0.9)');
            glow.addColorStop(1, 'rgba(255, 0, 0, 0)');
            
            this.ctx.fillStyle = glow;
            this.ctx.beginPath();
            this.ctx.arc(x, y, radius * 3, 0, Math.PI * 2);
            this.ctx.fill();
        }

        return this.canvas.toDataURL('image/png');
    }

    // Generate brutal neural network background
    generateNeuralBackground() {
        this.ctx.fillStyle = '#0a0000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Create nodes
        const nodes = [];
        for (let i = 0; i < 15; i++) {
            nodes.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                connections: []
            });
        }

        // Create connections
        nodes.forEach((node, i) => {
            for (let j = i + 1; j < nodes.length; j++) {
                if (Math.random() > 0.7) {
                    node.connections.push(j);
                }
            }
        });

        // Draw connections
        this.ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
        this.ctx.lineWidth = 1;
        nodes.forEach((node, i) => {
            node.connections.forEach(connectionIndex => {
                const targetNode = nodes[connectionIndex];
                this.ctx.beginPath();
                this.ctx.moveTo(node.x, node.y);
                this.ctx.lineTo(targetNode.x, targetNode.y);
                this.ctx.stroke();
            });
        });

        // Draw nodes with blood-red colors
        nodes.forEach(node => {
            const gradient = this.ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 15);
            gradient.addColorStop(0, 'rgba(255, 0, 0, 0.8)');
            gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, 15, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.fillStyle = '#ff0000';
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
            this.ctx.fill();
        });

        return this.canvas.toDataURL('image/png');
    }

    // Generate brutal circuit board background
    generateCircuitBackground() {
        this.ctx.fillStyle = '#0a0000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw circuit paths
        this.ctx.strokeStyle = 'rgba(255, 0, 0, 0.4)';
        this.ctx.lineWidth = 2;

        // Horizontal paths
        for (let y = 50; y < this.canvas.height; y += 100) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }

        // Vertical paths
        for (let x = 50; x < this.canvas.width; x += 100) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }

        // Add circuit components
        for (let i = 0; i < 30; i++) {
            const x = Math.floor(Math.random() * (this.canvas.width / 100)) * 100 + 50;
            const y = Math.floor(Math.random() * (this.canvas.height / 100)) * 100 + 50;
            
            // Draw component
            this.ctx.fillStyle = 'rgba(255, 69, 0, 0.6)';
            this.ctx.fillRect(x - 10, y - 10, 20, 20);
            
            // Add glow
            const glow = this.ctx.createRadialGradient(x, y, 0, x, y, 25);
            glow.addColorStop(0, 'rgba(255, 69, 0, 0.3)');
            glow.addColorStop(1, 'rgba(255, 69, 0, 0)');
            
            this.ctx.fillStyle = glow;
            this.ctx.fillRect(x - 25, y - 25, 50, 50);
        }

        return this.canvas.toDataURL('image/png');
    }

    // Generate brutal data stream background
    generateDataStreamBackground() {
        this.ctx.fillStyle = '#0a0000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Create data streams
        for (let stream = 0; stream < 8; stream++) {
            const x = (stream + 1) * (this.canvas.width / 9);
            const speed = Math.random() * 2 + 1;
            
            this.ctx.strokeStyle = `rgba(255, 0, 0, ${0.3 + Math.random() * 0.4})`;
            this.ctx.lineWidth = 2;

            // Draw stream
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            
            for (let y = 0; y < this.canvas.height; y += 20) {
                const offset = Math.sin(y * 0.02 + stream) * 10;
                this.ctx.lineTo(x + offset, y);
            }
            
            this.ctx.stroke();

            // Add data points
            for (let y = 0; y < this.canvas.height; y += 40) {
                const offset = Math.sin(y * 0.02 + stream) * 10;
                const alpha = 0.5 + Math.sin(y * 0.1) * 0.5;
                
                this.ctx.fillStyle = `rgba(255, 0, 0, ${alpha})`;
                this.ctx.beginPath();
                this.ctx.arc(x + offset, y, 3, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        return this.canvas.toDataURL('image/png');
    }

    // Save background to file
    saveBackground(dataUrl, filename) {
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
    }

    // Generate all backgrounds
    generateAllBackgrounds() {
        const backgrounds = {
            'cyber-grid.png': this.generateCyberGrid(),
            'neural-network.png': this.generateNeuralBackground(),
            'circuit-board.png': this.generateCircuitBackground(),
            'data-stream.png': this.generateDataStreamBackground()
        };

        return backgrounds;
    }
}

// Create background generator instance
window.cyberBackgroundGenerator = new CyberBackgroundGenerator();

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CyberBackgroundGenerator;
}
