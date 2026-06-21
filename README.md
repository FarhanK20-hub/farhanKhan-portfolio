# Farhan Khan | Professional Portfolio

> "I don't just build systems. I make them inevitable."

A highly immersive, dual-persona portfolio built for Farhan Khan, an ML Engineer, Full-Stack Developer, Cloud Architect, and Cinematic Storyteller. The application seamlessly blends enterprise-grade engineering with cinematic visual storytelling.

## 🚀 Features

- **Dual Personas:** Switch seamlessly between "The Architect" (a precise, data-driven ML engineering profile) and "The Storyteller" (a cinematic, visually-driven creative profile).
- **Cinematic Experience:** Starts with an immersive video intro sequence with sound design and letterboxing. 
- **FarhanOS:** A hidden Easter Egg terminal interface mimicking a retro desktop environment. Access it by typing `boot os`.
- **Harvey Specter AI Assistant:** An arrogant but factually accurate AI assistant ready to answer questions about Farhan's experience on the Architect side.
- **Storyteller AI:** A cinematic, brooding AI assistant on the Storyteller side that answers questions about Farhan's creative vision.
- **Custom Hardware-Accelerated Physics:** Features an interactive GPU-accelerated Particle Canvas and a global Custom Cursor with contextual magnetic snapping.
- **Dynamic Live Stats:** Animated, Framer Motion powered live counters for social statistics and metrics.
- **Cinematic Soundtrack:** Integrated floating Radio Widget with continuous background playback across modes.
- **Dynamic Gate System:** Intelligent entry screen that adapts greetings based precisely on the user's local time.
- **Real-Time Communications:** Fully integrated contact form using EmailJS.

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Vanilla CSS (globals.css) with Tailwind CSS directives for resets.
- **Animations:** Framer Motion & GSAP
- **Scroll Interpolation:** Lenis (Smooth Scroll)
- **Services:** EmailJS

## 📁 Folder Structure

```
src/
├── app/                  # Next.js App Router (page, layout, globals.css)
├── components/           
│   ├── architect/        # Architect persona sections (Hero, About, Projects, etc.)
│   ├── storyteller/      # Storyteller persona sections (Hero, Work, Clients, etc.)
│   ├── shared/           # Shared UI (AIAssistant, CustomCursor, ParticleCanvas, LiveCounter)
│   ├── gate/             # Landing/Entry gate components
│   ├── intro/            # Video intro sequence components
│   └── select/           # Persona selection screen
├── context/              # React Context (NavigationContext for global state)
├── hooks/                # Custom hooks (useGlitch, useInView, useMagnetic, useTypewriter)
├── lib/                  # Static data and utility functions (data.ts, sound.ts)
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
