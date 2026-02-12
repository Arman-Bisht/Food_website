


## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub (your `.env.local` is already protected by `.gitignore`)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project" and import your GitHub repository
4. In the project settings, add your environment variable:
   - Key: `GEMINI_API_KEY`
   - Value: Your actual API key
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to link your project
4. Add environment variable: `vercel env add GEMINI_API_KEY`
5. Deploy: `vercel --prod`

### Important Notes

- Never commit `.env.local` to GitHub (already protected by `.gitignore`)
- Always set `GEMINI_API_KEY` in Vercel's environment variables dashboard
- The `.env.example` file shows what variables are needed without exposing secrets
