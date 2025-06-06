# Flashcard App

## Getting Started

1. **Rename Docker Compose Example**

    Rename the file `docker-compose-example.yml` to `docker-compose.yml`:


2. **Configure Database**

    Update the database configuration in `backend/src/database/config.ts` with your own settings.

    3. **Launch the Project with Docker Compose**

        Start the application using Docker Compose, from root (you are here) dircetory:

        ```bash
        docker-compose up --build
        ```

        This command will build and start all necessary services as defined in your `docker-compose.yml` file.

    4. **Access the App in Your Browser**

        Once the containers are running, you can access the services at the following addresses (adjust if your `docker-compose.yml` uses different ports):

        - **Frontend:**  
          ```
          http://localhost:7777
          ```
        - **Backend:**  
          ```
          http://localhost:4000
          ```
        - **Database:**  
          The database service is internal and not directly accessible via browser.

        - **Database admin:**  
          http://localhost:5050
