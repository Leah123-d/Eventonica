import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

//TO-DO:
//need to get my data from my database displaying when the url /events is called
//need to figure out how I want to handle routes 
//test if CRUD operations are function from the backend then see how to connect that to the front end

dotenv.config();

const app = express();


// app.use(bodyParser.json()) //Middleware to parse JSON
// import animalRoutes from './routes/animales.js';
// app.use('/animales', animalRoutes); 
// //all our routes are in a different file, 
// // when the requests are sent to our server the correct information/ actions will be taken


app.get('/', (req,res) => res.send("Hello! This is the homepage!")); //test connection to the home page





const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server is listening on PORT ${port}`)
})

