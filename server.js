const express = require('express'); // Import express
const app = require('./app'); // Import the app instance
const PORT = process.env.PORT || 5002; // Use 5004 or the environment port

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
