// Require/Loads the express module
const express = require('express');
// body-parser is used to read data payload from the http request body
const bodyParser = require('body-parser'); 
//  path is used to set default directories for MVC and also for the static files
const path = require('path'); 
// mongoose for MongoDB database
const db = require('mongoose');
// connecton string for MongoDB Mongoose
const uri = "mongodb+srv://demoUser:aQNVemeHz7VftTCq@acetraining.jlcymsn.mongodb.net/acetrainer?retryWrites=true&w=majority&appName=acetraining" // demoUser can read and write
// hbs... well duh
const hbs = require('hbs');

// for incrementing the index on the leaderboard by 1
hbs.registerHelper('increment', function (value) {
    return parseInt(value) + 1;
});

// monogDB schema
const scoreSchema = new db.Schema({
    username: {type : String, required: true},
    score: {type : Number, required: true},
    date: {type : Date, default: Date.now}
})

//leaderboard model
const Score = db.model('Score', scoreSchema);

// connect to MongoDB with error catching
db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connection successful'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

    
// assigns express to app variable so we can just type app instead of express
const app = express();

//serves static files from docs
app.use(express.static(path.join(__dirname, 'docs')));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

//root route; more or less redundant
app.get('/', (req, res) => {    
    res.sendFile(path.join(__dirname, 'docs','index.html'));
})

app.post('/score-submit', async (req, res) => {

    const { username, score } = req.body;

    try { //try-catch error handling
        const newScore = new Score({
            username: username,
            score: score
        });
        await newScore.save();

         console.log(`Score zuccessfully submitted: ${username} - ${score}`)
          res.redirect('/leaderboard'); // redirect to leaderboard
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending score');
    }


});

app.get('/leaderboard', async (req, res) => { // leaderboard get route for nav
    
    try {
        const topScores = await Score.find().sort({ score: -1 });

        res.render('leaderboard', { scores: topScores });
    } catch (err) {
        console.error('Error fetching leaderboard:', err);
        res.status(500).send('Error fetching leaderboard');
    }
});

//creators here for easier editing
app.get('/about', (req, res) => {
    res.render('about', {
        creators: [
            {
                name: 'Raphael Angelo Domingo',
                image: 'https://i.ibb.co/XrHNg6cn/473955312-1130104642087059-3102235872785786885-n.jpg',
                bio: `Rapha is a Pisay student, class of 2028. He is currently in the 9th grade, 
                      the secretary of an FPS games club, and bassist of a band.`
            },
            {
                name: 'Caleb Lucas Esteban',
                image: 'https://i.ibb.co/ymGRVBr1/image-2025-02-06-010359565.png',
                bio: `Caleb is also a 9th grade Pisay student, class of 2028. He is the treasurer of the 
                      AI data science club, and keyboardist of that same band.`
            }
        ]
    });;
});

// Step 5: Start HTTP Server on a port number 3000
// This will create a web service for your own project
const port = 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));
