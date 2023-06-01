# Tali3

Tali3 is a library management system that allows librarians to keep track of the books in their library and manage borrowing and returning of books.
.

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>
<p align="center" style="font-size:40px">+</p>
<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="400" alt="React Logo"></p>

# How to Run it :

## 1)Environment Setup:

### System Requirements:

Before proceeding with the installation of Tali3, ensure that your system meets the following requirements:
Operating System: Tali3 is compatible with Windows, macOS, and Linux-based operating systems.
Web Server: Apache or Nginx.
PHP Version: PHP 7.4 or higher, along with necessary extensions (e.g., OpenSSL, PDO, Mbstring, XML, etc.).
Database: MySQL 5.7 or higher.
Node.js: Node.js 12.x or higher.
Composer: The latest stable version of Composer, a dependency manager for PHP.
It is essential to have these dependencies installed and configured correctly before proceeding further.

### Installing PHP and Composer:

Install PHP: Follow the documentation specific to your operating system to install PHP. Ensure that the necessary extensions mentioned in the system requirements are enabled.
Install Composer: Visit the official Composer website and follow the installation instructions for your operating system. Composer is used to manage the PHP dependencies required by Tali3.

### After Instaling composer run the following command:

```
composer install
```

### Installing Node.js and NPM:

Install Node.js: Visit the official Node.js website and download the recommended LTS version suitable for your operating system. Node.js is required to run the React front-end of Tali3.
Install NPM: NPM (Node Package Manager) is bundled with Node.js. After installing Node.js, NPM will be available automatically.

## 2) Starting the Application:

Start Laravel Backend: In the terminal, navigate to the Tali3 project directory and run the following command to start the Laravel backend server:

```
php artisan serve
```

The backend server will be accessible at the specified URL (e.g., http://localhost:8000/).

<hr>
Start React Frontend: In a separate terminal, navigate to the front-end directory and run the following command to install the required modules:
```
npm i --force
```

Now run this command to start react frontend under the /front-end folder:

```
npm start
```

Once the frontend server is running, it will provide the URL (e.g., http://localhost:3000/) to access the Tali3 application.

Now you can access Tali3 through a web browser using the provided URL and begin exploring its features. In the next section, we will cover post-installation tasks, including managing the database, configuring email services, setting up scheduled tasks, and more.
REQUIREMENTS:

## 3)DataBase:

1. You need to change your dataBase configuration in the .env file provided by Laravel .

2. Go to your phpmyadmin and export the provided sql file in the database/TALI3.sql file
