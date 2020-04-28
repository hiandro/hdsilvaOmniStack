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
const NotificationController = require('./controllers/NotificationController');

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

/**
 * Notifications 
*/
routes.get("/notification", (req, res) => {
    res.send("Push Notification Server Running");
  });
routes.post('/notification/token', NotificationController.listenToken);
// routes.post('/notification/message', (req, res ) => {
//     NotificationController.handlePushTokens(req.body);
   
// }); 

routes.post('/notification/message', (req, res) => {
    NotificationController.handlePushTokens(req.body)
    res.send("enviado");
    }); 

module.exports = routes;