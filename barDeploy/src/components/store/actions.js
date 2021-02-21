export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const SEARCH_BY_FIRST_LETTER = 'SEARCH_BY_FIRST_LETTER';
export const RANDOM_SEARCH = 'RANDOM_SEARCH';
export const ACTIVE_SEARCH = 'ACTIVE_SEARCH';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SET_DATA = 'SET_DATA';
export const SHOW_MODAL = 'SHOW_MODAL';

export function searchByName(payload){
    return{
        type: SEARCH_BY_NAME,
        payload: payload
    }
}

export function searchByFirstLetter(payload){
    return{
        type: SEARCH_BY_FIRST_LETTER,
        payload: payload
    }
}

export function randomSearch(payload){
    return{
        type: RANDOM_SEARCH,
        payload: payload
    }
}

export function activeSearch(payload){
    return{
        type: ACTIVE_SEARCH,
        payload: payload
    }
}

export function setInputValue(payload){
    return{
        type: SET_INPUT_VALUE,
        payload: payload
    }
}

export function setData(payload){
    return{
        type: SET_DATA,
        payload: payload
    }
}