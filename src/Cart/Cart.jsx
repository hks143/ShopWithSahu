import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const Cart = ({cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart  }) => {
    const classes = useStyles();
    const renderEmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
            <Link className={classes.link} to="/">start adding some</Link>!
        </Typography>
    );

    if (!cart.line_items) return 'Loading...';

    const renderCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={6} md={4}key={lineItem.id}>
                        <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h5">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
               
                <div>
                <div className={classes.grow} />
                    <Button className={classes.emptyButton} size="small" type="button" variant="contained" color="secondary" onClick={onEmptyCart}>Empty cart</Button>
                   
                    <Button className={classes.checkoutButton} component={Link} to="/checkout" size="small" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? renderEmptyCart() : renderCart()}
        </Container>
    );
}

export default Cart
