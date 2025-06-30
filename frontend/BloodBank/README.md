# 🩸 Blood Bank Management System

A full-stack web application to manage blood donations and transfusions between Donors, Hospitals, and Organizations. Built with the **MERN stack** (MongoDB, Express, React, Node.js), this system supports real-time inventory tracking, secure user authentication, and analytics.

---

## 🚀 Features

- 🔐 **Role-based Authentication**
  - Admin
  - Organisation
  - Donor
  - Hospital

- 💉 **Inventory Management**
  - Blood donations (`in`) and requests (`out`)
  - Track blood availability by group and quantity

- 🏥 **User Types & Permissions**
  - Hospitals can request blood
  - Donors can donate blood
  - Organisations manage and approve transactions

- 📊 **Analytics Dashboard**
  - Blood group statistics
  - Inventory trends (recent & historical)

- 🔄 **Activity Logs**
  - View recent blood transactions
  - Track organization involvement

---

## 🛠️ Tech Stack

| Frontend        | Backend         | Database | Others                     |
|----------------|------------------|----------|----------------------------|
| React.js        | Node.js, Express | MongoDB  | JWT Auth, Redux, Axios     |
| React Router    | REST APIs        | Mongoose | Moment.js, Bootstrap       |

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Charasmi/BloodBank-System.git
cd bloodbank-app


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
