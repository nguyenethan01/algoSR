const express = require('express');
const mongoose = require('mongoose');
const questionRoutes = require('./routes/questions');
const userRoutes = require('./routes/users');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// ROUTES
// =======

app.use('/questions', questionRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
