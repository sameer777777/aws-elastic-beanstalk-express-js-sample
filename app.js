const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align: center; font-family: Arial, sans-serif; margin-top: 50px;">
            <h1 style="color: #4CAF50;">Welcome to My App!</h1>
            <p style="font-size: 18px;">This is a simple Express.js application running on AWS Elastic Beanstalk.</p>
        </div>
    `);
});

app.listen(port);
console.log(`App running on http://localhost:${port}`);
