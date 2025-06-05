<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->


# 🔗 URL Shortner (React + Vite + Supabase)

A sleek, modern, and fully-functional **URL shortening web app** built with **React**, powered by **Supabase**, styled with **Tailwind**, and deployed with **Netlify**. Includes secure **authentication**, personalized **dashboards**, and instant **redirection**.

> Make long URLs tiny. Track them. Rule them. 💼⚡

---

## 🚀 Features

- 🔐 **User Authentication** using Supabase
- 🎯 **URL Shortening** with unique identifiers
- 📊 **Dashboard** with personalized link tracking
- 🔄 **Redirect Pages** using dynamic routing
- 🎨 **ShadCN UI + TailwindCSS** for modern design
- ⚡ **Vite + React** for lightning-fast performance
- ☁️ **Fully hosted** & production-ready

---

## 🧱 Tech Stack

| Tech        | Purpose                          |
|-------------|----------------------------------|
| React       | Frontend UI                      |
| Vite        | Build tool & Dev server          |
| TailwindCSS | Styling                          |
| ShadCN UI   | Prebuilt modern UI components    |
| Supabase    | Backend (Auth + Database)        |
| React Router| Client-side routing              |
| Netlify     | Deployment                       |

---

## 🔧 Setup & Installation

```bash
# 1. Clone the repository
git clone https://github.com/Som0904/Url_Shortner.git

# 2. Navigate to the folder
cd Url_Shortner

# 3. Install dependencies
npm install

# 4. Create a `.env` file
# Add your Supabase project details

VITE_SUPABASE_URL=your-url
VITE_SUPABASE_KEY=your-key
VITE_PUBLIC_DOMAIN=http://localhost:5173

# 5. Run the development server
npm run dev
