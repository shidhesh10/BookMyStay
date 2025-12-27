# 🏡 BookMyStay


**BookMyStay** is a robust full-stack marketplace for listing and renting vacation stays. Inspired by Airbnb, this application features a secure backend, persistent session management, and a dynamic frontend, demonstrating production-ready web development practices.

## 🚀 Key Features

### 🌟 Core Functionality
* **Full CRUD Operations:** Users can Create, Read, Update, and Delete stay listings seamlessly.
* **Review System:** Interactive rating and review system for every listing.
* **Smart Search:** Real-time search functionality to find listings by title, location, or country.

### 🔐 Security & Architecture
* **Session Management:** Persistent user sessions stored in **MongoDB Atlas** using `connect-mongo`.
* **Data Integrity:** Server-side validation using Joi validation schema.
* **MVC Architecture:** Clean separation of Models, Views, and Controllers.
* **Security:** Implemented basic security against ReDoS and NoSQL injection.

### 🎨 UI/UX
* **Responsive Design:** Mobile-first layout styled with **Bootstrap 5** and custom CSS.
* **Dynamic Templating:** Powered by **EJS** with `ejs-mate` for reusable layouts.
* **Flash Messages:** Interactive pop-up notifications for user feedback (Success/Error).

## 🛠️ Tech Stack

* **Frontend:** EJS, HTML5, CSS3, Bootstrap 5
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (Cloud), Mongoose ODM
* **Deployment:** Render

## ⚙️ Installation & Run Locally

Follow these steps to run the project on your local machine.

**1. Clone the Repository**
```bash
git clone [https://github.com/shidhesh10/BookMyStay.git]
cd BookMyStay  

2. Install Dependencies

Bash

npm install
3. Set Up Environment Variables Create a .env file in the root directory and add the following:

Code snippet

PORT=8080
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_secret_key
4. Start the Server

Bash

node app.js
5. Access the App Open your browser and visit: http://localhost:8080/listings

📂 Project Structure
Plaintext

BookMyStay/
├── models/         # Database Schemas
├── routes/         # Express Route Handlers
├── views/          # EJS Templates
├── public/         # Static Files (CSS, JS)
├── utils/          # Error Handling & Middleware
└── app.js          # Main Application Entry Point
Developed by Shidhesh
