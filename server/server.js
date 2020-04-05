const expresss = require('express')
const bodyParser = require('body-parser')
const app = expresss();
const api = require('./routes/index');

app.use(bodyParser.json());
app.use('/api', api);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}....`));