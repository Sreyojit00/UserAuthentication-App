# User Authentication

## Overview

User Authentication is a web application that allows users to sign up and log in securely. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and includes features like user registration, login, and OTP verification for added security.

## Features

- **User Signup**: Users can create an account with their name, email, password, and confirm password fields.
- **User Login**: Existing users can log in using their email and password.
- **OTP Verification**: Users receive an OTP (One-Time Password) during the signup process to verify their identity.
- **Redux State Management**: User details are managed using Redux for efficient state management.

## Tech Stack

- **Frontend**: React, Redux
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Others**: JWT for authentication, nodemailer for sending OTPs

## Installation

Step 1: Clone the Repository
git clone https://github.com/yourusername/UserAuthApp.git
cd UserAuthApp
 Install Dependencies:
 cd backend
npm install
Frontend:
cd frontend
npm install
Step 3: Set Up Environment Variables
Backend (.env)
Create a .env file in the backend directory:
MONGODB_URI = ongodb+srv://sreyajitlm105:1234@mern.fvgwst0.mongodb.net/?retryWrites=true&w=majority&appName=MERN
FRONTEND_URL = http://localhost:3000
TOKEN_SECRET_KEY = "sjadshdgadgajdgajhdgadggagggahgdgd"

Step 4: Run the Application
cd backend
npm run dev
Start Frontend
cd frontend
npm start
Folder Structure
UserAuthApp/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
└── README.md
Usage
User Registration: Users can register by providing a name, email, and password. An OTP is sent for email verification.
Login: Registered users can log in using their email and password.
OTP Verification: Additional security layer with OTP sent to the registered email.
Contact & About Pages: Informative pages to engage users and provide details about the application.
Contributing
Feel free to contribute to the project by opening issues or submitting pull requests. Please ensure that your contributions align with the coding standards used in the project.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
React for creating a powerful frontend framework.
Node.js and Express for backend infrastructure.
MongoDB for providing a robust database solution.
Tailwind CSS for the utility-first design framework.

