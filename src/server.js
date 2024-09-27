import express from 'express';
import fs from 'fs';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du fichier actuel
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;

// Middleware pour gérer le JSON et CORS
app.use(express.json());
app.use(cors());

// Définir le chemin vers le fichier budgetData.json
const budgetDataPath = path.join(__dirname, '/data/budgetData.json');

// Route POST pour recevoir les données du formulaire
app.post('/add-expense', (req, res) => {
  const newExpense = req.body;

  // Lire le fichier budgetData.json existant
  fs.readFile(budgetDataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier:', err);
      return res.status(500).send('Erreur serveur.');
    }

    let budgetData;
    try {
      budgetData = JSON.parse(data); // Parser les données du fichier
    } catch (parseError) {
      console.error('Erreur lors de l\'analyse JSON:', parseError);
      return res.status(500).send('Erreur de données.');
    }

    // Ajouter un nouvel ID pour la dépense
    const newId = budgetData.expenses.length > 0 
      ? budgetData.expenses[budgetData.expenses.length - 1].id + 1 
      : 1; // Assure que l'ID commence à 1 si la liste est vide

    const expenseWithId = {
      id: newId,
      description: newExpense.description,
      amount: newExpense.amount
    };

    budgetData.expenses.push(expenseWithId); // Ajouter la nouvelle dépense à la liste

    // Écrire les nouvelles données dans le fichier JSON
    fs.writeFile(budgetDataPath, JSON.stringify(budgetData, null, 2), (err) => {
      if (err) {
        console.error('Erreur lors de l\'écriture dans le fichier:', err);
        return res.status(500).send('Erreur serveur.');
      }

      res.send('Dépense ajoutée avec succès!');
    });
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur backend démarré sur localhost:${port}`);
});