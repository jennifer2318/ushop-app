import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Icon from "./Icon";
import LazyImage from "./LazyImage";
import classNames from "classnames";

class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeImage: 0,
        };

    }

    renderImages = images => {
        const {activeImage} = this.state;

        if (images === undefined) return null;

        return images.map((v, k) => {
            return (
                <span onMouseEnter={this.hoverImageHandler} data-imagekey={k} key={k} className={classNames("image-selector__item", activeImage === k ? "active" : '')}>
                    <span className="image-selector__item-nav"/>
                    <LazyImage src={v} />
                </span>
            );
        });
    };

    hoverImageHandler = e => {
        const target = e.currentTarget;

        const id = target.dataset?.imagekey;

        if (target && id !== undefined) {
            this.setState({
                activeImage: Number(id)
            });
        }
    };

    renderTopActions = topActions => {
        if (topActions === undefined) return null;

        return topActions.map((v, k) => {
            return (
                <span key={k} className="actions-top__action">{v?.name}</span>
            );
        });
    };

    renderRating = () => {
        const {rating} = this.props;

        const ceilRating = Math.ceil(rating);
        const ratingArr = [];

        for (let i = 1; i <= 5; i++) {
            ratingArr.push(
                <div key={i} className={classNames("info-rating__item", ceilRating >= i ? "filled" : "")}>
                    <Icon iconName="fas fa-star"/>
                </div>
            );
        }

        return (
            <div className="info-rating__wrapper" title={`Рейтинг ${ceilRating} из 5`}>
                {
                    ratingArr
                }
            </div>
        );
    };

    render() {
        const {
            images,
            priceCurrency,
            priceValue,
            ratingCount,
            title,
            topActions,
            url,
            article
        } = this.props;

        return (
            <div className="item product-item">
                <div className="item__content">
                    <div className="item__image-wapper">
                        <div className="item__actions-top actions-top">
                            {
                                this.renderTopActions(topActions)
                            }
                        </div>
                        <div className="item__icons-block icons-block">
                            <span title="Нравится" className="icons-block__item button">
                                <Icon iconName="far fa-heart"/>
                            </span>
                            <span title="Быстрый просмотр" className="icons-block__item button">
                                <Icon iconName="far fa-eye"/>
                            </span>
                        </div>
                        <Link to={url} className="item__thumb">
                            <div className="item__image-selector image-selector">
                                {
                                    this.renderImages(images)
                                }
                            </div>
                        </Link>
                    </div>
                    <div className="item__info">
                        <div className="item__info-rating info-rating">
                            {
                                this.renderRating()
                            }
                            <div className="info-rating__count">{ratingCount}</div>
                        </div>
                        <h4 className="item__title">
                            <Link to={url} className="item__title-link button">
                                <span>{title}</span>
                            </Link>
                        </h4>
                        {
                            article ? <div className="item__art"><span>Арт.: {article}</span></div> : null
                        }
                        <div className="item__price price">
                            <div className="price__value">{priceValue}</div>
                            <div className="price__currency">{priceCurrency}</div>
                        </div>
                    </div>
                </div>
                <div className="item__buttons">
                    <Link to={url} className="item__buttons-element button btn-accent">Подробнее</Link>
                </div>
            </div>
        );
    }
}

ProductItem.propTypes = {
    priceValue: PropTypes.string.isRequired,
    priceCurrency: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    article: PropTypes.string,
    topActions: PropTypes.array,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
};

export default withTranslation()(ProductItem);
