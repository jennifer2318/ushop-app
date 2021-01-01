import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import LazyImage from "./LazyImage";

class SliderBanner extends Component {

    constructor(props) {
        super(props);

        this.backgroundRef = React.createRef();
    }

    scrollHandler = e => {
        const backgroundRef = this.backgroundRef.current;
        const {backgroundImage} = this.props;

        if(backgroundRef && (backgroundRef.getBoundingClientRect().top <= window.innerHeight && backgroundRef.getBoundingClientRect().bottom >= 0) && getComputedStyle(backgroundRef).display !== "none") {
            backgroundRef.style.backgroundImage = `url(${backgroundImage})`;
            backgroundRef.classList.remove("lazy-background");
            document.removeEventListener('scroll', this.scrollHandler);
        }
    };

    componentDidMount() {
        document.addEventListener('scroll', this.scrollHandler);
        this.scrollHandler(null);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollHandler);
    }

    render() {
        const {backgroundImage, title, subtitle, action, content, image} = this.props;

        return (
            <div className="banner banner-main lazy-background"
                ref={this.backgroundRef}>
                <div className="container banner__container">
                    <div className="banner__content action-event">
                        {
                            subtitle ? <div className="action-event__subtitle">{subtitle}</div> : null
                        }
                        {
                            title ? <div className="action-event__title">{title}</div> : null
                        }
                        {
                            content ? <div className="action-event__content">{content}</div> : null
                        }
                        {
                            action ? <div className="action-event__action">{action}</div> : null
                        }
                    </div>
                    {
                        image ? <div className="banner__wrap"><div className="banner__image"><LazyImage src={image}/></div></div> : null
                    }
                </div>
            </div>
        );
    }
}

SliderBanner.propTypes = {
    backgroundImage: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.node,
    action: PropTypes.node,
    image: PropTypes.string,
};

export default SliderBanner;