const express = require('express');
const MessageController = require('../controllers/messageController');

const setMessageRoutes = (app) => {
    const router = express.Router();
    const messageController = new MessageController();

    router.post('/messages', messageController.sendMessage);
    router.get('/messages', messageController.getMessages);

    app.use('/api', router);
};

module.exports = setMessageRoutes;