import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <header>

                <div className="header header-main">
                    <div className="container-fluid container-accent">
                        <div className="container">
                            <div className="header__top">
                                <div className="header__social-block social-block blocks">
                                    <a href="#" className="social-block__link">
                                        <i className="fab fa-instagram social-block__icon"/>
                                    </a>
                                    <a href="#" className="social-block__link">
                                        <i className="fab fa-facebook-f social-block__icon"/>
                                    </a>
                                    <a href="#" className="social-block__link">
                                        <i className="fab fa-pinterest-p social-block__icon"/>
                                    </a>
                                </div>
                                <div className="header__currency-block currency-block blocks">
                                    <div className="currency-block__selector selector" tabIndex="-1">
                                        <div className="selector__head">
                                            <input className="selector__field" type="text" name="select-currency"/>
                                            <div className="selector__active">
                                                    RUB
                                            </div>
                                            <i className="fas fa-caret-down selector__icon"/>
                                        </div>
                                        <div className="selector__options">
                                            <div className="selector__body">
                                                <div className="option">USD</div>
                                                <div className="option">EUR</div>
                                                <div className="option selected">RUB</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header__region-block region-block blocks">
                                    <div className="region-block__selector selector" tabIndex="-1">
                                        <div className="selector__head">
                                            <input className="selector__field" type="text" name="select-currency"/>
                                            <div className="selector__active">
                                                    Русский
                                            </div>
                                            <i className="fas fa-caret-down selector__icon"/>
                                        </div>
                                        <div className="selector__options">
                                            <div className="selector__body">
                                                <div className="option selected">Русский</div>
                                                <div className="option">English</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="header__row">

                            <div className="header__logo-block logo-block blocks">
                                <div className="logo-block__logo">
                                    <a href="/">
                                        <img className="lazy" data-srcset="img/logo.svg" data-src="img/logo.svg"
                                            alt="UShop" draggable="false"/>
                                    </a>
                                </div>
                            </div>

                            <div className="header__search-block search-block blocks">
                                <div className="search__block-search search">
                                    <input className="search__input" type="text" name="search" placeholder="Поиск"/>
                                    <button className="search__button button" type="button">
                                        <i className="far fa-search search__button-icon"/>
                                    </button>
                                </div>
                            </div>

                            <div className="header__count-block count-block blocks">
                                <a href="#" className="count-block__row">
                                    <i className="fal fa-poll count-block__icon"/>
                                    <span className="count-block__title" aria-hidden="true">Cравнение</span>
                                    <span className="count-block__count">0</span>
                                </a>
                            </div>

                            <div className="header__count-block count-block blocks">
                                <a href="#" className="count-block__row">
                                    <i className="fal fa-heart count-block__icon"/>
                                    <span className="count-block__title" aria-hidden="true">Избранное</span>
                                    <span className="count-block__count">200</span>
                                </a>
                            </div>

                            <div className="header__count-block count-block blocks">
                                <a href="#" className="count-block__row">
                                    <i className="fal fa-shopping-cart count-block__icon"/>
                                    <span className="count-block__title">Корзина</span>
                                    <span className="count-block__count">99</span>
                                </a>
                            </div>

                            <div className="header__user-block user-block blocks">

                                <div className="user-block__row">
                                    <div className="user-block__action user-action">

                                        <div className="dropdown dropdown-noicon">
                                            <div className="dropdown__head">
                                                <span className="dropdown__head-text">
                                                    <a href="#" className="button">
                                                        <i className="fal fa-user button__icon user-action__icon"/>
                                                        <span className="user-action__name">мой кабинет</span>
                                                    </a>
                                                </span>
                                                <i className="fas fa-caret-down dropdown__head-dropdown-icon"/>
                                            </div>
                                            <div className="dropdown__wrap">
                                                <div className="dropdown__wrap-body wrap-body">
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <i className="fal fa-user button__icon"/>Мой кабинет</a></div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <i className="fal fa-luggage-cart button__icon"/>Текущие заказы</a>
                                                    </div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <i className="fal fa-file-invoice-dollar button__icon"/>Личный счет</a></div>
                                                    <div className="dropdown__element"><a className="button" href="#"><i className="fal fa-database button__icon"/>Личные данные</a>
                                                    </div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <i className="fal fa-key button__icon"/>Сменить пароль</a></div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <i className="fal fa-history button__icon"/>История заказов</a>
                                                    </div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <i className="fal fa-user-chart button__icon"/>Профили заказов</a></div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <i className="fal fa-shopping-cart button__icon"/>Корзина</a>
                                                    </div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <i className="fal fa-address-book button__icon"/>Контакты</a>
                                                    </div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <i className="fal fa-sign-out-alt button__icon"/>Выйти</a></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="header">
                    <div className="header__fixed">
                        <div className="container">
                            <div className="header__row">

                                <div className="header__mobile-menu mobile-menu" js-popup="popup__main-menu">
                                    <div className="mobile-menu__icon">
                                        <span/>
                                        <span/>
                                        <span/>
                                    </div>
                                </div>

                                {/*<div class="header__mobile-menu mobile-menu">*/}
                                {/*    <div class="mobile-menu__icon">*/}
                                {/*        <span></span>*/}
                                {/*        <span></span>*/}
                                {/*        <span></span>*/}
                                {/*    </div>*/}
                                {/*</div> */}

                                <div className="header__logo-block logo-block blocks">
                                    <div className="logo-block__logo">
                                        <a href="/">
                                            <img className="lazy" data-src="img/logo.svg" data-srcset="img/logo.svg"
                                                alt="UShop" draggable="false" />
                                        </a>
                                    </div>
                                </div>

                                <div className="header__search-block search-block blocks">
                                    <div className="search__block-search search">
                                        <input className="search__input" type="text" name="search" placeholder="Поиск"/>
                                        <button className="search__button button" type="button">
                                            <i className="far fa-search search__button-icon"/>
                                        </button>
                                    </div>
                                </div>

                                <div className="header__count-block count-block blocks">
                                    <a href="#" className="count-block__row">
                                        <i className="fal fa-poll count-block__icon"/>
                                        <span className="count-block__title" aria-hidden="true">Cравнение</span>
                                        <span className="count-block__count">0</span>
                                    </a>
                                </div>

                                <div className="header__count-block count-block blocks">
                                    <a href="#" className="count-block__row">
                                        <i className="fal fa-heart count-block__icon"/>
                                        <span className="count-block__title" aria-hidden="true">Избранное</span>
                                        <span className="count-block__count">200</span>
                                    </a>
                                </div>

                                <div className="header__count-block count-block blocks">
                                    <a href="#" className="count-block__row">
                                        <i className="fal fa-shopping-cart count-block__icon"/>
                                        <span className="count-block__title">Корзина</span>
                                        <span className="count-block__count">99</span>
                                    </a>
                                </div>

                                <div className="header__user-block user-block blocks">

                                    <div className="user-block__row">
                                        <div className="user-block__action user-action">

                                            <div className="dropdown dropdown-noicon">
                                                <div className="dropdown__head">
                                                    <span className="dropdown__head-text">
                                                        <a href="#" className="button" title="Мой кабинет">
                                                            <i className="fal fa-user button__icon user-action__icon"/>
                                                        </a>
                                                    </span>
                                                    <i className="fas fa-caret-down dropdown__head-dropdown-icon"/>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
