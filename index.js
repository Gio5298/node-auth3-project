const app = require('express')();
const server = require('./server')

app.use('/api', server)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`running on ${port}`)
})