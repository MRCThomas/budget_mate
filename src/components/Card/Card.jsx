import React from 'react';

export default function Card({ expenses }) {
    return (
        <div className="container mt-5">
            {expenses.map((expense) => (
                <div key={expense.id} className="card w-75 mb-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">{expense.category}</h5>
                            <h5>{expense.amount} €</h5>
                        </div>
                        <p className="card-text">Raison de la dépense pour {expense.category}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
