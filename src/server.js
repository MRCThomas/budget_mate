import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
const port = 5173;

// Middleware pour gérer le JSON et CORS
app.use(express.json());
app.use(cors());

// Route POST pour recevoir les données du formulaire
app.post('/add-expense', (req, res) => {
  const newExpense = req.body;

  // Lire le fichier budgetData.json existant
  fs.readFile('budgetData.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier:', err);
      return res.status(500).send('Erreur serveur.');
    }

    // Parse le JSON pour ajouter les nouvelles données
    let expenses = JSON.parse(data);
    expenses.push(newExpense);

    // Écrire les nouvelles données dans le fichier JSON
    fs.writeFile('budgetData.json', JSON.stringify(expenses, null, 2), (err) => {
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
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});