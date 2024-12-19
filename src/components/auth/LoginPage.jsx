import React from 'react';
import LoginCard from './LoginCard';
import LoginImageComponent from './LoginImage';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex">
            <div className="hidden lg:flex w-1/2">
                <LoginImageComponent />
            </div>

            <div className="flex-1 flex items-center justify-center bg-gray-50 w-1/2">
                <LoginCard />
            </div>
        </div>
    );
}

