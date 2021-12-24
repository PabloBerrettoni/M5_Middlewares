const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');
const log = require('../middlewares/userLogs');
const admin = require('../middlewares/admin');

router.get('/', log, controller.main);

router.get('/admin', log, admin, controller.admin);

module.exports = router;