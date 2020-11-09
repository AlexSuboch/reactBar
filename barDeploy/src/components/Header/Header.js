/* eslint-disable react/prop-types */
import React  from 'react'
// import styled from 'styled-components'
import { connect } from 'react-redux';
import { searchByName, searchByFirstLetter, randomSearch, activeSearch, setInputValue } from '../store/actions'
import { FormControl, TextField, InputLabel, Select, MenuItem, Button, Grid } from '@material-ui/core'

function Header(props){

    return(
        <Grid container alignItems="flex-end" spacing = {2}>
            <Grid item xs={5}>
                <FormControl fullWidth>
                    <InputLabel>Search Type</InputLabel>
                        <Select value = {props.select}>
                            <MenuItem onClick = {props.searchByName} value = 'Name'>Name</MenuItem>
                            <MenuItem onClick = {props.searchByFirstLetter} value = 'First Letter'>First Letter</MenuItem>
                            <MenuItem onClick = {props.randomSearch} value = 'Random'>Random</MenuItem>
                        </Select>
                </FormControl>
            </Grid>
            <Grid item xs={5}>
                <TextField aria-readonly = {props.isRandomSearch? true: false} inputProps={{maxLength: props.maxLength, value: props.searchValue, placeholder: props.placeholder, onChange: props.setInputValue }} fullWidth></TextField>
            </Grid>
            <Grid item xs={2}>    
                <Button onClick = {props.activeSearch} variant="contained" color="primary" disabled = {props.searchValue? false: true}>Search</Button>       
            </Grid>
        </Grid>
    )
}


  const mapDispatchToProps = dispatch =>{
      return{
        searchByName: () => dispatch(searchByName()),
        searchByFirstLetter: () => dispatch(searchByFirstLetter()),
        randomSearch: () => dispatch(randomSearch()),
        setInputValue: (event) => dispatch(setInputValue(event.target.value)),
        activeSearch: () => dispatch(activeSearch())
      }
  }

  const mapStateToProps = function(state) {
    return {
        maxLength: state.maxLength,
        searchValue: state.searchValue,
        isRandomSearch: state.isRandomSearch,
        placeholder: state.placeholder,
        select: state.select
    }
  }


export default connect( mapStateToProps , mapDispatchToProps)(Header);

/* eslint-disable react/prop-types */
// import styled from 'styled-components';
// import GlobalFonts from '../fonts/fonts';
// import { connect } from 'react-redux';
// import {
//     searchByName,
//     searchByFirstLetter,
//     randomSearch,
//     activeSearch,
//     setSearchValue,
// } from '../store/actions';

// const Tools = styled.div`
//     display: flex;
//     flex-flow: row;
//     align-items: center;
//     justify-content: space-around;
//     font-family: 'arbutus';
// `;
// const ToolsP = styled.p`
//     padding: 0 10px;
//     cursor: pointer;
// `;

// const HeaderContainer = styled.div`
//     display: flex;
//     flex-flow: row;
//     align-items: center;
//     justify-content: space-around;
//     font-family: 'arbutus';
//     user-select: none;
// `;
// const Options = styled.div`
//     display: flex;
//     flex-flow: row;
//     align-items: center;
//     justify-content: space-around;
//     font-family: 'arbutus';
// `;

// const Input = styled.input`
// `;

// const Header = ({
//     searchByName,
//     searchByFirstLetter,
//     randomSearch,
//     maxLength,
//     searchValue,
//     placeholder,
//     setSearchValue,
//     activeSearch
// }) => {
//     const handleSearch = ({ target }) => {
//         setSearchValue(target.value);
//     };
//     return (
//         <HeaderContainer>
//             <GlobalFonts/>
//             <p>React-Bar</p>
//             <div>
//                 <Tools>
//                     <p>Search cocktail by :</p>
//                     <ToolsP onClick={searchByName}>Name</ToolsP>
//                     <ToolsP onClick={searchByFirstLetter}>First letter</ToolsP>
//                     <ToolsP onClick={randomSearch}>Random drink!</ToolsP>
//                 </Tools>
//                 <Options>
//                     <Input
//                         maxLength={maxLength}
//                         value={searchValue}
//                         placeholder={placeholder}
//                         onChange={handleSearch}
//                     />
//                     <ToolsP onClick={activeSearch}>Search</ToolsP>
//                 </Options>
//             </div>
//         </HeaderContainer>
//     )
// }

// const mapStateToProps = state => state;

// const mapDispatchToProps = {
//     searchByName,
//     searchByFirstLetter,
//     randomSearch,
//     setSearchValue,
//     activeSearch,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
