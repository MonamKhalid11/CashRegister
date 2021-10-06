import * as ActionTypes from './ActionTypes';

export const showListing = (listingParameter) => ({
    type: ActionTypes.SHOW_LISTING,
    listing: listingParameter
})

export const submitValue = (submittingParams) => ({
    type: ActionTypes.SUBMIT_VALUE,
    submit: submittingParams
})
export const deleteValue = () => ({
    type: ActionTypes.DELETE_VALUE,
})
export const makeReport = (reportParams) => ({
    type: ActionTypes.REPORT,
    report: reportParams
})
export const setDataDatabaseArray = (dataParams) => ({
    type: ActionTypes.DATA_IS_PUSHED,
    dataIsPushed: dataParams
})
export const setItemCounter = (counterParams) => ({
    type: ActionTypes.ITEM_COUNTER,
    itemCounter: counterParams
})
export const setTokenChecked = (tokenParams) => ({
    type: ActionTypes.TOKEN_CHECKED,
    tokenChecked: tokenParams
})
