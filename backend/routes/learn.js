const express = require('express');
const router = express.Router();
const LearnController = require('../controllers/learnController');

// GET all dossiers
router.get('/dossiers', LearnController.getAllDossiers);

// GET sous-dossiers d’un dossier
router.get('/dossiers/:dossierId/sous-dossiers', LearnController.getSousDossiers);

// GET fiches d’un sous-dossier
router.get('/sous-dossiers/:sousDossierId/fiches', LearnController.getFiches);

// GET une fiche en détail
router.get('/fiches/:ficheId', LearnController.getFiche);

module.exports = router;

// --------- ADMIN CRUD ---------

// Dossiers
router.post('/dossiers', LearnController.createDossier);
router.put('/dossiers/:id', LearnController.updateDossier);
router.delete('/dossiers/:id', LearnController.deleteDossier);

// Sous-dossiers
router.post('/sous-dossiers', LearnController.createSousDossier);
router.put('/sous-dossiers/:id', LearnController.updateSousDossier);
router.delete('/sous-dossiers/:id', LearnController.deleteSousDossier);

// Fiches
router.post('/fiches', LearnController.createFiche);
router.put('/fiches/:id', LearnController.updateFiche);
router.delete('/fiches/:id', LearnController.deleteFiche);
