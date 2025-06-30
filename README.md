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
