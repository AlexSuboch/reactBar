/* eslint-disable react/prop-types */
import React, {useState} from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    card: {
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
        width: '300px',
        height: '300px'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        maxWidth: '50%',
        minWidth: '280px'
      },
  }));
  

function Card(props){

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return(
        <Grid item >
            <Paper className = {classes.card} elevation={2}>
                <Typography variant="h5" gutterBottom>{props.data.strDrink}</Typography>
                <Image src = {props.data.strDrinkThumb} alt = ''></Image>
                <Typography variant = 'overline' onClick = {() => handleOpen()}>More information</Typography>
            </Paper>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
            >
                <Fade in={open}>
                  <ModalSize className={classes.paper}>
                    <Typography variant="h4" >{props.data.strDrink}</Typography>
                    <Typography variant = 'h5'>Category:</Typography><Typography variant="h6" >{props.data.strCategory}</Typography>
                    <Typography variant = 'h5'>Is Alcoholic?:</Typography><Typography variant="h6" >{props.data.strAlcoholic}</Typography>
                    <Typography variant = 'h5'>Glass:</Typography><Typography variant="h6" >{props.data.strGlass}</Typography>
                    <Typography variant = 'h5'>Instruction:</Typography><Typography variant="h6" >{props.data.strInstructions}</Typography>
                    {props.data.strIngredient1? <Row><Typography variant = 'h5'>Ingridient 1:</Typography><Typography variant="h6" >{props.data.strIngredient1}</Typography></Row> : '' }
                    {props.data.strMeasure1? <Row><Typography variant = 'h5'>Measure 1:</Typography><Typography variant="h6" >{props.data.strMeasure1}</Typography></Row> : '' }
                    {props.data.strIngredient2? <Row><Typography variant = 'h5'>Ingridient 2:</Typography><Typography variant="h6" >{props.data.strIngredient2}</Typography></Row> : '' }
                    {props.data.strMeasure2? <Row><Typography variant = 'h5'>Measure 2:</Typography><Typography variant="h6" >{props.data.strMeasure2}</Typography></Row> : '' }
                    {props.data.strIngredient3? <Row><Typography variant = 'h5'>Ingridient 3:</Typography><Typography variant="h6" >{props.data.strIngredient3}</Typography></Row> : '' }
                    {props.data.strMeasure3? <Row><Typography variant = 'h5'>Measure 3:</Typography><Typography variant="h6" >{props.data.strMeasure3}</Typography></Row> : '' }
                    {props.data.strIngredient4? <Row><Typography variant = 'h5'>Ingridient 4:</Typography><Typography variant="h6" >{props.data.strIngredient4}</Typography></Row> : '' }
                    {props.data.strMeasure4? <Row><Typography variant = 'h5'>Measure 4:</Typography><Typography variant="h6" >{props.data.strMeasure4}</Typography></Row> : ''}
                    {props.data.strIngredient5? <Row><Typography variant = 'h5'>Ingridient 5:</Typography><Typography variant="h6" >{props.data.strIngredient5}</Typography></Row> : '' }
                    {props.data.strMeasure5? <Row><Typography variant = 'h5'>Measure 5:</Typography><Typography variant="h6" >{props.data.strMeasure5}</Typography></Row> : '' }
                    {props.data.strIngredient6? <Row><Typography variant = 'h5'>Ingridient 6:</Typography><Typography variant="h6" >{props.data.strIngredient6}</Typography></Row> : '' }
                    {props.data.strMeasure6? <Row><Typography variant = 'h5'>Measure 6:</Typography><Typography variant="h6" >{props.data.strMeasure6}</Typography></Row> : ''}
                    {props.data.strIngredient7? <Row><Typography variant = 'h5'>Ingridient 7:</Typography><Typography variant="h6" >{props.data.strIngredient7}</Typography></Row> : '' }
                    {props.data.strMeasure7? <Row><Typography variant = 'h5'>Measure 7:</Typography><Typography variant="h6" >{props.data.strMeasure7}</Typography></Row> : '' }
                  </ModalSize>
                </Fade>
            </Modal>
        </Grid>
    )
}

export default Card

const Image = styled.img`
    width: 300px;
    height: 300px;
`

const Row = styled.div`
  display: flex;
  flexFlow: row;
  text-aligh: center;
  justify-content: flex-start;
`
const ModalSize = styled.div`
  
  height: 50%;
  overflow: scroll;
`