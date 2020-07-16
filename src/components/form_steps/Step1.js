import React from 'react'

//Material UI imports
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        padding: 30,
    }
  }));

const Step1 = () => {

    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
            <Grid item xs={5}>
                <Paper className={classes.paper}>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField 
                            id="username" 
                            label="User Name" 
                            variant="outlined"  />
                        <hr />
                        <TextField 
                            id="address" 
                            label="Address" 
                            variant="outlined"
                            multiline
                            rows={4}
                            />
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Step1
