const db = require('../config/db');

const LearnModel = {
  getAllDossiers: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM dossiers', (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },

  getSousDossiersByDossierId: (dossierId) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM sous_dossiers WHERE dossier_id = ?', [dossierId], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },

  getFichesBySousDossierId: (sousDossierId) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM fiches WHERE sous_dossier_id = ?', [sousDossierId], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },

  getFicheById: (ficheId) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM fiches WHERE id = ?', [ficheId], (err, result) => {
        if (err) reject(err);
        else resolve(result[0]);
      });
    });
  }
};

module.exports = LearnModel;

