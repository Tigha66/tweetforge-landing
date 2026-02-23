# LandingForge - AI Landing Page Studio

AI-powered landing page generator for creators with Stripe payments.

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Add your Stripe keys to .env.local

# Run development server
npm run dev
```

## Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Create a product with price ($9/month)
3. Get your API keys from https://dashboard.stripe.com/apikeys
4. Add keys to .env.local

## Deployment

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### GitHub
```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/tweetforge-landing.git
git push -u origin main
```

## Features

- 🎨 6 Ready-made templates
- 🤖 AI-powered page generation
- 💳 Stripe payments
- 📊 Analytics dashboard
- 🚀 One-click deploy

## License

MIT
