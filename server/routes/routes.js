//Updated API endpoints to use SQL queries
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import dbConnection from '../db-connection.js'

const router = express.Router();

//send some data to the server for the animals to be created 
//database is called eventonica
//table is called events

router.post('/events', async (req,res) => {
    try{
    console.log('POST ROUTE REACHED');
    const { id, title, details, venue, extras } = req.body;

    const result = await server.query(
        'INSERT INTO events (id, title, details, venue, extras) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [uuidv4(), title, details, venue, extras]
    );
    console.log(result);
    //using parameterized quries to prevent SQL injection

    res.send(`Event ${result.rows[0].common_name} was added to the database`)
    } catch (error) {
        console.error('Error creating new event: ', error);
    }

});

//to read the events
router.get('/events', async (req,res) => {
    try{
        const result = await dbConnection.query('SELECT * FROM events;');
        res.json(result.rows);
    } catch (error){
        console.error('error fetching events data: ', error);
    }
});

// to find a specific event by id 
router.get('/:id', async  (req, res) => {
    try{
    const { id } = req.params; 
    
    const result = await server.query(`SELECT * FROM events WHERE id = $1`, [id]);

    if(result.rows.length === 0){
        return res.send('event not found');
    }

    res.json(result.rows[0]);
    } catch (error){
        console.error('No event found', error);
    }
});

//delete an event
router.delete('/:id', async (req, res) => {
    try{
    const { id } = req.params;

    const result = await server.query('DELETE FROM events WHERE id = $1 RETURNING *', [id]);

    if(result.rowCount === 0){
        return res.send('Event not found');
    }

    res.send(`Event with the ID: ${id} has been deleted`);
    } catch (error){
        console.error(`Could not locate event with id: ${id}: `, error);
    }
})

//animal example to add 
// {
//    "common_name": "Elephant",
//   "scientific_name": "Elephaus",
//   "lifespan": 20,
//   "habitat": "savannah",
//   "diet": "herbaviore"
// }
// {
//    "common_name": "Kangaroo",
//   "scientific_name": "Macropus",
//   "lifespan": 50,
//   "habitat": "ocean",
//   "diet": "carnivore"
// }

router.patch('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        
        //get properties to be updated
        const  {title, details, venue, extras} = req.body; //take everything from the req.body

        const result = await server.query(
            'UPDATE events SET title = $1, details = $2, venue = $3, extras = $4 WHERE id = $6 RETURNING *',
            [title, details, venue, extras, id]);

        if(result.rowCount === 0){
            return res.send('Event not found');
        }


        res.send(`Event with ${id} has been updated`)
        }
        catch (error){
            console.error('Could not find event matching id: ', error);

        }
    });

export default router;


