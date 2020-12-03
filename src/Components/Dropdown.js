import React, {Component, lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loading from "./Loading";

const Icon = lazy(() => import("./Icon"));

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || '',
            active: false,
        };
    }

    mouseOverHandler = e => {
        const {active} = this.state;

        if (active !== true) this.setState({active: true});
    };

    mouseLeaveHandler = e => {
        const active = false;

        this.setState({active});
    };

    clickHandler = e => {
        const {isChange} = this.props;

        if (!isChange) return;

        e.preventDefault();
        const {currentTarget} = e;
        const key = Number(currentTarget.attributes.getNamedItem('val').value);

        this.setValue(key);
    };

    setValue = key => {
        const {options, onChange} = this.props;
        const {value} = this.state;

        if (!isNaN(key) && value !== options[key]) {
            this.setState({
                value: options[key],
            });
            if (onChange) onChange(options[key]);
        }
    };

    render() {
        const {icon, options} = this.props;
        const {value, active} = this.state;

        return (
            <Suspense fallback={<Loading/>}>
                <div className={classNames('dropdown', icon || 'dropdown-noicon', !active || 'dropdown-active')} onMouseOver={this.mouseOverHandler} onMouseLeave={this.mouseLeaveHandler}>
                    <div className="dropdown__head">
                        <span className="dropdown__head-text">
                            {value}
                        </span>
                        <Icon iconName={'fas fa-caret-down'} className={'dropdown__head-dropdown-icon'} />
                    </div>
                    <div className="dropdown__wrap" style={active ? {opacity: 1, transform: 'scaleY(1)'} : {opacity: 0, transform: 'scaleY(0)'}}>
                        <div className="dropdown__wrap-body wrap-body">
                            {
                                options.map((v, k) => {
                                    return (<div key={k} className="dropdown__element" val={k} onClick={this.clickHandler}>{v}</div>);
                                })
                            }
                        </div>
                    </div>
                </div>
            </Suspense>
        );
    }
}

Dropdown.defaultProps = {
    isChange: true,
};

Dropdown.propTypes = {
    icon: PropTypes.element,
    value: PropTypes.any.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    isChange: PropTypes.bool,
};

export default Dropdown;
