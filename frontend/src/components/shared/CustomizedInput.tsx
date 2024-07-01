import React from 'react'
import { TextField } from '@mui/material'

type Props = {
    name: string
    type: string
    label: string
}

const CustomizedInput = (props: Props) => {
    return <TextField 
        InputLabelProps={{style: { color: "white" }} }
        name={props.name}
        type={props.type}
        label={props.label}
        fullWidth={true}
        margin="normal"
        variant="outlined" />
}

export default CustomizedInput