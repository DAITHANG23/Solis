# ☀️ Solis - Modern Restaurant Management System

Solis is a comprehensive, enterprise-grade Restaurant Management System designed to streamline operations, from table bookings and client relations to financial reporting and staff management. Built with the latest web technologies, Solis offers a seamless, high-performance experience for restaurant owners and managers.

---

## 🚀 Key Features

### 📊 Comprehensive Dashboard
Get a bird's-eye view of your restaurant's performance. Real-time analytics and intuitive visualizations help you make data-driven decisions.

### 📅 Advanced Booking System
Manage reservations effortlessly. Track table availability, handle cancellations, and optimize seating capacity with a modern, responsive interface.

### 👥 Client Relationship Management (CRM)
Build lasting relationships with your customers. Maintain detailed client profiles, track visit history, and manage preferences effectively.

### 👨‍🍳 Staff & Role Management
Organize your team and manage permissions. Define roles, track performance, and ensure smooth operational flow across all departments.

### 💰 Financial Tracking & Analytics
Keep track of your revenue and expenses. Detailed financial reports provide insights into profitability and financial health.

---

## 🛠️ Tech Stack

Solis is built using a modern, scalable tech stack aimed at performance and developer experience:

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, React 19)
- **UI Library**: [Material UI (MUI) 6](https://mui.com/)
- **State Management**: 
    - [Redux Toolkit](https://redux-toolkit.js.org/) (Global state)
    - [TanStack React Query v5](https://tanstack.com/query/latest) (Server state & caching)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) / [Formik](https://formik.org/)
- **Icons & Illustrations**: [Lucide React](https://lucide.dev/) & MUI Icons
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Date Management**: [Day.js](https://day.js.org/)
- **API Client**: [Axios](https://axios-http.com/)
- **Tooling**:
    - [Biome](https://biomejs.dev/) (Formatting & Linting)
    - [ESLint](https://eslint.org/)
    - [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
    - [Husky](https://typicode.github.io/husky/) & [Commitlint](https://commitlint.js.org/)

---

## 🚦 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/solis.git
   cd solis
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Environment Variables:**
   Copy the `.env.example` file to `.env` and fill in the necessary API base URL.
   ```bash
   cp .env.example .env
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

Open [http://localhost:5001](http://localhost:5001) with your browser to see the application.

---

## 📁 Project Structure

```bash
src/
├── api/            # API services and Axios interceptors
├── app/            # Next.js App Router (Routes & Layouts)
├── constants/      # Global constants and config
├── contexts/       # React Contexts
├── features/       # Feature-based logic and hooks
├── libs/           # Library configurations (QueryClient, etc.)
├── theme/          # MUI Theme customization
├── types/          # TypeScript interfaces and definitions
└── utils/          # Shared utility functions
```

---

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode at port 5001 |
| `npm run build` | Builds the app for production |
| `npm run start` | Starts the production server |
| `npm run lint` | Lints the codebase with ESLint |
| `npm run format` | Formats the source code with Prettier/Biome |
| `npm run test:watch` | Runs Jest tests in watch mode |

---

## 💎 Code Standards

We maintain high code quality through:
- **Linting & Formatting**: Powered by [Biome](https://biomejs.dev/) and ESLint.
- **Commit Standards**: Conventional Commits via `commitlint`.
- **Pre-commit Hooks**: Enforced by `Husky` to ensure code quality before every commit.

---

## 📄 License

This project is private and proprietary. All rights reserved.
