import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import FormPage from './pages/FormPage';
import NewFormPage from './pages/NewFormPage';
// import Navbar from './components/UI/navbar/Navbar';
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="new-form" element={<NewFormPage />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
