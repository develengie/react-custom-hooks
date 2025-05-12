import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

type ScrollPositionY = {
    y: number;
};

type UseWindowScroll = () => [
    scroll: {
        x: number;
        y: number;
    },
    scrollTo: (y: ScrollPositionY) => void
];

export const useWindowScroll: UseWindowScroll = () => {
    const [scroll, setScroll] = useState(() => {
        if (typeof window !== 'undefined') {
            return { x: window.pageXOffset, y: window.pageYOffset };
        }

        return { x: 0, y: 0 };
    });

    const scrollTo = ({ y }: ScrollPositionY) => {
        window.scrollTo(scroll.x, y);
        setScroll(prevState => ({ ...prevState, y }));
    };

    const handleScroll = () => {
        const scrollOffset = window.pageYOffset;
        setScroll(prevState => ({ ...prevState, y: scrollOffset }));
    };

    useWindowEvent('scroll', handleScroll);

    return [scroll, scrollTo];
};
