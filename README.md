# Insight ERP

*This project (and document) is a work in progress and is subject to change at anytime without notice*

# About this project
This project is written using [Next.js](https://nextjs.org/) and [Clerk](https://clerk.com/) for authentication and user state management. In order to use the application, you must create your own clerk account and add a user in the dashboard BEFORE being able to login to the actual ERP application.

# Installation
1. Clone this repository:
```sh
git clone https://github.com/codyafingerson/insight-erp
```
2. Navigate to the project directory
```sh
cd insight-erp
```
3. Install Next.js and other dependencies
```sh
npm install
```
4. Create an `.env.local` file at the **root** of the project with the following Clerk variables. 
* You can obtain your unique variable values by registering for a free development account. Read more about signing up for an account [here](https://clerk.com/docs/quickstarts/setup-clerk) and more about setting environment variables for Clerk [here](https://clerk.com/docs/quickstarts/nextjs#set-your-environment-variables).
```sh
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=xxxx
CLERK_SECRET_KEY=xxxxxx
```

5. Start the application in development mode
```sh
npm run dev
```

# Reporting Issues
If you find any bugs or have feature requests, please open an issue in the [Issues](https://github.com/codyafingerson/insight-erp/issues) section.

# Contributing
Contributions are extremely welcome to this repository. Please treat everyone with respect.

## How to Contribute
1. **Fork the repository**: Click the "Fork" button at the top right corner of this repository to create a copy of the repository in your GitHub account.
2. **Clone your fork**: Clone the forked repository to your local machine.
    ```sh
    git clone https://github.com/your-username/insight-erp.git
    ```
3. Create a new branch: Create a new branch for your feature or bug fix.
    ```sh
    git checkout -b feature/your-feature-name
    ```
4. Make your changes: Implement your feature or bug fix.
5. Commit your changes: Commit your changes with a descriptive commit message.
    ```sh
    git commit -m "Add feature: your feature description"
    ```
6. Push to your fork: Push your changes to your forked repository.
    ```sh
        git push origin feature/your-feature-name
    ```
7. Open a pull request: Go to the original repository and open a pull request to merge your changes.