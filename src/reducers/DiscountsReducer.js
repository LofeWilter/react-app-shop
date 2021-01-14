const SET_FORM = 'SET_FORM';
const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
const SET_DISCOUNT = 'SET_DISCOUNT';
const DELETE_DISCOUNT = 'DELETE_DISCOUNT';
const SET_FINAL_PRICE = 'SET_FINAL_PRICE';

let initialState = {
    discounts: [
        {
            name: 'xmas',
            value: (cart) => {
                let expensive = 0;
                cart.line_items.forEach(item => {
                    if (item.price.raw > expensive) {
                        expensive = item.price.raw
                    }
                })
                return expensive * 0.4
            },
            active: false,
            valueInCash: 0,
            id: 0
        },
        {
            name: 'OneFree',
            value: (cart) => {
                let cheapest = cart.subtotal.raw;
                cart.line_items.forEach(item => {
                    if (item.price.raw < cheapest) {
                        cheapest = item.price.raw
                    }
                })
                return cheapest
            },
            active: false,
            valueInCash: 0,
            id: 1
        }
    ],
    isOpen: false,
    newDiscount: '',
    finalPrice: null,
    isAnyDiscountApplied: 0
}

const DiscountsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FORM': {
            return {
                ...state, isOpen: action.isOpen
            }
        }
        case 'SET_FIELD_VALUE': {
            return {
                ...state, newDiscount: action.value
            }
        }
        case 'SET_DISCOUNT': {
            let check = '';
            let active = 0;
            let discounts = state.discounts.map(item => {
                if (item.name === state.newDiscount && !item.active) {
                    check = item.name;
                    active = 1;
                    return {
                        ...item,
                        active: true,
                        valueInCash: item.value(action.cart)
                    }
                }
                return item
            });
            if (check === 'xmas') {
                discounts[1].active = false;
            }   ///////// ?
            else if (check === 'OneFree') {
                discounts[0].active = false
            }
            return {
                ...state,
                newDiscount: '',
                discounts: discounts,
                isAnyDiscountApplied: state.isAnyDiscountApplied + active
            }

        }
        case 'DELETE_DISCOUNT': {
            let discounts = state.discounts.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        active: false
                    }
                }
                return item
            });
            return {
                ...state,
                discounts: discounts,
                isAnyDiscountApplied: state.isAnyDiscountApplied - 1
            }
        }
        case 'SET_FINAL_PRICE': {
            let price = action.price;
            if (action.total_items > 0) {
                state.discounts.forEach(item => {
                    if (item.active) {
                        price = price - item.valueInCash
                    }
                })
                return {
                    ...state, finalPrice: price
                }
            }
            else {
                let discounts = state.discounts.map(item => {
                    return {
                        ...item,
                        active: false
                    }
                });
                return {
                    ...state, 
                    finalPrice: action.price,
                    discounts : discounts,
                    isAnyDiscountApplied: 0
                }
            }
        }
        default: return state
    }
}

export const SetForm = (bool) => {
    return {
        type: SET_FORM,
        isOpen: bool
    }
}

export const SetFieldValue = (value) => {
    return {
        type: SET_FIELD_VALUE,
        value: value
    }
}

export const SetDiscount = (cart) => {
    return {
        type: SET_DISCOUNT,
        cart: cart
    }
}

export const DeleteDiscount = (id) => {
    return {
        type: DELETE_DISCOUNT,
        id: id
    }
}

export const SetFinalPrice = (cart) => {
    return {
        type: SET_FINAL_PRICE,
        price: cart.subtotal.raw,
        total_items: cart.total_items
    }
}


export default DiscountsReducer;