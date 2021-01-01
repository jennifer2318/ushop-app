import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from "./Icon";

class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: this.props.time,
            auto: this.props.auto,
            dots: this.props.dots,
            type: this.props.type,
            positions: [],
            activeItem: 0,
            interval: -1,
            isReverse: false,
            posX1: 0,
            posInit: 0,
            last: -1,
            animId1: -1,
            width: 0,
            posThreshold: 0,
            initId: -1,
        };

        this.containerRef = React.createRef();
    }

    componentDidMount() {
        const {auto} = this.state;
        const container = this.containerRef.current;

        if (container === null) return;

        const initId = setTimeout(() => {
            const width = container.getBoundingClientRect().width;

            container.addEventListener('touchstart', this.touchstartHandler, {passive: true});
            container.addEventListener('mousedown', this.touchstartHandler, {passive: true});

            if (auto) {
                this.interval();
            }

            this.setState({
                posThreshold: width * 0.15,
                width,
            },() => {
                this.calculatePositions(this.animateSlides);
            });
        });

        this.setState({initId});
    };

    componentWillUnmount() {
        const container = this.containerRef.current;

        clearTimeout(this.state.initId);
        clearInterval(this.state.interval);

        container.removeEventListener('touchstart', this.touchstartHandler);
        container.removeEventListener('mousedown', this.touchstartHandler);
        container.removeEventListener('touchmove', this.touchmoveHandler);
        container.removeEventListener('mousemove', this.touchmoveHandler);
        container.removeEventListener('touchend', this.touchendHandler);
        container.removeEventListener('mouseup', this.touchendHandler);
    }

    touchstartHandler = e => {
        const evt = this.getEvent(e);
        const container = this.containerRef.current;

        const posInit = evt.clientX;
        const posX1 = evt.clientX;

        container.addEventListener('touchmove', this.touchmoveHandler, {passive: true});
        container.addEventListener('mousemove', this.touchmoveHandler, {passive: true});

        container.addEventListener('touchend', this.touchendHandler, {passive: true});
        container.addEventListener('mouseup', this.touchendHandler, {passive: true});

        this.setState({posInit, posX1});
    };

    touchmoveHandler = e => {
        const {posX1, positions} = this.state;
        const {type} = this.props;
        const container = this.containerRef.current;
        const evt = this.getEvent(e);

        this.interval();

        const posX2 = posX1 - evt.clientX;
        const newPosX1 = evt.clientX;

        if (type === 'opacity') {
            this.setState({
                posX1: newPosX1,
                posX2
            });

            return;
        }

        const transform = +container.style.transform.match(/[-0-9.]+(?=px)/)[0];

        const pos2 = posX2 <= 0;

        if (pos2) {
            container.style.transform = `translate3d(${transform + -posX2}px, 0px, 0px)`;
        }else {
            container.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
        }

        if (transform > 400 || transform < (positions[positions.length-1] + -400)) {
            this.animateSlides();
        }

        this.setState({
            posX1: newPosX1,
            posX2
        });
    };

    touchendHandler = e => {
        const {posInit, posX1, posThreshold} = this.state;
        const container = this.containerRef.current;

        container.removeEventListener('touchmove', this.touchmoveHandler);
        container.removeEventListener('mousemove', this.touchmoveHandler);

        container.removeEventListener('touchend', this.touchendHandler);
        container.removeEventListener('mouseup', this.touchendHandler);

        const posFinal = posInit - posX1;

        if (Math.abs(posFinal) > posThreshold) {
            if (posInit < posX1) {
                this.prevSlideHandler();
            }else if (posInit > posX1) {
                this.nextSlideHandler();
            }
        }

        if (posInit !== posX1) {
            this.animateSlides();
        }
    };

    interval = () => {
        const {auto, time} = this.props;
        const {interval} = this.state;

        if (auto) {
            clearInterval(interval);
            const {isReverse} = this.state;

            const intervalId = setInterval(() => {
                if (!isReverse) {
                    this.nextSlideHandler(true);
                }else {
                    this.prevSlideHandler(true);
                }
            }, time);
            this.setState({interval: intervalId});
        }
    };

    calculatePositions = (callback = null) => {
        const {type, options} = this.props;
        const {width} = this.state;

        if (type === 'opacity') return;

        const positions = [];

        for (let i = 0; i < options.length; i++) {
            positions[i] = -(width * i);
        }

        this.setState({positions}, () => {callback === null || callback();});
    };

    animateSlides = (callback = null) => {
        const {type} = this.props;
        const {positions, activeItem} = this.state;
        const container = this.containerRef.current;

        this.interval();

        if (type === 'opacity') {
            return;
        }

        container.style.transform = `translate3d(${positions[activeItem]}px, 0px, 0px)`;
    };

    nextSlideHandler = (auto=false) => {
        const {activeItem} = this.state;
        const {options} = this.props;

        if (activeItem < options.length-1) {
            this.setSlide(activeItem + 1);
        }else if (auto) {
            this.setState({isReverse: true});
            this.prevSlideHandler();
        }
    };

    prevSlideHandler = (auto=false) => {
        const {activeItem} = this.state;

        if (activeItem > 0) {
            this.setSlide(activeItem - 1);
        }else if (auto) {
            this.setState({isReverse: false});
            this.nextSlideHandler();
        }
    };

    dotClickHandler = e => {
        e.preventDefault();
        const {currentTarget} = e;
        const key = Number(currentTarget.attributes.getNamedItem('val').value);

        if (!isNaN(key)) {
            this.setSlide(key);
        }
    };

    setSlide = (key) => {
        const {activeItem} = this.state;

        if (activeItem === key) return;

        this.setState({
            last: activeItem,
            activeItem: key,
        }, () => {this.animateSlides();});
    };

    getEvent = e => {
        return e.type.search('touch') !== -1 ? e.touches[0] : e;
    };

    getStyles = k => {
        const {type} = this.props;
        const {activeItem} = this.state;
        const styles = {};

        if (type === 'opacity') {
            Object.assign(styles,{opacity: 0, position: 'absolute', left: 0, top: 0});
        }

        if (type === 'opacity' && k === activeItem) {
            Object.assign(styles,{opacity: 1, position: 'relative'});
        }

        return styles;
    };

    render() {
        const {options, className, dots} = this.props;
        const {activeItem} = this.state;

        return (
            <div className={classNames('slider', className)}>
                <button className={classNames("slider__prev", activeItem !== 0 || 'disabled')} onClick={this.prevSlideHandler}><Icon className={'slider__prev-icon'} iconName={'far fa-chevron-left'} /></button>
                <div className="slider__container" ref={this.containerRef}>
                    {
                        options.map((v, k) => {
                            const style = this.getStyles(k);
                            return (<div style={style} className={classNames("slider-row", activeItem === k ? 'active' : '')} val={k} key={k}>{v}</div>);
                        })
                    }
                </div>
                <button className={classNames("slider__next", activeItem !== (options.length - 1) || 'disabled')} onClick={this.nextSlideHandler}><Icon className={'slider__next-icon'} iconName={'far fa-chevron-right'} /></button>
                {
                    dots ?
                        <div className="slider__dots">
                            {
                                options.map((v, k) => {
                                    return (<span onClick={this.dotClickHandler} key={k} val={k} className={classNames('slider__dots-dot', k === activeItem ? 'active' : '')}/>);
                                })
                            }
                        </div>
                        :
                        null
                }
            </div>
        );
    }
}

Slider.defaultProps = {
    type: 'slide',
    time: 8000,
    auto: false,
    dots: false,
};

Slider.propTypes = {
    options: PropTypes.array.isRequired,
    className: PropTypes.string,
    time: PropTypes.number,
    auto: PropTypes.bool,
    dots: PropTypes.bool,
    type: PropTypes.string,
};

export default Slider;
