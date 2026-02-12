# Deployment Guide for Vercel

## Security Checklist ✅

Your repository is secure:
- ✅ `.env.local` is protected by `.gitignore`
- ✅ No hardcoded API keys found in code
- ✅ `.env.example` template created
- ✅ Vercel configuration ready

## Quick Deploy Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Deploy on Vercel

**Via Dashboard (Easiest):**
1. Go to https://vercel.com and sign in with GitHub
2. Click "Add New Project"
3. Import your repository: `https://github.com/Arman-Bisht/Food_website.git`
4. Configure project:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add Environment Variable:
   - Click "Environment Variables"
   - Name: `GEMINI_API_KEY`
   - Value: [Your actual API key from .env.local]
   - Select all environments (Production, Preview, Development)
6. Click "Deploy"

**Via CLI:**
```bash
npm i -g vercel
vercel login
vercel
# Follow prompts
vercel env add GEMINI_API_KEY
# Paste your API key
vercel --prod
```

### 3. Verify Deployment
- Check the deployment URL provided by Vercel
- Test all features to ensure API key is working

## Environment Variables

Required variables in Vercel:
- `GEMINI_API_KEY` - Your Gemini API key (from Google AI Studio)

## Troubleshooting

**Build fails?**
- Check that `GEMINI_API_KEY` is set in Vercel environment variables
- Verify Node.js version compatibility

**API not working?**
- Ensure environment variable is set for all environments
- Redeploy after adding environment variables

## Important Notes

- Never commit `.env.local` to GitHub
- Always use Vercel's environment variables dashboard for secrets
- The `.env.example` file is safe to commit (no actual secrets)
