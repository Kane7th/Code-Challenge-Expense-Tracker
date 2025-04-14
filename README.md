# Expense Tracker Application

![Expense Tracker Screenshot](./public/screenshot.png)

A responsive web application for tracking expenses with filtering, sorting, and data visualization capabilities.

## Features

- **Add Expenses**: Input expense details including description, category, amount, and date
- **View Expense List**: Tabular display of all recorded expenses
- **Search & Filter**: Find expenses by description or category
- **Sorting**: Sort expenses by amount or date
- **Data Visualization**: Graphical representation of spending patterns (planned)
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- **Frontend**: 
  - React.js
  - CSS Modules
  - Chart.js (for future visualization)
- **Backend**: 
  - Node.js (planned)
  - Express (planned)
  - MongoDB (planned)
- **Testing**:
  - Jest
  - React Testing Library

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kane7th/Code-Challenge-Expense-Tracker.git
Navigate to the project directory:

bash
Copy
cd Code-Challenge-Expense-Tracker
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm start
Open http://localhost:3000 in your browser

## Project Structure

Copy
expense-tracker/
├── public/               # Static files
├── src/
│   ├── components/       # Reusable UI components
│   ├── context/          # React context providers
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Application pages
│   ├── styles/           # CSS modules
│   ├── utils/            # Utility functions
│   ├── App.js            # Main application component
│   └── index.js          # Application entry point
├── .gitignore
├── package.json
└── README.md

## Available Scripts
npm start: Runs the app in development mode

npm test: Launches the test runner

npm run build: Builds the app for production

npm run eject: Ejects from Create React App (not recommended)

## Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

## Deployment Link 

https://code-challenge-expense-tracker.vercel.app/

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request
