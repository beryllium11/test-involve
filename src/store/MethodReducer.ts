import {Dispatch} from 'redux'
import {MainMethods, PayMethodsResponse} from ".././api/api";

const initialState: PayMethodsResponse = {
    invoice: [],
    withdraw: []
}
export const methodReducer = (state = initialState, action: SetInvoiceAT):PayMethodsResponse => {
    switch (action.type) {
        case "SET_METHODS": {
            return {...action.data}
        }
    }
    return state
}
export const setMethodsAC = (data: PayMethodsResponse) => ({type: "SET_METHODS", data} as const)

export type SetInvoiceAT = ReturnType<typeof setMethodsAC>

export const getMethodsTC = () => (dispatch: Dispatch) => {
    MainMethods.getPayMethods().then(res => {
        dispatch(setMethodsAC(res.data))
    })
}
