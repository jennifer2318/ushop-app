import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from "./Icon";
import Selector from "./Selector";
import CountBlock from "./CountBlock";
import Field from "./Field";
import {Link} from "react-router-dom";
import Dropdown from "./Dropdown";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: 99,
            like: 200,
            poll: 0,
        };

        this.headerFixed = React.createRef();
    }

    scrollHandler = e => {
        if (window.scrollY >= 300) {
            this.headerFixed.current.style.top = 0;
        }else {
            this.headerFixed.current.style.top = `-${Number(this.headerFixed.current.offsetHeight) + 100}px`;
        }
    };

    componentDidMount() {
        document.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollHandler);
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
                                    <Link to={'/'} className="social-block__link">
                                        <Icon iconName={'fab fa-instagram'} className={'social-block__icon'} />
                                    </Link>
                                    <Link to={'/'} className="social-block__link">
                                        <Icon iconName={'fab fa-facebook-f'} className={'social-block__icon'} />
                                    </Link>
                                    <Link to={'/'} className="social-block__link">
                                        <Icon iconName={'fab fa-pinterest-p'} className={'social-block__icon'} />
                                    </Link>
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
                                    <Link to={'/'}>
                                        <img className="lazy" data-srcset="img/logo.svg" data-src="img/logo.svg"
                                            alt="UShop" draggable="false"/>
                                    </Link>
                                </div>
                            </div>

                            <div className="header__search-block search-block blocks">
                                <Field type={'search'} className={'search__block-search'} placeholder={'Поиск'} onChange={(v) => console.log(v)} id={'search'} value={''} name={'search'} btn={
                                    <button className="search__button button" type="button">
                                        <Icon className={'search__button-icon'} iconName={'far fa-search'} />
                                    </button>} />
                            </div>

                            <CountBlock value={poll} name={'Сравнение'} className={'header__count-block'} icon={<Icon iconName={'fal fa-poll'} className={'count-block__icon'} />} />
                            <CountBlock value={like} name={'Избранное'} className={'header__count-block'} icon={<Icon iconName={'fal fa-heart'} className={'count-block__icon'} />} />
                            <CountBlock value={cart} name={'Корзина'} className={'header__count-block'} icon={<Icon iconName={'fal fa-shopping-cart'} className={'count-block__icon'} />} />

                            <div className="header__user-block user-block blocks">

                                <div className="user-block__row">
                                    <div className="user-block__action user-action">
                                        <Dropdown
                                            isChange={false}
                                            value={ <Link className="button" to={'/'}><Icon iconName={'fal fa-user'} className={'button__icon'} />Мой кабинет</Link>}
                                            options={[
                                                <Link className="button" to={'/'}><Icon iconName={'fal fa-user'} className={'button__icon'} />Мой кабинет</Link>,
                                                <Link className="button" to={'/'}><Icon iconName={'fal fa-luggage-cart'} className={'button__icon'} />Текущие заказы</Link>,
                                                <Link className="button" to={'/'}><Icon iconName={'fal fa-file-invoice-dollar'} className={'button__icon'} />Личный счет</Link>,
                                                <Link className="button" to={'/'}><Icon iconName={'fal fa-database'} className={'button__icon'}/>Личные данные</Link>,
                                                <Link className="button" to={'/'}><Icon iconName={'fal fa-key'} className={'button__icon'} />Сменить пароль</Link>,
                                                <Link className="button" to={'/'}><Icon iconName={'fal fa-history'} className={'button__icon'} />История заказов</Link>,
                                                <Link className="button" to={'/'}><Icon iconName={'fal fa-user-chart'} className={'button__icon'} />Профили заказов</Link>,
                                                <Link className="button" to={'/'}><Icon iconName={'fal fa-shopping-cart'} className={'button__icon'} />Корзина</Link>,
                                                <Link className="button" to={'/'}><Icon iconName={'fal fa-address-book'} className={'button__icon'} />Контакты</Link>,
                                                <Link className="button" to={'/'}><Icon iconName={'fal fa-sign-out-alt'} className={'button__icon'} />Выйти</Link>
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="header">
                    <div className="header__fixed" ref={this.headerFixed}>
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
                                        <Link to={'/'}>
                                            <img className="lazy" data-src="img/logo.svg" data-srcset="img/logo.svg"
                                                alt="UShop" draggable="false" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="header__search-block search-block blocks">
                                    <Field type={'search'} className={'search__block-search'} placeholder={'Поиск'} onChange={(v) => console.log(v)} id={'search'} value={''} name={'search'} btn={
                                        <button className="search__button button" type="button">
                                            <Icon className={'search__button-icon'} iconName={'far fa-search'} />
                                        </button>} />
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
                                                        <Link to={'/'} className="button" title="Мой кабинет">
                                                            <Icon iconName={'fal fa-user'} className={'button__icon user-action__icon'} />
                                                        </Link>
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
