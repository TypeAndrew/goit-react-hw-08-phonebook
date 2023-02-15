
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout';
import { lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const JoinPage = lazy(() => import('../pages/JonPage/JoinPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  
  return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
         // justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
          listStyleType: 'none'
        }}
    >
      <BrowserRouter basename="goit-react-hw-08-phonebook">
        <Layout>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route index element={<Navigate to="/" />} />
              <Route path="" element={<HomePage />} />
              <Route path="/join" element={<JoinPage />} />
            </Routes>
            
            <h1>Phonebook </h1>
            <ContactForm   />
            <h2>Contacts</h2>
            <Filter />
            <ul>
            < Contacts />
            </ul>

          </Suspense>
        </Layout>
        </BrowserRouter>
      </div>
      
    );

};


 
  
