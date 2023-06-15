import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';


const CustomInput = ({ label, iconStart, iconEnd, ...props }) => {

    return (
        <>
            <TextField
                {...props}
                // {...field}
                // className={meta.touched && meta.error ? "input-error" : ''}
                InputProps={{
                    startAdornment: iconStart ? (
                        <InputAdornment position="start">{iconStart}</InputAdornment>
                    ) : null,
                    endAdornment: iconEnd ? (
                        <InputAdornment position="end">{iconEnd}</InputAdornment>
                    ) : null
                }}
            />
            {/* {meta.touched && meta.error ? (
                <div className="input-error">{meta.error}</div>
            ) : null} */}
        </>
    )
};
export default CustomInput;