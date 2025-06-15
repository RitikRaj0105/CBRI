# 🏗️ Automated Building Defect Detection System

## Table of Contents
- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [System Architecture](#system-architecture)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

---

## 📌 About

**Building Defect Detection System** is a web-integrated AI platform that automates the process of identifying, reporting, and managing structural defects in buildings. The system uses a YOLOv8-based deep learning model to detect defects such as cracks, dampness, corrosion, and vegetation from images, videos, and live webcam feeds.

It is designed to assist engineers, contractors, inspectors, and facility managers by providing a smart, centralized, and real-time interface for visual inspection, defect tracking, analytics, and collaborative resolution—all while improving accuracy and reducing manual effort.

---

## 🚀 Features

- 🔍 **AI-Powered Defect Detection** (Image/Video/Live Feed)
- 📥 Upload photos and videos for real-time defect analysis
- 📝 Report defects with location, description, and severity
- 📊 Visual dashboards for analytics and trends
- 👥 Role-based access (Admin, Inspector, Contractor, Viewer)
- 🔁 Track status: New → Assigned → In Progress → Resolved → Closed
- 🗂️ Powerful search and filters
- 📍 Hierarchical location mapping (Building > Floor > Room)
- 🧾 Full audit trail and comment threads per defect
- 📱 Mobile-responsive UI

---

## 🎬 Demo

- **Live Demo:** Coming Soon
- **Demo Video:** [Watch on YouTube](#)

---

## 🛠️ Technologies Used

### Frontend:
- React.js
- TailwindCSS / Material UI
- Axios (API calls)

### Backend:
- Python (Streamlit for AI Interface)
- Node.js with Express.js (Main API and Authentication)

### AI Model:
- YOLOv8 (Ultralytics)
- Custom-trained on OWAN dataset with 7 defect classes

### Database:
- Firebase Firestore (NoSQL real-time database)
- Firebase Storage (File/Image uploads)

### Tools:
- Git & GitHub
- Docker (optional)
- Postman (for testing APIs)

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Node.js (LTS)
- Python 3.10+
- npm or yarn
- Firebase project setup
- Git
- YOLOv8 & Ultralytics (`pip install ultralytics`)

### 📦 Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/RitikRaj0105/building-defect-system.git
cd building-defect-system
