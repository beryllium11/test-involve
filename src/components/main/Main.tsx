import React, {useCallback, useEffect} from "react";
import {Button} from "@material-ui/core";
import InputNumField from "../common/input/Input";
import styles from "./Main.module.css"
import MethodSelect from "../common/select/Select";
import {useDispatch, useSelector} from "react-redux";
import {getMethodsTC} from "../../store/MethodReducer";
import {AppRootStateType} from "../../store/store";
import {PayMethod} from "../../api/api";
import {
    setBuyNameAC,
    setInvoiceAmountAC,
    setInvoicePayIdAC,
    setSellNameAC,
    setWithdrawAmountAC,
    setWithdrawPayIdAC
} from "../../store/MainReducer";
import { useHistory } from "react-router-dom";
import {PATH} from "../../routes/Routes";

const Main = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMethodsTC())
    }, [])
    const history = useHistory()
    const invoiceMethods = useSelector<AppRootStateType, Array<PayMethod>>(state => state.methods.invoice)
    const withdrawMethods = useSelector<AppRootStateType, Array<PayMethod>>(state => state.methods.withdraw)
    const invoice = useSelector<AppRootStateType, number>(state => state.main.calculator.invoiceAmount)
    const withdraw = useSelector<AppRootStateType, number>(state => state.main.calculator.withdrawAmount)

    const setInvoiceId = useCallback((id: number) => {
        const action = setInvoicePayIdAC(id)
        dispatch(action)
    }, [])
    const setWithdrawId = useCallback((id: number) => {
        const action = setWithdrawPayIdAC(id)
        dispatch(action)
    }, [])
    const setInvoiceAmount = useCallback((amount: number) => {
        const action = setInvoiceAmountAC(amount)
        dispatch(action)
    }, [])
    const setWithdrawAmount = useCallback((amount: number) => {
        const action = setWithdrawAmountAC(amount)
        dispatch(action)
    }, [])
    const setInvoiceName = useCallback((name: string) => {
        const action = setSellNameAC(name)
        dispatch(action)
    }, [])
    const setWithdrawName = useCallback((name: string) => {
        const action = setBuyNameAC(name)
        dispatch(action)
    }, [])
    const invoiceId = useSelector<AppRootStateType, number>(state => state.main.calculator.invoiceMethodId)
    const withdrawId = useSelector<AppRootStateType, number>(state => state.main.calculator.withdrawMethodId)
    const goToNextPage = () => {
        history.push(PATH.INFO)
    }
    const next = !(invoice && withdraw)

    return <div className={styles.mainWrapper}>
        <div className={styles.leftBlock}>
            <h2>Sell</h2>
            <MethodSelect method={invoiceMethods} dispatchOnChange={setInvoiceId} setName={setInvoiceName} methodId={invoiceId}/>
            <InputNumField base='invoice'
                           value={invoice}
                           withdrawId={withdrawId}
                           invoiceId={invoiceId}
                           setCurrencyAmount={setInvoiceAmount}/>
        </div>
        <div className={styles.rightBlock}>
            <h2>Buy</h2>
            <MethodSelect method={withdrawMethods} dispatchOnChange={setWithdrawId} setName={setWithdrawName} methodId={withdrawId}/>
            <InputNumField base='withdraw'
                           value={withdraw}
                           withdrawId={withdrawId}
                           invoiceId={invoiceId}
                           setCurrencyAmount={setWithdrawAmount}/>
        </div>
        <div className={styles.nextBut}>
            <Button variant="contained" disabled={next} color="primary" onClick={goToNextPage}>Exchange</Button>
        </div>
    </div>
}
export default Main
