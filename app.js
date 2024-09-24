const express = require('express');
const { scopePerRequest } = require('awilix-express');
const container = require('./config/container');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Sử dụng Awilix để tạo scope cho mỗi request
app.use(scopePerRequest(container));

// Định nghĩa các routes
app.use('/api', userRoutes);

module.exports = app;