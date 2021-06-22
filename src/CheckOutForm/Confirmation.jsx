import React from 'react'
import { Typography, Button, CssBaseline ,Divider} from '@material-ui/core'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import useStyles from './styles'
const Confirmation = ({refreshCart}) => {
    const classes=useStyles();
    
    return (

        <>
            <div>
                <Typography variant="h5">Thank you to shop with Sahu,Check your email to track your order!</Typography>
                <Divider className={classes.divider} />
                {/* <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography> */}
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
    );
}

export default Confirmation
