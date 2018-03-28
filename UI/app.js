const express = require('express');
const path = require('path');

const PORT = 3000;

// App setup
var app = express();

// Static files
app.use(express.static(path.join(__dirname, './public')));

// Start server
var server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});