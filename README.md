# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# About The Application

This is The frontend of the chat application . It is written in React.js , Using Bootstrap and Custom css. 
In the chat application, one has to first register and login with the credentials they have used to register to be authenticated. 
Once the user has logged in , they are able to see the active users and also send messages to them. If the other user is not on the application, they find a notifiaction on the bell icon indicating that they have a message. The application uses socket.io to able the realtime communication.The forntend is connected to the backend whose repository is also provided.

# Instructions on building and running container

with the Help of docker, 

Step 1: Install Docker
Before you start, make sure you have Docker installed on your machine. You can download Docker from the official website.

Step 2: Create a Dockerfile
A Dockerfile is a script that contains instructions to build a Docker image. Create a file named Dockerfile (no file extension) in your project directory.For example

# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose a port that the app will run on
EXPOSE 8080

# Define the command to run your application
CMD ["node", "app.js"]


Step 3: Build the Docker Image
Open a terminal and navigate to your project directory. Run the following command to build the Docker image for example
docker build -t my-container-app .

Step 4: Run the Docker Container
docker run -p 8080:8080 my-container-app
.
You can the later host the docker application after CI/CD  eith using github actions or Genkins
