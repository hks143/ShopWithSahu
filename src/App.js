import React, { useEffect, useState } from 'react'
import Products from './components/Products/Products'
import Navbar from './components/Navbar/Navbar'
import { commerce } from './lib/commerce';
import Checkout from './CheckOutForm/Checkout/Checkout';
import Confirmation from './CheckOutForm/Confirmation';
import Cart from './Cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    };
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    };

    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, { quantity });

        setCart(response.cart);
    };

    const handleRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId);

        setCart(response.cart);
    };

    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();

        setCart(response.cart);
    };

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    };
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);

            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <CssBaseline />
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
                    </Route>
                    <Route path="/checkout" exact>
                        <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} refreshCart={refreshCart}/>
                    </Route>
                    <Route path="/orderstatus" exact>
                       <Confirmation/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
