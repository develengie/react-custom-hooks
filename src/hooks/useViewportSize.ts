import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

interface ViewportSizeData {
    height: number;
    width: number;
}

export function useViewportSize(): ViewportSizeData {
    const [size, setSize] = useState<ViewportSizeData>({
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
    });

    function windowEventListener() {
        setSize({
            height: window.innerHeight,
            width: window.innerWidth,
        });
    }

    useWindowEvent('resize', windowEventListener);

    return size;
}
