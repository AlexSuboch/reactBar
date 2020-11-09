import {  ACTIVE_SEARCH, setData } from './actions'

export const usersMiddleware = store => next => action => {

    const { isSearchByFirstLetter, isSearchByName, isRandomSearch, searchValue } = store.getState()

    if(action.type === ACTIVE_SEARCH && isSearchByFirstLetter){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchValue}`)
            .then(response => response.json())
            .then(data => 
                    store.dispatch(setData(data.drinks))
                )
    }

    if(action.type === ACTIVE_SEARCH && isSearchByName){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
            .then(response => response.json())
            .then(data => {
                const drinks = data.drinks === null? []: data.drinks;
                store.dispatch(setData(drinks))})
    }

    if(action.type === ACTIVE_SEARCH && isRandomSearch){
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => 
                store.dispatch(setData(data.drinks)))
    }

    next(action)
}
