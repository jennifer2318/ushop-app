import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from "./Icon";
import Selector from "./Selector";
import CountBlock from "./CountBlock";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: 99,
            like: 200,
            poll: 0,
        };
    }


    render() {
        const {cart, like, poll} = this.state;

        return (
            <header>

                <div className="header header-main">
                    <div className="container-fluid container-accent">
                        <div className="container">
                            <div className="header__top">
                                <div className="header__social-block social-block blocks">
                                    <a href="#" className="social-block__link">
                                        <Icon iconName={'fab fa-instagram'} className={'social-block__icon'} />
                                    </a>
                                    <a href="#" className="social-block__link">
                                        <Icon iconName={'fab fa-facebook-f'} className={'social-block__icon'} />
                                    </a>
                                    <a href="#" className="social-block__link">
                                        <Icon iconName={'fab fa-pinterest-p'} className={'social-block__icon'} />
                                    </a>
                                </div>
                                <div className="header__currency-block currency-block blocks">
                                    <Selector className={'currency-block__selector'} value={'RUB'} options={['RUB', 'USD', 'EUR']} onChange={(v) => console.log(v)} />
                                </div>
                                <div className="header__region-block region-block blocks">
                                    <Selector className={'region-block__selector'} value={'Русский'} options={['Русский', 'English']} onChange={(v) => console.log(v)} />
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
                                        <Icon iconName={'far fa-search'} className={'search__button-icon'} />
                                    </button>
                                </div>
                            </div>

                            <CountBlock value={poll} name={'Сравнение'} className={'header__count-block'} icon={<Icon iconName={'fal fa-poll'} className={'count-block__icon'} />} />
                            <CountBlock value={like} name={'Избранное'} className={'header__count-block'} icon={<Icon iconName={'fal fa-heart'} className={'count-block__icon'} />} />
                            <CountBlock value={cart} name={'Корзина'} className={'header__count-block'} icon={<Icon iconName={'fal fa-shopping-cart'} className={'count-block__icon'} />} />

                            <div className="header__user-block user-block blocks">

                                <div className="user-block__row">
                                    <div className="user-block__action user-action">

                                        <div className="dropdown dropdown-noicon">
                                            <div className="dropdown__head">
                                                <span className="dropdown__head-text">
                                                    <a href="#" className="button">
                                                        <Icon iconName={'fal fa-user'} className={'button__icon user-action__icon'} />
                                                        <span className="user-action__name">мой кабинет</span>
                                                    </a>
                                                </span>
                                                <Icon iconName={'fas fa-caret-down'} className={'dropdown__head-dropdown-icon'} />
                                            </div>
                                            <div className="dropdown__wrap">
                                                <div className="dropdown__wrap-body wrap-body">
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <Icon iconName={'fal fa-user'} className={'button__icon'} />Мой кабинет</a></div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <Icon iconName={'fal fa-luggage-cart'} className={'button__icon'} />Текущие заказы</a>
                                                    </div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <Icon iconName={'fal fa-file-invoice-dollar'} className={'button__icon'} />Личный счет</a></div>
                                                    <div className="dropdown__element"><a className="button" href="#"><i className="fal fa-database button__icon"/>Личные данные</a>
                                                    </div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <Icon iconName={'fal fa-key'} className={'button__icon'} />Сменить пароль</a></div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <Icon iconName={'fal fa-history'} className={'button__icon'} />История заказов</a>
                                                    </div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <Icon iconName={'fal fa-user-chart'} className={'button__icon'} />Профили заказов</a></div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <Icon iconName={'fal fa-shopping-cart'} className={'button__icon'} />Корзина</a>
                                                    </div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <Icon iconName={'fal fa-address-book'} className={'button__icon'} />Контакты</a>
                                                    </div>
                                                    <div className="dropdown__element"><a className="button" href="#">
                                                        <Icon iconName={'fal fa-sign-out-alt'} className={'button__icon'} />Выйти</a></div>
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
                                            <Icon iconName={'far fa-search'} className={'search__button-icon'} />
                                        </button>
                                    </div>
                                </div>

                                <CountBlock value={poll} name={'Сравнение'} className={'header__count-block'} icon={<Icon iconName={'fal fa-poll'} className={'count-block__icon'} />} />
                                <CountBlock value={like} name={'Избранное'} className={'header__count-block'} icon={<Icon iconName={'fal fa-heart'} className={'count-block__icon'} />} />
                                <CountBlock value={cart} name={'Корзина'} className={'header__count-block'} icon={<Icon iconName={'fal fa-shopping-cart'} className={'count-block__icon'} />} />

                                <div className="header__user-block user-block blocks">

                                    <div className="user-block__row">
                                        <div className="user-block__action user-action">

                                            <div className="dropdown dropdown-noicon">
                                                <div className="dropdown__head">
                                                    <span className="dropdown__head-text">
                                                        <a href="#" className="button" title="Мой кабинет">
                                                            <Icon iconName={'fal fa-user'} className={'button__icon user-action__icon'} />
                                                        </a>
                                                    </span>
                                                    <Icon iconName={'fas fa-caret-down'} className={'dropdown__head-dropdown-icon'} />
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
