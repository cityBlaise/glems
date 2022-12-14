const express = require('express');
const path = require('path');

const server = express();

// built in middleware to serve static content just as images, css, html etc
server.use(express.static(path.join(__dirname, 'dist/glems-web-app')));

// all get requests will point to angular's index.html in dist folder
server.get('/*', async (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/glems-web-app', 'index.html'));
});
const port= process.env.PORT || 4200
server.listen(port, () => console.log(`App Running on port ${port}`));
