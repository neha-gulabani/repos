import React, { useRef, useEffect, useState } from 'react';
import { useRepositories } from '../../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import { RefreshIcon } from '@heroicons/react/outline';

export default function RepositoryList() {
    const { repositories, loading, loadMore, hasMore } = useRepositories();
    const [searchTerm, setSearchTerm] = useState('');
    const observer = useRef();

    const lastRepoElementRef = (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                loadMore();
            }
        });
        if (node) observer.current.observe(node);
    };

    useEffect(() => {
        if (repositories.length === 33) {
            hasMore(false);
        }
    }, [repositories]);

    const filteredRepositories = repositories.filter((repo) =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading && repositories.length === 0) return <div>Loading...</div>;

    return (
        <div className="bg-white p-4 md:p-8 rounded-lg">

            {/* Header and Buttons */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                {/* Repositories Title */}
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-semibold">Repositories</h1>
                    <p className="text-grey-500">33 total repositories</p>
                </div>
                {/* Buttons */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <button className="bg-white text-gray-500 px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md border-[#D5D7DA] border border-gray-300 shadow-md hover:shadow-lg hover:bg-gray-100 flex">
                        <RefreshIcon className="w-5 h-5 mr-2" />
                        Refresh All
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md">
                        Add Repository
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search Repositories"
                    className="w-1/3 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Repository List */}
            <div>
                {filteredRepositories.map((repo, index) => {
                    if (filteredRepositories.length === index + 1) {
                        return (
                            <div ref={lastRepoElementRef} key={repo.id}>
                                <RepositoryItem repository={repo} />
                            </div>
                        );
                    } else {
                        return <RepositoryItem key={repo.id} repository={repo} />;
                    }
                })}
            </div>

            {loading && <div>Loading more...</div>}
        </div>
    );
}
