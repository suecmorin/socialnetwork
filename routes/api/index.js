const router = require('express').Router();
const UserRoutes = require('./UserRoutes');
const ThoughtRoutes = require('./ThoughtRoutes');

router.use('/user', UserRoutes);
router.use('/thought', ThoughtRoutes);

module.exports = router;
