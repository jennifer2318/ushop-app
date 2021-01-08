import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Icon from "./Icon";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import classNames from "classnames";

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isHovered: false,
            activeSubmenu: null,
            activeContent: 0,
        };
    }

    submenuOpenHandler = e => {
        const {currentTarget} = e;
        const id = currentTarget.dataset?.submenuid;

        if (id !== undefined) {
            this.setState({
                activeSubmenu: Number(id),
            });
        }
    };

    submenuContentChangeHandler = e => {
        const {currentTarget} = e;
        const id = currentTarget.dataset?.contentid;

        if (id !== undefined) {
            this.setState({
                activeContent: Number(id),
            });
        }
    };

    submenuCloseHandler = e => {
        this.setState({
            activeSubmenu: null
        });
    };

    render() {
        const {activeSubmenu, activeContent} = this.state;

        return (
            <nav className="menu main-menu" role="menubar">
                <ul className="menu__container">
                    <li className="menu__element menu__element-pos" data-submenuid={0} onMouseLeave={this.submenuCloseHandler} onMouseEnter={this.submenuOpenHandler}>
                        <Link className="menu__link button" to="#">
                            <Icon className="menu__link-icon" iconName='fas fa-th'/>
                            Каталог
                        </Link>
                        <div className={classNames("menu__submenu submenu catalog-submenu", activeSubmenu === 0 ? 'active' : '')}>
                            <div className="submenu__container">
                                <div className="submenu__content submenu__content-left">
                                    <ul>
                                        <li className="submenu__element" data-contentid="0" onMouseEnter={this.submenuContentChangeHandler}><Link className="submenu__link" to="#">Электроника <Icon className="submenu__icon" iconName="fas fa-caret-right"/></Link></li>
                                        <li className="submenu__element" data-contentid="1" onMouseEnter={this.submenuContentChangeHandler}><Link className="submenu__link" to="#">Транспорт <Icon className="submenu__icon" iconName="fas fa-caret-right"/></Link></li>
                                        <li className="submenu__element" data-contentid="2" onMouseEnter={this.submenuContentChangeHandler}><Link className="submenu__link" to="#">Мебель <Icon className="submenu__icon" iconName="fas fa-caret-right"/></Link></li>
                                        <li className="submenu__element" data-contentid="3" onMouseEnter={this.submenuContentChangeHandler}><Link className="submenu__link" to="#">Обувь <Icon className="submenu__icon" iconName="fas fa-caret-right"/></Link></li>
                                        <li className="submenu__element" data-contentid="4" onMouseEnter={this.submenuContentChangeHandler}><Link className="submenu__link" to="#">Одежда <Icon className="submenu__icon" iconName="fas fa-caret-right"/></Link></li>
                                    </ul>
                                </div>
                                <div className="submenu__content">
                                    <div className={classNames("submenu__content-item", activeContent === 0 ? 'active' : '')}>0</div>
                                    <div className={classNames("submenu__content-item", activeContent === 1 ? 'active' : '')}>1</div>
                                    <div className={classNames("submenu__content-item", activeContent === 2 ? 'active' : '')}>2</div>
                                    <div className={classNames("submenu__content-item", activeContent === 3 ? 'active' : '')}>3</div>
                                    <div className={classNames("submenu__content-item", activeContent === 4 ? 'active' : '')}>4</div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="menu__element"><Link className="menu__link button" to="#"><Icon className="menu__link-icon" iconName='fab fa-hotjar'/>Акции</Link></li>
                    <li className="menu__element"><Link className="menu__link button" to="#">Услуги</Link></li>
                    <li className="menu__element"><Link className="menu__link button" to="#">Блог</Link></li>
                    <li className="menu__element"><Link className="menu__link button" to="#">Бренды</Link></li>
                    <li className="menu__element"><Link className="menu__link button" to="#">Как купить</Link></li>
                    <li className="menu__element"><Link className="menu__link button" to="#">Компания</Link></li>
                    <li className="menu__element"><Link className="menu__link button" to="#">Контакты</Link></li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Menu));
