/**
 * Imports & Packages
 */
const express = require('express');
const routes  = express.Router();

/** d
 * Controllers
 */
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.post('/session', SessionController.create);

/**
 * Routes ong
 */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.get('/profile', ProfileController.index);


/**
 * Routes incidents 
 */ 
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;