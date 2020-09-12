const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const questionRoutes = require('./routes/questions');
const userRoutes = require('./routes/users');
const User = require('./models/user.model');
const LocalStrategy =  require('passport-local');

require('./passport/index');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
passport.use('local', new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		User.findOne({ username: username }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
))
app.use(
    session({
        secret: "lucky-charms",
        resave: false,
        saveUninitialized: false
    })
);

app.use((req, res, next) => {
    console.log('req.session', req.session);
    return next();
});

app.use('/questions', questionRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
