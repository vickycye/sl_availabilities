const express = require('express');
const path = require('path');
const app = express();

// Use body-parser middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file when the user accesses the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

// Serve the bookings.html file when the user accesses the /bookings URL
app.get('/bookings', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bookings.html'));
});

// TODO: ... database connection and user model setup

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Test credentials (replace this with actual database lookup and password comparison in production)
    if (username === 'main' && password === '1234') {
        // Create session or generate token for authenticated user (implementation depends on session management)
        // ...

        res.json({ success: true }); 
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }
});

const PORT = 3000; // or any other port: delete later

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
