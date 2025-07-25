// routes/employee.js
const express = require('express');
const router = express.Router();

// Example route for getting all employees
router.get('/employees', (req, res) => {
    res.send('List of employees');
});

module.exports = router;
