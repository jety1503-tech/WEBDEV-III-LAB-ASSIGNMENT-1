const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;

app.use(morgan('dev'));  //third party middleware

// const logmiddlewares = (req, res, next) => {   //custom middleware
//     console.log('Request URL:', req.url, 'Request Time:', new Date().toLocaleString(), 'Request Method:', req.method);
//     next();
// }


const apicheckmiddleware = (req, res, next) => {   //custom middleware  
    if (req.query.API_KEY === '12345') {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

// app.use(logmiddlewares);
app.use(apicheckmiddleware);

app.get('/', (req, res) => {
    console.log('Hello, World!');
  res.send('Hello, World!');
});

app.get("/students",apicheckmiddleware, (req, res) => {
    console.log('Hello, Students!');
    res.send("Hello Students");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});