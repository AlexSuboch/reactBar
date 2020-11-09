/* eslint-disable react/prop-types */
import React from 'react'
import Card from '../Card'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

function Main(props){
    return(
        <Wrapper>
            <Grid container direction="row" justify="center" alignItems="center" spacing = {3}>
                {props.data.map((el, ind) => <Card key = {ind} data = {el} />)}
            </Grid>
        </Wrapper>
    )
}

const mapStateToProps = function(state) {
    return {
        data: state.data
    }
  }


export default connect( mapStateToProps )(Main);

const Wrapper = styled.div`
  padding-top: 3rem;
`