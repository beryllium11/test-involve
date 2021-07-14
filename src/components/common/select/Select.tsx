import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {PayMethod} from "../../../api/api";
import styles from "./Select.module.css"

type PropsType = {
    method: Array<PayMethod>
    methodId: number
    dispatchOnChange: (id: number) => void
    setName: (name: string) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            display: 'block',
            marginTop: theme.spacing(0.5),
            marginRight: 15
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            width: '20ch',
            borderRadius: 4,
        },
    }),
);

export default function MethodSelect(props: PropsType) {

    const classes = useStyles();
    const [currency, setCurrency] = React.useState<string | number>(props.methodId);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const id = event.target.value as number
        setCurrency(id);
        props.dispatchOnChange(id)
        const curName = props.method.find(m => m.id === id)
        if (curName) {
            props.setName(curName.name)
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className={styles.selectWrapper}>
            <FormControl className={classes.formControl}>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={currency}
                    onChange={handleChange}
                >
                    {props.method.map( m => {
                        return <MenuItem key={m.id} value={m.id}>{m.name}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    );
}
