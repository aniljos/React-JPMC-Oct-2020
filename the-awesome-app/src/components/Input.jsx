import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import { AppTheme } from '../context/AppTheme';

const Input = React.forwardRef((props, ref)=>{

    const theme = useContext(AppTheme);

    //console.log("props", props);
    const {label, type, ...otherProps} = props;
    //console.log("otherProps", otherProps);

    return (
        <div className="form-group">
            <label className={`${theme.type}-text`}>{label}</label>
            <input className="form-control" type={type} ref={ref} {...otherProps} />
        </div>

    )

})

export default Input;

Input.propTypes = {

    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "password", "email"]),
    value: PropTypes.string,
    onChange: PropTypes.func
}

Input.defaultProps = {
    type: "text"
}