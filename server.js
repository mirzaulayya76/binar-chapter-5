const express = require('express');
const app = express();
const router = require('./router');
const path = require('path');
// const view = __dirname + "/views/";
// const public = __dirname + "/public/";

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../chapter-4.html"));
});

app.use(express.static(__dirname + "/public"));

app.use(router);

app.listen(8000, () => {
    console.log(`Server is running at ${8000}`)
})
