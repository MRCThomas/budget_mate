import React from 'react';
import './Sidebar.css'
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
    return (
        <div className="col-auto custom-sidebar">
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: '280px', height: '100vh'}}>
                <a href="/public" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <Link to="/" className="fs-4 text-white custom-link-logo">BudgetMate</Link>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item mb-2">
                        <Link to="/" className="nav-link custom-a active" aria-current="page">Accueil</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="add-expense" className="nav-link custom-a text-white">Ajouter une dépense</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="profil" className="nav-link custom-a text-white">Profil</Link>
                    </li>
                </ul>
            </div>
        </div>

    )
};

export default Sidebar;
