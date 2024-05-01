
import './App.css'
import HomePage from './pages/HomePage';

import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Layout  from './components/Layout/Layout.jsx';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect,lazy } from 'react';
import { refreshUser } from './redux/auth/operations.js';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';


function App() {
  const ContactsPage = lazy(() => import('./pages/ContactsPage.jsx'));
  const dispatch = useDispatch();
  useEffect(() => {dispatch(refreshUser())
    
  }, [dispatch])

  
  return (
    <>
      <Layout>
        
       <Toaster position="top-center" reverseOrder={true} />
         <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RestrictedRoute><RegistrationPage/></RestrictedRoute> }/>
          <Route path='/login' element={<RestrictedRoute><LoginPage /></RestrictedRoute>} />
          <Route path='/contacts' element={<PrivateRoute><ContactsPage /></PrivateRoute>} /> 
          <Route path='*' element={<NotFoundPage />} />
          
    </Routes>
        
        </Layout>
      
    </>
  )
}

export default App












































































