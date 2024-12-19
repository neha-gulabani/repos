import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoginPage from '../components/auth/LoginPage';

export default function Login() {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="/" replace />;
    }

    return <LoginPage />;
}