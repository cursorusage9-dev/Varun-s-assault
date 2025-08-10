# 🎮 Varun's Assault - Neural Network Defense

A modern, mobile-responsive space typing game with combat brutal visuals and dynamic effects.

## 🚀 Live Demo
**Play the game:** [https://varuns-assault.onrender.com](https://varuns-assault.onrender.com)

## 👨‍💻 About the Developer
- **Name:** Varun
- **Student:** 2nd Year CSE Student
- **College:** Gokulakrishna College of Engineering
- **Project:** Varun's Assault - Neural Network Defense

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Game Engine:** Impact.js (Modified)
- **Audio:** Web Audio API for Procedural Sound Generation
- **Graphics:** HTML5 Canvas for Dynamic Backgrounds
- **Effects:** Custom Particle System
- **Styling:** Modern CSS with Animations & Gradients

## 🎯 Features
- 🎯 **Combat Brutal Theme:** Blood-splitting visual effects with focused gameplay
- 🌌 **Dynamic Space Background:** Animated stars and asteroids
- 🔊 **Procedural Audio:** Cyberpunk-style sound effects generated in real-time
- 🎨 **Modern UI:** Responsive design with smooth animations
- ⚡ **Performance Optimized:** Efficient rendering and memory management
- 🎮 **Enhanced Gameplay:** Multiple difficulty modes and power-ups
- 📱 **Mobile Responsive:** Works perfectly on all devices

## 🎮 How to Play
1. **Type the words** that appear on enemy ships
2. **Destroy enemies** before they reach the bottom
3. **Use EMP** for emergency situations
4. **Survive** as long as possible and achieve high scores

## 🎵 Background Music
The game features dynamic background music:
- **Primary Track:** `endure.ogg` (1.9MB)
- **Secondary Track:** `orientation.ogg` (1.3MB)
- **Random Playback:** Tracks switch randomly during gameplay

## 🚀 Deployment
This project is configured for easy deployment on Render:

### Render Deployment
1. Connect your GitHub repository to Render
2. Select "Static Site" as the service type
3. Set build command: `echo "Static site - no build required"`
4. Set start command: `python -m http.server 8000`
5. Deploy!

### Local Development
```bash
# Clone the repository
git clone https://github.com/cursorusage9-dev/Varun-s-assault.git

# Navigate to project directory
cd Varun-s-assault

# Start local server
python -m http.server 8000

# Open in browser
open http://localhost:8000
```

## 📁 Project Structure
```
Varun-s-assault/
├── index.html              # Main game interface
├── varuns-assault.js       # Core game engine
├── varuns-assault-config.js # Game configuration
├── about-varun.js          # About developer section
├── generate-sounds.js      # Procedural sound generation
├── generate-backgrounds.js # Dynamic background generation
├── particle-system.js      # Visual effects system
├── package.json           # Project configuration
├── render.yaml            # Render deployment config
├── README.md              # Project documentation
└── media/                 # Game assets
    ├── music/             # Background music
    ├── sounds/            # Sound effects
    ├── background/        # Background images
    └── sprites/           # Game sprites
```

## 🎨 Customization
The game is highly customizable through the configuration file:
- **Visual themes** and color schemes
- **Audio settings** and sound effects
- **Game difficulty** and mechanics
- **UI elements** and animations

## 🔧 Development Notes
This project was developed as a learning experience in modern web game development. It combines various web technologies to create an immersive gaming experience with procedural content generation and modern UI/UX principles.

## 📄 License
MIT License - Feel free to use and modify!

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

---

**Developed with ❤️ by Varun - 2nd Year CSE Student, Gokulakrishna College of Engineering**
