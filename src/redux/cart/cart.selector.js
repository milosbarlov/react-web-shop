import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectorCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulatedQuantity,carItem)=> accumulatedQuantity + carItem.quantity
        ,0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulatedQuantity,carItem)=> accumulatedQuantity + carItem.price * carItem.quantity
            ,0)
)