# Intro to Backend Development - Node.js & Express REST API

This repository contains the complete implementation of the **Intro to Backend Web Development** tutorial (freeCodeCamp / Shivani) using **Node.js**, **Express.js**, and **MongoDB Atlas**.

---

## 🚀 Features

- **Architecture:** Model-Route-Controller (MRC) pattern.
- **Database:** MongoDB Atlas via Mongoose ODM.
- **Authentication:**
  - Password hashing with `bcrypt`.
  - User Registration (`/api/v1/users/register`).
  - User Login (`/api/v1/users/login`).
  - User Logout (`/api/v1/users/logout`).
- **CRUD Operations on Posts:**
  - Create Post (`/api/v1/posts/create`).
  - Read All Posts (`/api/v1/posts/getPosts`).
  - Update Post (`/api/v1/posts/update/:id`).
  - Delete Post (`/api/v1/posts/delete/:id`).

---

## 🛠️ Project Structure

```text
├── backend/
│   └── src/
│       ├── config/
│       │   ├── constants.js
│       │   └── database.js
│       ├── controllers/
│       │   ├── user.controller.js
│       │   └── post.controller.js
│       ├── models/
│       │   ├── user.model.js
│       │   └── post.model.js
│       ├── routes/
│       │   ├── user.route.js
│       │   └── post.route.js
│       ├── app.js
│       └── index.js
├── .env
├── .env.example
├── .gitignore
├── Intro_to_Backend_Postman_Collection.json
└── package.json
```

---

## 📦 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Ensure your `.env` file exists in the project root:
```env
PORT=4000
MONGODB_URI="your_mongodb_atlas_connection_string"
```

### 3. Start the Server
- Development mode (with auto-reload using `nodemon`):
  ```bash
  npm run dev
  ```
- Production mode:
  ```bash
  npm start
  ```

Server will run at: `http://localhost:4000`

---

## 📬 Testing with Postman

1. Open the **Postman** desktop app.
2. Click **Import** (top left).
3. Drag & drop or select `Intro_to_Backend_Postman_Collection.json` from this project folder.
4. You will see two folders:
   - **Users:** Register, Login, Logout
   - **Posts:** Create Post, Get All Posts, Update Post, Delete Post
5. Start testing the endpoints!

