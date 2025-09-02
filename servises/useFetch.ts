import { useState, useEffect } from 'react';

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try { // Fetch data from the API
            setLoading(true);
            setError(null);
            
            const result = await fetchFunction();
            setData(result);
        } catch (err) {
            // @ts-ignore
            setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        } finally { // Always executed, set the loading to false
            setLoading(false);
        }

    };

    const reset = () => { // Reset the state
        setData(null);
        setLoading(false);
        setError(null);
    };

    useEffect(() => { // does something when the component mounts (starts)
        if (autoFetch) {
            fetchData();
        }
    }, [autoFetch]);

    return { data, loading, error, refetch: fetchData, reset }; // Expose all state and functions
}

export default useFetch;