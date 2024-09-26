import React from 'react'
import './AddExpense.css'

export default function Dashboard() {
  return (
    <div class="container container-fluid d-flex align-items-center full-height">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <form action="/action_page.php" method='post' class="was-validated container w-50 border rounded px-3 pt-3 pb-3">
            <h1>Ajouter une dépense</h1>
            <div>
                <label for="title" class="form-label">Titre</label>
                <input type="text" class="form-control" id="title" placeholder="Saissez un titre..." name="title" required />
                <div class="valid-feedback">Valide.</div>
                <div class="invalid-feedback">Veuillez remplir ce champ.</div>
            </div>
            <div class="mb-3">
                <label for="count" class="form-label">Montant</label>
                <input type="number" class="form-control" id="count" name="count" required />
                <div class="valid-feedback">Valide.</div>
                <div class="invalid-feedback">Veuillez remplir ce champ.</div>
            </div>
            <button type="submit" class="btn btn-primary">Valider</button>
        </form>
    </div>
  )
}
