import React, {Component, lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loading from "./Loading";

const Icon = lazy(() => import("./Icon"));

class Selector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || '',
            focused: false,
        };
    }

    focusHandler = e => {
        const focused = true;

        this.setState({focused});
    };

    blurHandler = e => {
        const focused = false;

        this.setState({focused});
    };

    clickHandler = e => {
        const {target} = e;
        const {value} = this.state;
        const {onChange} = this.props;

        const targetValue = target.innerText || '';

        if (value === targetValue) return;

        this.setState({
            value: targetValue,
        });

        onChange(targetValue);
    };

    render() {
        const {options, className} = this.props;
        const {value, focused} = this.state;

        if (!value || options.length <= 0) {
            return null;
        }

        return (
            <Suspense fallback={<Loading/>}>
                <div className={classNames(className, "selector", focused === true ? 'focused' : '')} tabIndex="-1" onFocus={this.focusHandler} onBlur={this.blurHandler}>
                    <div className="selector__head">
                        <div className="selector__active">
                            {
                                value
                            }
                        </div>
                        <Icon iconName={'fas fa-caret-down'} className={'selector__icon'} />
                    </div>
                    <div className="selector__options" style={focused === true ? {opacity: 1, transform: 'scaleY(1)'} : {opacity: 0, transform: 'scaleY(0)'}}>
                        <div className="selector__body">
                            {
                                options.map((v, k) => {
                                    return (
                                        <div key={k} onClick={this.clickHandler} className={classNames('option', value === v ? 'selected' : '')}>{v}</div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </Suspense>
        );
    }
}

Selector.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Selector;
