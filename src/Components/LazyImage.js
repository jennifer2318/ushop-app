import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LazyImage extends Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    scrollHandler = e => {
        const imageRef = this.imageRef.current;
        const {src} = this.props;

        if(imageRef && (imageRef.getBoundingClientRect().top <= window.innerHeight && imageRef.getBoundingClientRect().bottom >= 0) && getComputedStyle(imageRef).display !== "none") {
            imageRef.src = src;
            imageRef.classList.remove("lazy");
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
        const {alt, width, height} = this.props;

        return (
            <img width={width} height={height} className="lazy" ref={this.imageRef} title={alt} alt={alt} draggable="false"/>
        );
    }
}

LazyImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default LazyImage;
