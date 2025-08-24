Aptos Learn Forge
=================

A lightweight React + Vite + Tailwind app for experimenting with Aptos and Move—designed as a starter/learning playground you can extend into an LMS-style dApp (courses, milestones, on-chain proofs, etc.).

Live demo: https://aptos-learn-forge.vercel.app Deployed from this repo.

Features

*   Modern UI stack: React + TypeScript + Vite for fast dev.
    
*   Tailwind CSS for utility-first styling.
    
*   shadcn/ui components for clean, accessible UI.
    
*   Ready for Web3 wiring: Plug in Aptos wallets, SDK calls, and Move modules as you go.
    
*   Vercel-ready: Zero-config deployment.
    

Tech Stack

*   Frontend: React, TypeScript, Vite
    
*   Styling: Tailwind CSS, shadcn/ui
    
*   Build/Tooling: ESLint, PostCSS
    
*   Deploy: Vercel
    

Quick StartPrerequisite: Node.js 18+ and npm (or bun/pnpm).

1.  Clonegit clone [https://github.com/Swamini1105/aptos-learn-forge.git](https://github.com/Swamini1105/aptos-learn-forge.git)cd aptos-learn-forge
    
2.  Install dependenciesnpm install
    
3.  Run dev servernpm run dev
    
4.  Build for productionnpm run build
    
5.  Preview production buildnpm run preview
    

Open the localhost URL to view the app.

Project Structure

aptos-learn-forge/├─ public/ # static assets├─ src/│ ├─ components/ # UI components (shadcn/ui, custom)│ ├─ pages/ or routes/ # app screens (if using router)│ ├─ lib/ # helpers, sdk wrappers│ ├─ styles/ # global styles if any│ └─ main.tsx # app entry├─ index.html # Vite entry html├─ tailwind.config.ts # Tailwind config├─ postcss.config.js├─ vite.config.ts└─ package.json

Wiring Aptos (Optional)

When you’re ready to connect Aptos:

1.  Install SDK & wallet adaptersnpm i aptos @aptos-labs/wallet-adapter-react @aptos-labs/wallet-adapter-ant-design
    
2.  Add a WalletProvider at the app root and render a connect button.
    
3.  Call your Move modules via the SDK (view functions, entry functions).
    
4.  Set network (devnet/testnet/local) and addresses via env variables.
    

Example env file (.env.local):VITE\_APTOS\_NETWORK=testnetVITE\_MODULE\_ADDRESS=0xYOURADDRESS

In code:const network = import.meta.env.VITE\_APTOS\_NETWORK;const moduleAddress = import.meta.env.VITE\_MODULE\_ADDRESS;

Available Scripts

*   npm run dev – Start Vite dev server
    
*   npm run build – Production build
    
*   npm run preview – Preview production build
    
*   npm run lint – Lint (if configured)
    

Deploy on Vercel

1.  Push your repo to GitHub.
    
2.  Import to Vercel → Framework preset: Vite.
    
3.  Build command: npm run build
    
4.  Output directory: dist
    
5.  Add environment variables (if using Aptos config).
    

Roadmap Ideas

*   Wallet connect (Pontem/Petra/OKX)
    
*   Course pages + progress
    
*   On-chain course completion milestone transaction
    
*   Peer review flow (submit → review → on-chain score)
    
*   NFT/POAP for achievements (optional)
    
*   Dashboard for learners & mentors
    
*   Unit tests + e2e tests
    

Contributing

1.  Fork the repo
    
2.  Create a feature branch: git checkout -b feat/my-feature
    
3.  Commit: git commit -m "feat: add my feature"
    
4.  Push: git push origin feat/my-feature
    
5.  Open a Pull Request
    

LicenseAdd a license (MIT recommended). Example: create LICENSE with MIT text and update this section.

CreditsBuilt with React, Vite, Tailwind, and shadcn/ui.Deployed on Vercel.Project bootstrapped from a modern template and extended for Aptos learning.
