import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="col-auto min-vh-100">
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: '280px', height: '100vh'}}>
                <a href="/public"
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">BudgetMate</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link custom-a active" aria-current="page">Accueil</a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="nav-link custom-a text-white">Dashboard</a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="nav-link custom-a text-white">Orders</a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="nav-link custom-a text-white">Products</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link custom-a text-white">Customers</a>
                    </li>
                </ul>
            </div>
        </div>

    )
};

export default Sidebar;
