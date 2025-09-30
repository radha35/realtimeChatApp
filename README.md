# 💬 ConvoBuddy | 🫂Chat Friendly

**ConvoBuddy** is a **feature-rich real-time chat application** designed to provide a smooth and interactive messaging experience. Inspired by popular messaging platforms like WhatsApp, it enables users to communicate instantly with friends, share media, and see live updates such as typing indicators and online status.  

Built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)** and **Socket.io**, ConvoBuddy demonstrates the power of modern web technologies in handling **real-time data, secure authentication, and cloud-based media storage**.

🔗 **Live Demo:** [Realtime Chat Live](https://realtimechatapp-ifnq.onrender.com)  
📂 **Source Code:** [GitHub Repository](https://github.com/radha35/realtimeChatApp)  

---

## 🔑 Key Features
- 💬 **Real-time Messaging**: Send and receive messages instantly with **Socket.io**.  
- 🔐 **User Authentication**: Secure login and signup using **JWT** for protected user sessions (Signup/Login).  
- ✍️ **Typing Indicators & Online Status**: See when friends are typing or online.  
- 🖼 **Media Sharing**: Upload and share images via **Cloudinary**.  
- 📱 **Responsive UI**: Built with **React.js + TailwindCSS** for mobile and desktop devices.  
- ⚡ **Global State Management**: Smooth state handling using **Redux Toolkit**.  
- 📦 **Database Management**: **MongoDB** stores users, messages, and media efficiently.  
- 🚀 **Cloud Deployment**: Ready for production deployment on **Render** and **MongoDB Atlas**.    

---

## 📂 Folder Structure
```
REALTIMECHATAPP/
│
├── backend/ # Node.js + Express.js backend
│ ├── routes/ # Auth & Message APIs
│ ├── models/ # User & Message models
│ ├── middleware/ # JWT Auth Middleware
│ ├── server.js # Express + Socket.io entry point
│ └── package.json
│
├── frontend/ # React.js frontend
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── .env (hidden)
│
└── README.md
```

---

## 🛠 Tech Stack
**Frontend:** React.js, Redux Toolkit, TailwindCSS  
**Backend:** Node.js, Express.js, JWT Authentication  
**Database:** MongoDB (Mongoose)  
**Realtime Engine:** Socket.io (WebSockets)  
**Cloud Storage:** Cloudinary (for images)  
**Deployment:** Render (Frontend + Backend), MongoDB Atlas  

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/realtimechatapp.git
cd realtimechatapp
```

### 2️⃣ Setup Backend (Server)
```bash
cd backend
npm install
```

Create a `.env` file inside the `server` folder:
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_secret
```

Start the backend server:
```bash
npm run dev
```

---
### 3️⃣ Setup Frontend (Client)
Open a new terminal:
```bash
cd frontend
npm install
```

Start the frontend:
```bash
npm run dev
```

---

## 📦 How to Run
1. Start backend (cd backend && npm run dev)

2. Start frontend (cd frontend && npm run dev)

3. Open browser at: http://localhost:5173
 (Vite default port)

---

## 🔄 Flow Diagram
```plaintext
User (React Frontend) 
    → Express.js Backend 
        → MongoDB (Mongoose) 
        → Socket.io (Realtime Messaging) 
        → Cloudinary (Image Uploads) 
    → Back to User (Realtime Chat UI)
```
---


## 👨‍💻 Author
**Radha**  
🔗 [GitHub](https://github.com/radha35)  
