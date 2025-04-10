const LearnModel = require('../models/learnModel');

// ---------- CRUD Dossiers ----------

// Créer un dossier
exports.createDossier = async (req, res) => {
  const { nom, image } = req.body;
  if (!nom || !image) {
    return res.status(400).json({ error: "Nom et image sont requis." });
  }

  try {
    await LearnModel.createDossier(nom, image);
    res.status(201).json({ message: "Dossier créé avec succès." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un dossier
exports.updateDossier = async (req, res) => {
  const { nom, image } = req.body;
  const { id } = req.params;
  if (!nom || !image) {
    return res.status(400).json({ error: "Nom et image sont requis." });
  }

  try {
    await LearnModel.updateDossier(id, nom, image);
    res.status(200).json({ message: "Dossier mis à jour avec succès." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un dossier
exports.deleteDossier = async (req, res) => {
  const { id } = req.params;

  try {
    await LearnModel.deleteDossier(id);
    res.status(204).json({ message: "Dossier supprimé avec succès." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---------- CRUD Sous-dossiers ----------

// Créer un sous-dossier
exports.createSousDossier = async (req, res) => {
  const { nom, dossier_id } = req.body;
  if (!nom || !dossier_id) {
    return res.status(400).json({ error: "Nom et dossier_id sont requis." });
  }

  try {
    await LearnModel.createSousDossier(nom, dossier_id);
    res.status(201).json({ message: "Sous-dossier créé avec succès." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un sous-dossier
exports.updateSousDossier = async (req, res) => {
  const { nom } = req.body;
  const { id } = req.params;
  if (!nom) {
    return res.status(400).json({ error: "Nom est requis." });
  }

  try {
    await LearnModel.updateSousDossier(id, nom);
    res.status(200).json({ message: "Sous-dossier mis à jour avec succès." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un sous-dossier
exports.deleteSousDossier = async (req, res) => {
  const { id } = req.params;

  try {
    await LearnModel.deleteSousDossier(id);
    res.status(204).json({ message: "Sous-dossier supprimé avec succès." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---------- CRUD Fiches ----------

// Créer une fiche
exports.createFiche = async (req, res) => {
  const { titre, image, contenu, sous_dossier_id } = req.body;
  if (!titre || !image || !contenu || !sous_dossier_id) {
    return res.status(400).json({ error: "Titre, image, contenu et sous_dossier_id sont requis." });
  }

  try {
    await LearnModel.createFiche(titre, image, contenu, sous_dossier_id);
    res.status(201).json({ message: "Fiche créée avec succès." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour une fiche
exports.updateFiche = async (req, res) => {
  const { titre, image, contenu } = req.body;
  const { id } = req.params;
  if (!titre || !image || !contenu) {
    return res.status(400).json({ error: "Titre, image et contenu sont requis." });
  }

  try {
    await LearnModel.updateFiche(id, titre, image, contenu);
    res.status(200).json({ message: "Fiche mise à jour avec succès." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer une fiche
exports.deleteFiche = async (req, res) => {
  const { id } = req.params;

  try {
    await LearnModel.deleteFiche(id);
    res.status(204).json({ message: "Fiche supprimée avec succès." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
