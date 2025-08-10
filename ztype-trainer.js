/**
 * ===================================
 * Varun's Assault - About Developer
 * ===================================
 *
 * About section for Varun's Assault game
 */

(function () {
    'use strict';

    // About Varun UI Manager
    class AboutVarunUI {
        constructor() {
            this.isVisible = false;
            this.init();
        }

        init() {
            this.createAboutTab();
            this.bindEvents();
        }

        createAboutTab() {
            // Create about tab button
            const aboutButton = document.createElement('div');
            aboutButton.id = 'about-varun-tab';
            aboutButton.className = 'about-tab-button';
            aboutButton.innerHTML = '👨‍💻 About Developer';
            aboutButton.title = 'Click to learn about the developer';
            
            // Create about panel
            const aboutPanel = document.createElement('div');
            aboutPanel.id = 'about-varun-panel';
            aboutPanel.className = 'about-panel hidden';
            aboutPanel.innerHTML = `
                <div class="about-content">
                    <div class="about-header">
                        <h2>👨‍💻 Hey, I'm Varun!</h2>
                        <button class="close-about" id="closeAbout">×</button>
                    </div>
                    <div class="about-body">
                        <div class="developer-info">
                            <p><strong>🎓 Student:</strong> 2nd Year CSE Student</p>
                            <p><strong>🏫 College:</strong> Gokulakrishna College of Engineering</p>
                            <p><strong>🎮 Project:</strong> Varun's Assault - Neural Network Defense</p>
                        </div>
                        
                        <div class="tech-stack">
                            <h3>🛠️ Tech Stack Used:</h3>
                            <ul>
                                <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+)</li>
                                <li><strong>Game Engine:</strong> Impact.js (Modified)</li>
                                <li><strong>Audio:</strong> Web Audio API for Procedural Sound Generation</li>
                                <li><strong>Graphics:</strong> HTML5 Canvas for Dynamic Backgrounds</li>
                                <li><strong>Effects:</strong> Custom Particle System</li>
                                <li><strong>Styling:</strong> Modern CSS with Animations & Gradients</li>
                            </ul>
                        </div>
                        
                        <div class="project-features">
                            <h3>🚀 Project Highlights:</h3>
                            <ul>
                                <li>🎯 <strong>Combat Brutal Theme:</strong> Blood-splitting visual effects with focused gameplay</li>
                                <li>🌌 <strong>Dynamic Space Background:</strong> Animated stars and asteroids</li>
                                <li>🔊 <strong>Procedural Audio:</strong> Cyberpunk-style sound effects generated in real-time</li>
                                <li>🎨 <strong>Modern UI:</strong> Responsive design with smooth animations</li>
                                <li>⚡ <strong>Performance Optimized:</strong> Efficient rendering and memory management</li>
                                <li>🎮 <strong>Enhanced Gameplay:</strong> Multiple difficulty modes and power-ups</li>
                            </ul>
                        </div>
                        
                        <div class="developer-notes">
                            <h3>💡 Developer Notes:</h3>
                            <p>This project was developed as a learning experience in modern web game development. 
                            It combines various web technologies to create an immersive gaming experience with 
                            procedural content generation and modern UI/UX principles.</p>
                        </div>
                    </div>
                </div>
            `;
            
            // Add styles
            const styles = document.createElement('style');
            styles.textContent = `
                .about-tab-button {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(45deg, #ff0000, #8b0000);
                    color: white;
                    padding: 12px 20px;
                    border-radius: 25px;
                    cursor: pointer;
                    font-family: 'Orbitron', monospace;
                    font-weight: 600;
                    font-size: 14px;
                    box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
                    transition: all 0.3s ease;
                    z-index: 10000;
                    border: 2px solid #ff4500;
                }
                
                .about-tab-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(255, 0, 0, 0.4);
                    background: linear-gradient(45deg, #ff4500, #ff0000);
                }
                
                .about-panel {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    backdrop-filter: blur(10px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10001;
                    opacity: 1;
                    transition: opacity 0.3s ease;
                }
                
                .about-panel.hidden {
                    opacity: 0;
                    pointer-events: none;
                }
                
                .about-content {
                    background: linear-gradient(135deg, #0a0000 0%, #1a0000 50%, #2d0000 100%);
                    border: 3px solid #ff0000;
                    border-radius: 15px;
                    padding: 30px;
                    max-width: 800px;
                    max-height: 80vh;
                    overflow-y: auto;
                    box-shadow: 0 0 50px rgba(255, 0, 0, 0.3);
                    position: relative;
                }
                
                .about-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                    padding-bottom: 15px;
                    border-bottom: 2px solid #ff4500;
                }
                
                .about-header h2 {
                    font-family: 'Orbitron', monospace;
                    color: #ff4500;
                    margin: 0;
                    font-size: 2rem;
                    text-shadow: 0 0 10px #ff4500;
                }
                
                .close-about {
                    background: #ff0000;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    font-size: 24px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .close-about:hover {
                    background: #ff4500;
                    transform: scale(1.1);
                }
                
                .about-body {
                    color: #fff;
                    font-family: 'Rajdhani', sans-serif;
                    line-height: 1.6;
                }
                
                .developer-info, .tech-stack, .project-features, .developer-notes {
                    margin-bottom: 25px;
                }
                
                .developer-info p {
                    font-size: 1.1rem;
                    margin-bottom: 8px;
                }
                
                .tech-stack h3, .project-features h3, .developer-notes h3 {
                    color: #ff4500;
                    font-family: 'Orbitron', monospace;
                    margin-bottom: 15px;
                    font-size: 1.3rem;
                }
                
                .tech-stack ul, .project-features ul {
                    list-style: none;
                    padding-left: 0;
                }
                
                .tech-stack li, .project-features li {
                    padding: 8px 0;
                    border-left: 3px solid #ff4500;
                    padding-left: 15px;
                    margin-bottom: 5px;
                    background: rgba(255, 69, 0, 0.1);
                    border-radius: 0 5px 5px 0;
                }
                
                .developer-notes p {
                    font-style: italic;
                    color: #ccc;
                    background: rgba(255, 0, 0, 0.1);
                    padding: 15px;
                    border-radius: 8px;
                    border-left: 4px solid #ff0000;
                }
                
                @media (max-width: 768px) {
                    .about-content {
                        margin: 20px;
                        padding: 20px;
                        max-width: 95vw;
                        max-height: 85vh;
                    }
                    
                    .about-header h2 {
                        font-size: 1.5rem;
                    }
                    
                    .about-tab-button {
                        top: 10px;
                        right: 10px;
                        padding: 10px 15px;
                        font-size: 12px;
                    }
                }

                @media (max-width: 480px) {
                    .about-content {
                        margin: 10px;
                        padding: 15px;
                        max-width: 98vw;
                        max-height: 90vh;
                    }
                    
                    .about-header h2 {
                        font-size: 1.3rem;
                    }
                    
                    .about-body {
                        font-size: 0.9rem;
                        line-height: 1.4;
                    }
                    
                    .tech-stack h3, .project-features h3, .developer-notes h3 {
                        font-size: 1.1rem;
                    }
                    
                    .tech-stack li, .project-features li {
                        padding: 6px 0;
                        padding-left: 12px;
                        font-size: 0.85rem;
                    }
                }

                @media (max-width: 320px) {
                    .about-content {
                        margin: 5px;
                        padding: 12px;
                        max-width: 99vw;
                        max-height: 95vh;
                    }
                    
                    .about-header h2 {
                        font-size: 1.1rem;
                    }
                    
                    .about-body {
                        font-size: 0.8rem;
                        line-height: 1.3;
                    }
                    
                    .tech-stack h3, .project-features h3, .developer-notes h3 {
                        font-size: 1rem;
                    }
                    
                    .tech-stack li, .project-features li {
                        padding: 5px 0;
                        padding-left: 10px;
                        font-size: 0.8rem;
                    }
                }
            `;
            
            document.head.appendChild(styles);
            document.body.appendChild(aboutButton);
            document.body.appendChild(aboutPanel);
        }

        bindEvents() {
            // Toggle about panel
            document.getElementById('about-varun-tab').addEventListener('click', () => {
                this.toggleAbout();
            });
            
            // Close about panel
            document.getElementById('closeAbout').addEventListener('click', () => {
                this.hideAbout();
            });
            
            // Close on background click
            document.getElementById('about-varun-panel').addEventListener('click', (e) => {
                if (e.target.id === 'about-varun-panel') {
                    this.hideAbout();
                }
            });
            
            // Close on Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isVisible) {
                    this.hideAbout();
                }
            });
        }

        toggleAbout() {
            if (this.isVisible) {
                this.hideAbout();
            } else {
                this.showAbout();
            }
        }

        showAbout() {
            document.getElementById('about-varun-panel').classList.remove('hidden');
            this.isVisible = true;
        }

        hideAbout() {
            document.getElementById('about-varun-panel').classList.add('hidden');
            this.isVisible = false;
        }
    }

    // Initialize when DOM is ready
    function initializeAbout() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                window.aboutVarun = new AboutVarunUI();
                console.log('👨‍💻 About Varun UI initialized');
            });
        } else {
            window.aboutVarun = new AboutVarunUI();
            console.log('👨‍💻 About Varun UI initialized');
        }
    }

    // Start initialization
    initializeAbout();

})();

