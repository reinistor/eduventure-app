# eduventure
# Eduventure - Fullstack Educational Social Network RESTful API

Eduventure is a full-stack MERN application, an educational social network empowering users to share academic projects and opportunities in academia with a user-friendly interface and AI-powered matchmaking for fruitful collaborations.

## Setup

To run the app, follow these steps:

1. Clone the repository.
2. Navigate to the project's root directory.
3. Run the following command to install dependencies and start both the client and server-side of the app:
 npm install npm start

## Project Structure

The project is divided into two main components:

1. **Client** (React Interface)
2. **Server** (Backend)

### Client Setup

The client application is built using React, and the main pages are connected to the React app.

### Server Setup

The server application is built using Node.js, Express, and MongoDB. The basic dependencies installed using `npm install` include `body-parser`, `cors`, `express`, `mongoose`, and `nodemon`.

## MongoDB Configuration

The server application is connected to a real database using MongoDB, specifically the Cloud Atlas technology. To set up the connection, follow these steps:

1. Create a cluster for the database and set up a user and a configured IP address for accessing the database.
2. In the server application, import the `mongoose` package and configure the connection to the database.

## Backend Routes and Controllers

The backend implements the following routes and controllers to handle user and post functionalities:

**User Routes:**
- `GET /users`: Get all existing users.
- `GET /users/:id`: Get a specific user by ID.
- `POST /users`: Create a new user.
- `PUT /users/:id`: Update a specific user by ID.
- `DELETE /users/:id`: Delete a specific user by ID.

**Post Routes:**
- `GET /posts`: Get all existing posts.
- `GET /posts/:id`: Get a specific post by ID.
- `POST /posts`: Create a new post.
- `PUT /posts/:id`: Update a specific post by ID.
- `DELETE /posts/:id`: Delete a specific post by ID.

## AI-Powered Matchmaking

Eduventure now incorporates AI-powered matchmaking to enhance user collaboration. The AI algorithm analyzes users' academic interests, projects, and opportunities posted on the platform and suggests potential matches for collaboration based on shared interests, skills, and objectives.

With AI-powered matchmaking, users can discover like-minded individuals, form project teams, and explore academic opportunities that align with their goals, fostering a more vibrant and engaging educational community.

## Dependencies

The server application relies on the following essential packages for handling HTTP requests, managing the MongoDB database, and facilitating server development:

- `body-parser`: Parses data received in POST and PUT requests.
- `cors`: Enables cross-origin requests, allowing requests from other domains or IP addresses.
- `express`: A web framework for Node.js that simplifies web application development.
- `mongoose`: Facilitates interaction with the MongoDB database.
- `nodemon`: Helps in Node.js application development by automatically restarting the server on code changes.

## Authentication with Google

The app uses Google authentication, allowing users to access the application using their existing Google accounts. The implementation steps include:

1. Configuring the Google API Console to create and configure the application for Google authentication. This includes obtaining the Client ID and Client Secret.
2. Implementing the authentication in both the React app (client-side) and Node.js server (server-side).
3. Communicating between the client and server to handle the authentication process and create an access token for the user.



## Author: Andrei Nistor
