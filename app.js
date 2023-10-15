const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set up static files and the view engine
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
