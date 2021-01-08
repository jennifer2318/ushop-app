import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Icon from "./Icon";

class PopularCategoryItem extends Component {

    renderDescription = items => {
        return items.map((v, k) => {
            return (
                <Link key={k} to={v?.url} className="item__description-item button">
                    {v?.title}
                    {
                        k !== items.length-1 ? <span className="separator">—</span> : null
                    }
                </Link>
            );
        });
    };

    render() {
        const {
            icon,
            subCategoryItems,
            title,
            url
        } = this.props;

        return (
            <div className="item">
                <Link to={url} className="item__icon">
                    <Icon iconName={icon.iconName} iconType={icon.iconType} />
                </Link>
                <div className="item__content">
                    <Link to={url} className="item__title">{title}</Link>
                    <div className="item__description">
                        {
                            this.renderDescription(subCategoryItems)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

PopularCategoryItem.propTypes = {
    icon: PropTypes.shape({
        iconName: PropTypes.string.isRequired,
        iconType: PropTypes.string.isRequired
    }).isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subCategoryItems: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })),
};

export default PopularCategoryItem;
