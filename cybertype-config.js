/**
 * Varun's Assault Configuration
 * Central configuration for all game features and customizations
 */

window.CyberTypeConfig = {
    // Game Settings
    game: {
        title: "Varun's Assault - Neural Network Defense",
        version: "2.0.0",
        fps: 60,
        difficulty: {
            easy: { enemySpeed: 0.5, spawnRate: 1.0 },
            normal: { enemySpeed: 1.0, spawnRate: 1.0 },
            hard: { enemySpeed: 1.5, spawnRate: 1.2 },
            extreme: { enemySpeed: 2.0, spawnRate: 1.5 }
        }
    },

    // Visual Settings
    visuals: {
        theme: "combat-brutal",
        colors: {
            primary: "#ff0000",
            secondary: "#8b0000",
            accent: "#ff4500",
            background: "#1a0000",
            text: "#ffffff",
            glow: "#ff0000",
            blood: "#8b0000",
            fire: "#ff4500",
            dark: "#0a0000"
        },
        effects: {
            particles: true,
            screenShake: true,
            glowEffects: true,
            dynamicBackgrounds: true
        },
        backgrounds: [
            "cyber-grid",
            "neural-network", 
            "circuit-board",
            "data-stream"
        ]
    },

    // Audio Settings
    audio: {
        enabled: true,
        volume: {
            master: 0.7,
            sfx: 0.8,
            music: 0.5
        },
        sounds: {
            laser: {
                frequency: 800,
                duration: 0.1,
                volume: 0.3
            },
            explosion: {
                frequency: 200,
                duration: 0.3,
                volume: 0.5
            },
            emp: {
                frequency: 100,
                duration: 0.5,
                volume: 0.4
            },
            spawn: {
                frequency: 300,
                duration: 0.2,
                volume: 0.2
            },
            hit: {
                frequency: 400,
                duration: 0.05,
                volume: 0.3
            },
            powerUp: {
                frequency: 200,
                duration: 0.3,
                volume: 0.3
            }
        }
    },

    // Trainer Settings
    trainer: {
        enabled: true,
        features: {
            autoFire: {
                enabled: false,
                interval: 100,
                description: "Automatic weapon system"
            },
            manualFire: {
                enabled: false,
                description: "Press any key to shoot"
            },
            instantKill: {
                enabled: false,
                interval: 50,
                description: "One-shot elimination"
            },
            unlimitedEMP: {
                enabled: false,
                description: "Infinite EMP charges"
            },
            godMode: {
                enabled: false,
                description: "Invincible player"
            },
            shotgun: {
                enabled: false,
                description: "Kill all enemies"
            }
        },
        shortcuts: {
            "Alt+1": "autoFire",
            "Alt+2": "manualFire", 
            "Alt+3": "instantKill",
            "Alt+4": "unlimitedEMP",
            "Alt+5": "godMode",
            "Alt+6": "shotgun",
            "Alt+9": "deactivateAll"
        }
    },

    // UI Settings
    ui: {
        layout: "modern",
        responsive: true,
        animations: true,
        loadingScreen: true,
        statsPanel: true,
        controlsOverlay: true
    },

    // Performance Settings
    performance: {
        maxParticles: 100,
        particleLifetime: 2000,
        backgroundUpdateRate: 30,
        soundPoolSize: 10
    },

    // Achievement System
    achievements: {
        enabled: true,
        achievements: {
            speedDemon: {
                name: "Speed Demon",
                description: "Type 100 words per minute",
                condition: "wpm >= 100",
                icon: "⚡"
            },
            accuracyMaster: {
                name: "Accuracy Master", 
                description: "Maintain 95%+ accuracy",
                condition: "accuracy >= 95",
                icon: "🎯"
            },
            survivor: {
                name: "Survivor",
                description: "Survive 10 minutes without dying",
                condition: "survivalTime >= 600",
                icon: "🛡️"
            },
            empMaster: {
                name: "EMP Master",
                description: "Use EMP effectively 50 times",
                condition: "empUses >= 50",
                icon: "💥"
            },
            wordWarrior: {
                name: "Word Warrior",
                description: "Destroy 1000 enemies",
                condition: "enemiesDestroyed >= 1000",
                icon: "⚔️"
            }
        }
    },

    // Initialize configuration
    init() {
        this.loadSettings();
        this.applySettings();
        console.log("🛡️ Varun's Assault Configuration Loaded");
    },

    // Load settings from localStorage
    loadSettings() {
        try {
            const saved = localStorage.getItem('cybertype-settings');
            if (saved) {
                const settings = JSON.parse(saved);
                Object.assign(this, settings);
            }
        } catch (e) {
            console.warn("Failed to load settings:", e);
        }
    },

    // Save settings to localStorage
    saveSettings() {
        try {
            localStorage.setItem('cybertype-settings', JSON.stringify(this));
        } catch (e) {
            console.warn("Failed to save settings:", e);
        }
    },

    // Apply current settings
    applySettings() {
        // Apply audio settings
        if (window.cyberSoundGenerator) {
            window.cyberSoundGenerator.volume = this.audio.volume.master;
        }

        // Apply visual settings
        this.applyVisualSettings();

        // Apply trainer settings
        this.applyTrainerSettings();
    },

    // Apply visual settings
    applyVisualSettings() {
        const root = document.documentElement;
        
        // Set CSS custom properties
        root.style.setProperty('--primary-color', this.visuals.colors.primary);
        root.style.setProperty('--secondary-color', this.visuals.colors.secondary);
        root.style.setProperty('--accent-color', this.visuals.colors.accent);
        root.style.setProperty('--background-color', this.visuals.colors.background);
        root.style.setProperty('--text-color', this.visuals.colors.text);
        root.style.setProperty('--glow-color', this.visuals.colors.glow);
    },

    // Apply trainer settings
    applyTrainerSettings() {
        if (window.cyberTypeTrainer) {
            Object.keys(this.trainer.features).forEach(feature => {
                if (this.trainer.features[feature].enabled) {
                    window.cyberTypeTrainer.activateFeature(feature);
                }
            });
        }
    },

    // Get current difficulty settings
    getDifficultySettings() {
        return this.game.difficulty.normal; // Default to normal
    },

    // Update settings
    updateSettings(newSettings) {
        Object.assign(this, newSettings);
        this.saveSettings();
        this.applySettings();
    },

    // Reset to defaults
    resetToDefaults() {
        localStorage.removeItem('cybertype-settings');
        location.reload();
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.CyberTypeConfig.init();
    });
} else {
    window.CyberTypeConfig.init();
}
