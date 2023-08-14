# MERN Authentication Project 
![image](https://github.com/DawidZyluk/MERN-auth/assets/91137753/9b97c9be-66a4-4e3a-9081-d86ce80cf111)
Welcome to the MERN Authentication Project! This repository showcases a robust authentication system built on the MongoDB, Express, React, and Node.js stack. It utilizes JWT stored in HTTP-Only cookies for secure user authentication. The backend integrates joi validation to ensure data integrity. On the frontend, Formik and Yup streamline form validation, while Redux Toolkit manages state with efficiency. Redux Toolkit Query simplifies data fetching, and MaterialUI enhances the user interface.

## Features

- Secure JWT authentication with HTTP-Only cookies
- Backend validation using joi
- Frontend form validation with Formik and Yup
- State management with Redux Toolkit
- Data fetching with Redux Toolkit Query
- MaterialUI integration for polished and responsive designs

## Project Structure

The project is structured as follows:

```
├── client/               # Frontend React application
│   ├── src/              # Source code files
│   │   ├── assets/       # Assets folder
│   │   ├── components/   # Reusable React components
│   │   ├── screens/      # Different application pages
│   │   ├── store/        # API service and state functions
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

