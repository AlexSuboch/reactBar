/* eslint-disable react/prop-types */
import React from 'react'
import Card from '../Card'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

function Main(){

    const data = useSelector(state => state.data)

    return(
        <Wrapper>
            <Grid container direction="row" justify="center" alignItems="center" spacing = {3}>
                {data.map((el, ind) => <Card key = {ind} data = {el} />)}
            </Grid>
        </Wrapper>
    )
}

export default Main;

const Wrapper = styled.div`
  padding-top: 3rem;
`