import { SEARCH_BY_FIRST_LETTER, SEARCH_BY_NAME, RANDOM_SEARCH, ACTIVE_SEARCH, SET_INPUT_VALUE, SET_DATA } from './actions'

const initialState = {
    isSearchByName: false,
    isSearchByFirstLetter: false,
    isRandomSearch: false,
    isSearchActive: false,
    searchValue: '',
    maxLength: 30,
    placeholder: 'Select search type',
    data: [],
    select: ''
}

export function dataReducer(state = initialState, action) {
   switch(action.type) {

    case SET_INPUT_VALUE: {
        return{
            ...state,
            searchValue: action.payload
        }
    }

    case SEARCH_BY_NAME: {
        return{
            ...state,
            isSearchByName: true,
            isSearchByFirstLetter: false,
            isRandomSearch: false,
            searchValue: '',
            maxLength: 30,
            placeholder: 'Enter the name of the drink',
            data: [],
            select: 'Name'
        }
    }

    case SEARCH_BY_FIRST_LETTER: {
        return{
            ...state,
            isSearchByName: false,
            isSearchByFirstLetter: true,
            isRandomSearch: false,
            searchValue: '',
            maxLength: 1,
            placeholder: 'Enter the first letter of the drink',
            data: [],
            select: 'First Letter'
        }
    }

    case RANDOM_SEARCH: {
        return{
            ...state,
            isSearchByName: false,
            isSearchByFirstLetter: false,
            isRandomSearch: true,
            searchValue: 'Just click on search',
            maxLength: 0,
            placeholder: 'Just click on search',
            data: [],
            select: 'Random'
        }
    }

    case ACTIVE_SEARCH: {
        return{
            ...state,
            isSearchActive: true,
        }
    }

    case SET_DATA: {
        return{
            ...state,
            data: action.payload
        }
    }

       default: return state
   }
}