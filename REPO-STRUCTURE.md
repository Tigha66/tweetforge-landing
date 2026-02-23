# Repository Structure: LandingForge Landing Studio

## Monorepo Layout

```
tweetforge-landing/
├── apps/
│   ├── web/                    # Next.js main app
│   │   ├── src/
│   │   │   ├── app/           # App Router pages
│   │   │   │   ├── page.tsx           # Homepage
│   │   │   │   ├── builder/           # Landing builder
│   │   │   │   ├── templates/         # Template gallery
│   │   │   │   ├── pricing/           # Pricing page
│   │   │   │   ├── dashboard/         # User dashboard
│   │   │   │   ├── api/              # API routes
│   │   │   │   │   ├── stripe/       # Stripe endpoints
│   │   │   │   │   └── webhooks/     # Webhook handlers
│   │   │   │   └── layout.tsx
│   │   │   ├── components/     # React components
│   │   │   │   ├── ui/        # Shared UI
│   │   │   │   ├── builder/   # Builder components
│   │   │   │   └── templates/  # Template components
│   │   │   └── lib/           # Utilities
│   │   │       ├── stripe.ts   # Stripe client
│   │   │       └── ai.ts       # AI generation
│   │   ├── public/
│   │   ├── tailwind.config.ts
│   │   └── package.json
│   │
│── packages/
│   ├── ui/                    # Shared UI components
│   ├── database/              # Prisma schema
│   └── config/               # Shared config
│
├── templates/                 # 6-8 starter templates
│   ├── creator-portfolio/
│   ├── course-learning/
│   ├── service-business/
│   ├── product-launch/
│   ├── newsletter/
│   └── consulting/
│
├── .github/
│   └── workflows/
│       ├── ci.yml           # Build & test
│       └── deploy.yml        # Vercel deploy
│
├── prisma/
│   └── schema.prisma        # Database schema
│
├── .env.example             # Environment variables
├── package.json             # Root package.json
├── turbo.json               # Turborepo config
└── README.md
```

## Key Files

### Environment Variables (.env)
```
DATABASE_URL="file:./dev.db"
STRIPE_SECRET_KEY="sk_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_..."
AI_API_KEY="..."
```

### Database Schema (Prisma)
```prisma
model User {
  id            String    @id @default(cuid())
  email        String    @unique
  stripeCustomerId String?
  subscription  String?
  pagesGenerated Int     @default(0)
  createdAt    DateTime  @default(now())
}

model Page {
  id        String   @id @default(cuid())
  userId    String
  template  String
  content   Json
  published Boolean  @default(false)
  createdAt DateTime @default(now())
}
```

## Stripe Products
- **Product**: LandingForge Landing Pro
- **Price**: $9/month (price_...)
- **Checkout**: Stripe Checkout Session
- **Webhooks**: invoice.paid, customer.subscription.created/deleted
