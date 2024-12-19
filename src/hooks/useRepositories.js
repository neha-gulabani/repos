import { useState, useEffect, useCallback } from 'react';

export function useRepositories() {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchRepositories = async () => {
            setLoading(true);

            // Simulate fetching data based on the page number
            const mockData = [];
            for (let i = 1; i <= 10; i++) {
                const repoIndex = (page - 1) * 10 + i;
                mockData.push({
                    id: repoIndex,
                    name: `repository-${repoIndex}`,
                    language: 'React',
                    size: (repoIndex * 100) % 5000,
                    lastUpdated: `${repoIndex % 10} days ago`,
                    visibility: repoIndex % 2 === 0 ? 'Public' : 'Private'
                });
            }

            setRepositories((prevRepos) => [...prevRepos, ...mockData]);
            setLoading(false);
            if (mockData.length < 10) {
                setHasMore(false); // No more repositories
            }
        };

        fetchRepositories();
    }, [page]);

    // Load more repositories when the page changes
    const loadMore = useCallback(() => {
        if (!loading && hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [loading, hasMore]);

    return { repositories, loading, loadMore, hasMore };
}
