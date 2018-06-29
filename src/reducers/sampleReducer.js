import initialState from './initialState';

export default function sampleReducer(state = initialState.data, action) {
    switch(action.type) {
        case 'SAMPLE_ACTION':
            return action.data;
        default:
            return state;
    }
}