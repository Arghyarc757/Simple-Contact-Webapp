# Simple CRUD Web Application

This project is a full-stack web application that demonstrates basic CRUD (Create, Read, Update, Delete) operations for managing users. It uses React for the frontend, Spring Boot for the backend, and PostgreSQL as the database.

## Features
- List all users
- Add a new user
- Edit user details
- View user details
- Delete a user

## Technology Stack
- Frontend: React (JavaScript)
- Backend: Spring Boot (Java)
- Database: PostgreSQL

---

## Getting Started

#### Prerequisites
- Node.js and npm (for the frontend)
- Java 17+ and Maven (for the backend)
- PostgreSQL (for the database)

#### 1. Clone the Repository
```sh
git clone https://github.com/Arghyarc757/Simple-Contact-Webapp.git
cd CRUDBasic
```

#### 2. Set Up the Database
1. Install PostgreSQL and start the service.
2. Create a database (e.g., `crud_db`).
3. Update the database credentials in `crudbackend/src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/crud_db
   spring.datasource.username=your_db_username
   spring.datasource.password=your_db_password
   ```

#### 3. Run the Backend (Spring Boot)
Navigate to the backend directory and start the server:
```sh
cd crudbackend
./mvnw spring-boot:run
```
The backend will start on http://localhost:8080

#### 4. Run the Frontend (React)
Open a new terminal, navigate to the frontend directory, install dependencies, and start the app:
```sh
cd crudfrontend
npm install
npm start
```
The frontend will start on http://localhost:3000

---

## Usage
- Open http://localhost:3000 in your browser.
- Use the UI to add, view, edit, or delete users.

## Project Structure
- `crudbackend/` - Spring Boot backend API
- `crudfrontend/` - React frontend application

## License
This project is for educational purposes.
