# Flashcard App

## Getting Started

1. **Rename Docker Compose Example**

   Rename the file `docker-compose-example.yml` to `docker-compose.yml`:

2. **Configure Database**

   Update the database configuration in `backend/src/database/config.ts` with your own settings.

   Example `backend/src/database/config.ts`:

   ```ts
   export const databaseConfig = {
     type: process.env.DATABASE_TYPE || "postgres",
     database: process.env.DATABASE_NAME || "your_database",
     host: process.env.DATABASE_HOST || "localhost",
     port: process.env.DATABASE_PORT || 5432,
     username: process.env.DATABASE_USER || "your_username",
     password: process.env.DATABASE_PASSWORD || "your_password",
   };

   export const databaseName = "your_database";
   export const databaseUrl = `postgresql://${databaseConfig.username}:${databaseConfig.password}@${databaseConfig.host}:${databaseConfig.port}/${databaseName}?schema=public`;
   ```

   **Note:**  
   Replace the placeholder values (`your_database`, `your_username`, `your_password`) with your actual database credentials.

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
        ```
        http://localhost:5050
        ```
