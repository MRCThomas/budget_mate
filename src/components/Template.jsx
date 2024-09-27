import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Logout from './Auth/Logout';
import React from 'react';
import Sidebar from './Sidebar/Sidebar.jsx';

export default function Template() {
  return (
    <>
      <div className='container-fluid p-0'>
        <div className='row g-0'>
          {/* Sidebar */}
          <Sidebar />

          {/* Contenu Principal */}
          <div className='col'>
            <div className='d-flex justify-content-between p-4'>
              <Header /> {/* Place le header en dehors du flex si tu veux qu'il reste en haut */}
              <Logout /> {/* Logout pourrait être placé ailleurs selon tes besoins */}
            </div>
            <div className='p-4'>
              <main>
                <Outlet /> {/* Affiche le contenu en fonction des routes */}
              </main>
            </div>
            <Footer />
          </div>
        </div>
      </div>

    </>
  );
}
