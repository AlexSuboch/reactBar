/* eslint-disable react/prop-types */
import React  from 'react'
// import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { searchByName, searchByFirstLetter, randomSearch, activeSearch, setInputValue } from '../store/actions'
import { FormControl, TextField, InputLabel, Select, MenuItem, Button, Grid } from '@material-ui/core'

function Header(){

    const maxLength = useSelector(state => state.maxLength)
    const searchValue = useSelector(state => state.searchValue)
    const isRandomSearch = useSelector(state => state.isRandomSearch)
    const placeholder = useSelector(state => state.placeholder)
    const select = useSelector(state => state.select)

    const dispatch = useDispatch();

    function setSearchByName(){
        dispatch(searchByName())
    }

    function setSearchByFirstLetter(){
        dispatch(searchByFirstLetter())
    }

    function setRandomSearch(){
        dispatch(randomSearch())
    }

    function toSetInputValue(event){
        dispatch(setInputValue(event.target.value))
    }

    function toSearch(){
        dispatch(activeSearch())
    }

    return(
        <Grid container direction="row" justify="space-evenly" alignItems="flex-end" spacing = {3}>
            <Grid item sm={5} xs={12}>
                <FormControl fullWidth>
                    <InputLabel>Search Type</InputLabel>
                        <Select value = {select}>
                            <MenuItem  onClick = {setSearchByName} value = 'Name'>Name</MenuItem>
                            <MenuItem  onClick = {setSearchByFirstLetter} value = 'First Letter'>First Letter</MenuItem>
                            <MenuItem  onClick = {setRandomSearch} value = 'Random'>Random</MenuItem>
                        </Select>
                </FormControl>
            </Grid>
            <Grid item sm={5} xs={12} >
                <TextField inputProps={{maxLength: maxLength, value: searchValue, placeholder: placeholder, readOnly: isRandomSearch? true: false, onChange: toSetInputValue }} fullWidth></TextField>
            </Grid>
            <Grid item sm={2} xs={6} >    
                <Button onClick = {toSearch} variant="contained" color="primary" disabled = {searchValue? false: true}>Search</Button>       
            </Grid>
        </Grid>
    )
}

export default Header;

