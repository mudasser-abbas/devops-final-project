const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

let visitors = 0;

// Home Page
app.get('/', (req, res) => {
    visitors++;

    res.send(`
<html>
<head>
    <title>DevOps Final Project</title>
</head>
<body>

    <h1>DevOps Final Project - CI/CD Test</h1>

    <h2>Name: Muhammad Mudasser Abbas</h2>

    <h2>SAP-ID: 74249</h2>

    <p><b>Version:</b> V4 deployed through GitHub Actions Actually</p>

    <p><b>Current Time:</b> ${new Date()}</p>

    <p><b>Container Host:</b> ${os.hostname()}</p>

    <p><b>Visitors:</b> ${visitors}</p>

</body>
</html>
    `);
});

// Health Check Endpoint
app.get('/health', (req, res) => {
    res.send('Application Healthy');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
