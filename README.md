# 📚 Personal Book Collection Manager

## Overview

**Personal Book Collection Manager** is a **Single-Page Application (SPA)** built using **React, TypeScript, Redux Toolkit, and Tailwind CSS**. It allows users to **add, view, update, and delete** books while maintaining a global state for seamless data handling. The application features a **responsive UI, form validation, and smooth navigation** using React Router.

## 🚀 Features

- 📖 **Add, View, Update, and Delete** book entries.
- 🌍 **Global state management** using Redux Toolkit.
- 🎨 **Modern UI** with Tailwind CSS for responsiveness.
- 🔄 **Navigation** using React Router.
- ✅ **Form validation** for proper data entry.
- 🏗 **Modular and scalable architecture** using TypeScript.

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Redux Toolkit, React Router, Tailwind CSS
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS

## 📂 Project Structure

```
📂 personal-book-manager
│── 📂 src
│   ├── 📂 components        # Reusable UI components
│   ├── 📂 pages             # Application pages (Home, BookList, BookDetail, AddBook)
│   ├── 📂 redux             # Redux slices and store configuration
│   ├── 📂 assets            # Static assets (icons, images)
│   ├── 📜 App.tsx           # Main application component
│   ├── 📜 index.tsx         # Entry point
│── 📜 package.json          # Project dependencies
│── 📜 tailwind.config.js    # Tailwind configuration
│── 📜 README.md             # Project documentation
```

## 🔧 Installation & Setup

### 1. Clone the repository
```sh
git clone https://github.com/your-username/personal-book-manager.git
cd personal-book-manager
```

### 2. Install dependencies
```sh
npm install
# or
yarn install
```

### 3. Start the development server
```sh
npm run dev
# or
yarn dev
```

### 4. Open the app
Go to [http://localhost:5173/](http://localhost:5173/) (if using Vite) in your browser.

## ⚡ React + TypeScript + Vite Setup

This project uses React with TypeScript and Vite, providing a minimal and efficient setup with Hot Module Replacement (HMR) and optimized builds.

Currently, two official plugins are available:

- `@vitejs/plugin-react` (Uses Babel for Fast Refresh)
- `@vitejs/plugin-react-swc` (Uses SWC for Fast Refresh)

## 📏 Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the ESLint configuration to enable type-aware lint rules:

### 1️⃣ Configure the top-level `parserOptions` property:
```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

### 2️⃣ Update ESLint Rules:
Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
Optionally add `...tseslint.configs.stylisticTypeChecked`.

### 3️⃣ Install and Configure `eslint-plugin-react`:
```sh
npm install eslint-plugin-react --save-dev
```
Then, update the `eslint.config.js` file:
```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the React version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the React plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## 📝 Usage

- **Home Page**: Introduction and navigation.
- **Books List**: Displays all added books.
- **Add Book**: A form to add new books.
- **Book Detail/Edit**: View detailed book information with edit/delete options.

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo, create a new branch, and submit a pull request.

## 📜 License

This project is licensed under the **MIT License**.

🌟 Star this repo if you found it useful! 🚀📚

