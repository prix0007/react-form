import React from 'react'

//Material UI imports
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
   
  }));


const Step3 = () => {
    
    const classes = useStyles()

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
            <Grid item xs={10} sm={8}>
                <Paper className={classes.paper}>
                    <Typography variant="body1" >
                        Comfirmation from the previous<br /> States will be shown Here.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Step3
