import React from "react";
import styles from "./Success.module.css"
import {Button} from "@material-ui/core";
import {PATH} from "../../routes/Routes";
import {useHistory} from "react-router-dom";
import iconSuccess from "../../assets/Vector.svg"

const Success = () => {
    const history = useHistory()
    const goToPrevPage = () => {
        history.push(PATH.MAIN)
    }
    return <div className={styles.successWrapper}>
        <div className={styles.iconBlock}><img src={iconSuccess} alt=""/></div>
        <h3>Success</h3>
        <p>Your exchange order has been placed successfully and will be processed soon.</p>
        <Button variant="outlined" color="default" onClick={goToPrevPage}>Home</Button>
    </div>
}
export default Success
