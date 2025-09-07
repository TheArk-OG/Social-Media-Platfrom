# Fullstack MERN Social Media App

This is a simple social media application built with the **MERN** stack (**M**ongoDB, **E**xpress, **R**eact, **N**ode.js). Users can create posts, and like or dislike them.

---

## 🚀 Features

* **Create Posts:** Write and submit new posts to the feed.
* **Like/Dislike Posts:** Interact with posts by incrementing or decrementing the like count.
* **Real-time Updates:** See like counts update without needing to refresh the page.
* **Sorted Feed:** Posts are displayed in reverse chronological order (newest first).

---

## 🛠️ Tech Stack

### Frontend

* **React:** A JavaScript library for building the user interface.
* **Vite:** A fast build tool that provides an efficient development environment for React.

### Backend

* **Node.js:** A JavaScript runtime for server-side logic.
* **Express.js:** A web application framework for building the API.
* **Mongoose:** An elegant MongoDB object modeling tool designed for a Node.js environment.
* **CORS:** A Node.js package for providing a Connect/Express middleware that can be used to enable cross-origin resource sharing.

### Database

* **MongoDB:** A NoSQL database used to store post data.

---

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Start the MongoDB database:**
    Ensure you have **MongoDB** installed and running on `mongodb://localhost:27017`. The application will connect to a database named `database1`.

3.  **Install backend dependencies:**
    ```bash
    npm install
    ```

4.  **Start the backend server:**
    ```bash
    node server.js
    ```
    The server will start on port `8080`.

5.  **Install frontend dependencies:**
    In a new terminal, navigate to the project directory and run:
    ```bash
    npm install
    ```

6.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    The React application will open in your browser, typically at `http://localhost:5173`.
