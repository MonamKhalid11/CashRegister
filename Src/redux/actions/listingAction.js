import * as ActionTypes from './ActionTypes';

export const showListing = (listingParameter) => ({
    type: ActionTypes.SHOW_LISTING,
    listing: listingParameter
})

export const setCodePriceChange = (listingParameters) => ({
    type: ActionTypes.CODE_PRICE_CHANGE,
    codePriceChange: listingParameters
})

export const submitValue = (submittingParams) => ({
    type: ActionTypes.SUBMIT_VALUE,
    submit: submittingParams
})
export const deleteValue = () => ({
    type: ActionTypes.DELETE_VALUE,
})
export const setDataDatabaseArray = (dataParams) => ({
    type: ActionTypes.DATA_IS_PUSHED,
    dataBase: dataParams
})
export const setItemCounter = (counterParams) => ({
    type: ActionTypes.ITEM_COUNTER,
    itemCounter: counterParams
})
export const setTokenChecked = (tokenParams) => ({
    type: ActionTypes.TOKEN_CHECKED,
    tokenChecked: tokenParams
})
export const saveUser = (userParam) => ({
    type: ActionTypes.USER,
    user: userParam
})
