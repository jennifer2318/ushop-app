import React, {Component, lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { withTranslation } from 'react-i18next';
const Section = lazy(() => import("../Section"));
import {Link} from "react-router-dom";
import Slider from "../Slider";
import LazyImage from "../LazyImage";
const Icon = lazy(() => import("../Icon"));

class Home extends Component {
    componentDidMount() {
    }

    render() {
        const { t } = this.props;

        return (
            <>
                <Section className={'main-menu-section'}>
                    <nav className="menu main-menu">
                        <ul className="menu__container">
                            <li className="menu__element"><Link className="menu__link button" to="#"><Icon className="menu__link-icon" iconName='fas fa-th'/>Каталог</Link></li>
                            <li className="menu__element"><Link className="menu__link button" to="#"><Icon className="menu__link-icon" iconName='fab fa-hotjar'/>Акции</Link></li>
                            <li className="menu__element"><Link className="menu__link button" to="#">Услуги</Link></li>
                            <li className="menu__element"><Link className="menu__link button" to="#">Блог</Link></li>
                            <li className="menu__element"><Link className="menu__link button" to="#">Бренды</Link></li>
                            <li className="menu__element"><Link className="menu__link button" to="#">Как купить</Link></li>
                            <li className="menu__element"><Link className="menu__link button" to="#">Компания</Link></li>
                            <li className="menu__element"><Link className="menu__link button" to="#">Контакты</Link></li>
                        </ul>
                    </nav>
                </Section>
                <Section className='section-slider' container='container-fluid'>
                    <Slider className='main-page-slider' type={'opacity'} auto={true} dots={true} options={[
                        <div className="banner banner-main lazy-background" style={{backgroundImage: 'url(/assets/img/0.2.jpg)'}}>
                            <div className="container banner__container">
                                <div className="banner__content action-event">
                                    <div className="action-event__subtitle">
                                        Электроника
                                    </div>
                                    <div className="action-event__title">
                                        Надежная техника
                                    </div>
                                    <div className="action-event__content">
                                        Смартфоны, игровые приставки, HD-телевизоры и аудиосистемы для технологичной
                                        жизни. Покупайте электронику в интернет-магазине по выгодным ценам: проводные
                                        наушники от 300 р.
                                    </div>
                                    <div className="action-event__action">
                                        <Link to="#" className="button btn-accent btn-catalog">перейти в каталог</Link>
                                    </div>
                                </div>
                                <div className="banner__wrap">
                                    <div className="banner__image">
                                        <LazyImage src={'/assets/img/0.1.png'}/>
                                    </div>
                                </div>
                            </div>
                        </div>,
                        <div className="banner banner-main lazy-background" style={{backgroundImage: 'url(/assets/img/1.1.jpg)'}}>
                            <div className="container banner__container">
                                <div className="banner__content action-event">
                                    <div className="action-event__subtitle">
                                        Транспорт
                                    </div>
                                    <div className="action-event__title">
                                        Мотоциклы
                                    </div>
                                    <div className="action-event__content">
                                        Стильный дизайн, отличная управляемость, литые диски и плавные линии притягивают
                                        взгляды. Почувствуйте полную свободу и будьте уверены на дороге. Выберите свой
                                        идеальный мотоцикл!
                                    </div>
                                    <div className="action-event__action">
                                        <Link to="#" className="button btn-accent btn-catalog">выбрать мотоцикл</Link>
                                    </div>
                                </div>
                                <div className="banner__wrap">
                                    <div className="banner__image">
                                        <LazyImage src={'/assets/img/1.2.png'}/>
                                    </div>
                                </div>
                            </div>
                        </div>,
                        <div className="banner banner-main lazy-background" style={{backgroundImage: 'url(/assets/img/2.2.jpg)'}}>
                            <div className="container banner__container">
                                <div className="banner__content action-event">
                                    <div className="action-event__subtitle">
                                        Одежда
                                    </div>
                                    <div className="action-event__title">
                                        Изящные образы <br/> на каждый день
                                    </div>
                                    <div className="action-event__content">
                                        Комфорт может притягивать взгляды и быть стильным. Подбирайте удобную одежду для
                                        повседневной жизни в каталоге: легкие платья, футболки с принтами или брюки для
                                        прогулок
                                    </div>
                                    <div className="action-event__action">
                                        <Link to="#" className="button btn-accent btn-catalog">женская одежда</Link>
                                        <Link to="#" className="button btn-catalog">аксессуары</Link>
                                    </div>
                                </div>
                                <div className="banner__wrap">
                                    <div className="banner__image">
                                        <LazyImage src={'/assets/img/2.1.png'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ]}/>
                </Section>
            </>
        );
    }
}

Home.propTypes = {};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Home));
