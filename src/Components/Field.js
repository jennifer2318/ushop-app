import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    validateEmail,
    validateInternationalPhone,
    validateNumber,
    validatePassword,
    validateString
} from "../Helpers/validator";

class Field extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || '',
            err: '',
            valid: false,
            locked: this.props.locked || false,
        };
    }

    changeHandler = e => {
        const {locked} = this.state;
        const {type, onChange, name} = this.props;
        const {target} = e;
        const targetValue = target.value;

        let validator = {valid: true, err: ''};

        switch (type) {
        case 'text': {
            validator = validateString(targetValue);
            break;
        }
        case 'password': {
            validator = validatePassword(targetValue);
            break;
        }
        case 'email': {
            validator = validateEmail(targetValue);
            break;
        }
        case 'tel': {
            validator = validateInternationalPhone(targetValue);
            break;
        }
        case 'number': {
            validator = validateNumber(targetValue);
            break;
        }
        }

        const {err, valid} = validator;

        if (!locked) {
            this.setState({
                value: targetValue,
                err,
                valid
            });
            if (valid || !targetValue) {
                onChange({name: name, value: targetValue});
            }
        }
    };

    render() {
        const {id, label, name, className, placeholder, icon, type, btn} = this.props;
        const {value, err, valid, locked} = this.state;

        return (
            <div className={classNames(className, 'input filed', valid !== true ? 'no-valid' : '', err ? 'has-error' : '', type === 'search' ? 'search' : '')} style={type === 'hidden' ? {display: 'none'} : {}}>
                {
                    label ? <label htmlFor={id}>{icon || null}{label}</label> : null
                }
                <div className='input__container'>
                    <input className={classNames(`${type}__input`)} readOnly={locked} type={type} name={name} placeholder={placeholder} onChange={this.changeHandler} value={value}/>
                    {btn || null}
                </div>
                {
                    err && type !== 'search' ? <p className='input__error'>{err}</p> : null
                }
            </div>
        );
    }
}

Field.defaultProps = {
    type: 'text',
};

Field.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.element,
    btn: PropTypes.element,
    id: PropTypes.string.isRequired,
    locked: PropTypes.bool,
};

export default Field;
