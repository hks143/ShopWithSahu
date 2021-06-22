import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

const Product = ({ product,onAddToCart }) => {
    const classes=useStyles();
    return (
        <Card className={classes.root}>
            {/* <CardMedia className={classes.media} image={product.media.source} title={product.name} /> */}
            {/* <CardMedia className={classes.media} image={product.media.source} title={product.name} /> */}
            {/* <img src={product.media.source} width='100%' height='200px'/> */}
            <CardMedia className={classes.media}><img className={classes.image} src={product.media.source} /></CardMedia>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="body2" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h6" >
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                {/* <Typography dangerouslySetInnerHTML={{__html:product.description}}variant="body2" color="textSecondary"/> */}
              
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={()=>onAddToCart(product.id,1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
          
        </Card>
    )
}

export default Product
