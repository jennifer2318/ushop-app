import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import axios from 'axios';

class Icon extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
        };

        this.svg = null;
    }

    getSvgIcon = async iconName => {
        return await axios.get(`/assets/svg/${iconName}.svg`).then(resp => {
            return resp.data;
        }).catch(err => {return null;});
    }

    async componentDidMount() {
        const {iconType, iconName} = this.props;

        if (iconType === 'svg') {
            const svg = await this.getSvgIcon(iconName);

            if (svg !== null) {
                this.svg = svg;
                this.setState({
                    isLoaded: true,
                });
            }
        }else {
            this.setState({
                isLoaded: true,
            });
        }
    }

    render() {
        const {iconType, iconName, className} = this.props;
        const {isLoaded} = this.state;

        if (!isLoaded) {
            return null;
        }

        switch (iconType) {
        case 'svg': {return (<i className={classNames('icon', iconName, className)} dangerouslySetInnerHTML={{__html: this.svg}}/>);}
        default: return (<i className={classNames('icon', iconName, className)}/>);
        }
    }
}

Icon.defaultProps = {
    iconName: 'fontawesome'
};

Icon.propTypes = {
    iconType: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Icon;
