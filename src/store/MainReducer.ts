import {getCalculateQuery, MainMethods} from '../api/api'
import {Dispatch} from 'redux'

type InitialStateType = {
    calculator: {
        invoiceMethodId: number
        withdrawMethodId: number
        invoiceAmount: number
        withdrawAmount: number
    }
    details: {
        sellName: string
        buyName: string
    }
}
const initialState: InitialStateType = {
    calculator: {
        invoiceMethodId: 1,
        withdrawMethodId: 1,
        invoiceAmount: 0,
        withdrawAmount: 0
    },
    details: {
        sellName: "",
        buyName: ""
    }
}
export const mainReducer = (state = initialState, action: MainActionsType):InitialStateType => {
    switch (action.type) {
        case "SET_INVOICE_PAY": {
            return {...state, calculator: {...state.calculator, invoiceMethodId: action.invoiceMethodId} }
        }
        case "SET_WITHDRAW_PAY": {
            return {...state, calculator: {...state.calculator, withdrawMethodId: action.withdrawMethodId} }
        }
        case "SET_INVOICE_AMOUNT": {
            return {...state, calculator: {...state.calculator, invoiceAmount: action.invoiceAmount} }
        }
        case "SET_WITHDRAW_AMOUNT": {
            return {...state, calculator: {...state.calculator, withdrawAmount: action.withdrawAmount}}
        }
        case "SET_SELL_NAME": {
            return {...state, details: {...state.details, sellName: action.sellName} }
        }
        case "SET_BUY_NAME": {
            return {...state, details: {...state.details, buyName: action.buyName} }
        }
    }
    return state
}
export const setInvoicePayIdAC = (invoiceMethodId: number) => ({type: "SET_INVOICE_PAY", invoiceMethodId} as const)
export const setWithdrawPayIdAC = (withdrawMethodId: number) => ({type: "SET_WITHDRAW_PAY", withdrawMethodId} as const)
export const setInvoiceAmountAC = (invoiceAmount: number) => ({type: "SET_INVOICE_AMOUNT", invoiceAmount} as const)
export const setWithdrawAmountAC = (withdrawAmount: number) => ({type: "SET_WITHDRAW_AMOUNT", withdrawAmount} as const)

export const setSellNameAC = (sellName: string) => ({type: "SET_SELL_NAME", sellName} as const)
export const setBuyNameAC = (buyName: string) => ({type: "SET_BUY_NAME", buyName} as const)

export type SetInvoicePayAT = ReturnType<typeof setInvoicePayIdAC>
export type SetWithdrawPayAT = ReturnType<typeof setWithdrawPayIdAC>
export type SetInvoiceAmountAT = ReturnType<typeof setInvoiceAmountAC>
export type SetWithdrawAmountAT = ReturnType<typeof setWithdrawAmountAC>

export type SetSellNameAT = ReturnType<typeof setSellNameAC>
export type SetBuyNameAT = ReturnType<typeof setBuyNameAC>

export type MainActionsType = SetInvoicePayAT
    | SetWithdrawPayAT
    | SetInvoiceAmountAT
    | SetWithdrawAmountAT
    | SetSellNameAT
    | SetBuyNameAT

export const calculateTC = (params: getCalculateQuery) => (dispatch: Dispatch) => {
    MainMethods.getCalculate(params).then( res => {
        if (params.base === "invoice") {
            dispatch(setWithdrawAmountAC(res.data.amount))
        }
        else {
            dispatch(setInvoiceAmountAC(res.data.amount))
        }
    }).catch(err => {
        alert("something went wrong")
    })
}

