![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

# HealTether Project

## Overview

### This project consists of a web application built with React and Redux for handling user authentication and state management. The application includes a login and registration system, which is demonstrated in Task 1, and utilizes Redux for state management as demonstrated in Task 2. The project is designed to provide a visually stunning and professional user interface.

## Project Structure

The project is structured as follows:
```
client/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   └── Register.js
│   ├── pages/
│   │   ├── LoginPage.js
│   │   └── RegisterPage.js
│   ├── App.js
│   ├── index.js
│   └── store.js
├── .gitignore
├── package.json
└── README.md
```

## Features
### Task 1: Authentication System

Login Page: Allows users to authenticate using their credentials.
Register Page: Provides a form for new users to create an account.

### Task 2: State Management with Redux

Redux Store: Manages application state, including user authentication status and user data.
State Management: Efficient handling of state transitions and updates using Redux.

## Installation

### Clone the Repository

```
git clone https://github.com/your-repo-url.git
cd your-repo-name
```

## Install Dependencies

Navigate to the client directory and install the required dependencies:
```
cd client
npm install
```
### Running the Application

Start the Development Server

Run the following command to start the development server:
```
npm start

The application will be available at http://localhost:3000.
```
## Usage
### Login Page

Navigate to /login to access the login page.
Enter credentials to log in.

### Register Page

Navigate to /register to access the registration page.
Fill out the form to create a new account.

## Code Explanation
* src/App.js

Defines the routes for the application and imports LoginPage and RegisterPage components:


```
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
```

* src/pages/LoginPage.js

Contains the Login component, which handles user login:
```
import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div className="page-container">
      <Login />
    </div>
  );
};

export default LoginPage;
```

* src/pages/RegisterPage.js

Contains the Register component, which handles user registration:
```
import React from 'react';
import Register from '../components/Register';

const RegisterPage = () => {
  return (
    <div className="page-container">
      <Register />
    </div>
  );
};

export default RegisterPage;
```

src/store.js

Sets up the Redux store for state management:

```
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
```

src/components/Login.js

A component for the login form:
```
import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
```
src/components/Register.js

A component for the registration form:
```
import React from 'react';

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
```