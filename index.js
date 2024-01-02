const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 5500')); //local server is localhost:5500

app.use(express.static('public'));