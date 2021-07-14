import React from "react";
import {Redirect, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import styles from "./Info.module.css"
import {Button} from "@material-ui/core";
import {PATH} from "../../routes/Routes";


const Info = () => {

    const history = useHistory()
    const invoiceAmount = useSelector<AppRootStateType, number>(state => state.main.calculator.invoiceAmount)
    const withdrawAmount = useSelector<AppRootStateType, number>(state => state.main.calculator.withdrawAmount)
    const invoiceName = useSelector<AppRootStateType, string>(state => state.main.details.sellName)
    const withdrawName = useSelector<AppRootStateType, string>(state => state.main.details.buyName)
    const goToNextPage = () => {
        history.push(PATH.SUCCESS)
    }
    const goToPrevPage = () => {
        history.push(PATH.MAIN)
    }
    if (invoiceName === "" || withdrawName === "") {
        return <Redirect to={PATH.MAIN} />
    }

    return <div className={styles.infoWrapper}>

        <h1>Details</h1>
        <div className={styles.spanWrapper}>
            <span className={styles.greySpan}>Sell</span>
            <span className={styles.blackSpan}>{invoiceAmount+" "+invoiceName}</span>
        </div>
        <div className={styles.spanWrapper}>
            <span className={styles.greySpan}>Buy</span>
            <span className={styles.blackSpan}>{withdrawAmount+" "+withdrawName}</span>
        </div>
        <div className={styles.buttonsWrapper}>
            <Button variant="outlined" color="default" onClick={goToPrevPage}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={goToNextPage}>Confirm</Button>
        </div>
    </div>
}
export default Info
