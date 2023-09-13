const route = require('express').Router();
const {addPerson, updatePerson, getPerson, deletPerson} = require('../controllers/endPointController');

route.get('/api/:user_id', getPerson);
route.post('/api', addPerson);
route.post('/api/:user_id', updatePerson);
route.delete('/api/:user_id', deletPerson);

module.exports = route;