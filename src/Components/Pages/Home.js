import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class Home extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

Home.propTypes = {};

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
