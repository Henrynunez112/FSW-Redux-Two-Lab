import { SET_VISIBILITY_FILTER } from './ActionTypes';

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER, 
    payload: filter 
})