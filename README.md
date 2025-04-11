# Realtor App Backend Project

<div  style="text-align: center;"><img src="/media/realtor-app-concept.png"  alt="Realtor App concept" style="width: 480px; height: auto;"></div>

---

## Quick Links

- **[Project Write-up](https://markwiltberger.github.io/pages/realtor-app-backend-project):** See a full write-up of the project, including the GitHub repository, features, architecture, and testing.
- **[Application Documentation](https://www.postman.com/science-meteorologist-84254413/realtor-app-online/documentation/gu1pgpa/realtor-app-online):** See the API documentation on Postman.
- **[Application Demo](https://www.postman.com/science-meteorologist-84254413/realtor-app-online/overview):** Try out the application using Postman.

---

## Project Overview

**Brief Description:**  
The app is a REST API built in the Node.js framework Nest.js, which queries and updates a Postgres database. The app allows a user to make http requests for a set of endpoints related to querying available realty properties.

- The user can request a full list of available properties.
- The user can also filter the list of properties based on the various attributes of the properties, such as price, city, and property type.
- Users with a REALTOR role can create, update, and delete realty listings.
- Users can message the realtor for the property with inquiries.

**Technology Stack:**

- **Frontend:** directory reserved for building a Vue.js frontend (JavaScript, Typescript)
- **Backend:** Node.js, Express.js, Nest.js, Prisma ORM (JavaScript, Typescript)
- **Database:** Postgres (SQL)
- **Other Tools:** JWT for authentication (Javascript)

---

## Project Write-up

**[Project Write-up](https://markwiltberger.github.io/pages/realtor-app-backend-project):** See a full write-up of the project.

The Project Write-up includes:

- the GitHub repository
- features
- architecture
- testing

---

## Profile and Contact Information

- **My portfolio website:** [markwiltberger.github.io](https://markwiltberger.github.io)
- **My LinkedIn Profile:** [Mark Wiltberger on LinkedIn](https://www.linkedin.com/in/markwiltberger/)
- [**Contact me**](https://docs.google.com/forms/d/e/1FAIpQLSc-mBEzGxOO_jt9Kx9r7BfALu04P4KJGOPEAdMbFCxirbL7rw/viewform?usp=header) via Google, or
- [**Message me**](https://www.linkedin.com/in/markwiltberger/) on LinkedIn

---

## Installation & Setup

**Prerequisites:**

- Required software and tools: Node.js, Postgres.

**Setup Instructions:**

1. Clone the repository:

   ```
   git clone https://github.com/MarkWiltberger/vue-nest-web-app__realtor-app.git
   ```

2. Install dependencies:

   ```
   cd vue-nest-web-app__realtor-app
   cd backend
   npm install
   ```

3. Install postgres locally or in cloud provider.
4. Configure environment variables:

   - `.env` file with necessary settings (database URL, JWT secret)

5. Start the application. In the `backend` directory:

   ```
   npm start
   ```
