import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

interface Params {
    params: {
        _limit: number;
    };
}

interface DataItem {
    userId?: number;
    id: number;
    title: string;
    body?: string;
}

interface FetchedData {
    data: DataItem[];
    isLoading: boolean;
    error: string;
    refetch: (params: Params) => void;
}

export function useFetch(url: string): FetchedData {
    const [data, setData] = useState<DataItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    function refetch({ params }: Params) {
        fetchData(url + `?_limit=${params._limit}`);
    }

    async function fetchData(url: string) {
        try {
            setError('');
            setIsLoading(true);
            const { data } = await axios.get<DataItem[]>(url);
            setData(data);
            setIsLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setIsLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, []);

    return { data, isLoading, error, refetch };
}
