import React from 'react'

//Material UI imports
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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



const Step2 = () => {
    const [value, setValue] = React.useState('Debit Card');

    const classes = useStyles();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
            <Grid item xs={10} sm={8}>
                <Paper className={classes.paper}>
                    <FormControl component="fieldset">
                    <FormLabel component="legend"> <Typography variant="h5" color="primary" gutterBottom>Payment Methods</Typography></FormLabel>
                    <RadioGroup aria-label="payment-methods" name="payment-method1" value={value} onChange={handleChange}>
                        <FormControlLabel value="Debit Card" control={<Radio />} label="Debit Card" />
                        <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
                        <FormControlLabel value="UPI" control={<Radio />} label="UPI" />
                        <FormControlLabel value="COD" disabled control={<Radio />} label="(COD) Cash on Delivery" />
                    </RadioGroup>
                    </FormControl>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Step2
