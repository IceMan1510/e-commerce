const { Router } = require('express');
const usersRouter = require('./users');

const routes = Router();

// routes.use('/messages', messagesRouter);
routes.use('/users', usersRouter);
// routes.use('/tokens', ensureAdminOnly, tokensRouter);
// routes.use('/contacts', ensureAdminOnly, contactsRouter);
// routes.use('/screenshot', ensureAdminOnly, screenshotRouter);

module.exports = routes;
