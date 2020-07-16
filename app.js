const express = require('express');

const app = express();

//middleware
app.use((req, res, next) => {
    console.log('first middleware')
    next()
})

app.use((req, res, next) =>{
    res.send('Hello from express!');
})


server.listen(process.env.PORT || 3000)

module.exports = app;