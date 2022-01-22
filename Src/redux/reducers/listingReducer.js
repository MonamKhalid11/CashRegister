import * as Actions from '../actions/ActionTypes'
const listingReducer = (state = {
    productList: [
        {
            id: 0,
            C_Num: 1,
            Qty: 0,
            cost: 0.22,
            retail: 0.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 1,
            C_Num: 2,
            Qty: 0,
            cost: 0.45,
            retail: 0.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 2,
            C_Num: 3,
            Qty: 0,
            cost: 0.68,
            retail: 0.75,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 3,
            C_Num: 4,
            Qty: 0,
            cost: 0.90,
            retail: 1.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 4,
            C_Num: 5,
            Qty: 0,
            cost: 1.15,
            retail: 1.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 5,
            C_Num: 6,
            Qty: 0,
            cost: 1.35,
            retail: 1.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 6,
            C_Num: 7,
            Qty: 0,
            cost: 1.80,
            retail: 2.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 7,
            C_Num: 8,
            Qty: 0,
            cost: 2.05,
            retail: 2.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 8,
            C_Num: 9,
            Qty: 0,
            cost: 2.30,
            retail: 2.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 9,
            C_Num: 10,
            Qty: 0,
            cost: 2.70,
            retail: 3.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 10,
            C_Num: 11,
            Qty: 0,
            cost: 3.15,
            retail: 3.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 11,
            C_Num: 12,
            Qty: 0,
            cost: 3.60,
            retail: 4.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 12,
            C_Num: 13,
            Qty: 0,
            cost: 4.00,
            retail: 4.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 13,
            C_Num: 14,
            Qty: 0,
            cost: 4.45,
            retail: 5.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 14,
            C_Num: 15,
            Qty: 0,
            cost: 5.00,
            retail: 5.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 15,
            C_Num: 16,
            Qty: 0,
            cost: 5.50,
            retail: 6.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 16,
            C_Num: 17,
            Qty: 0,
            cost: 6.00,
            retail: 6.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 17,
            C_Num: 18,
            Qty: 0,
            cost: 6.50,
            retail: 7.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 18,
            C_Num: 19,
            Qty: 0,
            cost: 6.75,
            retail: 7.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 19,
            C_Num: 20,
            Qty: 0,
            cost: 8.00,
            retail: 9.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 20,
            C_Num: 21,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 21,
            C_Num: 22,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 22,
            C_Num: 23,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 23,
            C_Num: 24,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 24,
            C_Num: 25,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 25,
            C_Num: 26,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 26,
            C_Num: 27,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 27,
            C_Num: 28,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 28,
            C_Num: 29,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 29,
            C_Num: 30,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        }

    ],
    // givingtree list 
    givingtreeList: [
        {
            id: 0,
            C_Num: 1,
            Qty: 0,
            cost: 0.22,
            retail: 0.999,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 1,
            C_Num: 2,
            Qty: 0,
            cost: 0.45,
            retail: 0.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 2,
            C_Num: 3,
            Qty: 0,
            cost: 0.68,
            retail: 0.75,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 3,
            C_Num: 4,
            Qty: 0,
            cost: 0.90,
            retail: 1.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 4,
            C_Num: 5,
            Qty: 0,
            cost: 1.15,
            retail: 1.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 5,
            C_Num: 6,
            Qty: 0,
            cost: 1.35,
            retail: 1.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 6,
            C_Num: 7,
            Qty: 0,
            cost: 1.80,
            retail: 2.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 7,
            C_Num: 8,
            Qty: 0,
            cost: 2.05,
            retail: 2.25,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 8,
            C_Num: 9,
            Qty: 0,
            cost: 2.30,
            retail: 2.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 9,
            C_Num: 10,
            Qty: 0,
            cost: 2.70,
            retail: 3.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 10,
            C_Num: 11,
            Qty: 0,
            cost: 3.15,
            retail: 3.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 11,
            C_Num: 12,
            Qty: 0,
            cost: 3.60,
            retail: 4.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 12,
            C_Num: 13,
            Qty: 0,
            cost: 4.00,
            retail: 4.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 13,
            C_Num: 14,
            Qty: 0,
            cost: 4.45,
            retail: 5.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 14,
            C_Num: 15,
            Qty: 0,
            cost: 5.00,
            retail: 5.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 15,
            C_Num: 16,
            Qty: 0,
            cost: 5.50,
            retail: 6.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 16,
            C_Num: 17,
            Qty: 0,
            cost: 6.00,
            retail: 6.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 17,
            C_Num: 18,
            Qty: 0,
            cost: 6.50,
            retail: 7.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 18,
            C_Num: 19,
            Qty: 0,
            cost: 6.75,
            retail: 7.50,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 19,
            C_Num: 20,
            Qty: 0,
            cost: 8.00,
            retail: 9.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 20,
            C_Num: 21,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 21,
            C_Num: 22,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 22,
            C_Num: 23,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 23,
            C_Num: 24,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 24,
            C_Num: 25,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 25,
            C_Num: 26,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 26,
            C_Num: 27,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 27,
            C_Num: 28,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 28,
            C_Num: 29,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 29,
            C_Num: 30,
            Qty: 0,
            cost: 0.00,
            retail: 0.00,
            isChecked: true,
            grandTotal: 0,
            grand: 0,
        }

    ],

    cart: null,
    dataBase: [],
    itemCounter: 0,
    accessKey: 'peppermint22',
    givingtreeKey: 'givingtree22',
    tokenChecked: null,
    user: null,
    productsList: [],
    codePriceList: []

}, action) => {
    switch (action.type) {
        case Actions.SHOW_LISTING:
            return Object.assign({}, state, {
                productsList: action.listing
            });
        case Actions.CODE_PRICE_CHANGE:
            return Object.assign({}, state, {
                codePriceList: action.codePriceChange
            });
        case Actions.SUBMIT_VALUE:
            return Object.assign({}, state, {
                cart: action.submit
            });
        case Actions.DELETE_VALUE:
            return Object.assign({}, state, {
                productList: null
            });
        case Actions.DATA_IS_PUSHED:
            return Object.assign({}, state, {
                dataBase: [...state.dataBase, action.dataBase]
            });
        case Actions.ITEM_COUNTER:
            return Object.assign({}, state, {
                itemCounter: action.itemCounter
            });
        case Actions.TOKEN_CHECKED:
            return Object.assign({}, state, {
                tokenChecked: action.tokenChecked
            });
        case Actions.USER:
            return Object.assign({}, state, {
                user: action.user
            });
        default:
            return state;
    }
}

export default listingReducer;
