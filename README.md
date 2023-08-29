# MERN Authentication Project 
![image](https://github.com/DawidZyluk/MERN-auth/assets/91137753/271c99ab-e3ac-47d3-a47b-1296e9742f1d)
Welcome to the MERN Authentication Project! This repository showcases a robust authentication system built on the MongoDB, Express, React, and Node.js stack. It utilizes JWT stored in HTTP-Only cookies for secure user authentication. The backend integrates joi validation to ensure data integrity. On the frontend, Formik and Yup streamline form validation, while Redux Toolkit manages state with efficiency. Redux Toolkit Query simplifies data fetching, and MaterialUI enhances the user interface.

Live example: https://mern-auth-d99z.onrender.com

## Features

- Secure JWT authentication with HTTP-Only cookies
- Backend validation using joi
- Frontend form validation with Formik and Yup
- State management with Redux Toolkit
- Data fetching with Redux Toolkit Query
- MaterialUI integration for polished and responsive designs
- Password reset and e-mail verification
- API limiters to limit repeated requests

## Project Structure

The project is structured as follows:

```
├── client/               # Frontend React application
│   ├── src/              # Source code files
│   │   ├── assets/       # Assets folder
│   │   ├── components/   # Reusable React components
│   │   ├── screens/      # Different application pages
│   │   ├── store/        # API service and state functions
│   │   ├── utils/        # Helper functions
│   │   ├── ...
├── ...
├── server/               # backend server using Express
│   ├── config/           # Database config
│   ├── controllers/      # API controllers
│   ├── middleware/       # Middleware functions
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── utils/            # Helper functions
│   ├── validators/       # Validation models
│   ├── ...
```

## Getting Started

Clone the repository:
   ```sh
   git clone https://github.com/DawidZyluk/MERN-auth
   ```

Set up the backend:
   - Navigate to the `server` directory: `cd server`
   - Install dependencies: `npm install`
   - Start the server: `npm run server`

Set up the frontend:
   - Navigate to the `client` directory: `cd client`
   - Install dependencies: `npm install`
   - Start the app: `npm run dev`

Access the app:
   - Open your browser and visit `http://localhost:3000`

## Contribution

Contributions are welcome! Feel free to enhance, expand, or fix issues in this project. Please fork the repository, create a new branch, commit your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

