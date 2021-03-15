const dotenv = require('dotenv');

dotenv.config({
  path: './config.env'
});

const app = require('./app')
const port = process.env.PORT || 4444;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});