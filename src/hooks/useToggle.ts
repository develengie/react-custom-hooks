import { useReducer } from 'react';

type Action<T> =
    | {
          type: 'TOGGLE';
      }
    | {
          type: 'SET';
          payload: T;
      };

type ToggledData<T> = [T, (data?: T) => void];

const reducer = <T>(state: number, action: Action<T>, array: T[]) => {
    switch (action.type) {
        case 'TOGGLE':
            return (state + 1) % array.length;

        case 'SET': {
            const newIndex = array.indexOf(action.payload);

            if (newIndex === -1) {
                return state;
            }

            return newIndex;
        }

        default:
            throw new Error();
    }
};

export const useToggle = <T = boolean>(array?: T[]): ToggledData<T> => {
    const createArray = (): T[] => {
        if (Array.isArray(array)) {
            return array;
        }

        return [false, true] as T[];
    };
    const initialState = 0;
    const isArray = array?.every(item => typeof item !== undefined);

    const [index, dispatch] = useReducer(
        (state, action) => reducer(state, action, createArray()),
        initialState
    );

    const toggle = (data?: T) => {
        if (isArray) {
            dispatch({
                type: 'TOGGLE',
            });
        } else {
            dispatch({
                type: 'SET',
                payload: data,
            });
        }
    };

    return [createArray()[index], toggle];
};
