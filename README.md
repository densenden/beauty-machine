# Beauty Machine IRL

Professional mobile makeup services for executive women in Frankfurt.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Features

- **Responsive Design**: Beautiful, modern UI built with Tailwind CSS
- **Multi-language Support**: English, German, and Russian
- **Booking System**: Interactive calendar and package selection
- **Stripe Integration**: Secure payment processing
- **AI Service**: WhatsApp-based photo enhancement
- **Performance Optimized**: Built with Next.js 15 and optimized for Vercel

## 🔧 Configuration

Create a `.env.local` file with the following variables:

```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email Configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@domain.com
SMTP_PASS=your_email_password
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── app/               # AI service page
│   ├── book/              # Booking page
│   ├── service/           # Service & pricing page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── home/              # Homepage components
│   ├── service/           # Service page components
│   ├── Navigation.tsx     # Navigation component
│   └── Footer.tsx         # Footer component
└── lib/
    └── content.ts         # Content & translations
```

## 🌐 Pages

- **/** - Homepage with hero, editorial, and city context
- **/service** - Service packages and pricing
- **/book** - Interactive booking system
- **/about** - About Olga Kreuzer
- **/app** - AI service information
- **/contact** - Contact form
- **/gallery** - Image gallery (planned)

## 🎯 Key Components

### Home Page Components
- `HeroSection` - Hero banner with call-to-action
- `IntroEditorial` - Editorial content about the service
- `CityContext` - Frankfurt-specific context
- `BookingButton` - Call-to-action section

### Service Components
- `USPList` - Unique selling propositions
- `PricingTable` - Service packages and pricing

## 💳 Payment Integration

The project is set up for Stripe integration with:
- Package selection
- Date and time booking
- Secure payment processing
- Prepayment requirement

## 🎨 Design System

### Colors
- **Primary**: #450014 (Dark Bordeaux)
- **Accent**: #FF4FB1 (Elegant Pink)
- **Background**: #FFFFFF

### Typography
- **Font**: Geist (Thin, Light, Regular weights)
- **Style**: Minimalist, elegant, lots of white space

## 🌍 Internationalization

Content is structured for three languages:
- English (default)
- German
- Russian

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on git push

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📧 Contact

- **Company**: sen.co UG, Frankfurt am Main
- **Service Provider**: Olga Kreuzer
- **Website**: [Your Domain]

## 📝 License

Private project for Beauty Machine IRL services.

---

Built with ❤️ in Frankfurt
