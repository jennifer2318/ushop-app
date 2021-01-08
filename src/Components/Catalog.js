import React, {Component} from 'react';
import ProductItem from "./ProductItem";

class Catalog extends Component {
    render() {
        return (
            <div className="catalog" id="main_page_catalog">
                <div className="items catalog__items">
                    <div className="items__wrapper">
                        <ProductItem
                            title="Смартфон SY 15"
                            article="D98186A5"
                            priceValue="30 000"
                            priceCurrency="₽"
                            rating={4}
                            ratingCount={3}
                            url="/"
                            images={["assets/img/p1.1.jpg", "assets/img/p1.2.jpg", "assets/img/p1.3.jpg", "assets/img/p1.4.jpg"]}
                            topActions={[{name: 'Хит'}]}
                        />
                    </div>
                </div>
                <div className="catalog__actions">
                    <button className="button bordered-btn catalog__appendBtn" id="main_page_catalog_appendBtn">Загрузить еще</button>
                </div>
            </div>
        );
    }
}

export default Catalog;