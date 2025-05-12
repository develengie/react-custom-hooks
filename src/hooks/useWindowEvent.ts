import { useEffect } from 'react';

interface Options {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
}

export function useWindowEvent(
    type: string,
    listener: () => void,
    options?: Options
) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener(type, listener, options);
            return () => window.removeEventListener(type, listener, options);
        }
    }, [type, listener]);
}
