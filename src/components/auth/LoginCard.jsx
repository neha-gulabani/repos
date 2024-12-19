import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Logo from "../../assets/logo.png";

export default function LoginCard() {
    const { login, loading, error } = useAuth();
    const navigate = useNavigate();
    const [isSaas, setIsSaas] = useState(true);

    const handleLogin = async (method) => {
        const success = await login(method);
        if (success) {
            navigate('/');
        }
    };

    const saasLoginMethods = [
        { id: 'github', label: 'Sign in with Github', icon: '🐱' },
        { id: 'gitlab', label: 'Sign in with GitLab', icon: '🦊' },
        { id: 'bitbucket', label: 'Sign in with Bitbucket', icon: '🔵' },
        { id: 'sso', label: 'Sign in with Azure DevOps', icon: '🔑' },
    ];

    const selfHostedLoginMethods = [
        { id: 'gitlab', label: 'Self Hosted GitLab', icon: '🦊' },
        { id: 'sso', label: 'Sign in with SSO', icon: '🔑' },
    ];

    const activeLoginMethods = isSaas ? saasLoginMethods : selfHostedLoginMethods;

    return (
        <div className="flex flex-col">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
                <div className="text-center">
                    <div className="flex items-center justify-center">
                        <img className="h-12 w-auto" src={Logo} alt="CodeAnt AI" />
                        <h2 className="ml-4 text-xl">CodeAnt AI</h2>
                    </div>
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        Welcome to CodeAnt AI
                    </h2>
                </div>

                <div className="flex justify-center space-x-4 mb-4">
                    <button
                        onClick={() => setIsSaas(true)}
                        className={`px-4 py-2 ${isSaas ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                            } rounded-md`}
                    >
                        SAAS
                    </button>
                    <button
                        onClick={() => setIsSaas(false)}
                        className={`px-4 py-2 ${!isSaas ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                            } rounded-md`}
                    >
                        Self Hosted
                    </button>
                </div>

                <div className="space-y-3">
                    {activeLoginMethods.map((method) => (
                        <button
                            key={method.id}
                            onClick={() => handleLogin(method.id)}
                            disabled={loading}
                            className={`w-full flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${method.id === 'gitlab' && !isSaas
                                ? 'text-black bg-white border-gray-300 hover:bg-gray-50'
                                : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            <span className="mr-2">{method.icon}</span>
                            {method.label}
                        </button>
                    ))}
                </div>

                {error && (
                    <div className="mt-4 text-red-600 text-center text-sm">
                        {error}
                    </div>
                )}


            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
                By signing up you agree to the{' '}
                <a href="/privacy" className="text-black hover:text-blue-500 font-bold">
                    Privacy Policy
                </a>
            </p>
        </div>
    );
}
