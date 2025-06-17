import { useEffect, useRef, useState } from 'react';

interface HoveredData {
    hovered: boolean;
    ref: React.RefObject<HTMLDivElement | null>;
}

export function useHover(): HoveredData {
    const [hovered, setHovered] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    function changeTextContent() {
        const element = ref.current;

        if (element) {
            element.addEventListener('mouseover', function () {
                setHovered(true);
            });

            element.addEventListener('mouseout', function () {
                setHovered(false);
            });
        }
    }

    useEffect(() => {
        changeTextContent();
    }, []);

    return { hovered, ref };
}
