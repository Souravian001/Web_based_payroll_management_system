const express = require('express');
const path = require('path');

const app = express();

// Middleware for parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const employeeRoutes = require('./routes/employee');
const payrollRoutes = require('./routes/payroll');

// Use routes
app.use('/employees', employeeRoutes); // Routes for employee management
app.use('/payroll', payrollRoutes);     // Routes for payroll calculations

// Default Route for Main Page
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for Tax Page
app.get('/tax', (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tax.html')); // Serve tax.html
});

// Export the app to be used in server.js
module.exports = app;
app.get('/tax', (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tax.html')); // Serve tax.html
});
