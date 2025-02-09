
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/a859e69c-3882-46ff-b0e6-33388074801a

## Быстрая установка для Windows

1. Создайте файл `install.bat` в корне вашего диска C: и скопируйте в него следующий код:

```batch
@echo off
echo Installing Telegram Manager...

:: Установка Node.js через winget
winget install OpenJS.NodeJS

:: Установка Git через winget
winget install Git.Git

:: Обновление npm до последней версии
call npm install -g npm@latest

:: Клонирование репозитория
git clone <YOUR_GIT_URL> telegram-manager
cd telegram-manager

:: Установка зависимостей
call npm install

:: Запуск приложения
call npm run dev

echo Installation complete! The application should now be running at http://localhost:8080
pause
```

2. Запустите файл `install.bat` от имени администратора (правый клик -> Запуск от имени администратора)
3. Дождитесь завершения установки
4. Приложение автоматически запустится в вашем браузере по адресу http://localhost:8080

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a859e69c-3882-46ff-b0e6-33388074801a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a859e69c-3882-46ff-b0e6-33388074801a) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
