import React, {Component, lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { withTranslation } from 'react-i18next';
import {Link} from "react-router-dom";

const Section = lazy(() => import("../Section"));
const Icon = lazy(() => import("../Icon"));
const Slider = lazy(() => import("../Slider"));
const LazyImage = lazy(() => import("../LazyImage"));
const SliderBanner = lazy(() => import("../SliderBanner"));

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
                        <SliderBanner
                            backgroundImage='/assets/img/0.2.jpg'
                            subtitle='Электроника'
                            title='Электроника'
                            content='Смартфоны, игровые приставки, HD-телевизоры и аудиосистемы для технологичной
                                     жизни. Покупайте электронику в интернет-магазине по выгодным ценам: проводные
                                     наушники от 300 р.'
                            image='/assets/img/0.1.png'
                            action={<Link to="#" className="button btn-accent btn-catalog">перейти в каталог</Link>}
                        />,
                        <SliderBanner
                            backgroundImage='/assets/img/1.1.jpg'
                            subtitle='Транспорт'
                            title='Мотоциклы'
                            content='Стильный дизайн, отличная управляемость, литые диски и плавные линии притягивают
                                     взгляды. Почувствуйте полную свободу и будьте уверены на дороге. Выберите свой
                                     идеальный мотоцикл!'
                            image='/assets/img/1.2.png'
                            action={<Link to="#" className="button btn-accent btn-catalog">выбрать мотоцикл</Link>}
                        />,
                        <SliderBanner
                            backgroundImage='/assets/img/2.2.jpg'
                            subtitle='Одежда'
                            title={<>Изящные образы <br/> на каждый день</>}
                            content='Комфорт может притягивать взгляды и быть стильным. Подбирайте удобную одежду для
                                     повседневной жизни в каталоге: легкие платья, футболки с принтами или брюки для
                                     прогулок'
                            image='/assets/img/2.1.png'
                            action={<><Link to="#" className="button btn-accent btn-catalog">женская одежда</Link><Link to="#" className="button btn-catalog">аксессуары</Link></>}
                        />
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
