import { useState } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
    value: LocalStorageReturnValue,
    {
        setItem: (value: LocalStorageSetValue) => void;
        removeItem: () => void;
    }
];

export const useLocalStorage: UseLocalStorage = key => {
    const item = localStorage.getItem(key);
    const [value, setValue] = useState(item ?? '');

    const setItem = (value: LocalStorageSetValue) => {
        if (!item) {
            localStorage.setItem(key, value);
            setValue(value);
        }
    };

    const removeItem = () => {
        if (item) {
            localStorage.removeItem(key);
            setValue('');
        }
    };

    return [value, { setItem, removeItem }];
};
