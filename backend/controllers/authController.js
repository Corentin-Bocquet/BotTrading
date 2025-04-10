// backend/controllers/authController.js
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.login = (req, res) => {
  const { identifier, password } = req.body;

  if (!identifier || !password) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  User.findUserByUsernameOrEmail(identifier, async (err, results) => {
    if (err) return res.status(500).json({ error: 'Erreur serveur.' });

    if (results.length === 0) {
      return res.status(401).json({ error: 'Utilisateur non trouvé.' });
    }

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ error: 'Mot de passe incorrect.' });
    }

    // Création de la session
    req.session.user = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    res.json({ message: 'Connexion réussie.', user: req.session.user });
  });
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: 'Erreur lors de la déconnexion.' });
    res.clearCookie('connect.sid');
    res.json({ message: 'Déconnexion réussie.' });
  });
};

exports.checkSession = (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ error: 'Non authentifié.' });
  }
};
