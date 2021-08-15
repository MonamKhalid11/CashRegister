import * as Actions from '../actions/ActionTypes'
const listingReducer = (state = {
    productList: [
        {
            id: 0,
            C_Num: 1,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 1,
            C_Num: 2,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 2,
            C_Num: 3,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 3,
            C_Num: 4,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 4,
            C_Num: 5,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 5,
            C_Num: 6,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 6,
            C_Num: 7,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 7,
            C_Num: 8,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 8,
            C_Num: 9,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 9,
            C_Num: 10,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0,
            grand: 0,

        },
        {
            id: 10,
            C_Num: 11,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0,
            grand: 0,
        },
        {
            id: 11,
            C_Num: 12,
            Qty: 0,
            cost: 0.25,
            retail: 0.25,
            isChecked: false,
            grandTotal: 0,
            grand: 0,
        }

    ],
    cart: null,
    dataBase: [],
    dataPushed:[],
    itemCounter: 0,

}, action) => {
    switch (action.type) {
        case Actions.SHOW_LISTING:
            console.log("showing states", state.productList)
            return Object.assign({}, state, {
                productList: action.listing
            });
        case Actions.SUBMIT_VALUE:
            return Object.assign({}, state, {
                cart: action.submit
            });
        case Actions.DELETE_VALUE:
            return Object.assign({}, state, {
                productList: null
            });
        case Actions.REPORT:
            return Object.assign({}, state, {
                dataBase: action.report
            });
        case Actions.DATA_PUSHED:
            return Object.assign({}, state, {
                dataPushed: action.dataPushed
            });
        case Actions.ITEM_COUNTER:
        return Object.assign({}, state, {
            itemCounter: action.itemCounter
        });
        default:
            return state;
    }
}

export default listingReducer;
