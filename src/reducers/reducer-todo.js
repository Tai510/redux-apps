// import axios from 'axios';

export default function (state = {
    item: ['First Item'],
    complete: false,
    id: Date.now(),
}, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                { item: action.payload, complete: false, id: Date.now() }
            ];
        default:
            return state
    }
}

