// backend/app.js
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const db = require('./config/db');

dotenv.config();

const app = express();

// Middlewares
app.use(cors({
  origin: 'http://localhost:5500', // à adapter selon ton front
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sessions
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // mettre true avec HTTPS
}));

// Routes
app.use('/api/auth', authRoutes);

// Serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`));

const learnRoutes = require('./routes/learn');
app.use('/api/learn', learnRoutes);
