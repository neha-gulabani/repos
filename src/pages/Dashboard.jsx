import React from 'react';
import Sidebar from '../components/layout/Sidebar';

import RepositoryList from '../components/repositories/RepositoryList';

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-white">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
                    <div className="container mx-auto px-6 py-8">
                        <RepositoryList />
                    </div>
                </main>
            </div>
        </div>
    );
}