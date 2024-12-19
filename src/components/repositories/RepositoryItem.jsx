import React from 'react';

export default function RepositoryItem({ repository }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border hover:bg-gray-100 mb-4 md:mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-medium">{repository.name}</h3>
                    <div className="flex items-center space-x-4 mt-2">
                        <span className="flex items-center">
                            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                            {repository.language}
                        </span>
                        <span>{repository.size} KB</span>
                        <span>Updated {repository.lastUpdated}</span>
                    </div>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-gray-100">
                    {repository.visibility}
                </span>
            </div>
        </div>
    );
}
