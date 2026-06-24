# 🧞 Food Genie — AI Recipe Assistant

> A full-stack MERN application for discovering AI-powered personalized recipes.

## Tech Stack

- **Frontend**: React + Vite + React Router
- **Backend**: Node.js + Express.js
- **Database**: MongoDB Atlas
- **Auth**: JWT + bcrypt

## Project Structure

```
Food-Genie/
├── frontend/        → React + Vite app
└── backend/         → Node.js + Express API
```

## Getting Started

### 1. Backend Setup
```bash
cd backend
npm install
cp .env.example .env    # Fill in your credentials
npm run dev             # Runs on http://localhost:5000
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev             # Runs on http://localhost:5173
```

## Environment Variables (backend/.env)

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/food-genie?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login & get JWT |
| `GET`  | `/api/auth/me` | Get current user (protected) |
| `GET`  | `/api/health` | Health check |

## Features

- ✅ JWT Authentication
- ✅ Password hashing (bcrypt)
- ✅ Form validation (client + server)
- ✅ Password strength indicator
- ✅ Protected routes
- ✅ Responsive design
- ✅ Food Genie Design System (Montserrat + Inter fonts)
