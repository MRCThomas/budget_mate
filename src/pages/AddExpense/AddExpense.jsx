import React, { useState } from 'react'
import './AddExpense.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Dashboard() {

  const [formData, setFormData] = useState({
    category: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envoie des données au backend
    try {
      const response = await fetch('http://localhost:5000/add-expense', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Dépense ajoutée avec succès !');
      } else {
        alert('Erreur lors de l\'ajout de la dépense');
      }
    } catch (error) {
      console.error('Erreur de requête:', error);
      alert('Erreur lors de l\'ajout de la dépense. 2');
    }
  };

  return (
    <div class="container container-fluid d-flex align-items-center full-height">
        <form onSubmit={handleSubmit} action="/action_page.php" method='post' class="was-validated container w-50 border rounded px-3 pt-3 pb-3">
            <h1>Ajouter une dépense</h1>
            <div>
                <label for="category" class="form-label">Titre</label>
                <input
                  type="text"
                  class="form-control"
                  id="category"
                  placeholder="Saissez un titre..."
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required />
                <div class="valid-feedback">Valide.</div>
                <div class="invalid-feedback">Veuillez remplir ce champ.</div>
            </div>
            <div class="mb-3">
                <label for="amount" class="form-label">Montant</label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Saisissez le montant..."
                  required
                />
                <div class="valid-feedback">Valide.</div>
                <div class="invalid-feedback">Veuillez remplir ce champ.</div>
            </div>
            <button type="submit" class="btn btn-primary">Valider</button>
        </form>
    </div>
  )
}
