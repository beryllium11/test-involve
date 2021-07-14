import React, {ChangeEvent, useEffect, useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './Input.module.css'
import {useDispatch} from "react-redux";
import {calculateTC} from "../../../store/MainReducer";
import { getCalculateQuery } from '../../../api/api';

type PropsType = {
    setCurrencyAmount: (amount: number) => void
    base: 'invoice' | 'withdraw'
    invoiceId: number
    withdrawId: number
    value: number
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
                marginBottom: 30
            },
        },
        inputNum: {
        }
    }),
);

export default function InputNumField(props: PropsType) {
    const dispatch = useDispatch()
    const classes = useStyles();

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const params:getCalculateQuery = {
            amount: parseInt(e.currentTarget.value),
            base: props.base,
            invoicePayMethod: props.invoiceId,
            withdrawPayMethod: props.withdrawId
        }
        props.setCurrencyAmount(parseInt(e.currentTarget.value))
        dispatch(calculateTC(params))
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" onChange={onChangeHandler} label="Amount" value={props.value} type='number' className={styles.inputNum} variant="outlined" />
        </form>
    );
}
