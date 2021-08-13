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
