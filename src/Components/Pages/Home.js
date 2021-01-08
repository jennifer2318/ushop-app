import React, {Component, lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { withTranslation } from 'react-i18next';
import {Link} from "react-router-dom";

const Section = lazy(() => import("../Section"));
const Menu = lazy(() => import("../Menu"));
const ProductItem = lazy(() => import("../ProductItem"));
const Catalog = lazy(() => import("../Catalog"));
const PopularCategoryItem = lazy(() => import("../PopularCategoryItem"));
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
                    <Menu/>
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
                <Section className='section-items'>
                    <div className="items">
                        <div className="items__wrapper">
                            <div className="item">
                                <div className="item__icon"><Icon iconName='fal fa-shipping-fast'/></div>
                                <div className="item__content">
                                    <div className="item__title">Быстрая доставка</div>
                                    <div className="item__description">Бережно доставляем товары по России за 24 часа
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__icon"><Icon iconName='fal fa-comment-alt-lines'/></div>
                                <div className="item__content">
                                    <div className="item__title">Клиентский сервис</div>
                                    <div className="item__description">Отвечаем на вопросы покупателей в течение 10
                                        минут
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__icon"><Icon iconName='fal fa-gift'/></div>
                                <div className="item__content">
                                    <div className="item__title">Бонусы за покупки</div>
                                    <div className="item__description">Дарим подарки и скидки до 70% всем покупателям
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__icon"><Icon iconName='fal fa-file-certificate'/></div>
                                <div className="item__content">
                                    <div className="item__title">Гарантия качества</div>
                                    <div className="item__description">Соответствуем требованиям и стандартам качества
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__icon"><Icon iconName='fal fa-wallet'/></div>
                                <div className="item__content">
                                    <div className="item__title">Доступные цены</div>
                                    <div className="item__description">Работаем напрямую с ведущими производителями
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section
                    className='popular-categories-section'
                    sectionTop={
                        <>
                            <h3 className="section__title">Популярные категории</h3>
                            <Link to="#" className="button">Весь каталог</Link>
                        </>
                    }
                >
                    <div className="items categories-items">
                        <div className="items__wrapper">
                            <PopularCategoryItem
                                title="Электроника"
                                icon={{iconName: "electronic", iconType: 'svg'}}
                                url="/"
                                subCategoryItems={[
                                    {title: 'Телевизоры', url: '/'},
                                    {title: 'Аудиотехника', url: '/'},
                                    {title: 'Игры и приставки', url: '/'},
                                    {title: 'Телефоны', url: '/'},
                                ]}
                            />
                            <PopularCategoryItem
                                title="Мебель"
                                icon={{iconName: "furniture", iconType: 'svg'}}
                                url="/"
                                subCategoryItems={[
                                    {title: 'Диваны', url: '/'},
                                    {title: 'Шкафы', url: '/'},
                                    {title: 'Столы', url: '/'},
                                    {title: 'Стулья', url: '/'},
                                ]}
                            />
                            <PopularCategoryItem
                                title="Одежда"
                                icon={{iconName: "clothes", iconType: 'svg'}}
                                url="/"
                                subCategoryItems={[
                                    {title: 'Женская одежда', url: '/'},
                                    {title: 'Мужская одежда', url: '/'},
                                    {title: 'Одежда для подростков', url: '/'},
                                    {title: 'Одежда для новорожденных', url: '/'},
                                ]}
                            />
                            <PopularCategoryItem
                                title="Бижутерия и ювелирные изделия"
                                icon={{iconName: "jewelry", iconType: 'svg'}}
                                url="/"
                                subCategoryItems={[
                                    {title: 'Броши', url: '/'},
                                    {title: 'Серьги', url: '/'},
                                    {title: 'Браслеты', url: '/'},
                                ]}
                            />
                            <PopularCategoryItem
                                title="Сантехника"
                                icon={{iconName: "plumbing", iconType: 'svg'}}
                                url="/"
                                subCategoryItems={[
                                    {title: 'Ванны', url: '/'},
                                    {title: 'Душевые кабины', url: '/'},
                                    {title: 'Смесители', url: '/'},
                                    {title: 'Унитазы', url: '/'},
                                ]}
                            />
                            <PopularCategoryItem
                                title="Спортивные товары"
                                icon={{iconName: "sport-goods", iconType: 'svg'}}
                                url="/"
                                subCategoryItems={[
                                    {title: 'Мячи', url: '/'},
                                    {title: 'Экипировки', url: '/'},
                                    {title: 'Гантели', url: '/'},
                                ]}
                            />
                            <PopularCategoryItem
                                title="Освещение"
                                icon={{iconName: "lighting", iconType: 'svg'}}
                                url="/"
                                subCategoryItems={[
                                    {title: 'Люстры', url: '/'},
                                    {title: 'Светильники', url: '/'},
                                    {title: 'Фонари', url: '/'},
                                ]}
                            />
                            <PopularCategoryItem
                                title="Товары для дома"
                                icon={{iconName: "household", iconType: 'svg'}}
                                url="/"
                                subCategoryItems={[
                                    {title: 'Текстиль', url: '/'},
                                    {title: 'Декор', url: '/'},
                                    {title: 'Инвентарь', url: '/'},
                                ]}
                            />
                            <PopularCategoryItem
                                title="Часы"
                                icon={{iconName: "clocks", iconType: 'svg'}}
                                url="/"
                                subCategoryItems={[
                                    {title: 'Мужские часы', url: '/'},
                                    {title: 'Женские часы', url: '/'},
                                    {title: 'Детские часы', url: '/'},
                                ]}
                            />
                            <PopularCategoryItem
                                title="Строительные материалы"
                                icon={{iconName: "materials", iconType: 'svg'}}
                                url="/"
                                subCategoryItems={[
                                    {title: 'Обои', url: '/'},
                                    {title: 'Клеи', url: '/'},
                                ]}
                            />
                        </div>
                    </div>
                </Section>
                <Section
                    className="top-articles-section"
                    sectionTop={
                        <>
                            <h3 className="section__title">Лучшие предложения</h3>
                            <Link to="#" className="button">Весь каталог</Link>
                        </>
                    }
                >
                    <Catalog/>
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
