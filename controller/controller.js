const path = require('path');


module.exports = {
    home: (req, res) => {
        return res.send('Welcome to my server')
    },
    info: (req, res) => {
        return res.send('This is info page')
    },
    bio: (req, res) => {
        return res.send('Mirza Ulayya')
    },
    render: (req, res) => {
        res.sendFile(path.join(__dirname, "./chapter-4.html"))
    }
}