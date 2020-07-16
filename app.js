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


app.get('/', (req, res) => {
	res.send('hello from node');
});

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} `);
});

module.exports = app;