# 🏨 BookMyStay

![Render](https://img.shields.io/badge/Deployed_on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

**BookMyStay** is a production-ready full-stack web application inspired by Airbnb. It connects travelers with hosts, allowing users to list properties, browse interactive maps, and manage bookings with a seamless user experience.

## 🚀 Key Features

* **🌍 Resilient Geocoding:** Integrated **MapQuest API** for precise location mapping. Includes a custom **fallback mechanism** to prevent application crashes during API timeouts or rate limits.
* **🔒 Secure Authentication:** Robust user session management using **Passport.js** with secure password hashing (Salt/Hash).
* **🖼️ Cloud Image Storage:** Optimized image uploading and storage via **Cloudinary**, ensuring fast load times.
* **🛡️ Role-Based Access:** Granular authorization logic—users can only edit/delete their own listings and reviews.
* **📱 Responsive Design:** Built with **Bootstrap 5** and **EJS** for a mobile-first, consistent UI across devices.
* **💰 Dynamic Pricing:** Frontend logic to toggle tax-inclusive pricing updates in real-time.

## 🛠️ Tech Stack

* **Frontend:** EJS, Bootstrap 5, CSS3, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas, Mongoose ODM
* **Map Services:** MapQuest API, Leaflet.js
* **Deployment:** Render (with UptimeRobot monitoring)

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
