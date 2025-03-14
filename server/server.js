import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes/events.js';
const app = express();
dotenv.config();

//TO-DO:
//need to get my data from my database displaying when the url /events is called
//need to figure out how I want to handle routes 
//test if CRUD operations are function from the backend then see how to connect that to the front end
//routes are in a different file for seperation of concerns 



app.use(bodyParser.json()) 

//to read the events
app.use('/events', router); 


app.get('/', (req,res) => res.send("Hello! This is the homepage!")); //test connection to the home page


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`eventonica server is listening on PORT ${port}`)
})

