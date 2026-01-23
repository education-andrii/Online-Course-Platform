# 🎓 Online Course Platform
![Node Version](https://img.shields.io/badge/node-v20.0.0+-blue?style=flat-square&logo=node.js)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=flat-square&logo=redux&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23C1E1C1?style=flat-square&logo=swagger&logoColor=black)
## A full-stack educational web application, an online course website for managing and viewing educational courses with an integrated authorization system and a dynamic interface

### 🔗 Live Demo

  You can explore the live version of the application here:
  **[View Live Demo](https://online-course-platform-wine.vercel.app)**

#### ⚠️ Important Note on Live Demo

Since the Backend is hosted on **Render's free tier**, the server may "go to sleep" after a period of inactivity. 

* **Cold Start:** If you are accessing the live site for the first time in a while, the initial request might take approximately **~50 seconds** to wake up the server.
* If the page appears empty or shows a loading error, please wait a minute and refresh the page. Once the server is "awake," it will respond instantly.

## 📂 Project Structure

```text
.
├── backend/                # NestJS API
│   ├── bd/                 # Database (JSON storage)
│   └── src/                # Modules (Auth, Courses, Users)
└── frontend/               # React + Vite
    ├── src/store/          # Redux State Management
    ├── src/components/     # Pages & Layouts
    ├── src/common/         # Shared UI Components (UI Kit)
    └── src/services/       # API Integration
```

### ⚙️ Setting up
##### ⚠️ This project requires a parallel launch of the Backend API and the Frontend client to function correctly
##### To set up this project you have to follow these steps:
 1. Clone the repository. Use `git copy https://github.com/education-andrii/Online-Course-Platform.git` to clone with HTTPS.<br/>

 2. Backend setup: go to the /backend directory `cd backend` and install the dependencies in your CLI. Use `npm install`

 3. Frontend setup: go to the /frontend directory `cd frontend` and install the dependencies in your CLI. Use `npm install`

#### Environment Variables
  Before running the app, you need to configure the environment variables
  
  * **Frontend Configuration**
  
  Create a `.env` file in the `frontend` folder and provide the API URL:
  ```env
  VITE_API_URL=http://localhost:4000
  ```

  * **Backend Configuration**
  
  By default, the server runs on port `4000`. To customize this or add security keys, create a `.env` file in the `/backend` folder:
  ```env
  PORT=4000
  JWT_SECRET=your_secret_key (if applicable)
  ```

### 🚀 Running
 In order to run the project correctly, it is necessary to launch the Frontend and Backend services in parallel.
 1. **Backend:** Go to the directory `cd backend` and utilize this command:
  ```bash
  npm run start:dev  
  ```
 * API Documentation: http://localhost:4000/api
 * Default Port: 4000
 * **Environment:** The server runs on port `4000` by default. You can override this by setting a `PORT` environment variable.

 2. **Frontend:** To run frontend, go to the directory `cd frontend` and use this command: 
  ```bash
    npm run dev  
  ```
 * App URL: http://localhost:5173
 * Environment: Powered by Vite

### 🌍 Deployment

  * Backend: Hosted on Render (Node.js environment).

  * Frontend: Hosted on Vercel with custom rewrites for React Router support.

  * CI/CD: Automatic deployments via GitHub integration.

### Additional scripts:

 1. For development (With Hot Module Replacement):
 * `npm run dev`

 2. To check the final assembly:
 * `npm run build`
 * `npm run preview`
