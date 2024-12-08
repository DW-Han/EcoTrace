# EcoTrace
## Retracing your carbon footprint and reducing waste

This is a MERN (MongoDB, Express, React, Node.js) stack application that serves as an energy monitoring dashboard. It includes features like energy usage reports, weather-based recommendations, and an interactive UI.

### Pre requirements 

Before starting the app, ensure the following are installed on your system:
- Node.js (v14+)
- npm or Yarn
- MongoDB (Locally or MongoDB Atlas uri in .env file)

### Installation and Dependencies

```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/DW-Han/EcoTrace.git)
cd EcoTrace
```
Install Dependencies on the client and server side

```bash
cd backend
npm install
```
```bash
cd frontendClient
npm install
```

### Run the Application
Make sure you have an .env file for the DB connections
```.env
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.ibiby.mongodb.net/?retryWrites=true&w=majority&appName=
```
Starting server
```bash
cd backend
npm start
```
Starting client
```bash
cd frontendClient
npm run dev
```
