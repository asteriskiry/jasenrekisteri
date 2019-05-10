'use strict';

const express = require('express');
let router = express.Router();

const registerController = require('../../controllers/apis/register');
const loginController = require('../../controllers/apis/login');

const adminController = require('../../controllers/apis/admin');
const memberController = require('../../controllers/apis/member');

router.use('/register', registerController);
router.use('/login', loginController);

router.use('/admin', adminController);

router.use('/member', memberController);

module.exports = router;
