import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

    return (
        <Card className="cart-item">
            {/* <CardMedia image={item.media.source} alt={item.name} className={classes.media} /> */}
            <CardMedia className={classes.media}><img className={classes.image} src={item.media.source} /></CardMedia>
            <CardContent className={classes.cardContent}>
                <div className={classes.CardContent}>
                    <Typography variant="body2" gutterBottom>
                        {item.name}
                    </Typography>
                    <Typography variant="h6" >
                        {item.price.formatted_with_symbol}
                    </Typography>
                </div>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}><RemoveCircleIcon/></Button>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>< AddCircleIcon/></Button>
                </div>
                <div className={classes.grow} />
                <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    );
};

export default CartItem;
