# My Budget Dashboard

[![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Styling: Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![UI: shadcn/ui](https://img.shields.io/badge/UI-shadcn%2Fui-000000)](https://ui.shadcn.com/)
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

> Personal budget dashboard built with Next.js (App Router), Tailwind CSS and shadcn/ui.  
> Clean, white theme with soft glassmorphism and simple, intuitive layout.

---

## 🧾 Overview

This project is a **personal budget dashboard** where a user can track income, expenses and savings in a simple, visual way.

The UI is:

- Built with **Next.js App Router** 
- Styled using **Tailwind CSS**
- Enhanced with **shadcn/ui** components 

---

## ✨ Planned Features

> Some of these are not fully implemented yet — this is the roadmap for the app.

- **Dashboard overview**
  - Summary cards showing total income, total expenses and total savings
  - A visual section for **Expected vs Actual income** (simple chart style)

- **Left sidebar navigation**
  - Tabs for:
    - `Dashboard`
    - `This month`
    - `Income`
    - `Expenses`
    - `Savings`
    - `Settings`
  - Sidebar visible on desktop, replaced with a dropdown/tab switcher on mobile

- **Entries (transactions)**
  - Add **income** and **expense** entries
  - Each entry will include:
    - Type: `income` or `expense`
    - Category: `bill`, `savings`, `personal`
    - Date
    - Amount
    - Notes
    - Emoji/icon
  - Categories represented by a **coloured circular background + emoji**  
    e.g. a bill with a TV emoji inside a coloured circle

- **This Month view**
  - Filtered view showing entries for the selected month
  - Quick stats: income, expenses and savings for that month
  - Buttons or tabs to switch between months

- **Authentication UI (visual only for now)**
  - Buttons for:
    - “Continue with Google”
    - “Facebook”
    - “Email login / normal login”
  - These are currently **UI placeholders** and can be wired up later using NextAuth or a custom auth solution.

- **Settings (future)**
  - Area for future configuration:
    - Currency
    - Default monthly budget
    - Category management
    - Theme options

---

## 🏗 Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (for ready-made UI primitives like `Button` and `Card`)

---

<!-- ## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd <your-repo-folder>
npm install -->
