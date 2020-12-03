import React, {Component, lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const Icon = lazy(() => import("./Icon"));
import {Link} from "react-router-dom";
import Loading from "./Loading";

class CountBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || 0,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {onChange} = this.props;
        const {value} = this.state;

        if (onChange) onChange(value);
    }

    render() {
        const {className, name, href, icon} = this.props;
        const {value} = this.state;

        return (
            <Suspense fallback={<Loading/>}>
                <div className={classNames(className, 'count-block blocks')}>
                    <Link className="count-block__row" to={href}>
                        {icon || null}
                        <span className="count-block__title" aria-hidden="true">{name}</span>
                        <span className={classNames('count-block__count', value.toString().trim().length >= 3 ? 'count-block__count-big' : '')}>{value}</span>
                    </Link>
                </div>
            </Suspense>
        );
    }
}

CountBlock.defaultProps = {
    href: '/'
};

CountBlock.propTypes = {
    value: PropTypes.number,
    className: PropTypes.string,
    name: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.element,
    onChange: PropTypes.func,
};

export default CountBlock;
