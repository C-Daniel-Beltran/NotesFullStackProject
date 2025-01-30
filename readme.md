### **Project Overview**  

This project is a full-stack web application built with modern technologies for both the backend and frontend. Below is a detailed description of the tools, setup, and configurations, including the specific versions of the technologies used.  

---

## **Backend Technologies**  

The backend handles API requests, manages data, and ensures secure and efficient communication with the database.  

### **Key Technologies (Versions Included):**  
- **Express (`^4.21.2`)** – A web application framework for Node.js to handle routing and middleware.  
- **Cors (`^2.8.5`)** – Middleware for enabling Cross-Origin Resource Sharing.  
- **Dotenv (`^16.4.7`)** – Loads environment variables from a `.env` file for secure configuration.  
- **Nodemon (`^3.1.9`)** – Automatically restarts the server during development when files change.  
- **pg (`^8.13.1`)** – PostgreSQL client for Node.js to manage database operations.  
- **pg-hstore (`^2.3.4`)** – Utility for handling PostgreSQL `hstore` data type.  
- **Sequelize (`^6.37.5`)** – ORM for defining and interacting with database models.  

---

## **Frontend Technologies**  

The frontend provides a responsive, user-friendly interface built with modern JavaScript tools.  

### **Key Technologies (Versions Included):**  
- **React (`^18.3.1`)** – Library for building user interfaces with reusable components.  
- **React DOM (`^18.3.1`)** – Enables React to interact with the DOM.  
- **React Router DOM (`^7.1.3`)** – Manages navigation and routing for single-page applications.  
- **Axios (`^1.7.9`)** – Handles API requests between the frontend and backend.  
- **Bootstrap (`^5.3.3`)** – CSS framework for pre-styled components and responsive design.  
- **FontAwesome (`@fortawesome/fontawesome-free ^6.7.2`)** – Icon library for adding scalable vector graphics to the UI.  
- **SweetAlert2 (`^11.15.10`)** – Provides customizable alerts and modals, integrated with React.  
- **SweetAlert2-React-Content (`^5.1.0`)** – SweetAlert2 wrapper for better React integration.  

---

## **Development and Build Tools**  

### **Key Tools (Versions Included):**  
- **Vite (`^6.0.5`)** – Fast development server and build tool for React applications.  
- **@vitejs/plugin-react-swc (`^3.5.0`)** – Enhances React development using the SWC compiler.  
- **ESLint (`^9.17.0`)** – Ensures code quality with rules specific to React and JavaScript.  
- **@eslint/js (`^9.17.0`)** – JavaScript linting configuration for ESLint.  
- **ESLint Plugin React (`^7.37.2`)** – React-specific linting rules.  
- **ESLint Plugin React Hooks (`^5.0.0`)** – Ensures proper usage of React hooks.  
- **ESLint Plugin React Refresh (`^0.4.16`)** – Linting support for React Refresh.  
- **Globals (`^15.14.0`)** – Provides a set of predefined global variables for linting.  
- **TypeScript Support:**  
  - **@types/react (`^18.3.18`)** – Type definitions for React.  
  - **@types/react-dom (`^18.3.5`)** – Type definitions for React DOM.  

---

## **Setup and Execution**  

### **Environment Variables**  
To connect to the database, configure the `.env` file with the following variables:  
```env
PORT=3000
DB_USER='postgres'
DB_PASSWORD='123456'
DB_HOST='localhost'
DB_NAME='notesdb'
DB_PORT='5432'
```  

### **Automated Setup with `start.sh`**  
This project includes three shell scripts (`.sh` files) to streamline setup and execution:  

1. **`start.sh`** – The main script to handle all installation and configuration steps. It:  
   - Installs project dependencies for both backend and frontend.  
   - Sets up the environment.  
   - Starts the development servers.  

   To run this script:  
   ```bash
   ./start.sh
   ```  

2. **Additional Scripts** – The other two scripts are auxiliary tools (e.g., for cleaning the project or resetting configurations). You can explore their functionality as needed.  

---

### **Manual Setup (Optional)**  
If you prefer to configure the project manually, follow these steps:  

#### **Backend Setup**  
1. Navigate to the backend directory:  
   ```bash
   cd backend
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Run the development server:  
   ```bash
   npm run dev
   ```  

#### **Frontend Setup**  
1. Navigate to the frontend directory:  
   ```bash
   cd frontend
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Start the frontend server:  
   ```bash
   npm run dev
   ```  
4. Open the application in your browser (default: `http://localhost:5173`).  

---

## **Project Highlights**  
- **Full Automation** – The `start.sh` script ensures effortless setup and initialization.  
- **Modern UI** – Combines React, Bootstrap, and FontAwesome for a polished interface.  
- **Efficient Backend** – Built with Express and Sequelize for reliable API and database operations.  
- **Enhanced Developer Workflow** – Includes tools like Vite, Nodemon, and ESLint for productivity.  

---

## **Future Improvements**  
- Add database migrations for easier schema updates.  
- Implement unit and integration testing for the backend and frontend.  
- Extend `.env` variables for additional configurations (e.g., API keys, production setups).  

Feel free to contribute to this project by reporting issues or submitting pull requests! 😊