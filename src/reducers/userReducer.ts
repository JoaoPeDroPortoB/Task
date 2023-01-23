import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const userInitialState: Person[] = []

export type Person = {
    task?: string;
    id: string;
    DoOrNot?: boolean | any
}
type ActionTypes = {
    type: string;
    payload: {
        task?: string;
        id?: string;
        DoOrNot?: boolean
    };
}

export const userReducer = (state: Person[], action: ActionTypes) => {
    switch (action.type) {
        case 'ADD':
            if (action.payload?.task) {
                let newState = [...state]
                newState.push({
                    id: uuidv4(),
                    task: action.payload.task,
                    DoOrNot: action.payload.DoOrNot
                });
                return newState
            }
            break;
        case 'REMOVE':
            if (action.payload.id) {
                let newState = [...state]
                newState = state.filter(data => data.id != action.payload.id);
                return newState
            }


    }
    return state
}

export const userReducerList = () => {
    return useReducer(userReducer, userInitialState)
}

