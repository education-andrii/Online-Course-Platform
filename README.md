# 🎓 Online Course Platform
## This is a full-stack educational web application, an online course website for managing and viewing educational courses with an integrated authorization system and a dynamic interface

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
├── backend/                # NestJS Application
│   ├── src/
│   │   ├── bd/             # Local Database (JSON)
│   │   ├── modules/        # API Logic (Auth, Courses, Users)
│   │   └── main.ts         # Swagger & Server Config
│   └── package.json
│
├── frontend/               # React Application
│   ├── src/
│   │   ├── store/          # Redux Toolkit (Slices & Store)
│   │   ├── components/     # Atomic UI components
│   │   ├── pages/          # Page-level components
│   │   ├── services/       # Axios API instances
│   │   └── App.tsx         # Routing logic
│   ├── vercel.json         # Vercel SPA routing config
│   └── package.json
└── README.md
```

### ⚙️ Setting up
##### ⚠️ This project requires a parallel launch of the Backend API and the Frontend client to function correctly
##### To set up this project you have to follow these steps:
 1. Clone the repository. Use `git copy https://github.com/education-andrii/Online-Course-Platform.git` to clone with HTTPS.<br/>
 Or `git copy git@github.com:education-andrii/Online-Course-Platform.git` to clone with SSH.

 2. Backend setup: go to the /backend directory `cd backend` and install the dependencies in your CLI. Use `npm install`

 3. Frontend setup: go to the /frontend directory `cd frontend` and install the dependencies in your CLI. Use `npm install`

### 🚀 Running
 In order to run the project correctly, it is necessary to launch the Frontend and Backend services in parallel.
 1. Go to the /backend directory `cd backend` and utilize this command: `npm run start:dev`  
 * API Documentation: http://localhost:4000/api
 * Default Port: 4000

 2. To run frontend, go to the /frontend directory `cd frontend`. Use this command: `npm run start`  
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
 
