# 🚀 Render Deployment Guide

## Quick Deploy to Render

### Step 1: Connect to Render
1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" and select "Static Site"
3. Connect your GitHub account
4. Select the repository: `cursorusage9-dev/Varun-s-assault`

### Step 2: Configure Deployment
- **Name:** `varuns-assault`
- **Build Command:** `echo "Static site - no build required"`
- **Publish Directory:** `./` (or leave empty for root directory)
- **Environment:** Static Site

### Step 3: Deploy
1. Click "Create Static Site"
2. Render will automatically deploy your site
3. Your site will be available at: `https://varuns-assault.onrender.com`

## Manual Configuration

If you prefer manual setup:

### Build Settings
```yaml
Build Command: echo "Static site - no build required"
Publish Directory: ./
```

### Environment Variables
```yaml
NODE_ENV: production
```

### Custom Headers (Optional)
```yaml
Cache-Control: public, max-age=31536000
```

## Local Testing

Before deploying, test locally:

```bash
# Clone the repository
git clone https://github.com/cursorusage9-dev/Varun-s-assault.git

# Navigate to project
cd Varun-s-assault

# Start local server
python -m http.server 8000

# Open in browser
open http://localhost:8000
```

## Troubleshooting

### Common Issues:
1. **Build fails:** Make sure all files are committed to GitHub
2. **Assets not loading:** Check file paths in HTML
3. **CORS issues:** Ensure all resources are from same domain

### Support:
- Check Render logs in the dashboard
- Verify all files are in the repository
- Test locally before deploying

## Post-Deployment

After successful deployment:
1. Update the README.md with your live URL
2. Test all game features
3. Share the link with others!

---

**Your game will be live at:** `https://varuns-assault.onrender.com`
