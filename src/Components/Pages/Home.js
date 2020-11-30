import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { withTranslation } from 'react-i18next';

class Home extends Component {
    componentDidMount() {
    }

    render() {
        const { t } = this.props;

        return (
            <div>
                {t('label')}
            </div>
        );
    }
}

Home.propTypes = {};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Home));
