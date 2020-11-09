/* eslint-disable react/prop-types */
import React, {useState} from 'react'
import { connect } from 'react-redux'
import { showModal } from '../store/actions'
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
        maxWidth: '560px'
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
        <Grid item xs = {4}>
            <Paper className = {classes.card} elevation={3}>
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
                  <div className={classes.paper}>
                    <Typography variant="h5" >{props.data.strDrink}</Typography>
                    <p><Typography variant = 'overline'>Category:</Typography><Typography variant="body2" >{props.data.strCategory}</Typography></p>
                    <p><Typography variant = 'overline'>Is Alcoholic?:</Typography><Typography variant="body2" >{props.data.strAlcoholic}</Typography></p>
                    <p><Typography variant = 'overline'>Glass:</Typography><Typography variant="body2" >{props.data.strGlass}</Typography></p>
                    <p><Typography variant = 'overline'>Instruction:</Typography><Typography variant="body2" >{props.data.strInstructions}</Typography></p>
                    <p>{props.data.strIngredient1? <div><Typography variant = 'overline'>Ingridient 1:</Typography><Typography variant="body2" >{props.data.strIngredient1}</Typography></div> : '' }</p>
                    <p>{props.data.strMeasure1? <div><Typography variant = 'overline'>Measure 1:</Typography><Typography variant="body2" >{props.data.strMeasure1}</Typography></div> : '' }</p>
                    <p>{props.data.strIngredient2? <div><Typography variant = 'overline'>Ingridient 2:</Typography><Typography variant="body2" >{props.data.strIngredient2}</Typography></div> : '' }</p>
                    <p>{props.data.strMeasure2? <div><Typography variant = 'overline'>Measure 2:</Typography><Typography variant="body2" >{props.data.strMeasure2}</Typography></div> : '' }</p>
                    <p>{props.data.strIngredient3? <div><Typography variant = 'overline'>Ingridient 3:</Typography><Typography variant="body2" >{props.data.strIngredient3}</Typography></div> : '' }</p>
                    <p>{props.data.strMeasure3? <div><Typography variant = 'overline'>Measure 3:</Typography><Typography variant="body2" >{props.data.strMeasure3}</Typography></div> : '' }</p>
                    <p>{props.data.strIngredient4? <div><Typography variant = 'overline'>Ingridient 4:</Typography><Typography variant="body2" >{props.data.strIngredient4}</Typography></div> : '' }</p>
                    <p>{props.data.strMeasure4? <div><Typography variant = 'overline'>Measure 4:</Typography><Typography variant="body2" >{props.data.strMeasure4}</Typography></div> : ''}</p>
                    <p>{props.data.strIngredient5? <div><Typography variant = 'overline'>Ingridient 5:</Typography><Typography variant="body2" >{props.data.strIngredient5}</Typography></div> : '' }</p>
                    <p>{props.data.strMeasure5? <div><Typography variant = 'overline'>Measure 5:</Typography><Typography variant="body2" >{props.data.strMeasure5}</Typography></div> : '' }</p>
                    <p>{props.data.strIngredient6? <div><Typography variant = 'overline'>Ingridient 6:</Typography><Typography variant="body2" >{props.data.strIngredient6}</Typography></div> : '' }</p>
                    <p>{props.data.strMeasure6? <div><Typography variant = 'overline'>Measure 6:</Typography><Typography variant="body2" >{props.data.strMeasure6}</Typography></div> : ''}</p>
                    <p>{props.data.strIngredient7? <div><Typography variant = 'overline'>Ingridient 7:</Typography><Typography variant="body2" >{props.data.strIngredient7}</Typography></div> : '' }</p>
                    <p>{props.data.strMeasure7? <div><Typography variant = 'overline'>Measure 7:</Typography><Typography variant="body2" >{props.data.strMeasure7}</Typography></div> : '' }</p>
                  </div>
                </Fade>
            </Modal>
        </Grid>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        showModal: dispatch(showModal())
    }
}


export default connect(null, mapDispatchToProps)(Card)

const Image = styled.img`
    width: 300px;
    height: 300px;
`