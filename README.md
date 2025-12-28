# Tamil Nadu Tourism Web App

A modern web application showcasing the beautiful tourist destinations of Tamil Nadu, India. Built with React, Vite, and Express.

## Features

- Interactive map of tourist destinations
- Detailed information about popular locations
- Responsive design for all devices
- Fast and efficient performance with Vite
- Secure backend API with Express
- Trip Planner with MongoDB integration

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Maps**: Leaflet
- **State Management**: React Query
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas

## Setup for Judges / Evaluators

### Prerequisites

- Node.js (v16 or later)
- npm (v8 or later)
- MongoDB Atlas account (for database)

### Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AnanthaBhalan/tamil-nadu-tourism.git
   cd tamil-nadu-tourism
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file and replace `your-mongodb-connection-string-here` with your own MongoDB connection string from MongoDB Atlas.

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Seed the database with sample data:**
   ```bash
   npm run seed
   ```
   This will populate your MongoDB database with sample Tamil Nadu tourist destinations.

5. **Start the backend server:**
   ```bash
   npm run server
   ```
   The backend will run on http://localhost:5000

6. **Start the frontend development server:**
   ```bash
   npm run dev
   ```
   The frontend will run on http://localhost:3000

7. **Open the application:**
   Navigate to http://localhost:3000 in your browser and use the Trip Planner feature.

### Important Notes

- If the database is empty, the Trip Planner will show no places until you run the `npm run seed` command.
- The application requires both frontend and backend servers to be running simultaneously.
- Make sure your MongoDB Atlas cluster allows connections from your IP address.

## Available Scripts

- `npm run dev` - Start frontend development server
- `npm run server` - Start backend server only
- `npm run seed` - Seed database with sample destinations
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start production server

## Security Note

This repository does not contain any real credentials or secrets. The actual `.env` file is not committed to version control. Judges must use their own MongoDB connection string and credentials. All environment variables are loaded from the `.env` file which should be created from `.env.example`.

## Project Structure

```
├── public/           # Static files
├── server/           # Express server
├── src/              # React application
│   ├── assets/       # Images, fonts, etc.
│   ├── components/   # Reusable components
│   ├── pages/        # Page components
│   ├── services/     # API services
│   ├── styles/       # Global styles
│   └── utils/        # Utility functions
├── .gitignore
├── package.json
├── README.md
└── vite.config.ts
```

## Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
