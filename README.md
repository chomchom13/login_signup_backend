# Login Signup Backend

This repository contains the backend implementation of a user authentication system with signup and login functionalities. The application is built using Node.js, Express, MongoDB, and bcrypt, ensuring secure user registration and authentication.

## Features

- **User Signup:** Create an account with a unique email address and a securely hashed password.
- **User Login:** Authenticate users with email and password, utilizing bcrypt for password hashing.
- **JSON Web Tokens (JWT):** Potential for future implementation of JWT-based authentication.
- **Express Routing:** Organized routes for signup and login functionalities using Express.js.
- **Database Connection:** Configured MongoDB connection using dotenv for environment variable management.

## How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/login_signup_backend.git

2. **Install Dependencies:**
   ```bash
   npm install

3. **Set up MongoDB:**
   - Update the .env file with your MongoDB URI

4. **Start the Server:**
   ```bash
   npm start

5. **Test API Endpoints:**
   - Use tools like Insomnia or Postman to test the API endpoints
   - Endpoint examples:
      - Signup: POST http://localhost:3000/api/signup
      - Login: POST http://localhost:3000/api/login

## Contributing

Feel free to contribute, report issues, or use this backend as a foundation for building more advanced authentication features. Pull requests are welcome!
