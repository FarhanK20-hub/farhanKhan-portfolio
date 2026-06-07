# Farhan Khan | Professional Portfolio

> "I don't just build systems. I make them inevitable."

A highly immersive, dual-persona portfolio built for Farhan Khan, an ML Engineer, Full-Stack Developer, and Cloud Architect. The application seamlessly blends enterprise-grade engineering with cinematic storytelling.

## 🚀 Features

- **Dual Personas:** Switch seamlessly between "The Architect" (a precise, data-driven ML engineering profile) and "The Storyteller" (a cinematic, visually-driven creative profile).
- **Recruiter View:** A fast, scannable, data-dense view optimized for ATS and recruiters.
- **FarhanOS:** A hidden Easter Egg terminal interface mimicking a retro desktop environment. Access it by typing `boot os`.
- **Harvey Specter AI Assistant:** An arrogant but factually accurate AI assistant ready to answer questions about Farhan's experience.
- **Custom Hardware-Accelerated Physics:** Features an interactive Particle Canvas and a global Custom Cursor with contextual magnetic snapping.
- **Real-Time Communications:** Fully integrated contact form using EmailJS.

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Services:** EmailJS

## 📁 Folder Structure

```
src/
├── app/                  # Next.js App Router (page, layout, globals.css)
├── components/           
│   ├── architect/        # Architect persona sections (Hero, About, Projects, etc.)
│   ├── storyteller/      # Storyteller persona sections
│   ├── shared/           # Shared UI (AIAssistant, CustomCursor, ParticleCanvas)
│   ├── gate/             # Landing/Entry gate components
│   └── select/           # Persona selection screen
├── context/              # React Context (NavigationContext for global state)
├── hooks/                # Custom hooks (useGlitch, useInView)
├── lib/                  # Static data and utility functions (data.ts)
└── types/                # TypeScript type definitions
```

## ⚙️ Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FarhanK20-hub/farhanKhan-portfolio.git
   cd farhanKhan-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Copy the example environment file and fill in your EmailJS credentials:
   ```bash
   cp .env.local.example .env.local
   ```
   *Required variables:*
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ARCH`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_STORY`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Build and Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1. Build the project locally to verify:
   ```bash
   npm run build
   ```
2. Start the production build:
   ```bash
   npm run start
   ```

## 🤝 Contributing Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open-source and available under the MIT License.

## 🏆 Credits

Designed and engineered by Farhan Khan.
